import {firebaseConfig} from './firebase-config.js';
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
if (!firebaseConfig.apiKey || firebaseConfig.apiKey.includes('REEMPLAZAR')) {
  $('#setupPanel').classList.remove('hidden');
  $('#authPanel').classList.add('hidden');
} else {
  initializeConnect().catch(err=>{$('#setupPanel').classList.remove('hidden');$('#setupPanel').querySelector('p').textContent='No se pudo conectar a Firebase: '+(err.message||'error desconocido');$('#authPanel').classList.add('hidden');});
}
async function initializeConnect(){
  const [{initializeApp},{getAuth,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,updateProfile},{getFirestore,collection,doc,setDoc,getDoc,getDocs,addDoc,query,where,limit,orderBy,onSnapshot,updateDoc,deleteDoc,serverTimestamp},{getStorage,ref,uploadBytes,getDownloadURL}] = await Promise.all([
    import('https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'),
    import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js'),
    import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js'),
    import('https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js')
  ]);
  const firebaseApp=initializeApp(firebaseConfig), auth=getAuth(firebaseApp), db=getFirestore(firebaseApp), storage=getStorage(firebaseApp);
  let me=null, myProfile=null, friendships=[],friendProfiles=new Map(),selected=null,stop=[],stopChat=()=>{},mode='login',pendingCall=null,call=null,presenceTimer;
  const idPair=(a,b)=>[a,b].sort().join('_');
  const show=(el,visible)=>{(typeof el==='string'?$(el):el)?.classList.toggle('hidden',!visible)};
  const alertText=(text)=>{$('#notice').textContent=text;};
  const prettyError=(err)=>({'auth/email-already-in-use':'Ya existe una cuenta con ese correo.','auth/invalid-credential':'Correo o contraseña incorrectos.','auth/weak-password':'Utiliza una contraseña más segura.','permission-denied':'No tienes permisos para esa acción. Comprueba las reglas de Firebase.','storage/unauthorized':'Storage ha denegado el acceso. Comprueba sus reglas.'})[err.code]||String(err.message||err);
  const nicknameOk = str => /^[\p{L}\p{N}_ .-]{3,24}$/u.test(str);
  function avatar(profile){const str=profile?.avatarURL;if(typeof str==='string'&&str.startsWith('https://')&&str.includes('firebasestorage.googleapis.com'))return str;return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" rx="40" fill="#443b81"/><text x="40" y="52" text-anchor="middle" font-size="38">🎮</text></svg>');}
  const active = profile => profile?.isOnline&&profile?.lastSeen?.toMillis&&Date.now()-profile.lastSeen.toMillis()<85000;
  const roomRef = id => doc(db,'friendships',id);
  async function profile(uid){if(friendProfiles.has(uid))return friendProfiles.get(uid);const snap=await getDoc(doc(db,'users',uid));const data=snap.exists()?{id:uid,...snap.data()}:null;if(data)friendProfiles.set(uid,data);return data;}
  const noticeError=e=>alertText(prettyError(e));
  function userRow(other,secondary,buttons){const row=document.createElement('div');row.className='list-row';const img=document.createElement('img');img.src=avatar(other);img.alt='Avatar';const info=document.createElement('div');info.className='grow';const b=document.createElement('b');b.textContent=other?.nickname||'Jugador';const sm=document.createElement('small');sm.textContent=secondary;info.append(b,sm);row.append(img,info);for(const [label,act] of buttons){const bt=document.createElement('button');bt.textContent=label;bt.addEventListener('click',async()=>{try{await act()}catch(e){noticeError(e)}});row.append(bt);}return row;}
  function clearStops(){for(const f of stop.splice(0))try{f()}catch{}stopChat();stopChat=()=>{};if(presenceTimer)clearInterval(presenceTimer);endCall(false).catch(()=>{});selected=null;friendProfiles.clear();}
  function showTab(tab){$$('[data-panel]').forEach(el=>show(el,el.dataset.panel===tab));$$('[data-tab]').forEach(el=>el.classList.toggle('active',el.dataset.tab===tab));if(tab==='videos')loadVideos().catch(noticeError);}
  $$('[data-tab]').forEach(el=>el.addEventListener('click',()=>showTab(el.dataset.tab)));
  $('#authMode').onclick=()=>{mode=mode==='login'?'register':'login';$('#authTitle').textContent=mode==='login'?'Iniciar sesión':'Crear una cuenta';$('#authSubmit').textContent=mode==='login'?'Entrar':'Registrarme';$('#authMode').textContent=mode==='login'?'¿No tienes cuenta? Regístrate':'¿Ya tienes cuenta? Entra';show('#nicknameWrap',mode==='register');$('#nickname').required=mode==='register';$('#password').autocomplete=mode==='login'?'current-password':'new-password';};
  $('#authForm').addEventListener('submit',async e=>{e.preventDefault();$('#authError').textContent='Comprobando...';const email=$('#email').value.trim(),password=$('#password').value;try{
    if(mode==='register'){
      const name=$('#nickname').value.trim();if(!nicknameOk(name))throw Error('El apodo debe tener 3–24 caracteres, letras, números, guiones o espacios.');
      const cred=await createUserWithEmailAndPassword(auth,email,password);
      await setDoc(doc(db,'users',cred.user.uid),{nickname:name,nicknameLower:name.toLocaleLowerCase('es'),avatarURL:'',isOnline:true,lastSeen:serverTimestamp(),createdAt:serverTimestamp()});
      await updateProfile(cred.user,{displayName:name});myProfile={id:cred.user.uid,nickname:name,nicknameLower:name.toLocaleLowerCase('es'),avatarURL:''};renderProfile();
    }else await signInWithEmailAndPassword(auth,email,password);
    $('#authError').textContent='';
  }catch(err){$('#authError').textContent=prettyError(err);}});
  $('#signOut').onclick=async()=>{try{await updateDoc(doc(db,'users',me.uid),{isOnline:false,lastSeen:serverTimestamp()})}catch{}await signOut(auth)};
  onAuthStateChanged(auth,async u=>{clearStops();me=u;show('#authPanel',!u);show('#appPanel',!!u);$('#accountBadge').textContent=u?'Conectado':'No conectado';if(!u)return;
    try{const profileDoc=doc(db,'users',u.uid);let snap=await getDoc(profileDoc);if(!snap.exists()){
      const name=(u.displayName||'Jugador'+u.uid.slice(0,5)).slice(0,24);await setDoc(profileDoc,{nickname:name,nicknameLower:name.toLowerCase(),avatarURL:'',lastSeen:serverTimestamp(),isOnline:true,createdAt:serverTimestamp()});snap=await getDoc(profileDoc);
    }
    myProfile={id:u.uid,...snap.data()};renderProfile();showTab('profile');
    const updatePresence=()=>{if(document.visibilityState==='visible'&&me)updateDoc(profileDoc,{isOnline:true,lastSeen:serverTimestamp()}).catch(()=>{});};
    updatePresence();presenceTimer=setInterval(updatePresence,45000);document.addEventListener('visibilitychange',updatePresence);
    stop.push(()=>document.removeEventListener('visibilitychange',updatePresence));
    stop.push(onSnapshot(query(collection(db,'friendships'),where('members','array-contains',u.uid),limit(100)),async snapshot=>{
      friendships=snapshot.docs.map(d=>({id:d.id,...d.data()}));await renderRelationships();
    },noticeError));
    stop.push(onSnapshot(query(collection(db,'calls'),where('callee','==',u.uid),limit(10)),snapshot=>{
      const incoming=snapshot.docs.find(d=>d.data().caller!==u.uid&&d.data().status==='ringing');
      if(!incoming||call||pendingCall)return;pendingCall={id:incoming.id,...incoming.data()};
      profile(pendingCall.caller).then(user=>{$('#callerName').textContent='📞 Llamada de '+(user?.nickname||'un amigo')});show('#incomingCall',true);
    },noticeError));
  }catch(err){noticeError(err);}});
  function renderProfile(){if(!myProfile)return;$('#myAvatar').src=avatar(myProfile);$('#myName').textContent=myProfile.nickname;$('#myCode').textContent='Código de jugador: '+me.uid.slice(0,8);$('#editNickname').value=myProfile.nickname;$('#accountBadge').textContent='● '+myProfile.nickname;}
  $('#profileForm').addEventListener('submit',async e=>{e.preventDefault();if(!me)return;try{
    const name=$('#editNickname').value.trim();if(!nicknameOk(name))throw Error('Apodo no válido.');const f=$('#avatarUpload').files[0];let avatarURL=myProfile.avatarURL||'';
    if(f){if(!['image/jpeg','image/png','image/webp'].includes(f.type)||f.size>1024*1024)throw Error('La imagen debe ser JPG, PNG o WEBP y medir menos de 1 MB.');const fileRef=ref(storage,'avatars/'+me.uid+'/avatar.'+(f.type==='image/png'?'png':f.type==='image/webp'?'webp':'jpg'));await uploadBytes(fileRef,f,{contentType:f.type});avatarURL=await getDownloadURL(fileRef);}
    await updateDoc(doc(db,'users',me.uid),{nickname:name,nicknameLower:name.toLocaleLowerCase('es'),avatarURL});await updateProfile(auth.currentUser,{displayName:name});myProfile={...myProfile,nickname:name,nicknameLower:name.toLocaleLowerCase('es'),avatarURL};renderProfile();alertText('✅ Perfil guardado.');
  }catch(err){noticeError(err)}});
  function acceptedFriends(){return friendships.filter(f=>f.status==='accepted')}
  const otherId=f=>f.members.find(id=>id!==me.uid);
  async function renderRelationships(){
    const allIds=[...new Set(friendships.map(otherId))];await Promise.all(allIds.map(profile));
    const friends=acceptedFriends(),pending=friendships.filter(f=>f.status==='pending'&&f.requestedBy!==me.uid);
    $('#pendingCount').textContent=pending.length?`(${pending.length})`:'';
    const list=$('#friendsList');list.replaceChildren();if(!friends.length)list.textContent='Todavía no hay amigos aceptados.';
    const rail=$('#chatFriends');rail.replaceChildren();if(!friends.length)rail.textContent='Añade amigos para hablar.';
    for(const fr of friends){const other=friendProfiles.get(otherId(fr));if(!other)continue;const blocked=await isBlocked(other.id);if(blocked)continue;list.append(userRow(other,active(other)?'● Conectado':'○ Desconectado', [['Mensaje',()=>openChat(fr)]]));const btn=document.createElement('button');btn.textContent='💬 '+other.nickname;btn.addEventListener('click',()=>openChat(fr));rail.append(btn);}
    const req=$('#requestList');req.replaceChildren();if(!pending.length)req.textContent='No tienes solicitudes pendientes.';
    for(const fr of pending){const other=friendProfiles.get(otherId(fr));if(!other)continue;req.append(userRow(other,'Quiere añadirte a amigos', [['Aceptar',()=>updateDoc(roomRef(fr.id),{status:'accepted'})],['Rechazar',()=>deleteDoc(roomRef(fr.id))],['Bloquear',()=>blockUser(other.id)]]));}
  }
  $('#searchForm').addEventListener('submit',async e=>{e.preventDefault();if(!me)return;const name=$('#searchName').value.trim().toLocaleLowerCase('es');const el=$('#searchResults');el.textContent='Buscando...';try{
    if(name.length<3)throw Error('Escribe un apodo de al menos tres caracteres.');const docs=await getDocs(query(collection(db,'users'),where('nicknameLower','==',name),limit(10)));el.replaceChildren();if(docs.empty)el.textContent='No se encontraron usuarios con ese apodo.';
    for(const d of docs.docs){if(d.id===me.uid)continue;const other={id:d.id,...d.data()};if(await isBlocked(other.id))continue;friendProfiles.set(d.id,other);const id=idPair(me.uid,other.id);const existing=friendships.find(f=>f.id===id);
      el.append(userRow(other,'Código: '+d.id.slice(0,8),existing?[[existing.status==='accepted'?'Ya sois amigos':'Solicitud pendiente',()=>{}]]:[['Solicitar amistad',async()=>{await setDoc(roomRef(id),{members:[me.uid,other.id].sort(),requestedBy:me.uid,status:'pending',createdAt:serverTimestamp()});alertText('Solicitud enviada.')}}]));}
  }catch(err){noticeError(err);el.replaceChildren()}});
  async function isBlocked(uid){if(!me)return true;const [a,b]=await Promise.all([getDoc(doc(db,'blocks',me.uid,'targets',uid)),getDoc(doc(db,'blocks',uid,'targets',me.uid))]);return a.exists()||b.exists();}
  async function blockUser(uid){if(!confirm('¿Bloquear a este jugador? No podréis hablar ni llamaros.'))return;await setDoc(doc(db,'blocks',me.uid,'targets',uid),{createdAt:serverTimestamp()});const f=friendships.find(fr=>fr.id===idPair(me.uid,uid));if(f)await deleteDoc(roomRef(f.id));selected=null;stopChat();$('#chatWith').textContent='Amigo bloqueado';$('#messages').replaceChildren();$('#messageInput').disabled=true;$('#messageForm button').disabled=true;$('#callFriend').disabled=true;alertText('Usuario bloqueado.');}
  $('#blockFriend').onclick=()=>selected&&blockUser(otherId(selected)).catch(noticeError);
  async function report(targetId,kind){const reason=prompt('Motivo de la denuncia (sin publicar información personal):','Insultos o acoso');if(!reason)return;await addDoc(collection(db,'reports'),{reportedBy:me.uid,targetId,kind,reason:reason.slice(0,220),createdAt:serverTimestamp()});alertText('Denuncia enviada a revisión. También puedes bloquear al usuario.');}
  $('#reportFriend').onclick=()=>selected&&report(otherId(selected),'user').catch(noticeError);
  function openChat(fr){if(!me)return;selected=fr;showTab('chat');stopChat();const other=friendProfiles.get(otherId(fr));$('#chatWith').textContent='💬 '+(other?.nickname||'Amigo');$('#messageInput').disabled=false;$('#messageForm button').disabled=false;$('#callFriend').disabled=false;$('#blockFriend').disabled=false;$('#reportFriend').disabled=false;
    const messagesEl=$('#messages');messagesEl.replaceChildren();const q=query(collection(db,'conversations',fr.id,'messages'),orderBy('createdAt','asc'),limit(100));
    stopChat=onSnapshot(q,s=>{messagesEl.replaceChildren();if(s.empty)messagesEl.textContent='Aún no hay mensajes. ¡Saluda a tu amigo!';s.forEach(d=>{const msg=d.data();const div=document.createElement('div');div.className='message'+(msg.sender===me.uid?' mine':'');const label=document.createElement('small');label.textContent=msg.sender===me.uid?'Tú':other?.nickname||'Amigo';const body=document.createElement('span');body.textContent=msg.text;div.append(label,body);messagesEl.append(div);});messagesEl.scrollTop=messagesEl.scrollHeight;},noticeError);
  }
  $('#messageForm').addEventListener('submit',async e=>{e.preventDefault();if(!me||!selected)return;const text=$('#messageInput').value.trim();if(!text||text.length>1500)return;try{const uid=otherId(selected);if(await isBlocked(uid))throw Error('No puedes enviar mensajes a un usuario bloqueado.');await addDoc(collection(db,'conversations',selected.id,'messages'),{sender:me.uid,text,createdAt:serverTimestamp()});$('#messageInput').value='';}catch(err){noticeError(err)}});
  async function loadVideos(){const list=$('#videoFeed');if(!me)return;list.textContent='Cargando vídeos...';try{
    const [published,own]=await Promise.all([getDocs(query(collection(db,'videos'),where('status','==','approved'),limit(30))),getDocs(query(collection(db,'videos'),where('ownerId','==',me.uid),limit(30)))]);
    const combined=new Map();for(const s of [...published.docs,...own.docs])combined.set(s.id,{id:s.id,...s.data()});list.replaceChildren();
    if(!combined.size)list.textContent='Todavía no hay vídeos. ¡Sube uno para revisión!';
    [...combined.values()].sort((a,b)=>(b.createdAt?.toMillis?.()||0)-(a.createdAt?.toMillis?.()||0)).forEach(v=>{
      const card=document.createElement('article');card.className='video-card';
      if(v.status==='approved'||v.ownerId===me.uid){const video=document.createElement('video');video.controls=true;video.preload='metadata';video.playsInline=true;video.src=v.videoURL;card.append(video)}
      const name=document.createElement('strong');name.textContent=v.title;
      const small=document.createElement('p');small.textContent=(v.status==='approved'?'✅ Publicado':'⏳ Pendiente de revisión')+' · '+(v.description||'Sin descripción');card.append(name,small);
      const reportBtn=document.createElement('button');reportBtn.textContent='⚑ Denunciar';reportBtn.onclick=()=>report(v.id,'video').catch(noticeError);card.append(reportBtn);list.append(card);
    });
  }catch(err){noticeError(err);list.textContent='No se pudieron cargar los vídeos. Revisa las reglas de Firebase.'}}
  $('#videoForm').addEventListener('submit',async e=>{e.preventDefault();if(!me)return;const file=$('#videoUpload').files[0],title=$('#videoTitle').value.trim(),description=$('#videoDesc').value.trim();const output=$('#videoMessage');try{
    if(title.length<3||title.length>90)throw Error('El título debe tener entre 3 y 90 caracteres.');
    if(!file||!['video/mp4','video/webm'].includes(file.type)||file.size>35*1024*1024)throw Error('Solo vídeos MP4/WEBM de hasta 35 MB.');
    output.textContent='Subiendo archivo, puede tardar...';const videoId=crypto.randomUUID();const fileRef=ref(storage,`videos/${me.uid}/${videoId}/clip`);await uploadBytes(fileRef,file,{contentType:file.type});const videoURL=await getDownloadURL(fileRef);
    await setDoc(doc(db,'videos',videoId),{ownerId:me.uid,title,description,status:'pending',videoURL,path:fileRef.fullPath,createdAt:serverTimestamp()});output.textContent='✅ Subido. Aparecerá públicamente cuando lo apruebe el moderador.';$('#videoForm').reset();await loadVideos();
  }catch(err){output.textContent=prettyError(err)}});
  // Llamadas de voz: WebRTC. La señalización se guarda en Firestore. Algunas redes necesitan un TURN propio.
  function resetCallUI(){show('#activeCall',false);show('#incomingCall',false);$('#callStatus').textContent='Conectando...';pendingCall=null;}
  async function endCall(markEnded=true){if(!call){resetCallUI();return;}const old=call;call=null;try{old.unsubscribe?.forEach(u=>u());old.stream?.getTracks().forEach(t=>t.stop());old.peer?.close();$('#remoteAudio').srcObject=null;}catch{}if(markEnded)try{await updateDoc(doc(db,'calls',old.id),{status:'ended'})}catch{}resetCallUI();}
  async function setupPeer(callId,role,other){
    if(!navigator.mediaDevices?.getUserMedia)throw Error('El navegador no permite acceder al micrófono. Usa HTTPS y comprueba los permisos.');
    const stream=await navigator.mediaDevices.getUserMedia({audio:true,video:false});
    const peer=new RTCPeerConnection({iceServers:[{urls:'stun:stun.l.google.com:19302'}]});stream.getTracks().forEach(t=>peer.addTrack(t,stream));
    const unsub=[];call={id:callId,peer,stream,unsubscribe:unsub,role,signalReady:role==='callee',queuedCandidates:[]};
    peer.addEventListener('track',evt=>{$('#remoteAudio').srcObject=evt.streams[0]});
    peer.addEventListener('connectionstatechange',()=>{$('#callStatus').textContent=peer.connectionState==='connected'?'🟢 En llamada con '+(other?.nickname||'amigo'):peer.connectionState==='failed'?'No se ha podido conectar. Prueba otra red o finaliza.':'Estado: '+peer.connectionState;});
    peer.addEventListener('icecandidate',event=>{if(!event.candidate||!call||call.id!==callId)return;const place=role==='caller'?'callerCandidates':'calleeCandidates';const candidate=event.candidate.toJSON();if(!call.signalReady){call.queuedCandidates.push(candidate);return;}addDoc(collection(db,'calls',callId,place),candidate).catch(noticeError)});
    const remotePlace=role==='caller'?'calleeCandidates':'callerCandidates';unsub.push(onSnapshot(collection(db,'calls',callId,remotePlace),snap=>snap.docChanges().forEach(change=>{if(change.type==='added')peer.addIceCandidate(new RTCIceCandidate(change.doc.data())).catch(()=>{})})));
    unsub.push(onSnapshot(doc(db,'calls',callId),snap=>{if(snap.exists()&&snap.data().status==='ended')endCall(false).catch(()=>{})}));
    show('#activeCall',true);$('#callStatus').textContent='Esperando conexión...';return peer;
  }
  $('#callFriend').onclick=async()=>{if(!me||!selected||call)return;let callId=null;try{
    const other=otherId(selected);if(await isBlocked(other))throw Error('Usuario bloqueado.');callId=crypto.randomUUID();const peer=await setupPeer(callId,'caller',friendProfiles.get(other));const offer=await peer.createOffer();await peer.setLocalDescription(offer);
    await setDoc(doc(db,'calls',callId),{caller:me.uid,callee:other,participants:[me.uid,other].sort(),friendshipId:selected.id,offer:{type:offer.type,sdp:offer.sdp},status:'ringing',createdAt:serverTimestamp()});
    call.signalReady=true;for(const candidate of call.queuedCandidates.splice(0))await addDoc(collection(db,'calls',callId,'callerCandidates'),candidate);
    call.unsubscribe.push(onSnapshot(doc(db,'calls',callId),async s=>{const d=s.data();if(d?.answer&&peer.signalingState==='have-local-offer')await peer.setRemoteDescription(new RTCSessionDescription(d.answer));if(d?.status==='rejected')endCall(false).catch(()=>{})}));
  }catch(err){noticeError(err);await endCall(false)}};
  $('#acceptCall').onclick=async()=>{if(!pendingCall||call)return;const incoming=pendingCall;show('#incomingCall',false);try{
    if(!friendships.some(f=>f.id===incoming.friendshipId&&f.status==='accepted')||await isBlocked(incoming.caller))throw Error('Solo puedes recibir llamadas de amigos aceptados.');
    const peer=await setupPeer(incoming.id,'callee',friendProfiles.get(incoming.caller));await peer.setRemoteDescription(new RTCSessionDescription(incoming.offer));const answer=await peer.createAnswer();await peer.setLocalDescription(answer);await updateDoc(doc(db,'calls',incoming.id),{answer:{type:answer.type,sdp:answer.sdp},status:'active'});pendingCall=null;
  }catch(err){noticeError(err);await endCall(false)}};
  $('#rejectCall').onclick=async()=>{if(!pendingCall)return;const id=pendingCall.id;pendingCall=null;show('#incomingCall',false);try{await updateDoc(doc(db,'calls',id),{status:'rejected'})}catch(e){noticeError(e)}};
  $('#hangup').onclick=()=>endCall(true).catch(noticeError);
  window.addEventListener('pagehide',()=>{if(call)endCall(true).catch(()=>{});});
}
