import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
var _globalExport;
(function () {
  var l = {};
  (function (a) {
    function c() {}
    a.inherit = function (a, n) {
      c.prototype = n.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
    };
    a.generateCallback = function (a, c) {
      return function () {
        c.apply(a, arguments);
      };
    };
    a.NVector = function (a) {
      void 0 === a && (a = 0);
      for (var c = Array(a || 0), p = 0; p < a; ++p) c[p] = 0;
      return c;
    };
    a.is = function (a, c) {
      return null === a ? !1 : c instanceof Function && a instanceof c || void 0 != a.constructor.__implements && a.constructor.__implements[c] ? !0 : !1;
    };
    a.parseUInt = function (a) {
      return Math.abs(parseInt(a));
    };
  })(l);
  var F = Array,
    N = l.NVector;
  "undefined" === typeof l && (l = {});
  "undefined" === typeof l.Collision && (l.Collision = {});
  "undefined" === typeof l.Collision.Shapes && (l.Collision.Shapes = {});
  "undefined" === typeof l.Common && (l.Common = {});
  "undefined" === typeof l.Common.Math && (l.Common.Math = {});
  "undefined" === typeof l.Dynamics && (l.Dynamics = {});
  "undefined" === typeof l.Dynamics.Contacts && (l.Dynamics.Contacts = {});
  "undefined" === typeof l.Dynamics.Controllers && (l.Dynamics.Controllers = {});
  "undefined" === typeof l.Dynamics.Joints && (l.Dynamics.Joints = {});
  (function () {
    function a() {
      a.b2AABB.apply(this, arguments);
    }
    function c() {
      c.b2Bound.apply(this, arguments);
    }
    function q() {
      q.b2BoundValues.apply(this, arguments);
      this.constructor === q && this.b2BoundValues.apply(this, arguments);
    }
    function n() {
      n.b2Collision.apply(this, arguments);
    }
    function p() {
      p.b2ContactID.apply(this, arguments);
      this.constructor === p && this.b2ContactID.apply(this, arguments);
    }
    function g() {
      g.b2ContactPoint.apply(this, arguments);
    }
    function x() {
      x.b2Distance.apply(this, arguments);
    }
    function m() {
      m.b2DistanceInput.apply(this, arguments);
    }
    function u() {
      u.b2DistanceOutput.apply(this, arguments);
    }
    function O() {
      O.b2DistanceProxy.apply(this, arguments);
    }
    function L() {
      L.b2DynamicTree.apply(this, arguments);
      this.constructor === L && this.b2DynamicTree.apply(this, arguments);
    }
    function z() {
      z.b2DynamicTreeBroadPhase.apply(this, arguments);
    }
    function B() {
      B.b2DynamicTreeNode.apply(this, arguments);
    }
    function y() {
      y.b2DynamicTreePair.apply(this, arguments);
    }
    function S() {
      S.b2Manifold.apply(this, arguments);
      this.constructor === S && this.b2Manifold.apply(this, arguments);
    }
    function T() {
      T.b2ManifoldPoint.apply(this, arguments);
      this.constructor === T && this.b2ManifoldPoint.apply(this, arguments);
    }
    function d() {
      d.b2Point.apply(this, arguments);
    }
    function I() {
      I.b2RayCastInput.apply(this, arguments);
      this.constructor === I && this.b2RayCastInput.apply(this, arguments);
    }
    function H() {
      H.b2RayCastOutput.apply(this, arguments);
    }
    function R() {
      R.b2Segment.apply(this, arguments);
    }
    function G() {
      G.b2SeparationFunction.apply(this, arguments);
    }
    function P() {
      P.b2Simplex.apply(this, arguments);
      this.constructor === P && this.b2Simplex.apply(this, arguments);
    }
    function C() {
      C.b2SimplexCache.apply(this, arguments);
    }
    function V() {
      V.b2SimplexVertex.apply(this, arguments);
    }
    function J() {
      J.b2TimeOfImpact.apply(this, arguments);
    }
    function M() {
      M.b2TOIInput.apply(this, arguments);
    }
    function W() {
      W.b2WorldManifold.apply(this, arguments);
      this.constructor === W && this.b2WorldManifold.apply(this, arguments);
    }
    function Q() {
      Q.ClipVertex.apply(this, arguments);
    }
    function e() {
      e.Features.apply(this, arguments);
    }
    function k() {
      k.b2CircleShape.apply(this, arguments);
      this.constructor === k && this.b2CircleShape.apply(this, arguments);
    }
    function D() {
      D.b2EdgeChainDef.apply(this, arguments);
      this.constructor === D && this.b2EdgeChainDef.apply(this, arguments);
    }
    function f() {
      f.b2EdgeShape.apply(this, arguments);
      this.constructor === f && this.b2EdgeShape.apply(this, arguments);
    }
    function w() {
      w.b2MassData.apply(this, arguments);
    }
    function A() {
      A.b2PolygonShape.apply(this, arguments);
      this.constructor === A && this.b2PolygonShape.apply(this, arguments);
    }
    function K() {
      K.b2Shape.apply(this, arguments);
      this.constructor === K && this.b2Shape.apply(this, arguments);
    }
    function b() {
      b.b2Color.apply(this, arguments);
      this.constructor === b && this.b2Color.apply(this, arguments);
    }
    function h() {
      h.b2Settings.apply(this, arguments);
    }
    function t() {
      t.b2Mat22.apply(this, arguments);
      this.constructor === t && this.b2Mat22.apply(this, arguments);
    }
    function r() {
      r.b2Mat33.apply(this, arguments);
      this.constructor === r && this.b2Mat33.apply(this, arguments);
    }
    function v() {
      v.b2Math.apply(this, arguments);
    }
    function E() {
      E.b2Sweep.apply(this, arguments);
    }
    function da() {
      da.b2Transform.apply(this, arguments);
      this.constructor === da && this.b2Transform.apply(this, arguments);
    }
    function ea() {
      ea.b2Vec2.apply(this, arguments);
      this.constructor === ea && this.b2Vec2.apply(this, arguments);
    }
    function fa() {
      fa.b2Vec3.apply(this, arguments);
      this.constructor === fa && this.b2Vec3.apply(this, arguments);
    }
    function ha() {
      ha.b2Body.apply(this, arguments);
      this.constructor === ha && this.b2Body.apply(this, arguments);
    }
    function ia() {
      ia.b2BodyDef.apply(this, arguments);
      this.constructor === ia && this.b2BodyDef.apply(this, arguments);
    }
    function Qa() {
      Qa.b2ContactFilter.apply(this, arguments);
    }
    function Ra() {
      Ra.b2ContactImpulse.apply(this, arguments);
    }
    function Sa() {
      Sa.b2ContactListener.apply(this, arguments);
    }
    function ja() {
      ja.b2ContactManager.apply(this, arguments);
      this.constructor === ja && this.b2ContactManager.apply(this, arguments);
    }
    function ka() {
      ka.b2DebugDraw.apply(this, arguments);
      this.constructor === ka && this.b2DebugDraw.apply(this, arguments);
    }
    function Ta() {
      Ta.b2DestructionListener.apply(this, arguments);
    }
    function Ua() {
      Ua.b2FilterData.apply(this, arguments);
    }
    function la() {
      la.b2Fixture.apply(this, arguments);
      this.constructor === la && this.b2Fixture.apply(this, arguments);
    }
    function ma() {
      ma.b2FixtureDef.apply(this, arguments);
      this.constructor === ma && this.b2FixtureDef.apply(this, arguments);
    }
    function na() {
      na.b2Island.apply(this, arguments);
      this.constructor === na && this.b2Island.apply(this, arguments);
    }
    function Va() {
      Va.b2TimeStep.apply(this, arguments);
    }
    function oa() {
      oa.b2World.apply(this, arguments);
      this.constructor === oa && this.b2World.apply(this, arguments);
    }
    function Wa() {
      Wa.b2CircleContact.apply(this, arguments);
    }
    function pa() {
      pa.b2Contact.apply(this, arguments);
      this.constructor === pa && this.b2Contact.apply(this, arguments);
    }
    function qa() {
      qa.b2ContactConstraint.apply(this, arguments);
      this.constructor === qa && this.b2ContactConstraint.apply(this, arguments);
    }
    function Xa() {
      Xa.b2ContactConstraintPoint.apply(this, arguments);
    }
    function Ya() {
      Ya.b2ContactEdge.apply(this, arguments);
    }
    function ra() {
      ra.b2ContactFactory.apply(this, arguments);
      this.constructor === ra && this.b2ContactFactory.apply(this, arguments);
    }
    function Za() {
      Za.b2ContactRegister.apply(this, arguments);
    }
    function $a() {
      $a.b2ContactResult.apply(this, arguments);
    }
    function sa() {
      sa.b2ContactSolver.apply(this, arguments);
      this.constructor === sa && this.b2ContactSolver.apply(this, arguments);
    }
    function ab() {
      ab.b2EdgeAndCircleContact.apply(this, arguments);
    }
    function ta() {
      ta.b2NullContact.apply(this, arguments);
      this.constructor === ta && this.b2NullContact.apply(this, arguments);
    }
    function bb() {
      bb.b2PolyAndCircleContact.apply(this, arguments);
    }
    function cb() {
      cb.b2PolyAndEdgeContact.apply(this, arguments);
    }
    function db() {
      db.b2PolygonContact.apply(this, arguments);
    }
    function ua() {
      ua.b2PositionSolverManifold.apply(this, arguments);
      this.constructor === ua && this.b2PositionSolverManifold.apply(this, arguments);
    }
    function eb() {
      eb.b2BuoyancyController.apply(this, arguments);
    }
    function fb() {
      fb.b2ConstantAccelController.apply(this, arguments);
    }
    function gb() {
      gb.b2ConstantForceController.apply(this, arguments);
    }
    function hb() {
      hb.b2Controller.apply(this, arguments);
    }
    function ib() {
      ib.b2ControllerEdge.apply(this, arguments);
    }
    function jb() {
      jb.b2GravityController.apply(this, arguments);
    }
    function kb() {
      kb.b2TensorDampingController.apply(this, arguments);
    }
    function va() {
      va.b2DistanceJoint.apply(this, arguments);
      this.constructor === va && this.b2DistanceJoint.apply(this, arguments);
    }
    function wa() {
      wa.b2DistanceJointDef.apply(this, arguments);
      this.constructor === wa && this.b2DistanceJointDef.apply(this, arguments);
    }
    function xa() {
      xa.b2FrictionJoint.apply(this, arguments);
      this.constructor === xa && this.b2FrictionJoint.apply(this, arguments);
    }
    function ya() {
      ya.b2FrictionJointDef.apply(this, arguments);
      this.constructor === ya && this.b2FrictionJointDef.apply(this, arguments);
    }
    function za() {
      za.b2GearJoint.apply(this, arguments);
      this.constructor === za && this.b2GearJoint.apply(this, arguments);
    }
    function Aa() {
      Aa.b2GearJointDef.apply(this, arguments);
      this.constructor === Aa && this.b2GearJointDef.apply(this, arguments);
    }
    function lb() {
      lb.b2Jacobian.apply(this, arguments);
    }
    function Ba() {
      Ba.b2Joint.apply(this, arguments);
      this.constructor === Ba && this.b2Joint.apply(this, arguments);
    }
    function Ca() {
      Ca.b2JointDef.apply(this, arguments);
      this.constructor === Ca && this.b2JointDef.apply(this, arguments);
    }
    function mb() {
      mb.b2JointEdge.apply(this, arguments);
    }
    function Da() {
      Da.b2LineJoint.apply(this, arguments);
      this.constructor === Da && this.b2LineJoint.apply(this, arguments);
    }
    function Ea() {
      Ea.b2LineJointDef.apply(this, arguments);
      this.constructor === Ea && this.b2LineJointDef.apply(this, arguments);
    }
    function Fa() {
      Fa.b2MouseJoint.apply(this, arguments);
      this.constructor === Fa && this.b2MouseJoint.apply(this, arguments);
    }
    function Ga() {
      Ga.b2MouseJointDef.apply(this, arguments);
      this.constructor === Ga && this.b2MouseJointDef.apply(this, arguments);
    }
    function Ha() {
      Ha.b2PrismaticJoint.apply(this, arguments);
      this.constructor === Ha && this.b2PrismaticJoint.apply(this, arguments);
    }
    function Ia() {
      Ia.b2PrismaticJointDef.apply(this, arguments);
      this.constructor === Ia && this.b2PrismaticJointDef.apply(this, arguments);
    }
    function Ja() {
      Ja.b2PulleyJoint.apply(this, arguments);
      this.constructor === Ja && this.b2PulleyJoint.apply(this, arguments);
    }
    function Ka() {
      Ka.b2PulleyJointDef.apply(this, arguments);
      this.constructor === Ka && this.b2PulleyJointDef.apply(this, arguments);
    }
    function La() {
      La.b2RevoluteJoint.apply(this, arguments);
      this.constructor === La && this.b2RevoluteJoint.apply(this, arguments);
    }
    function Ma() {
      Ma.b2RevoluteJointDef.apply(this, arguments);
      this.constructor === Ma && this.b2RevoluteJointDef.apply(this, arguments);
    }
    function Na() {
      Na.b2WeldJoint.apply(this, arguments);
      this.constructor === Na && this.b2WeldJoint.apply(this, arguments);
    }
    function Oa() {
      Oa.b2WeldJointDef.apply(this, arguments);
      this.constructor === Oa && this.b2WeldJointDef.apply(this, arguments);
    }
    l.Collision.IBroadPhase = "Box2D.Collision.IBroadPhase";
    l.Collision.b2AABB = a;
    l.Collision.b2Bound = c;
    l.Collision.b2BoundValues = q;
    l.Collision.b2Collision = n;
    l.Collision.b2ContactID = p;
    l.Collision.b2ContactPoint = g;
    l.Collision.b2Distance = x;
    l.Collision.b2DistanceInput = m;
    l.Collision.b2DistanceOutput = u;
    l.Collision.b2DistanceProxy = O;
    l.Collision.b2DynamicTree = L;
    l.Collision.b2DynamicTreeBroadPhase = z;
    l.Collision.b2DynamicTreeNode = B;
    l.Collision.b2DynamicTreePair = y;
    l.Collision.b2Manifold = S;
    l.Collision.b2ManifoldPoint = T;
    l.Collision.b2Point = d;
    l.Collision.b2RayCastInput = I;
    l.Collision.b2RayCastOutput = H;
    l.Collision.b2Segment = R;
    l.Collision.b2SeparationFunction = G;
    l.Collision.b2Simplex = P;
    l.Collision.b2SimplexCache = C;
    l.Collision.b2SimplexVertex = V;
    l.Collision.b2TimeOfImpact = J;
    l.Collision.b2TOIInput = M;
    l.Collision.b2WorldManifold = W;
    l.Collision.ClipVertex = Q;
    l.Collision.Features = e;
    l.Collision.Shapes.b2CircleShape = k;
    l.Collision.Shapes.b2EdgeChainDef = D;
    l.Collision.Shapes.b2EdgeShape = f;
    l.Collision.Shapes.b2MassData = w;
    l.Collision.Shapes.b2PolygonShape = A;
    l.Collision.Shapes.b2Shape = K;
    l.Common.b2internal = "Box2D.Common.b2internal";
    l.Common.b2Color = b;
    l.Common.b2Settings = h;
    l.Common.Math.b2Mat22 = t;
    l.Common.Math.b2Mat33 = r;
    l.Common.Math.b2Math = v;
    l.Common.Math.b2Sweep = E;
    l.Common.Math.b2Transform = da;
    l.Common.Math.b2Vec2 = ea;
    l.Common.Math.b2Vec3 = fa;
    l.Dynamics.b2Body = ha;
    l.Dynamics.b2BodyDef = ia;
    l.Dynamics.b2ContactFilter = Qa;
    l.Dynamics.b2ContactImpulse = Ra;
    l.Dynamics.b2ContactListener = Sa;
    l.Dynamics.b2ContactManager = ja;
    l.Dynamics.b2DebugDraw = ka;
    l.Dynamics.b2DestructionListener = Ta;
    l.Dynamics.b2FilterData = Ua;
    l.Dynamics.b2Fixture = la;
    l.Dynamics.b2FixtureDef = ma;
    l.Dynamics.b2Island = na;
    l.Dynamics.b2TimeStep = Va;
    l.Dynamics.b2World = oa;
    l.Dynamics.Contacts.b2CircleContact = Wa;
    l.Dynamics.Contacts.b2Contact = pa;
    l.Dynamics.Contacts.b2ContactConstraint = qa;
    l.Dynamics.Contacts.b2ContactConstraintPoint = Xa;
    l.Dynamics.Contacts.b2ContactEdge = Ya;
    l.Dynamics.Contacts.b2ContactFactory = ra;
    l.Dynamics.Contacts.b2ContactRegister = Za;
    l.Dynamics.Contacts.b2ContactResult = $a;
    l.Dynamics.Contacts.b2ContactSolver = sa;
    l.Dynamics.Contacts.b2EdgeAndCircleContact = ab;
    l.Dynamics.Contacts.b2NullContact = ta;
    l.Dynamics.Contacts.b2PolyAndCircleContact = bb;
    l.Dynamics.Contacts.b2PolyAndEdgeContact = cb;
    l.Dynamics.Contacts.b2PolygonContact = db;
    l.Dynamics.Contacts.b2PositionSolverManifold = ua;
    l.Dynamics.Controllers.b2BuoyancyController = eb;
    l.Dynamics.Controllers.b2ConstantAccelController = fb;
    l.Dynamics.Controllers.b2ConstantForceController = gb;
    l.Dynamics.Controllers.b2Controller = hb;
    l.Dynamics.Controllers.b2ControllerEdge = ib;
    l.Dynamics.Controllers.b2GravityController = jb;
    l.Dynamics.Controllers.b2TensorDampingController = kb;
    l.Dynamics.Joints.b2DistanceJoint = va;
    l.Dynamics.Joints.b2DistanceJointDef = wa;
    l.Dynamics.Joints.b2FrictionJoint = xa;
    l.Dynamics.Joints.b2FrictionJointDef = ya;
    l.Dynamics.Joints.b2GearJoint = za;
    l.Dynamics.Joints.b2GearJointDef = Aa;
    l.Dynamics.Joints.b2Jacobian = lb;
    l.Dynamics.Joints.b2Joint = Ba;
    l.Dynamics.Joints.b2JointDef = Ca;
    l.Dynamics.Joints.b2JointEdge = mb;
    l.Dynamics.Joints.b2LineJoint = Da;
    l.Dynamics.Joints.b2LineJointDef = Ea;
    l.Dynamics.Joints.b2MouseJoint = Fa;
    l.Dynamics.Joints.b2MouseJointDef = Ga;
    l.Dynamics.Joints.b2PrismaticJoint = Ha;
    l.Dynamics.Joints.b2PrismaticJointDef = Ia;
    l.Dynamics.Joints.b2PulleyJoint = Ja;
    l.Dynamics.Joints.b2PulleyJointDef = Ka;
    l.Dynamics.Joints.b2RevoluteJoint = La;
    l.Dynamics.Joints.b2RevoluteJointDef = Ma;
    l.Dynamics.Joints.b2WeldJoint = Na;
    l.Dynamics.Joints.b2WeldJointDef = Oa;
  })();
  l.postDefs = [];
  (function () {
    var a = l.Collision.Shapes.b2CircleShape,
      c = l.Collision.Shapes.b2PolygonShape,
      q = l.Collision.Shapes.b2Shape,
      n = l.Common.b2Settings,
      p = l.Common.Math.b2Math,
      g = l.Common.Math.b2Sweep,
      x = l.Common.Math.b2Transform,
      m = l.Common.Math.b2Vec2,
      u = l.Collision.b2AABB,
      O = l.Collision.b2Bound,
      L = l.Collision.b2BoundValues,
      z = l.Collision.b2Collision,
      B = l.Collision.b2ContactID,
      y = l.Collision.b2ContactPoint,
      S = l.Collision.b2Distance,
      T = l.Collision.b2DistanceInput,
      d = l.Collision.b2DistanceOutput,
      I = l.Collision.b2DistanceProxy,
      H = l.Collision.b2DynamicTree,
      R = l.Collision.b2DynamicTreeBroadPhase,
      G = l.Collision.b2DynamicTreeNode,
      P = l.Collision.b2DynamicTreePair,
      C = l.Collision.b2Manifold,
      V = l.Collision.b2ManifoldPoint,
      J = l.Collision.b2Point,
      M = l.Collision.b2RayCastInput,
      W = l.Collision.b2RayCastOutput,
      Q = l.Collision.b2Segment,
      e = l.Collision.b2SeparationFunction,
      k = l.Collision.b2Simplex,
      D = l.Collision.b2SimplexCache,
      f = l.Collision.b2SimplexVertex,
      w = l.Collision.b2TimeOfImpact,
      A = l.Collision.b2TOIInput,
      K = l.Collision.b2WorldManifold,
      b = l.Collision.ClipVertex,
      h = l.Collision.Features,
      t = l.Collision.IBroadPhase;
    u.b2AABB = function () {
      this.lowerBound = new m();
      this.upperBound = new m();
    };
    u.prototype.IsValid = function () {
      var b = this.upperBound.y - this.lowerBound.y;
      return 0 <= this.upperBound.x - this.lowerBound.x && 0 <= b && this.lowerBound.IsValid() && this.upperBound.IsValid();
    };
    u.prototype.GetCenter = function () {
      return new m((this.lowerBound.x + this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2);
    };
    u.prototype.GetExtents = function () {
      return new m((this.upperBound.x - this.lowerBound.x) / 2, (this.upperBound.y - this.lowerBound.y) / 2);
    };
    u.prototype.Contains = function (b) {
      return this.lowerBound.x <= b.lowerBound.x && this.lowerBound.y <= b.lowerBound.y && b.upperBound.x <= this.upperBound.x && b.upperBound.y <= this.upperBound.y;
    };
    u.prototype.RayCast = function (b, h) {
      var r = -Number.MAX_VALUE,
        e = Number.MAX_VALUE,
        v = h.p1.x,
        k = h.p1.y,
        t = h.p2.x - h.p1.x;
      h = h.p2.y - h.p1.y;
      var f = Math.abs(h),
        d = b.normal;
      if (Math.abs(t) < Number.MIN_VALUE) {
        if (v < this.lowerBound.x || this.upperBound.x < v) return !1;
      } else {
        var w = 1 / t;
        t = (this.lowerBound.x - v) * w;
        v = (this.upperBound.x - v) * w;
        w = -1;
        t > v && (w = t, t = v, v = w, w = 1);
        t > r && (d.x = w, d.y = 0, r = t);
        e = Math.min(e, v);
        if (r > e) return !1;
      }
      if (f < Number.MIN_VALUE) {
        if (k < this.lowerBound.y || this.upperBound.y < k) return !1;
      } else if (w = 1 / h, t = (this.lowerBound.y - k) * w, v = (this.upperBound.y - k) * w, w = -1, t > v && (w = t, t = v, v = w, w = 1), t > r && (d.y = w, d.x = 0, r = t), e = Math.min(e, v), r > e) return !1;
      b.fraction = r;
      return !0;
    };
    u.prototype.TestOverlap = function (b) {
      var r = b.lowerBound.y - this.upperBound.y,
        h = this.lowerBound.y - b.upperBound.y;
      return 0 < b.lowerBound.x - this.upperBound.x || 0 < r || 0 < this.lowerBound.x - b.upperBound.x || 0 < h ? !1 : !0;
    };
    u.Combine = function (b, h) {
      var r = new u();
      r.Combine(b, h);
      return r;
    };
    u.prototype.Combine = function (b, h) {
      this.lowerBound.x = Math.min(b.lowerBound.x, h.lowerBound.x);
      this.lowerBound.y = Math.min(b.lowerBound.y, h.lowerBound.y);
      this.upperBound.x = Math.max(b.upperBound.x, h.upperBound.x);
      this.upperBound.y = Math.max(b.upperBound.y, h.upperBound.y);
    };
    O.b2Bound = function () {};
    O.prototype.IsLower = function () {
      return 0 == (this.value & 1);
    };
    O.prototype.IsUpper = function () {
      return 1 == (this.value & 1);
    };
    O.prototype.Swap = function (b) {
      var r = this.value,
        h = this.proxy,
        e = this.stabbingCount;
      this.value = b.value;
      this.proxy = b.proxy;
      this.stabbingCount = b.stabbingCount;
      b.value = r;
      b.proxy = h;
      b.stabbingCount = e;
    };
    L.b2BoundValues = function () {};
    L.prototype.b2BoundValues = function () {
      this.lowerValues = new N();
      this.lowerValues[0] = 0;
      this.lowerValues[1] = 0;
      this.upperValues = new N();
      this.upperValues[0] = 0;
      this.upperValues[1] = 0;
    };
    z.b2Collision = function () {};
    z.ClipSegmentToLine = function (b, h, e, t) {
      void 0 === t && (t = 0);
      var r = 0;
      var v = h[0];
      var k = v.v;
      v = h[1];
      var E = v.v,
        f = e.x * k.x + e.y * k.y - t;
      v = e.x * E.x + e.y * E.y - t;
      0 >= f && b[r++].Set(h[0]);
      0 >= v && b[r++].Set(h[1]);
      0 > f * v && (e = f / (f - v), v = b[r], v = v.v, v.x = k.x + e * (E.x - k.x), v.y = k.y + e * (E.y - k.y), v = b[r], v.id = (0 < f ? h[0] : h[1]).id, ++r);
      return r;
    };
    z.EdgeSeparation = function (b, h, e, k, t) {
      void 0 === e && (e = 0);
      parseInt(b.m_vertexCount);
      var r = b.m_vertices,
        v = b.m_normals;
      b = parseInt(k.m_vertexCount);
      k = k.m_vertices;
      var E = h.R;
      var f = v[e];
      v = E.col1.x * f.x + E.col2.x * f.y;
      var w = E.col1.y * f.x + E.col2.y * f.y;
      E = t.R;
      var d = E.col1.x * v + E.col1.y * w;
      E = E.col2.x * v + E.col2.y * w;
      for (var a = 0, A = Number.MAX_VALUE, m = 0; m < b; ++m) f = k[m], f = f.x * d + f.y * E, f < A && (A = f, a = m);
      f = r[e];
      E = h.R;
      e = h.position.x + (E.col1.x * f.x + E.col2.x * f.y);
      h = h.position.y + (E.col1.y * f.x + E.col2.y * f.y);
      f = k[a];
      E = t.R;
      return (t.position.x + (E.col1.x * f.x + E.col2.x * f.y) - e) * v + (t.position.y + (E.col1.y * f.x + E.col2.y * f.y) - h) * w;
    };
    z.FindMaxSeparation = function (b, h, e, k, t) {
      var r = parseInt(h.m_vertexCount),
        v = h.m_normals;
      var E = t.R;
      var f = k.m_centroid;
      var w = t.position.x + (E.col1.x * f.x + E.col2.x * f.y),
        d = t.position.y + (E.col1.y * f.x + E.col2.y * f.y);
      E = e.R;
      f = h.m_centroid;
      w -= e.position.x + (E.col1.x * f.x + E.col2.x * f.y);
      d -= e.position.y + (E.col1.y * f.x + E.col2.y * f.y);
      E = w * e.R.col1.x + d * e.R.col1.y;
      d = w * e.R.col2.x + d * e.R.col2.y;
      w = 0;
      for (var a = -Number.MAX_VALUE, A = 0; A < r; ++A) f = v[A], f = f.x * E + f.y * d, f > a && (a = f, w = A);
      v = z.EdgeSeparation(h, e, w, k, t);
      a = parseInt(0 <= w - 1 ? w - 1 : r - 1);
      E = z.EdgeSeparation(h, e, a, k, t);
      A = parseInt(w + 1 < r ? w + 1 : 0);
      d = z.EdgeSeparation(h, e, A, k, t);
      if (E > v && E > d) f = -1;else if (d > v) f = 1, a = A, E = d;else return b[0] = w, v;
      for (;;) if (w = -1 == f ? 0 <= a - 1 ? a - 1 : r - 1 : a + 1 < r ? a + 1 : 0, v = z.EdgeSeparation(h, e, w, k, t), v > E) a = w, E = v;else break;
      b[0] = a;
      return E;
    };
    z.FindIncidentEdge = function (b, h, e, t, k, f) {
      void 0 === t && (t = 0);
      parseInt(h.m_vertexCount);
      var r = h.m_normals,
        v = parseInt(k.m_vertexCount);
      h = k.m_vertices;
      k = k.m_normals;
      var E = e.R;
      e = r[t];
      r = E.col1.x * e.x + E.col2.x * e.y;
      var w = E.col1.y * e.x + E.col2.y * e.y;
      E = f.R;
      e = E.col1.x * r + E.col1.y * w;
      w = E.col2.x * r + E.col2.y * w;
      r = e;
      E = 0;
      for (var d = Number.MAX_VALUE, a = 0; a < v; ++a) e = k[a], e = r * e.x + w * e.y, e < d && (d = e, E = a);
      k = parseInt(E);
      r = parseInt(k + 1 < v ? k + 1 : 0);
      v = b[0];
      e = h[k];
      E = f.R;
      v.v.x = f.position.x + (E.col1.x * e.x + E.col2.x * e.y);
      v.v.y = f.position.y + (E.col1.y * e.x + E.col2.y * e.y);
      v.id.features.referenceEdge = t;
      v.id.features.incidentEdge = k;
      v.id.features.incidentVertex = 0;
      v = b[1];
      e = h[r];
      E = f.R;
      v.v.x = f.position.x + (E.col1.x * e.x + E.col2.x * e.y);
      v.v.y = f.position.y + (E.col1.y * e.x + E.col2.y * e.y);
      v.id.features.referenceEdge = t;
      v.id.features.incidentEdge = r;
      v.id.features.incidentVertex = 1;
    };
    z.MakeClipPointVector = function () {
      var r = new F(2);
      r[0] = new b();
      r[1] = new b();
      return r;
    };
    z.CollidePolygons = function (b, e, h, k, t) {
      b.m_pointCount = 0;
      var r = e.m_radius + k.m_radius;
      z.s_edgeAO[0] = 0;
      var v = z.FindMaxSeparation(z.s_edgeAO, e, h, k, t);
      var f = z.s_edgeAO[0];
      if (!(v > r)) {
        z.s_edgeBO[0] = 0;
        var E = z.FindMaxSeparation(z.s_edgeBO, k, t, e, h);
        var w = z.s_edgeBO[0];
        if (!(E > r)) {
          E > .98 * v + .001 ? (v = k, k = e, e = t, t = w, b.m_type = C.e_faceB, f = 1) : (v = e, e = h, h = t, t = f, b.m_type = C.e_faceA, f = 0);
          w = z.s_incidentEdge;
          z.FindIncidentEdge(w, v, e, t, k, h);
          E = parseInt(v.m_vertexCount);
          v = v.m_vertices;
          k = v[t];
          var d = t + 1 < E ? v[parseInt(t + 1)] : v[0];
          v = z.s_localTangent;
          v.Set(d.x - k.x, d.y - k.y);
          v.Normalize();
          E = z.s_localNormal;
          E.x = v.y;
          E.y = -v.x;
          var a = z.s_planePoint;
          a.Set(.5 * (k.x + d.x), .5 * (k.y + d.y));
          var A = z.s_tangent;
          t = e.R;
          A.x = t.col1.x * v.x + t.col2.x * v.y;
          A.y = t.col1.y * v.x + t.col2.y * v.y;
          var m = z.s_tangent2;
          m.x = -A.x;
          m.y = -A.y;
          v = z.s_normal;
          v.x = A.y;
          v.y = -A.x;
          var D = z.s_v11,
            K = z.s_v12;
          D.x = e.position.x + (t.col1.x * k.x + t.col2.x * k.y);
          D.y = e.position.y + (t.col1.y * k.x + t.col2.y * k.y);
          K.x = e.position.x + (t.col1.x * d.x + t.col2.x * d.y);
          K.y = e.position.y + (t.col1.y * d.x + t.col2.y * d.y);
          e = v.x * D.x + v.y * D.y;
          t = A.x * K.x + A.y * K.y + r;
          d = z.s_clipPoints1;
          k = z.s_clipPoints2;
          w = z.ClipSegmentToLine(d, w, m, -A.x * D.x - A.y * D.y + r);
          if (!(2 > w || (w = z.ClipSegmentToLine(k, d, A, t), 2 > w))) {
            b.m_localPlaneNormal.SetV(E);
            b.m_localPoint.SetV(a);
            for (a = E = 0; a < n.b2_maxManifoldPoints; ++a) w = k[a], v.x * w.v.x + v.y * w.v.y - e <= r && (A = b.m_points[E], t = h.R, m = w.v.x - h.position.x, D = w.v.y - h.position.y, A.m_localPoint.x = m * t.col1.x + D * t.col1.y, A.m_localPoint.y = m * t.col2.x + D * t.col2.y, A.m_id.Set(w.id), A.m_id.features.flip = f, ++E);
            b.m_pointCount = E;
          }
        }
      }
    };
    z.CollideCircles = function (b, e, h, t, k) {
      b.m_pointCount = 0;
      var r = h.R;
      var v = e.m_p;
      var f = h.position.x + (r.col1.x * v.x + r.col2.x * v.y);
      h = h.position.y + (r.col1.y * v.x + r.col2.y * v.y);
      r = k.R;
      v = t.m_p;
      f = k.position.x + (r.col1.x * v.x + r.col2.x * v.y) - f;
      k = k.position.y + (r.col1.y * v.x + r.col2.y * v.y) - h;
      r = e.m_radius + t.m_radius;
      f * f + k * k > r * r || (b.m_type = C.e_circles, b.m_localPoint.SetV(e.m_p), b.m_localPlaneNormal.SetZero(), b.m_pointCount = 1, b.m_points[0].m_localPoint.SetV(t.m_p), b.m_points[0].m_id.key = 0);
    };
    z.CollidePolygonAndCircle = function (b, e, h, t, k) {
      b.m_pointCount = 0;
      var r = k.R;
      var v = t.m_p;
      var f = k.position.y + (r.col1.y * v.x + r.col2.y * v.y);
      var E = k.position.x + (r.col1.x * v.x + r.col2.x * v.y) - h.position.x;
      var w = f - h.position.y;
      r = h.R;
      h = E * r.col1.x + w * r.col1.y;
      r = E * r.col2.x + w * r.col2.y;
      var d = 0;
      k = -Number.MAX_VALUE;
      f = e.m_radius + t.m_radius;
      var a = parseInt(e.m_vertexCount),
        A = e.m_vertices;
      e = e.m_normals;
      for (var m = 0; m < a; ++m) {
        v = A[m];
        E = h - v.x;
        w = r - v.y;
        v = e[m];
        v = v.x * E + v.y * w;
        if (v > f) return;
        v > k && (k = v, d = m);
      }
      v = parseInt(d);
      w = parseInt(v + 1 < a ? v + 1 : 0);
      E = A[v];
      A = A[w];
      if (k < Number.MIN_VALUE) b.m_pointCount = 1, b.m_type = C.e_faceA, b.m_localPlaneNormal.SetV(e[d]), b.m_localPoint.x = .5 * (E.x + A.x), b.m_localPoint.y = .5 * (E.y + A.y);else if (k = (h - A.x) * (E.x - A.x) + (r - A.y) * (E.y - A.y), 0 >= (h - E.x) * (A.x - E.x) + (r - E.y) * (A.y - E.y)) {
        if ((h - E.x) * (h - E.x) + (r - E.y) * (r - E.y) > f * f) return;
        b.m_pointCount = 1;
        b.m_type = C.e_faceA;
        b.m_localPlaneNormal.x = h - E.x;
        b.m_localPlaneNormal.y = r - E.y;
        b.m_localPlaneNormal.Normalize();
        b.m_localPoint.SetV(E);
      } else if (0 >= k) {
        if ((h - A.x) * (h - A.x) + (r - A.y) * (r - A.y) > f * f) return;
        b.m_pointCount = 1;
        b.m_type = C.e_faceA;
        b.m_localPlaneNormal.x = h - A.x;
        b.m_localPlaneNormal.y = r - A.y;
        b.m_localPlaneNormal.Normalize();
        b.m_localPoint.SetV(A);
      } else {
        d = .5 * (E.x + A.x);
        A = .5 * (E.y + A.y);
        k = (h - d) * e[v].x + (r - A) * e[v].y;
        if (k > f) return;
        b.m_pointCount = 1;
        b.m_type = C.e_faceA;
        b.m_localPlaneNormal.x = e[v].x;
        b.m_localPlaneNormal.y = e[v].y;
        b.m_localPlaneNormal.Normalize();
        b.m_localPoint.Set(d, A);
      }
      b.m_points[0].m_localPoint.SetV(t.m_p);
      b.m_points[0].m_id.key = 0;
    };
    z.TestOverlap = function (b, e) {
      var r = e.lowerBound,
        h = b.upperBound,
        v = r.x - h.x,
        k = r.y - h.y;
      r = b.lowerBound;
      h = e.upperBound;
      b = r.y - h.y;
      return 0 < v || 0 < k || 0 < r.x - h.x || 0 < b ? !1 : !0;
    };
    l.postDefs.push(function () {
      l.Collision.b2Collision.s_incidentEdge = z.MakeClipPointVector();
      l.Collision.b2Collision.s_clipPoints1 = z.MakeClipPointVector();
      l.Collision.b2Collision.s_clipPoints2 = z.MakeClipPointVector();
      l.Collision.b2Collision.s_edgeAO = new N(1);
      l.Collision.b2Collision.s_edgeBO = new N(1);
      l.Collision.b2Collision.s_localTangent = new m();
      l.Collision.b2Collision.s_localNormal = new m();
      l.Collision.b2Collision.s_planePoint = new m();
      l.Collision.b2Collision.s_normal = new m();
      l.Collision.b2Collision.s_tangent = new m();
      l.Collision.b2Collision.s_tangent2 = new m();
      l.Collision.b2Collision.s_v11 = new m();
      l.Collision.b2Collision.s_v12 = new m();
      l.Collision.b2Collision.b2CollidePolyTempVec = new m();
      l.Collision.b2Collision.b2_nullFeature = 255;
    });
    B.b2ContactID = function () {
      this.features = new h();
    };
    B.prototype.b2ContactID = function () {
      this.features._m_id = this;
    };
    B.prototype.Set = function (b) {
      this.key = b._key;
    };
    B.prototype.Copy = function () {
      var b = new B();
      b.key = this.key;
      return b;
    };
    Object.defineProperty(B.prototype, "key", {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this._key;
      }
    });
    Object.defineProperty(B.prototype, "key", {
      enumerable: !1,
      configurable: !0,
      set: function (b) {
        void 0 === b && (b = 0);
        this._key = b;
        this.features._referenceEdge = this._key & 255;
        this.features._incidentEdge = (this._key & 65280) >> 8 & 255;
        this.features._incidentVertex = (this._key & 16711680) >> 16 & 255;
        this.features._flip = (this._key & 4278190080) >> 24 & 255;
      }
    });
    y.b2ContactPoint = function () {
      this.position = new m();
      this.velocity = new m();
      this.normal = new m();
      this.id = new B();
    };
    S.b2Distance = function () {};
    S.Distance = function (b, e, h) {
      ++S.b2_gjkCalls;
      var r = h.proxyA,
        v = h.proxyB,
        k = h.transformA,
        t = h.transformB,
        f = S.s_simplex;
      f.ReadCache(e, r, k, v, t);
      var E = f.m_vertices,
        w = S.s_saveA,
        d = S.s_saveB;
      f.GetClosestPoint().LengthSquared();
      for (var A, a, D = 0; 20 > D;) {
        var K = f.m_count;
        for (A = 0; A < K; A++) w[A] = E[A].indexA, d[A] = E[A].indexB;
        switch (f.m_count) {
          case 1:
            break;
          case 2:
            f.Solve2();
            break;
          case 3:
            f.Solve3();
            break;
          default:
            n.b2Assert(!1);
        }
        if (3 == f.m_count) break;
        a = f.GetClosestPoint();
        a.LengthSquared();
        A = f.GetSearchDirection();
        if (A.LengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) break;
        a = E[f.m_count];
        a.indexA = r.GetSupport(p.MulTMV(k.R, A.GetNegative()));
        a.wA = p.MulX(k, r.GetVertex(a.indexA));
        a.indexB = v.GetSupport(p.MulTMV(t.R, A));
        a.wB = p.MulX(t, v.GetVertex(a.indexB));
        a.w = p.SubtractVV(a.wB, a.wA);
        ++D;
        ++S.b2_gjkIters;
        var c = !1;
        for (A = 0; A < K; A++) if (a.indexA == w[A] && a.indexB == d[A]) {
          c = !0;
          break;
        }
        if (c) break;
        ++f.m_count;
      }
      S.b2_gjkMaxIters = p.Max(S.b2_gjkMaxIters, D);
      f.GetWitnessPoints(b.pointA, b.pointB);
      b.distance = p.SubtractVV(b.pointA, b.pointB).Length();
      b.iterations = D;
      f.WriteCache(e);
      h.useRadii && (e = r.m_radius, v = v.m_radius, b.distance > e + v && b.distance > Number.MIN_VALUE ? (b.distance -= e + v, h = p.SubtractVV(b.pointB, b.pointA), h.Normalize(), b.pointA.x += e * h.x, b.pointA.y += e * h.y, b.pointB.x -= v * h.x, b.pointB.y -= v * h.y) : (a = new m(), a.x = .5 * (b.pointA.x + b.pointB.x), a.y = .5 * (b.pointA.y + b.pointB.y), b.pointA.x = b.pointB.x = a.x, b.pointA.y = b.pointB.y = a.y, b.distance = 0));
    };
    l.postDefs.push(function () {
      l.Collision.b2Distance.s_simplex = new k();
      l.Collision.b2Distance.s_saveA = new N(3);
      l.Collision.b2Distance.s_saveB = new N(3);
    });
    T.b2DistanceInput = function () {};
    d.b2DistanceOutput = function () {
      this.pointA = new m();
      this.pointB = new m();
    };
    I.b2DistanceProxy = function () {};
    I.prototype.Set = function (b) {
      switch (b.GetType()) {
        case q.e_circleShape:
          b = b instanceof a ? b : null;
          this.m_vertices = new F(1, !0);
          this.m_vertices[0] = b.m_p;
          this.m_count = 1;
          this.m_radius = b.m_radius;
          break;
        case q.e_polygonShape:
          b = b instanceof c ? b : null;
          this.m_vertices = b.m_vertices;
          this.m_count = b.m_vertexCount;
          this.m_radius = b.m_radius;
          break;
        default:
          n.b2Assert(!1);
      }
    };
    I.prototype.GetSupport = function (b) {
      for (var h = 0, e = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, r = 1; r < this.m_count; ++r) {
        var k = this.m_vertices[r].x * b.x + this.m_vertices[r].y * b.y;
        k > e && (h = r, e = k);
      }
      return h;
    };
    I.prototype.GetSupportVertex = function (b) {
      for (var h = 0, e = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y, r = 1; r < this.m_count; ++r) {
        var k = this.m_vertices[r].x * b.x + this.m_vertices[r].y * b.y;
        k > e && (h = r, e = k);
      }
      return this.m_vertices[h];
    };
    I.prototype.GetVertexCount = function () {
      return this.m_count;
    };
    I.prototype.GetVertex = function (b) {
      void 0 === b && (b = 0);
      n.b2Assert(0 <= b && b < this.m_count);
      return this.m_vertices[b];
    };
    H.b2DynamicTree = function () {};
    H.prototype.b2DynamicTree = function () {
      this.m_freeList = this.m_root = null;
      this.m_insertionCount = this.m_path = 0;
    };
    H.prototype.CreateProxy = function (b, h) {
      var e = this.AllocateNode(),
        r = n.b2_aabbExtension,
        v = n.b2_aabbExtension;
      e.aabb.lowerBound.x = b.lowerBound.x - r;
      e.aabb.lowerBound.y = b.lowerBound.y - v;
      e.aabb.upperBound.x = b.upperBound.x + r;
      e.aabb.upperBound.y = b.upperBound.y + v;
      e.userData = h;
      this.InsertLeaf(e);
      return e;
    };
    H.prototype.DestroyProxy = function (b) {
      this.RemoveLeaf(b);
      this.FreeNode(b);
    };
    H.prototype.MoveProxy = function (b, e, h) {
      n.b2Assert(b.IsLeaf());
      if (b.aabb.Contains(e)) return !1;
      this.RemoveLeaf(b);
      var r = n.b2_aabbExtension + n.b2_aabbMultiplier * (0 < h.x ? h.x : -h.x);
      h = n.b2_aabbExtension + n.b2_aabbMultiplier * (0 < h.y ? h.y : -h.y);
      b.aabb.lowerBound.x = e.lowerBound.x - r;
      b.aabb.lowerBound.y = e.lowerBound.y - h;
      b.aabb.upperBound.x = e.upperBound.x + r;
      b.aabb.upperBound.y = e.upperBound.y + h;
      this.InsertLeaf(b);
      return !0;
    };
    H.prototype.Rebalance = function (b) {
      void 0 === b && (b = 0);
      if (null != this.m_root) for (var h = 0; h < b; h++) {
        for (var e = this.m_root, r = 0; 0 == e.IsLeaf();) e = this.m_path >> r & 1 ? e.child2 : e.child1, r = r + 1 & 31;
        ++this.m_path;
        this.RemoveLeaf(e);
        this.InsertLeaf(e);
      }
    };
    H.prototype.GetFatAABB = function (b) {
      return b.aabb;
    };
    H.prototype.GetUserData = function (b) {
      return b.userData;
    };
    H.prototype.Query = function (b, e) {
      if (null != this.m_root) {
        var h = new F(),
          r = 0;
        for (h[r++] = this.m_root; 0 < r;) {
          var v = h[--r];
          if (v.aabb.TestOverlap(e)) if (v.IsLeaf()) {
            if (!b(v)) break;
          } else h[r++] = v.child1, h[r++] = v.child2;
        }
      }
    };
    H.prototype.RayCast = function (b, h) {
      if (null != this.m_root) {
        var e = h.p1,
          r = h.p2,
          v = p.SubtractVV(e, r);
        v.Normalize();
        v = p.CrossFV(1, v);
        var k = p.AbsV(v),
          t = h.maxFraction,
          f = new u();
        var w = e.x + t * (r.x - e.x);
        t = e.y + t * (r.y - e.y);
        f.lowerBound.x = Math.min(e.x, w);
        f.lowerBound.y = Math.min(e.y, t);
        f.upperBound.x = Math.max(e.x, w);
        f.upperBound.y = Math.max(e.y, t);
        var d = new F(),
          A = 0;
        for (d[A++] = this.m_root; 0 < A;) if (w = d[--A], 0 != w.aabb.TestOverlap(f)) {
          t = w.aabb.GetCenter();
          var a = w.aabb.GetExtents();
          if (!(0 < Math.abs(v.x * (e.x - t.x) + v.y * (e.y - t.y)) - k.x * a.x - k.y * a.y)) if (w.IsLeaf()) {
            t = new M();
            t.p1 = h.p1;
            t.p2 = h.p2;
            t.maxFraction = h.maxFraction;
            t = b(t, w);
            if (0 == t) break;
            0 < t && (w = e.x + t * (r.x - e.x), t = e.y + t * (r.y - e.y), f.lowerBound.x = Math.min(e.x, w), f.lowerBound.y = Math.min(e.y, t), f.upperBound.x = Math.max(e.x, w), f.upperBound.y = Math.max(e.y, t));
          } else d[A++] = w.child1, d[A++] = w.child2;
        }
      }
    };
    H.prototype.AllocateNode = function () {
      if (this.m_freeList) {
        var b = this.m_freeList;
        this.m_freeList = b.parent;
        b.parent = null;
        b.child1 = null;
        b.child2 = null;
        return b;
      }
      return new G();
    };
    H.prototype.FreeNode = function (b) {
      b.parent = this.m_freeList;
      this.m_freeList = b;
    };
    H.prototype.InsertLeaf = function (b) {
      ++this.m_insertionCount;
      if (null == this.m_root) this.m_root = b, this.m_root.parent = null;else {
        var e = b.aabb.GetCenter(),
          h = this.m_root;
        if (0 == h.IsLeaf()) {
          do {
            var r = h.child1;
            h = h.child2;
            h = Math.abs((r.aabb.lowerBound.x + r.aabb.upperBound.x) / 2 - e.x) + Math.abs((r.aabb.lowerBound.y + r.aabb.upperBound.y) / 2 - e.y) < Math.abs((h.aabb.lowerBound.x + h.aabb.upperBound.x) / 2 - e.x) + Math.abs((h.aabb.lowerBound.y + h.aabb.upperBound.y) / 2 - e.y) ? r : h;
          } while (0 == h.IsLeaf());
        }
        e = h.parent;
        r = this.AllocateNode();
        r.parent = e;
        r.userData = null;
        r.aabb.Combine(b.aabb, h.aabb);
        if (e) {
          h.parent.child1 == h ? e.child1 = r : e.child2 = r;
          r.child1 = h;
          r.child2 = b;
          h.parent = r;
          b.parent = r;
          do {
            if (e.aabb.Contains(r.aabb)) break;
            e.aabb.Combine(e.child1.aabb, e.child2.aabb);
            r = e;
            e = e.parent;
          } while (e);
        } else r.child1 = h, r.child2 = b, h.parent = r, this.m_root = b.parent = r;
      }
    };
    H.prototype.RemoveLeaf = function (b) {
      if (b == this.m_root) this.m_root = null;else {
        var e = b.parent,
          h = e.parent;
        b = e.child1 == b ? e.child2 : e.child1;
        if (h) for (h.child1 == e ? h.child1 = b : h.child2 = b, b.parent = h, this.FreeNode(e); h;) {
          e = h.aabb;
          h.aabb = u.Combine(h.child1.aabb, h.child2.aabb);
          if (e.Contains(h.aabb)) break;
          h = h.parent;
        } else this.m_root = b, b.parent = null, this.FreeNode(e);
      }
    };
    R.b2DynamicTreeBroadPhase = function () {
      this.m_tree = new H();
      this.m_moveBuffer = new F();
      this.m_pairBuffer = new F();
      this.m_pairCount = 0;
    };
    R.prototype.CreateProxy = function (b, e) {
      b = this.m_tree.CreateProxy(b, e);
      ++this.m_proxyCount;
      this.BufferMove(b);
      return b;
    };
    R.prototype.DestroyProxy = function (b) {
      this.UnBufferMove(b);
      --this.m_proxyCount;
      this.m_tree.DestroyProxy(b);
    };
    R.prototype.MoveProxy = function (b, e, h) {
      this.m_tree.MoveProxy(b, e, h) && this.BufferMove(b);
    };
    R.prototype.TestOverlap = function (b, e) {
      b = this.m_tree.GetFatAABB(b);
      e = this.m_tree.GetFatAABB(e);
      return b.TestOverlap(e);
    };
    R.prototype.GetUserData = function (b) {
      return this.m_tree.GetUserData(b);
    };
    R.prototype.GetFatAABB = function (b) {
      return this.m_tree.GetFatAABB(b);
    };
    R.prototype.GetProxyCount = function () {
      return this.m_proxyCount;
    };
    R.prototype.UpdatePairs = function (b) {
      function e(b) {
        if (b == t) return !0;
        h.m_pairCount == h.m_pairBuffer.length && (h.m_pairBuffer[h.m_pairCount] = new P());
        var e = h.m_pairBuffer[h.m_pairCount];
        e.proxyA = b < t ? b : t;
        e.proxyB = b >= t ? b : t;
        ++h.m_pairCount;
        return !0;
      }
      var h = this,
        r = h.m_pairCount = 0;
      for (r = 0; r < h.m_moveBuffer.length; ++r) {
        var t = h.m_moveBuffer[r];
        var k = h.m_tree.GetFatAABB(t);
        h.m_tree.Query(e, k);
      }
      for (r = h.m_moveBuffer.length = 0; r < h.m_pairCount;) {
        k = h.m_pairBuffer[r];
        var f = h.m_tree.GetUserData(k.proxyA),
          w = h.m_tree.GetUserData(k.proxyB);
        b(f, w);
        for (++r; r < h.m_pairCount;) {
          f = h.m_pairBuffer[r];
          if (f.proxyA != k.proxyA || f.proxyB != k.proxyB) break;
          ++r;
        }
      }
    };
    R.prototype.Query = function (b, h) {
      this.m_tree.Query(b, h);
    };
    R.prototype.RayCast = function (b, h) {
      this.m_tree.RayCast(b, h);
    };
    R.prototype.Validate = function () {};
    R.prototype.Rebalance = function (b) {
      void 0 === b && (b = 0);
      this.m_tree.Rebalance(b);
    };
    R.prototype.BufferMove = function (b) {
      this.m_moveBuffer[this.m_moveBuffer.length] = b;
    };
    R.prototype.UnBufferMove = function (b) {
      b = parseInt(this.m_moveBuffer.indexOf(b));
      this.m_moveBuffer.splice(b, 1);
    };
    R.prototype.ComparePairs = function () {
      return 0;
    };
    R.__implements = {};
    R.__implements[t] = !0;
    G.b2DynamicTreeNode = function () {
      this.aabb = new u();
    };
    G.prototype.IsLeaf = function () {
      return null == this.child1;
    };
    P.b2DynamicTreePair = function () {};
    C.b2Manifold = function () {
      this.m_pointCount = 0;
    };
    C.prototype.b2Manifold = function () {
      this.m_points = new F(n.b2_maxManifoldPoints);
      for (var b = 0; b < n.b2_maxManifoldPoints; b++) this.m_points[b] = new V();
      this.m_localPlaneNormal = new m();
      this.m_localPoint = new m();
    };
    C.prototype.Reset = function () {
      for (var b = 0; b < n.b2_maxManifoldPoints; b++) (this.m_points[b] instanceof V ? this.m_points[b] : null).Reset();
      this.m_localPlaneNormal.SetZero();
      this.m_localPoint.SetZero();
      this.m_pointCount = this.m_type = 0;
    };
    C.prototype.Set = function (b) {
      this.m_pointCount = b.m_pointCount;
      for (var h = 0; h < n.b2_maxManifoldPoints; h++) (this.m_points[h] instanceof V ? this.m_points[h] : null).Set(b.m_points[h]);
      this.m_localPlaneNormal.SetV(b.m_localPlaneNormal);
      this.m_localPoint.SetV(b.m_localPoint);
      this.m_type = b.m_type;
    };
    C.prototype.Copy = function () {
      var b = new C();
      b.Set(this);
      return b;
    };
    l.postDefs.push(function () {
      l.Collision.b2Manifold.e_circles = 1;
      l.Collision.b2Manifold.e_faceA = 2;
      l.Collision.b2Manifold.e_faceB = 4;
    });
    V.b2ManifoldPoint = function () {
      this.m_localPoint = new m();
      this.m_id = new B();
    };
    V.prototype.b2ManifoldPoint = function () {
      this.Reset();
    };
    V.prototype.Reset = function () {
      this.m_localPoint.SetZero();
      this.m_tangentImpulse = this.m_normalImpulse = 0;
      this.m_id.key = 0;
    };
    V.prototype.Set = function (b) {
      this.m_localPoint.SetV(b.m_localPoint);
      this.m_normalImpulse = b.m_normalImpulse;
      this.m_tangentImpulse = b.m_tangentImpulse;
      this.m_id.Set(b.m_id);
    };
    J.b2Point = function () {
      this.p = new m();
    };
    J.prototype.Support = function () {
      return this.p;
    };
    J.prototype.GetFirstVertex = function () {
      return this.p;
    };
    M.b2RayCastInput = function () {
      this.p1 = new m();
      this.p2 = new m();
    };
    M.prototype.b2RayCastInput = function (b, h, e) {
      void 0 === b && (b = null);
      void 0 === h && (h = null);
      void 0 === e && (e = 1);
      b && this.p1.SetV(b);
      h && this.p2.SetV(h);
      this.maxFraction = e;
    };
    W.b2RayCastOutput = function () {
      this.normal = new m();
    };
    Q.b2Segment = function () {
      this.p1 = new m();
      this.p2 = new m();
    };
    Q.prototype.TestSegment = function (b, h, e, t) {
      void 0 === t && (t = 0);
      var r = e.p1,
        k = e.p2.x - r.x,
        v = e.p2.y - r.y;
      e = this.p2.y - this.p1.y;
      var f = -(this.p2.x - this.p1.x),
        w = 100 * Number.MIN_VALUE,
        d = -(k * e + v * f);
      if (d > w) {
        var A = r.x - this.p1.x,
          a = r.y - this.p1.y;
        r = A * e + a * f;
        if (0 <= r && r <= t * d && (t = -k * a + v * A, -w * d <= t && t <= d * (1 + w))) return t = Math.sqrt(e * e + f * f), b[0] = r / d, h.Set(e / t, f / t), !0;
      }
      return !1;
    };
    Q.prototype.Extend = function (b) {
      this.ExtendForward(b);
      this.ExtendBackward(b);
    };
    Q.prototype.ExtendForward = function (b) {
      var h = this.p2.x - this.p1.x,
        e = this.p2.y - this.p1.y;
      b = Math.min(0 < h ? (b.upperBound.x - this.p1.x) / h : 0 > h ? (b.lowerBound.x - this.p1.x) / h : Number.POSITIVE_INFINITY, 0 < e ? (b.upperBound.y - this.p1.y) / e : 0 > e ? (b.lowerBound.y - this.p1.y) / e : Number.POSITIVE_INFINITY);
      this.p2.x = this.p1.x + h * b;
      this.p2.y = this.p1.y + e * b;
    };
    Q.prototype.ExtendBackward = function (b) {
      var h = -this.p2.x + this.p1.x,
        e = -this.p2.y + this.p1.y;
      b = Math.min(0 < h ? (b.upperBound.x - this.p2.x) / h : 0 > h ? (b.lowerBound.x - this.p2.x) / h : Number.POSITIVE_INFINITY, 0 < e ? (b.upperBound.y - this.p2.y) / e : 0 > e ? (b.lowerBound.y - this.p2.y) / e : Number.POSITIVE_INFINITY);
      this.p1.x = this.p2.x + h * b;
      this.p1.y = this.p2.y + e * b;
    };
    e.b2SeparationFunction = function () {
      this.m_localPoint = new m();
      this.m_axis = new m();
    };
    e.prototype.Initialize = function (b, h, t, k, f) {
      this.m_proxyA = h;
      this.m_proxyB = k;
      h = parseInt(b.count);
      n.b2Assert(0 < h && 3 > h);
      if (1 == h) {
        this.m_type = e.e_points;
        var r = this.m_proxyA.GetVertex(b.indexA[0]);
        var v = this.m_proxyB.GetVertex(b.indexB[0]);
        var w = r;
        var d = t.R;
        r = t.position.x + (d.col1.x * w.x + d.col2.x * w.y);
        t = t.position.y + (d.col1.y * w.x + d.col2.y * w.y);
        w = v;
        d = f.R;
        v = f.position.x + (d.col1.x * w.x + d.col2.x * w.y);
        f = f.position.y + (d.col1.y * w.x + d.col2.y * w.y);
        this.m_axis.x = v - r;
        this.m_axis.y = f - t;
        this.m_axis.Normalize();
      } else if (b.indexB[0] == b.indexB[1]) this.m_type = e.e_faceA, h = this.m_proxyA.GetVertex(b.indexA[0]), k = this.m_proxyA.GetVertex(b.indexA[1]), v = this.m_proxyB.GetVertex(b.indexB[0]), this.m_localPoint.x = .5 * (h.x + k.x), this.m_localPoint.y = .5 * (h.y + k.y), this.m_axis = p.CrossVF(p.SubtractVV(k, h), 1), this.m_axis.Normalize(), w = this.m_axis, d = t.R, h = d.col1.x * w.x + d.col2.x * w.y, k = d.col1.y * w.x + d.col2.y * w.y, w = this.m_localPoint, d = t.R, r = t.position.x + (d.col1.x * w.x + d.col2.x * w.y), t = t.position.y + (d.col1.y * w.x + d.col2.y * w.y), w = v, d = f.R, v = f.position.x + (d.col1.x * w.x + d.col2.x * w.y), f = f.position.y + (d.col1.y * w.x + d.col2.y * w.y), 0 > (v - r) * h + (f - t) * k && this.m_axis.NegativeSelf();else if (b.indexA[0] == b.indexA[0]) this.m_type = e.e_faceB, d = this.m_proxyB.GetVertex(b.indexB[0]), w = this.m_proxyB.GetVertex(b.indexB[1]), r = this.m_proxyA.GetVertex(b.indexA[0]), this.m_localPoint.x = .5 * (d.x + w.x), this.m_localPoint.y = .5 * (d.y + w.y), this.m_axis = p.CrossVF(p.SubtractVV(w, d), 1), this.m_axis.Normalize(), w = this.m_axis, d = f.R, h = d.col1.x * w.x + d.col2.x * w.y, k = d.col1.y * w.x + d.col2.y * w.y, w = this.m_localPoint, d = f.R, v = f.position.x + (d.col1.x * w.x + d.col2.x * w.y), f = f.position.y + (d.col1.y * w.x + d.col2.y * w.y), w = r, d = t.R, r = t.position.x + (d.col1.x * w.x + d.col2.x * w.y), t = t.position.y + (d.col1.y * w.x + d.col2.y * w.y), 0 > (r - v) * h + (t - f) * k && this.m_axis.NegativeSelf();else {
        h = this.m_proxyA.GetVertex(b.indexA[0]);
        k = this.m_proxyA.GetVertex(b.indexA[1]);
        d = this.m_proxyB.GetVertex(b.indexB[0]);
        w = this.m_proxyB.GetVertex(b.indexB[1]);
        p.MulX(t, r);
        r = p.MulMV(t.R, p.SubtractVV(k, h));
        p.MulX(f, v);
        b = p.MulMV(f.R, p.SubtractVV(w, d));
        f = r.x * r.x + r.y * r.y;
        v = b.x * b.x + b.y * b.y;
        var A = p.SubtractVV(b, r);
        t = r.x * A.x + r.y * A.y;
        A = b.x * A.x + b.y * A.y;
        r = r.x * b.x + r.y * b.y;
        var a = f * v - r * r;
        b = 0;
        0 != a && (b = p.Clamp((r * A - t * v) / a, 0, 1));
        0 > (r * b + A) / v && (b = p.Clamp((r - t) / f, 0, 1));
        r = new m();
        r.x = h.x + b * (k.x - h.x);
        r.y = h.y + b * (k.y - h.y);
        v = new m();
        v.x = d.x + b * (w.x - d.x);
        v.y = d.y + b * (w.y - d.y);
        0 == b || 1 == b ? (this.m_type = e.e_faceB, this.m_axis = p.CrossVF(p.SubtractVV(w, d), 1), this.m_axis.Normalize(), this.m_localPoint = v) : (this.m_type = e.e_faceA, this.m_axis = p.CrossVF(p.SubtractVV(k, h), 1), this.m_localPoint = r);
        0 > b && this.m_axis.NegativeSelf();
      }
    };
    e.prototype.Evaluate = function (b, h) {
      var r;
      switch (this.m_type) {
        case e.e_points:
          var t = p.MulTMV(b.R, this.m_axis);
          var k = p.MulTMV(h.R, this.m_axis.GetNegative());
          t = this.m_proxyA.GetSupportVertex(t);
          k = this.m_proxyB.GetSupportVertex(k);
          b = p.MulX(b, t);
          h = p.MulX(h, k);
          return r = (h.x - b.x) * this.m_axis.x + (h.y - b.y) * this.m_axis.y;
        case e.e_faceA:
          return r = p.MulMV(b.R, this.m_axis), b = p.MulX(b, this.m_localPoint), k = p.MulTMV(h.R, r.GetNegative()), k = this.m_proxyB.GetSupportVertex(k), h = p.MulX(h, k), r = (h.x - b.x) * r.x + (h.y - b.y) * r.y;
        case e.e_faceB:
          return r = p.MulMV(h.R, this.m_axis), h = p.MulX(h, this.m_localPoint), t = p.MulTMV(b.R, r.GetNegative()), t = this.m_proxyA.GetSupportVertex(t), b = p.MulX(b, t), r = (b.x - h.x) * r.x + (b.y - h.y) * r.y;
        default:
          return n.b2Assert(!1), 0;
      }
    };
    l.postDefs.push(function () {
      l.Collision.b2SeparationFunction.e_points = 1;
      l.Collision.b2SeparationFunction.e_faceA = 2;
      l.Collision.b2SeparationFunction.e_faceB = 4;
    });
    k.b2Simplex = function () {
      this.m_v1 = new f();
      this.m_v2 = new f();
      this.m_v3 = new f();
      this.m_vertices = new F(3);
    };
    k.prototype.b2Simplex = function () {
      this.m_vertices[0] = this.m_v1;
      this.m_vertices[1] = this.m_v2;
      this.m_vertices[2] = this.m_v3;
    };
    k.prototype.ReadCache = function (b, h, e, t, k) {
      n.b2Assert(0 <= b.count && 3 >= b.count);
      this.m_count = b.count;
      for (var r = this.m_vertices, f = 0; f < this.m_count; f++) {
        var v = r[f];
        v.indexA = b.indexA[f];
        v.indexB = b.indexB[f];
        var w = h.GetVertex(v.indexA);
        var d = t.GetVertex(v.indexB);
        v.wA = p.MulX(e, w);
        v.wB = p.MulX(k, d);
        v.w = p.SubtractVV(v.wB, v.wA);
        v.a = 0;
      }
      1 < this.m_count && (b = b.metric, w = this.GetMetric(), w < .5 * b || 2 * b < w || w < Number.MIN_VALUE) && (this.m_count = 0);
      0 == this.m_count && (v = r[0], v.indexA = 0, v.indexB = 0, w = h.GetVertex(0), d = t.GetVertex(0), v.wA = p.MulX(e, w), v.wB = p.MulX(k, d), v.w = p.SubtractVV(v.wB, v.wA), this.m_count = 1);
    };
    k.prototype.WriteCache = function (b) {
      b.metric = this.GetMetric();
      b.count = l.parseUInt(this.m_count);
      for (var h = this.m_vertices, e = 0; e < this.m_count; e++) b.indexA[e] = l.parseUInt(h[e].indexA), b.indexB[e] = l.parseUInt(h[e].indexB);
    };
    k.prototype.GetSearchDirection = function () {
      switch (this.m_count) {
        case 1:
          return this.m_v1.w.GetNegative();
        case 2:
          var b = p.SubtractVV(this.m_v2.w, this.m_v1.w);
          return 0 < p.CrossVV(b, this.m_v1.w.GetNegative()) ? p.CrossFV(1, b) : p.CrossVF(b, 1);
        default:
          return n.b2Assert(!1), new m();
      }
    };
    k.prototype.GetClosestPoint = function () {
      switch (this.m_count) {
        case 0:
          return n.b2Assert(!1), new m();
        case 1:
          return this.m_v1.w;
        case 2:
          return new m(this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x, this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y);
        default:
          return n.b2Assert(!1), new m();
      }
    };
    k.prototype.GetWitnessPoints = function (b, h) {
      switch (this.m_count) {
        case 0:
          n.b2Assert(!1);
          break;
        case 1:
          b.SetV(this.m_v1.wA);
          h.SetV(this.m_v1.wB);
          break;
        case 2:
          b.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
          b.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
          h.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
          h.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
          break;
        case 3:
          h.x = b.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x + this.m_v3.a * this.m_v3.wA.x;
          h.y = b.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y + this.m_v3.a * this.m_v3.wA.y;
          break;
        default:
          n.b2Assert(!1);
      }
    };
    k.prototype.GetMetric = function () {
      switch (this.m_count) {
        case 0:
          return n.b2Assert(!1), 0;
        case 1:
          return 0;
        case 2:
          return p.SubtractVV(this.m_v1.w, this.m_v2.w).Length();
        case 3:
          return p.CrossVV(p.SubtractVV(this.m_v2.w, this.m_v1.w), p.SubtractVV(this.m_v3.w, this.m_v1.w));
        default:
          return n.b2Assert(!1), 0;
      }
    };
    k.prototype.Solve2 = function () {
      var b = this.m_v1.w,
        h = this.m_v2.w,
        e = p.SubtractVV(h, b);
      b = -(b.x * e.x + b.y * e.y);
      0 >= b ? this.m_count = this.m_v1.a = 1 : (h = h.x * e.x + h.y * e.y, 0 >= h ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) : (e = 1 / (h + b), this.m_v1.a = h * e, this.m_v2.a = b * e, this.m_count = 2));
    };
    k.prototype.Solve3 = function () {
      var b = this.m_v1.w,
        h = this.m_v2.w,
        e = this.m_v3.w,
        t = p.SubtractVV(h, b),
        k = p.Dot(b, t),
        f = p.Dot(h, t);
      k = -k;
      var w = p.SubtractVV(e, b),
        d = p.Dot(b, w),
        A = p.Dot(e, w);
      d = -d;
      var a = p.SubtractVV(e, h),
        m = p.Dot(h, a);
      a = p.Dot(e, a);
      m = -m;
      w = p.CrossVV(t, w);
      t = w * p.CrossVV(h, e);
      e = w * p.CrossVV(e, b);
      b = w * p.CrossVV(b, h);
      0 >= k && 0 >= d ? this.m_count = this.m_v1.a = 1 : 0 < f && 0 < k && 0 >= b ? (A = 1 / (f + k), this.m_v1.a = f * A, this.m_v2.a = k * A, this.m_count = 2) : 0 < A && 0 < d && 0 >= e ? (f = 1 / (A + d), this.m_v1.a = A * f, this.m_v3.a = d * f, this.m_count = 2, this.m_v2.Set(this.m_v3)) : 0 >= f && 0 >= m ? (this.m_count = this.m_v2.a = 1, this.m_v1.Set(this.m_v2)) : 0 >= A && 0 >= a ? (this.m_count = this.m_v3.a = 1, this.m_v1.Set(this.m_v3)) : 0 < a && 0 < m && 0 >= t ? (f = 1 / (a + m), this.m_v2.a = a * f, this.m_v3.a = m * f, this.m_count = 2, this.m_v1.Set(this.m_v3)) : (f = 1 / (t + e + b), this.m_v1.a = t * f, this.m_v2.a = e * f, this.m_v3.a = b * f, this.m_count = 3);
    };
    D.b2SimplexCache = function () {
      this.indexA = new N(3);
      this.indexB = new N(3);
    };
    f.b2SimplexVertex = function () {};
    f.prototype.Set = function (b) {
      this.wA.SetV(b.wA);
      this.wB.SetV(b.wB);
      this.w.SetV(b.w);
      this.a = b.a;
      this.indexA = b.indexA;
      this.indexB = b.indexB;
    };
    w.b2TimeOfImpact = function () {};
    w.TimeOfImpact = function (b) {
      ++w.b2_toiCalls;
      var h = b.proxyA,
        e = b.proxyB,
        t = b.sweepA,
        k = b.sweepB;
      n.b2Assert(t.t0 == k.t0);
      n.b2Assert(1 - t.t0 > Number.MIN_VALUE);
      var f = h.m_radius + e.m_radius;
      b = b.tolerance;
      var r = 0,
        d = 0,
        A = 0;
      w.s_cache.count = 0;
      for (w.s_distanceInput.useRadii = !1;;) {
        t.GetTransform(w.s_xfA, r);
        k.GetTransform(w.s_xfB, r);
        w.s_distanceInput.proxyA = h;
        w.s_distanceInput.proxyB = e;
        w.s_distanceInput.transformA = w.s_xfA;
        w.s_distanceInput.transformB = w.s_xfB;
        S.Distance(w.s_distanceOutput, w.s_cache, w.s_distanceInput);
        if (0 >= w.s_distanceOutput.distance) {
          r = 1;
          break;
        }
        w.s_fcn.Initialize(w.s_cache, h, w.s_xfA, e, w.s_xfB);
        var a = w.s_fcn.Evaluate(w.s_xfA, w.s_xfB);
        if (0 >= a) {
          r = 1;
          break;
        }
        0 == d && (A = a > f ? p.Max(f - b, .75 * f) : p.Max(a - b, .02 * f));
        if (a - A < .5 * b) {
          if (0 == d) {
            r = 1;
            break;
          }
          break;
        }
        var m = r,
          D = r,
          K = 1;
        t.GetTransform(w.s_xfA, K);
        k.GetTransform(w.s_xfB, K);
        var c = w.s_fcn.Evaluate(w.s_xfA, w.s_xfB);
        if (c >= A) {
          r = 1;
          break;
        }
        for (var g = 0;;) {
          var u = g & 1 ? D + (A - a) * (K - D) / (c - a) : .5 * (D + K);
          t.GetTransform(w.s_xfA, u);
          k.GetTransform(w.s_xfB, u);
          var I = w.s_fcn.Evaluate(w.s_xfA, w.s_xfB);
          if (p.Abs(I - A) < .025 * b) {
            m = u;
            break;
          }
          I > A ? (D = u, a = I) : (K = u, c = I);
          ++g;
          ++w.b2_toiRootIters;
          if (50 == g) break;
        }
        w.b2_toiMaxRootIters = p.Max(w.b2_toiMaxRootIters, g);
        if (m < (1 + 100 * Number.MIN_VALUE) * r) break;
        r = m;
        d++;
        ++w.b2_toiIters;
        if (1E3 == d) break;
      }
      w.b2_toiMaxIters = p.Max(w.b2_toiMaxIters, d);
      return r;
    };
    l.postDefs.push(function () {
      l.Collision.b2TimeOfImpact.b2_toiCalls = 0;
      l.Collision.b2TimeOfImpact.b2_toiIters = 0;
      l.Collision.b2TimeOfImpact.b2_toiMaxIters = 0;
      l.Collision.b2TimeOfImpact.b2_toiRootIters = 0;
      l.Collision.b2TimeOfImpact.b2_toiMaxRootIters = 0;
      l.Collision.b2TimeOfImpact.s_cache = new D();
      l.Collision.b2TimeOfImpact.s_distanceInput = new T();
      l.Collision.b2TimeOfImpact.s_xfA = new x();
      l.Collision.b2TimeOfImpact.s_xfB = new x();
      l.Collision.b2TimeOfImpact.s_fcn = new e();
      l.Collision.b2TimeOfImpact.s_distanceOutput = new d();
    });
    A.b2TOIInput = function () {
      this.proxyA = new I();
      this.proxyB = new I();
      this.sweepA = new g();
      this.sweepB = new g();
    };
    K.b2WorldManifold = function () {
      this.m_normal = new m();
    };
    K.prototype.b2WorldManifold = function () {
      this.m_points = new F(n.b2_maxManifoldPoints);
      for (var b = 0; b < n.b2_maxManifoldPoints; b++) this.m_points[b] = new m();
    };
    K.prototype.Initialize = function (b, h, e, t, k) {
      void 0 === e && (e = 0);
      void 0 === k && (k = 0);
      if (0 != b.m_pointCount) switch (b.m_type) {
        case C.e_circles:
          var f = h.R;
          var r = b.m_localPoint;
          var w = h.position.x + f.col1.x * r.x + f.col2.x * r.y;
          h = h.position.y + f.col1.y * r.x + f.col2.y * r.y;
          f = t.R;
          r = b.m_points[0].m_localPoint;
          b = t.position.x + f.col1.x * r.x + f.col2.x * r.y;
          t = t.position.y + f.col1.y * r.x + f.col2.y * r.y;
          r = b - w;
          f = t - h;
          var d = r * r + f * f;
          d > Number.MIN_VALUE * Number.MIN_VALUE ? (d = Math.sqrt(d), this.m_normal.x = r / d, this.m_normal.y = f / d) : (this.m_normal.x = 1, this.m_normal.y = 0);
          r = h + e * this.m_normal.y;
          t -= k * this.m_normal.y;
          this.m_points[0].x = .5 * (w + e * this.m_normal.x + (b - k * this.m_normal.x));
          this.m_points[0].y = .5 * (r + t);
          break;
        case C.e_faceA:
          f = h.R;
          r = b.m_localPlaneNormal;
          d = f.col1.x * r.x + f.col2.x * r.y;
          var v = f.col1.y * r.x + f.col2.y * r.y;
          f = h.R;
          r = b.m_localPoint;
          var A = h.position.x + f.col1.x * r.x + f.col2.x * r.y;
          var a = h.position.y + f.col1.y * r.x + f.col2.y * r.y;
          this.m_normal.x = d;
          this.m_normal.y = v;
          for (w = 0; w < b.m_pointCount; w++) {
            f = t.R;
            r = b.m_points[w].m_localPoint;
            var m = t.position.x + f.col1.x * r.x + f.col2.x * r.y;
            r = t.position.y + f.col1.y * r.x + f.col2.y * r.y;
            this.m_points[w].x = m + .5 * (e - (m - A) * d - (r - a) * v - k) * d;
            this.m_points[w].y = r + .5 * (e - (m - A) * d - (r - a) * v - k) * v;
          }
          break;
        case C.e_faceB:
          for (f = t.R, r = b.m_localPlaneNormal, d = f.col1.x * r.x + f.col2.x * r.y, v = f.col1.y * r.x + f.col2.y * r.y, f = t.R, r = b.m_localPoint, A = t.position.x + f.col1.x * r.x + f.col2.x * r.y, a = t.position.y + f.col1.y * r.x + f.col2.y * r.y, this.m_normal.x = -d, this.m_normal.y = -v, w = 0; w < b.m_pointCount; w++) f = h.R, r = b.m_points[w].m_localPoint, m = h.position.x + f.col1.x * r.x + f.col2.x * r.y, r = h.position.y + f.col1.y * r.x + f.col2.y * r.y, this.m_points[w].x = m + .5 * (k - (m - A) * d - (r - a) * v - e) * d, this.m_points[w].y = r + .5 * (k - (m - A) * d - (r - a) * v - e) * v;
      }
    };
    b.ClipVertex = function () {
      this.v = new m();
      this.id = new B();
    };
    b.prototype.Set = function (b) {
      this.v.SetV(b.v);
      this.id.Set(b.id);
    };
    h.Features = function () {};
    Object.defineProperty(h.prototype, "referenceEdge", {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this._referenceEdge;
      }
    });
    Object.defineProperty(h.prototype, "referenceEdge", {
      enumerable: !1,
      configurable: !0,
      set: function (b) {
        void 0 === b && (b = 0);
        this._referenceEdge = b;
        this._m_id._key = this._m_id._key & 4294967040 | this._referenceEdge & 255;
      }
    });
    Object.defineProperty(h.prototype, "incidentEdge", {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this._incidentEdge;
      }
    });
    Object.defineProperty(h.prototype, "incidentEdge", {
      enumerable: !1,
      configurable: !0,
      set: function (b) {
        void 0 === b && (b = 0);
        this._incidentEdge = b;
        this._m_id._key = this._m_id._key & 4294902015 | this._incidentEdge << 8 & 65280;
      }
    });
    Object.defineProperty(h.prototype, "incidentVertex", {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this._incidentVertex;
      }
    });
    Object.defineProperty(h.prototype, "incidentVertex", {
      enumerable: !1,
      configurable: !0,
      set: function (b) {
        void 0 === b && (b = 0);
        this._incidentVertex = b;
        this._m_id._key = this._m_id._key & 4278255615 | this._incidentVertex << 16 & 16711680;
      }
    });
    Object.defineProperty(h.prototype, "flip", {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this._flip;
      }
    });
    Object.defineProperty(h.prototype, "flip", {
      enumerable: !1,
      configurable: !0,
      set: function (b) {
        void 0 === b && (b = 0);
        this._flip = b;
        this._m_id._key = this._m_id._key & 16777215 | this._flip << 24 & 4278190080;
      }
    });
  })();
  (function () {
    var a = l.Common.b2Settings,
      c = l.Collision.Shapes.b2CircleShape,
      q = l.Collision.Shapes.b2EdgeChainDef,
      n = l.Collision.Shapes.b2EdgeShape,
      p = l.Collision.Shapes.b2MassData,
      g = l.Collision.Shapes.b2PolygonShape,
      x = l.Collision.Shapes.b2Shape,
      m = l.Common.Math.b2Mat22,
      u = l.Common.Math.b2Math,
      O = l.Common.Math.b2Transform,
      L = l.Common.Math.b2Vec2,
      z = l.Collision.b2Distance,
      B = l.Collision.b2DistanceInput,
      y = l.Collision.b2DistanceOutput,
      S = l.Collision.b2DistanceProxy,
      T = l.Collision.b2SimplexCache;
    l.inherit(c, l.Collision.Shapes.b2Shape);
    c.prototype.__super = l.Collision.Shapes.b2Shape.prototype;
    c.b2CircleShape = function () {
      l.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
      this.m_p = new L();
    };
    c.prototype.Copy = function () {
      var d = new c();
      d.Set(this);
      return d;
    };
    c.prototype.Set = function (d) {
      this.__super.Set.call(this, d);
      l.is(d, c) && this.m_p.SetV((d instanceof c ? d : null).m_p);
    };
    c.prototype.TestPoint = function (d, a) {
      var m = d.R,
        c = d.position.x + (m.col1.x * this.m_p.x + m.col2.x * this.m_p.y);
      d = d.position.y + (m.col1.y * this.m_p.x + m.col2.y * this.m_p.y);
      c = a.x - c;
      d = a.y - d;
      return c * c + d * d <= this.m_radius * this.m_radius;
    };
    c.prototype.RayCast = function (d, a, m) {
      var c = m.R,
        n = a.p1.x - (m.position.x + (c.col1.x * this.m_p.x + c.col2.x * this.m_p.y));
      m = a.p1.y - (m.position.y + (c.col1.y * this.m_p.x + c.col2.y * this.m_p.y));
      c = a.p2.x - a.p1.x;
      var p = a.p2.y - a.p1.y,
        g = n * c + m * p,
        u = c * c + p * p,
        I = g * g - u * (n * n + m * m - this.m_radius * this.m_radius);
      if (0 > I || u < Number.MIN_VALUE) return !1;
      g = -(g + Math.sqrt(I));
      return 0 <= g && g <= a.maxFraction * u ? (g /= u, d.fraction = g, d.normal.x = n + g * c, d.normal.y = m + g * p, d.normal.Normalize(), !0) : !1;
    };
    c.prototype.ComputeAABB = function (d, a) {
      var m = a.R,
        c = a.position.x + (m.col1.x * this.m_p.x + m.col2.x * this.m_p.y);
      a = a.position.y + (m.col1.y * this.m_p.x + m.col2.y * this.m_p.y);
      d.lowerBound.Set(c - this.m_radius, a - this.m_radius);
      d.upperBound.Set(c + this.m_radius, a + this.m_radius);
    };
    c.prototype.ComputeMass = function (d, m) {
      void 0 === m && (m = 0);
      d.mass = m * a.b2_pi * this.m_radius * this.m_radius;
      d.center.SetV(this.m_p);
      d.I = d.mass * (.5 * this.m_radius * this.m_radius + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y));
    };
    c.prototype.ComputeSubmergedArea = function (d, a, m, c) {
      void 0 === a && (a = 0);
      m = u.MulX(m, this.m_p);
      var n = -(u.Dot(d, m) - a);
      if (n < -this.m_radius + Number.MIN_VALUE) return 0;
      if (n > this.m_radius) return c.SetV(m), Math.PI * this.m_radius * this.m_radius;
      a = this.m_radius * this.m_radius;
      var g = n * n;
      n = a * (Math.asin(n / this.m_radius) + Math.PI / 2) + n * Math.sqrt(a - g);
      a = -2 / 3 * Math.pow(a - g, 1.5) / n;
      c.x = m.x + d.x * a;
      c.y = m.y + d.y * a;
      return n;
    };
    c.prototype.GetLocalPosition = function () {
      return this.m_p;
    };
    c.prototype.SetLocalPosition = function (d) {
      this.m_p.SetV(d);
    };
    c.prototype.GetRadius = function () {
      return this.m_radius;
    };
    c.prototype.SetRadius = function (d) {
      void 0 === d && (d = 0);
      this.m_radius = d;
    };
    c.prototype.b2CircleShape = function (d) {
      void 0 === d && (d = 0);
      this.__super.b2Shape.call(this);
      this.m_type = x.e_circleShape;
      this.m_radius = d;
    };
    q.b2EdgeChainDef = function () {};
    q.prototype.b2EdgeChainDef = function () {
      this.vertexCount = 0;
      this.isALoop = !0;
      this.vertices = [];
    };
    l.inherit(n, l.Collision.Shapes.b2Shape);
    n.prototype.__super = l.Collision.Shapes.b2Shape.prototype;
    n.b2EdgeShape = function () {
      l.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
      this.s_supportVec = new L();
      this.m_v1 = new L();
      this.m_v2 = new L();
      this.m_coreV1 = new L();
      this.m_coreV2 = new L();
      this.m_normal = new L();
      this.m_direction = new L();
      this.m_cornerDir1 = new L();
      this.m_cornerDir2 = new L();
    };
    n.prototype.TestPoint = function () {
      return !1;
    };
    n.prototype.RayCast = function (d, a, m) {
      var c = a.p2.x - a.p1.x,
        n = a.p2.y - a.p1.y;
      var g = m.R;
      var p = m.position.x + (g.col1.x * this.m_v1.x + g.col2.x * this.m_v1.y),
        u = m.position.y + (g.col1.y * this.m_v1.x + g.col2.y * this.m_v1.y),
        q = m.position.y + (g.col1.y * this.m_v2.x + g.col2.y * this.m_v2.y) - u;
      m = -(m.position.x + (g.col1.x * this.m_v2.x + g.col2.x * this.m_v2.y) - p);
      g = 100 * Number.MIN_VALUE;
      var I = -(c * q + n * m);
      if (I > g) {
        p = a.p1.x - p;
        var H = a.p1.y - u;
        u = p * q + H * m;
        if (0 <= u && u <= a.maxFraction * I && (a = -c * H + n * p, -g * I <= a && a <= I * (1 + g))) return d.fraction = u / I, a = Math.sqrt(q * q + m * m), d.normal.x = q / a, d.normal.y = m / a, !0;
      }
      return !1;
    };
    n.prototype.ComputeAABB = function (d, a) {
      var m = a.R,
        c = a.position.x + (m.col1.x * this.m_v1.x + m.col2.x * this.m_v1.y),
        n = a.position.y + (m.col1.y * this.m_v1.x + m.col2.y * this.m_v1.y),
        g = a.position.x + (m.col1.x * this.m_v2.x + m.col2.x * this.m_v2.y);
      a = a.position.y + (m.col1.y * this.m_v2.x + m.col2.y * this.m_v2.y);
      c < g ? (d.lowerBound.x = c, d.upperBound.x = g) : (d.lowerBound.x = g, d.upperBound.x = c);
      n < a ? (d.lowerBound.y = n, d.upperBound.y = a) : (d.lowerBound.y = a, d.upperBound.y = n);
    };
    n.prototype.ComputeMass = function (d) {
      d.mass = 0;
      d.center.SetV(this.m_v1);
      d.I = 0;
    };
    n.prototype.ComputeSubmergedArea = function (d, a, m, c) {
      void 0 === a && (a = 0);
      var n = new L(d.x * a, d.y * a),
        g = u.MulX(m, this.m_v1);
      m = u.MulX(m, this.m_v2);
      var p = u.Dot(d, g) - a;
      d = u.Dot(d, m) - a;
      if (0 < p) {
        if (0 < d) return 0;
        g.x = -d / (p - d) * g.x + p / (p - d) * m.x;
        g.y = -d / (p - d) * g.y + p / (p - d) * m.y;
      } else 0 < d && (m.x = -d / (p - d) * g.x + p / (p - d) * m.x, m.y = -d / (p - d) * g.y + p / (p - d) * m.y);
      c.x = (n.x + g.x + m.x) / 3;
      c.y = (n.y + g.y + m.y) / 3;
      return .5 * ((g.x - n.x) * (m.y - n.y) - (g.y - n.y) * (m.x - n.x));
    };
    n.prototype.GetLength = function () {
      return this.m_length;
    };
    n.prototype.GetVertex1 = function () {
      return this.m_v1;
    };
    n.prototype.GetVertex2 = function () {
      return this.m_v2;
    };
    n.prototype.GetCoreVertex1 = function () {
      return this.m_coreV1;
    };
    n.prototype.GetCoreVertex2 = function () {
      return this.m_coreV2;
    };
    n.prototype.GetNormalVector = function () {
      return this.m_normal;
    };
    n.prototype.GetDirectionVector = function () {
      return this.m_direction;
    };
    n.prototype.GetCorner1Vector = function () {
      return this.m_cornerDir1;
    };
    n.prototype.GetCorner2Vector = function () {
      return this.m_cornerDir2;
    };
    n.prototype.Corner1IsConvex = function () {
      return this.m_cornerConvex1;
    };
    n.prototype.Corner2IsConvex = function () {
      return this.m_cornerConvex2;
    };
    n.prototype.GetFirstVertex = function (d) {
      var a = d.R;
      return new L(d.position.x + (a.col1.x * this.m_coreV1.x + a.col2.x * this.m_coreV1.y), d.position.y + (a.col1.y * this.m_coreV1.x + a.col2.y * this.m_coreV1.y));
    };
    n.prototype.GetNextEdge = function () {
      return this.m_nextEdge;
    };
    n.prototype.GetPrevEdge = function () {
      return this.m_prevEdge;
    };
    n.prototype.Support = function (d, a, m) {
      void 0 === a && (a = 0);
      void 0 === m && (m = 0);
      var c = d.R,
        n = d.position.x + (c.col1.x * this.m_coreV1.x + c.col2.x * this.m_coreV1.y),
        g = d.position.y + (c.col1.y * this.m_coreV1.x + c.col2.y * this.m_coreV1.y),
        p = d.position.x + (c.col1.x * this.m_coreV2.x + c.col2.x * this.m_coreV2.y);
      d = d.position.y + (c.col1.y * this.m_coreV2.x + c.col2.y * this.m_coreV2.y);
      n * a + g * m > p * a + d * m ? (this.s_supportVec.x = n, this.s_supportVec.y = g) : (this.s_supportVec.x = p, this.s_supportVec.y = d);
      return this.s_supportVec;
    };
    n.prototype.b2EdgeShape = function (d, m) {
      this.__super.b2Shape.call(this);
      this.m_type = x.e_edgeShape;
      this.m_nextEdge = this.m_prevEdge = null;
      this.m_v1 = d;
      this.m_v2 = m;
      this.m_direction.Set(this.m_v2.x - this.m_v1.x, this.m_v2.y - this.m_v1.y);
      this.m_length = this.m_direction.Normalize();
      this.m_normal.Set(this.m_direction.y, -this.m_direction.x);
      this.m_coreV1.Set(-a.b2_toiSlop * (this.m_normal.x - this.m_direction.x) + this.m_v1.x, -a.b2_toiSlop * (this.m_normal.y - this.m_direction.y) + this.m_v1.y);
      this.m_coreV2.Set(-a.b2_toiSlop * (this.m_normal.x + this.m_direction.x) + this.m_v2.x, -a.b2_toiSlop * (this.m_normal.y + this.m_direction.y) + this.m_v2.y);
      this.m_cornerDir1 = this.m_normal;
      this.m_cornerDir2.Set(-this.m_normal.x, -this.m_normal.y);
    };
    n.prototype.SetPrevEdge = function (d, a, m, c) {
      this.m_prevEdge = d;
      this.m_coreV1 = a;
      this.m_cornerDir1 = m;
      this.m_cornerConvex1 = c;
    };
    n.prototype.SetNextEdge = function (d, a, m, c) {
      this.m_nextEdge = d;
      this.m_coreV2 = a;
      this.m_cornerDir2 = m;
      this.m_cornerConvex2 = c;
    };
    p.b2MassData = function () {
      this.mass = 0;
      this.center = new L(0, 0);
      this.I = 0;
    };
    l.inherit(g, l.Collision.Shapes.b2Shape);
    g.prototype.__super = l.Collision.Shapes.b2Shape.prototype;
    g.b2PolygonShape = function () {
      l.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
    };
    g.prototype.Copy = function () {
      var d = new g();
      d.Set(this);
      return d;
    };
    g.prototype.Set = function (d) {
      this.__super.Set.call(this, d);
      if (l.is(d, g)) {
        d = d instanceof g ? d : null;
        this.m_centroid.SetV(d.m_centroid);
        this.m_vertexCount = d.m_vertexCount;
        this.Reserve(this.m_vertexCount);
        for (var a = 0; a < this.m_vertexCount; a++) this.m_vertices[a].SetV(d.m_vertices[a]), this.m_normals[a].SetV(d.m_normals[a]);
      }
    };
    g.prototype.SetAsArray = function (d, a) {
      void 0 === a && (a = 0);
      var m = new F(),
        c;
      for (c = 0; c < d.length; ++c) {
        var n = d[c];
        m.push(n);
      }
      this.SetAsVector(m, a);
    };
    g.AsArray = function (d, a) {
      void 0 === a && (a = 0);
      var m = new g();
      m.SetAsArray(d, a);
      return m;
    };
    g.prototype.SetAsVector = function (d, m) {
      void 0 === m && (m = 0);
      0 == m && (m = d.length);
      a.b2Assert(2 <= m);
      this.m_vertexCount = m;
      this.Reserve(m);
      for (m = 0; m < this.m_vertexCount; m++) this.m_vertices[m].SetV(d[m]);
      for (m = 0; m < this.m_vertexCount; ++m) {
        d = parseInt(m);
        var c = parseInt(m + 1 < this.m_vertexCount ? m + 1 : 0);
        d = u.SubtractVV(this.m_vertices[c], this.m_vertices[d]);
        a.b2Assert(d.LengthSquared() > Number.MIN_VALUE);
        this.m_normals[m].SetV(u.CrossVF(d, 1));
        this.m_normals[m].Normalize();
      }
      this.m_centroid = g.ComputeCentroid(this.m_vertices, this.m_vertexCount);
    };
    g.AsVector = function (d, a) {
      void 0 === a && (a = 0);
      var m = new g();
      m.SetAsVector(d, a);
      return m;
    };
    g.prototype.SetAsBox = function (d, a) {
      void 0 === d && (d = 0);
      void 0 === a && (a = 0);
      this.m_vertexCount = 4;
      this.Reserve(4);
      this.m_vertices[0].Set(-d, -a);
      this.m_vertices[1].Set(d, -a);
      this.m_vertices[2].Set(d, a);
      this.m_vertices[3].Set(-d, a);
      this.m_normals[0].Set(0, -1);
      this.m_normals[1].Set(1, 0);
      this.m_normals[2].Set(0, 1);
      this.m_normals[3].Set(-1, 0);
      this.m_centroid.SetZero();
    };
    g.AsBox = function (a, m) {
      void 0 === a && (a = 0);
      void 0 === m && (m = 0);
      var d = new g();
      d.SetAsBox(a, m);
      return d;
    };
    g.prototype.SetAsOrientedBox = function (a, m, c, n) {
      void 0 === a && (a = 0);
      void 0 === m && (m = 0);
      void 0 === c && (c = null);
      void 0 === n && (n = 0);
      this.m_vertexCount = 4;
      this.Reserve(4);
      this.m_vertices[0].Set(-a, -m);
      this.m_vertices[1].Set(a, -m);
      this.m_vertices[2].Set(a, m);
      this.m_vertices[3].Set(-a, m);
      this.m_normals[0].Set(0, -1);
      this.m_normals[1].Set(1, 0);
      this.m_normals[2].Set(0, 1);
      this.m_normals[3].Set(-1, 0);
      this.m_centroid = c;
      a = new O();
      a.position = c;
      a.R.Set(n);
      for (c = 0; c < this.m_vertexCount; ++c) this.m_vertices[c] = u.MulX(a, this.m_vertices[c]), this.m_normals[c] = u.MulMV(a.R, this.m_normals[c]);
    };
    g.AsOrientedBox = function (a, m, c, n) {
      void 0 === a && (a = 0);
      void 0 === m && (m = 0);
      void 0 === c && (c = null);
      void 0 === n && (n = 0);
      var d = new g();
      d.SetAsOrientedBox(a, m, c, n);
      return d;
    };
    g.prototype.SetAsEdge = function (a, m) {
      this.m_vertexCount = 2;
      this.Reserve(2);
      this.m_vertices[0].SetV(a);
      this.m_vertices[1].SetV(m);
      this.m_centroid.x = .5 * (a.x + m.x);
      this.m_centroid.y = .5 * (a.y + m.y);
      this.m_normals[0] = u.CrossVF(u.SubtractVV(m, a), 1);
      this.m_normals[0].Normalize();
      this.m_normals[1].x = -this.m_normals[0].x;
      this.m_normals[1].y = -this.m_normals[0].y;
    };
    g.AsEdge = function (a, m) {
      var d = new g();
      d.SetAsEdge(a, m);
      return d;
    };
    g.prototype.TestPoint = function (a, m) {
      var d = a.R;
      var c = m.x - a.position.x;
      a = m.y - a.position.y;
      m = c * d.col1.x + a * d.col1.y;
      for (var n = c * d.col2.x + a * d.col2.y, g = 0; g < this.m_vertexCount; ++g) if (d = this.m_vertices[g], c = m - d.x, a = n - d.y, d = this.m_normals[g], 0 < d.x * c + d.y * a) return !1;
      return !0;
    };
    g.prototype.RayCast = function (a, m, c) {
      var d = 0,
        n = m.maxFraction;
      var g = m.p1.x - c.position.x;
      var p = m.p1.y - c.position.y;
      var u = c.R;
      var q = g * u.col1.x + p * u.col1.y,
        y = g * u.col2.x + p * u.col2.y;
      g = m.p2.x - c.position.x;
      p = m.p2.y - c.position.y;
      u = c.R;
      m = g * u.col1.x + p * u.col1.y - q;
      u = g * u.col2.x + p * u.col2.y - y;
      for (var B = -1, H = 0; H < this.m_vertexCount; ++H) {
        var e = this.m_vertices[H];
        g = e.x - q;
        p = e.y - y;
        e = this.m_normals[H];
        g = e.x * g + e.y * p;
        p = e.x * m + e.y * u;
        if (0 == p) {
          if (0 > g) return !1;
        } else 0 > p && g < d * p ? (d = g / p, B = H) : 0 < p && g < n * p && (n = g / p);
        if (n < d - Number.MIN_VALUE) return !1;
      }
      return 0 <= B ? (a.fraction = d, u = c.R, e = this.m_normals[B], a.normal.x = u.col1.x * e.x + u.col2.x * e.y, a.normal.y = u.col1.y * e.x + u.col2.y * e.y, !0) : !1;
    };
    g.prototype.ComputeAABB = function (a, m) {
      for (var d = m.R, c = this.m_vertices[0], n = m.position.x + (d.col1.x * c.x + d.col2.x * c.y), g = m.position.y + (d.col1.y * c.x + d.col2.y * c.y), p = n, u = g, q = 1; q < this.m_vertexCount; ++q) {
        c = this.m_vertices[q];
        var y = m.position.x + (d.col1.x * c.x + d.col2.x * c.y);
        c = m.position.y + (d.col1.y * c.x + d.col2.y * c.y);
        n = n < y ? n : y;
        g = g < c ? g : c;
        p = p > y ? p : y;
        u = u > c ? u : c;
      }
      a.lowerBound.x = n - this.m_radius;
      a.lowerBound.y = g - this.m_radius;
      a.upperBound.x = p + this.m_radius;
      a.upperBound.y = u + this.m_radius;
    };
    g.prototype.ComputeMass = function (a, m) {
      void 0 === m && (m = 0);
      if (2 == this.m_vertexCount) a.center.x = .5 * (this.m_vertices[0].x + this.m_vertices[1].x), a.center.y = .5 * (this.m_vertices[0].y + this.m_vertices[1].y), a.mass = 0, a.I = 0;else {
        for (var d = 0, c = 0, n = 0, g = 0, p = 1 / 3, u = 0; u < this.m_vertexCount; ++u) {
          var q = this.m_vertices[u],
            y = u + 1 < this.m_vertexCount ? this.m_vertices[parseInt(u + 1)] : this.m_vertices[0],
            B = q.x - 0,
            z = q.y - 0,
            e = y.x - 0,
            k = y.y - 0,
            D = B * k - z * e,
            f = .5 * D;
          n += f;
          d += f * p * (0 + q.x + y.x);
          c += f * p * (0 + q.y + y.y);
          q = B;
          g += D * (p * (.25 * (q * q + e * q + e * e) + (0 * q + 0 * e)) + p * (.25 * (z * z + k * z + k * k) + (0 * z + 0 * k)));
        }
        a.mass = m * n;
        a.center.Set(1 / n * d, 1 / n * c);
        a.I = m * g;
      }
    };
    g.prototype.ComputeSubmergedArea = function (a, m, c, n) {
      void 0 === m && (m = 0);
      var d = u.MulTMV(c.R, a),
        g = m - u.Dot(a, c.position),
        q = new N(),
        y = 0,
        B = -1;
      m = -1;
      var z = !1;
      for (a = 0; a < this.m_vertexCount; ++a) {
        q[a] = u.Dot(d, this.m_vertices[a]) - g;
        var H = q[a] < -Number.MIN_VALUE;
        0 < a && (H ? z || (B = a - 1, y++) : z && (m = a - 1, y++));
        z = H;
      }
      switch (y) {
        case 0:
          return z ? (a = new p(), this.ComputeMass(a, 1), n.SetV(u.MulX(c, a.center)), a.mass) : 0;
        case 1:
          -1 == B ? B = this.m_vertexCount - 1 : m = this.m_vertexCount - 1;
      }
      a = parseInt((B + 1) % this.m_vertexCount);
      d = parseInt((m + 1) % this.m_vertexCount);
      g = (0 - q[B]) / (q[a] - q[B]);
      q = (0 - q[m]) / (q[d] - q[m]);
      B = new L(this.m_vertices[B].x * (1 - g) + this.m_vertices[a].x * g, this.m_vertices[B].y * (1 - g) + this.m_vertices[a].y * g);
      m = new L(this.m_vertices[m].x * (1 - q) + this.m_vertices[d].x * q, this.m_vertices[m].y * (1 - q) + this.m_vertices[d].y * q);
      q = 0;
      g = new L();
      for (y = this.m_vertices[a]; a != d;) a = (a + 1) % this.m_vertexCount, z = a == d ? m : this.m_vertices[a], H = .5 * ((y.x - B.x) * (z.y - B.y) - (y.y - B.y) * (z.x - B.x)), q += H, g.x += H * (B.x + y.x + z.x) / 3, g.y += H * (B.y + y.y + z.y) / 3, y = z;
      g.Multiply(1 / q);
      n.SetV(u.MulX(c, g));
      return q;
    };
    g.prototype.GetVertexCount = function () {
      return this.m_vertexCount;
    };
    g.prototype.GetVertices = function () {
      return this.m_vertices;
    };
    g.prototype.GetNormals = function () {
      return this.m_normals;
    };
    g.prototype.GetSupport = function (a) {
      for (var m = 0, d = this.m_vertices[0].x * a.x + this.m_vertices[0].y * a.y, c = 1; c < this.m_vertexCount; ++c) {
        var n = this.m_vertices[c].x * a.x + this.m_vertices[c].y * a.y;
        n > d && (m = c, d = n);
      }
      return m;
    };
    g.prototype.GetSupportVertex = function (a) {
      for (var m = 0, d = this.m_vertices[0].x * a.x + this.m_vertices[0].y * a.y, c = 1; c < this.m_vertexCount; ++c) {
        var n = this.m_vertices[c].x * a.x + this.m_vertices[c].y * a.y;
        n > d && (m = c, d = n);
      }
      return this.m_vertices[m];
    };
    g.prototype.Validate = function () {
      return !1;
    };
    g.prototype.b2PolygonShape = function () {
      this.__super.b2Shape.call(this);
      this.m_type = x.e_polygonShape;
      this.m_centroid = new L();
      this.m_vertices = new F();
      this.m_normals = new F();
    };
    g.prototype.Reserve = function (a) {
      void 0 === a && (a = 0);
      for (var m = parseInt(this.m_vertices.length); m < a; m++) this.m_vertices[m] = new L(), this.m_normals[m] = new L();
    };
    g.ComputeCentroid = function (a, m) {
      void 0 === m && (m = 0);
      for (var d = new L(), c = 0, n = 1 / 3, g = 0; g < m; ++g) {
        var p = a[g],
          u = g + 1 < m ? a[parseInt(g + 1)] : a[0],
          q = .5 * ((p.x - 0) * (u.y - 0) - (p.y - 0) * (u.x - 0));
        c += q;
        d.x += q * n * (0 + p.x + u.x);
        d.y += q * n * (0 + p.y + u.y);
      }
      d.x *= 1 / c;
      d.y *= 1 / c;
      return d;
    };
    g.ComputeOBB = function (a, m, c) {
      void 0 === c && (c = 0);
      var d,
        n = new F(c + 1);
      for (d = 0; d < c; ++d) n[d] = m[d];
      n[c] = n[0];
      m = Number.MAX_VALUE;
      for (d = 1; d <= c; ++d) {
        var g = n[parseInt(d - 1)],
          p = n[d].x - g.x,
          u = n[d].y - g.y,
          q = Math.sqrt(p * p + u * u);
        p /= q;
        u /= q;
        for (var y = -u, B = p, z = q = Number.MAX_VALUE, e = -Number.MAX_VALUE, k = -Number.MAX_VALUE, D = 0; D < c; ++D) {
          var f = n[D].x - g.x,
            w = n[D].y - g.y,
            A = p * f + u * w;
          f = y * f + B * w;
          A < q && (q = A);
          f < z && (z = f);
          A > e && (e = A);
          f > k && (k = f);
        }
        D = (e - q) * (k - z);
        D < .95 * m && (m = D, a.R.col1.x = p, a.R.col1.y = u, a.R.col2.x = y, a.R.col2.y = B, p = .5 * (q + e), u = .5 * (z + k), y = a.R, a.center.x = g.x + (y.col1.x * p + y.col2.x * u), a.center.y = g.y + (y.col1.y * p + y.col2.y * u), a.extents.x = .5 * (e - q), a.extents.y = .5 * (k - z));
      }
    };
    l.postDefs.push(function () {
      l.Collision.Shapes.b2PolygonShape.s_mat = new m();
    });
    x.b2Shape = function () {};
    x.prototype.Copy = function () {
      return null;
    };
    x.prototype.Set = function (a) {
      this.m_radius = a.m_radius;
    };
    x.prototype.GetType = function () {
      return this.m_type;
    };
    x.prototype.TestPoint = function () {
      return !1;
    };
    x.prototype.RayCast = function () {
      return !1;
    };
    x.prototype.ComputeAABB = function () {};
    x.prototype.ComputeMass = function () {};
    x.prototype.ComputeSubmergedArea = function () {
      return 0;
    };
    x.TestOverlap = function (a, m, c, n) {
      var d = new B();
      d.proxyA = new S();
      d.proxyA.Set(a);
      d.proxyB = new S();
      d.proxyB.Set(c);
      d.transformA = m;
      d.transformB = n;
      d.useRadii = !0;
      a = new T();
      a.count = 0;
      m = new y();
      z.Distance(m, a, d);
      return m.distance < 10 * Number.MIN_VALUE;
    };
    x.prototype.b2Shape = function () {
      this.m_type = x.e_unknownShape;
      this.m_radius = a.b2_linearSlop;
    };
    l.postDefs.push(function () {
      l.Collision.Shapes.b2Shape.e_unknownShape = -1;
      l.Collision.Shapes.b2Shape.e_circleShape = 0;
      l.Collision.Shapes.b2Shape.e_polygonShape = 1;
      l.Collision.Shapes.b2Shape.e_edgeShape = 2;
      l.Collision.Shapes.b2Shape.e_shapeTypeCount = 3;
      l.Collision.Shapes.b2Shape.e_hitCollide = 1;
      l.Collision.Shapes.b2Shape.e_missCollide = 0;
      l.Collision.Shapes.b2Shape.e_startsInsideCollide = -1;
    });
  })();
  (function () {
    var a = l.Common.b2Color,
      c = l.Common.b2Settings,
      q = l.Common.Math.b2Math;
    a.b2Color = function () {
      this._b = this._g = this._r = 0;
    };
    a.prototype.b2Color = function (a, c, g) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      void 0 === g && (g = 0);
      this._r = l.parseUInt(255 * q.Clamp(a, 0, 1));
      this._g = l.parseUInt(255 * q.Clamp(c, 0, 1));
      this._b = l.parseUInt(255 * q.Clamp(g, 0, 1));
    };
    a.prototype.Set = function (a, c, g) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      void 0 === g && (g = 0);
      this._r = l.parseUInt(255 * q.Clamp(a, 0, 1));
      this._g = l.parseUInt(255 * q.Clamp(c, 0, 1));
      this._b = l.parseUInt(255 * q.Clamp(g, 0, 1));
    };
    Object.defineProperty(a.prototype, "r", {
      enumerable: !1,
      configurable: !0,
      set: function (a) {
        void 0 === a && (a = 0);
        this._r = l.parseUInt(255 * q.Clamp(a, 0, 1));
      }
    });
    Object.defineProperty(a.prototype, "g", {
      enumerable: !1,
      configurable: !0,
      set: function (a) {
        void 0 === a && (a = 0);
        this._g = l.parseUInt(255 * q.Clamp(a, 0, 1));
      }
    });
    Object.defineProperty(a.prototype, "b", {
      enumerable: !1,
      configurable: !0,
      set: function (a) {
        void 0 === a && (a = 0);
        this._b = l.parseUInt(255 * q.Clamp(a, 0, 1));
      }
    });
    Object.defineProperty(a.prototype, "color", {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this._r << 16 | this._g << 8 | this._b;
      }
    });
    c.b2Settings = function () {};
    c.b2MixFriction = function (a, c) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      return Math.sqrt(a * c);
    };
    c.b2MixRestitution = function (a, c) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      return a > c ? a : c;
    };
    c.b2Assert = function (a) {
      if (!a) throw "Assertion Failed";
    };
    l.postDefs.push(function () {
      l.Common.b2Settings.VERSION = "2.1alpha";
      l.Common.b2Settings.USHRT_MAX = 65535;
      l.Common.b2Settings.b2_pi = Math.PI;
      l.Common.b2Settings.b2_maxManifoldPoints = 2;
      l.Common.b2Settings.b2_aabbExtension = .1;
      l.Common.b2Settings.b2_aabbMultiplier = 2;
      l.Common.b2Settings.b2_polygonRadius = 2 * c.b2_linearSlop;
      l.Common.b2Settings.b2_linearSlop = .005;
      l.Common.b2Settings.b2_angularSlop = 2 / 180 * c.b2_pi;
      l.Common.b2Settings.b2_toiSlop = 8 * c.b2_linearSlop;
      l.Common.b2Settings.b2_maxTOIContactsPerIsland = 32;
      l.Common.b2Settings.b2_maxTOIJointsPerIsland = 32;
      l.Common.b2Settings.b2_velocityThreshold = 1;
      l.Common.b2Settings.b2_maxLinearCorrection = .2;
      l.Common.b2Settings.b2_maxAngularCorrection = 8 / 180 * c.b2_pi;
      l.Common.b2Settings.b2_maxTranslation = 2;
      l.Common.b2Settings.b2_maxTranslationSquared = c.b2_maxTranslation * c.b2_maxTranslation;
      l.Common.b2Settings.b2_maxRotation = .5 * c.b2_pi;
      l.Common.b2Settings.b2_maxRotationSquared = c.b2_maxRotation * c.b2_maxRotation;
      l.Common.b2Settings.b2_contactBaumgarte = .2;
      l.Common.b2Settings.b2_timeToSleep = .5;
      l.Common.b2Settings.b2_linearSleepTolerance = .01;
      l.Common.b2Settings.b2_angularSleepTolerance = 2 / 180 * c.b2_pi;
    });
  })();
  (function () {
    var a = l.Common.Math.b2Mat22,
      c = l.Common.Math.b2Mat33,
      q = l.Common.Math.b2Math,
      n = l.Common.Math.b2Sweep,
      p = l.Common.Math.b2Transform,
      g = l.Common.Math.b2Vec2,
      x = l.Common.Math.b2Vec3;
    a.b2Mat22 = function () {
      this.col1 = new g();
      this.col2 = new g();
    };
    a.prototype.b2Mat22 = function () {
      this.SetIdentity();
    };
    a.FromAngle = function (m) {
      void 0 === m && (m = 0);
      var c = new a();
      c.Set(m);
      return c;
    };
    a.FromVV = function (m, c) {
      var g = new a();
      g.SetVV(m, c);
      return g;
    };
    a.prototype.Set = function (a) {
      void 0 === a && (a = 0);
      var m = Math.cos(a);
      a = Math.sin(a);
      this.col1.x = m;
      this.col2.x = -a;
      this.col1.y = a;
      this.col2.y = m;
    };
    a.prototype.SetVV = function (a, c) {
      this.col1.SetV(a);
      this.col2.SetV(c);
    };
    a.prototype.Copy = function () {
      var m = new a();
      m.SetM(this);
      return m;
    };
    a.prototype.SetM = function (a) {
      this.col1.SetV(a.col1);
      this.col2.SetV(a.col2);
    };
    a.prototype.AddM = function (a) {
      this.col1.x += a.col1.x;
      this.col1.y += a.col1.y;
      this.col2.x += a.col2.x;
      this.col2.y += a.col2.y;
    };
    a.prototype.SetIdentity = function () {
      this.col1.x = 1;
      this.col2.x = 0;
      this.col1.y = 0;
      this.col2.y = 1;
    };
    a.prototype.SetZero = function () {
      this.col1.x = 0;
      this.col2.x = 0;
      this.col1.y = 0;
      this.col2.y = 0;
    };
    a.prototype.GetAngle = function () {
      return Math.atan2(this.col1.y, this.col1.x);
    };
    a.prototype.GetInverse = function (a) {
      var m = this.col1.x,
        c = this.col2.x,
        g = this.col1.y,
        n = this.col2.y,
        p = m * n - c * g;
      0 != p && (p = 1 / p);
      a.col1.x = p * n;
      a.col2.x = -p * c;
      a.col1.y = -p * g;
      a.col2.y = p * m;
      return a;
    };
    a.prototype.Solve = function (a, c, g) {
      void 0 === c && (c = 0);
      void 0 === g && (g = 0);
      var m = this.col1.x,
        n = this.col2.x,
        p = this.col1.y,
        u = this.col2.y,
        q = m * u - n * p;
      0 != q && (q = 1 / q);
      a.x = q * (u * c - n * g);
      a.y = q * (m * g - p * c);
      return a;
    };
    a.prototype.Abs = function () {
      this.col1.Abs();
      this.col2.Abs();
    };
    c.b2Mat33 = function () {
      this.col1 = new x();
      this.col2 = new x();
      this.col3 = new x();
    };
    c.prototype.b2Mat33 = function (a, c, g) {
      void 0 === a && (a = null);
      void 0 === c && (c = null);
      void 0 === g && (g = null);
      a || c || g ? (this.col1.SetV(a), this.col2.SetV(c), this.col3.SetV(g)) : (this.col1.SetZero(), this.col2.SetZero(), this.col3.SetZero());
    };
    c.prototype.SetVVV = function (a, c, g) {
      this.col1.SetV(a);
      this.col2.SetV(c);
      this.col3.SetV(g);
    };
    c.prototype.Copy = function () {
      return new c(this.col1, this.col2, this.col3);
    };
    c.prototype.SetM = function (a) {
      this.col1.SetV(a.col1);
      this.col2.SetV(a.col2);
      this.col3.SetV(a.col3);
    };
    c.prototype.AddM = function (a) {
      this.col1.x += a.col1.x;
      this.col1.y += a.col1.y;
      this.col1.z += a.col1.z;
      this.col2.x += a.col2.x;
      this.col2.y += a.col2.y;
      this.col2.z += a.col2.z;
      this.col3.x += a.col3.x;
      this.col3.y += a.col3.y;
      this.col3.z += a.col3.z;
    };
    c.prototype.SetIdentity = function () {
      this.col1.x = 1;
      this.col2.x = 0;
      this.col3.x = 0;
      this.col1.y = 0;
      this.col2.y = 1;
      this.col3.y = 0;
      this.col1.z = 0;
      this.col2.z = 0;
      this.col3.z = 1;
    };
    c.prototype.SetZero = function () {
      this.col1.x = 0;
      this.col2.x = 0;
      this.col3.x = 0;
      this.col1.y = 0;
      this.col2.y = 0;
      this.col3.y = 0;
      this.col1.z = 0;
      this.col2.z = 0;
      this.col3.z = 0;
    };
    c.prototype.Solve22 = function (a, c, g) {
      void 0 === c && (c = 0);
      void 0 === g && (g = 0);
      var m = this.col1.x,
        n = this.col2.x,
        p = this.col1.y,
        q = this.col2.y,
        u = m * q - n * p;
      0 != u && (u = 1 / u);
      a.x = u * (q * c - n * g);
      a.y = u * (m * g - p * c);
      return a;
    };
    c.prototype.Solve33 = function (a, c, g, n) {
      void 0 === c && (c = 0);
      void 0 === g && (g = 0);
      void 0 === n && (n = 0);
      var m = this.col1.x,
        p = this.col1.y,
        q = this.col1.z,
        u = this.col2.x,
        x = this.col2.y,
        d = this.col2.z,
        I = this.col3.x,
        H = this.col3.y,
        O = this.col3.z,
        G = m * (x * O - d * H) + p * (d * I - u * O) + q * (u * H - x * I);
      0 != G && (G = 1 / G);
      a.x = G * (c * (x * O - d * H) + g * (d * I - u * O) + n * (u * H - x * I));
      a.y = G * (m * (g * O - n * H) + p * (n * I - c * O) + q * (c * H - g * I));
      a.z = G * (m * (x * n - d * g) + p * (d * c - u * n) + q * (u * g - x * c));
      return a;
    };
    q.b2Math = function () {};
    q.IsValid = function (a) {
      void 0 === a && (a = 0);
      return isFinite(a);
    };
    q.Dot = function (a, c) {
      return a.x * c.x + a.y * c.y;
    };
    q.CrossVV = function (a, c) {
      return a.x * c.y - a.y * c.x;
    };
    q.CrossVF = function (a, c) {
      void 0 === c && (c = 0);
      return new g(c * a.y, -c * a.x);
    };
    q.CrossFV = function (a, c) {
      void 0 === a && (a = 0);
      return new g(-a * c.y, a * c.x);
    };
    q.MulMV = function (a, c) {
      return new g(a.col1.x * c.x + a.col2.x * c.y, a.col1.y * c.x + a.col2.y * c.y);
    };
    q.MulTMV = function (a, c) {
      return new g(q.Dot(c, a.col1), q.Dot(c, a.col2));
    };
    q.MulX = function (a, c) {
      c = q.MulMV(a.R, c);
      c.x += a.position.x;
      c.y += a.position.y;
      return c;
    };
    q.MulXT = function (a, c) {
      c = q.SubtractVV(c, a.position);
      var m = c.x * a.R.col1.x + c.y * a.R.col1.y;
      c.y = c.x * a.R.col2.x + c.y * a.R.col2.y;
      c.x = m;
      return c;
    };
    q.AddVV = function (a, c) {
      return new g(a.x + c.x, a.y + c.y);
    };
    q.SubtractVV = function (a, c) {
      return new g(a.x - c.x, a.y - c.y);
    };
    q.Distance = function (a, c) {
      var m = a.x - c.x;
      a = a.y - c.y;
      return Math.sqrt(m * m + a * a);
    };
    q.DistanceSquared = function (a, c) {
      var m = a.x - c.x;
      a = a.y - c.y;
      return m * m + a * a;
    };
    q.MulFV = function (a, c) {
      void 0 === a && (a = 0);
      return new g(a * c.x, a * c.y);
    };
    q.AddMM = function (c, g) {
      return a.FromVV(q.AddVV(c.col1, g.col1), q.AddVV(c.col2, g.col2));
    };
    q.MulMM = function (c, g) {
      return a.FromVV(q.MulMV(c, g.col1), q.MulMV(c, g.col2));
    };
    q.MulTMM = function (c, n) {
      var m = new g(q.Dot(c.col1, n.col1), q.Dot(c.col2, n.col1));
      c = new g(q.Dot(c.col1, n.col2), q.Dot(c.col2, n.col2));
      return a.FromVV(m, c);
    };
    q.Abs = function (a) {
      void 0 === a && (a = 0);
      return 0 < a ? a : -a;
    };
    q.AbsV = function (a) {
      return new g(q.Abs(a.x), q.Abs(a.y));
    };
    q.AbsM = function (c) {
      return a.FromVV(q.AbsV(c.col1), q.AbsV(c.col2));
    };
    q.Min = function (a, c) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      return a < c ? a : c;
    };
    q.MinV = function (a, c) {
      return new g(q.Min(a.x, c.x), q.Min(a.y, c.y));
    };
    q.Max = function (a, c) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      return a > c ? a : c;
    };
    q.MaxV = function (a, c) {
      return new g(q.Max(a.x, c.x), q.Max(a.y, c.y));
    };
    q.Clamp = function (a, c, g) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      void 0 === g && (g = 0);
      return a < c ? c : a > g ? g : a;
    };
    q.ClampV = function (a, c, g) {
      return q.MaxV(c, q.MinV(a, g));
    };
    q.Swap = function (a, c) {
      var m = a[0];
      a[0] = c[0];
      c[0] = m;
    };
    q.Random = function () {
      return 2 * Math.random() - 1;
    };
    q.RandomRange = function (a, c) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      return (c - a) * Math.random() + a;
    };
    q.NextPowerOfTwo = function (a) {
      void 0 === a && (a = 0);
      a |= a >> 1 & 2147483647;
      a |= a >> 2 & 1073741823;
      a |= a >> 4 & 268435455;
      a |= a >> 8 & 16777215;
      return (a | a >> 16 & 65535) + 1;
    };
    q.IsPowerOfTwo = function (a) {
      void 0 === a && (a = 0);
      return 0 < a && 0 == (a & a - 1);
    };
    l.postDefs.push(function () {
      l.Common.Math.b2Math.b2Vec2_zero = new g(0, 0);
      l.Common.Math.b2Math.b2Mat22_identity = a.FromVV(new g(1, 0), new g(0, 1));
      l.Common.Math.b2Math.b2Transform_identity = new p(q.b2Vec2_zero, q.b2Mat22_identity);
    });
    n.b2Sweep = function () {
      this.localCenter = new g();
      this.c0 = new g();
      this.c = new g();
    };
    n.prototype.Set = function (a) {
      this.localCenter.SetV(a.localCenter);
      this.c0.SetV(a.c0);
      this.c.SetV(a.c);
      this.a0 = a.a0;
      this.a = a.a;
      this.t0 = a.t0;
    };
    n.prototype.Copy = function () {
      var a = new n();
      a.localCenter.SetV(this.localCenter);
      a.c0.SetV(this.c0);
      a.c.SetV(this.c);
      a.a0 = this.a0;
      a.a = this.a;
      a.t0 = this.t0;
      return a;
    };
    n.prototype.GetTransform = function (a, c) {
      void 0 === c && (c = 0);
      a.position.x = (1 - c) * this.c0.x + c * this.c.x;
      a.position.y = (1 - c) * this.c0.y + c * this.c.y;
      a.R.Set((1 - c) * this.a0 + c * this.a);
      c = a.R;
      a.position.x -= c.col1.x * this.localCenter.x + c.col2.x * this.localCenter.y;
      a.position.y -= c.col1.y * this.localCenter.x + c.col2.y * this.localCenter.y;
    };
    n.prototype.Advance = function (a) {
      void 0 === a && (a = 0);
      if (this.t0 < a && 1 - this.t0 > Number.MIN_VALUE) {
        var c = (a - this.t0) / (1 - this.t0);
        this.c0.x = (1 - c) * this.c0.x + c * this.c.x;
        this.c0.y = (1 - c) * this.c0.y + c * this.c.y;
        this.a0 = (1 - c) * this.a0 + c * this.a;
        this.t0 = a;
      }
    };
    p.b2Transform = function () {
      this.position = new g();
      this.R = new a();
    };
    p.prototype.b2Transform = function (a, c) {
      void 0 === a && (a = null);
      void 0 === c && (c = null);
      a && (this.position.SetV(a), this.R.SetM(c));
    };
    p.prototype.Initialize = function (a, c) {
      this.position.SetV(a);
      this.R.SetM(c);
    };
    p.prototype.SetIdentity = function () {
      this.position.SetZero();
      this.R.SetIdentity();
    };
    p.prototype.Set = function (a) {
      this.position.SetV(a.position);
      this.R.SetM(a.R);
    };
    p.prototype.GetAngle = function () {
      return Math.atan2(this.R.col1.y, this.R.col1.x);
    };
    g.b2Vec2 = function () {};
    g.prototype.b2Vec2 = function (a, c) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      this.x = a;
      this.y = c;
    };
    g.prototype.SetZero = function () {
      this.y = this.x = 0;
    };
    g.prototype.Set = function (a, c) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      this.x = a;
      this.y = c;
    };
    g.prototype.SetV = function (a) {
      this.x = a.x;
      this.y = a.y;
    };
    g.prototype.GetNegative = function () {
      return new g(-this.x, -this.y);
    };
    g.prototype.NegativeSelf = function () {
      this.x = -this.x;
      this.y = -this.y;
    };
    g.Make = function (a, c) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      return new g(a, c);
    };
    g.prototype.Copy = function () {
      return new g(this.x, this.y);
    };
    g.prototype.Add = function (a) {
      this.x += a.x;
      this.y += a.y;
    };
    g.prototype.Subtract = function (a) {
      this.x -= a.x;
      this.y -= a.y;
    };
    g.prototype.Multiply = function (a) {
      void 0 === a && (a = 0);
      this.x *= a;
      this.y *= a;
    };
    g.prototype.MulM = function (a) {
      var c = this.x;
      this.x = a.col1.x * c + a.col2.x * this.y;
      this.y = a.col1.y * c + a.col2.y * this.y;
    };
    g.prototype.MulTM = function (a) {
      var c = q.Dot(this, a.col1);
      this.y = q.Dot(this, a.col2);
      this.x = c;
    };
    g.prototype.CrossVF = function (a) {
      void 0 === a && (a = 0);
      var c = this.x;
      this.x = a * this.y;
      this.y = -a * c;
    };
    g.prototype.CrossFV = function (a) {
      void 0 === a && (a = 0);
      var c = this.x;
      this.x = -a * this.y;
      this.y = a * c;
    };
    g.prototype.MinV = function (a) {
      this.x = this.x < a.x ? this.x : a.x;
      this.y = this.y < a.y ? this.y : a.y;
    };
    g.prototype.MaxV = function (a) {
      this.x = this.x > a.x ? this.x : a.x;
      this.y = this.y > a.y ? this.y : a.y;
    };
    g.prototype.Abs = function () {
      0 > this.x && (this.x = -this.x);
      0 > this.y && (this.y = -this.y);
    };
    g.prototype.Length = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    g.prototype.LengthSquared = function () {
      return this.x * this.x + this.y * this.y;
    };
    g.prototype.Normalize = function () {
      var a = Math.sqrt(this.x * this.x + this.y * this.y);
      if (a < Number.MIN_VALUE) return 0;
      var c = 1 / a;
      this.x *= c;
      this.y *= c;
      return a;
    };
    g.prototype.IsValid = function () {
      return q.IsValid(this.x) && q.IsValid(this.y);
    };
    x.b2Vec3 = function () {};
    x.prototype.b2Vec3 = function (a, c, g) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      void 0 === g && (g = 0);
      this.x = a;
      this.y = c;
      this.z = g;
    };
    x.prototype.SetZero = function () {
      this.x = this.y = this.z = 0;
    };
    x.prototype.Set = function (a, c, g) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      void 0 === g && (g = 0);
      this.x = a;
      this.y = c;
      this.z = g;
    };
    x.prototype.SetV = function (a) {
      this.x = a.x;
      this.y = a.y;
      this.z = a.z;
    };
    x.prototype.GetNegative = function () {
      return new x(-this.x, -this.y, -this.z);
    };
    x.prototype.NegativeSelf = function () {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
    };
    x.prototype.Copy = function () {
      return new x(this.x, this.y, this.z);
    };
    x.prototype.Add = function (a) {
      this.x += a.x;
      this.y += a.y;
      this.z += a.z;
    };
    x.prototype.Subtract = function (a) {
      this.x -= a.x;
      this.y -= a.y;
      this.z -= a.z;
    };
    x.prototype.Multiply = function (a) {
      void 0 === a && (a = 0);
      this.x *= a;
      this.y *= a;
      this.z *= a;
    };
  })();
  (function () {
    var a = l.Common.Math.b2Math,
      c = l.Common.Math.b2Sweep,
      q = l.Common.Math.b2Transform,
      n = l.Common.Math.b2Vec2,
      p = l.Common.b2Color,
      g = l.Common.b2Settings,
      x = l.Collision.b2AABB,
      m = l.Collision.b2ContactPoint,
      u = l.Collision.b2DynamicTreeBroadPhase,
      O = l.Collision.b2RayCastInput,
      L = l.Collision.b2RayCastOutput,
      z = l.Collision.Shapes.b2CircleShape,
      B = l.Collision.Shapes.b2EdgeShape,
      y = l.Collision.Shapes.b2MassData,
      S = l.Collision.Shapes.b2PolygonShape,
      T = l.Collision.Shapes.b2Shape,
      d = l.Dynamics.b2Body,
      I = l.Dynamics.b2BodyDef,
      H = l.Dynamics.b2ContactFilter,
      R = l.Dynamics.b2ContactImpulse,
      G = l.Dynamics.b2ContactListener,
      P = l.Dynamics.b2ContactManager,
      C = l.Dynamics.b2DebugDraw,
      V = l.Dynamics.b2DestructionListener,
      J = l.Dynamics.b2FilterData,
      M = l.Dynamics.b2Fixture,
      W = l.Dynamics.b2FixtureDef,
      Q = l.Dynamics.b2Island,
      e = l.Dynamics.b2TimeStep,
      k = l.Dynamics.b2World,
      D = l.Dynamics.Contacts.b2Contact,
      f = l.Dynamics.Contacts.b2ContactFactory,
      w = l.Dynamics.Contacts.b2ContactSolver,
      A = l.Dynamics.Joints.b2Joint,
      K = l.Dynamics.Joints.b2PulleyJoint;
    d.b2Body = function () {
      this.m_xf = new q();
      this.m_sweep = new c();
      this.m_linearVelocity = new n();
      this.m_force = new n();
    };
    d.prototype.connectEdges = function (b, h, e) {
      void 0 === e && (e = 0);
      var f = Math.atan2(h.GetDirectionVector().y, h.GetDirectionVector().x);
      e = a.MulFV(Math.tan(.5 * (f - e)), h.GetDirectionVector());
      e = a.SubtractVV(e, h.GetNormalVector());
      e = a.MulFV(g.b2_toiSlop, e);
      e = a.AddVV(e, h.GetVertex1());
      var t = a.AddVV(b.GetDirectionVector(), h.GetDirectionVector());
      t.Normalize();
      var k = 0 < a.Dot(b.GetDirectionVector(), h.GetNormalVector());
      b.SetNextEdge(h, e, t, k);
      h.SetPrevEdge(b, e, t, k);
      return f;
    };
    d.prototype.CreateFixture = function (b) {
      if (1 == this.m_world.IsLocked()) return null;
      var a = new M();
      a.Create(this, this.m_xf, b);
      this.m_flags & d.e_activeFlag && a.CreateProxy(this.m_world.m_contactManager.m_broadPhase, this.m_xf);
      a.m_next = this.m_fixtureList;
      this.m_fixtureList = a;
      ++this.m_fixtureCount;
      a.m_body = this;
      0 < a.m_density && this.ResetMassData();
      this.m_world.m_flags |= k.e_newFixture;
      return a;
    };
    d.prototype.CreateFixture2 = function (b, a) {
      void 0 === a && (a = 0);
      var h = new W();
      h.shape = b;
      h.density = a;
      return this.CreateFixture(h);
    };
    d.prototype.DestroyFixture = function (b) {
      if (1 != this.m_world.IsLocked()) {
        for (var a = this.m_fixtureList, e = null; null != a;) {
          if (a == b) {
            e ? e.m_next = b.m_next : this.m_fixtureList = b.m_next;
            break;
          }
          e = a;
          a = a.m_next;
        }
        for (a = this.m_contactList; a;) {
          e = a.contact;
          a = a.next;
          var f = e.GetFixtureA(),
            k = e.GetFixtureB();
          b != f && b != k || this.m_world.m_contactManager.Destroy(e);
        }
        this.m_flags & d.e_activeFlag && b.DestroyProxy(this.m_world.m_contactManager.m_broadPhase);
        b.Destroy();
        b.m_body = null;
        b.m_next = null;
        --this.m_fixtureCount;
        this.ResetMassData();
      }
    };
    d.prototype.SetPositionAndAngle = function (b, a) {
      void 0 === a && (a = 0);
      if (1 != this.m_world.IsLocked()) {
        this.m_xf.R.Set(a);
        this.m_xf.position.SetV(b);
        b = this.m_xf.R;
        var e = this.m_sweep.localCenter;
        this.m_sweep.c.x = b.col1.x * e.x + b.col2.x * e.y;
        this.m_sweep.c.y = b.col1.y * e.x + b.col2.y * e.y;
        this.m_sweep.c.x += this.m_xf.position.x;
        this.m_sweep.c.y += this.m_xf.position.y;
        this.m_sweep.c0.SetV(this.m_sweep.c);
        this.m_sweep.a0 = this.m_sweep.a = a;
        b = this.m_world.m_contactManager.m_broadPhase;
        for (a = this.m_fixtureList; a; a = a.m_next) a.Synchronize(b, this.m_xf, this.m_xf);
        this.m_world.m_contactManager.FindNewContacts();
      }
    };
    d.prototype.SetTransform = function (b) {
      this.SetPositionAndAngle(b.position, b.GetAngle());
    };
    d.prototype.GetTransform = function () {
      return this.m_xf;
    };
    d.prototype.GetPosition = function () {
      return this.m_xf.position;
    };
    d.prototype.SetPosition = function (b) {
      this.SetPositionAndAngle(b, this.GetAngle());
    };
    d.prototype.GetAngle = function () {
      return this.m_sweep.a;
    };
    d.prototype.SetAngle = function (b) {
      void 0 === b && (b = 0);
      this.SetPositionAndAngle(this.GetPosition(), b);
    };
    d.prototype.GetWorldCenter = function () {
      return this.m_sweep.c;
    };
    d.prototype.GetLocalCenter = function () {
      return this.m_sweep.localCenter;
    };
    d.prototype.SetLinearVelocity = function (b) {
      this.m_type != d.b2_staticBody && this.m_linearVelocity.SetV(b);
    };
    d.prototype.GetLinearVelocity = function () {
      return this.m_linearVelocity;
    };
    d.prototype.SetAngularVelocity = function (b) {
      void 0 === b && (b = 0);
      this.m_type != d.b2_staticBody && (this.m_angularVelocity = b);
    };
    d.prototype.GetAngularVelocity = function () {
      return this.m_angularVelocity;
    };
    d.prototype.GetDefinition = function () {
      var b = new I();
      b.type = this.GetType();
      b.allowSleep = (this.m_flags & d.e_allowSleepFlag) == d.e_allowSleepFlag;
      b.angle = this.GetAngle();
      b.angularDamping = this.m_angularDamping;
      b.angularVelocity = this.m_angularVelocity;
      b.fixedRotation = (this.m_flags & d.e_fixedRotationFlag) == d.e_fixedRotationFlag;
      b.bullet = (this.m_flags & d.e_bulletFlag) == d.e_bulletFlag;
      b.awake = (this.m_flags & d.e_awakeFlag) == d.e_awakeFlag;
      b.linearDamping = this.m_linearDamping;
      b.linearVelocity.SetV(this.GetLinearVelocity());
      b.position = this.GetPosition();
      b.userData = this.GetUserData();
      return b;
    };
    d.prototype.ApplyForce = function (b, a) {
      this.m_type == d.b2_dynamicBody && (0 == this.IsAwake() && this.SetAwake(!0), this.m_force.x += b.x, this.m_force.y += b.y, this.m_torque += (a.x - this.m_sweep.c.x) * b.y - (a.y - this.m_sweep.c.y) * b.x);
    };
    d.prototype.ApplyTorque = function (b) {
      void 0 === b && (b = 0);
      this.m_type == d.b2_dynamicBody && (0 == this.IsAwake() && this.SetAwake(!0), this.m_torque += b);
    };
    d.prototype.ApplyImpulse = function (b, a) {
      this.m_type == d.b2_dynamicBody && (0 == this.IsAwake() && this.SetAwake(!0), this.m_linearVelocity.x += this.m_invMass * b.x, this.m_linearVelocity.y += this.m_invMass * b.y, this.m_angularVelocity += this.m_invI * ((a.x - this.m_sweep.c.x) * b.y - (a.y - this.m_sweep.c.y) * b.x));
    };
    d.prototype.Split = function (b) {
      for (var e = this.GetLinearVelocity().Copy(), f = this.GetAngularVelocity(), k = this.GetWorldCenter(), c = this.m_world.CreateBody(this.GetDefinition()), w, d = this.m_fixtureList; d;) if (b(d)) {
        var A = d.m_next;
        w ? w.m_next = A : this.m_fixtureList = A;
        this.m_fixtureCount--;
        d.m_next = c.m_fixtureList;
        c.m_fixtureList = d;
        c.m_fixtureCount++;
        d.m_body = c;
        d = A;
      } else w = d, d = d.m_next;
      this.ResetMassData();
      c.ResetMassData();
      w = this.GetWorldCenter();
      b = c.GetWorldCenter();
      w = a.AddVV(e, a.CrossFV(f, a.SubtractVV(w, k)));
      e = a.AddVV(e, a.CrossFV(f, a.SubtractVV(b, k)));
      this.SetLinearVelocity(w);
      c.SetLinearVelocity(e);
      this.SetAngularVelocity(f);
      c.SetAngularVelocity(f);
      this.SynchronizeFixtures();
      c.SynchronizeFixtures();
      return c;
    };
    d.prototype.Merge = function (b) {
      var a;
      for (a = b.m_fixtureList; a;) {
        var e = a.m_next;
        b.m_fixtureCount--;
        a.m_next = this.m_fixtureList;
        this.m_fixtureList = a;
        this.m_fixtureCount++;
        a.m_body = void 0;
        a = e;
      }
      this.GetWorldCenter();
      b.GetWorldCenter();
      this.GetLinearVelocity().Copy();
      b.GetLinearVelocity().Copy();
      this.GetAngularVelocity();
      b.GetAngularVelocity();
      this.ResetMassData();
      this.SynchronizeFixtures();
    };
    d.prototype.GetMass = function () {
      return this.m_mass;
    };
    d.prototype.GetInertia = function () {
      return this.m_I;
    };
    d.prototype.GetMassData = function (b) {
      b.mass = this.m_mass;
      b.I = this.m_I;
      b.center.SetV(this.m_sweep.localCenter);
    };
    d.prototype.SetMassData = function (b) {
      g.b2Assert(0 == this.m_world.IsLocked());
      if (1 != this.m_world.IsLocked() && this.m_type == d.b2_dynamicBody) {
        this.m_invI = this.m_I = this.m_invMass = 0;
        this.m_mass = b.mass;
        0 >= this.m_mass && (this.m_mass = 1);
        this.m_invMass = 1 / this.m_mass;
        0 < b.I && 0 == (this.m_flags & d.e_fixedRotationFlag) && (this.m_I = b.I - this.m_mass * (b.center.x * b.center.x + b.center.y * b.center.y), this.m_invI = 1 / this.m_I);
        var e = this.m_sweep.c.Copy();
        this.m_sweep.localCenter.SetV(b.center);
        this.m_sweep.c0.SetV(a.MulX(this.m_xf, this.m_sweep.localCenter));
        this.m_sweep.c.SetV(this.m_sweep.c0);
        this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - e.y);
        this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - e.x);
      }
    };
    d.prototype.ResetMassData = function () {
      this.m_invI = this.m_I = this.m_invMass = this.m_mass = 0;
      this.m_sweep.localCenter.SetZero();
      if (this.m_type != d.b2_staticBody && this.m_type != d.b2_kinematicBody) {
        for (var b = n.Make(0, 0), e = this.m_fixtureList; e; e = e.m_next) if (0 != e.m_density) {
          var f = e.GetMassData();
          this.m_mass += f.mass;
          b.x += f.center.x * f.mass;
          b.y += f.center.y * f.mass;
          this.m_I += f.I;
        }
        0 < this.m_mass ? (this.m_invMass = 1 / this.m_mass, b.x *= this.m_invMass, b.y *= this.m_invMass) : this.m_invMass = this.m_mass = 1;
        0 < this.m_I && 0 == (this.m_flags & d.e_fixedRotationFlag) ? (this.m_I -= this.m_mass * (b.x * b.x + b.y * b.y), this.m_I *= this.m_inertiaScale, g.b2Assert(0 < this.m_I), this.m_invI = 1 / this.m_I) : this.m_invI = this.m_I = 0;
        e = this.m_sweep.c.Copy();
        this.m_sweep.localCenter.SetV(b);
        this.m_sweep.c0.SetV(a.MulX(this.m_xf, this.m_sweep.localCenter));
        this.m_sweep.c.SetV(this.m_sweep.c0);
        this.m_linearVelocity.x += this.m_angularVelocity * -(this.m_sweep.c.y - e.y);
        this.m_linearVelocity.y += this.m_angularVelocity * +(this.m_sweep.c.x - e.x);
      }
    };
    d.prototype.GetWorldPoint = function (b) {
      var a = this.m_xf.R;
      b = new n(a.col1.x * b.x + a.col2.x * b.y, a.col1.y * b.x + a.col2.y * b.y);
      b.x += this.m_xf.position.x;
      b.y += this.m_xf.position.y;
      return b;
    };
    d.prototype.GetWorldVector = function (b) {
      return a.MulMV(this.m_xf.R, b);
    };
    d.prototype.GetLocalPoint = function (b) {
      return a.MulXT(this.m_xf, b);
    };
    d.prototype.GetLocalVector = function (b) {
      return a.MulTMV(this.m_xf.R, b);
    };
    d.prototype.GetLinearVelocityFromWorldPoint = function (b) {
      return new n(this.m_linearVelocity.x - this.m_angularVelocity * (b.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (b.x - this.m_sweep.c.x));
    };
    d.prototype.GetLinearVelocityFromLocalPoint = function (b) {
      var a = this.m_xf.R;
      b = new n(a.col1.x * b.x + a.col2.x * b.y, a.col1.y * b.x + a.col2.y * b.y);
      b.x += this.m_xf.position.x;
      b.y += this.m_xf.position.y;
      return new n(this.m_linearVelocity.x - this.m_angularVelocity * (b.y - this.m_sweep.c.y), this.m_linearVelocity.y + this.m_angularVelocity * (b.x - this.m_sweep.c.x));
    };
    d.prototype.GetLinearDamping = function () {
      return this.m_linearDamping;
    };
    d.prototype.SetLinearDamping = function (b) {
      void 0 === b && (b = 0);
      this.m_linearDamping = b;
    };
    d.prototype.GetAngularDamping = function () {
      return this.m_angularDamping;
    };
    d.prototype.SetAngularDamping = function (b) {
      void 0 === b && (b = 0);
      this.m_angularDamping = b;
    };
    d.prototype.SetType = function (b) {
      void 0 === b && (b = 0);
      if (this.m_type != b) for (this.m_type = b, this.ResetMassData(), this.m_type == d.b2_staticBody && (this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0), this.SetAwake(!0), this.m_force.SetZero(), this.m_torque = 0, b = this.m_contactList; b; b = b.next) b.contact.FlagForFiltering();
    };
    d.prototype.GetType = function () {
      return this.m_type;
    };
    d.prototype.SetBullet = function (b) {
      this.m_flags = b ? this.m_flags | d.e_bulletFlag : this.m_flags & ~d.e_bulletFlag;
    };
    d.prototype.IsBullet = function () {
      return (this.m_flags & d.e_bulletFlag) == d.e_bulletFlag;
    };
    d.prototype.SetSleepingAllowed = function (b) {
      b ? this.m_flags |= d.e_allowSleepFlag : (this.m_flags &= ~d.e_allowSleepFlag, this.SetAwake(!0));
    };
    d.prototype.SetAwake = function (b) {
      b ? (this.m_flags |= d.e_awakeFlag, this.m_sleepTime = 0) : (this.m_flags &= ~d.e_awakeFlag, this.m_sleepTime = 0, this.m_linearVelocity.SetZero(), this.m_angularVelocity = 0, this.m_force.SetZero(), this.m_torque = 0);
    };
    d.prototype.IsAwake = function () {
      return (this.m_flags & d.e_awakeFlag) == d.e_awakeFlag;
    };
    d.prototype.SetFixedRotation = function (b) {
      this.m_flags = b ? this.m_flags | d.e_fixedRotationFlag : this.m_flags & ~d.e_fixedRotationFlag;
      this.ResetMassData();
    };
    d.prototype.IsFixedRotation = function () {
      return (this.m_flags & d.e_fixedRotationFlag) == d.e_fixedRotationFlag;
    };
    d.prototype.SetActive = function (b) {
      if (b != this.IsActive()) {
        var a;
        if (b) for (this.m_flags |= d.e_activeFlag, b = this.m_world.m_contactManager.m_broadPhase, a = this.m_fixtureList; a; a = a.m_next) a.CreateProxy(b, this.m_xf);else {
          this.m_flags &= ~d.e_activeFlag;
          b = this.m_world.m_contactManager.m_broadPhase;
          for (a = this.m_fixtureList; a; a = a.m_next) a.DestroyProxy(b);
          for (b = this.m_contactList; b;) a = b, b = b.next, this.m_world.m_contactManager.Destroy(a.contact);
          this.m_contactList = null;
        }
      }
    };
    d.prototype.IsActive = function () {
      return (this.m_flags & d.e_activeFlag) == d.e_activeFlag;
    };
    d.prototype.IsSleepingAllowed = function () {
      return (this.m_flags & d.e_allowSleepFlag) == d.e_allowSleepFlag;
    };
    d.prototype.GetFixtureList = function () {
      return this.m_fixtureList;
    };
    d.prototype.GetJointList = function () {
      return this.m_jointList;
    };
    d.prototype.GetControllerList = function () {
      return this.m_controllerList;
    };
    d.prototype.GetContactList = function () {
      return this.m_contactList;
    };
    d.prototype.GetNext = function () {
      return this.m_next;
    };
    d.prototype.GetUserData = function () {
      return this.m_userData;
    };
    d.prototype.SetUserData = function (b) {
      this.m_userData = b;
    };
    d.prototype.GetWorld = function () {
      return this.m_world;
    };
    d.prototype.b2Body = function (b, a) {
      this.m_flags = 0;
      b.bullet && (this.m_flags |= d.e_bulletFlag);
      b.fixedRotation && (this.m_flags |= d.e_fixedRotationFlag);
      b.allowSleep && (this.m_flags |= d.e_allowSleepFlag);
      b.awake && (this.m_flags |= d.e_awakeFlag);
      b.active && (this.m_flags |= d.e_activeFlag);
      this.m_world = a;
      this.m_xf.position.SetV(b.position);
      this.m_xf.R.Set(b.angle);
      this.m_sweep.localCenter.SetZero();
      this.m_sweep.t0 = 1;
      this.m_sweep.a0 = this.m_sweep.a = b.angle;
      a = this.m_xf.R;
      var e = this.m_sweep.localCenter;
      this.m_sweep.c.x = a.col1.x * e.x + a.col2.x * e.y;
      this.m_sweep.c.y = a.col1.y * e.x + a.col2.y * e.y;
      this.m_sweep.c.x += this.m_xf.position.x;
      this.m_sweep.c.y += this.m_xf.position.y;
      this.m_sweep.c0.SetV(this.m_sweep.c);
      this.m_contactList = this.m_controllerList = this.m_jointList = null;
      this.m_controllerCount = 0;
      this.m_next = this.m_prev = null;
      this.m_linearVelocity.SetV(b.linearVelocity);
      this.m_angularVelocity = b.angularVelocity;
      this.m_linearDamping = b.linearDamping;
      this.m_angularDamping = b.angularDamping;
      this.m_force.Set(0, 0);
      this.m_sleepTime = this.m_torque = 0;
      this.m_type = b.type;
      this.m_invMass = this.m_type == d.b2_dynamicBody ? this.m_mass = 1 : this.m_mass = 0;
      this.m_invI = this.m_I = 0;
      this.m_inertiaScale = b.inertiaScale;
      this.m_userData = b.userData;
      this.m_fixtureList = null;
      this.m_fixtureCount = 0;
    };
    d.prototype.SynchronizeFixtures = function () {
      var b = d.s_xf1;
      b.R.Set(this.m_sweep.a0);
      var a = b.R,
        e = this.m_sweep.localCenter;
      b.position.x = this.m_sweep.c0.x - (a.col1.x * e.x + a.col2.x * e.y);
      b.position.y = this.m_sweep.c0.y - (a.col1.y * e.x + a.col2.y * e.y);
      e = this.m_world.m_contactManager.m_broadPhase;
      for (a = this.m_fixtureList; a; a = a.m_next) a.Synchronize(e, b, this.m_xf);
    };
    d.prototype.SynchronizeTransform = function () {
      this.m_xf.R.Set(this.m_sweep.a);
      var b = this.m_xf.R,
        a = this.m_sweep.localCenter;
      this.m_xf.position.x = this.m_sweep.c.x - (b.col1.x * a.x + b.col2.x * a.y);
      this.m_xf.position.y = this.m_sweep.c.y - (b.col1.y * a.x + b.col2.y * a.y);
    };
    d.prototype.ShouldCollide = function (b) {
      if (this.m_type != d.b2_dynamicBody && b.m_type != d.b2_dynamicBody) return !1;
      for (var a = this.m_jointList; a; a = a.next) if (a.other == b && 0 == a.joint.m_collideConnected) return !1;
      return !0;
    };
    d.prototype.Advance = function (b) {
      void 0 === b && (b = 0);
      this.m_sweep.Advance(b);
      this.m_sweep.c.SetV(this.m_sweep.c0);
      this.m_sweep.a = this.m_sweep.a0;
      this.SynchronizeTransform();
    };
    l.postDefs.push(function () {
      l.Dynamics.b2Body.s_xf1 = new q();
      l.Dynamics.b2Body.e_islandFlag = 1;
      l.Dynamics.b2Body.e_awakeFlag = 2;
      l.Dynamics.b2Body.e_allowSleepFlag = 4;
      l.Dynamics.b2Body.e_bulletFlag = 8;
      l.Dynamics.b2Body.e_fixedRotationFlag = 16;
      l.Dynamics.b2Body.e_activeFlag = 32;
      l.Dynamics.b2Body.b2_staticBody = 0;
      l.Dynamics.b2Body.b2_kinematicBody = 1;
      l.Dynamics.b2Body.b2_dynamicBody = 2;
    });
    I.b2BodyDef = function () {
      this.position = new n();
      this.linearVelocity = new n();
    };
    I.prototype.b2BodyDef = function () {
      this.userData = null;
      this.position.Set(0, 0);
      this.angle = 0;
      this.linearVelocity.Set(0, 0);
      this.angularDamping = this.linearDamping = this.angularVelocity = 0;
      this.awake = this.allowSleep = !0;
      this.bullet = this.fixedRotation = !1;
      this.type = d.b2_staticBody;
      this.active = !0;
      this.inertiaScale = 1;
    };
    H.b2ContactFilter = function () {};
    H.prototype.ShouldCollide = function (b, a) {
      b = b.GetFilterData();
      a = a.GetFilterData();
      return b.groupIndex == a.groupIndex && 0 != b.groupIndex ? 0 < b.groupIndex : 0 != (b.maskBits & a.categoryBits) && 0 != (b.categoryBits & a.maskBits);
    };
    H.prototype.RayCollide = function (b, a) {
      return b ? this.ShouldCollide(b instanceof M ? b : null, a) : !0;
    };
    l.postDefs.push(function () {
      l.Dynamics.b2ContactFilter.b2_defaultFilter = new H();
    });
    R.b2ContactImpulse = function () {
      this.normalImpulses = new N(g.b2_maxManifoldPoints);
      this.tangentImpulses = new N(g.b2_maxManifoldPoints);
    };
    G.b2ContactListener = function () {};
    G.prototype.BeginContact = function () {};
    G.prototype.EndContact = function () {};
    G.prototype.PreSolve = function () {};
    G.prototype.PostSolve = function () {};
    l.postDefs.push(function () {
      l.Dynamics.b2ContactListener.b2_defaultListener = new G();
    });
    P.b2ContactManager = function () {};
    P.prototype.b2ContactManager = function () {
      this.m_world = null;
      this.m_contactCount = 0;
      this.m_contactFilter = H.b2_defaultFilter;
      this.m_contactListener = G.b2_defaultListener;
      this.m_contactFactory = new f(this.m_allocator);
      this.m_broadPhase = new u();
    };
    P.prototype.AddPair = function (b, a) {
      b = b instanceof M ? b : null;
      a = a instanceof M ? a : null;
      var e = b.GetBody(),
        h = a.GetBody();
      if (e != h) {
        for (var f = h.GetContactList(); f;) {
          if (f.other == e) {
            var k = f.contact.GetFixtureA(),
              c = f.contact.GetFixtureB();
            if (k == b && c == a || k == a && c == b) return;
          }
          f = f.next;
        }
        0 != h.ShouldCollide(e) && 0 != this.m_contactFilter.ShouldCollide(b, a) && (f = this.m_contactFactory.Create(b, a), b = f.GetFixtureA(), a = f.GetFixtureB(), e = b.m_body, h = a.m_body, f.m_prev = null, f.m_next = this.m_world.m_contactList, null != this.m_world.m_contactList && (this.m_world.m_contactList.m_prev = f), this.m_world.m_contactList = f, f.m_nodeA.contact = f, f.m_nodeA.other = h, f.m_nodeA.prev = null, f.m_nodeA.next = e.m_contactList, null != e.m_contactList && (e.m_contactList.prev = f.m_nodeA), e.m_contactList = f.m_nodeA, f.m_nodeB.contact = f, f.m_nodeB.other = e, f.m_nodeB.prev = null, f.m_nodeB.next = h.m_contactList, null != h.m_contactList && (h.m_contactList.prev = f.m_nodeB), h.m_contactList = f.m_nodeB, ++this.m_world.m_contactCount);
      }
    };
    P.prototype.FindNewContacts = function () {
      this.m_broadPhase.UpdatePairs(l.generateCallback(this, this.AddPair));
    };
    P.prototype.Destroy = function (b) {
      var a = b.GetFixtureA(),
        e = b.GetFixtureB();
      a = a.GetBody();
      e = e.GetBody();
      b.IsTouching() && this.m_contactListener.EndContact(b);
      b.m_prev && (b.m_prev.m_next = b.m_next);
      b.m_next && (b.m_next.m_prev = b.m_prev);
      b == this.m_world.m_contactList && (this.m_world.m_contactList = b.m_next);
      b.m_nodeA.prev && (b.m_nodeA.prev.next = b.m_nodeA.next);
      b.m_nodeA.next && (b.m_nodeA.next.prev = b.m_nodeA.prev);
      b.m_nodeA == a.m_contactList && (a.m_contactList = b.m_nodeA.next);
      b.m_nodeB.prev && (b.m_nodeB.prev.next = b.m_nodeB.next);
      b.m_nodeB.next && (b.m_nodeB.next.prev = b.m_nodeB.prev);
      b.m_nodeB == e.m_contactList && (e.m_contactList = b.m_nodeB.next);
      this.m_contactFactory.Destroy(b);
      --this.m_contactCount;
    };
    P.prototype.Collide = function () {
      for (var b = this.m_world.m_contactList; b;) {
        var a = b.GetFixtureA(),
          e = b.GetFixtureB(),
          f = a.GetBody(),
          k = e.GetBody();
        if (0 == f.IsAwake() && 0 == k.IsAwake()) b = b.GetNext();else {
          if (b.m_flags & D.e_filterFlag) {
            if (0 == k.ShouldCollide(f)) {
              a = b;
              b = a.GetNext();
              this.Destroy(a);
              continue;
            }
            if (0 == this.m_contactFilter.ShouldCollide(a, e)) {
              a = b;
              b = a.GetNext();
              this.Destroy(a);
              continue;
            }
            b.m_flags &= ~D.e_filterFlag;
          }
          0 == this.m_broadPhase.TestOverlap(a.m_proxy, e.m_proxy) ? (a = b, b = a.GetNext(), this.Destroy(a)) : (b.Update(this.m_contactListener), b = b.GetNext());
        }
      }
    };
    l.postDefs.push(function () {
      l.Dynamics.b2ContactManager.s_evalCP = new m();
    });
    C.b2DebugDraw = function () {};
    C.prototype.b2DebugDraw = function () {};
    C.prototype.SetFlags = function () {};
    C.prototype.GetFlags = function () {};
    C.prototype.AppendFlags = function () {};
    C.prototype.ClearFlags = function () {};
    C.prototype.SetSprite = function () {};
    C.prototype.GetSprite = function () {};
    C.prototype.SetDrawScale = function () {};
    C.prototype.GetDrawScale = function () {};
    C.prototype.SetLineThickness = function () {};
    C.prototype.GetLineThickness = function () {};
    C.prototype.SetAlpha = function () {};
    C.prototype.GetAlpha = function () {};
    C.prototype.SetFillAlpha = function () {};
    C.prototype.GetFillAlpha = function () {};
    C.prototype.SetXFormScale = function () {};
    C.prototype.GetXFormScale = function () {};
    C.prototype.DrawPolygon = function () {};
    C.prototype.DrawSolidPolygon = function () {};
    C.prototype.DrawCircle = function () {};
    C.prototype.DrawSolidCircle = function () {};
    C.prototype.DrawSegment = function () {};
    C.prototype.DrawTransform = function () {};
    l.postDefs.push(function () {
      l.Dynamics.b2DebugDraw.e_shapeBit = 1;
      l.Dynamics.b2DebugDraw.e_jointBit = 2;
      l.Dynamics.b2DebugDraw.e_aabbBit = 4;
      l.Dynamics.b2DebugDraw.e_pairBit = 8;
      l.Dynamics.b2DebugDraw.e_centerOfMassBit = 16;
      l.Dynamics.b2DebugDraw.e_controllerBit = 32;
    });
    V.b2DestructionListener = function () {};
    V.prototype.SayGoodbyeJoint = function () {};
    V.prototype.SayGoodbyeFixture = function () {};
    J.b2FilterData = function () {
      this.categoryBits = 1;
      this.maskBits = 65535;
      this.groupIndex = 0;
    };
    J.prototype.Copy = function () {
      var b = new J();
      b.categoryBits = this.categoryBits;
      b.maskBits = this.maskBits;
      b.groupIndex = this.groupIndex;
      return b;
    };
    M.b2Fixture = function () {
      this.m_filter = new J();
    };
    M.prototype.GetType = function () {
      return this.m_shape.GetType();
    };
    M.prototype.GetShape = function () {
      return this.m_shape;
    };
    M.prototype.SetSensor = function (b) {
      if (this.m_isSensor != b && (this.m_isSensor = b, null != this.m_body)) for (b = this.m_body.GetContactList(); b;) {
        var a = b.contact,
          e = a.GetFixtureA(),
          f = a.GetFixtureB();
        e != this && f != this || a.SetSensor(e.IsSensor() || f.IsSensor());
        b = b.next;
      }
    };
    M.prototype.IsSensor = function () {
      return this.m_isSensor;
    };
    M.prototype.SetFilterData = function (b) {
      this.m_filter = b.Copy();
      if (!this.m_body) for (b = this.m_body.GetContactList(); b;) {
        var a = b.contact,
          e = a.GetFixtureA(),
          f = a.GetFixtureB();
        e != this && f != this || a.FlagForFiltering();
        b = b.next;
      }
    };
    M.prototype.GetFilterData = function () {
      return this.m_filter.Copy();
    };
    M.prototype.GetBody = function () {
      return this.m_body;
    };
    M.prototype.GetNext = function () {
      return this.m_next;
    };
    M.prototype.GetUserData = function () {
      return this.m_userData;
    };
    M.prototype.SetUserData = function (b) {
      this.m_userData = b;
    };
    M.prototype.TestPoint = function (b) {
      return this.m_shape.TestPoint(this.m_body.GetTransform(), b);
    };
    M.prototype.RayCast = function (b, a) {
      return this.m_shape.RayCast(b, a, this.m_body.GetTransform());
    };
    M.prototype.GetMassData = function (b) {
      void 0 === b && (b = null);
      null == b && (b = new y());
      this.m_shape.ComputeMass(b, this.m_density);
      return b;
    };
    M.prototype.SetDensity = function (b) {
      void 0 === b && (b = 0);
      this.m_density = b;
    };
    M.prototype.GetDensity = function () {
      return this.m_density;
    };
    M.prototype.GetFriction = function () {
      return this.m_friction;
    };
    M.prototype.SetFriction = function (b) {
      void 0 === b && (b = 0);
      this.m_friction = b;
    };
    M.prototype.GetRestitution = function () {
      return this.m_restitution;
    };
    M.prototype.SetRestitution = function (b) {
      void 0 === b && (b = 0);
      this.m_restitution = b;
    };
    M.prototype.GetAABB = function () {
      return this.m_aabb;
    };
    M.prototype.b2Fixture = function () {
      this.m_aabb = new x();
      this.m_shape = this.m_next = this.m_body = this.m_userData = null;
      this.m_restitution = this.m_friction = this.m_density = 0;
    };
    M.prototype.Create = function (b, a, e) {
      this.m_userData = e.userData;
      this.m_friction = e.friction;
      this.m_restitution = e.restitution;
      this.m_body = b;
      this.m_next = null;
      this.m_filter = e.filter.Copy();
      this.m_isSensor = e.isSensor;
      this.m_shape = e.shape.Copy();
      this.m_density = e.density;
    };
    M.prototype.Destroy = function () {
      this.m_shape = null;
    };
    M.prototype.CreateProxy = function (b, a) {
      this.m_shape.ComputeAABB(this.m_aabb, a);
      this.m_proxy = b.CreateProxy(this.m_aabb, this);
    };
    M.prototype.DestroyProxy = function (b) {
      null != this.m_proxy && (b.DestroyProxy(this.m_proxy), this.m_proxy = null);
    };
    M.prototype.Synchronize = function (b, e, f) {
      if (this.m_proxy) {
        var h = new x(),
          k = new x();
        this.m_shape.ComputeAABB(h, e);
        this.m_shape.ComputeAABB(k, f);
        this.m_aabb.Combine(h, k);
        e = a.SubtractVV(f.position, e.position);
        b.MoveProxy(this.m_proxy, this.m_aabb, e);
      }
    };
    W.b2FixtureDef = function () {
      this.filter = new J();
    };
    W.prototype.b2FixtureDef = function () {
      this.userData = this.shape = null;
      this.friction = .2;
      this.density = this.restitution = 0;
      this.filter.categoryBits = 1;
      this.filter.maskBits = 65535;
      this.filter.groupIndex = 0;
      this.isSensor = !1;
    };
    Q.b2Island = function () {};
    Q.prototype.b2Island = function () {
      this.m_bodies = new F();
      this.m_contacts = new F();
      this.m_joints = new F();
    };
    Q.prototype.Initialize = function (b, a, e, f, k, c) {
      void 0 === b && (b = 0);
      void 0 === a && (a = 0);
      void 0 === e && (e = 0);
      this.m_bodyCapacity = b;
      this.m_contactCapacity = a;
      this.m_jointCapacity = e;
      this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
      this.m_allocator = f;
      this.m_listener = k;
      this.m_contactSolver = c;
      for (f = this.m_bodies.length; f < b; f++) this.m_bodies[f] = null;
      for (f = this.m_contacts.length; f < a; f++) this.m_contacts[f] = null;
      for (f = this.m_joints.length; f < e; f++) this.m_joints[f] = null;
    };
    Q.prototype.Clear = function () {
      this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
    };
    Q.prototype.Solve = function (b, e, f) {
      var h;
      for (h = 0; h < this.m_bodyCount; ++h) {
        var k = this.m_bodies[h];
        k.GetType() == d.b2_dynamicBody && (k.m_linearVelocity.x += b.dt * (e.x + k.m_invMass * k.m_force.x), k.m_linearVelocity.y += b.dt * (e.y + k.m_invMass * k.m_force.y), k.m_angularVelocity += b.dt * k.m_invI * k.m_torque, k.m_linearVelocity.Multiply(a.Clamp(1 - b.dt * k.m_linearDamping, 0, 1)), k.m_angularVelocity *= a.Clamp(1 - b.dt * k.m_angularDamping, 0, 1));
      }
      this.m_contactSolver.Initialize(b, this.m_contacts, this.m_contactCount, this.m_allocator);
      e = this.m_contactSolver;
      e.InitVelocityConstraints(b);
      for (h = 0; h < this.m_jointCount; ++h) {
        var c = this.m_joints[h];
        c.InitVelocityConstraints(b);
      }
      for (h = 0; h < b.velocityIterations; ++h) {
        for (k = 0; k < this.m_jointCount; ++k) c = this.m_joints[k], c.SolveVelocityConstraints(b);
        e.SolveVelocityConstraints();
      }
      for (h = 0; h < this.m_jointCount; ++h) c = this.m_joints[h], c.FinalizeVelocityConstraints();
      e.FinalizeVelocityConstraints();
      for (h = 0; h < this.m_bodyCount; ++h) if (k = this.m_bodies[h], k.GetType() != d.b2_staticBody) {
        var w = b.dt * k.m_linearVelocity.x,
          t = b.dt * k.m_linearVelocity.y;
        w * w + t * t > g.b2_maxTranslationSquared && (k.m_linearVelocity.Normalize(), k.m_linearVelocity.x = k.m_linearVelocity.x * g.b2_maxTranslation * b.inv_dt, k.m_linearVelocity.y = k.m_linearVelocity.y * g.b2_maxTranslation * b.inv_dt);
        w = b.dt * k.m_angularVelocity;
        w * w > g.b2_maxRotationSquared && (k.m_angularVelocity = 0 > k.m_angularVelocity ? -g.b2_maxRotation * b.inv_dt : g.b2_maxRotation * b.inv_dt);
        k.m_sweep.c0.SetV(k.m_sweep.c);
        k.m_sweep.a0 = k.m_sweep.a;
        k.m_sweep.c.x += b.dt * k.m_linearVelocity.x;
        k.m_sweep.c.y += b.dt * k.m_linearVelocity.y;
        k.m_sweep.a += b.dt * k.m_angularVelocity;
        k.SynchronizeTransform();
      }
      for (h = 0; h < b.positionIterations; ++h) {
        w = e.SolvePositionConstraints(g.b2_contactBaumgarte);
        t = !0;
        for (k = 0; k < this.m_jointCount; ++k) c = this.m_joints[k], c = c.SolvePositionConstraints(g.b2_contactBaumgarte), t = t && c;
        if (w && t) break;
      }
      this.Report(e.m_constraints);
      if (f) {
        f = Number.MAX_VALUE;
        e = g.b2_linearSleepTolerance * g.b2_linearSleepTolerance;
        w = g.b2_angularSleepTolerance * g.b2_angularSleepTolerance;
        for (h = 0; h < this.m_bodyCount; ++h) k = this.m_bodies[h], k.GetType() != d.b2_staticBody && (0 == (k.m_flags & d.e_allowSleepFlag) && (f = k.m_sleepTime = 0), 0 == (k.m_flags & d.e_allowSleepFlag) || k.m_angularVelocity * k.m_angularVelocity > w || a.Dot(k.m_linearVelocity, k.m_linearVelocity) > e ? f = k.m_sleepTime = 0 : (k.m_sleepTime += b.dt, f = a.Min(f, k.m_sleepTime)));
        if (f >= g.b2_timeToSleep) for (h = 0; h < this.m_bodyCount; ++h) k = this.m_bodies[h], k.SetAwake(!1);
      }
    };
    Q.prototype.SolveTOI = function (b) {
      var a, e;
      this.m_contactSolver.Initialize(b, this.m_contacts, this.m_contactCount, this.m_allocator);
      var f = this.m_contactSolver;
      for (a = 0; a < this.m_jointCount; ++a) this.m_joints[a].InitVelocityConstraints(b);
      for (a = 0; a < b.velocityIterations; ++a) for (f.SolveVelocityConstraints(), e = 0; e < this.m_jointCount; ++e) this.m_joints[e].SolveVelocityConstraints(b);
      for (a = 0; a < this.m_bodyCount; ++a) if (e = this.m_bodies[a], e.GetType() != d.b2_staticBody) {
        var k = b.dt * e.m_linearVelocity.x,
          c = b.dt * e.m_linearVelocity.y;
        k * k + c * c > g.b2_maxTranslationSquared && (e.m_linearVelocity.Normalize(), e.m_linearVelocity.x = e.m_linearVelocity.x * g.b2_maxTranslation * b.inv_dt, e.m_linearVelocity.y = e.m_linearVelocity.y * g.b2_maxTranslation * b.inv_dt);
        k = b.dt * e.m_angularVelocity;
        k * k > g.b2_maxRotationSquared && (e.m_angularVelocity = 0 > e.m_angularVelocity ? -g.b2_maxRotation * b.inv_dt : g.b2_maxRotation * b.inv_dt);
        e.m_sweep.c0.SetV(e.m_sweep.c);
        e.m_sweep.a0 = e.m_sweep.a;
        e.m_sweep.c.x += b.dt * e.m_linearVelocity.x;
        e.m_sweep.c.y += b.dt * e.m_linearVelocity.y;
        e.m_sweep.a += b.dt * e.m_angularVelocity;
        e.SynchronizeTransform();
      }
      for (a = 0; a < b.positionIterations; ++a) {
        k = f.SolvePositionConstraints(.75);
        c = !0;
        for (e = 0; e < this.m_jointCount; ++e) {
          var w = this.m_joints[e].SolvePositionConstraints(g.b2_contactBaumgarte);
          c = c && w;
        }
        if (k && c) break;
      }
      this.Report(f.m_constraints);
    };
    Q.prototype.Report = function (b) {
      if (null != this.m_listener) for (var a = 0; a < this.m_contactCount; ++a) {
        for (var e = this.m_contacts[a], f = b[a], k = 0; k < f.pointCount; ++k) Q.s_impulse.normalImpulses[k] = f.points[k].normalImpulse, Q.s_impulse.tangentImpulses[k] = f.points[k].tangentImpulse;
        this.m_listener.PostSolve(e, Q.s_impulse);
      }
    };
    Q.prototype.AddBody = function (b) {
      b.m_islandIndex = this.m_bodyCount;
      this.m_bodies[this.m_bodyCount++] = b;
    };
    Q.prototype.AddContact = function (b) {
      this.m_contacts[this.m_contactCount++] = b;
    };
    Q.prototype.AddJoint = function (b) {
      this.m_joints[this.m_jointCount++] = b;
    };
    l.postDefs.push(function () {
      l.Dynamics.b2Island.s_impulse = new R();
    });
    e.b2TimeStep = function () {};
    e.prototype.Set = function (b) {
      this.dt = b.dt;
      this.inv_dt = b.inv_dt;
      this.positionIterations = b.positionIterations;
      this.velocityIterations = b.velocityIterations;
      this.warmStarting = b.warmStarting;
    };
    k.b2World = function () {
      this.s_stack = new F();
      this.m_contactManager = new P();
      this.m_contactSolver = new w();
      this.m_island = new Q();
    };
    k.prototype.b2World = function (b, a) {
      this.m_controllerList = this.m_jointList = this.m_contactList = this.m_bodyList = this.m_debugDraw = this.m_destructionListener = null;
      this.m_controllerCount = this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
      k.m_warmStarting = !0;
      k.m_continuousPhysics = !0;
      this.m_allowSleep = a;
      this.m_gravity = b;
      this.m_inv_dt0 = 0;
      this.m_contactManager.m_world = this;
      b = new I();
      this.m_groundBody = this.CreateBody(b);
    };
    k.prototype.SetDestructionListener = function (b) {
      this.m_destructionListener = b;
    };
    k.prototype.SetContactFilter = function (b) {
      this.m_contactManager.m_contactFilter = b;
    };
    k.prototype.SetContactListener = function (b) {
      this.m_contactManager.m_contactListener = b;
    };
    k.prototype.SetDebugDraw = function (b) {
      this.m_debugDraw = b;
    };
    k.prototype.SetBroadPhase = function (b) {
      var a = this.m_contactManager.m_broadPhase;
      this.m_contactManager.m_broadPhase = b;
      for (var e = this.m_bodyList; e; e = e.m_next) for (var f = e.m_fixtureList; f; f = f.m_next) f.m_proxy = b.CreateProxy(a.GetFatAABB(f.m_proxy), f);
    };
    k.prototype.Validate = function () {
      this.m_contactManager.m_broadPhase.Validate();
    };
    k.prototype.GetProxyCount = function () {
      return this.m_contactManager.m_broadPhase.GetProxyCount();
    };
    k.prototype.CreateBody = function (b) {
      if (1 == this.IsLocked()) return null;
      b = new d(b, this);
      b.m_prev = null;
      if (b.m_next = this.m_bodyList) this.m_bodyList.m_prev = b;
      this.m_bodyList = b;
      ++this.m_bodyCount;
      return b;
    };
    k.prototype.DestroyBody = function (b) {
      if (1 != this.IsLocked()) {
        for (var a = b.m_jointList; a;) {
          var e = a;
          a = a.next;
          this.m_destructionListener && this.m_destructionListener.SayGoodbyeJoint(e.joint);
          this.DestroyJoint(e.joint);
        }
        for (a = b.m_controllerList; a;) e = a, a = a.nextController, e.controller.RemoveBody(b);
        for (a = b.m_contactList; a;) e = a, a = a.next, this.m_contactManager.Destroy(e.contact);
        b.m_contactList = null;
        for (a = b.m_fixtureList; a;) e = a, a = a.m_next, this.m_destructionListener && this.m_destructionListener.SayGoodbyeFixture(e), e.DestroyProxy(this.m_contactManager.m_broadPhase), e.Destroy();
        b.m_fixtureList = null;
        b.m_fixtureCount = 0;
        b.m_prev && (b.m_prev.m_next = b.m_next);
        b.m_next && (b.m_next.m_prev = b.m_prev);
        b == this.m_bodyList && (this.m_bodyList = b.m_next);
        --this.m_bodyCount;
      }
    };
    k.prototype.CreateJoint = function (b) {
      var a = A.Create(b, null);
      a.m_prev = null;
      if (a.m_next = this.m_jointList) this.m_jointList.m_prev = a;
      this.m_jointList = a;
      ++this.m_jointCount;
      a.m_edgeA.joint = a;
      a.m_edgeA.other = a.m_bodyB;
      a.m_edgeA.prev = null;
      if (a.m_edgeA.next = a.m_bodyA.m_jointList) a.m_bodyA.m_jointList.prev = a.m_edgeA;
      a.m_bodyA.m_jointList = a.m_edgeA;
      a.m_edgeB.joint = a;
      a.m_edgeB.other = a.m_bodyA;
      a.m_edgeB.prev = null;
      if (a.m_edgeB.next = a.m_bodyB.m_jointList) a.m_bodyB.m_jointList.prev = a.m_edgeB;
      a.m_bodyB.m_jointList = a.m_edgeB;
      var e = b.bodyA,
        f = b.bodyB;
      if (0 == b.collideConnected) for (b = f.GetContactList(); b;) b.other == e && b.contact.FlagForFiltering(), b = b.next;
      return a;
    };
    k.prototype.DestroyJoint = function (b) {
      var a = b.m_collideConnected;
      b.m_prev && (b.m_prev.m_next = b.m_next);
      b.m_next && (b.m_next.m_prev = b.m_prev);
      b == this.m_jointList && (this.m_jointList = b.m_next);
      var e = b.m_bodyA,
        f = b.m_bodyB;
      e.SetAwake(!0);
      f.SetAwake(!0);
      b.m_edgeA.prev && (b.m_edgeA.prev.next = b.m_edgeA.next);
      b.m_edgeA.next && (b.m_edgeA.next.prev = b.m_edgeA.prev);
      b.m_edgeA == e.m_jointList && (e.m_jointList = b.m_edgeA.next);
      b.m_edgeA.prev = null;
      b.m_edgeA.next = null;
      b.m_edgeB.prev && (b.m_edgeB.prev.next = b.m_edgeB.next);
      b.m_edgeB.next && (b.m_edgeB.next.prev = b.m_edgeB.prev);
      b.m_edgeB == f.m_jointList && (f.m_jointList = b.m_edgeB.next);
      b.m_edgeB.prev = null;
      b.m_edgeB.next = null;
      A.Destroy(b, null);
      --this.m_jointCount;
      if (0 == a) for (b = f.GetContactList(); b;) b.other == e && b.contact.FlagForFiltering(), b = b.next;
    };
    k.prototype.AddController = function (b) {
      b.m_next = this.m_controllerList;
      b.m_prev = null;
      this.m_controllerList = b;
      b.m_world = this;
      this.m_controllerCount++;
      return b;
    };
    k.prototype.RemoveController = function (b) {
      b.m_prev && (b.m_prev.m_next = b.m_next);
      b.m_next && (b.m_next.m_prev = b.m_prev);
      this.m_controllerList == b && (this.m_controllerList = b.m_next);
      this.m_controllerCount--;
    };
    k.prototype.CreateController = function (b) {
      if (b.m_world != this) throw Error("Controller can only be a member of one world");
      b.m_next = this.m_controllerList;
      b.m_prev = null;
      this.m_controllerList && (this.m_controllerList.m_prev = b);
      this.m_controllerList = b;
      ++this.m_controllerCount;
      b.m_world = this;
      return b;
    };
    k.prototype.DestroyController = function (b) {
      b.Clear();
      b.m_next && (b.m_next.m_prev = b.m_prev);
      b.m_prev && (b.m_prev.m_next = b.m_next);
      b == this.m_controllerList && (this.m_controllerList = b.m_next);
      --this.m_controllerCount;
    };
    k.prototype.SetWarmStarting = function (b) {
      k.m_warmStarting = b;
    };
    k.prototype.SetContinuousPhysics = function (b) {
      k.m_continuousPhysics = b;
    };
    k.prototype.GetBodyCount = function () {
      return this.m_bodyCount;
    };
    k.prototype.GetJointCount = function () {
      return this.m_jointCount;
    };
    k.prototype.GetContactCount = function () {
      return this.m_contactCount;
    };
    k.prototype.SetGravity = function (b) {
      this.m_gravity = b;
    };
    k.prototype.GetGravity = function () {
      return this.m_gravity;
    };
    k.prototype.GetGroundBody = function () {
      return this.m_groundBody;
    };
    k.prototype.Step = function (b, a, e) {
      void 0 === b && (b = 0);
      void 0 === a && (a = 0);
      void 0 === e && (e = 0);
      this.m_flags & k.e_newFixture && (this.m_contactManager.FindNewContacts(), this.m_flags &= ~k.e_newFixture);
      this.m_flags |= k.e_locked;
      var h = k.s_timestep2;
      h.dt = b;
      h.velocityIterations = a;
      h.positionIterations = e;
      h.inv_dt = 0 < b ? 1 / b : 0;
      h.dtRatio = this.m_inv_dt0 * b;
      h.warmStarting = k.m_warmStarting;
      this.m_contactManager.Collide();
      0 < h.dt && this.Solve(h);
      k.m_continuousPhysics && 0 < h.dt && this.SolveTOI(h);
      0 < h.dt && (this.m_inv_dt0 = h.inv_dt);
      this.m_flags &= ~k.e_locked;
    };
    k.prototype.ClearForces = function () {
      for (var b = this.m_bodyList; b; b = b.m_next) b.m_force.SetZero(), b.m_torque = 0;
    };
    k.prototype.DrawDebugData = function () {
      if (null != this.m_debugDraw) {
        this.m_debugDraw.m_sprite.graphics.clear();
        var b = this.m_debugDraw.GetFlags(),
          a,
          e;
        new n();
        new n();
        new n();
        new x();
        new x();
        new n();
        new n();
        new n();
        new n();
        var f = new p(0, 0, 0);
        if (b & C.e_shapeBit) for (a = this.m_bodyList; a; a = a.m_next) {
          var c = a.m_xf;
          for (e = a.GetFixtureList(); e; e = e.m_next) {
            var w = e.GetShape();
            0 == a.IsActive() ? f.Set(.5, .5, .3) : a.GetType() == d.b2_staticBody ? f.Set(.5, .9, .5) : a.GetType() == d.b2_kinematicBody ? f.Set(.5, .5, .9) : 0 == a.IsAwake() ? f.Set(.6, .6, .6) : f.Set(.9, .7, .7);
            this.DrawShape(w, c, f);
          }
        }
        if (b & C.e_jointBit) for (a = this.m_jointList; a; a = a.m_next) this.DrawJoint(a);
        if (b & C.e_controllerBit) for (a = this.m_controllerList; a; a = a.m_next) a.Draw(this.m_debugDraw);
        if (b & C.e_pairBit) for (f.Set(.3, .9, .9), a = this.m_contactManager.m_contactList; a; a = a.GetNext()) w = a.GetFixtureA(), e = a.GetFixtureB(), w = w.GetAABB().GetCenter(), e = e.GetAABB().GetCenter(), this.m_debugDraw.DrawSegment(w, e, f);
        if (b & C.e_aabbBit) for (w = this.m_contactManager.m_broadPhase, c = [new n(), new n(), new n(), new n()], a = this.m_bodyList; a; a = a.GetNext()) if (0 != a.IsActive()) for (e = a.GetFixtureList(); e; e = e.GetNext()) {
          var A = w.GetFatAABB(e.m_proxy);
          c[0].Set(A.lowerBound.x, A.lowerBound.y);
          c[1].Set(A.upperBound.x, A.lowerBound.y);
          c[2].Set(A.upperBound.x, A.upperBound.y);
          c[3].Set(A.lowerBound.x, A.upperBound.y);
          this.m_debugDraw.DrawPolygon(c, 4, f);
        }
        if (b & C.e_centerOfMassBit) for (a = this.m_bodyList; a; a = a.m_next) c = k.s_xf, c.R = a.m_xf.R, c.position = a.GetWorldCenter(), this.m_debugDraw.DrawTransform(c);
      }
    };
    k.prototype.QueryAABB = function (b, a) {
      var e = this.m_contactManager.m_broadPhase;
      e.Query(function (a) {
        return b(e.GetUserData(a));
      }, a);
    };
    k.prototype.QueryShape = function (b, a, e) {
      void 0 === e && (e = null);
      null == e && (e = new q(), e.SetIdentity());
      var f = this.m_contactManager.m_broadPhase,
        k = new x();
      a.ComputeAABB(k, e);
      f.Query(function (k) {
        k = f.GetUserData(k) instanceof M ? f.GetUserData(k) : null;
        return T.TestOverlap(a, e, k.GetShape(), k.GetBody().GetTransform()) ? b(k) : !0;
      }, k);
    };
    k.prototype.QueryPoint = function (b, a) {
      var e = this.m_contactManager.m_broadPhase,
        f = new x();
      f.lowerBound.Set(a.x - g.b2_linearSlop, a.y - g.b2_linearSlop);
      f.upperBound.Set(a.x + g.b2_linearSlop, a.y + g.b2_linearSlop);
      e.Query(function (f) {
        f = e.GetUserData(f) instanceof M ? e.GetUserData(f) : null;
        return f.TestPoint(a) ? b(f) : !0;
      }, f);
    };
    k.prototype.RayCast = function (b, a, e) {
      var f = this.m_contactManager.m_broadPhase,
        k = new L(),
        h = new O(a, e);
      f.RayCast(function (h, c) {
        c = f.GetUserData(c);
        c = c instanceof M ? c : null;
        if (c.RayCast(k, h)) {
          h = k.fraction;
          var w = new n((1 - h) * a.x + h * e.x, (1 - h) * a.y + h * e.y);
          return b(c, w, k.normal, h);
        }
        return h.maxFraction;
      }, h);
    };
    k.prototype.RayCastOne = function (b, a) {
      var e;
      this.RayCast(function (b, a, f, k) {
        void 0 === k && (k = 0);
        e = b;
        return k;
      }, b, a);
      return e;
    };
    k.prototype.RayCastAll = function (b, a) {
      var e = new F();
      this.RayCast(function (b) {
        e[e.length] = b;
        return 1;
      }, b, a);
      return e;
    };
    k.prototype.GetBodyList = function () {
      return this.m_bodyList;
    };
    k.prototype.GetJointList = function () {
      return this.m_jointList;
    };
    k.prototype.GetContactList = function () {
      return this.m_contactList;
    };
    k.prototype.IsLocked = function () {
      return 0 < (this.m_flags & k.e_locked);
    };
    k.prototype.Solve = function (b) {
      for (var a, e = this.m_controllerList; e; e = e.m_next) e.Step(b);
      e = this.m_island;
      e.Initialize(this.m_bodyCount, this.m_contactCount, this.m_jointCount, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
      for (a = this.m_bodyList; a; a = a.m_next) a.m_flags &= ~d.e_islandFlag;
      for (var f = this.m_contactList; f; f = f.m_next) f.m_flags &= ~D.e_islandFlag;
      for (f = this.m_jointList; f; f = f.m_next) f.m_islandFlag = !1;
      parseInt(this.m_bodyCount);
      f = this.s_stack;
      for (var k = this.m_bodyList; k; k = k.m_next) if (!(k.m_flags & d.e_islandFlag) && 0 != k.IsAwake() && 0 != k.IsActive() && k.GetType() != d.b2_staticBody) {
        e.Clear();
        var c = 0;
        f[c++] = k;
        for (k.m_flags |= d.e_islandFlag; 0 < c;) if (a = f[--c], e.AddBody(a), 0 == a.IsAwake() && a.SetAwake(!0), a.GetType() != d.b2_staticBody) {
          for (var w, A = a.m_contactList; A; A = A.next) A.contact.m_flags & D.e_islandFlag || 1 == A.contact.IsSensor() || 0 == A.contact.IsEnabled() || 0 == A.contact.IsTouching() || (e.AddContact(A.contact), A.contact.m_flags |= D.e_islandFlag, w = A.other, w.m_flags & d.e_islandFlag || (f[c++] = w, w.m_flags |= d.e_islandFlag));
          for (a = a.m_jointList; a; a = a.next) 1 != a.joint.m_islandFlag && (w = a.other, 0 != w.IsActive() && (e.AddJoint(a.joint), a.joint.m_islandFlag = !0, w.m_flags & d.e_islandFlag || (f[c++] = w, w.m_flags |= d.e_islandFlag)));
        }
        e.Solve(b, this.m_gravity, this.m_allowSleep);
        for (c = 0; c < e.m_bodyCount; ++c) a = e.m_bodies[c], a.GetType() == d.b2_staticBody && (a.m_flags &= ~d.e_islandFlag);
      }
      for (c = 0; c < f.length && f[c]; ++c) f[c] = null;
      for (a = this.m_bodyList; a; a = a.m_next) 0 != a.IsAwake() && 0 != a.IsActive() && a.GetType() != d.b2_staticBody && a.SynchronizeFixtures();
      this.m_contactManager.FindNewContacts();
    };
    k.prototype.SolveTOI = function (b) {
      var a,
        e,
        f = this.m_island;
      f.Initialize(this.m_bodyCount, g.b2_maxTOIContactsPerIsland, g.b2_maxTOIJointsPerIsland, null, this.m_contactManager.m_contactListener, this.m_contactSolver);
      var c = k.s_queue;
      for (a = this.m_bodyList; a; a = a.m_next) a.m_flags &= ~d.e_islandFlag, a.m_sweep.t0 = 0;
      for (e = this.m_contactList; e; e = e.m_next) e.m_flags &= ~(D.e_toiFlag | D.e_islandFlag);
      for (e = this.m_jointList; e; e = e.m_next) e.m_islandFlag = !1;
      for (;;) {
        var w = null,
          A = 1;
        for (e = this.m_contactList; e; e = e.m_next) if (1 != e.IsSensor() && 0 != e.IsEnabled() && 0 != e.IsContinuous()) {
          if (e.m_flags & D.e_toiFlag) a = e.m_toi;else {
            a = e.m_fixtureA;
            var K = e.m_fixtureB;
            a = a.m_body;
            K = K.m_body;
            if (!(a.GetType() == d.b2_dynamicBody && 0 != a.IsAwake() || K.GetType() == d.b2_dynamicBody && 0 != K.IsAwake())) continue;
            var n = a.m_sweep.t0;
            a.m_sweep.t0 < K.m_sweep.t0 ? (n = K.m_sweep.t0, a.m_sweep.Advance(n)) : K.m_sweep.t0 < a.m_sweep.t0 && (n = a.m_sweep.t0, K.m_sweep.Advance(n));
            a = e.ComputeTOI(a.m_sweep, K.m_sweep);
            g.b2Assert(0 <= a && 1 >= a);
            0 < a && 1 > a && (a = (1 - a) * n + a, 1 < a && (a = 1));
            e.m_toi = a;
            e.m_flags |= D.e_toiFlag;
          }
          Number.MIN_VALUE < a && a < A && (w = e, A = a);
        }
        if (null == w || 1 - 100 * Number.MIN_VALUE < A) break;
        a = w.m_fixtureA;
        K = w.m_fixtureB;
        a = a.m_body;
        K = K.m_body;
        k.s_backupA.Set(a.m_sweep);
        k.s_backupB.Set(K.m_sweep);
        a.Advance(A);
        K.Advance(A);
        w.Update(this.m_contactManager.m_contactListener);
        w.m_flags &= ~D.e_toiFlag;
        if (1 == w.IsSensor() || 0 == w.IsEnabled()) a.m_sweep.Set(k.s_backupA), K.m_sweep.Set(k.s_backupB), a.SynchronizeTransform(), K.SynchronizeTransform();else if (0 != w.IsTouching()) {
          a.GetType() != d.b2_dynamicBody && (a = K);
          f.Clear();
          w = e = 0;
          c[e + w++] = a;
          for (a.m_flags |= d.e_islandFlag; 0 < w;) if (a = c[e++], --w, f.AddBody(a), 0 == a.IsAwake() && a.SetAwake(!0), a.GetType() == d.b2_dynamicBody) {
            for (K = a.m_contactList; K && f.m_contactCount != f.m_contactCapacity; K = K.next) K.contact.m_flags & D.e_islandFlag || 1 == K.contact.IsSensor() || 0 == K.contact.IsEnabled() || 0 == K.contact.IsTouching() || (f.AddContact(K.contact), K.contact.m_flags |= D.e_islandFlag, n = K.other, n.m_flags & d.e_islandFlag || (n.GetType() != d.b2_staticBody && (n.Advance(A), n.SetAwake(!0)), c[e + w] = n, ++w, n.m_flags |= d.e_islandFlag));
            for (a = a.m_jointList; a; a = a.next) f.m_jointCount != f.m_jointCapacity && 1 != a.joint.m_islandFlag && (n = a.other, 0 != n.IsActive() && (f.AddJoint(a.joint), a.joint.m_islandFlag = !0, n.m_flags & d.e_islandFlag || (n.GetType() != d.b2_staticBody && (n.Advance(A), n.SetAwake(!0)), c[e + w] = n, ++w, n.m_flags |= d.e_islandFlag)));
          }
          e = k.s_timestep;
          e.warmStarting = !1;
          e.dt = (1 - A) * b.dt;
          e.inv_dt = 1 / e.dt;
          e.dtRatio = 0;
          e.velocityIterations = b.velocityIterations;
          e.positionIterations = b.positionIterations;
          f.SolveTOI(e);
          for (A = 0; A < f.m_bodyCount; ++A) if (a = f.m_bodies[A], a.m_flags &= ~d.e_islandFlag, 0 != a.IsAwake() && a.GetType() == d.b2_dynamicBody) for (a.SynchronizeFixtures(), K = a.m_contactList; K; K = K.next) K.contact.m_flags &= ~D.e_toiFlag;
          for (A = 0; A < f.m_contactCount; ++A) e = f.m_contacts[A], e.m_flags &= ~(D.e_toiFlag | D.e_islandFlag);
          for (A = 0; A < f.m_jointCount; ++A) e = f.m_joints[A], e.m_islandFlag = !1;
          this.m_contactManager.FindNewContacts();
        }
      }
    };
    k.prototype.DrawJoint = function (b) {
      var a = b.GetBodyA(),
        e = b.GetBodyB(),
        f = a.m_xf.position,
        c = e.m_xf.position,
        w = b.GetAnchorA(),
        d = b.GetAnchorB(),
        g = k.s_jointColor;
      switch (b.m_type) {
        case A.e_distanceJoint:
          this.m_debugDraw.DrawSegment(w, d, g);
          break;
        case A.e_pulleyJoint:
          a = b instanceof K ? b : null;
          b = a.GetGroundAnchorA();
          a = a.GetGroundAnchorB();
          this.m_debugDraw.DrawSegment(b, w, g);
          this.m_debugDraw.DrawSegment(a, d, g);
          this.m_debugDraw.DrawSegment(b, a, g);
          break;
        case A.e_mouseJoint:
          this.m_debugDraw.DrawSegment(w, d, g);
          break;
        default:
          a != this.m_groundBody && this.m_debugDraw.DrawSegment(f, w, g), this.m_debugDraw.DrawSegment(w, d, g), e != this.m_groundBody && this.m_debugDraw.DrawSegment(c, d, g);
      }
    };
    k.prototype.DrawShape = function (b, e, f) {
      switch (b.m_type) {
        case T.e_circleShape:
          b = b instanceof z ? b : null;
          var k = a.MulX(e, b.m_p);
          this.m_debugDraw.DrawSolidCircle(k, b.m_radius, e.R.col1, f);
          break;
        case T.e_polygonShape:
          k = b instanceof S ? b : null;
          b = parseInt(k.GetVertexCount());
          var c = k.GetVertices(),
            w = new F(b);
          for (k = 0; k < b; ++k) w[k] = a.MulX(e, c[k]);
          this.m_debugDraw.DrawSolidPolygon(w, b, f);
          break;
        case T.e_edgeShape:
          b = b instanceof B ? b : null, this.m_debugDraw.DrawSegment(a.MulX(e, b.GetVertex1()), a.MulX(e, b.GetVertex2()), f);
      }
    };
    l.postDefs.push(function () {
      l.Dynamics.b2World.s_timestep2 = new e();
      l.Dynamics.b2World.s_xf = new q();
      l.Dynamics.b2World.s_backupA = new c();
      l.Dynamics.b2World.s_backupB = new c();
      l.Dynamics.b2World.s_timestep = new e();
      l.Dynamics.b2World.s_queue = new F();
      l.Dynamics.b2World.s_jointColor = new p(.5, .8, .8);
      l.Dynamics.b2World.e_newFixture = 1;
      l.Dynamics.b2World.e_locked = 2;
    });
  })();
  (function () {
    var a = l.Collision.Shapes.b2CircleShape,
      c = l.Collision.Shapes.b2EdgeShape,
      q = l.Collision.Shapes.b2PolygonShape,
      n = l.Collision.Shapes.b2Shape,
      p = l.Dynamics.Contacts.b2CircleContact,
      g = l.Dynamics.Contacts.b2Contact,
      x = l.Dynamics.Contacts.b2ContactConstraint,
      m = l.Dynamics.Contacts.b2ContactConstraintPoint,
      u = l.Dynamics.Contacts.b2ContactEdge,
      O = l.Dynamics.Contacts.b2ContactFactory,
      L = l.Dynamics.Contacts.b2ContactRegister,
      z = l.Dynamics.Contacts.b2ContactResult,
      B = l.Dynamics.Contacts.b2ContactSolver,
      y = l.Dynamics.Contacts.b2EdgeAndCircleContact,
      S = l.Dynamics.Contacts.b2NullContact,
      T = l.Dynamics.Contacts.b2PolyAndCircleContact,
      d = l.Dynamics.Contacts.b2PolyAndEdgeContact,
      I = l.Dynamics.Contacts.b2PolygonContact,
      H = l.Dynamics.Contacts.b2PositionSolverManifold,
      R = l.Dynamics.b2Body,
      G = l.Dynamics.b2TimeStep,
      P = l.Common.b2Settings,
      C = l.Common.Math.b2Mat22,
      V = l.Common.Math.b2Math,
      J = l.Common.Math.b2Vec2,
      M = l.Collision.b2Collision,
      W = l.Collision.b2ContactID,
      Q = l.Collision.b2Manifold,
      e = l.Collision.b2TimeOfImpact,
      k = l.Collision.b2TOIInput,
      D = l.Collision.b2WorldManifold;
    l.inherit(p, l.Dynamics.Contacts.b2Contact);
    p.prototype.__super = l.Dynamics.Contacts.b2Contact.prototype;
    p.b2CircleContact = function () {
      l.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
    };
    p.Create = function () {
      return new p();
    };
    p.Destroy = function () {};
    p.prototype.Reset = function (a, e) {
      this.__super.Reset.call(this, a, e);
    };
    p.prototype.Evaluate = function () {
      var e = this.m_fixtureA.GetBody(),
        k = this.m_fixtureB.GetBody();
      M.CollideCircles(this.m_manifold, this.m_fixtureA.GetShape() instanceof a ? this.m_fixtureA.GetShape() : null, e.m_xf, this.m_fixtureB.GetShape() instanceof a ? this.m_fixtureB.GetShape() : null, k.m_xf);
    };
    g.b2Contact = function () {
      this.m_nodeA = new u();
      this.m_nodeB = new u();
      this.m_manifold = new Q();
      this.m_oldManifold = new Q();
    };
    g.prototype.GetManifold = function () {
      return this.m_manifold;
    };
    g.prototype.GetWorldManifold = function (a) {
      var e = this.m_fixtureA.GetBody(),
        f = this.m_fixtureB.GetBody(),
        k = this.m_fixtureA.GetShape(),
        b = this.m_fixtureB.GetShape();
      a.Initialize(this.m_manifold, e.GetTransform(), k.m_radius, f.GetTransform(), b.m_radius);
    };
    g.prototype.IsTouching = function () {
      return (this.m_flags & g.e_touchingFlag) == g.e_touchingFlag;
    };
    g.prototype.IsContinuous = function () {
      return (this.m_flags & g.e_continuousFlag) == g.e_continuousFlag;
    };
    g.prototype.SetSensor = function (a) {
      this.m_flags = a ? this.m_flags | g.e_sensorFlag : this.m_flags & ~g.e_sensorFlag;
    };
    g.prototype.IsSensor = function () {
      return (this.m_flags & g.e_sensorFlag) == g.e_sensorFlag;
    };
    g.prototype.SetEnabled = function (a) {
      this.m_flags = a ? this.m_flags | g.e_enabledFlag : this.m_flags & ~g.e_enabledFlag;
    };
    g.prototype.IsEnabled = function () {
      return (this.m_flags & g.e_enabledFlag) == g.e_enabledFlag;
    };
    g.prototype.GetNext = function () {
      return this.m_next;
    };
    g.prototype.GetFixtureA = function () {
      return this.m_fixtureA;
    };
    g.prototype.GetFixtureB = function () {
      return this.m_fixtureB;
    };
    g.prototype.FlagForFiltering = function () {
      this.m_flags |= g.e_filterFlag;
    };
    g.prototype.b2Contact = function () {};
    g.prototype.Reset = function (a, e) {
      void 0 === a && (a = null);
      void 0 === e && (e = null);
      this.m_flags = g.e_enabledFlag;
      if (a && e) {
        if (a.IsSensor() || e.IsSensor()) this.m_flags |= g.e_sensorFlag;
        var f = a.GetBody(),
          k = e.GetBody();
        if (f.GetType() != R.b2_dynamicBody || f.IsBullet() || k.GetType() != R.b2_dynamicBody || k.IsBullet()) this.m_flags |= g.e_continuousFlag;
        this.m_fixtureA = a;
        this.m_fixtureB = e;
        this.m_manifold.m_pointCount = 0;
        this.m_next = this.m_prev = null;
        this.m_nodeA.contact = null;
        this.m_nodeA.prev = null;
        this.m_nodeA.next = null;
        this.m_nodeA.other = null;
        this.m_nodeB.contact = null;
        this.m_nodeB.prev = null;
        this.m_nodeB.next = null;
        this.m_nodeB.other = null;
      } else this.m_fixtureB = this.m_fixtureA = null;
    };
    g.prototype.Update = function (a) {
      var e = this.m_oldManifold;
      this.m_oldManifold = this.m_manifold;
      this.m_manifold = e;
      this.m_flags |= g.e_enabledFlag;
      var f = !1;
      e = (this.m_flags & g.e_touchingFlag) == g.e_touchingFlag;
      var k = this.m_fixtureA.m_body,
        b = this.m_fixtureB.m_body,
        c = this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);
      if (this.m_flags & g.e_sensorFlag) c && (f = this.m_fixtureA.GetShape(), c = this.m_fixtureB.GetShape(), k = k.GetTransform(), b = b.GetTransform(), f = n.TestOverlap(f, k, c, b)), this.m_manifold.m_pointCount = 0;else {
        k.GetType() != R.b2_dynamicBody || k.IsBullet() || b.GetType() != R.b2_dynamicBody || b.IsBullet() ? this.m_flags |= g.e_continuousFlag : this.m_flags &= ~g.e_continuousFlag;
        if (c) for (this.Evaluate(), f = 0 < this.m_manifold.m_pointCount, c = 0; c < this.m_manifold.m_pointCount; ++c) {
          var d = this.m_manifold.m_points[c];
          d.m_normalImpulse = 0;
          d.m_tangentImpulse = 0;
          for (var r = d.m_id, D = 0; D < this.m_oldManifold.m_pointCount; ++D) {
            var p = this.m_oldManifold.m_points[D];
            if (p.m_id.key == r.key) {
              d.m_normalImpulse = p.m_normalImpulse;
              d.m_tangentImpulse = p.m_tangentImpulse;
              break;
            }
          }
        } else this.m_manifold.m_pointCount = 0;
        f != e && (k.SetAwake(!0), b.SetAwake(!0));
      }
      this.m_flags = f ? this.m_flags | g.e_touchingFlag : this.m_flags & ~g.e_touchingFlag;
      0 == e && 1 == f && a.BeginContact(this);
      1 == e && 0 == f && a.EndContact(this);
      0 == (this.m_flags & g.e_sensorFlag) && a.PreSolve(this, this.m_oldManifold);
    };
    g.prototype.Evaluate = function () {};
    g.prototype.ComputeTOI = function (a, k) {
      g.s_input.proxyA.Set(this.m_fixtureA.GetShape());
      g.s_input.proxyB.Set(this.m_fixtureB.GetShape());
      g.s_input.sweepA = a;
      g.s_input.sweepB = k;
      g.s_input.tolerance = P.b2_linearSlop;
      return e.TimeOfImpact(g.s_input);
    };
    l.postDefs.push(function () {
      l.Dynamics.Contacts.b2Contact.e_sensorFlag = 1;
      l.Dynamics.Contacts.b2Contact.e_continuousFlag = 2;
      l.Dynamics.Contacts.b2Contact.e_islandFlag = 4;
      l.Dynamics.Contacts.b2Contact.e_toiFlag = 8;
      l.Dynamics.Contacts.b2Contact.e_touchingFlag = 16;
      l.Dynamics.Contacts.b2Contact.e_enabledFlag = 32;
      l.Dynamics.Contacts.b2Contact.e_filterFlag = 64;
      l.Dynamics.Contacts.b2Contact.s_input = new k();
    });
    x.b2ContactConstraint = function () {
      this.localPlaneNormal = new J();
      this.localPoint = new J();
      this.normal = new J();
      this.normalMass = new C();
      this.K = new C();
    };
    x.prototype.b2ContactConstraint = function () {
      this.points = new F(P.b2_maxManifoldPoints);
      for (var a = 0; a < P.b2_maxManifoldPoints; a++) this.points[a] = new m();
    };
    m.b2ContactConstraintPoint = function () {
      this.localPoint = new J();
      this.rA = new J();
      this.rB = new J();
    };
    u.b2ContactEdge = function () {};
    O.b2ContactFactory = function () {};
    O.prototype.b2ContactFactory = function (a) {
      this.m_allocator = a;
      this.InitializeRegisters();
    };
    O.prototype.AddType = function (a, e, k, c) {
      void 0 === k && (k = 0);
      void 0 === c && (c = 0);
      this.m_registers[k][c].createFcn = a;
      this.m_registers[k][c].destroyFcn = e;
      this.m_registers[k][c].primary = !0;
      k != c && (this.m_registers[c][k].createFcn = a, this.m_registers[c][k].destroyFcn = e, this.m_registers[c][k].primary = !1);
    };
    O.prototype.InitializeRegisters = function () {
      this.m_registers = new F(n.e_shapeTypeCount);
      for (var a = 0; a < n.e_shapeTypeCount; a++) {
        this.m_registers[a] = new F(n.e_shapeTypeCount);
        for (var e = 0; e < n.e_shapeTypeCount; e++) this.m_registers[a][e] = new L();
      }
      this.AddType(p.Create, p.Destroy, n.e_circleShape, n.e_circleShape);
      this.AddType(T.Create, T.Destroy, n.e_polygonShape, n.e_circleShape);
      this.AddType(I.Create, I.Destroy, n.e_polygonShape, n.e_polygonShape);
      this.AddType(y.Create, y.Destroy, n.e_edgeShape, n.e_circleShape);
      this.AddType(d.Create, d.Destroy, n.e_polygonShape, n.e_edgeShape);
    };
    O.prototype.Create = function (a, e) {
      var k = parseInt(a.GetType()),
        f = parseInt(e.GetType());
      k = this.m_registers[k][f];
      if (k.pool) return f = k.pool, k.pool = f.m_next, k.poolCount--, f.Reset(a, e), f;
      f = k.createFcn;
      return null != f ? (k.primary ? (f = f(this.m_allocator), f.Reset(a, e)) : (f = f(this.m_allocator), f.Reset(e, a)), f) : null;
    };
    O.prototype.Destroy = function (a) {
      0 < a.m_manifold.m_pointCount && (a.m_fixtureA.m_body.SetAwake(!0), a.m_fixtureB.m_body.SetAwake(!0));
      var e = parseInt(a.m_fixtureA.GetType()),
        k = parseInt(a.m_fixtureB.GetType());
      e = this.m_registers[e][k];
      e.poolCount++;
      a.m_next = e.pool;
      e.pool = a;
      e = e.destroyFcn;
      e(a, this.m_allocator);
    };
    L.b2ContactRegister = function () {};
    z.b2ContactResult = function () {
      this.position = new J();
      this.normal = new J();
      this.id = new W();
    };
    B.b2ContactSolver = function () {
      this.m_step = new G();
      this.m_constraints = new F();
    };
    B.prototype.b2ContactSolver = function () {};
    B.prototype.Initialize = function (a, e, k, c) {
      void 0 === k && (k = 0);
      this.m_step.Set(a);
      this.m_allocator = c;
      for (this.m_constraintCount = k; this.m_constraints.length < this.m_constraintCount;) this.m_constraints[this.m_constraints.length] = new x();
      for (a = 0; a < k; ++a) {
        var b = e[a];
        c = b.m_fixtureA;
        var f = b.m_fixtureB,
          w = c.m_shape.m_radius,
          d = f.m_shape.m_radius,
          A = c.m_body,
          g = f.m_body,
          D = b.GetManifold(),
          n = P.b2MixFriction(c.GetFriction(), f.GetFriction()),
          p = P.b2MixRestitution(c.GetRestitution(), f.GetRestitution()),
          K = A.m_linearVelocity.x,
          m = A.m_linearVelocity.y,
          q = g.m_linearVelocity.x,
          y = g.m_linearVelocity.y,
          u = A.m_angularVelocity,
          z = g.m_angularVelocity;
        P.b2Assert(0 < D.m_pointCount);
        B.s_worldManifold.Initialize(D, A.m_xf, w, g.m_xf, d);
        f = B.s_worldManifold.m_normal.x;
        b = B.s_worldManifold.m_normal.y;
        c = this.m_constraints[a];
        c.bodyA = A;
        c.bodyB = g;
        c.manifold = D;
        c.normal.x = f;
        c.normal.y = b;
        c.pointCount = D.m_pointCount;
        c.friction = n;
        c.restitution = p;
        c.localPlaneNormal.x = D.m_localPlaneNormal.x;
        c.localPlaneNormal.y = D.m_localPlaneNormal.y;
        c.localPoint.x = D.m_localPoint.x;
        c.localPoint.y = D.m_localPoint.y;
        c.radius = w + d;
        c.type = D.m_type;
        for (w = 0; w < c.pointCount; ++w) {
          n = D.m_points[w];
          d = c.points[w];
          d.normalImpulse = n.m_normalImpulse;
          d.tangentImpulse = n.m_tangentImpulse;
          d.localPoint.SetV(n.m_localPoint);
          n = d.rA.x = B.s_worldManifold.m_points[w].x - A.m_sweep.c.x;
          p = d.rA.y = B.s_worldManifold.m_points[w].y - A.m_sweep.c.y;
          var H = d.rB.x = B.s_worldManifold.m_points[w].x - g.m_sweep.c.x,
            C = d.rB.y = B.s_worldManifold.m_points[w].y - g.m_sweep.c.y,
            I = n * b - p * f,
            G = H * b - C * f;
          I *= I;
          G *= G;
          d.normalMass = 1 / (A.m_invMass + g.m_invMass + A.m_invI * I + g.m_invI * G);
          var J = A.m_mass * A.m_invMass + g.m_mass * g.m_invMass;
          J += A.m_mass * A.m_invI * I + g.m_mass * g.m_invI * G;
          d.equalizedMass = 1 / J;
          G = b;
          J = -f;
          I = n * J - p * G;
          G = H * J - C * G;
          I *= I;
          G *= G;
          d.tangentMass = 1 / (A.m_invMass + g.m_invMass + A.m_invI * I + g.m_invI * G);
          d.velocityBias = 0;
          n = c.normal.x * (q + -z * C - K - -u * p) + c.normal.y * (y + z * H - m - u * n);
          n < -P.b2_velocityThreshold && (d.velocityBias += -c.restitution * n);
        }
        2 == c.pointCount && (y = c.points[0], q = c.points[1], D = A.m_invMass, A = A.m_invI, K = g.m_invMass, g = g.m_invI, m = y.rA.x * b - y.rA.y * f, y = y.rB.x * b - y.rB.y * f, u = q.rA.x * b - q.rA.y * f, q = q.rB.x * b - q.rB.y * f, f = D + K + A * m * m + g * y * y, b = D + K + A * u * u + g * q * q, g = D + K + A * m * u + g * y * q, f * f < 100 * (f * b - g * g) ? (c.K.col1.Set(f, g), c.K.col2.Set(g, b), c.K.GetInverse(c.normalMass)) : c.pointCount = 1);
      }
    };
    B.prototype.InitVelocityConstraints = function (a) {
      for (var e = 0; e < this.m_constraintCount; ++e) {
        var k = this.m_constraints[e],
          f = k.bodyA,
          b = k.bodyB,
          c = f.m_invMass,
          d = f.m_invI,
          g = b.m_invMass,
          D = b.m_invI,
          n = k.normal.x,
          p = k.normal.y,
          m = p,
          q = -n,
          y;
        if (a.warmStarting) {
          var u = k.pointCount;
          for (y = 0; y < u; ++y) {
            var B = k.points[y];
            B.normalImpulse *= a.dtRatio;
            B.tangentImpulse *= a.dtRatio;
            var z = B.normalImpulse * n + B.tangentImpulse * m,
              x = B.normalImpulse * p + B.tangentImpulse * q;
            f.m_angularVelocity -= d * (B.rA.x * x - B.rA.y * z);
            f.m_linearVelocity.x -= c * z;
            f.m_linearVelocity.y -= c * x;
            b.m_angularVelocity += D * (B.rB.x * x - B.rB.y * z);
            b.m_linearVelocity.x += g * z;
            b.m_linearVelocity.y += g * x;
          }
        } else for (u = k.pointCount, y = 0; y < u; ++y) f = k.points[y], f.normalImpulse = 0, f.tangentImpulse = 0;
      }
    };
    B.prototype.SolveVelocityConstraints = function () {
      for (var a, e, k, c, b, h, d, g, D, n, p = 0; p < this.m_constraintCount; ++p) {
        b = this.m_constraints[p];
        var m = b.bodyA,
          q = b.bodyB,
          y = m.m_angularVelocity,
          u = q.m_angularVelocity,
          B = m.m_linearVelocity,
          z = q.m_linearVelocity,
          x = m.m_invMass,
          H = m.m_invI,
          C = q.m_invMass,
          I = q.m_invI;
        g = b.normal.x;
        var G = D = b.normal.y;
        n = -g;
        d = b.friction;
        for (a = 0; a < b.pointCount; a++) e = b.points[a], k = z.x - u * e.rB.y - B.x + y * e.rA.y, c = z.y + u * e.rB.x - B.y - y * e.rA.x, k = k * G + c * n, k = e.tangentMass * -k, c = d * e.normalImpulse, c = V.Clamp(e.tangentImpulse + k, -c, c), k = c - e.tangentImpulse, h = k * G, k *= n, B.x -= x * h, B.y -= x * k, y -= H * (e.rA.x * k - e.rA.y * h), z.x += C * h, z.y += C * k, u += I * (e.rB.x * k - e.rB.y * h), e.tangentImpulse = c;
        parseInt(b.pointCount);
        if (1 == b.pointCount) e = b.points[0], k = z.x + -u * e.rB.y - B.x - -y * e.rA.y, c = z.y + u * e.rB.x - B.y - y * e.rA.x, b = k * g + c * D, k = -e.normalMass * (b - e.velocityBias), c = e.normalImpulse + k, c = 0 < c ? c : 0, k = c - e.normalImpulse, h = k * g, k *= D, B.x -= x * h, B.y -= x * k, y -= H * (e.rA.x * k - e.rA.y * h), z.x += C * h, z.y += C * k, u += I * (e.rB.x * k - e.rB.y * h), e.normalImpulse = c;else {
          e = b.points[0];
          a = b.points[1];
          k = e.normalImpulse;
          d = a.normalImpulse;
          var J = (z.x - u * e.rB.y - B.x + y * e.rA.y) * g + (z.y + u * e.rB.x - B.y - y * e.rA.x) * D,
            S = (z.x - u * a.rB.y - B.x + y * a.rA.y) * g + (z.y + u * a.rB.x - B.y - y * a.rA.x) * D;
          c = J - e.velocityBias;
          h = S - a.velocityBias;
          n = b.K;
          c -= n.col1.x * k + n.col2.x * d;
          for (h -= n.col1.y * k + n.col2.y * d;;) {
            n = b.normalMass;
            G = -(n.col1.x * c + n.col2.x * h);
            n = -(n.col1.y * c + n.col2.y * h);
            if (0 <= G && 0 <= n) {
              k = G - k;
              d = n - d;
              b = k * g;
              k *= D;
              g *= d;
              D *= d;
              B.x -= x * (b + g);
              B.y -= x * (k + D);
              y -= H * (e.rA.x * k - e.rA.y * b + a.rA.x * D - a.rA.y * g);
              z.x += C * (b + g);
              z.y += C * (k + D);
              u += I * (e.rB.x * k - e.rB.y * b + a.rB.x * D - a.rB.y * g);
              e.normalImpulse = G;
              a.normalImpulse = n;
              break;
            }
            G = -e.normalMass * c;
            n = 0;
            S = b.K.col1.y * G + h;
            if (0 <= G && 0 <= S) {
              k = G - k;
              d = n - d;
              b = k * g;
              k *= D;
              g *= d;
              D *= d;
              B.x -= x * (b + g);
              B.y -= x * (k + D);
              y -= H * (e.rA.x * k - e.rA.y * b + a.rA.x * D - a.rA.y * g);
              z.x += C * (b + g);
              z.y += C * (k + D);
              u += I * (e.rB.x * k - e.rB.y * b + a.rB.x * D - a.rB.y * g);
              e.normalImpulse = G;
              a.normalImpulse = n;
              break;
            }
            G = 0;
            n = -a.normalMass * h;
            J = b.K.col2.x * n + c;
            if (0 <= n && 0 <= J) {
              k = G - k;
              d = n - d;
              b = k * g;
              k *= D;
              g *= d;
              D *= d;
              B.x -= x * (b + g);
              B.y -= x * (k + D);
              y -= H * (e.rA.x * k - e.rA.y * b + a.rA.x * D - a.rA.y * g);
              z.x += C * (b + g);
              z.y += C * (k + D);
              u += I * (e.rB.x * k - e.rB.y * b + a.rB.x * D - a.rB.y * g);
              e.normalImpulse = G;
              a.normalImpulse = n;
              break;
            }
            n = G = 0;
            J = c;
            S = h;
            if (0 <= J && 0 <= S) {
              k = G - k;
              d = n - d;
              b = k * g;
              k *= D;
              g *= d;
              D *= d;
              B.x -= x * (b + g);
              B.y -= x * (k + D);
              y -= H * (e.rA.x * k - e.rA.y * b + a.rA.x * D - a.rA.y * g);
              z.x += C * (b + g);
              z.y += C * (k + D);
              u += I * (e.rB.x * k - e.rB.y * b + a.rB.x * D - a.rB.y * g);
              e.normalImpulse = G;
              a.normalImpulse = n;
              break;
            }
            break;
          }
        }
        m.m_angularVelocity = y;
        q.m_angularVelocity = u;
      }
    };
    B.prototype.FinalizeVelocityConstraints = function () {
      for (var a = 0; a < this.m_constraintCount; ++a) for (var e = this.m_constraints[a], k = e.manifold, c = 0; c < e.pointCount; ++c) {
        var b = k.m_points[c],
          d = e.points[c];
        b.m_normalImpulse = d.normalImpulse;
        b.m_tangentImpulse = d.tangentImpulse;
      }
    };
    B.prototype.SolvePositionConstraints = function (a) {
      void 0 === a && (a = 0);
      for (var e = 0, k = 0; k < this.m_constraintCount; k++) {
        var c = this.m_constraints[k],
          b = c.bodyA,
          f = c.bodyB,
          d = b.m_mass * b.m_invMass,
          g = b.m_mass * b.m_invI,
          D = f.m_mass * f.m_invMass,
          n = f.m_mass * f.m_invI;
        B.s_psm.Initialize(c);
        for (var p = B.s_psm.m_normal, m = 0; m < c.pointCount; m++) {
          var q = c.points[m],
            y = B.s_psm.m_points[m],
            u = B.s_psm.m_separations[m],
            z = y.x - b.m_sweep.c.x,
            x = y.y - b.m_sweep.c.y,
            H = y.x - f.m_sweep.c.x;
          y = y.y - f.m_sweep.c.y;
          e = e < u ? e : u;
          u = V.Clamp(a * (u + P.b2_linearSlop), -P.b2_maxLinearCorrection, 0);
          u *= -q.equalizedMass;
          q = u * p.x;
          u *= p.y;
          b.m_sweep.c.x -= d * q;
          b.m_sweep.c.y -= d * u;
          b.m_sweep.a -= g * (z * u - x * q);
          b.SynchronizeTransform();
          f.m_sweep.c.x += D * q;
          f.m_sweep.c.y += D * u;
          f.m_sweep.a += n * (H * u - y * q);
          f.SynchronizeTransform();
        }
      }
      return e > -1.5 * P.b2_linearSlop;
    };
    l.postDefs.push(function () {
      l.Dynamics.Contacts.b2ContactSolver.s_worldManifold = new D();
      l.Dynamics.Contacts.b2ContactSolver.s_psm = new H();
    });
    l.inherit(y, l.Dynamics.Contacts.b2Contact);
    y.prototype.__super = l.Dynamics.Contacts.b2Contact.prototype;
    y.b2EdgeAndCircleContact = function () {
      l.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
    };
    y.Create = function () {
      return new y();
    };
    y.Destroy = function () {};
    y.prototype.Reset = function (a, e) {
      this.__super.Reset.call(this, a, e);
    };
    y.prototype.Evaluate = function () {
      var e = this.m_fixtureA.GetBody(),
        k = this.m_fixtureB.GetBody();
      this.b2CollideEdgeAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof c ? this.m_fixtureA.GetShape() : null, e.m_xf, this.m_fixtureB.GetShape() instanceof a ? this.m_fixtureB.GetShape() : null, k.m_xf);
    };
    y.prototype.b2CollideEdgeAndCircle = function () {};
    l.inherit(S, l.Dynamics.Contacts.b2Contact);
    S.prototype.__super = l.Dynamics.Contacts.b2Contact.prototype;
    S.b2NullContact = function () {
      l.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
    };
    S.prototype.b2NullContact = function () {
      this.__super.b2Contact.call(this);
    };
    S.prototype.Evaluate = function () {};
    l.inherit(T, l.Dynamics.Contacts.b2Contact);
    T.prototype.__super = l.Dynamics.Contacts.b2Contact.prototype;
    T.b2PolyAndCircleContact = function () {
      l.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
    };
    T.Create = function () {
      return new T();
    };
    T.Destroy = function () {};
    T.prototype.Reset = function (a, e) {
      this.__super.Reset.call(this, a, e);
      P.b2Assert(a.GetType() == n.e_polygonShape);
      P.b2Assert(e.GetType() == n.e_circleShape);
    };
    T.prototype.Evaluate = function () {
      var e = this.m_fixtureA.m_body,
        k = this.m_fixtureB.m_body;
      M.CollidePolygonAndCircle(this.m_manifold, this.m_fixtureA.GetShape() instanceof q ? this.m_fixtureA.GetShape() : null, e.m_xf, this.m_fixtureB.GetShape() instanceof a ? this.m_fixtureB.GetShape() : null, k.m_xf);
    };
    l.inherit(d, l.Dynamics.Contacts.b2Contact);
    d.prototype.__super = l.Dynamics.Contacts.b2Contact.prototype;
    d.b2PolyAndEdgeContact = function () {
      l.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
    };
    d.Create = function () {
      return new d();
    };
    d.Destroy = function () {};
    d.prototype.Reset = function (a, e) {
      this.__super.Reset.call(this, a, e);
      P.b2Assert(a.GetType() == n.e_polygonShape);
      P.b2Assert(e.GetType() == n.e_edgeShape);
    };
    d.prototype.Evaluate = function () {
      var a = this.m_fixtureA.GetBody(),
        e = this.m_fixtureB.GetBody();
      this.b2CollidePolyAndEdge(this.m_manifold, this.m_fixtureA.GetShape() instanceof q ? this.m_fixtureA.GetShape() : null, a.m_xf, this.m_fixtureB.GetShape() instanceof c ? this.m_fixtureB.GetShape() : null, e.m_xf);
    };
    d.prototype.b2CollidePolyAndEdge = function () {};
    l.inherit(I, l.Dynamics.Contacts.b2Contact);
    I.prototype.__super = l.Dynamics.Contacts.b2Contact.prototype;
    I.b2PolygonContact = function () {
      l.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
    };
    I.Create = function () {
      return new I();
    };
    I.Destroy = function () {};
    I.prototype.Reset = function (a, e) {
      this.__super.Reset.call(this, a, e);
    };
    I.prototype.Evaluate = function () {
      var a = this.m_fixtureA.GetBody(),
        e = this.m_fixtureB.GetBody();
      M.CollidePolygons(this.m_manifold, this.m_fixtureA.GetShape() instanceof q ? this.m_fixtureA.GetShape() : null, a.m_xf, this.m_fixtureB.GetShape() instanceof q ? this.m_fixtureB.GetShape() : null, e.m_xf);
    };
    H.b2PositionSolverManifold = function () {};
    H.prototype.b2PositionSolverManifold = function () {
      this.m_normal = new J();
      this.m_separations = new N(P.b2_maxManifoldPoints);
      this.m_points = new F(P.b2_maxManifoldPoints);
      for (var a = 0; a < P.b2_maxManifoldPoints; a++) this.m_points[a] = new J();
    };
    H.prototype.Initialize = function (a) {
      P.b2Assert(0 < a.pointCount);
      switch (a.type) {
        case Q.e_circles:
          var e = a.bodyA.m_xf.R;
          var k = a.localPoint;
          var c = a.bodyA.m_xf.position.x + (e.col1.x * k.x + e.col2.x * k.y);
          var b = a.bodyA.m_xf.position.y + (e.col1.y * k.x + e.col2.y * k.y);
          e = a.bodyB.m_xf.R;
          k = a.points[0].localPoint;
          var f = a.bodyB.m_xf.position.x + (e.col1.x * k.x + e.col2.x * k.y);
          e = a.bodyB.m_xf.position.y + (e.col1.y * k.x + e.col2.y * k.y);
          k = f - c;
          var d = e - b;
          var g = k * k + d * d;
          g > Number.MIN_VALUE * Number.MIN_VALUE ? (g = Math.sqrt(g), this.m_normal.x = k / g, this.m_normal.y = d / g) : (this.m_normal.x = 1, this.m_normal.y = 0);
          this.m_points[0].x = .5 * (c + f);
          this.m_points[0].y = .5 * (b + e);
          this.m_separations[0] = k * this.m_normal.x + d * this.m_normal.y - a.radius;
          break;
        case Q.e_faceA:
          e = a.bodyA.m_xf.R;
          k = a.localPlaneNormal;
          this.m_normal.x = e.col1.x * k.x + e.col2.x * k.y;
          this.m_normal.y = e.col1.y * k.x + e.col2.y * k.y;
          e = a.bodyA.m_xf.R;
          k = a.localPoint;
          f = a.bodyA.m_xf.position.x + (e.col1.x * k.x + e.col2.x * k.y);
          d = a.bodyA.m_xf.position.y + (e.col1.y * k.x + e.col2.y * k.y);
          e = a.bodyB.m_xf.R;
          for (c = 0; c < a.pointCount; ++c) k = a.points[c].localPoint, b = a.bodyB.m_xf.position.x + (e.col1.x * k.x + e.col2.x * k.y), k = a.bodyB.m_xf.position.y + (e.col1.y * k.x + e.col2.y * k.y), this.m_separations[c] = (b - f) * this.m_normal.x + (k - d) * this.m_normal.y - a.radius, this.m_points[c].x = b, this.m_points[c].y = k;
          break;
        case Q.e_faceB:
          e = a.bodyB.m_xf.R;
          k = a.localPlaneNormal;
          this.m_normal.x = e.col1.x * k.x + e.col2.x * k.y;
          this.m_normal.y = e.col1.y * k.x + e.col2.y * k.y;
          e = a.bodyB.m_xf.R;
          k = a.localPoint;
          f = a.bodyB.m_xf.position.x + (e.col1.x * k.x + e.col2.x * k.y);
          d = a.bodyB.m_xf.position.y + (e.col1.y * k.x + e.col2.y * k.y);
          e = a.bodyA.m_xf.R;
          for (c = 0; c < a.pointCount; ++c) k = a.points[c].localPoint, b = a.bodyA.m_xf.position.x + (e.col1.x * k.x + e.col2.x * k.y), k = a.bodyA.m_xf.position.y + (e.col1.y * k.x + e.col2.y * k.y), this.m_separations[c] = (b - f) * this.m_normal.x + (k - d) * this.m_normal.y - a.radius, this.m_points[c].Set(b, k);
          this.m_normal.x *= -1;
          this.m_normal.y *= -1;
      }
    };
    l.postDefs.push(function () {
      l.Dynamics.Contacts.b2PositionSolverManifold.circlePointA = new J();
      l.Dynamics.Contacts.b2PositionSolverManifold.circlePointB = new J();
    });
  })();
  (function () {
    var a = l.Common.Math.b2Mat22,
      c = l.Common.Math.b2Math,
      q = l.Common.Math.b2Vec2,
      n = l.Common.b2Color,
      p = l.Dynamics.Controllers.b2BuoyancyController,
      g = l.Dynamics.Controllers.b2ConstantAccelController,
      x = l.Dynamics.Controllers.b2ConstantForceController,
      m = l.Dynamics.Controllers.b2Controller,
      u = l.Dynamics.Controllers.b2ControllerEdge,
      O = l.Dynamics.Controllers.b2GravityController,
      L = l.Dynamics.Controllers.b2TensorDampingController;
    l.inherit(p, l.Dynamics.Controllers.b2Controller);
    p.prototype.__super = l.Dynamics.Controllers.b2Controller.prototype;
    p.b2BuoyancyController = function () {
      l.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
      this.normal = new q(0, -1);
      this.density = this.offset = 0;
      this.velocity = new q(0, 0);
      this.linearDrag = 2;
      this.angularDrag = 1;
      this.useDensity = !1;
      this.useWorldGravity = !0;
      this.gravity = null;
    };
    p.prototype.Step = function () {
      if (this.m_bodyList) {
        this.useWorldGravity && (this.gravity = this.GetWorld().GetGravity().Copy());
        for (var a = this.m_bodyList; a; a = a.nextBody) {
          var c = a.body;
          if (0 != c.IsAwake()) {
            for (var g = new q(), n = new q(), p = 0, d = 0, m = c.GetFixtureList(); m; m = m.GetNext()) {
              var u = new q(),
                x = m.GetShape().ComputeSubmergedArea(this.normal, this.offset, c.GetTransform(), u);
              p += x;
              g.x += x * u.x;
              g.y += x * u.y;
              d += 1 * x;
              n.x += x * u.x;
              n.y += x * u.y;
            }
            g.x /= p;
            g.y /= p;
            n.x /= d;
            n.y /= d;
            p < Number.MIN_VALUE || (d = this.gravity.GetNegative(), d.Multiply(this.density * p), c.ApplyForce(d, n), n = c.GetLinearVelocityFromWorldPoint(g), n.Subtract(this.velocity), n.Multiply(-this.linearDrag * p), c.ApplyForce(n, g), c.ApplyTorque(-c.GetInertia() / c.GetMass() * p * c.GetAngularVelocity() * this.angularDrag));
          }
        }
      }
    };
    p.prototype.Draw = function (a) {
      var c = new q(),
        g = new q();
      c.x = this.normal.x * this.offset + 1E3 * this.normal.y;
      c.y = this.normal.y * this.offset - 1E3 * this.normal.x;
      g.x = this.normal.x * this.offset - 1E3 * this.normal.y;
      g.y = this.normal.y * this.offset + 1E3 * this.normal.x;
      var p = new n(0, 0, 1);
      a.DrawSegment(c, g, p);
    };
    l.inherit(g, l.Dynamics.Controllers.b2Controller);
    g.prototype.__super = l.Dynamics.Controllers.b2Controller.prototype;
    g.b2ConstantAccelController = function () {
      l.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
      this.A = new q(0, 0);
    };
    g.prototype.Step = function (a) {
      a = new q(this.A.x * a.dt, this.A.y * a.dt);
      for (var c = this.m_bodyList; c; c = c.nextBody) {
        var g = c.body;
        g.IsAwake() && g.SetLinearVelocity(new q(g.GetLinearVelocity().x + a.x, g.GetLinearVelocity().y + a.y));
      }
    };
    l.inherit(x, l.Dynamics.Controllers.b2Controller);
    x.prototype.__super = l.Dynamics.Controllers.b2Controller.prototype;
    x.b2ConstantForceController = function () {
      l.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
      this.F = new q(0, 0);
    };
    x.prototype.Step = function () {
      for (var a = this.m_bodyList; a; a = a.nextBody) {
        var c = a.body;
        c.IsAwake() && c.ApplyForce(this.F, c.GetWorldCenter());
      }
    };
    m.b2Controller = function () {};
    m.prototype.Step = function () {};
    m.prototype.Draw = function () {};
    m.prototype.AddBody = function (a) {
      var c = new u();
      c.controller = this;
      c.body = a;
      c.nextBody = this.m_bodyList;
      c.prevBody = null;
      this.m_bodyList = c;
      c.nextBody && (c.nextBody.prevBody = c);
      this.m_bodyCount++;
      c.nextController = a.m_controllerList;
      c.prevController = null;
      a.m_controllerList = c;
      c.nextController && (c.nextController.prevController = c);
      a.m_controllerCount++;
    };
    m.prototype.RemoveBody = function (a) {
      for (var c = a.m_controllerList; c && c.controller != this;) c = c.nextController;
      c.prevBody && (c.prevBody.nextBody = c.nextBody);
      c.nextBody && (c.nextBody.prevBody = c.prevBody);
      c.nextController && (c.nextController.prevController = c.prevController);
      c.prevController && (c.prevController.nextController = c.nextController);
      this.m_bodyList == c && (this.m_bodyList = c.nextBody);
      a.m_controllerList == c && (a.m_controllerList = c.nextController);
      a.m_controllerCount--;
      this.m_bodyCount--;
    };
    m.prototype.Clear = function () {
      for (; this.m_bodyList;) this.RemoveBody(this.m_bodyList.body);
    };
    m.prototype.GetNext = function () {
      return this.m_next;
    };
    m.prototype.GetWorld = function () {
      return this.m_world;
    };
    m.prototype.GetBodyList = function () {
      return this.m_bodyList;
    };
    u.b2ControllerEdge = function () {};
    l.inherit(O, l.Dynamics.Controllers.b2Controller);
    O.prototype.__super = l.Dynamics.Controllers.b2Controller.prototype;
    O.b2GravityController = function () {
      l.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
      this.G = 1;
      this.invSqr = !0;
    };
    O.prototype.Step = function () {
      var a, c;
      if (this.invSqr) for (a = this.m_bodyList; a; a = a.nextBody) {
        var g = a.body;
        var n = g.GetWorldCenter();
        var p = g.GetMass();
        for (c = this.m_bodyList; c != a; c = c.nextBody) {
          var d = c.body;
          var m = d.GetWorldCenter();
          var u = m.x - n.x;
          var x = m.y - n.y;
          var G = u * u + x * x;
          G < Number.MIN_VALUE || (u = new q(u, x), u.Multiply(this.G / G / Math.sqrt(G) * p * d.GetMass()), g.IsAwake() && g.ApplyForce(u, n), u.Multiply(-1), d.IsAwake() && d.ApplyForce(u, m));
        }
      } else for (a = this.m_bodyList; a; a = a.nextBody) for (g = a.body, n = g.GetWorldCenter(), p = g.GetMass(), c = this.m_bodyList; c != a; c = c.nextBody) d = c.body, m = d.GetWorldCenter(), u = m.x - n.x, x = m.y - n.y, G = u * u + x * x, G < Number.MIN_VALUE || (u = new q(u, x), u.Multiply(this.G / G * p * d.GetMass()), g.IsAwake() && g.ApplyForce(u, n), u.Multiply(-1), d.IsAwake() && d.ApplyForce(u, m));
    };
    l.inherit(L, l.Dynamics.Controllers.b2Controller);
    L.prototype.__super = l.Dynamics.Controllers.b2Controller.prototype;
    L.b2TensorDampingController = function () {
      l.Dynamics.Controllers.b2Controller.b2Controller.apply(this, arguments);
      this.T = new a();
      this.maxTimestep = 0;
    };
    L.prototype.SetAxisAligned = function (a, c) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      this.T.col1.x = -a;
      this.T.col1.y = 0;
      this.T.col2.x = 0;
      this.T.col2.y = -c;
      this.maxTimestep = 0 < a || 0 < c ? 1 / Math.max(a, c) : 0;
    };
    L.prototype.Step = function (a) {
      a = a.dt;
      if (!(a <= Number.MIN_VALUE)) {
        a > this.maxTimestep && 0 < this.maxTimestep && (a = this.maxTimestep);
        for (var g = this.m_bodyList; g; g = g.nextBody) {
          var n = g.body;
          if (n.IsAwake()) {
            var p = n.GetWorldVector(c.MulMV(this.T, n.GetLocalVector(n.GetLinearVelocity())));
            n.SetLinearVelocity(new q(n.GetLinearVelocity().x + p.x * a, n.GetLinearVelocity().y + p.y * a));
          }
        }
      }
    };
  })();
  (function () {
    var a = l.Common.b2Settings,
      c = l.Common.Math.b2Mat22,
      q = l.Common.Math.b2Mat33,
      n = l.Common.Math.b2Math,
      p = l.Common.Math.b2Vec2,
      g = l.Common.Math.b2Vec3,
      x = l.Dynamics.Joints.b2DistanceJoint,
      m = l.Dynamics.Joints.b2DistanceJointDef,
      u = l.Dynamics.Joints.b2FrictionJoint,
      O = l.Dynamics.Joints.b2FrictionJointDef,
      L = l.Dynamics.Joints.b2GearJoint,
      z = l.Dynamics.Joints.b2GearJointDef,
      B = l.Dynamics.Joints.b2Jacobian,
      y = l.Dynamics.Joints.b2Joint,
      S = l.Dynamics.Joints.b2JointDef,
      T = l.Dynamics.Joints.b2JointEdge,
      d = l.Dynamics.Joints.b2LineJoint,
      I = l.Dynamics.Joints.b2LineJointDef,
      H = l.Dynamics.Joints.b2MouseJoint,
      R = l.Dynamics.Joints.b2MouseJointDef,
      G = l.Dynamics.Joints.b2PrismaticJoint,
      P = l.Dynamics.Joints.b2PrismaticJointDef,
      C = l.Dynamics.Joints.b2PulleyJoint,
      V = l.Dynamics.Joints.b2PulleyJointDef,
      J = l.Dynamics.Joints.b2RevoluteJoint,
      M = l.Dynamics.Joints.b2RevoluteJointDef,
      W = l.Dynamics.Joints.b2WeldJoint,
      Q = l.Dynamics.Joints.b2WeldJointDef;
    l.inherit(x, l.Dynamics.Joints.b2Joint);
    x.prototype.__super = l.Dynamics.Joints.b2Joint.prototype;
    x.b2DistanceJoint = function () {
      l.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.m_localAnchor1 = new p();
      this.m_localAnchor2 = new p();
      this.m_u = new p();
    };
    x.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
    };
    x.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
    };
    x.prototype.GetReactionForce = function (a) {
      void 0 === a && (a = 0);
      return new p(a * this.m_impulse * this.m_u.x, a * this.m_impulse * this.m_u.y);
    };
    x.prototype.GetReactionTorque = function () {
      return 0;
    };
    x.prototype.GetLength = function () {
      return this.m_length;
    };
    x.prototype.SetLength = function (a) {
      void 0 === a && (a = 0);
      this.m_length = a;
    };
    x.prototype.GetFrequency = function () {
      return this.m_frequencyHz;
    };
    x.prototype.SetFrequency = function (a) {
      void 0 === a && (a = 0);
      this.m_frequencyHz = a;
    };
    x.prototype.GetDampingRatio = function () {
      return this.m_dampingRatio;
    };
    x.prototype.SetDampingRatio = function (a) {
      void 0 === a && (a = 0);
      this.m_dampingRatio = a;
    };
    x.prototype.b2DistanceJoint = function (a) {
      this.__super.b2Joint.call(this, a);
      this.m_localAnchor1.SetV(a.localAnchorA);
      this.m_localAnchor2.SetV(a.localAnchorB);
      this.m_length = a.length;
      this.m_frequencyHz = a.frequencyHz;
      this.m_dampingRatio = a.dampingRatio;
      this.m_bias = this.m_gamma = this.m_impulse = 0;
    };
    x.prototype.InitVelocityConstraints = function (e) {
      var k = this.m_bodyA,
        c = this.m_bodyB;
      var f = k.m_xf.R;
      var d = this.m_localAnchor1.x - k.m_sweep.localCenter.x,
        g = this.m_localAnchor1.y - k.m_sweep.localCenter.y;
      var n = f.col1.x * d + f.col2.x * g;
      g = f.col1.y * d + f.col2.y * g;
      d = n;
      f = c.m_xf.R;
      var b = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
        h = this.m_localAnchor2.y - c.m_sweep.localCenter.y;
      n = f.col1.x * b + f.col2.x * h;
      h = f.col1.y * b + f.col2.y * h;
      b = n;
      this.m_u.x = c.m_sweep.c.x + b - k.m_sweep.c.x - d;
      this.m_u.y = c.m_sweep.c.y + h - k.m_sweep.c.y - g;
      n = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
      n > a.b2_linearSlop ? this.m_u.Multiply(1 / n) : this.m_u.SetZero();
      f = d * this.m_u.y - g * this.m_u.x;
      var t = b * this.m_u.y - h * this.m_u.x;
      f = k.m_invMass + k.m_invI * f * f + c.m_invMass + c.m_invI * t * t;
      this.m_mass = 0 != f ? 1 / f : 0;
      if (0 < this.m_frequencyHz) {
        n -= this.m_length;
        t = 2 * Math.PI * this.m_frequencyHz;
        var r = this.m_mass * t * t;
        this.m_gamma = e.dt * (2 * this.m_mass * this.m_dampingRatio * t + e.dt * r);
        this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
        this.m_bias = n * e.dt * r * this.m_gamma;
        this.m_mass = f + this.m_gamma;
        this.m_mass = 0 != this.m_mass ? 1 / this.m_mass : 0;
      }
      e.warmStarting ? (this.m_impulse *= e.dtRatio, e = this.m_impulse * this.m_u.x, f = this.m_impulse * this.m_u.y, k.m_linearVelocity.x -= k.m_invMass * e, k.m_linearVelocity.y -= k.m_invMass * f, k.m_angularVelocity -= k.m_invI * (d * f - g * e), c.m_linearVelocity.x += c.m_invMass * e, c.m_linearVelocity.y += c.m_invMass * f, c.m_angularVelocity += c.m_invI * (b * f - h * e)) : this.m_impulse = 0;
    };
    x.prototype.SolveVelocityConstraints = function () {
      var a = this.m_bodyA,
        k = this.m_bodyB;
      var c = a.m_xf.R;
      var f = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
        d = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
        g = c.col1.x * f + c.col2.x * d;
      d = c.col1.y * f + c.col2.y * d;
      f = g;
      c = k.m_xf.R;
      var n = this.m_localAnchor2.x - k.m_sweep.localCenter.x,
        b = this.m_localAnchor2.y - k.m_sweep.localCenter.y;
      g = c.col1.x * n + c.col2.x * b;
      b = c.col1.y * n + c.col2.y * b;
      n = g;
      g = -this.m_mass * (this.m_u.x * (k.m_linearVelocity.x + -k.m_angularVelocity * b - (a.m_linearVelocity.x + -a.m_angularVelocity * d)) + this.m_u.y * (k.m_linearVelocity.y + k.m_angularVelocity * n - (a.m_linearVelocity.y + a.m_angularVelocity * f)) + this.m_bias + this.m_gamma * this.m_impulse);
      this.m_impulse += g;
      c = g * this.m_u.x;
      g *= this.m_u.y;
      a.m_linearVelocity.x -= a.m_invMass * c;
      a.m_linearVelocity.y -= a.m_invMass * g;
      a.m_angularVelocity -= a.m_invI * (f * g - d * c);
      k.m_linearVelocity.x += k.m_invMass * c;
      k.m_linearVelocity.y += k.m_invMass * g;
      k.m_angularVelocity += k.m_invI * (n * g - b * c);
    };
    x.prototype.SolvePositionConstraints = function () {
      if (0 < this.m_frequencyHz) return !0;
      var e = this.m_bodyA,
        k = this.m_bodyB;
      var c = e.m_xf.R;
      var f = this.m_localAnchor1.x - e.m_sweep.localCenter.x,
        d = this.m_localAnchor1.y - e.m_sweep.localCenter.y,
        g = c.col1.x * f + c.col2.x * d;
      d = c.col1.y * f + c.col2.y * d;
      f = g;
      c = k.m_xf.R;
      var p = this.m_localAnchor2.x - k.m_sweep.localCenter.x,
        b = this.m_localAnchor2.y - k.m_sweep.localCenter.y;
      g = c.col1.x * p + c.col2.x * b;
      b = c.col1.y * p + c.col2.y * b;
      p = g;
      g = k.m_sweep.c.x + p - e.m_sweep.c.x - f;
      var h = k.m_sweep.c.y + b - e.m_sweep.c.y - d;
      c = Math.sqrt(g * g + h * h);
      g /= c;
      h /= c;
      c -= this.m_length;
      c = n.Clamp(c, -a.b2_maxLinearCorrection, a.b2_maxLinearCorrection);
      var t = -this.m_mass * c;
      this.m_u.Set(g, h);
      g = t * this.m_u.x;
      h = t * this.m_u.y;
      e.m_sweep.c.x -= e.m_invMass * g;
      e.m_sweep.c.y -= e.m_invMass * h;
      e.m_sweep.a -= e.m_invI * (f * h - d * g);
      k.m_sweep.c.x += k.m_invMass * g;
      k.m_sweep.c.y += k.m_invMass * h;
      k.m_sweep.a += k.m_invI * (p * h - b * g);
      e.SynchronizeTransform();
      k.SynchronizeTransform();
      return n.Abs(c) < a.b2_linearSlop;
    };
    l.inherit(m, l.Dynamics.Joints.b2JointDef);
    m.prototype.__super = l.Dynamics.Joints.b2JointDef.prototype;
    m.b2DistanceJointDef = function () {
      l.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.localAnchorA = new p();
      this.localAnchorB = new p();
    };
    m.prototype.b2DistanceJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = y.e_distanceJoint;
      this.length = 1;
      this.dampingRatio = this.frequencyHz = 0;
    };
    m.prototype.Initialize = function (a, k, c, f) {
      this.bodyA = a;
      this.bodyB = k;
      this.localAnchorA.SetV(this.bodyA.GetLocalPoint(c));
      this.localAnchorB.SetV(this.bodyB.GetLocalPoint(f));
      a = f.x - c.x;
      c = f.y - c.y;
      this.length = Math.sqrt(a * a + c * c);
      this.dampingRatio = this.frequencyHz = 0;
    };
    l.inherit(u, l.Dynamics.Joints.b2Joint);
    u.prototype.__super = l.Dynamics.Joints.b2Joint.prototype;
    u.b2FrictionJoint = function () {
      l.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.m_localAnchorA = new p();
      this.m_localAnchorB = new p();
      this.m_linearMass = new c();
      this.m_linearImpulse = new p();
    };
    u.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchorA);
    };
    u.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchorB);
    };
    u.prototype.GetReactionForce = function (a) {
      void 0 === a && (a = 0);
      return new p(a * this.m_linearImpulse.x, a * this.m_linearImpulse.y);
    };
    u.prototype.GetReactionTorque = function (a) {
      void 0 === a && (a = 0);
      return a * this.m_angularImpulse;
    };
    u.prototype.SetMaxForce = function (a) {
      void 0 === a && (a = 0);
      this.m_maxForce = a;
    };
    u.prototype.GetMaxForce = function () {
      return this.m_maxForce;
    };
    u.prototype.SetMaxTorque = function (a) {
      void 0 === a && (a = 0);
      this.m_maxTorque = a;
    };
    u.prototype.GetMaxTorque = function () {
      return this.m_maxTorque;
    };
    u.prototype.b2FrictionJoint = function (a) {
      this.__super.b2Joint.call(this, a);
      this.m_localAnchorA.SetV(a.localAnchorA);
      this.m_localAnchorB.SetV(a.localAnchorB);
      this.m_linearMass.SetZero();
      this.m_angularMass = 0;
      this.m_linearImpulse.SetZero();
      this.m_angularImpulse = 0;
      this.m_maxForce = a.maxForce;
      this.m_maxTorque = a.maxTorque;
    };
    u.prototype.InitVelocityConstraints = function (a) {
      var e = this.m_bodyA,
        d = this.m_bodyB;
      var f = e.m_xf.R;
      var g = this.m_localAnchorA.x - e.m_sweep.localCenter.x,
        n = this.m_localAnchorA.y - e.m_sweep.localCenter.y;
      var p = f.col1.x * g + f.col2.x * n;
      n = f.col1.y * g + f.col2.y * n;
      g = p;
      f = d.m_xf.R;
      var b = this.m_localAnchorB.x - d.m_sweep.localCenter.x,
        h = this.m_localAnchorB.y - d.m_sweep.localCenter.y;
      p = f.col1.x * b + f.col2.x * h;
      h = f.col1.y * b + f.col2.y * h;
      b = p;
      f = e.m_invMass;
      p = d.m_invMass;
      var t = e.m_invI,
        r = d.m_invI,
        m = new c();
      m.col1.x = f + p;
      m.col2.x = 0;
      m.col1.y = 0;
      m.col2.y = f + p;
      m.col1.x += t * n * n;
      m.col2.x += -t * g * n;
      m.col1.y += -t * g * n;
      m.col2.y += t * g * g;
      m.col1.x += r * h * h;
      m.col2.x += -r * b * h;
      m.col1.y += -r * b * h;
      m.col2.y += r * b * b;
      m.GetInverse(this.m_linearMass);
      this.m_angularMass = t + r;
      0 < this.m_angularMass && (this.m_angularMass = 1 / this.m_angularMass);
      a.warmStarting ? (this.m_linearImpulse.x *= a.dtRatio, this.m_linearImpulse.y *= a.dtRatio, this.m_angularImpulse *= a.dtRatio, a = this.m_linearImpulse, e.m_linearVelocity.x -= f * a.x, e.m_linearVelocity.y -= f * a.y, e.m_angularVelocity -= t * (g * a.y - n * a.x + this.m_angularImpulse), d.m_linearVelocity.x += p * a.x, d.m_linearVelocity.y += p * a.y, d.m_angularVelocity += r * (b * a.y - h * a.x + this.m_angularImpulse)) : (this.m_linearImpulse.SetZero(), this.m_angularImpulse = 0);
    };
    u.prototype.SolveVelocityConstraints = function (a) {
      var e = this.m_bodyA,
        c = this.m_bodyB,
        f = e.m_linearVelocity,
        d = e.m_angularVelocity,
        g = c.m_linearVelocity,
        m = c.m_angularVelocity,
        b = e.m_invMass,
        h = c.m_invMass,
        t = e.m_invI,
        r = c.m_invI;
      var q = e.m_xf.R;
      var u = this.m_localAnchorA.x - e.m_sweep.localCenter.x,
        y = this.m_localAnchorA.y - e.m_sweep.localCenter.y;
      var x = q.col1.x * u + q.col2.x * y;
      y = q.col1.y * u + q.col2.y * y;
      u = x;
      q = c.m_xf.R;
      var z = this.m_localAnchorB.x - c.m_sweep.localCenter.x,
        B = this.m_localAnchorB.y - c.m_sweep.localCenter.y;
      x = q.col1.x * z + q.col2.x * B;
      B = q.col1.y * z + q.col2.y * B;
      z = x;
      x = -this.m_angularMass * (m - d);
      var C = this.m_angularImpulse;
      q = a.dt * this.m_maxTorque;
      this.m_angularImpulse = n.Clamp(this.m_angularImpulse + x, -q, q);
      x = this.m_angularImpulse - C;
      d -= t * x;
      m += r * x;
      q = n.MulMV(this.m_linearMass, new p(-(g.x - m * B - f.x + d * y), -(g.y + m * z - f.y - d * u)));
      x = this.m_linearImpulse.Copy();
      this.m_linearImpulse.Add(q);
      q = a.dt * this.m_maxForce;
      this.m_linearImpulse.LengthSquared() > q * q && (this.m_linearImpulse.Normalize(), this.m_linearImpulse.Multiply(q));
      q = n.SubtractVV(this.m_linearImpulse, x);
      f.x -= b * q.x;
      f.y -= b * q.y;
      d -= t * (u * q.y - y * q.x);
      g.x += h * q.x;
      g.y += h * q.y;
      m += r * (z * q.y - B * q.x);
      e.m_angularVelocity = d;
      c.m_angularVelocity = m;
    };
    u.prototype.SolvePositionConstraints = function () {
      return !0;
    };
    l.inherit(O, l.Dynamics.Joints.b2JointDef);
    O.prototype.__super = l.Dynamics.Joints.b2JointDef.prototype;
    O.b2FrictionJointDef = function () {
      l.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.localAnchorA = new p();
      this.localAnchorB = new p();
    };
    O.prototype.b2FrictionJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = y.e_frictionJoint;
      this.maxTorque = this.maxForce = 0;
    };
    O.prototype.Initialize = function (a, c, d) {
      this.bodyA = a;
      this.bodyB = c;
      this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
      this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d));
    };
    l.inherit(L, l.Dynamics.Joints.b2Joint);
    L.prototype.__super = l.Dynamics.Joints.b2Joint.prototype;
    L.b2GearJoint = function () {
      l.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.m_groundAnchor1 = new p();
      this.m_groundAnchor2 = new p();
      this.m_localAnchor1 = new p();
      this.m_localAnchor2 = new p();
      this.m_J = new B();
    };
    L.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
    };
    L.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
    };
    L.prototype.GetReactionForce = function (a) {
      void 0 === a && (a = 0);
      return new p(a * this.m_impulse * this.m_J.linearB.x, a * this.m_impulse * this.m_J.linearB.y);
    };
    L.prototype.GetReactionTorque = function (a) {
      void 0 === a && (a = 0);
      var e = this.m_bodyB.m_xf.R,
        c = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x,
        f = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y,
        d = e.col1.x * c + e.col2.x * f;
      f = e.col1.y * c + e.col2.y * f;
      return a * (this.m_impulse * this.m_J.angularB - d * this.m_impulse * this.m_J.linearB.y + f * this.m_impulse * this.m_J.linearB.x);
    };
    L.prototype.GetRatio = function () {
      return this.m_ratio;
    };
    L.prototype.SetRatio = function (a) {
      void 0 === a && (a = 0);
      this.m_ratio = a;
    };
    L.prototype.b2GearJoint = function (a) {
      this.__super.b2Joint.call(this, a);
      var e = parseInt(a.joint1.m_type),
        c = parseInt(a.joint2.m_type);
      this.m_prismatic2 = this.m_revolute2 = this.m_prismatic1 = this.m_revolute1 = null;
      this.m_ground1 = a.joint1.GetBodyA();
      this.m_bodyA = a.joint1.GetBodyB();
      e == y.e_revoluteJoint ? (this.m_revolute1 = a.joint1 instanceof J ? a.joint1 : null, this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2), e = this.m_revolute1.GetJointAngle()) : (this.m_prismatic1 = a.joint1 instanceof G ? a.joint1 : null, this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1), this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2), e = this.m_prismatic1.GetJointTranslation());
      this.m_ground2 = a.joint2.GetBodyA();
      this.m_bodyB = a.joint2.GetBodyB();
      c == y.e_revoluteJoint ? (this.m_revolute2 = a.joint2 instanceof J ? a.joint2 : null, this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2), c = this.m_revolute2.GetJointAngle()) : (this.m_prismatic2 = a.joint2 instanceof G ? a.joint2 : null, this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1), this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2), c = this.m_prismatic2.GetJointTranslation());
      this.m_ratio = a.ratio;
      this.m_constant = e + this.m_ratio * c;
      this.m_impulse = 0;
    };
    L.prototype.InitVelocityConstraints = function (a) {
      var e = this.m_ground1,
        c = this.m_ground2,
        f = this.m_bodyA,
        d = this.m_bodyB,
        g = 0;
      this.m_J.SetZero();
      if (this.m_revolute1) this.m_J.angularA = -1, g += f.m_invI;else {
        var n = e.m_xf.R;
        var b = this.m_prismatic1.m_localXAxis1;
        e = n.col1.x * b.x + n.col2.x * b.y;
        b = n.col1.y * b.x + n.col2.y * b.y;
        n = f.m_xf.R;
        var h = this.m_localAnchor1.x - f.m_sweep.localCenter.x;
        var m = this.m_localAnchor1.y - f.m_sweep.localCenter.y;
        var r = n.col1.x * h + n.col2.x * m;
        m = n.col1.y * h + n.col2.y * m;
        n = r * b - m * e;
        this.m_J.linearA.Set(-e, -b);
        this.m_J.angularA = -n;
        g += f.m_invMass + f.m_invI * n * n;
      }
      this.m_revolute2 ? (this.m_J.angularB = -this.m_ratio, g += this.m_ratio * this.m_ratio * d.m_invI) : (n = c.m_xf.R, b = this.m_prismatic2.m_localXAxis1, e = n.col1.x * b.x + n.col2.x * b.y, b = n.col1.y * b.x + n.col2.y * b.y, n = d.m_xf.R, h = this.m_localAnchor2.x - d.m_sweep.localCenter.x, m = this.m_localAnchor2.y - d.m_sweep.localCenter.y, r = n.col1.x * h + n.col2.x * m, m = n.col1.y * h + n.col2.y * m, n = r * b - m * e, this.m_J.linearB.Set(-this.m_ratio * e, -this.m_ratio * b), this.m_J.angularB = -this.m_ratio * n, g += this.m_ratio * this.m_ratio * (d.m_invMass + d.m_invI * n * n));
      this.m_mass = 0 < g ? 1 / g : 0;
      a.warmStarting ? (f.m_linearVelocity.x += f.m_invMass * this.m_impulse * this.m_J.linearA.x, f.m_linearVelocity.y += f.m_invMass * this.m_impulse * this.m_J.linearA.y, f.m_angularVelocity += f.m_invI * this.m_impulse * this.m_J.angularA, d.m_linearVelocity.x += d.m_invMass * this.m_impulse * this.m_J.linearB.x, d.m_linearVelocity.y += d.m_invMass * this.m_impulse * this.m_J.linearB.y, d.m_angularVelocity += d.m_invI * this.m_impulse * this.m_J.angularB) : this.m_impulse = 0;
    };
    L.prototype.SolveVelocityConstraints = function () {
      var a = this.m_bodyA,
        c = this.m_bodyB,
        d = this.m_J.Compute(a.m_linearVelocity, a.m_angularVelocity, c.m_linearVelocity, c.m_angularVelocity);
      d *= -this.m_mass;
      this.m_impulse += d;
      a.m_linearVelocity.x += a.m_invMass * d * this.m_J.linearA.x;
      a.m_linearVelocity.y += a.m_invMass * d * this.m_J.linearA.y;
      a.m_angularVelocity += a.m_invI * d * this.m_J.angularA;
      c.m_linearVelocity.x += c.m_invMass * d * this.m_J.linearB.x;
      c.m_linearVelocity.y += c.m_invMass * d * this.m_J.linearB.y;
      c.m_angularVelocity += c.m_invI * d * this.m_J.angularB;
    };
    L.prototype.SolvePositionConstraints = function () {
      var e = this.m_bodyA,
        c = this.m_bodyB;
      var d = this.m_revolute1 ? this.m_revolute1.GetJointAngle() : this.m_prismatic1.GetJointTranslation();
      var f = this.m_revolute2 ? this.m_revolute2.GetJointAngle() : this.m_prismatic2.GetJointTranslation();
      d = -this.m_mass * (this.m_constant - (d + this.m_ratio * f));
      e.m_sweep.c.x += e.m_invMass * d * this.m_J.linearA.x;
      e.m_sweep.c.y += e.m_invMass * d * this.m_J.linearA.y;
      e.m_sweep.a += e.m_invI * d * this.m_J.angularA;
      c.m_sweep.c.x += c.m_invMass * d * this.m_J.linearB.x;
      c.m_sweep.c.y += c.m_invMass * d * this.m_J.linearB.y;
      c.m_sweep.a += c.m_invI * d * this.m_J.angularB;
      e.SynchronizeTransform();
      c.SynchronizeTransform();
      return 0 < a.b2_linearSlop;
    };
    l.inherit(z, l.Dynamics.Joints.b2JointDef);
    z.prototype.__super = l.Dynamics.Joints.b2JointDef.prototype;
    z.b2GearJointDef = function () {
      l.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
    };
    z.prototype.b2GearJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = y.e_gearJoint;
      this.joint2 = this.joint1 = null;
      this.ratio = 1;
    };
    B.b2Jacobian = function () {
      this.linearA = new p();
      this.linearB = new p();
    };
    B.prototype.SetZero = function () {
      this.linearA.SetZero();
      this.angularA = 0;
      this.linearB.SetZero();
      this.angularB = 0;
    };
    B.prototype.Set = function (a, c, d, f) {
      void 0 === c && (c = 0);
      void 0 === f && (f = 0);
      this.linearA.SetV(a);
      this.angularA = c;
      this.linearB.SetV(d);
      this.angularB = f;
    };
    B.prototype.Compute = function (a, c, d, f) {
      void 0 === c && (c = 0);
      void 0 === f && (f = 0);
      return this.linearA.x * a.x + this.linearA.y * a.y + this.angularA * c + (this.linearB.x * d.x + this.linearB.y * d.y) + this.angularB * f;
    };
    y.b2Joint = function () {
      this.m_edgeA = new T();
      this.m_edgeB = new T();
      this.m_localCenterA = new p();
      this.m_localCenterB = new p();
    };
    y.prototype.GetType = function () {
      return this.m_type;
    };
    y.prototype.GetAnchorA = function () {
      return null;
    };
    y.prototype.GetAnchorB = function () {
      return null;
    };
    y.prototype.GetReactionForce = function () {
      return null;
    };
    y.prototype.GetReactionTorque = function () {
      return 0;
    };
    y.prototype.GetBodyA = function () {
      return this.m_bodyA;
    };
    y.prototype.GetBodyB = function () {
      return this.m_bodyB;
    };
    y.prototype.GetNext = function () {
      return this.m_next;
    };
    y.prototype.GetUserData = function () {
      return this.m_userData;
    };
    y.prototype.SetUserData = function (a) {
      this.m_userData = a;
    };
    y.prototype.IsActive = function () {
      return this.m_bodyA.IsActive() && this.m_bodyB.IsActive();
    };
    y.Create = function (a) {
      var e = null;
      switch (a.type) {
        case y.e_distanceJoint:
          e = new x(a instanceof m ? a : null);
          break;
        case y.e_mouseJoint:
          e = new H(a instanceof R ? a : null);
          break;
        case y.e_prismaticJoint:
          e = new G(a instanceof P ? a : null);
          break;
        case y.e_revoluteJoint:
          e = new J(a instanceof M ? a : null);
          break;
        case y.e_pulleyJoint:
          e = new C(a instanceof V ? a : null);
          break;
        case y.e_gearJoint:
          e = new L(a instanceof z ? a : null);
          break;
        case y.e_lineJoint:
          e = new d(a instanceof I ? a : null);
          break;
        case y.e_weldJoint:
          e = new W(a instanceof Q ? a : null);
          break;
        case y.e_frictionJoint:
          e = new u(a instanceof O ? a : null);
      }
      return e;
    };
    y.Destroy = function () {};
    y.prototype.b2Joint = function (e) {
      a.b2Assert(e.bodyA != e.bodyB);
      this.m_type = e.type;
      this.m_next = this.m_prev = null;
      this.m_bodyA = e.bodyA;
      this.m_bodyB = e.bodyB;
      this.m_collideConnected = e.collideConnected;
      this.m_islandFlag = !1;
      this.m_userData = e.userData;
    };
    y.prototype.InitVelocityConstraints = function () {};
    y.prototype.SolveVelocityConstraints = function () {};
    y.prototype.FinalizeVelocityConstraints = function () {};
    y.prototype.SolvePositionConstraints = function () {
      return !1;
    };
    l.postDefs.push(function () {
      l.Dynamics.Joints.b2Joint.e_unknownJoint = 0;
      l.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
      l.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
      l.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
      l.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
      l.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
      l.Dynamics.Joints.b2Joint.e_gearJoint = 6;
      l.Dynamics.Joints.b2Joint.e_lineJoint = 7;
      l.Dynamics.Joints.b2Joint.e_weldJoint = 8;
      l.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
      l.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
      l.Dynamics.Joints.b2Joint.e_atLowerLimit = 1;
      l.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
      l.Dynamics.Joints.b2Joint.e_equalLimits = 3;
    });
    S.b2JointDef = function () {};
    S.prototype.b2JointDef = function () {
      this.type = y.e_unknownJoint;
      this.bodyB = this.bodyA = this.userData = null;
      this.collideConnected = !1;
    };
    T.b2JointEdge = function () {};
    l.inherit(d, l.Dynamics.Joints.b2Joint);
    d.prototype.__super = l.Dynamics.Joints.b2Joint.prototype;
    d.b2LineJoint = function () {
      l.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.m_localAnchor1 = new p();
      this.m_localAnchor2 = new p();
      this.m_localXAxis1 = new p();
      this.m_localYAxis1 = new p();
      this.m_axis = new p();
      this.m_perp = new p();
      this.m_K = new c();
      this.m_impulse = new p();
    };
    d.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
    };
    d.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
    };
    d.prototype.GetReactionForce = function (a) {
      void 0 === a && (a = 0);
      return new p(a * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x), a * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y));
    };
    d.prototype.GetReactionTorque = function (a) {
      void 0 === a && (a = 0);
      return a * this.m_impulse.y;
    };
    d.prototype.GetJointTranslation = function () {
      var a = this.m_bodyA,
        c = this.m_bodyB,
        d = a.GetWorldPoint(this.m_localAnchor1),
        f = c.GetWorldPoint(this.m_localAnchor2);
      c = f.x - d.x;
      d = f.y - d.y;
      a = a.GetWorldVector(this.m_localXAxis1);
      return a.x * c + a.y * d;
    };
    d.prototype.GetJointSpeed = function () {
      var a = this.m_bodyA,
        c = this.m_bodyB;
      var d = a.m_xf.R;
      var f = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
        g = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
        n = d.col1.x * f + d.col2.x * g;
      g = d.col1.y * f + d.col2.y * g;
      f = n;
      d = c.m_xf.R;
      var m = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
        b = this.m_localAnchor2.y - c.m_sweep.localCenter.y;
      n = d.col1.x * m + d.col2.x * b;
      b = d.col1.y * m + d.col2.y * b;
      m = n;
      d = c.m_sweep.c.x + m - (a.m_sweep.c.x + f);
      n = c.m_sweep.c.y + b - (a.m_sweep.c.y + g);
      var h = a.GetWorldVector(this.m_localXAxis1),
        p = a.m_linearVelocity,
        r = c.m_linearVelocity;
      a = a.m_angularVelocity;
      c = c.m_angularVelocity;
      return d * -a * h.y + n * a * h.x + (h.x * (r.x + -c * b - p.x - -a * g) + h.y * (r.y + c * m - p.y - a * f));
    };
    d.prototype.IsLimitEnabled = function () {
      return this.m_enableLimit;
    };
    d.prototype.EnableLimit = function (a) {
      this.m_bodyA.SetAwake(!0);
      this.m_bodyB.SetAwake(!0);
      this.m_enableLimit = a;
    };
    d.prototype.GetLowerLimit = function () {
      return this.m_lowerTranslation;
    };
    d.prototype.GetUpperLimit = function () {
      return this.m_upperTranslation;
    };
    d.prototype.SetLimits = function (a, c) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      this.m_bodyA.SetAwake(!0);
      this.m_bodyB.SetAwake(!0);
      this.m_lowerTranslation = a;
      this.m_upperTranslation = c;
    };
    d.prototype.IsMotorEnabled = function () {
      return this.m_enableMotor;
    };
    d.prototype.EnableMotor = function (a) {
      this.m_bodyA.SetAwake(!0);
      this.m_bodyB.SetAwake(!0);
      this.m_enableMotor = a;
    };
    d.prototype.SetMotorSpeed = function (a) {
      void 0 === a && (a = 0);
      this.m_bodyA.SetAwake(!0);
      this.m_bodyB.SetAwake(!0);
      this.m_motorSpeed = a;
    };
    d.prototype.GetMotorSpeed = function () {
      return this.m_motorSpeed;
    };
    d.prototype.SetMaxMotorForce = function (a) {
      void 0 === a && (a = 0);
      this.m_bodyA.SetAwake(!0);
      this.m_bodyB.SetAwake(!0);
      this.m_maxMotorForce = a;
    };
    d.prototype.GetMaxMotorForce = function () {
      return this.m_maxMotorForce;
    };
    d.prototype.GetMotorForce = function () {
      return this.m_motorImpulse;
    };
    d.prototype.b2LineJoint = function (a) {
      this.__super.b2Joint.call(this, a);
      this.m_localAnchor1.SetV(a.localAnchorA);
      this.m_localAnchor2.SetV(a.localAnchorB);
      this.m_localXAxis1.SetV(a.localAxisA);
      this.m_localYAxis1.x = -this.m_localXAxis1.y;
      this.m_localYAxis1.y = this.m_localXAxis1.x;
      this.m_impulse.SetZero();
      this.m_motorImpulse = this.m_motorMass = 0;
      this.m_lowerTranslation = a.lowerTranslation;
      this.m_upperTranslation = a.upperTranslation;
      this.m_maxMotorForce = a.maxMotorForce;
      this.m_motorSpeed = a.motorSpeed;
      this.m_enableLimit = a.enableLimit;
      this.m_enableMotor = a.enableMotor;
      this.m_limitState = y.e_inactiveLimit;
      this.m_axis.SetZero();
      this.m_perp.SetZero();
    };
    d.prototype.InitVelocityConstraints = function (e) {
      var c = this.m_bodyA,
        d = this.m_bodyB;
      this.m_localCenterA.SetV(c.GetLocalCenter());
      this.m_localCenterB.SetV(d.GetLocalCenter());
      var f = c.GetTransform();
      d.GetTransform();
      var g = c.m_xf.R;
      var m = this.m_localAnchor1.x - this.m_localCenterA.x,
        p = this.m_localAnchor1.y - this.m_localCenterA.y;
      var b = g.col1.x * m + g.col2.x * p;
      p = g.col1.y * m + g.col2.y * p;
      m = b;
      g = d.m_xf.R;
      var h = this.m_localAnchor2.x - this.m_localCenterB.x,
        t = this.m_localAnchor2.y - this.m_localCenterB.y;
      b = g.col1.x * h + g.col2.x * t;
      t = g.col1.y * h + g.col2.y * t;
      h = b;
      g = d.m_sweep.c.x + h - c.m_sweep.c.x - m;
      b = d.m_sweep.c.y + t - c.m_sweep.c.y - p;
      this.m_invMassA = c.m_invMass;
      this.m_invMassB = d.m_invMass;
      this.m_invIA = c.m_invI;
      this.m_invIB = d.m_invI;
      this.m_axis.SetV(n.MulMV(f.R, this.m_localXAxis1));
      this.m_a1 = (g + m) * this.m_axis.y - (b + p) * this.m_axis.x;
      this.m_a2 = h * this.m_axis.y - t * this.m_axis.x;
      this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
      this.m_motorMass = this.m_motorMass > Number.MIN_VALUE ? 1 / this.m_motorMass : 0;
      this.m_perp.SetV(n.MulMV(f.R, this.m_localYAxis1));
      this.m_s1 = (g + m) * this.m_perp.y - (b + p) * this.m_perp.x;
      this.m_s2 = h * this.m_perp.y - t * this.m_perp.x;
      f = this.m_invMassA;
      m = this.m_invMassB;
      p = this.m_invIA;
      h = this.m_invIB;
      this.m_K.col1.x = f + m + p * this.m_s1 * this.m_s1 + h * this.m_s2 * this.m_s2;
      this.m_K.col1.y = p * this.m_s1 * this.m_a1 + h * this.m_s2 * this.m_a2;
      this.m_K.col2.x = this.m_K.col1.y;
      this.m_K.col2.y = f + m + p * this.m_a1 * this.m_a1 + h * this.m_a2 * this.m_a2;
      this.m_enableLimit ? (g = this.m_axis.x * g + this.m_axis.y * b, n.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * a.b2_linearSlop ? this.m_limitState = y.e_equalLimits : g <= this.m_lowerTranslation ? this.m_limitState != y.e_atLowerLimit && (this.m_limitState = y.e_atLowerLimit, this.m_impulse.y = 0) : g >= this.m_upperTranslation ? this.m_limitState != y.e_atUpperLimit && (this.m_limitState = y.e_atUpperLimit, this.m_impulse.y = 0) : (this.m_limitState = y.e_inactiveLimit, this.m_impulse.y = 0)) : this.m_limitState = y.e_inactiveLimit;
      0 == this.m_enableMotor && (this.m_motorImpulse = 0);
      e.warmStarting ? (this.m_impulse.x *= e.dtRatio, this.m_impulse.y *= e.dtRatio, this.m_motorImpulse *= e.dtRatio, e = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x, g = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y, b = this.m_impulse.x * this.m_s1 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a1, f = this.m_impulse.x * this.m_s2 + (this.m_motorImpulse + this.m_impulse.y) * this.m_a2, c.m_linearVelocity.x -= this.m_invMassA * e, c.m_linearVelocity.y -= this.m_invMassA * g, c.m_angularVelocity -= this.m_invIA * b, d.m_linearVelocity.x += this.m_invMassB * e, d.m_linearVelocity.y += this.m_invMassB * g, d.m_angularVelocity += this.m_invIB * f) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0);
    };
    d.prototype.SolveVelocityConstraints = function (a) {
      var e = this.m_bodyA,
        c = this.m_bodyB,
        f = e.m_linearVelocity,
        d = e.m_angularVelocity,
        g = c.m_linearVelocity,
        m = c.m_angularVelocity;
      if (this.m_enableMotor && this.m_limitState != y.e_equalLimits) {
        var b = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (g.x - f.x) + this.m_axis.y * (g.y - f.y) + this.m_a2 * m - this.m_a1 * d));
        var h = this.m_motorImpulse;
        a = a.dt * this.m_maxMotorForce;
        this.m_motorImpulse = n.Clamp(this.m_motorImpulse + b, -a, a);
        b = this.m_motorImpulse - h;
        h = b * this.m_axis.x;
        a = b * this.m_axis.y;
        var t = b * this.m_a1;
        b *= this.m_a2;
        f.x -= this.m_invMassA * h;
        f.y -= this.m_invMassA * a;
        d -= this.m_invIA * t;
        g.x += this.m_invMassB * h;
        g.y += this.m_invMassB * a;
        m += this.m_invIB * b;
      }
      a = this.m_perp.x * (g.x - f.x) + this.m_perp.y * (g.y - f.y) + this.m_s2 * m - this.m_s1 * d;
      this.m_enableLimit && this.m_limitState != y.e_inactiveLimit ? (t = this.m_axis.x * (g.x - f.x) + this.m_axis.y * (g.y - f.y) + this.m_a2 * m - this.m_a1 * d, h = this.m_impulse.Copy(), b = this.m_K.Solve(new p(), -a, -t), this.m_impulse.Add(b), this.m_limitState == y.e_atLowerLimit ? this.m_impulse.y = n.Max(this.m_impulse.y, 0) : this.m_limitState == y.e_atUpperLimit && (this.m_impulse.y = n.Min(this.m_impulse.y, 0)), a = -a - (this.m_impulse.y - h.y) * this.m_K.col2.x, this.m_impulse.x = 0 != this.m_K.col1.x ? a / this.m_K.col1.x + h.x : h.x, b.x = this.m_impulse.x - h.x, b.y = this.m_impulse.y - h.y, h = b.x * this.m_perp.x + b.y * this.m_axis.x, a = b.x * this.m_perp.y + b.y * this.m_axis.y, t = b.x * this.m_s1 + b.y * this.m_a1, b = b.x * this.m_s2 + b.y * this.m_a2) : (b = 0 != this.m_K.col1.x ? -a / this.m_K.col1.x : 0, this.m_impulse.x += b, h = b * this.m_perp.x, a = b * this.m_perp.y, t = b * this.m_s1, b *= this.m_s2);
      f.x -= this.m_invMassA * h;
      f.y -= this.m_invMassA * a;
      d -= this.m_invIA * t;
      g.x += this.m_invMassB * h;
      g.y += this.m_invMassB * a;
      m += this.m_invIB * b;
      e.m_linearVelocity.SetV(f);
      e.m_angularVelocity = d;
      c.m_linearVelocity.SetV(g);
      c.m_angularVelocity = m;
    };
    d.prototype.SolvePositionConstraints = function () {
      var e = this.m_bodyA,
        k = this.m_bodyB,
        d = e.m_sweep.c,
        f = e.m_sweep.a,
        g = k.m_sweep.c,
        m = k.m_sweep.a,
        q = 0;
      var b = !1;
      var h = 0,
        t = c.FromAngle(f);
      var r = c.FromAngle(m);
      var v = t;
      var u = this.m_localAnchor1.x - this.m_localCenterA.x;
      var y = this.m_localAnchor1.y - this.m_localCenterA.y;
      var x = v.col1.x * u + v.col2.x * y;
      y = v.col1.y * u + v.col2.y * y;
      u = x;
      v = r;
      r = this.m_localAnchor2.x - this.m_localCenterB.x;
      var z = this.m_localAnchor2.y - this.m_localCenterB.y;
      x = v.col1.x * r + v.col2.x * z;
      z = v.col1.y * r + v.col2.y * z;
      r = x;
      v = g.x + r - d.x - u;
      x = g.y + z - d.y - y;
      if (this.m_enableLimit) {
        this.m_axis = n.MulMV(t, this.m_localXAxis1);
        this.m_a1 = (v + u) * this.m_axis.y - (x + y) * this.m_axis.x;
        this.m_a2 = r * this.m_axis.y - z * this.m_axis.x;
        var B = this.m_axis.x * v + this.m_axis.y * x;
        n.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * a.b2_linearSlop ? (h = n.Clamp(B, -a.b2_maxLinearCorrection, a.b2_maxLinearCorrection), q = n.Abs(B), b = !0) : B <= this.m_lowerTranslation ? (h = n.Clamp(B - this.m_lowerTranslation + a.b2_linearSlop, -a.b2_maxLinearCorrection, 0), q = this.m_lowerTranslation - B, b = !0) : B >= this.m_upperTranslation && (h = n.Clamp(B - this.m_upperTranslation + a.b2_linearSlop, 0, a.b2_maxLinearCorrection), q = B - this.m_upperTranslation, b = !0);
      }
      this.m_perp = n.MulMV(t, this.m_localYAxis1);
      this.m_s1 = (v + u) * this.m_perp.y - (x + y) * this.m_perp.x;
      this.m_s2 = r * this.m_perp.y - z * this.m_perp.x;
      t = new p();
      u = this.m_perp.x * v + this.m_perp.y * x;
      q = n.Max(q, n.Abs(u));
      b ? (b = this.m_invMassA, y = this.m_invMassB, r = this.m_invIA, z = this.m_invIB, this.m_K.col1.x = b + y + r * this.m_s1 * this.m_s1 + z * this.m_s2 * this.m_s2, this.m_K.col1.y = r * this.m_s1 * this.m_a1 + z * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = b + y + r * this.m_a1 * this.m_a1 + z * this.m_a2 * this.m_a2, this.m_K.Solve(t, -u, -h)) : (b = this.m_invMassA, y = this.m_invMassB, r = this.m_invIA, z = this.m_invIB, h = b + y + r * this.m_s1 * this.m_s1 + z * this.m_s2 * this.m_s2, t.x = 0 != h ? -u / h : 0, t.y = 0);
      h = t.x * this.m_perp.x + t.y * this.m_axis.x;
      b = t.x * this.m_perp.y + t.y * this.m_axis.y;
      u = t.x * this.m_s1 + t.y * this.m_a1;
      t = t.x * this.m_s2 + t.y * this.m_a2;
      d.x -= this.m_invMassA * h;
      d.y -= this.m_invMassA * b;
      f -= this.m_invIA * u;
      g.x += this.m_invMassB * h;
      g.y += this.m_invMassB * b;
      m += this.m_invIB * t;
      e.m_sweep.a = f;
      k.m_sweep.a = m;
      e.SynchronizeTransform();
      k.SynchronizeTransform();
      return q <= a.b2_linearSlop && 0 <= a.b2_angularSlop;
    };
    l.inherit(I, l.Dynamics.Joints.b2JointDef);
    I.prototype.__super = l.Dynamics.Joints.b2JointDef.prototype;
    I.b2LineJointDef = function () {
      l.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.localAnchorA = new p();
      this.localAnchorB = new p();
      this.localAxisA = new p();
    };
    I.prototype.b2LineJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = y.e_lineJoint;
      this.localAxisA.Set(1, 0);
      this.enableLimit = !1;
      this.upperTranslation = this.lowerTranslation = 0;
      this.enableMotor = !1;
      this.motorSpeed = this.maxMotorForce = 0;
    };
    I.prototype.Initialize = function (a, c, d, f) {
      this.bodyA = a;
      this.bodyB = c;
      this.localAnchorA = this.bodyA.GetLocalPoint(d);
      this.localAnchorB = this.bodyB.GetLocalPoint(d);
      this.localAxisA = this.bodyA.GetLocalVector(f);
    };
    l.inherit(H, l.Dynamics.Joints.b2Joint);
    H.prototype.__super = l.Dynamics.Joints.b2Joint.prototype;
    H.b2MouseJoint = function () {
      l.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.K = new c();
      this.K1 = new c();
      this.K2 = new c();
      this.m_localAnchor = new p();
      this.m_target = new p();
      this.m_impulse = new p();
      this.m_mass = new c();
      this.m_C = new p();
    };
    H.prototype.GetAnchorA = function () {
      return this.m_target;
    };
    H.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchor);
    };
    H.prototype.GetReactionForce = function (a) {
      void 0 === a && (a = 0);
      return new p(a * this.m_impulse.x, a * this.m_impulse.y);
    };
    H.prototype.GetReactionTorque = function () {
      return 0;
    };
    H.prototype.GetTarget = function () {
      return this.m_target;
    };
    H.prototype.SetTarget = function (a) {
      0 == this.m_bodyB.IsAwake() && this.m_bodyB.SetAwake(!0);
      this.m_target = a;
    };
    H.prototype.GetMaxForce = function () {
      return this.m_maxForce;
    };
    H.prototype.SetMaxForce = function (a) {
      void 0 === a && (a = 0);
      this.m_maxForce = a;
    };
    H.prototype.GetFrequency = function () {
      return this.m_frequencyHz;
    };
    H.prototype.SetFrequency = function (a) {
      void 0 === a && (a = 0);
      this.m_frequencyHz = a;
    };
    H.prototype.GetDampingRatio = function () {
      return this.m_dampingRatio;
    };
    H.prototype.SetDampingRatio = function (a) {
      void 0 === a && (a = 0);
      this.m_dampingRatio = a;
    };
    H.prototype.b2MouseJoint = function (a) {
      this.__super.b2Joint.call(this, a);
      this.m_target.SetV(a.target);
      var e = this.m_target.x - this.m_bodyB.m_xf.position.x,
        c = this.m_target.y - this.m_bodyB.m_xf.position.y,
        f = this.m_bodyB.m_xf.R;
      this.m_localAnchor.x = e * f.col1.x + c * f.col1.y;
      this.m_localAnchor.y = e * f.col2.x + c * f.col2.y;
      this.m_maxForce = a.maxForce;
      this.m_impulse.SetZero();
      this.m_frequencyHz = a.frequencyHz;
      this.m_dampingRatio = a.dampingRatio;
      this.m_gamma = this.m_beta = 0;
    };
    H.prototype.InitVelocityConstraints = function (a) {
      var e = this.m_bodyB,
        c = e.GetMass(),
        f = 2 * Math.PI * this.m_frequencyHz,
        d = c * f * f;
      this.m_gamma = a.dt * (2 * c * this.m_dampingRatio * f + a.dt * d);
      this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
      this.m_beta = a.dt * d * this.m_gamma;
      d = e.m_xf.R;
      c = this.m_localAnchor.x - e.m_sweep.localCenter.x;
      f = this.m_localAnchor.y - e.m_sweep.localCenter.y;
      var g = d.col1.x * c + d.col2.x * f;
      f = d.col1.y * c + d.col2.y * f;
      c = g;
      d = e.m_invMass;
      g = e.m_invI;
      this.K1.col1.x = d;
      this.K1.col2.x = 0;
      this.K1.col1.y = 0;
      this.K1.col2.y = d;
      this.K2.col1.x = g * f * f;
      this.K2.col2.x = -g * c * f;
      this.K2.col1.y = -g * c * f;
      this.K2.col2.y = g * c * c;
      this.K.SetM(this.K1);
      this.K.AddM(this.K2);
      this.K.col1.x += this.m_gamma;
      this.K.col2.y += this.m_gamma;
      this.K.GetInverse(this.m_mass);
      this.m_C.x = e.m_sweep.c.x + c - this.m_target.x;
      this.m_C.y = e.m_sweep.c.y + f - this.m_target.y;
      e.m_angularVelocity *= .98;
      this.m_impulse.x *= a.dtRatio;
      this.m_impulse.y *= a.dtRatio;
      e.m_linearVelocity.x += d * this.m_impulse.x;
      e.m_linearVelocity.y += d * this.m_impulse.y;
      e.m_angularVelocity += g * (c * this.m_impulse.y - f * this.m_impulse.x);
    };
    H.prototype.SolveVelocityConstraints = function (a) {
      var e = this.m_bodyB;
      var c = e.m_xf.R;
      var f = this.m_localAnchor.x - e.m_sweep.localCenter.x,
        d = this.m_localAnchor.y - e.m_sweep.localCenter.y;
      var g = c.col1.x * f + c.col2.x * d;
      d = c.col1.y * f + c.col2.y * d;
      f = g;
      g = e.m_linearVelocity.x + -e.m_angularVelocity * d;
      var n = e.m_linearVelocity.y + e.m_angularVelocity * f;
      c = this.m_mass;
      g = g + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x;
      var b = n + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y;
      n = -(c.col1.x * g + c.col2.x * b);
      b = -(c.col1.y * g + c.col2.y * b);
      c = this.m_impulse.x;
      g = this.m_impulse.y;
      this.m_impulse.x += n;
      this.m_impulse.y += b;
      a = a.dt * this.m_maxForce;
      this.m_impulse.LengthSquared() > a * a && this.m_impulse.Multiply(a / this.m_impulse.Length());
      n = this.m_impulse.x - c;
      b = this.m_impulse.y - g;
      e.m_linearVelocity.x += e.m_invMass * n;
      e.m_linearVelocity.y += e.m_invMass * b;
      e.m_angularVelocity += e.m_invI * (f * b - d * n);
    };
    H.prototype.SolvePositionConstraints = function () {
      return !0;
    };
    l.inherit(R, l.Dynamics.Joints.b2JointDef);
    R.prototype.__super = l.Dynamics.Joints.b2JointDef.prototype;
    R.b2MouseJointDef = function () {
      l.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.target = new p();
    };
    R.prototype.b2MouseJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = y.e_mouseJoint;
      this.maxForce = 0;
      this.frequencyHz = 5;
      this.dampingRatio = .7;
    };
    l.inherit(G, l.Dynamics.Joints.b2Joint);
    G.prototype.__super = l.Dynamics.Joints.b2Joint.prototype;
    G.b2PrismaticJoint = function () {
      l.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.m_localAnchor1 = new p();
      this.m_localAnchor2 = new p();
      this.m_localXAxis1 = new p();
      this.m_localYAxis1 = new p();
      this.m_axis = new p();
      this.m_perp = new p();
      this.m_K = new q();
      this.m_impulse = new g();
    };
    G.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
    };
    G.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
    };
    G.prototype.GetReactionForce = function (a) {
      void 0 === a && (a = 0);
      return new p(a * (this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x), a * (this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y));
    };
    G.prototype.GetReactionTorque = function (a) {
      void 0 === a && (a = 0);
      return a * this.m_impulse.y;
    };
    G.prototype.GetJointTranslation = function () {
      var a = this.m_bodyA,
        c = this.m_bodyB,
        d = a.GetWorldPoint(this.m_localAnchor1),
        f = c.GetWorldPoint(this.m_localAnchor2);
      c = f.x - d.x;
      d = f.y - d.y;
      a = a.GetWorldVector(this.m_localXAxis1);
      return a.x * c + a.y * d;
    };
    G.prototype.GetJointSpeed = function () {
      var a = this.m_bodyA,
        c = this.m_bodyB;
      var d = a.m_xf.R;
      var f = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
        g = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
        n = d.col1.x * f + d.col2.x * g;
      g = d.col1.y * f + d.col2.y * g;
      f = n;
      d = c.m_xf.R;
      var m = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
        b = this.m_localAnchor2.y - c.m_sweep.localCenter.y;
      n = d.col1.x * m + d.col2.x * b;
      b = d.col1.y * m + d.col2.y * b;
      m = n;
      d = c.m_sweep.c.x + m - (a.m_sweep.c.x + f);
      n = c.m_sweep.c.y + b - (a.m_sweep.c.y + g);
      var h = a.GetWorldVector(this.m_localXAxis1),
        p = a.m_linearVelocity,
        r = c.m_linearVelocity;
      a = a.m_angularVelocity;
      c = c.m_angularVelocity;
      return d * -a * h.y + n * a * h.x + (h.x * (r.x + -c * b - p.x - -a * g) + h.y * (r.y + c * m - p.y - a * f));
    };
    G.prototype.IsLimitEnabled = function () {
      return this.m_enableLimit;
    };
    G.prototype.EnableLimit = function (a) {
      this.m_bodyA.SetAwake(!0);
      this.m_bodyB.SetAwake(!0);
      this.m_enableLimit = a;
    };
    G.prototype.GetLowerLimit = function () {
      return this.m_lowerTranslation;
    };
    G.prototype.GetUpperLimit = function () {
      return this.m_upperTranslation;
    };
    G.prototype.SetLimits = function (a, c) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      this.m_bodyA.SetAwake(!0);
      this.m_bodyB.SetAwake(!0);
      this.m_lowerTranslation = a;
      this.m_upperTranslation = c;
    };
    G.prototype.IsMotorEnabled = function () {
      return this.m_enableMotor;
    };
    G.prototype.EnableMotor = function (a) {
      this.m_bodyA.SetAwake(!0);
      this.m_bodyB.SetAwake(!0);
      this.m_enableMotor = a;
    };
    G.prototype.SetMotorSpeed = function (a) {
      void 0 === a && (a = 0);
      this.m_bodyA.SetAwake(!0);
      this.m_bodyB.SetAwake(!0);
      this.m_motorSpeed = a;
    };
    G.prototype.GetMotorSpeed = function () {
      return this.m_motorSpeed;
    };
    G.prototype.SetMaxMotorForce = function (a) {
      void 0 === a && (a = 0);
      this.m_bodyA.SetAwake(!0);
      this.m_bodyB.SetAwake(!0);
      this.m_maxMotorForce = a;
    };
    G.prototype.GetMotorForce = function () {
      return this.m_motorImpulse;
    };
    G.prototype.b2PrismaticJoint = function (a) {
      this.__super.b2Joint.call(this, a);
      this.m_localAnchor1.SetV(a.localAnchorA);
      this.m_localAnchor2.SetV(a.localAnchorB);
      this.m_localXAxis1.SetV(a.localAxisA);
      this.m_localYAxis1.x = -this.m_localXAxis1.y;
      this.m_localYAxis1.y = this.m_localXAxis1.x;
      this.m_refAngle = a.referenceAngle;
      this.m_impulse.SetZero();
      this.m_motorImpulse = this.m_motorMass = 0;
      this.m_lowerTranslation = a.lowerTranslation;
      this.m_upperTranslation = a.upperTranslation;
      this.m_maxMotorForce = a.maxMotorForce;
      this.m_motorSpeed = a.motorSpeed;
      this.m_enableLimit = a.enableLimit;
      this.m_enableMotor = a.enableMotor;
      this.m_limitState = y.e_inactiveLimit;
      this.m_axis.SetZero();
      this.m_perp.SetZero();
    };
    G.prototype.InitVelocityConstraints = function (e) {
      var c = this.m_bodyA,
        d = this.m_bodyB;
      this.m_localCenterA.SetV(c.GetLocalCenter());
      this.m_localCenterB.SetV(d.GetLocalCenter());
      var f = c.GetTransform();
      d.GetTransform();
      var g = c.m_xf.R;
      var m = this.m_localAnchor1.x - this.m_localCenterA.x,
        p = this.m_localAnchor1.y - this.m_localCenterA.y;
      var b = g.col1.x * m + g.col2.x * p;
      p = g.col1.y * m + g.col2.y * p;
      m = b;
      g = d.m_xf.R;
      var h = this.m_localAnchor2.x - this.m_localCenterB.x,
        t = this.m_localAnchor2.y - this.m_localCenterB.y;
      b = g.col1.x * h + g.col2.x * t;
      t = g.col1.y * h + g.col2.y * t;
      h = b;
      g = d.m_sweep.c.x + h - c.m_sweep.c.x - m;
      b = d.m_sweep.c.y + t - c.m_sweep.c.y - p;
      this.m_invMassA = c.m_invMass;
      this.m_invMassB = d.m_invMass;
      this.m_invIA = c.m_invI;
      this.m_invIB = d.m_invI;
      this.m_axis.SetV(n.MulMV(f.R, this.m_localXAxis1));
      this.m_a1 = (g + m) * this.m_axis.y - (b + p) * this.m_axis.x;
      this.m_a2 = h * this.m_axis.y - t * this.m_axis.x;
      this.m_motorMass = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_a1 * this.m_a1 + this.m_invIB * this.m_a2 * this.m_a2;
      this.m_motorMass > Number.MIN_VALUE && (this.m_motorMass = 1 / this.m_motorMass);
      this.m_perp.SetV(n.MulMV(f.R, this.m_localYAxis1));
      this.m_s1 = (g + m) * this.m_perp.y - (b + p) * this.m_perp.x;
      this.m_s2 = h * this.m_perp.y - t * this.m_perp.x;
      f = this.m_invMassA;
      m = this.m_invMassB;
      p = this.m_invIA;
      h = this.m_invIB;
      this.m_K.col1.x = f + m + p * this.m_s1 * this.m_s1 + h * this.m_s2 * this.m_s2;
      this.m_K.col1.y = p * this.m_s1 + h * this.m_s2;
      this.m_K.col1.z = p * this.m_s1 * this.m_a1 + h * this.m_s2 * this.m_a2;
      this.m_K.col2.x = this.m_K.col1.y;
      this.m_K.col2.y = p + h;
      this.m_K.col2.z = p * this.m_a1 + h * this.m_a2;
      this.m_K.col3.x = this.m_K.col1.z;
      this.m_K.col3.y = this.m_K.col2.z;
      this.m_K.col3.z = f + m + p * this.m_a1 * this.m_a1 + h * this.m_a2 * this.m_a2;
      this.m_enableLimit ? (g = this.m_axis.x * g + this.m_axis.y * b, n.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * a.b2_linearSlop ? this.m_limitState = y.e_equalLimits : g <= this.m_lowerTranslation ? this.m_limitState != y.e_atLowerLimit && (this.m_limitState = y.e_atLowerLimit, this.m_impulse.z = 0) : g >= this.m_upperTranslation ? this.m_limitState != y.e_atUpperLimit && (this.m_limitState = y.e_atUpperLimit, this.m_impulse.z = 0) : (this.m_limitState = y.e_inactiveLimit, this.m_impulse.z = 0)) : this.m_limitState = y.e_inactiveLimit;
      0 == this.m_enableMotor && (this.m_motorImpulse = 0);
      e.warmStarting ? (this.m_impulse.x *= e.dtRatio, this.m_impulse.y *= e.dtRatio, this.m_motorImpulse *= e.dtRatio, e = this.m_impulse.x * this.m_perp.x + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x, g = this.m_impulse.x * this.m_perp.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y, b = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1, f = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2, c.m_linearVelocity.x -= this.m_invMassA * e, c.m_linearVelocity.y -= this.m_invMassA * g, c.m_angularVelocity -= this.m_invIA * b, d.m_linearVelocity.x += this.m_invMassB * e, d.m_linearVelocity.y += this.m_invMassB * g, d.m_angularVelocity += this.m_invIB * f) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0);
    };
    G.prototype.SolveVelocityConstraints = function (a) {
      var e = this.m_bodyA,
        c = this.m_bodyB,
        d = e.m_linearVelocity,
        m = e.m_angularVelocity,
        q = c.m_linearVelocity,
        u = c.m_angularVelocity;
      if (this.m_enableMotor && this.m_limitState != y.e_equalLimits) {
        var b = this.m_motorMass * (this.m_motorSpeed - (this.m_axis.x * (q.x - d.x) + this.m_axis.y * (q.y - d.y) + this.m_a2 * u - this.m_a1 * m));
        var h = this.m_motorImpulse;
        a = a.dt * this.m_maxMotorForce;
        this.m_motorImpulse = n.Clamp(this.m_motorImpulse + b, -a, a);
        b = this.m_motorImpulse - h;
        h = b * this.m_axis.x;
        a = b * this.m_axis.y;
        var t = b * this.m_a1;
        b *= this.m_a2;
        d.x -= this.m_invMassA * h;
        d.y -= this.m_invMassA * a;
        m -= this.m_invIA * t;
        q.x += this.m_invMassB * h;
        q.y += this.m_invMassB * a;
        u += this.m_invIB * b;
      }
      t = this.m_perp.x * (q.x - d.x) + this.m_perp.y * (q.y - d.y) + this.m_s2 * u - this.m_s1 * m;
      a = u - m;
      this.m_enableLimit && this.m_limitState != y.e_inactiveLimit ? (b = this.m_axis.x * (q.x - d.x) + this.m_axis.y * (q.y - d.y) + this.m_a2 * u - this.m_a1 * m, h = this.m_impulse.Copy(), b = this.m_K.Solve33(new g(), -t, -a, -b), this.m_impulse.Add(b), this.m_limitState == y.e_atLowerLimit ? this.m_impulse.z = n.Max(this.m_impulse.z, 0) : this.m_limitState == y.e_atUpperLimit && (this.m_impulse.z = n.Min(this.m_impulse.z, 0)), t = -t - (this.m_impulse.z - h.z) * this.m_K.col3.x, a = -a - (this.m_impulse.z - h.z) * this.m_K.col3.y, a = this.m_K.Solve22(new p(), t, a), a.x += h.x, a.y += h.y, this.m_impulse.x = a.x, this.m_impulse.y = a.y, b.x = this.m_impulse.x - h.x, b.y = this.m_impulse.y - h.y, b.z = this.m_impulse.z - h.z, h = b.x * this.m_perp.x + b.z * this.m_axis.x, a = b.x * this.m_perp.y + b.z * this.m_axis.y, t = b.x * this.m_s1 + b.y + b.z * this.m_a1, b = b.x * this.m_s2 + b.y + b.z * this.m_a2) : (b = this.m_K.Solve22(new p(), -t, -a), this.m_impulse.x += b.x, this.m_impulse.y += b.y, h = b.x * this.m_perp.x, a = b.x * this.m_perp.y, t = b.x * this.m_s1 + b.y, b = b.x * this.m_s2 + b.y);
      d.x -= this.m_invMassA * h;
      d.y -= this.m_invMassA * a;
      m -= this.m_invIA * t;
      q.x += this.m_invMassB * h;
      q.y += this.m_invMassB * a;
      u += this.m_invIB * b;
      e.m_linearVelocity.SetV(d);
      e.m_angularVelocity = m;
      c.m_linearVelocity.SetV(q);
      c.m_angularVelocity = u;
    };
    G.prototype.SolvePositionConstraints = function () {
      var e = this.m_bodyA,
        d = this.m_bodyB,
        m = e.m_sweep.c,
        f = e.m_sweep.a,
        q = d.m_sweep.c,
        A = d.m_sweep.a,
        u = 0;
      var b = !1;
      var h = 0,
        t = c.FromAngle(f),
        r = c.FromAngle(A);
      var v = t;
      var y = this.m_localAnchor1.x - this.m_localCenterA.x;
      var x = this.m_localAnchor1.y - this.m_localCenterA.y;
      var z = v.col1.x * y + v.col2.x * x;
      x = v.col1.y * y + v.col2.y * x;
      y = z;
      v = r;
      r = this.m_localAnchor2.x - this.m_localCenterB.x;
      var B = this.m_localAnchor2.y - this.m_localCenterB.y;
      z = v.col1.x * r + v.col2.x * B;
      B = v.col1.y * r + v.col2.y * B;
      r = z;
      v = q.x + r - m.x - y;
      z = q.y + B - m.y - x;
      if (this.m_enableLimit) {
        this.m_axis = n.MulMV(t, this.m_localXAxis1);
        this.m_a1 = (v + y) * this.m_axis.y - (z + x) * this.m_axis.x;
        this.m_a2 = r * this.m_axis.y - B * this.m_axis.x;
        var C = this.m_axis.x * v + this.m_axis.y * z;
        n.Abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * a.b2_linearSlop ? (h = n.Clamp(C, -a.b2_maxLinearCorrection, a.b2_maxLinearCorrection), u = n.Abs(C), b = !0) : C <= this.m_lowerTranslation ? (h = n.Clamp(C - this.m_lowerTranslation + a.b2_linearSlop, -a.b2_maxLinearCorrection, 0), u = this.m_lowerTranslation - C, b = !0) : C >= this.m_upperTranslation && (h = n.Clamp(C - this.m_upperTranslation + a.b2_linearSlop, 0, a.b2_maxLinearCorrection), u = C - this.m_upperTranslation, b = !0);
      }
      this.m_perp = n.MulMV(t, this.m_localYAxis1);
      this.m_s1 = (v + y) * this.m_perp.y - (z + x) * this.m_perp.x;
      this.m_s2 = r * this.m_perp.y - B * this.m_perp.x;
      t = new g();
      x = this.m_perp.x * v + this.m_perp.y * z;
      r = A - f - this.m_refAngle;
      u = n.Max(u, n.Abs(x));
      y = n.Abs(r);
      b ? (b = this.m_invMassA, B = this.m_invMassB, v = this.m_invIA, z = this.m_invIB, this.m_K.col1.x = b + B + v * this.m_s1 * this.m_s1 + z * this.m_s2 * this.m_s2, this.m_K.col1.y = v * this.m_s1 + z * this.m_s2, this.m_K.col1.z = v * this.m_s1 * this.m_a1 + z * this.m_s2 * this.m_a2, this.m_K.col2.x = this.m_K.col1.y, this.m_K.col2.y = v + z, this.m_K.col2.z = v * this.m_a1 + z * this.m_a2, this.m_K.col3.x = this.m_K.col1.z, this.m_K.col3.y = this.m_K.col2.z, this.m_K.col3.z = b + B + v * this.m_a1 * this.m_a1 + z * this.m_a2 * this.m_a2, this.m_K.Solve33(t, -x, -r, -h)) : (b = this.m_invMassA, B = this.m_invMassB, v = this.m_invIA, z = this.m_invIB, h = v * this.m_s1 + z * this.m_s2, C = v + z, this.m_K.col1.Set(b + B + v * this.m_s1 * this.m_s1 + z * this.m_s2 * this.m_s2, h, 0), this.m_K.col2.Set(h, C, 0), h = this.m_K.Solve22(new p(), -x, -r), t.x = h.x, t.y = h.y, t.z = 0);
      h = t.x * this.m_perp.x + t.z * this.m_axis.x;
      b = t.x * this.m_perp.y + t.z * this.m_axis.y;
      x = t.x * this.m_s1 + t.y + t.z * this.m_a1;
      t = t.x * this.m_s2 + t.y + t.z * this.m_a2;
      m.x -= this.m_invMassA * h;
      m.y -= this.m_invMassA * b;
      f -= this.m_invIA * x;
      q.x += this.m_invMassB * h;
      q.y += this.m_invMassB * b;
      A += this.m_invIB * t;
      e.m_sweep.a = f;
      d.m_sweep.a = A;
      e.SynchronizeTransform();
      d.SynchronizeTransform();
      return u <= a.b2_linearSlop && y <= a.b2_angularSlop;
    };
    l.inherit(P, l.Dynamics.Joints.b2JointDef);
    P.prototype.__super = l.Dynamics.Joints.b2JointDef.prototype;
    P.b2PrismaticJointDef = function () {
      l.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.localAnchorA = new p();
      this.localAnchorB = new p();
      this.localAxisA = new p();
    };
    P.prototype.b2PrismaticJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = y.e_prismaticJoint;
      this.localAxisA.Set(1, 0);
      this.referenceAngle = 0;
      this.enableLimit = !1;
      this.upperTranslation = this.lowerTranslation = 0;
      this.enableMotor = !1;
      this.motorSpeed = this.maxMotorForce = 0;
    };
    P.prototype.Initialize = function (a, c, d, f) {
      this.bodyA = a;
      this.bodyB = c;
      this.localAnchorA = this.bodyA.GetLocalPoint(d);
      this.localAnchorB = this.bodyB.GetLocalPoint(d);
      this.localAxisA = this.bodyA.GetLocalVector(f);
      this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
    };
    l.inherit(C, l.Dynamics.Joints.b2Joint);
    C.prototype.__super = l.Dynamics.Joints.b2Joint.prototype;
    C.b2PulleyJoint = function () {
      l.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.m_groundAnchor1 = new p();
      this.m_groundAnchor2 = new p();
      this.m_localAnchor1 = new p();
      this.m_localAnchor2 = new p();
      this.m_u1 = new p();
      this.m_u2 = new p();
    };
    C.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
    };
    C.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
    };
    C.prototype.GetReactionForce = function (a) {
      void 0 === a && (a = 0);
      return new p(a * this.m_impulse * this.m_u2.x, a * this.m_impulse * this.m_u2.y);
    };
    C.prototype.GetReactionTorque = function () {
      return 0;
    };
    C.prototype.GetGroundAnchorA = function () {
      var a = this.m_ground.m_xf.position.Copy();
      a.Add(this.m_groundAnchor1);
      return a;
    };
    C.prototype.GetGroundAnchorB = function () {
      var a = this.m_ground.m_xf.position.Copy();
      a.Add(this.m_groundAnchor2);
      return a;
    };
    C.prototype.GetLength1 = function () {
      var a = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
        c = a.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x);
      a = a.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y);
      return Math.sqrt(c * c + a * a);
    };
    C.prototype.GetLength2 = function () {
      var a = this.m_bodyB.GetWorldPoint(this.m_localAnchor2),
        c = a.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor2.x);
      a = a.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor2.y);
      return Math.sqrt(c * c + a * a);
    };
    C.prototype.GetRatio = function () {
      return this.m_ratio;
    };
    C.prototype.b2PulleyJoint = function (a) {
      this.__super.b2Joint.call(this, a);
      this.m_ground = this.m_bodyA.m_world.m_groundBody;
      this.m_groundAnchor1.x = a.groundAnchorA.x - this.m_ground.m_xf.position.x;
      this.m_groundAnchor1.y = a.groundAnchorA.y - this.m_ground.m_xf.position.y;
      this.m_groundAnchor2.x = a.groundAnchorB.x - this.m_ground.m_xf.position.x;
      this.m_groundAnchor2.y = a.groundAnchorB.y - this.m_ground.m_xf.position.y;
      this.m_localAnchor1.SetV(a.localAnchorA);
      this.m_localAnchor2.SetV(a.localAnchorB);
      this.m_ratio = a.ratio;
      this.m_constant = a.lengthA + this.m_ratio * a.lengthB;
      this.m_maxLength1 = n.Min(a.maxLengthA, this.m_constant - this.m_ratio * C.b2_minPulleyLength);
      this.m_maxLength2 = n.Min(a.maxLengthB, (this.m_constant - C.b2_minPulleyLength) / this.m_ratio);
      this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0;
    };
    C.prototype.InitVelocityConstraints = function (c) {
      var e = this.m_bodyA,
        d = this.m_bodyB;
      var f = e.m_xf.R;
      var g = this.m_localAnchor1.x - e.m_sweep.localCenter.x,
        n = this.m_localAnchor1.y - e.m_sweep.localCenter.y,
        m = f.col1.x * g + f.col2.x * n;
      n = f.col1.y * g + f.col2.y * n;
      g = m;
      f = d.m_xf.R;
      var b = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
        h = this.m_localAnchor2.y - d.m_sweep.localCenter.y;
      m = f.col1.x * b + f.col2.x * h;
      h = f.col1.y * b + f.col2.y * h;
      b = m;
      f = d.m_sweep.c.x + b;
      m = d.m_sweep.c.y + h;
      var p = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
        r = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
      this.m_u1.Set(e.m_sweep.c.x + g - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x), e.m_sweep.c.y + n - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y));
      this.m_u2.Set(f - p, m - r);
      f = this.m_u1.Length();
      m = this.m_u2.Length();
      f > a.b2_linearSlop ? this.m_u1.Multiply(1 / f) : this.m_u1.SetZero();
      m > a.b2_linearSlop ? this.m_u2.Multiply(1 / m) : this.m_u2.SetZero();
      0 < this.m_constant - f - this.m_ratio * m ? (this.m_state = y.e_inactiveLimit, this.m_impulse = 0) : this.m_state = y.e_atUpperLimit;
      f < this.m_maxLength1 ? (this.m_limitState1 = y.e_inactiveLimit, this.m_limitImpulse1 = 0) : this.m_limitState1 = y.e_atUpperLimit;
      m < this.m_maxLength2 ? (this.m_limitState2 = y.e_inactiveLimit, this.m_limitImpulse2 = 0) : this.m_limitState2 = y.e_atUpperLimit;
      f = g * this.m_u1.y - n * this.m_u1.x;
      m = b * this.m_u2.y - h * this.m_u2.x;
      this.m_limitMass1 = e.m_invMass + e.m_invI * f * f;
      this.m_limitMass2 = d.m_invMass + d.m_invI * m * m;
      this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
      this.m_limitMass1 = 1 / this.m_limitMass1;
      this.m_limitMass2 = 1 / this.m_limitMass2;
      this.m_pulleyMass = 1 / this.m_pulleyMass;
      c.warmStarting ? (this.m_impulse *= c.dtRatio, this.m_limitImpulse1 *= c.dtRatio, this.m_limitImpulse2 *= c.dtRatio, c = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.x, f = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.y, m = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.x, p = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.y, e.m_linearVelocity.x += e.m_invMass * c, e.m_linearVelocity.y += e.m_invMass * f, e.m_angularVelocity += e.m_invI * (g * f - n * c), d.m_linearVelocity.x += d.m_invMass * m, d.m_linearVelocity.y += d.m_invMass * p, d.m_angularVelocity += d.m_invI * (b * p - h * m)) : this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0;
    };
    C.prototype.SolveVelocityConstraints = function () {
      var a = this.m_bodyA,
        c = this.m_bodyB;
      var d = a.m_xf.R;
      var f = this.m_localAnchor1.x - a.m_sweep.localCenter.x,
        g = this.m_localAnchor1.y - a.m_sweep.localCenter.y,
        m = d.col1.x * f + d.col2.x * g;
      g = d.col1.y * f + d.col2.y * g;
      f = m;
      d = c.m_xf.R;
      var p = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
        b = this.m_localAnchor2.y - c.m_sweep.localCenter.y;
      m = d.col1.x * p + d.col2.x * b;
      b = d.col1.y * p + d.col2.y * b;
      p = m;
      if (this.m_state == y.e_atUpperLimit) {
        d = a.m_linearVelocity.x + -a.m_angularVelocity * g;
        m = a.m_linearVelocity.y + a.m_angularVelocity * f;
        var h = c.m_linearVelocity.x + -c.m_angularVelocity * b;
        var q = c.m_linearVelocity.y + c.m_angularVelocity * p;
        d = -(this.m_u1.x * d + this.m_u1.y * m) - this.m_ratio * (this.m_u2.x * h + this.m_u2.y * q);
        q = this.m_pulleyMass * -d;
        d = this.m_impulse;
        this.m_impulse = n.Max(0, this.m_impulse + q);
        q = this.m_impulse - d;
        d = -q * this.m_u1.x;
        m = -q * this.m_u1.y;
        h = -this.m_ratio * q * this.m_u2.x;
        q = -this.m_ratio * q * this.m_u2.y;
        a.m_linearVelocity.x += a.m_invMass * d;
        a.m_linearVelocity.y += a.m_invMass * m;
        a.m_angularVelocity += a.m_invI * (f * m - g * d);
        c.m_linearVelocity.x += c.m_invMass * h;
        c.m_linearVelocity.y += c.m_invMass * q;
        c.m_angularVelocity += c.m_invI * (p * q - b * h);
      }
      this.m_limitState1 == y.e_atUpperLimit && (d = a.m_linearVelocity.x + -a.m_angularVelocity * g, m = a.m_linearVelocity.y + a.m_angularVelocity * f, d = -(this.m_u1.x * d + this.m_u1.y * m), q = -this.m_limitMass1 * d, d = this.m_limitImpulse1, this.m_limitImpulse1 = n.Max(0, this.m_limitImpulse1 + q), q = this.m_limitImpulse1 - d, d = -q * this.m_u1.x, m = -q * this.m_u1.y, a.m_linearVelocity.x += a.m_invMass * d, a.m_linearVelocity.y += a.m_invMass * m, a.m_angularVelocity += a.m_invI * (f * m - g * d));
      this.m_limitState2 == y.e_atUpperLimit && (h = c.m_linearVelocity.x + -c.m_angularVelocity * b, q = c.m_linearVelocity.y + c.m_angularVelocity * p, d = -(this.m_u2.x * h + this.m_u2.y * q), q = -this.m_limitMass2 * d, d = this.m_limitImpulse2, this.m_limitImpulse2 = n.Max(0, this.m_limitImpulse2 + q), q = this.m_limitImpulse2 - d, h = -q * this.m_u2.x, q = -q * this.m_u2.y, c.m_linearVelocity.x += c.m_invMass * h, c.m_linearVelocity.y += c.m_invMass * q, c.m_angularVelocity += c.m_invI * (p * q - b * h));
    };
    C.prototype.SolvePositionConstraints = function () {
      var c = this.m_bodyA,
        d = this.m_bodyB,
        g = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
        f = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
        m = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
        p = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y,
        q = 0;
      if (this.m_state == y.e_atUpperLimit) {
        var b = c.m_xf.R;
        var h = this.m_localAnchor1.x - c.m_sweep.localCenter.x;
        var t = this.m_localAnchor1.y - c.m_sweep.localCenter.y;
        var r = b.col1.x * h + b.col2.x * t;
        t = b.col1.y * h + b.col2.y * t;
        h = r;
        b = d.m_xf.R;
        var v = this.m_localAnchor2.x - d.m_sweep.localCenter.x;
        var u = this.m_localAnchor2.y - d.m_sweep.localCenter.y;
        r = b.col1.x * v + b.col2.x * u;
        u = b.col1.y * v + b.col2.y * u;
        v = r;
        b = c.m_sweep.c.x + h;
        r = c.m_sweep.c.y + t;
        var x = d.m_sweep.c.x + v;
        var z = d.m_sweep.c.y + u;
        this.m_u1.Set(b - g, r - f);
        this.m_u2.Set(x - m, z - p);
        b = this.m_u1.Length();
        r = this.m_u2.Length();
        b > a.b2_linearSlop ? this.m_u1.Multiply(1 / b) : this.m_u1.SetZero();
        r > a.b2_linearSlop ? this.m_u2.Multiply(1 / r) : this.m_u2.SetZero();
        b = this.m_constant - b - this.m_ratio * r;
        q = n.Max(q, -b);
        b = n.Clamp(b + a.b2_linearSlop, -a.b2_maxLinearCorrection, 0);
        z = -this.m_pulleyMass * b;
        b = -z * this.m_u1.x;
        r = -z * this.m_u1.y;
        x = -this.m_ratio * z * this.m_u2.x;
        z = -this.m_ratio * z * this.m_u2.y;
        c.m_sweep.c.x += c.m_invMass * b;
        c.m_sweep.c.y += c.m_invMass * r;
        c.m_sweep.a += c.m_invI * (h * r - t * b);
        d.m_sweep.c.x += d.m_invMass * x;
        d.m_sweep.c.y += d.m_invMass * z;
        d.m_sweep.a += d.m_invI * (v * z - u * x);
        c.SynchronizeTransform();
        d.SynchronizeTransform();
      }
      this.m_limitState1 == y.e_atUpperLimit && (b = c.m_xf.R, h = this.m_localAnchor1.x - c.m_sweep.localCenter.x, t = this.m_localAnchor1.y - c.m_sweep.localCenter.y, r = b.col1.x * h + b.col2.x * t, t = b.col1.y * h + b.col2.y * t, h = r, b = c.m_sweep.c.x + h, r = c.m_sweep.c.y + t, this.m_u1.Set(b - g, r - f), b = this.m_u1.Length(), b > a.b2_linearSlop ? (this.m_u1.x *= 1 / b, this.m_u1.y *= 1 / b) : this.m_u1.SetZero(), b = this.m_maxLength1 - b, q = n.Max(q, -b), b = n.Clamp(b + a.b2_linearSlop, -a.b2_maxLinearCorrection, 0), z = -this.m_limitMass1 * b, b = -z * this.m_u1.x, r = -z * this.m_u1.y, c.m_sweep.c.x += c.m_invMass * b, c.m_sweep.c.y += c.m_invMass * r, c.m_sweep.a += c.m_invI * (h * r - t * b), c.SynchronizeTransform());
      this.m_limitState2 == y.e_atUpperLimit && (b = d.m_xf.R, v = this.m_localAnchor2.x - d.m_sweep.localCenter.x, u = this.m_localAnchor2.y - d.m_sweep.localCenter.y, r = b.col1.x * v + b.col2.x * u, u = b.col1.y * v + b.col2.y * u, v = r, x = d.m_sweep.c.x + v, z = d.m_sweep.c.y + u, this.m_u2.Set(x - m, z - p), r = this.m_u2.Length(), r > a.b2_linearSlop ? (this.m_u2.x *= 1 / r, this.m_u2.y *= 1 / r) : this.m_u2.SetZero(), b = this.m_maxLength2 - r, q = n.Max(q, -b), b = n.Clamp(b + a.b2_linearSlop, -a.b2_maxLinearCorrection, 0), z = -this.m_limitMass2 * b, x = -z * this.m_u2.x, z = -z * this.m_u2.y, d.m_sweep.c.x += d.m_invMass * x, d.m_sweep.c.y += d.m_invMass * z, d.m_sweep.a += d.m_invI * (v * z - u * x), d.SynchronizeTransform());
      return q < a.b2_linearSlop;
    };
    l.postDefs.push(function () {
      l.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength = 2;
    });
    l.inherit(V, l.Dynamics.Joints.b2JointDef);
    V.prototype.__super = l.Dynamics.Joints.b2JointDef.prototype;
    V.b2PulleyJointDef = function () {
      l.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.groundAnchorA = new p();
      this.groundAnchorB = new p();
      this.localAnchorA = new p();
      this.localAnchorB = new p();
    };
    V.prototype.b2PulleyJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = y.e_pulleyJoint;
      this.groundAnchorA.Set(-1, 1);
      this.groundAnchorB.Set(1, 1);
      this.localAnchorA.Set(-1, 0);
      this.localAnchorB.Set(1, 0);
      this.maxLengthB = this.lengthB = this.maxLengthA = this.lengthA = 0;
      this.ratio = 1;
      this.collideConnected = !0;
    };
    V.prototype.Initialize = function (a, c, d, f, g, n, m) {
      void 0 === m && (m = 0);
      this.bodyA = a;
      this.bodyB = c;
      this.groundAnchorA.SetV(d);
      this.groundAnchorB.SetV(f);
      this.localAnchorA = this.bodyA.GetLocalPoint(g);
      this.localAnchorB = this.bodyB.GetLocalPoint(n);
      a = g.x - d.x;
      d = g.y - d.y;
      this.lengthA = Math.sqrt(a * a + d * d);
      d = n.x - f.x;
      f = n.y - f.y;
      this.lengthB = Math.sqrt(d * d + f * f);
      this.ratio = m;
      m = this.lengthA + this.ratio * this.lengthB;
      this.maxLengthA = m - this.ratio * C.b2_minPulleyLength;
      this.maxLengthB = (m - C.b2_minPulleyLength) / this.ratio;
    };
    l.inherit(J, l.Dynamics.Joints.b2Joint);
    J.prototype.__super = l.Dynamics.Joints.b2Joint.prototype;
    J.b2RevoluteJoint = function () {
      l.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.K = new c();
      this.K1 = new c();
      this.K2 = new c();
      this.K3 = new c();
      this.impulse3 = new g();
      this.impulse2 = new p();
      this.reduced = new p();
      this.m_localAnchor1 = new p();
      this.m_localAnchor2 = new p();
      this.m_impulse = new g();
      this.m_mass = new q();
    };
    J.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
    };
    J.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
    };
    J.prototype.GetReactionForce = function (a) {
      void 0 === a && (a = 0);
      return new p(a * this.m_impulse.x, a * this.m_impulse.y);
    };
    J.prototype.GetReactionTorque = function (a) {
      void 0 === a && (a = 0);
      return a * this.m_impulse.z;
    };
    J.prototype.GetJointAngle = function () {
      return this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle;
    };
    J.prototype.GetJointSpeed = function () {
      return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity;
    };
    J.prototype.IsLimitEnabled = function () {
      return this.m_enableLimit;
    };
    J.prototype.EnableLimit = function (a) {
      this.m_enableLimit = a;
    };
    J.prototype.GetLowerLimit = function () {
      return this.m_lowerAngle;
    };
    J.prototype.GetUpperLimit = function () {
      return this.m_upperAngle;
    };
    J.prototype.SetLimits = function (a, c) {
      void 0 === a && (a = 0);
      void 0 === c && (c = 0);
      this.m_lowerAngle = a;
      this.m_upperAngle = c;
    };
    J.prototype.IsMotorEnabled = function () {
      this.m_bodyA.SetAwake(!0);
      this.m_bodyB.SetAwake(!0);
      return this.m_enableMotor;
    };
    J.prototype.EnableMotor = function (a) {
      this.m_enableMotor = a;
    };
    J.prototype.SetMotorSpeed = function (a) {
      void 0 === a && (a = 0);
      this.m_bodyA.SetAwake(!0);
      this.m_bodyB.SetAwake(!0);
      this.m_motorSpeed = a;
    };
    J.prototype.GetMotorSpeed = function () {
      return this.m_motorSpeed;
    };
    J.prototype.SetMaxMotorTorque = function (a) {
      void 0 === a && (a = 0);
      this.m_maxMotorTorque = a;
    };
    J.prototype.GetMotorTorque = function () {
      return this.m_maxMotorTorque;
    };
    J.prototype.b2RevoluteJoint = function (a) {
      this.__super.b2Joint.call(this, a);
      this.m_localAnchor1.SetV(a.localAnchorA);
      this.m_localAnchor2.SetV(a.localAnchorB);
      this.m_referenceAngle = a.referenceAngle;
      this.m_impulse.SetZero();
      this.m_motorImpulse = 0;
      this.m_lowerAngle = a.lowerAngle;
      this.m_upperAngle = a.upperAngle;
      this.m_maxMotorTorque = a.maxMotorTorque;
      this.m_motorSpeed = a.motorSpeed;
      this.m_enableLimit = a.enableLimit;
      this.m_enableMotor = a.enableMotor;
      this.m_limitState = y.e_inactiveLimit;
    };
    J.prototype.InitVelocityConstraints = function (c) {
      var e = this.m_bodyA,
        d = this.m_bodyB;
      var f = e.m_xf.R;
      var g = this.m_localAnchor1.x - e.m_sweep.localCenter.x,
        m = this.m_localAnchor1.y - e.m_sweep.localCenter.y;
      var p = f.col1.x * g + f.col2.x * m;
      m = f.col1.y * g + f.col2.y * m;
      g = p;
      f = d.m_xf.R;
      var b = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
        h = this.m_localAnchor2.y - d.m_sweep.localCenter.y;
      p = f.col1.x * b + f.col2.x * h;
      h = f.col1.y * b + f.col2.y * h;
      b = p;
      f = e.m_invMass;
      p = d.m_invMass;
      var q = e.m_invI,
        r = d.m_invI;
      this.m_mass.col1.x = f + p + m * m * q + h * h * r;
      this.m_mass.col2.x = -m * g * q - h * b * r;
      this.m_mass.col3.x = -m * q - h * r;
      this.m_mass.col1.y = this.m_mass.col2.x;
      this.m_mass.col2.y = f + p + g * g * q + b * b * r;
      this.m_mass.col3.y = g * q + b * r;
      this.m_mass.col1.z = this.m_mass.col3.x;
      this.m_mass.col2.z = this.m_mass.col3.y;
      this.m_mass.col3.z = q + r;
      this.m_motorMass = 1 / (q + r);
      0 == this.m_enableMotor && (this.m_motorImpulse = 0);
      if (this.m_enableLimit) {
        var v = d.m_sweep.a - e.m_sweep.a - this.m_referenceAngle;
        n.Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * a.b2_angularSlop ? this.m_limitState = y.e_equalLimits : v <= this.m_lowerAngle ? (this.m_limitState != y.e_atLowerLimit && (this.m_impulse.z = 0), this.m_limitState = y.e_atLowerLimit) : v >= this.m_upperAngle ? (this.m_limitState != y.e_atUpperLimit && (this.m_impulse.z = 0), this.m_limitState = y.e_atUpperLimit) : (this.m_limitState = y.e_inactiveLimit, this.m_impulse.z = 0);
      } else this.m_limitState = y.e_inactiveLimit;
      c.warmStarting ? (this.m_impulse.x *= c.dtRatio, this.m_impulse.y *= c.dtRatio, this.m_motorImpulse *= c.dtRatio, c = this.m_impulse.x, v = this.m_impulse.y, e.m_linearVelocity.x -= f * c, e.m_linearVelocity.y -= f * v, e.m_angularVelocity -= q * (g * v - m * c + this.m_motorImpulse + this.m_impulse.z), d.m_linearVelocity.x += p * c, d.m_linearVelocity.y += p * v, d.m_angularVelocity += r * (b * v - h * c + this.m_motorImpulse + this.m_impulse.z)) : (this.m_impulse.SetZero(), this.m_motorImpulse = 0);
    };
    J.prototype.SolveVelocityConstraints = function (a) {
      var c = this.m_bodyA,
        e = this.m_bodyB,
        d = c.m_linearVelocity,
        g = c.m_angularVelocity,
        m = e.m_linearVelocity,
        p = e.m_angularVelocity,
        b = c.m_invMass,
        h = e.m_invMass,
        q = c.m_invI,
        r = e.m_invI;
      if (this.m_enableMotor && this.m_limitState != y.e_equalLimits) {
        var v = this.m_motorMass * -(p - g - this.m_motorSpeed);
        var u = this.m_motorImpulse;
        a = a.dt * this.m_maxMotorTorque;
        this.m_motorImpulse = n.Clamp(this.m_motorImpulse + v, -a, a);
        v = this.m_motorImpulse - u;
        g -= q * v;
        p += r * v;
      }
      if (this.m_enableLimit && this.m_limitState != y.e_inactiveLimit) {
        var x = c.m_xf.R;
        v = this.m_localAnchor1.x - c.m_sweep.localCenter.x;
        u = this.m_localAnchor1.y - c.m_sweep.localCenter.y;
        var z = x.col1.x * v + x.col2.x * u;
        u = x.col1.y * v + x.col2.y * u;
        v = z;
        x = e.m_xf.R;
        a = this.m_localAnchor2.x - e.m_sweep.localCenter.x;
        var B = this.m_localAnchor2.y - e.m_sweep.localCenter.y;
        z = x.col1.x * a + x.col2.x * B;
        B = x.col1.y * a + x.col2.y * B;
        a = z;
        z = m.x + -p * B - d.x - -g * u;
        var C = m.y + p * a - d.y - g * v;
        this.m_mass.Solve33(this.impulse3, -z, -C, -(p - g));
        this.m_limitState == y.e_equalLimits ? this.m_impulse.Add(this.impulse3) : this.m_limitState == y.e_atLowerLimit ? (x = this.m_impulse.z + this.impulse3.z, 0 > x && (this.m_mass.Solve22(this.reduced, -z, -C), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0)) : this.m_limitState == y.e_atUpperLimit && (x = this.m_impulse.z + this.impulse3.z, 0 < x && (this.m_mass.Solve22(this.reduced, -z, -C), this.impulse3.x = this.reduced.x, this.impulse3.y = this.reduced.y, this.impulse3.z = -this.m_impulse.z, this.m_impulse.x += this.reduced.x, this.m_impulse.y += this.reduced.y, this.m_impulse.z = 0));
        d.x -= b * this.impulse3.x;
        d.y -= b * this.impulse3.y;
        g -= q * (v * this.impulse3.y - u * this.impulse3.x + this.impulse3.z);
        m.x += h * this.impulse3.x;
        m.y += h * this.impulse3.y;
        p += r * (a * this.impulse3.y - B * this.impulse3.x + this.impulse3.z);
      } else x = c.m_xf.R, v = this.m_localAnchor1.x - c.m_sweep.localCenter.x, u = this.m_localAnchor1.y - c.m_sweep.localCenter.y, z = x.col1.x * v + x.col2.x * u, u = x.col1.y * v + x.col2.y * u, v = z, x = e.m_xf.R, a = this.m_localAnchor2.x - e.m_sweep.localCenter.x, B = this.m_localAnchor2.y - e.m_sweep.localCenter.y, z = x.col1.x * a + x.col2.x * B, B = x.col1.y * a + x.col2.y * B, a = z, this.m_mass.Solve22(this.impulse2, -(m.x + -p * B - d.x - -g * u), -(m.y + p * a - d.y - g * v)), this.m_impulse.x += this.impulse2.x, this.m_impulse.y += this.impulse2.y, d.x -= b * this.impulse2.x, d.y -= b * this.impulse2.y, g -= q * (v * this.impulse2.y - u * this.impulse2.x), m.x += h * this.impulse2.x, m.y += h * this.impulse2.y, p += r * (a * this.impulse2.y - B * this.impulse2.x);
      c.m_linearVelocity.SetV(d);
      c.m_angularVelocity = g;
      e.m_linearVelocity.SetV(m);
      e.m_angularVelocity = p;
    };
    J.prototype.SolvePositionConstraints = function () {
      var c = this.m_bodyA,
        d = this.m_bodyB,
        g = 0;
      if (this.m_enableLimit && this.m_limitState != y.e_inactiveLimit) {
        var f = d.m_sweep.a - c.m_sweep.a - this.m_referenceAngle;
        var m = 0;
        this.m_limitState == y.e_equalLimits ? (f = n.Clamp(f - this.m_lowerAngle, -a.b2_maxAngularCorrection, a.b2_maxAngularCorrection), m = -this.m_motorMass * f, g = n.Abs(f)) : this.m_limitState == y.e_atLowerLimit ? (f -= this.m_lowerAngle, g = -f, f = n.Clamp(f + a.b2_angularSlop, -a.b2_maxAngularCorrection, 0), m = -this.m_motorMass * f) : this.m_limitState == y.e_atUpperLimit && (g = f -= this.m_upperAngle, f = n.Clamp(f - a.b2_angularSlop, 0, a.b2_maxAngularCorrection), m = -this.m_motorMass * f);
        c.m_sweep.a -= c.m_invI * m;
        d.m_sweep.a += d.m_invI * m;
        c.SynchronizeTransform();
        d.SynchronizeTransform();
      }
      var p = c.m_xf.R;
      m = this.m_localAnchor1.x - c.m_sweep.localCenter.x;
      f = this.m_localAnchor1.y - c.m_sweep.localCenter.y;
      var q = p.col1.x * m + p.col2.x * f;
      f = p.col1.y * m + p.col2.y * f;
      m = q;
      p = d.m_xf.R;
      var b = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
        h = this.m_localAnchor2.y - d.m_sweep.localCenter.y;
      q = p.col1.x * b + p.col2.x * h;
      h = p.col1.y * b + p.col2.y * h;
      b = q;
      var t = d.m_sweep.c.x + b - c.m_sweep.c.x - m;
      var r = d.m_sweep.c.y + h - c.m_sweep.c.y - f;
      var v = t * t + r * r;
      p = Math.sqrt(v);
      q = c.m_invMass;
      var u = d.m_invMass,
        x = c.m_invI,
        z = d.m_invI,
        B = 10 * a.b2_linearSlop;
      v > B * B && (v = 1 / (q + u), t = v * -t, r = v * -r, c.m_sweep.c.x -= .5 * q * t, c.m_sweep.c.y -= .5 * q * r, d.m_sweep.c.x += .5 * u * t, d.m_sweep.c.y += .5 * u * r, t = d.m_sweep.c.x + b - c.m_sweep.c.x - m, r = d.m_sweep.c.y + h - c.m_sweep.c.y - f);
      this.K1.col1.x = q + u;
      this.K1.col2.x = 0;
      this.K1.col1.y = 0;
      this.K1.col2.y = q + u;
      this.K2.col1.x = x * f * f;
      this.K2.col2.x = -x * m * f;
      this.K2.col1.y = -x * m * f;
      this.K2.col2.y = x * m * m;
      this.K3.col1.x = z * h * h;
      this.K3.col2.x = -z * b * h;
      this.K3.col1.y = -z * b * h;
      this.K3.col2.y = z * b * b;
      this.K.SetM(this.K1);
      this.K.AddM(this.K2);
      this.K.AddM(this.K3);
      this.K.Solve(J.tImpulse, -t, -r);
      t = J.tImpulse.x;
      r = J.tImpulse.y;
      c.m_sweep.c.x -= c.m_invMass * t;
      c.m_sweep.c.y -= c.m_invMass * r;
      c.m_sweep.a -= c.m_invI * (m * r - f * t);
      d.m_sweep.c.x += d.m_invMass * t;
      d.m_sweep.c.y += d.m_invMass * r;
      d.m_sweep.a += d.m_invI * (b * r - h * t);
      c.SynchronizeTransform();
      d.SynchronizeTransform();
      return p <= a.b2_linearSlop && g <= a.b2_angularSlop;
    };
    l.postDefs.push(function () {
      l.Dynamics.Joints.b2RevoluteJoint.tImpulse = new p();
    });
    l.inherit(M, l.Dynamics.Joints.b2JointDef);
    M.prototype.__super = l.Dynamics.Joints.b2JointDef.prototype;
    M.b2RevoluteJointDef = function () {
      l.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.localAnchorA = new p();
      this.localAnchorB = new p();
    };
    M.prototype.b2RevoluteJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = y.e_revoluteJoint;
      this.localAnchorA.Set(0, 0);
      this.localAnchorB.Set(0, 0);
      this.motorSpeed = this.maxMotorTorque = this.upperAngle = this.lowerAngle = this.referenceAngle = 0;
      this.enableMotor = this.enableLimit = !1;
    };
    M.prototype.Initialize = function (a, c, d) {
      this.bodyA = a;
      this.bodyB = c;
      this.localAnchorA = this.bodyA.GetLocalPoint(d);
      this.localAnchorB = this.bodyB.GetLocalPoint(d);
      this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
    };
    l.inherit(W, l.Dynamics.Joints.b2Joint);
    W.prototype.__super = l.Dynamics.Joints.b2Joint.prototype;
    W.b2WeldJoint = function () {
      l.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
      this.m_localAnchorA = new p();
      this.m_localAnchorB = new p();
      this.m_impulse = new g();
      this.m_mass = new q();
    };
    W.prototype.GetAnchorA = function () {
      return this.m_bodyA.GetWorldPoint(this.m_localAnchorA);
    };
    W.prototype.GetAnchorB = function () {
      return this.m_bodyB.GetWorldPoint(this.m_localAnchorB);
    };
    W.prototype.GetReactionForce = function (a) {
      void 0 === a && (a = 0);
      return new p(a * this.m_impulse.x, a * this.m_impulse.y);
    };
    W.prototype.GetReactionTorque = function (a) {
      void 0 === a && (a = 0);
      return a * this.m_impulse.z;
    };
    W.prototype.b2WeldJoint = function (a) {
      this.__super.b2Joint.call(this, a);
      this.m_localAnchorA.SetV(a.localAnchorA);
      this.m_localAnchorB.SetV(a.localAnchorB);
      this.m_referenceAngle = a.referenceAngle;
      this.m_impulse.SetZero();
      this.m_mass = new q();
    };
    W.prototype.InitVelocityConstraints = function (a) {
      var c = this.m_bodyA,
        d = this.m_bodyB;
      var e = c.m_xf.R;
      var g = this.m_localAnchorA.x - c.m_sweep.localCenter.x,
        n = this.m_localAnchorA.y - c.m_sweep.localCenter.y;
      var m = e.col1.x * g + e.col2.x * n;
      n = e.col1.y * g + e.col2.y * n;
      g = m;
      e = d.m_xf.R;
      var b = this.m_localAnchorB.x - d.m_sweep.localCenter.x,
        h = this.m_localAnchorB.y - d.m_sweep.localCenter.y;
      m = e.col1.x * b + e.col2.x * h;
      h = e.col1.y * b + e.col2.y * h;
      b = m;
      e = c.m_invMass;
      m = d.m_invMass;
      var p = c.m_invI,
        q = d.m_invI;
      this.m_mass.col1.x = e + m + n * n * p + h * h * q;
      this.m_mass.col2.x = -n * g * p - h * b * q;
      this.m_mass.col3.x = -n * p - h * q;
      this.m_mass.col1.y = this.m_mass.col2.x;
      this.m_mass.col2.y = e + m + g * g * p + b * b * q;
      this.m_mass.col3.y = g * p + b * q;
      this.m_mass.col1.z = this.m_mass.col3.x;
      this.m_mass.col2.z = this.m_mass.col3.y;
      this.m_mass.col3.z = p + q;
      a.warmStarting ? (this.m_impulse.x *= a.dtRatio, this.m_impulse.y *= a.dtRatio, this.m_impulse.z *= a.dtRatio, c.m_linearVelocity.x -= e * this.m_impulse.x, c.m_linearVelocity.y -= e * this.m_impulse.y, c.m_angularVelocity -= p * (g * this.m_impulse.y - n * this.m_impulse.x + this.m_impulse.z), d.m_linearVelocity.x += m * this.m_impulse.x, d.m_linearVelocity.y += m * this.m_impulse.y, d.m_angularVelocity += q * (b * this.m_impulse.y - h * this.m_impulse.x + this.m_impulse.z)) : this.m_impulse.SetZero();
    };
    W.prototype.SolveVelocityConstraints = function () {
      var a = this.m_bodyA,
        c = this.m_bodyB,
        d = a.m_linearVelocity,
        f = a.m_angularVelocity,
        n = c.m_linearVelocity,
        m = c.m_angularVelocity,
        p = a.m_invMass,
        b = c.m_invMass,
        h = a.m_invI,
        q = c.m_invI;
      var r = a.m_xf.R;
      var v = this.m_localAnchorA.x - a.m_sweep.localCenter.x,
        u = this.m_localAnchorA.y - a.m_sweep.localCenter.y;
      var y = r.col1.x * v + r.col2.x * u;
      u = r.col1.y * v + r.col2.y * u;
      v = y;
      r = c.m_xf.R;
      var x = this.m_localAnchorB.x - c.m_sweep.localCenter.x,
        z = this.m_localAnchorB.y - c.m_sweep.localCenter.y;
      y = r.col1.x * x + r.col2.x * z;
      z = r.col1.y * x + r.col2.y * z;
      x = y;
      r = n.x - m * z - d.x + f * u;
      y = n.y + m * x - d.y - f * v;
      var B = m - f,
        C = new g();
      this.m_mass.Solve33(C, -r, -y, -B);
      this.m_impulse.Add(C);
      d.x -= p * C.x;
      d.y -= p * C.y;
      f -= h * (v * C.y - u * C.x + C.z);
      n.x += b * C.x;
      n.y += b * C.y;
      m += q * (x * C.y - z * C.x + C.z);
      a.m_angularVelocity = f;
      c.m_angularVelocity = m;
    };
    W.prototype.SolvePositionConstraints = function () {
      var c = this.m_bodyA,
        d = this.m_bodyB;
      var m = c.m_xf.R;
      var f = this.m_localAnchorA.x - c.m_sweep.localCenter.x,
        p = this.m_localAnchorA.y - c.m_sweep.localCenter.y;
      var q = m.col1.x * f + m.col2.x * p;
      p = m.col1.y * f + m.col2.y * p;
      f = q;
      m = d.m_xf.R;
      var u = this.m_localAnchorB.x - d.m_sweep.localCenter.x,
        b = this.m_localAnchorB.y - d.m_sweep.localCenter.y;
      q = m.col1.x * u + m.col2.x * b;
      b = m.col1.y * u + m.col2.y * b;
      u = q;
      m = c.m_invMass;
      q = d.m_invMass;
      var h = c.m_invI,
        t = d.m_invI,
        r = d.m_sweep.c.x + u - c.m_sweep.c.x - f,
        v = d.m_sweep.c.y + b - c.m_sweep.c.y - p,
        y = d.m_sweep.a - c.m_sweep.a - this.m_referenceAngle,
        x = 10 * a.b2_linearSlop,
        z = Math.sqrt(r * r + v * v),
        B = n.Abs(y);
      z > x && (h *= 1, t *= 1);
      this.m_mass.col1.x = m + q + p * p * h + b * b * t;
      this.m_mass.col2.x = -p * f * h - b * u * t;
      this.m_mass.col3.x = -p * h - b * t;
      this.m_mass.col1.y = this.m_mass.col2.x;
      this.m_mass.col2.y = m + q + f * f * h + u * u * t;
      this.m_mass.col3.y = f * h + u * t;
      this.m_mass.col1.z = this.m_mass.col3.x;
      this.m_mass.col2.z = this.m_mass.col3.y;
      this.m_mass.col3.z = h + t;
      x = new g();
      this.m_mass.Solve33(x, -r, -v, -y);
      c.m_sweep.c.x -= m * x.x;
      c.m_sweep.c.y -= m * x.y;
      c.m_sweep.a -= h * (f * x.y - p * x.x + x.z);
      d.m_sweep.c.x += q * x.x;
      d.m_sweep.c.y += q * x.y;
      d.m_sweep.a += t * (u * x.y - b * x.x + x.z);
      c.SynchronizeTransform();
      d.SynchronizeTransform();
      return z <= a.b2_linearSlop && B <= a.b2_angularSlop;
    };
    l.inherit(Q, l.Dynamics.Joints.b2JointDef);
    Q.prototype.__super = l.Dynamics.Joints.b2JointDef.prototype;
    Q.b2WeldJointDef = function () {
      l.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
      this.localAnchorA = new p();
      this.localAnchorB = new p();
    };
    Q.prototype.b2WeldJointDef = function () {
      this.__super.b2JointDef.call(this);
      this.type = y.e_weldJoint;
      this.referenceAngle = 0;
    };
    Q.prototype.Initialize = function (a, c, d) {
      this.bodyA = a;
      this.bodyB = c;
      this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
      this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d));
      this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
    };
  })();
  (function () {
    var a = l.Dynamics.b2DebugDraw;
    a.b2DebugDraw = function () {
      this.m_xformScale = this.m_fillAlpha = this.m_alpha = this.m_lineThickness = this.m_drawScale = 1;
      var a = this;
      this.m_sprite = {
        graphics: {
          clear: function () {
            a.m_ctx.clearRect(0, 0, a.m_ctx.canvas.width, a.m_ctx.canvas.height);
          }
        }
      };
    };
    a.prototype._color = function (a, q) {
      return "rgba(" + ((a & 16711680) >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + q + ")";
    };
    a.prototype.b2DebugDraw = function () {
      this.m_drawFlags = 0;
    };
    a.prototype.SetFlags = function (a) {
      void 0 === a && (a = 0);
      this.m_drawFlags = a;
    };
    a.prototype.GetFlags = function () {
      return this.m_drawFlags;
    };
    a.prototype.AppendFlags = function (a) {
      void 0 === a && (a = 0);
      this.m_drawFlags |= a;
    };
    a.prototype.ClearFlags = function (a) {
      void 0 === a && (a = 0);
      this.m_drawFlags &= ~a;
    };
    a.prototype.SetSprite = function (a) {
      this.m_ctx = a;
    };
    a.prototype.GetSprite = function () {
      return this.m_ctx;
    };
    a.prototype.SetDrawScale = function (a) {
      void 0 === a && (a = 0);
      this.m_drawScale = a;
    };
    a.prototype.GetDrawScale = function () {
      return this.m_drawScale;
    };
    a.prototype.SetLineThickness = function (a) {
      void 0 === a && (a = 0);
      this.m_lineThickness = a;
      this.m_ctx.strokeWidth = a;
    };
    a.prototype.GetLineThickness = function () {
      return this.m_lineThickness;
    };
    a.prototype.SetAlpha = function (a) {
      void 0 === a && (a = 0);
      this.m_alpha = a;
    };
    a.prototype.GetAlpha = function () {
      return this.m_alpha;
    };
    a.prototype.SetFillAlpha = function (a) {
      void 0 === a && (a = 0);
      this.m_fillAlpha = a;
    };
    a.prototype.GetFillAlpha = function () {
      return this.m_fillAlpha;
    };
    a.prototype.SetXFormScale = function (a) {
      void 0 === a && (a = 0);
      this.m_xformScale = a;
    };
    a.prototype.GetXFormScale = function () {
      return this.m_xformScale;
    };
    a.prototype.DrawPolygon = function (a, q, n) {
      if (q) {
        var c = this.m_ctx,
          g = this.m_drawScale;
        c.beginPath();
        c.strokeStyle = this._color(n.color, this.m_alpha);
        c.moveTo(a[0].x * g, a[0].y * g);
        for (n = 1; n < q; n++) c.lineTo(a[n].x * g, a[n].y * g);
        c.lineTo(a[0].x * g, a[0].y * g);
        c.closePath();
        c.stroke();
      }
    };
    a.prototype.DrawSolidPolygon = function (a, q, n) {
      if (q) {
        var c = this.m_ctx,
          g = this.m_drawScale;
        c.beginPath();
        c.strokeStyle = this._color(n.color, this.m_alpha);
        c.fillStyle = this._color(n.color, this.m_fillAlpha);
        c.moveTo(a[0].x * g, a[0].y * g);
        for (n = 1; n < q; n++) c.lineTo(a[n].x * g, a[n].y * g);
        c.lineTo(a[0].x * g, a[0].y * g);
        c.closePath();
        c.fill();
        c.stroke();
      }
    };
    a.prototype.DrawCircle = function (a, q, n) {
      if (q) {
        var c = this.m_ctx,
          g = this.m_drawScale;
        c.beginPath();
        c.strokeStyle = this._color(n.color, this.m_alpha);
        c.arc(a.x * g, a.y * g, q * g, 0, 2 * Math.PI, !0);
        c.closePath();
        c.stroke();
      }
    };
    a.prototype.DrawSolidCircle = function (a, q, n, p) {
      if (q) {
        var c = this.m_ctx,
          x = this.m_drawScale,
          m = a.x * x,
          u = a.y * x;
        c.moveTo(0, 0);
        c.beginPath();
        c.strokeStyle = this._color(p.color, this.m_alpha);
        c.fillStyle = this._color(p.color, this.m_fillAlpha);
        c.arc(m, u, q * x, 0, 2 * Math.PI, !0);
        c.moveTo(m, u);
        c.lineTo((a.x + n.x * q) * x, (a.y + n.y * q) * x);
        c.closePath();
        c.fill();
        c.stroke();
      }
    };
    a.prototype.DrawSegment = function (a, q, n) {
      var c = this.m_ctx,
        g = this.m_drawScale;
      c.strokeStyle = this._color(n.color, this.m_alpha);
      c.beginPath();
      c.moveTo(a.x * g, a.y * g);
      c.lineTo(q.x * g, q.y * g);
      c.closePath();
      c.stroke();
    };
    a.prototype.DrawTransform = function (a) {
      var c = this.m_ctx,
        n = this.m_drawScale;
      c.beginPath();
      c.strokeStyle = this._color(16711680, this.m_alpha);
      c.moveTo(a.position.x * n, a.position.y * n);
      c.lineTo((a.position.x + this.m_xformScale * a.R.col1.x) * n, (a.position.y + this.m_xformScale * a.R.col1.y) * n);
      c.strokeStyle = this._color(65280, this.m_alpha);
      c.moveTo(a.position.x * n, a.position.y * n);
      c.lineTo((a.position.x + this.m_xformScale * a.R.col2.x) * n, (a.position.y + this.m_xformScale * a.R.col2.y) * n);
      c.closePath();
      c.stroke();
    };
  })();
  var aa;
  for (aa = 0; aa < l.postDefs.length; ++aa) l.postDefs[aa]();
  delete l.postDefs;
  var U = {};
  U.Vec2 = l.Common.Math.b2Vec2;
  U.Transform = l.Common.Math.b2Transform;
  U.Math = l.Common.Math.b2Math;
  U.BodyDef = l.Dynamics.b2BodyDef;
  U.Body = l.Dynamics.b2Body;
  U.FixtureDef = l.Dynamics.b2FixtureDef;
  U.Fixture = l.Dynamics.b2Fixture;
  U.World = l.Dynamics.b2World;
  U.MassData = l.Collision.Shapes.b2MassData;
  U.PolygonShape = l.Collision.Shapes.b2PolygonShape;
  U.CircleShape = l.Collision.Shapes.b2CircleShape;
  U.DebugDraw = l.Dynamics.b2DebugDraw;
  var X = {
      shared: {}
    },
    Y = {
      waiting: [],
      reset: function () {
        Y.waiting = [];
      },
      after: function (a, c) {
        Y.waiting.push({
          remaining: a,
          callback: c
        });
      },
      step: function (a, c, q) {
        Y.waiting.push({
          total: a,
          remaining: a,
          callback: q,
          step: c
        });
      },
      stepReverse: function (a, c, q) {
        Y.waiting.push({
          total: a,
          remaining: a,
          callback: q,
          step: c,
          reverse: !0
        });
      },
      onFrame: function (a) {
        for (let c = 0, q; q = Y.waiting[c]; c++) {
          q.remaining -= a;
          0 > q.remaining && (q.remaining = 0);
          if (q.step) {
            let a = q.remaining / q.total;
            q.reverse || (a = 1 - a);
            q.step(a);
          }
          0 >= q.remaining && (q.callback(), Y.waiting.splice(c--, 1));
        }
      }
    };
  X.shared.Coordinator = Y;
  X.shared.Gameover = class {
    constructor(a, c = !1) {
      this.game = a;
      this._hasPlayExtra = "boolean" === typeof c && c;
    }
    show(a, c) {
      window.santaApp.fire("game-stop", {
        score: a || this.game && this.game.scoreboard && this.game.scoreboard.score || 0,
        level: c || 0,
        hasPlayExtra: this._hasPlayExtra
      });
    }
  };
  X.shared.utils = function () {
    class a {
      constructor(a) {
        this.value = a;
      }
      change(a) {
        const c = this.value !== a;
        this.value = a;
        return c;
      }
      moveToTarget(a, q) {
        let c = +this.value;
        if (this.value !== c) throw new TypeError("SmartValue does not contain a number");
        c < a ? c = Math.min(a, c + q) : c > a && (c = Math.max(a, c - q));
        this.value = c;
        return this;
      }
    }
    return {
      animWithClass: function (a, q, n) {
        a.length || (a = [a]);
        a = Array.prototype.slice.call(a);
        a.forEach(a => {
          a.classList.add(q);
          const c = () => {
            a.classList.remove(q);
            a.removeEventListener("animationend", c);
            a.removeEventListener("transitionend", c);
            n && (n(), n = null);
          };
          a.addEventListener("animationend", c);
          a.addEventListener("transitionend", c);
        });
      },
      unwrapElement: function (a) {
        return a instanceof Node ? a : a[0] || null;
      },
      computedTransform: function (a) {
        const c = window.getComputedStyle(a);
        let n;
        ["", "-webkit-", "-moz-", "-ms-", "-o-"].some(a => {
          a = c.getPropertyValue(a + "transform");
          if (!a) return !1;
          n = a;
          return !0;
        });
        if ("none" === n) return {
          x: 0,
          y: 0,
          rotate: 0
        };
        let p;
        try {
          p = n.split("(")[1].split(")")[0].split(",").map(a => +a);
        } catch (g) {
          throw new TypeError("Couldn't split transform, expected matrix(...)");
        }
        return {
          x: p[4],
          y: p[5],
          rotate: 180 / Math.PI * Math.atan2(p[1], p[0])
        };
      },
      onWebAnimationFinished: function (a, q) {
        const c = a.finished;
        c && c.then ? c.then(q) : a.addEventListener("finish", q, !1);
      },
      playerFinished: function (a) {
        return !a || "finished" === a.playState;
      },
      get touchEnabled() {
        return "standalone" in navigator || window.matchMedia("(pointer: coarse)").matches ? !0 : window.matchMedia("(pointer: fine)").matches ? !1 : "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
      },
      SmartValue: a
    };
  }();
  X.shared.LevelUp = ba;
  function ba(a, c, q) {
    this.bgElem = $(c);
    this.numberElem = $(q);
    this.onResizeBound_ = this.onResize_.bind(this);
    $(window).on("resize", this.onResizeBound_);
    this.onResize_();
  }
  ba.prototype.dispose = function () {
    $(window).off("resize", this.onResizeBound_);
  };
  ba.prototype.onResize_ = function () {
    var a = window.innerWidth,
      c = window.innerHeight;
    this.bgBorderWidth = a;
    this.bgElem.css({
      width: 2 * a,
      height: 2 * a,
      left: -.5 * a,
      top: -(a - c / 2)
    });
  };
  ba.prototype.numberHidden_ = function () {
    this.numberElem.removeClass("show hide");
    this.bgElem.removeClass("is-visible");
  };
  ba.prototype.numberShown_ = function () {
    ca(this.numberElem, "transitionend", .5, this.numberHidden_.bind(this));
    this.numberElem.addClass("hide");
    this.bgElem.css("border-width", 0);
    window.santaApp.fire("sound-trigger", "level_transition_open");
  };
  ba.prototype.show = function (a, c) {
    this.bgElem.addClass("is-visible");
    ca(this.bgElem, "transitionend", 1, c);
    this.bgElem.css("border-width", this.bgBorderWidth);
    ca(this.numberElem, "animationend", 1.5, this.numberShown_.bind(this));
    this.numberElem.text("" + a).addClass("show");
    window.santaApp.fire("sound-trigger", "level_transition_close");
  };
  function ca(a, c, q, n) {
    function p() {
      g || (g = !0, a.removeEventListener(c, p), n && n());
    }
    a = X.shared.utils.unwrapElement(a);
    var g = !1;
    a.addEventListener(c, p);
    window.setTimeout(p, 1E3 * q);
  }
  X.shared.pools = function () {
    const a = [];
    return {
      mixin(c, q) {
        function n(a) {
          q.fixed || 0 !== c.pool_.length || c.pool(a);
        }
        function p(a, c) {
          a && a.onInit.apply(a, Array.prototype.slice.call(c, 1));
          return a || null;
        }
        q = q || {};
        c.pool_ = [];
        a.push(c);
        c.pop = function (a) {
          n(a);
          const g = c.pool_.shift();
          return p(g, arguments);
        };
        c.popRandom = function (a) {
          n(a);
          const g = Math.floor(Math.random() * c.pool_.length),
            m = c.pool_[g],
            q = c.pool_.pop();
          q && m !== q && (c.pool_[g] = q);
          return p(m, arguments);
        };
        c.pool = function (a) {
          a = new c(a);
          c.pool_.push(a);
        };
        c.push = function (a) {
          if (a.onDispose) a.onDispose();
          c.pool_.push(a);
        };
        c.prototype.remove = function () {
          c.push(this);
        };
        c.prototype.onInit = c.prototype.onInit || function () {};
        c.prototype.onDispose = c.prototype.onDispose || function () {};
      },
      empty() {
        for (let c = 0; c < a.length; c++) a[c].pool_ = [];
      }
    };
  }();
  X.shared.pools.PoolType = function () {};
  X.shared.pools.PoolType.onInit = function () {};
  X.shared.pools.PoolType.onDispose = function () {};
  X.shared.pools.PoolType.remove = function () {};
  X.Constants = {
    INITIAL_COUNTDOWN: 40,
    TIME_PER_LEVEL: 20,
    LESS_TIME_PER_CYCLE: 5,
    COUNTDOWN_TRACK_LENGTH: 60,
    COUNTDOWN_TRACK_MAX_X: 150,
    COUNTDOWN_FLASH: 10,
    SPAWNER_VELOCITY: 300,
    SPHERE_RADIUS: 19,
    SPHERE_RESPAWN_TIMER: 3.5,
    MAX_ANGLE: 9,
    ANGULAR_ACCELERATION: 360,
    MAX_ANGULAR_VELOCITY: 50,
    GEAR_SPEED: 3,
    GRAVITY: 300,
    PHYSICS_SCALE: .01,
    MIN_PHYSICS_FPS: .02,
    TUTORIAL_ARROW_TIMEOUT: 5E3,
    LEVELS: [{
      board: "easy",
      balls: [{
        x: -200
      }]
    }, {
      board: "easy",
      balls: [{
        x: -200
      }, {
        x: -250
      }]
    }, {
      board: "easy",
      balls: [{
        x: 100
      }, {
        x: 50
      }, {
        x: 0
      }, {
        x: -50
      }, {
        x: -100
      }, {
        x: -150
      }, {
        x: -200
      }, {
        x: -250
      }, {
        x: -300
      }]
    }, {
      board: "board2",
      balls: [{
        x: -250
      }, {
        x: 250
      }]
    }, {
      board: "board2",
      balls: [{
        x: 250
      }, {
        x: -250
      }, {
        x: 250
      }]
    }, {
      board: "board3",
      balls: [{
        x: -250
      }, {
        x: 150
      }]
    }, {
      board: "slideTight",
      balls: [{
        x: -250
      }]
    }, {
      board: "board4",
      balls: [{
        x: -250
      }, {
        x: -200
      }, {
        x: -150
      }]
    }, {
      board: "board4",
      balls: [{
        x: 250
      }, {
        x: 250
      }, {
        x: 250
      }, {
        x: 250
      }, {
        x: 250
      }, {
        x: 250
      }]
    }, {
      board: "board4",
      balls: [{
        x: 250
      }, {
        x: 250
      }, {
        x: 250
      }, {
        x: -200
      }, {
        x: -250
      }]
    }, {
      board: "board5",
      balls: [{
        x: -270
      }, {
        x: -270
      }, {
        x: -270
      }]
    }, {
      board: "board6",
      balls: [{
        x: -270
      }, {
        x: 250
      }, {
        x: 290
      }, {
        x: -270
      }]
    }, {
      board: "board7",
      balls: [{
        x: 0
      }]
    }, {
      board: "board7",
      balls: [{
        x: -340
      }, {
        x: -100
      }, {
        x: 0
      }, {
        x: 170
      }, {
        x: 300
      }, {
        x: 300
      }]
    }, {
      board: "board8",
      balls: [{
        x: 300
      }, {
        x: 100
      }, {
        x: 50
      }, {
        x: -250
      }]
    }, {
      board: "board10",
      balls: [{
        x: -230
      }, {
        x: -270
      }]
    }, {
      board: "board10",
      balls: [{
        x: -230
      }, {
        x: -270
      }, {
        x: 250
      }, {
        x: 250
      }, {
        x: 250
      }]
    }],
    BOARDS: {
      easy: {
        sticks: [[-125, -124, 500, 0, !1], [125, 40, 500, 0, !0], [-220, 166, 300, 12, !1]]
      },
      board2: {
        sticks: [[-260, -132, 250, 6, !1], [228, -132, 300, 0, !0], [-24, -28, 356, 180, !0], [253, 65, 280, 186, !0], [-226, 156, 300, 0, !1]]
      },
      board3: {
        sticks: [[-278, -127, 200, 12, !1], [140, -85, 215, 0, !1], [-125, -4, 195, 0, !0], [310, 38, 190, 8, !0], [-250, 100, 300, 180, !0], [217, 134, 300, 180, !1]]
      },
      board4: {
        sticks: [[-215, -153, 284, 0, !1], [239, -177, 340, 175, !1], [-29, -90, 310, 180, !1], [-285, -20, 260, 8, !1], [222, 24, 150, 170, !1], [-128, 80, 275, 0, !0], [-250, 160, 350, 180, !0], [250, 195, 310, 0, !0]]
      },
      board5: {
        sticks: [[-128, -144, 525, 177, !0], [144, -62, 494, 180, !1], [-255, -6, 320, 0, !1], [-30, 90, 440, 177, !0], [225, 167, 340, 180, !0]]
      },
      board6: {
        sticks: [[-227, -148, 285, 4, !1], [280, -183, 252, 180, !1], [83, -73, 490, 0, !0], [-197, -6, 190, 180, !1], [-96, 96, 624, 180, !0], [227, 164, 360, 170, !1]]
      },
      board7: {
        sticks: [[-72, -193, 383, 180, !1], [-10, -80, 498, 0, !1], [-223, -15, 356, 180, !1], [306, -2, 180, 170, !1], [32, 100, 554, 0, !0], [-238, 176, 360, 170, !0]]
      },
      board8: {
        sticks: [[300, -175, 226, 180, !1], [-286, -90, 250, 8, !1], [96, -83, 306, 180, !1], [-128, 38, 210, 0, !0], [-240, 138, 326, 180, !0], [308, 58, 200, 0, !0], [193, 142, 244, 166, !1]]
      },
      board9: {
        sticks: [[-216, -168, 296, 180, !0], [238, -168, 320, 172, !1], [-44, -54, 308, 180, !1], [0, 67, 400, 0, !1], [-230, 138, 300, 190, !1], [240, 170, 300, 0, !0]]
      },
      board10: {
        sticks: [[-288, -146, 180, 0, !1], [208, -142, 400, 6, !0], [50, -48, 460, 190, !1], [252, 124, 334, 180, !0]]
      },
      board11: {
        sticks: [[-288, -146, 180, 0, !1], [208, -142, 400, 6, !0], [50, -48, 460, 190, !1], [-256, -16, 300, 180, !1], [-124, 96, 298, 0, !0], [-224, 162, 332, 180, !1], [252, 124, 334, 180, !0]]
      },
      slideTight: {
        sticks: [[-250, -100, 300, 0, !1], [0, 0, 450, 163, !1], [220, 150, 350, 163, !1]]
      }
    }
  };
  var Z = X.Constants;
  X.shared.Scoreboard = Pa;
  function nb(a, c) {
    a = Z ? Z[a] : void 0;
    return +a === a ? a : c;
  }
  function Pa(a, c, q) {
    this.game = a;
    this.initialCountdown_ = nb("INITIAL_COUNTDOWN", 60);
    this.levels = q || 0;
    this.score = this.level = 0;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.lastSeconds = NaN;
    this.announceTimeout_ = 0;
  }
  Pa.prototype.reset = function () {
    this.restart();
    this.score = this.level = 0;
  };
  Pa.prototype.restart = function () {
    this.lastSeconds = NaN;
    this.countdown = this.initialCountdown_;
    this.losing = !1;
    this.announce_();
  };
  Pa.prototype.onFrame = function (a) {
    this.countdown -= a;
    const c = Math.ceil(this.countdown);
    c !== this.lastSeconds && (this.lastSeconds = c, 0 < a && (0 > this.countdown && (this.countdown = 0, this.game.gameover()), a = nb("COUNTDOWN_FLASH", 10), a = c <= a && 0 !== c, this.losing !== a && (this.losing = a, 0 < c && window.santaApp.fire("sound-trigger", a ? "game_hurry_up" : "game_hurry_up_end"))), this.announce_());
  };
  Pa.prototype.addScore = function (a) {
    a && (this.score += a, this.announce_());
  };
  Pa.prototype.setLevel = function (a) {
    this.level !== a && (this.level = a, this.announce_());
  };
  Pa.prototype.addTime = function (a) {
    a && (this.countdown += a, this.announce_());
  };
  Pa.prototype.announce_ = function () {
    window.clearTimeout(this.announceTimeout_);
    this.announceTimeout_ = window.setTimeout(() => {
      window.santaApp.fire("game-score", {
        score: this.score,
        level: this.level + 1,
        maxLevel: this.levels,
        time: this.lastSeconds || this.countdown
      });
    }, 1);
  };
  function ob(a) {
    "string" === typeof a && (a = a.split(/\s+/g));
    return a.filter(Boolean);
  }
  X.shared.Tutorial = class {
    constructor(a) {
      this._tutorials = ob(a);
      this._dismissed = new Set();
    }
    start() {
      window.santaApp.fire("tutorial-queue", this._tutorials);
    }
    off(a, ...c) {
      a = ob(a).concat(c).filter(a => {
        if (this._dismissed.has(a)) return !1;
        this._dismissed.add(a);
        return !0;
      });
      a.length && window.santaApp.fire("tutorial-dismiss", a);
    }
    dispose() {}
  };
  X.Platform = function (a) {
    this.board = a;
    this.elem = $('<div class="platform"></div>');
    this.caneElem = $('<div class="platform-cane"><div class="platform-cane-hook"></div></div>').appendTo(this.elem);
    this.shadowElem = $('<div class="platform-shadow"><div class="platform-shadow-hook"></div></div>').appendTo(this.elem);
  };
  X.shared.pools.mixin(X.Platform);
  X.Platform.prototype.onInit = function (a, c, q, n, p) {
    this.createStick2(a, c, q, n, p);
    p = p ? -1 : 1;
    this.caneElem.css("transform", "scaleX(" + p + ") rotate(" + n + "deg)");
    this.shadowElem.css("transform", "translate(2px, 8px) scaleX(" + p + ") rotate(" + n + "deg)");
    this.elem.css({
      transform: "translate(" + (a - q / 2) + "px, " + c + "px)",
      width: q
    }).appendTo(this.board.elem);
  };
  X.Platform.prototype.onDispose = function () {
    this.elem.remove();
  };
  X.Platform.prototype.createStick2 = function (a, c, q, n, p) {
    var g = X.Constants.PHYSICS_SCALE,
      x = 1 / 180 * Math.PI,
      m = 8 * g,
      u = 35 * g,
      O = 90 < n && 270 > n;
    a *= g;
    c *= g;
    q *= g;
    n *= x;
    p && (n *= -1);
    x = new U.Transform();
    x.position = new U.Vec2(a, c);
    x.R.Set(p ? -n : n);
    p && (x.R.col1.x *= -1, x.R.col2.x *= -1);
    c = new U.Vec2(0, 0);
    p = q / 2;
    O && (a = u / 2, c.x += a, p -= a);
    c = U.Math.MulX(x, c);
    a = new U.PolygonShape();
    a.SetAsOrientedBox(p, m, c, n);
    this.board.boardBody.CreateFixture2(a).SetUserData("cone");
    O ? (n = new U.Vec2(-q / 2 + u, -u + m), n = U.Math.MulX(x, n), a = new U.CircleShape(u), a.SetLocalPosition(n)) : (O = new U.Vec2(-q / 2 + m, -u), O = U.Math.MulX(x, O), a.SetAsOrientedBox(m, u - m, O, n), this.board.boardBody.CreateFixture2(a).SetUserData("cone"), q = new U.Vec2(-q / 2 + 2 * m + u / 2, 2 * -u + 2 * m - g), q = U.Math.MulX(x, q), a.SetAsOrientedBox(u / 2, m, q, n));
    this.board.boardBody.CreateFixture2(a).SetUserData("cone");
  };
  X.Board = function (a, c) {
    this.game = a;
    this.elem = c;
    this.bigGearLeft = this.game.elem.find(".gearBig--left");
    this.smallGearLeft = this.game.elem.find(".gearSmall--left");
    this.bigGearRight = this.game.elem.find(".gearBig--right");
    this.smallGearRight = this.game.elem.find(".gearSmall--right");
    this.isRotating = !1;
    this.angle = 0;
    this.currentBoard = null;
    this.platforms = [];
    this.boardBody = null;
    for (a = 0; 10 > a; a++) X.Platform.pool(this);
  };
  X.Board.prototype.reset = function () {
    this.boardBody && (this.boardBody.SetAngularVelocity(0), this.boardBody.SetAngle(0));
  };
  X.Board.prototype.switchToLevel = function (a) {
    this.reset();
    if (a.board !== this.currentBoard) {
      this.currentBoard = a.board;
      this.platforms.forEach(function (a) {
        a.remove();
      });
      this.platforms = [];
      this.boardBody && this.game.boxWorld.DestroyBody(this.boardBody);
      var c = new U.BodyDef();
      c.userData = "board";
      c.type = U.Body.b2_kinematicBody;
      c.position.Set(6, 4.5);
      this.boardBody = this.game.boxWorld.CreateBody(c);
      a = Z.BOARDS[a.board];
      c = 0;
      for (var q; q = a.sticks[c]; c++) q = X.Platform.pop.apply(X.Platform, [this].concat(q)), this.platforms.push(q);
    }
  };
  X.Board.prototype.update = function (a) {
    if (this.boardBody) {
      var c = this.game.controls.tilt;
      this.game.controls.isRightDown && (c += 90);
      this.game.controls.isLeftDown && (c -= 90);
      c = Math.min(Z.MAX_ANGLE, Math.max(-Z.MAX_ANGLE, c));
      var q = this.boardBody.GetAngularVelocity() / Math.PI * 180,
        n = this.boardBody.GetAngle() / Math.PI * 180,
        p = q / Z.ANGULAR_ACCELERATION,
        g = Math.abs(c - n);
      q = .01 > g ? 0 : g > Math.abs(q * p) ? Math.min(X.Constants.MAX_ANGULAR_VELOCITY, Math.max(-X.Constants.MAX_ANGULAR_VELOCITY, q + (c > n ? 1 : -1) * Z.ANGULAR_ACCELERATION * a)) : q > X.Constants.ANGULAR_ACCELERATION * a ? q - X.Constants.ANGULAR_ACCELERATION * a : q < -Z.ANGULAR_ACCELERATION * a ? q + X.Constants.ANGULAR_ACCELERATION * a : c - n;
      this.boardBody.SetAngularVelocity(q / 180 * Math.PI);
    }
  };
  X.Board.prototype.render = function () {
    if (this.boardBody) {
      var a = .4 < Math.abs(this.boardBody.GetAngularVelocity());
      this.isRotating !== a && (this.isRotating = a, window.santaApp.fire("sound-trigger", a ? "gb_box_turn_start" : "gb_box_turn_stop"));
      a = this.boardBody.GetAngle();
      var c = -a * X.Constants.GEAR_SPEED,
        q = a * X.Constants.GEAR_SPEED * 1.7;
      this.elem.css("transform", "translateZ(0) rotate(" + a + "rad)");
      this.bigGearLeft.css("transform", "translateZ(0) rotate(" + (c - .104719755) + "rad)");
      this.smallGearLeft.css("transform", "translateZ(0) rotate(" + (q + .366519143) + "rad)");
      this.bigGearRight.css("transform", "translateZ(0) rotate(" + (c + .0872664626) + "rad)");
      this.smallGearRight.css("transform", "translateZ(0) rotate(" + (q + .34906585) + "rad)");
    }
  };
  X.Controls = function (a) {
    this.game = a;
    this.tutorial = a.tutorial;
    this.isDesktopish_ = !X.shared.utils.touchEnabled;
    this.onKeyDown_ = this.onKeyDown_.bind(this);
    this.onKeyUp_ = this.onKeyUp_.bind(this);
    this.onDeviceOrientation_ = this.onDeviceOrientation_.bind(this);
    this.onTouchStart_ = this.onTouchStart_.bind(this);
    this.onTouchEnd_ = this.onTouchEnd_.bind(this);
    $(window).on("keydown.gumball", this.onKeyDown_);
    $(window).on("keyup.gumball", this.onKeyUp_);
    $(window).on("deviceorientation.gumball", this.onDeviceOrientation_);
    $(window).on("touchstart.gumball", this.onTouchStart_);
    $(window).on("touchend.gumball", this.onTouchEnd_);
  };
  X.Controls.prototype.isRightDown = !1;
  X.Controls.prototype.isLeftDown = !1;
  X.Controls.prototype.tilt = 0;
  X.Controls.prototype.touchActive = !1;
  X.Controls.prototype.onDeviceOrientation_ = function (a) {
    a = a.originalEvent;
    if (null != a.gamma && !this.isDesktopish_ && !this.touchActive) {
      var c = a.gamma;
      window.orientation && (c = window.orientation / 90 * a.beta);
      this.tilt = c.toFixed(1);
      !this.tiltStarted && 2 < this.tilt && (this.tutorial.off("device-tilt"), this.tiltStarted = !0);
    }
  };
  X.Controls.prototype.onKeyDown_ = function (a) {
    37 === a.keyCode ? this.isLeftDown = !0 : 39 === a.keyCode && (this.isRightDown = !0);
    this.arrowPressed || 37 !== a.keyCode && 39 !== a.keyCode || (this.tutorial.off("keys-leftright"), this.tutorial.off("spacenav-leftright"), this.arrowPressed = !0);
  };
  X.Controls.prototype.onKeyUp_ = function (a) {
    37 === a.keyCode ? this.isLeftDown = !1 : 39 === a.keyCode && (this.isRightDown = !1);
  };
  X.Controls.prototype.setDirectionFromTouch = function (a) {
    this.isRightDown = this.isLeftDown = !1;
    a < window.innerWidth / 2 ? (this.tilt = -15, this.isLeftDown = !0) : (this.tilt = 15, this.isRightDown = !0);
  };
  X.Controls.prototype.onTouchStart_ = function (a) {
    this.touchActive = !0;
    this.setDirectionFromTouch(a.touches[0].clientX);
    this.touchStarted || (this.tutorial.off("device-tilt"), this.touchStarted = !0);
  };
  X.Controls.prototype.onTouchEnd_ = function (a) {
    a.touches && 0 < a.touches.length ? (this.setDirectionFromTouch(a.touches[0].clientX), this.touchActive = !0) : (this.tilt = 0, this.isRightDown = this.isLeftDown = this.touchActive = !1);
  };
  X.Spawner = function (a, c) {
    this.game = a;
    this.elem = c;
    this.performSpawn_ = this.performSpawn_.bind(this);
    this.goToNextSpawn_ = this.goToNextSpawn_.bind(this);
    this.queue = [];
    this.reset();
  };
  X.Spawner.prototype.reset = function () {
    this.x = 600;
    this.queue = [];
    this.render();
  };
  X.Spawner.prototype.spawnSphere = function (a) {
    this.queue.push(a);
    1 === this.queue.length && this.goToNextSpawn_();
  };
  X.Spawner.prototype.goToNextSpawn_ = function () {
    var a = this.queue[0];
    if (a) {
      var c = Math.abs(a.initialX - this.x);
      if (1 > c) this.performSpawn_();else {
        var q = this.x;
        Y.step(c / X.Constants.SPAWNER_VELOCITY, function (c) {
          this.x = q + (a.initialX - q) * c;
        }.bind(this), this.performSpawn_);
      }
    }
  };
  X.Spawner.prototype.performSpawn_ = function () {
    const a = this.queue.shift();
    a ? (a.spawn(), window.santaApp.fire("sound-trigger", "gb_new_ball"), this.elem.removeClass("toggle-lever"), window.setTimeout(() => {
      this.elem.one("animationend", () => {
        this.elem.removeClass("toggle-lever");
        this.goToNextSpawn_();
      });
      this.elem.addClass("toggle-lever");
    }, 100)) : console.debug("performSpawn_ without queue");
  };
  X.Spawner.prototype.render = function () {
    this.elem.css("transform", "translate3d(" + this.x + "px, 0, 0)");
  };
  X.Sphere = function (a) {
    X.Sphere.counter = X.Sphere.counter % 6 + 1;
    this.game = a;
    this.elem = $('<div class="sphere hidden" />').addClass("sphere--" + X.Sphere.counter);
    this.ballBody = null;
    this.dead = this.collided = !1;
    this.initialX = null;
    this.soundFrameCounter = 0;
    this.elem.appendTo(this.game.spheresElem);
  };
  X.Sphere.counter = 0;
  X.shared.pools.mixin(X.Sphere);
  X.Sphere.prototype.onInit = function (a) {
    this.dead = !1;
    this.initialX = a;
    this.respawns = 0;
    a = new U.BodyDef();
    a.type = U.Body.b2_dynamicBody;
    a.userData = this;
    a.active = !1;
    this.ballBody = this.game.boxWorld.CreateBody(a);
    a = new U.FixtureDef();
    a.userData = "sphere";
    a.shape = new U.CircleShape(Z.SPHERE_RADIUS * Z.PHYSICS_SCALE);
    a.density = 1;
    a.restitution = .2;
    this.ballBody.CreateFixture(a);
  };
  X.Sphere.prototype.onDispose = function () {
    this.game.boxWorld.DestroyBody(this.ballBody);
    this.ballBody.SetUserData(null);
    this.dead = !0;
    this.elem.css("transform", "");
    this.elem.addClass("hidden");
  };
  X.Sphere.prototype.spawn = function () {
    this.elem.removeClass("hidden");
    this.respawnTimer = !1;
    this.ballBody.SetPositionAndAngle(new U.Vec2((this.initialX + Math.random()) * Z.PHYSICS_SCALE, 0), 0);
    this.ballBody.SetLinearVelocity(new U.Vec2(0, 0));
    this.ballBody.SetAngularVelocity(0);
    this.ballBody.SetActive(!0);
  };
  X.Sphere.prototype.update = function (a) {
    this.collided && this.processCollision_();
    !1 !== this.respawnTimer && (this.respawnTimer -= a, 0 > this.respawnTimer && this.ballBody.IsActive() && this.shouldRespawn_());
  };
  X.Sphere.prototype.render = function () {
    var a = this.ballBody.GetPosition(),
      c = this.ballBody.GetAngle();
    this.elem.css("transform", "translate3d(" + a.x / Z.PHYSICS_SCALE + "px, " + a.y / Z.PHYSICS_SCALE + "px, 0) rotate(" + c.toFixed(6) + "rad)");
    0 === this.soundFrameCounter && this.updateSound_();
    this.soundFrameCounter = (this.soundFrameCounter + 1) % 3;
  };
  X.Sphere.prototype.updateSound_ = function () {
    for (var a = this.ballBody.GetContactList(), c = !1; a && !c;) c = a.other.GetUserData(), c = a.contact.IsTouching() && ("board" === c || "floor" === c), a = a.next;
    a = Math.min(1, Math.abs(this.ballBody.GetLinearVelocity().x) / 2);
    !1 === c && (a = 0);
    window.santaApp.fire("sound-trigger", {
      name: "gb_ball_rolling",
      args: [a]
    });
  };
  X.Sphere.prototype.processCollision_ = function () {
    if ("oob" === this.collided) this.shouldRespawn_();else if ("funnel" === this.collided) {
      window.santaApp.fire("sound-trigger", "gb_ball_into_machine");
      var a = this.ballBody.GetPosition();
      this.game.hitTarget(this, 100 * a.x, 100 * a.y);
      X.Sphere.push(this);
    }
    this.collided = !1;
  };
  X.Sphere.prototype.shouldRespawn_ = function () {
    window.santaApp.fire("sound-trigger", "gb_ballfallout");
    this.respawns++;
    this.ballBody.SetActive(!1);
    this.game.spawner.spawnSphere(this);
  };
  X.Sphere.prototype.onContact = function (a) {
    if ("oob" === a || "funnel" === a) this.collided = a;
    "target" === a && window.santaApp.fire("sound-trigger", "gb_ball_bounce");
    "floor" === a && (this.respawnTimer = Z.SPHERE_RESPAWN_TIMER);
  };
  X.Game = function (a) {
    this.elem = $(a);
    this.boardElem = this.elem.find(".gameboard");
    this.spheresElem = this.elem.find(".spheres");
    this.bgElem = this.elem.find(".bg");
    this.viewElem = this.elem.find(".scene");
    this.spawner = new X.Spawner(this, this.elem.find(".ceiling-pipe"));
    this.ballsRemaining = this.elem.find(".js-balls-remaining");
    this.ballsAvailable = this.elem.find(".js-balls-available");
    this.scoreboard = new X.shared.Scoreboard(this, this.elem.find(".board"), X.Constants.LEVELS.length);
    this.gameoverView = new X.shared.Gameover(this, this.elem.find(".gameover"));
    this.levelUp = new X.shared.LevelUp(this, this.elem.find(".levelup"), this.elem.find(".levelup--number"));
    this.tutorial = new X.shared.Tutorial("device-tilt keys-leftright spacenav-leftright");
    this.controls = new X.Controls(this);
    this.spheres = [];
    this.hidden = this.paused = this.isPlaying = !1;
    this.scale = 1;
    this.debug = !!location.search.match(/[?&]debug=true/);
    this.gameStartTime = +new Date();
    this.createBoxWorld_();
    this.board = new X.Board(this, this.boardElem);
    this.onFrame_ = this.onFrame_.bind(this);
    this.bumpLevel_ = this.bumpLevel_.bind(this);
    this.watchSceneSize_();
    this.preloadSpheres_();
  };
  X.Game.prototype.preloadSpheres_ = function () {
    for (var a = 0; 10 > a; a++) X.Sphere.pool(this);
  };
  X.Game.prototype.createBoxWorld_ = function () {
    this.boxWorld = new U.World(new U.Vec2(0, 20), !1);
    if (this.debug) {
      var a = $("<canvas>").css({
          position: "absolute",
          zIndex: 100,
          left: "50%",
          top: "50%",
          margin: "-450px 0 0 -600px"
        }).attr({
          width: 1200,
          height: 900
        }).appendTo(this.viewElem),
        c = new U.DebugDraw();
      c.SetSprite(a[0].getContext("2d"));
      c.SetDrawScale(100);
      c.SetFillAlpha(.5);
      c.SetFlags(U.DebugDraw.e_shapeBit);
      this.boxWorld.SetDebugDraw(c);
    }
    a = new U.BodyDef();
    a.type = U.Body.b2_staticBody;
    a.userData = "floor";
    a.position.Set(6, 4.5);
    this.staticBody = this.boxWorld.CreateBody(a);
    a = new U.FixtureDef();
    a.shape = new U.PolygonShape();
    a.userData = "floor";
    a.shape.SetAsOrientedBox(4, .08, new U.Vec2(-5.21, 3.04));
    this.staticBody.CreateFixture(a);
    a.shape.SetAsOrientedBox(4, .08, new U.Vec2(5.21, 3.04));
    this.staticBody.CreateFixture(a);
    a.userData = null;
    a.shape.SetAsArray([new U.Vec2(-1.21, 3.12), new U.Vec2(-1.21, 2.61), new U.Vec2(-.94, 3.12)]);
    this.staticBody.CreateFixture(a);
    a.shape.SetAsArray([new U.Vec2(1.21, 3.12), new U.Vec2(.94, 3.12), new U.Vec2(1.21, 2.61)]);
    this.staticBody.CreateFixture(a);
    a.userData = "funnel";
    a.shape.SetAsOrientedBox(2.3, .08, new U.Vec2(0, 3.38));
    this.staticBody.CreateFixture(a);
    a.userData = "oob";
    a.shape.SetAsOrientedBox(.08, 4, new U.Vec2(-6.6, 0));
    this.staticBody.CreateFixture(a);
    a.shape.SetAsOrientedBox(.08, 4, new U.Vec2(6.6, 0));
    this.staticBody.CreateFixture(a);
    this.boxWorld.SetContactListener({
      BeginContact: function (a) {
        if (a = this.getInterestingData(a)) a[0].onContact(a[1].GetUserData());
      },
      EndContact: function () {},
      PreSolve: function () {},
      PostSolve: function (a, c) {
        .3 > c.normalImpulses[0] || (a = (a = this.getInterestingData(a)) && a[1].GetUserData(), "floor" !== a && "cone" !== a || window.santaApp.fire("sound-trigger", {
          name: "gb_ball_bounce",
          args: [c.normalImpulses[0]]
        }));
      },
      getInterestingData: function (a) {
        var c = a.GetFixtureA().GetBody().GetUserData();
        if (c && c instanceof X.Sphere) return [c, a.GetFixtureB()];
        if ((c = a.GetFixtureB().GetBody().GetUserData()) && c instanceof X.Sphere) return [c, a.GetFixtureA()];
      }
    });
  };
  X.Game.prototype.onFrame_ = function () {
    if (this.isPlaying) {
      var a = +new Date() / 1E3,
        c = Math.min(1, a - this.lastFrame);
      this.lastFrame = a;
      this.update(c);
      this.spawner.render();
      this.board.render();
      this.spheres.forEach(function (a) {
        a.render();
      });
      this.scoreboard.onFrame(c);
      this.debug && this.boxWorld.DrawDebugData();
      this.requestId = window.requestAnimationFrame(this.onFrame_);
    }
  };
  X.Game.prototype.update = function (a) {
    for (; 1E-4 < a;) {
      var c = Math.min(a, X.Constants.MIN_PHYSICS_FPS);
      Y.onFrame(c);
      this.board.update(c);
      this.boxWorld.Step(c, 10);
      for (var q = 0, n; n = this.spheres[q]; q++) n.update(c), n.dead && this.spheres.splice(q--, 1);
      a -= c;
    }
  };
  X.Game.prototype.bumpLevel_ = function () {
    this.level++;
    var a = Math.floor(this.level / X.Constants.LEVELS.length),
      c = X.Constants.LEVELS[this.level % X.Constants.LEVELS.length];
    0 < this.level && window.santaApp.fire("sound-trigger", "gb_level_up");
    var q = X.Constants.TIME_PER_LEVEL;
    q -= Math.min(20, a * X.Constants.LESS_TIME_PER_CYCLE);
    this.scoreboard.setLevel(this.level);
    this.scoreboard.addTime(q);
    this.board.switchToLevel(c);
    this.remainingBalls = this.availableBalls = c.balls.length;
    this.ballsAvailable.css("transform", "translateZ(0) scaleX(0)");
    this.ballsRemaining.css("transform", "translateZ(0) scaleX(" + this.remainingBalls / 10 + ")");
    Y.after(1, function () {
      c.balls.forEach(function (a) {
        a = X.Sphere.pop(this, 600 + a.x);
        this.spawner.spawnSphere(a);
        this.spheres.push(a);
      }, this);
    }.bind(this));
  };
  X.Game.prototype.hitTarget = function (a) {
    this.remainingBalls--;
    this.ballsAvailable.css("transform", "translateZ(0) scaleX(" + (this.availableBalls - this.remainingBalls) / 10 + ")");
    this.scoreboard.addScore(50 * Math.max(1, this.level + 1 - a.respawns));
    0 === this.remainingBalls && (this.level === Z.LEVELS.length - 1 ? this.gameover() : this.levelUp.show(this.level + 2, this.bumpLevel_));
  };
  X.Game.prototype.start = function () {
    this.restart();
    this.tutorial.start();
    window.santaApp.fire("sound-trigger", "gb_game_start");
  };
  X.Game.prototype.restart = function () {
    this.spheres.forEach(function (a) {
      a.remove();
    });
    this.spheres = [];
    this.level = (+(location.search.match(/[?&]level=(\d+)/) || [])[1] || 1) - 2;
    this.paused = !1;
    Y.reset();
    this.spawner.reset();
    this.board.reset();
    this.scoreboard.reset();
    this.bumpLevel_();
    window.santaApp.fire("sound-ambient", "music_start_ingame");
    window.santaApp.fire("sound-trigger", "gb_game_start");
    window.santaApp.fire("analytics-track-game-start", {
      gameid: "gumball"
    });
    this.unfreezeGame();
  };
  X.Game.prototype.freezeGame = function () {
    this.isPlaying = !1;
    this.elem.addClass("frozen");
  };
  X.Game.prototype.unfreezeGame = function () {
    this.isPlaying || (this.elem.removeClass("frozen").focus(), this.isPlaying = !0, this.lastFrame = +new Date() / 1E3, this.requestId = window.requestAnimationFrame(this.onFrame_));
  };
  X.Game.prototype.gameover = function () {
    this.freezeGame();
    this.gameoverView.show();
    window.santaApp.fire("sound-trigger", "gb_game_over");
    window.santaApp.fire("sound-trigger", "music_ingame_gameover");
    window.santaApp.fire("analytics-track-game-over", {
      gameid: "gumball",
      score: this.scoreboard.score,
      level: this.level,
      timePlayed: new Date() - this.gameStartTime
    });
  };
  X.Game.prototype.pause = function () {
    this.paused = !0;
    this.freezeGame();
  };
  X.Game.prototype.resume = function () {
    this.paused = !1;
    this.unfreezeGame();
  };
  X.Game.prototype.setScale = function (a, c, q) {
    this.scale = a;
    this.viewElem.css({
      transform: "scale(" + a + ")",
      width: c / a + "px",
      height: q / a + "px"
    });
  };
  X.Game.prototype.watchSceneSize_ = function () {
    function a() {
      var a = window.innerWidth,
        n = window.innerHeight - window.santaApp.headerSize,
        p = 900 > a ? a / 900 : 1;
      p = 640 > n ? Math.min(n / 640, p) : p;
      c.setScale(p, a, n);
    }
    var c = this;
    a();
    $(window).on("resize.gumball", a);
  };
  X.Game.prototype.dispose = function () {
    this.isPlaying && window.santaApp.fire("analytics-track-game-quit", {
      gameid: "gumball",
      timePlayed: new Date() - this.gameStartTime,
      level: this.level
    });
    this.freezeGame();
    window.cancelAnimationFrame(this.requestId);
    $(window).off(".gumball");
    $(document).off(".gumball");
    this.levelUp.dispose();
    this.tutorial.dispose();
    X.shared.pools.empty();
  };
  _globalExport = X.Game;
}).call(self);
var Game = _globalExport;
sceneApi.preload.sounds('gb_load_sounds', 40);
sceneApi.preload.images('img/board.svg', 'img/bowl.svg', 'img/cane-shadow.svg', 'img/cane.svg', 'img/logo.svg', 'img/panel.svg', 'img/sphere.svg', 'img/toppipe-hand.svg', 'img/toppipe.svg', 'img/wheelbig.svg', 'img/wheelsmall.svg', 'img/windows.png');
sceneApi.config({
  sound: [],
  orientation: 'landscape',
  pause: true,
  tilt: true
});
const game = new Game(document.getElementById('module-gumball'));
sceneApi.addEventListener('pause', ev => game.pause());
sceneApi.addEventListener('resume', ev => game.resume());
sceneApi.addEventListener('restart', ev => game.restart());
sceneApi.ready(async () => {
  game.start();
});