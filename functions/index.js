'use strict';
/** IVANGUYS NEXUS Backend: economia virtual sin dinero, apuestas ni azar de pago.
 * Firebase Functions v2: no desplegado automaticamente por GitHub Pages.
 * Auditoria: auth -> validacion -> transaccion -> idempotencia -> control de abuso.
 */
const {onCall,HttpsError}=require('firebase-functions/v2/https');
const admin=require('firebase-admin');
const crypto=require('node:crypto');
if(!admin.apps.length)admin.initializeApp();
const db=admin.firestore();
const REG='europe-west1',LIMIT_POINTS=5000000;
const specs={
 'aura-violet':120,'aura-cyan':120,'aura-sun':180,'trail-ice':170,'trail-comet':220,
 'trail-pixel':170,'banner-stars':90,'banner-forest':90,'banner-arcade':150,
 'badge-sun':130,'badge-moon':130,'badge-heart':100,'badge-owl':220,
 'skin-neon':220,'skin-orbit':260,'emote-dance':150,'emote-wave':80,
 'emote-clap':90,'aura-emerald':200,'aura-galaxy':300,'banner-rainbow':260,'badge-crown':350
};
const caps={basic:['banner-stars','banner-forest','badge-heart'],neon:['aura-violet','aura-cyan','trail-pixel'],epic:['aura-galaxy','skin-orbit','badge-crown']};
const missions={welcome:35,daily:15,first_friend:95,first_approved_game:140,collector:70};
function auth(req){const u=req.auth?.uid;if(!u||u.length>128)throw new HttpsError('unauthenticated','Inicia sesion para utilizar esta funcion.');return u;}
function string(v,re,max=100){if(typeof v!=='string'||v.length>max||!re.test(v))throw new HttpsError('invalid-argument','Dato no valido.');return v;}
function number(v,min,max){if(!Number.isSafeInteger(v)||v<min||v>max)throw new HttpsError('invalid-argument','Cantidad fuera de rango.');return v;}
function fail(s){throw new HttpsError('failed-precondition',s);}
const userDoc=u=>db.doc('nexus_wallets/'+u);
const itemDoc=id=>db.doc('nexus_items/'+id);
const listingDoc=id=>db.doc('nexus_listings/'+id);
function balance(data){const p=data?.points||0;return Number.isSafeInteger(p)&&p>=0&&p<=LIMIT_POINTS?p:0;}
function capsuleCount(data,id){const x=data?.capsules?.[id]||0;return Number.isSafeInteger(x)&&x>=0&&x<100?x:0;}
function wallet(data){return data||{points:0,capsules:{basic:2,neon:0,epic:0},trades:0};}
async function throttle(uid,action,cap=14){const minute=Math.floor(Date.now()/60000);const ref=db.doc('nexus_limits/'+uid+'_'+action+'_'+minute);await db.runTransaction(async tx=>{const s=await tx.get(ref);const n=(s.data()?.n||0)+1;if(n>cap)throw new HttpsError('resource-exhausted','Demasiadas peticiones. Espera un minuto.');tx.set(ref,{n,createdAt:admin.firestore.FieldValue.serverTimestamp()});});}
function audit(uid,action,details={}){return db.collection('nexus_audit').add({uid,action,details,createdAt:admin.firestore.FieldValue.serverTimestamp()}).catch(()=>{});}
const endpoint=fn=>onCall({region:REG,maxInstances:10,timeoutSeconds:30},async(req)=>{const uid=auth(req);await throttle(uid,fn.name||'action');return fn(uid,req.data||{});});
exports.nexusGetState=endpoint(async function getState(uid){const snapshot=await userDoc(uid).get();const[wItems,wOffers,offers]=await Promise.all([
 db.collection('nexus_items').where('ownerId','==',uid).limit(75).get(),
 db.collection('nexus_listings').where('sellerId','==',uid).limit(20).get(),
 db.collection('nexus_listings').where('status','==','active').limit(50).get()]);
 return{wallet:wallet(snapshot.data()),items:wItems.docs.map(d=>({id:d.id,...d.data()})),mine:wOffers.docs.map(d=>({id:d.id,...d.data()})),market:offers.docs.map(d=>({id:d.id,...d.data()}))};});
exports.nexusClaimMission=endpoint(async function claim(uid,data){const mission=string(data.mission,/^(welcome|daily|first_friend|first_approved_game|collector)$/,40);
 let evidence=false;
 if(mission==='welcome'||mission==='daily')evidence=true;
 if(mission==='first_friend'){const fs=await db.collection('friendships').where('members','array-contains',uid).limit(100).get();evidence=fs.docs.some(d=>d.data().status==='accepted');}
 if(mission==='first_approved_game'){const s=await db.collection('ugc_games').where('ownerId','==',uid).limit(30).get();evidence=s.docs.some(d=>d.data().status==='approved');}
 if(mission==='collector'){const s=await db.collection('nexus_items').where('ownerId','==',uid).limit(10).get();evidence=!s.empty;}
 if(!evidence)fail('Esta mision aun no esta verificada en el servidor.');
 const suffix=mission==='daily'?'_'+new Date().toISOString().slice(0,10):'';
 const claimRef=db.doc('nexus_claims/'+uid+'_'+mission+suffix),wRef=userDoc(uid);
 const result=await db.runTransaction(async tx=>{const [old,existing]=await Promise.all([tx.get(wRef),tx.get(claimRef)]);if(existing.exists)fail('Recompensa ya reclamada.');const w=wallet(old.data()),points=balance(w)+missions[mission];if(points>LIMIT_POINTS)fail('Limite de puntos alcanzado.');const granted={...w,points};if(mission==='first_approved_game')granted.capsules={...w.capsules,neon:Math.min(99,capsuleCount(w,'neon')+1)};
 tx.set(wRef,granted);tx.create(claimRef,{uid,mission,at:admin.firestore.FieldValue.serverTimestamp(),points:missions[mission]});return{points,awarded:missions[mission]};});await audit(uid,'claim',{mission});return result;});
exports.nexusBuyCosmetic=endpoint(async function purchase(uid,data){const sku=string(data.item,/^[a-z0-9-]{3,40}$/,45);const price=specs[sku];if(!price)throw new HttpsError('not-found','Cosmetico no disponible.');const instance=crypto.randomUUID(),ref=userDoc(uid);
 const response=await db.runTransaction(async tx=>{const snap=await tx.get(ref),w=wallet(snap.data());if(balance(w)<price)fail('Puntos insuficientes.');tx.set(ref,{...w,points:balance(w)-price});tx.create(itemDoc(instance),{sku,ownerId:uid,state:'owned',acquiredAt:admin.firestore.FieldValue.serverTimestamp()});return{itemId:instance,remaining:balance(w)-price};});await audit(uid,'purchase',{sku});return response;});
exports.nexusOpenCapsule=endpoint(async function choose(uid,data){const capsule=string(data.capsule,/^(basic|neon|epic)$/,12),sku=string(data.item,/^[a-z0-9-]{3,40}$/,45);if(!caps[capsule].includes(sku))throw new HttpsError('invalid-argument','Selecciona una recompensa incluida en la capsula.');const instance=crypto.randomUUID(),ref=userDoc(uid);
 const result=await db.runTransaction(async tx=>{const snap=await tx.get(ref),w=wallet(snap.data()),n=capsuleCount(w,capsule);if(n<1)fail('No tienes capsulas de este tipo.');tx.set(ref,{...w,capsules:{...w.capsules,[capsule]:n-1}});tx.create(itemDoc(instance),{sku,ownerId:uid,state:'owned',acquiredAt:admin.firestore.FieldValue.serverTimestamp(),capsule});return{itemId:instance,sku};});await audit(uid,'capsule',{capsule,sku});return result;});
exports.nexusListItem=endpoint(async function listing(uid,data){const id=string(data.itemId,/^[0-9a-f-]{36}$/,40),price=number(data.price,1,100000),listingId=crypto.randomUUID();const existing=await db.collection('nexus_listings').where('sellerId','==',uid).limit(30).get();if(existing.docs.filter(d=>d.data().status==='active').length>=12)fail('Demasiadas ofertas activas.');
 await db.runTransaction(async tx=>{const ref=itemDoc(id),s=await tx.get(ref),i=s.data();if(!s.exists||i.ownerId!==uid||i.state!=='owned')fail('El objeto no esta disponible.');tx.update(ref,{state:'listed',listingId});tx.create(listingDoc(listingId),{itemId:id,sku:i.sku,sellerId:uid,price,status:'active',createdAt:admin.firestore.FieldValue.serverTimestamp()});});await audit(uid,'list',{listingId,price});return{listingId};});
exports.nexusCancelListing=endpoint(async function cancel(uid,data){const id=string(data.listingId,/^[0-9a-f-]{36}$/,40);await db.runTransaction(async tx=>{const lref=listingDoc(id),s=await tx.get(lref);if(!s.exists||s.data().status!=='active'||s.data().sellerId!==uid)fail('Oferta no disponible.');const iref=itemDoc(s.data().itemId),i=await tx.get(iref);if(!i.exists||i.data().state!=='listed'||i.data().ownerId!==uid)fail('Estado del objeto no valido.');tx.update(lref,{status:'cancelled'});tx.update(iref,{state:'owned',listingId:admin.firestore.FieldValue.delete()});});await audit(uid,'cancel',{id});return{ok:true};});
exports.nexusBuyListing=endpoint(async function buy(uid,data){const id=string(data.listingId,/^[0-9a-f-]{36}$/,40);let seller='';let price=0;
 const result=await db.runTransaction(async tx=>{const lref=listingDoc(id),ls=await tx.get(lref);if(!ls.exists||ls.data().status!=='active')fail('Oferta ya no disponible.');const l=ls.data();if(l.sellerId===uid)fail('No puedes comprar tu propia oferta.');seller=l.sellerId;price=l.price;const buyer=userDoc(uid),sellerRef=userDoc(seller),itemRef=itemDoc(l.itemId);
 const[bs,ss,it]=await Promise.all([tx.get(buyer),tx.get(sellerRef),tx.get(itemRef)]);const bw=wallet(bs.data()),sw=wallet(ss.data());if(!it.exists||it.data().ownerId!==seller||it.data().state!=='listed'||it.data().listingId!==id)fail('Objeto invalido.');if(!Number.isSafeInteger(price)||price<1||price>100000||balance(bw)<price)fail('Puntos insuficientes.');if(balance(sw)+price>LIMIT_POINTS)fail('El vendedor alcanzo el limite de puntos.');
 tx.set(buyer,{...bw,points:balance(bw)-price,trades:(bw.trades||0)+1});tx.set(sellerRef,{...sw,points:balance(sw)+price,trades:(sw.trades||0)+1});tx.update(itemRef,{ownerId:uid,state:'owned',listingId:admin.firestore.FieldValue.delete()});tx.update(lref,{status:'sold',buyerId:uid,soldAt:admin.firestore.FieldValue.serverTimestamp()});tx.create(db.collection('nexus_trades').doc(),{buyerId:uid,sellerId:seller,itemId:l.itemId,listingId:id,sku:l.sku,price,createdAt:admin.firestore.FieldValue.serverTimestamp()});return{ok:true,sku:l.sku,remaining:balance(bw)-price};});await audit(uid,'buy_market',{id,seller,price});return result;});
