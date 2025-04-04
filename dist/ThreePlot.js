var Jn = Object.defineProperty;
var Nn = (c, i, t) => i in c ? Jn(c, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[i] = t;
var u = (c, i, t) => (Nn(c, typeof i != "symbol" ? i + "" : i, t), t);
import { Vector3 as q, Group as Dt, MeshBasicMaterial as st, AlwaysStencilFunc as ye, FrontSide as ti, KeepStencilOp as ft, IncrementWrapStencilOp as we, BackSide as ei, DecrementWrapStencilOp as ve, NotEqualStencilFunc as ni, ReplaceStencilOp as ii, DoubleSide as si, LineBasicMaterial as oi, Vector2 as ot, Mesh as tt, Line as Me, BufferGeometry as rt, SphereGeometry as ri, ExtrudeGeometry as ai, Shape as ci } from "three";
class hi {
  constructor() {
    u(this, "listeners");
    this.listeners = /* @__PURE__ */ new Map([
      ["drawStart", /* @__PURE__ */ new Set()],
      ["drawUpdate", /* @__PURE__ */ new Set()],
      ["drawEnd", /* @__PURE__ */ new Set()],
      ["editStart", /* @__PURE__ */ new Set()],
      ["editEnd", /* @__PURE__ */ new Set()]
    ]);
  }
  on(i, t) {
    if (!this.listeners.has(i)) {
      console.warn("Event binding must be one of 'drawStart', 'drawUpdate', or 'drawEnd'.");
      return;
    }
    this.listeners.get(i).add(t);
  }
  off(i, t) {
    this.listeners.has(i) && this.listeners.get(i).delete(t);
  }
  dispatchEvent(i, t) {
    this.listeners.has(i) && this.listeners.get(i).forEach((e) => {
      e(t);
    });
  }
}
var pt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function li(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Pt = { exports: {} };
Pt.exports;
(function(c, i) {
  var t = 200, e = "__lodash_hash_undefined__", n = 9007199254740991, o = "[object Arguments]", r = "[object Array]", a = "[object Boolean]", h = "[object Date]", l = "[object Error]", f = "[object Function]", p = "[object GeneratorFunction]", m = "[object Map]", v = "[object Number]", P = "[object Object]", M = "[object Promise]", T = "[object RegExp]", b = "[object Set]", S = "[object String]", E = "[object Symbol]", D = "[object WeakMap]", W = "[object ArrayBuffer]", _ = "[object DataView]", Y = "[object Float32Array]", Ot = "[object Float64Array]", jt = "[object Int8Array]", Bt = "[object Int16Array]", $t = "[object Int32Array]", qt = "[object Uint8Array]", Xt = "[object Uint8ClampedArray]", Yt = "[object Uint16Array]", zt = "[object Uint32Array]", Fe = /[\\^$.*+?()[\]{}|]/g, Ee = /\w*$/, _e = /^\[object .+?Constructor\]$/, ke = /^(?:0|[1-9]\d*)$/, A = {};
  A[o] = A[r] = A[W] = A[_] = A[a] = A[h] = A[Y] = A[Ot] = A[jt] = A[Bt] = A[$t] = A[m] = A[v] = A[P] = A[T] = A[b] = A[S] = A[E] = A[qt] = A[Xt] = A[Yt] = A[zt] = !0, A[l] = A[f] = A[D] = !1;
  var De = typeof pt == "object" && pt && pt.Object === Object && pt, Ie = typeof self == "object" && self && self.Object === Object && self, j = De || Ie || Function("return this")(), Vt = i && !i.nodeType && i, Ut = Vt && !0 && c && !c.nodeType && c, Ge = Ut && Ut.exports === Vt;
  function xe(s, d) {
    return s.set(d[0], d[1]), s;
  }
  function Ce(s, d) {
    return s.add(d), s;
  }
  function We(s, d) {
    for (var g = -1, y = s ? s.length : 0; ++g < y && d(s[g], g, s) !== !1; )
      ;
    return s;
  }
  function He(s, d) {
    for (var g = -1, y = d.length, k = s.length; ++g < y; )
      s[k + g] = d[g];
    return s;
  }
  function Zt(s, d, g, y) {
    var k = -1, I = s ? s.length : 0;
    for (y && I && (g = s[++k]); ++k < I; )
      g = d(g, s[k], k, s);
    return g;
  }
  function Re(s, d) {
    for (var g = -1, y = Array(s); ++g < s; )
      y[g] = d(g);
    return y;
  }
  function Oe(s, d) {
    return s == null ? void 0 : s[d];
  }
  function Kt(s) {
    var d = !1;
    if (s != null && typeof s.toString != "function")
      try {
        d = !!(s + "");
      } catch {
      }
    return d;
  }
  function Qt(s) {
    var d = -1, g = Array(s.size);
    return s.forEach(function(y, k) {
      g[++d] = [k, y];
    }), g;
  }
  function yt(s, d) {
    return function(g) {
      return s(d(g));
    };
  }
  function Jt(s) {
    var d = -1, g = Array(s.size);
    return s.forEach(function(y) {
      g[++d] = y;
    }), g;
  }
  var je = Array.prototype, Be = Function.prototype, ct = Object.prototype, wt = j["__core-js_shared__"], Nt = function() {
    var s = /[^.]+$/.exec(wt && wt.keys && wt.keys.IE_PROTO || "");
    return s ? "Symbol(src)_1." + s : "";
  }(), te = Be.toString, $ = ct.hasOwnProperty, ht = ct.toString, $e = RegExp(
    "^" + te.call($).replace(Fe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ee = Ge ? j.Buffer : void 0, ne = j.Symbol, ie = j.Uint8Array, qe = yt(Object.getPrototypeOf, Object), Xe = Object.create, Ye = ct.propertyIsEnumerable, ze = je.splice, se = Object.getOwnPropertySymbols, Ve = ee ? ee.isBuffer : void 0, Ue = yt(Object.keys, Object), vt = J(j, "DataView"), nt = J(j, "Map"), Mt = J(j, "Promise"), bt = J(j, "Set"), Tt = J(j, "WeakMap"), it = J(Object, "create"), Ze = U(vt), Ke = U(nt), Qe = U(Mt), Je = U(bt), Ne = U(Tt), oe = ne ? ne.prototype : void 0, re = oe ? oe.valueOf : void 0;
  function z(s) {
    var d = -1, g = s ? s.length : 0;
    for (this.clear(); ++d < g; ) {
      var y = s[d];
      this.set(y[0], y[1]);
    }
  }
  function tn() {
    this.__data__ = it ? it(null) : {};
  }
  function en(s) {
    return this.has(s) && delete this.__data__[s];
  }
  function nn(s) {
    var d = this.__data__;
    if (it) {
      var g = d[s];
      return g === e ? void 0 : g;
    }
    return $.call(d, s) ? d[s] : void 0;
  }
  function sn(s) {
    var d = this.__data__;
    return it ? d[s] !== void 0 : $.call(d, s);
  }
  function on(s, d) {
    var g = this.__data__;
    return g[s] = it && d === void 0 ? e : d, this;
  }
  z.prototype.clear = tn, z.prototype.delete = en, z.prototype.get = nn, z.prototype.has = sn, z.prototype.set = on;
  function B(s) {
    var d = -1, g = s ? s.length : 0;
    for (this.clear(); ++d < g; ) {
      var y = s[d];
      this.set(y[0], y[1]);
    }
  }
  function rn() {
    this.__data__ = [];
  }
  function an(s) {
    var d = this.__data__, g = lt(d, s);
    if (g < 0)
      return !1;
    var y = d.length - 1;
    return g == y ? d.pop() : ze.call(d, g, 1), !0;
  }
  function cn(s) {
    var d = this.__data__, g = lt(d, s);
    return g < 0 ? void 0 : d[g][1];
  }
  function hn(s) {
    return lt(this.__data__, s) > -1;
  }
  function ln(s, d) {
    var g = this.__data__, y = lt(g, s);
    return y < 0 ? g.push([s, d]) : g[y][1] = d, this;
  }
  B.prototype.clear = rn, B.prototype.delete = an, B.prototype.get = cn, B.prototype.has = hn, B.prototype.set = ln;
  function K(s) {
    var d = -1, g = s ? s.length : 0;
    for (this.clear(); ++d < g; ) {
      var y = s[d];
      this.set(y[0], y[1]);
    }
  }
  function dn() {
    this.__data__ = {
      hash: new z(),
      map: new (nt || B)(),
      string: new z()
    };
  }
  function un(s) {
    return dt(this, s).delete(s);
  }
  function gn(s) {
    return dt(this, s).get(s);
  }
  function fn(s) {
    return dt(this, s).has(s);
  }
  function pn(s, d) {
    return dt(this, s).set(s, d), this;
  }
  K.prototype.clear = dn, K.prototype.delete = un, K.prototype.get = gn, K.prototype.has = fn, K.prototype.set = pn;
  function Q(s) {
    this.__data__ = new B(s);
  }
  function Pn() {
    this.__data__ = new B();
  }
  function mn(s) {
    return this.__data__.delete(s);
  }
  function yn(s) {
    return this.__data__.get(s);
  }
  function wn(s) {
    return this.__data__.has(s);
  }
  function vn(s, d) {
    var g = this.__data__;
    if (g instanceof B) {
      var y = g.__data__;
      if (!nt || y.length < t - 1)
        return y.push([s, d]), this;
      g = this.__data__ = new K(y);
    }
    return g.set(s, d), this;
  }
  Q.prototype.clear = Pn, Q.prototype.delete = mn, Q.prototype.get = yn, Q.prototype.has = wn, Q.prototype.set = vn;
  function Mn(s, d) {
    var g = At(s) || Yn(s) ? Re(s.length, String) : [], y = g.length, k = !!y;
    for (var I in s)
      (d || $.call(s, I)) && !(k && (I == "length" || Bn(I, y))) && g.push(I);
    return g;
  }
  function ae(s, d, g) {
    var y = s[d];
    (!($.call(s, d) && de(y, g)) || g === void 0 && !(d in s)) && (s[d] = g);
  }
  function lt(s, d) {
    for (var g = s.length; g--; )
      if (de(s[g][0], d))
        return g;
    return -1;
  }
  function bn(s, d) {
    return s && ce(d, Ft(d), s);
  }
  function St(s, d, g, y, k, I, C) {
    var x;
    if (y && (x = I ? y(s, k, I, C) : y(s)), x !== void 0)
      return x;
    if (!ut(s))
      return s;
    var fe = At(s);
    if (fe) {
      if (x = Rn(s), !d)
        return Cn(s, x);
    } else {
      var N = V(s), pe = N == f || N == p;
      if (Vn(s))
        return En(s, d);
      if (N == P || N == o || pe && !I) {
        if (Kt(s))
          return I ? s : {};
        if (x = On(pe ? {} : s), !d)
          return Wn(s, bn(x, s));
      } else {
        if (!A[N])
          return I ? s : {};
        x = jn(s, N, St, d);
      }
    }
    C || (C = new Q());
    var Pe = C.get(s);
    if (Pe)
      return Pe;
    if (C.set(s, x), !fe)
      var me = g ? Hn(s) : Ft(s);
    return We(me || s, function(Et, gt) {
      me && (gt = Et, Et = s[gt]), ae(x, gt, St(Et, d, g, y, gt, s, C));
    }), x;
  }
  function Tn(s) {
    return ut(s) ? Xe(s) : {};
  }
  function Sn(s, d, g) {
    var y = d(s);
    return At(s) ? y : He(y, g(s));
  }
  function Ln(s) {
    return ht.call(s);
  }
  function An(s) {
    if (!ut(s) || qn(s))
      return !1;
    var d = ge(s) || Kt(s) ? $e : _e;
    return d.test(U(s));
  }
  function Fn(s) {
    if (!le(s))
      return Ue(s);
    var d = [];
    for (var g in Object(s))
      $.call(s, g) && g != "constructor" && d.push(g);
    return d;
  }
  function En(s, d) {
    if (d)
      return s.slice();
    var g = new s.constructor(s.length);
    return s.copy(g), g;
  }
  function Lt(s) {
    var d = new s.constructor(s.byteLength);
    return new ie(d).set(new ie(s)), d;
  }
  function _n(s, d) {
    var g = d ? Lt(s.buffer) : s.buffer;
    return new s.constructor(g, s.byteOffset, s.byteLength);
  }
  function kn(s, d, g) {
    var y = d ? g(Qt(s), !0) : Qt(s);
    return Zt(y, xe, new s.constructor());
  }
  function Dn(s) {
    var d = new s.constructor(s.source, Ee.exec(s));
    return d.lastIndex = s.lastIndex, d;
  }
  function In(s, d, g) {
    var y = d ? g(Jt(s), !0) : Jt(s);
    return Zt(y, Ce, new s.constructor());
  }
  function Gn(s) {
    return re ? Object(re.call(s)) : {};
  }
  function xn(s, d) {
    var g = d ? Lt(s.buffer) : s.buffer;
    return new s.constructor(g, s.byteOffset, s.length);
  }
  function Cn(s, d) {
    var g = -1, y = s.length;
    for (d || (d = Array(y)); ++g < y; )
      d[g] = s[g];
    return d;
  }
  function ce(s, d, g, y) {
    g || (g = {});
    for (var k = -1, I = d.length; ++k < I; ) {
      var C = d[k], x = y ? y(g[C], s[C], C, g, s) : void 0;
      ae(g, C, x === void 0 ? s[C] : x);
    }
    return g;
  }
  function Wn(s, d) {
    return ce(s, he(s), d);
  }
  function Hn(s) {
    return Sn(s, Ft, he);
  }
  function dt(s, d) {
    var g = s.__data__;
    return $n(d) ? g[typeof d == "string" ? "string" : "hash"] : g.map;
  }
  function J(s, d) {
    var g = Oe(s, d);
    return An(g) ? g : void 0;
  }
  var he = se ? yt(se, Object) : Kn, V = Ln;
  (vt && V(new vt(new ArrayBuffer(1))) != _ || nt && V(new nt()) != m || Mt && V(Mt.resolve()) != M || bt && V(new bt()) != b || Tt && V(new Tt()) != D) && (V = function(s) {
    var d = ht.call(s), g = d == P ? s.constructor : void 0, y = g ? U(g) : void 0;
    if (y)
      switch (y) {
        case Ze:
          return _;
        case Ke:
          return m;
        case Qe:
          return M;
        case Je:
          return b;
        case Ne:
          return D;
      }
    return d;
  });
  function Rn(s) {
    var d = s.length, g = s.constructor(d);
    return d && typeof s[0] == "string" && $.call(s, "index") && (g.index = s.index, g.input = s.input), g;
  }
  function On(s) {
    return typeof s.constructor == "function" && !le(s) ? Tn(qe(s)) : {};
  }
  function jn(s, d, g, y) {
    var k = s.constructor;
    switch (d) {
      case W:
        return Lt(s);
      case a:
      case h:
        return new k(+s);
      case _:
        return _n(s, y);
      case Y:
      case Ot:
      case jt:
      case Bt:
      case $t:
      case qt:
      case Xt:
      case Yt:
      case zt:
        return xn(s, y);
      case m:
        return kn(s, y, g);
      case v:
      case S:
        return new k(s);
      case T:
        return Dn(s);
      case b:
        return In(s, y, g);
      case E:
        return Gn(s);
    }
  }
  function Bn(s, d) {
    return d = d ?? n, !!d && (typeof s == "number" || ke.test(s)) && s > -1 && s % 1 == 0 && s < d;
  }
  function $n(s) {
    var d = typeof s;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? s !== "__proto__" : s === null;
  }
  function qn(s) {
    return !!Nt && Nt in s;
  }
  function le(s) {
    var d = s && s.constructor, g = typeof d == "function" && d.prototype || ct;
    return s === g;
  }
  function U(s) {
    if (s != null) {
      try {
        return te.call(s);
      } catch {
      }
      try {
        return s + "";
      } catch {
      }
    }
    return "";
  }
  function Xn(s) {
    return St(s, !0, !0);
  }
  function de(s, d) {
    return s === d || s !== s && d !== d;
  }
  function Yn(s) {
    return zn(s) && $.call(s, "callee") && (!Ye.call(s, "callee") || ht.call(s) == o);
  }
  var At = Array.isArray;
  function ue(s) {
    return s != null && Un(s.length) && !ge(s);
  }
  function zn(s) {
    return Zn(s) && ue(s);
  }
  var Vn = Ve || Qn;
  function ge(s) {
    var d = ut(s) ? ht.call(s) : "";
    return d == f || d == p;
  }
  function Un(s) {
    return typeof s == "number" && s > -1 && s % 1 == 0 && s <= n;
  }
  function ut(s) {
    var d = typeof s;
    return !!s && (d == "object" || d == "function");
  }
  function Zn(s) {
    return !!s && typeof s == "object";
  }
  function Ft(s) {
    return ue(s) ? Mn(s) : Fn(s);
  }
  function Kn() {
    return [];
  }
  function Qn() {
    return !1;
  }
  c.exports = Xn;
})(Pt, Pt.exports);
var di = Pt.exports;
const ui = /* @__PURE__ */ li(di), be = 100, xt = 1e-4, F = (c, i) => Math.sqrt((c[0] - i[0]) ** 2 + (c[1] - i[1]) ** 2), mt = (c) => {
  let i = 0;
  return c && Array.isArray(c) && c.length > 0 && c.forEach((t, e) => {
    e < c.length - 1 && (i += F(t, c[e + 1]));
  }), i;
}, R = (c) => mt(c) ** 0.99, O = (c, i) => [(c[0] + i[0]) / 2, (c[1] + i[1]) / 2], gi = (c, i, t) => {
  const e = [(c[0] + i[0]) / 2, (c[1] + i[1]) / 2], n = [e[0] - c[1] + i[1], e[1] + c[0] - i[0]], o = [(c[0] + t[0]) / 2, (c[1] + t[1]) / 2], r = [o[0] - c[1] + t[1], o[1] + c[0] - t[0]];
  return fi(e, n, o, r);
}, fi = (c, i, t, e) => {
  if (c[1] === i[1]) {
    const l = (e[0] - t[0]) / (e[1] - t[1]) * (c[1] - t[1]) + t[0], f = c[1];
    return [l, f];
  }
  if (t[1] === e[1]) {
    const l = (i[0] - c[0]) / (i[1] - c[1]) * (t[1] - c[1]) + c[0], f = t[1];
    return [l, f];
  }
  const n = (i[0] - c[0]) / (i[1] - c[1]), o = (e[0] - t[0]) / (e[1] - t[1]), r = (n * c[1] - c[0] - o * t[1] + t[0]) / (n - o);
  return [n * r - n * c[1] + c[0], r];
}, Z = (c, i) => {
  let t;
  const e = Math.asin(Math.abs(i[1] - c[1]) / F(c, i));
  return i[1] >= c[1] && i[0] >= c[0] ? t = e + Math.PI : i[1] >= c[1] && i[0] < c[0] ? t = Math.PI * 2 - e : i[1] < c[1] && i[0] < c[0] ? t = e : i[1] < c[1] && i[0] >= c[0] && (t = Math.PI - e), t;
}, It = (c, i, t) => {
  const e = Z(i, c) - Z(i, t);
  return e < 0 ? e + Math.PI * 2 : e;
}, at = (c, i, t) => (t[1] - c[1]) * (i[0] - c[0]) > (i[1] - c[1]) * (t[0] - c[0]), pi = (c, i, t, e, n) => {
  c = Math.max(Math.min(c, 1), 0);
  const [o, r] = [1 - c, c * c], a = r * c, h = o * o, l = h * o, f = l * i[0] + 3 * h * c * t[0] + 3 * o * r * e[0] + a * n[0], p = l * i[1] + 3 * h * c * t[1] + 3 * o * r * e[1] + a * n[1];
  return [f, p];
}, w = (c, i, t, e, n) => {
  const o = Z(c, i), r = n ? o + t : o - t, a = e * Math.cos(r), h = e * Math.sin(r);
  return [i[0] + a, i[1] + h];
}, Se = (c, i, t, e) => {
  let [n, o, r, a] = [null, null, [], e - t];
  a = a < 0 ? a + Math.PI * 2 : a;
  for (let h = 0; h <= 100; h++) {
    const l = t + a * h / 100;
    n = c[0] + i * Math.cos(l), o = c[1] + i * Math.sin(l), r.push([n, o]);
  }
  return r;
}, Ct = (c, i, t, e) => {
  const n = Wt(i, t, e);
  let [o, r, a, h, l] = [null, null, null, null, null];
  const f = Math.sqrt(n[0] * n[0] + n[1] * n[1]), p = n[0] / f, m = n[1] / f, v = F(i, t), P = F(t, e);
  return f > xt ? at(i, t, e) ? (a = c * v, h = t[0] - a * m, l = t[1] + a * p, o = [h, l], a = c * P, h = t[0] + a * m, l = t[1] - a * p, r = [h, l]) : (a = c * v, h = t[0] + a * m, l = t[1] - a * p, o = [h, l], a = c * P, h = t[0] - a * m, l = t[1] + a * p, r = [h, l]) : (h = t[0] + c * (i[0] - t[0]), l = t[1] + c * (i[1] - t[1]), o = [h, l], h = t[0] + c * (e[0] - t[0]), l = t[1] + c * (e[1] - t[1]), r = [h, l]), [o, r];
}, Wt = (c, i, t) => {
  let e = c[0] - i[0], n = c[1] - i[1];
  const o = Math.sqrt(e * e + n * n);
  e /= o, n /= o;
  let r = t[0] - i[0], a = t[1] - i[1];
  const h = Math.sqrt(r * r + a * a);
  r /= h, a /= h;
  const l = e + r, f = n + a;
  return [l, f];
}, Pi = (c, i) => {
  let [t, e, n, o, r] = [c[0], c[1], c[2], null, null];
  const h = Ct(0, t, e, n)[0], l = Wt(t, e, n);
  if (Math.sqrt(l[0] * l[0] + l[1] * l[1]) > xt) {
    const p = O(t, e), m = t[0] - p[0], v = t[1] - p[1], M = 2 / F(t, e), T = -M * v, b = M * m, S = T * T - b * b, E = 2 * T * b, D = b * b - T * T, W = h[0] - p[0], _ = h[1] - p[1];
    o = p[0] + S * W + E * _, r = p[1] + E * W + D * _;
  } else
    o = t[0] + i * (e[0] - t[0]), r = t[1] + i * (e[1] - t[1]);
  return [o, r];
}, mi = (c, i) => {
  const t = c.length, e = c[t - 3], n = c[t - 2], o = c[t - 1], a = Ct(0, e, n, o)[1], h = Wt(e, n, o), l = Math.sqrt(h[0] * h[0] + h[1] * h[1]);
  let [f, p] = [null, null];
  if (l > xt) {
    const m = O(n, o), v = o[0] - m[0], P = o[1] - m[1], T = 2 / F(n, o), b = -T * P, S = T * v, E = b * b - S * S, D = 2 * b * S, W = S * S - b * b, _ = a[0] - m[0], Y = a[1] - m[1];
    f = m[0] + E * _ + D * Y, p = m[1] + D * _ + W * Y;
  } else
    f = o[0] + i * (n[0] - o[0]), p = o[1] + i * (n[1] - o[1]);
  return [f, p];
}, Ht = (c, i) => {
  const t = Pi(i, c);
  let [e, n, o, r, a] = [null, null, null, [t], []];
  for (let l = 0; l < i.length - 2; l++) {
    [e, n, o] = [i[l], i[l + 1], i[l + 2]];
    const f = Ct(c, e, n, o);
    r = r.concat(f);
  }
  const h = mi(i, c);
  h && r.push(h);
  for (let l = 0; l < i.length - 1; l++) {
    e = i[l], n = i[l + 1], a.push(e);
    for (let f = 0; f < be; f++) {
      const p = pi(f / be, e, r[l * 2], r[l * 2 + 1], n);
      a.push(p);
    }
    a.push(n);
  }
  return a;
}, _t = function(c) {
  if (c.length <= 2)
    return c;
  const i = [], t = c.length - 1;
  for (let e = 0; e <= 1; e += 0.01) {
    let [n, o] = [0, 0];
    for (let r = 0; r <= t; r++) {
      const a = yi(t, r), h = e ** r, l = (1 - e) ** (t - r);
      n += a * h * l * c[r][0], o += a * h * l * c[r][1];
    }
    i.push([n, o]);
  }
  return i.push(c[t]), i;
}, kt = (c) => {
  let i = 1;
  switch (c) {
    case c <= 1:
      i = 1;
      break;
    case c === 2:
      i = 2;
      break;
    case c === 3:
      i = 6;
      break;
    case c === 24:
      i = 24;
      break;
    case c === 5:
      i = 120;
      break;
    default:
      for (let t = 1; t <= c; t++)
        i *= t;
      break;
  }
  return i;
}, yi = (c, i) => kt(c) / (kt(i) * kt(c - i)), X = (c) => {
  if (c.length <= 2)
    return c;
  const [i, t] = [2, []], e = c.length - i - 1;
  t.push(c[0]);
  for (let n = 0; n <= e; n++)
    for (let o = 0; o <= 1; o += 0.05) {
      let [r, a] = [0, 0];
      for (let h = 0; h <= i; h++) {
        const l = wi(h, o);
        r += l * c[n + h][0], a += l * c[n + h][1];
      }
      t.push([r, a]);
    }
  return t.push(c[c.length - 1]), t;
}, wi = (c, i) => {
  let t = 0;
  return c === 0 ? t = (i - 1) ** 2 / 2 : c === 1 ? t = (-2 * i ** 2 + 2 * i + 1) / 2 : c === 2 && (t = i ** 2 / 2), t;
}, et = class et {
  static datumsToVector(i, t) {
    const e = Math.PI / 180, n = t * e, o = i * e;
    var r = Math.cos(o);
    return new q(-Math.cos(n + Math.PI) * r, Math.sin(o), Math.sin(n + Math.PI) * r);
  }
  static vectorScale(i, t = 10) {
    let e = i.clone().normalize();
    return e.multiplyScalar(t), i.add(e), i;
  }
  static fromDegrees(i, t, e = 10) {
    let n = et.datumsToVector(i, t);
    return n.multiplyScalar(et.EARTH_RADIUS_A + e), n;
  }
  static fromDegreesArray(i) {
    let t = [];
    for (let e = 0; e < i.length; e += 2) {
      let n = et.fromDegrees(i[e + 1], i[e]);
      t.push(n);
    }
    return t;
  }
  static vectorToDatums(i) {
    const t = 180 / Math.PI, e = Math.atan2(i.y, Math.sqrt(Math.pow(i.x, 2) + Math.pow(-i.z, 2))) * t, n = Math.atan2(-i.z, i.x) * t;
    return { latitude: e, longitude: n };
  }
  /**
   * 弧度转角度
   * @param {*} rad 
   * @returns 
   */
  static radToDeg(i) {
    return i * (180 / Math.PI);
  }
  /**
   * 角度转弧度
   * @param {*} deg 
   * @returns 
   */
  static degToRad(i) {
    return i * (Math.PI / 180);
  }
};
u(et, "EARTH_RADIUS_A", 6378137);
let L = et;
class H {
  constructor(i) {
    u(this, "_eventListeners", {});
    // events 事件
    u(this, "_eventListenerNames", [
      // TODO add keyboard events
      "mouse-down",
      // alias of 'mouse-down-left'
      "mouse-down-left",
      "mouse-down-middle",
      "mouse-down-right",
      "mouse-move",
      "mouse-up",
      "mouse-click",
      // alias of 'mouse-click-left'
      "mouse-click-left",
      "mouse-click-middle",
      "mouse-click-right",
      "mouse-drag-end",
      "mouse-double-click",
      // alias of 'mouse-double-click-left'
      "mouse-double-click-left",
      "pointer-down",
      // alias of 'pointer-down-left'
      "pointer-down-left",
      // 按下未抬起
      "pointer-down-middle",
      "pointer-down-right",
      "pointer-move",
      "pointer-up",
      "pointer-click",
      // alias of 'pointer-click-left' //PointClick是鼠标完成一次点击时调用（按下抬起）
      "pointer-click-left",
      "pointer-click-middle",
      "pointer-click-right",
      "pointer-drag-end",
      "touch-start",
      "touch-move",
      "touch-end",
      "touch-click",
      "touch-drag-end",
      "xr-touchpad-touch-start",
      "xr-touchpad-touch-end",
      "xr-touchpad-press-start",
      "xr-touchpad-press-end",
      "xr-trigger-press-start",
      "xr-trigger-press-end"
    ]);
    this.canvas = i, this._initCursorListeners(this.canvas, "mouse"), this._initCursorListeners(this.canvas, "pointer"), this._initTouchListeners(this.canvas);
  }
  // deprecated; for compat only
  setEventListener(i, t) {
    this.on(i, t);
  }
  on(i, t) {
    if (this._eventListenerNames.includes(i)) {
      i === "mouse-down" && (i = "mouse-down-left"), i === "mouse-click" && (i = "mouse-click-left"), i === "pointer-down" && (i = "pointer-down-left"), i === "pointer-click" && (i = "pointer-click-left"), i === "mouse-double-click" && (i = "mouse-double-click-left");
      const e = i.startsWith("xr-") ? this._vrcHelper._eventListeners : this._eventListeners;
      e[i] = t;
    } else
      console.error("@@ on(): unsupported eventName:", i), i.startsWith("vr-") && console.info(`${i} is deprecated; use 'xr-' instead`);
  }
  off(i) {
    if (this._eventListenerNames.includes(i)) {
      i === "mouse-down" && (i = "mouse-down-left"), i === "mouse-click" && (i = "mouse-click-left"), i === "pointer-down" && (i = "pointer-down-left"), i === "pointer-click" && (i = "pointer-click-left"), i === "mouse-double-click" && (i = "mouse-double-click-left");
      const t = i.startsWith("xr-") ? this._vrcHelper._eventListeners : this._eventListeners;
      delete t[i];
    }
  }
  _callIfDefined(i, t) {
    const e = this._eventListeners[i];
    e && e(...t);
  }
  _initCursorListeners(i, t) {
    let e = !1;
    i.addEventListener(`${t}down`, (n) => {
      e = !1;
      const o = H.getInputCoords(n, i);
      n.button === 0 ? this._callIfDefined(`${t}-down-left`, o) : n.button === 1 ? this._callIfDefined(`${t}-down-middle`, o) : n.button === 2 && this._callIfDefined(`${t}-down-right`, o);
    }, !1), i.addEventListener(`${t}move`, (n) => {
      e = !0;
      const o = H.getInputCoords(n, i);
      this._callIfDefined(`${t}-move`, o);
    }, !1), i.addEventListener(`${t}up`, (n) => {
      const o = H.getInputCoords(n, i);
      this._callIfDefined(`${t}-up`, o), e ? this._callIfDefined(`${t}-drag-end`, o) : (console.log(`${t}up: click`), n.button === 0 ? this._callIfDefined(`${t}-click-left`, o) : n.button === 1 ? this._callIfDefined(`${t}-click-middle`, o) : n.button === 2 && this._callIfDefined(`${t}-click-right`, o));
    }, !1), i.addEventListener("dblclick", (n) => {
      const o = H.getInputCoords(n, i);
      this._callIfDefined("mouse-double-click-left", o);
    }, !1);
  }
  _initTouchListeners(i) {
    let t = !1;
    i.addEventListener("touchstart", (e) => {
      t = !1;
      const n = H.getInputCoords(e, i);
      this._callIfDefined("touch-start", n);
    }, !1), i.addEventListener("touchmove", (e) => {
      t = !0;
      const n = H.getInputCoords(e, i);
      this._callIfDefined("touch-move", n);
    }, !1), i.addEventListener("touchend", (e) => {
      const n = H.getInputCoords(e, i);
      this._callIfDefined("touch-end", n), t ? (console.log("touchup: drag"), this._callIfDefined("touch-drag-end", n)) : (console.log("touchup: click"), this._callIfDefined("touch-click", n));
    }, !1);
  }
  // highlevel utils for binding input device events
  setupMouseInterface(i) {
    this._setupInputInterface("mouse", i);
  }
  setupPointerInterface(i) {
    this._setupInputInterface("pointer", i);
  }
  setupTouchInterface(i) {
    this._setupInputInterface("touch", i);
  }
  _setupInputInterface(i, t) {
    const { onClick: e, onDrag: n, onDragStart: o, onDragEnd: r } = t;
    let a = !1;
    const h = `${i}-${i === "touch" ? "start" : "down"}`;
    this.on(h, (l, f) => {
      a = !0, o && o(l, f);
    }), this.on(`${i}-move`, (l, f) => {
      n && a && n(l, f);
    }), this.on(`${i}-drag-end`, (l, f) => {
      a = !1, r && r(l, f);
    }), this.on(`${i}-click`, (l, f) => {
      a = !1, e && e(l, f), r && r(l, f);
    });
  }
  static getInputCoords(i, t) {
    let e, n;
    i.type === "touchend" ? [e, n] = [i.changedTouches[0].clientX, i.changedTouches[0].clientY] : i.type === "touchstart" || i.type === "touchmove" ? [e, n] = [i.touches[0].clientX, i.touches[0].clientY] : [e, n] = [i.clientX, i.clientY];
    const o = t.getBoundingClientRect(), [r, a] = [e - o.left, n - o.top];
    return [r, a];
  }
}
var Gt = new Dt();
let vi = 2;
class G {
  constructor(i, t) {
    u(this, "viewer");
    // 这里的viewer是wegeo对象
    u(this, "eventHandler");
    u(this, "polygonEntity");
    u(this, "geometryPoints", []);
    u(this, "state", "drawing");
    u(this, "controlPoints", []);
    // 控制点
    u(this, "controlPointsEventHandler");
    u(this, "lineEntity");
    u(this, "type");
    u(this, "freehand");
    u(this, "style");
    u(this, "outlineEntity");
    u(this, "eventDispatcher");
    u(this, "dragEventHandler");
    u(this, "entityId");
    u(this, "points", []);
    u(this, "styleCache");
    u(this, "minPointsForShape", 0);
    u(this, "tempLineEntity");
    u(this, "color", 16746342);
    u(this, "ref");
    u(this, "extrudeSettings", { depth: 1e4 * 2, bevelEnabled: !1, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 });
    u(this, "minHeight", -65536);
    u(this, "maxHeight", 65536);
    this.viewer = i, this.type = this.getType(), this.ref = vi++ * 3, this.mergeStyle(t), this.cartesianToLnglat = this.cartesianToLnglat.bind(this), this.pixelToCartesian = this.pixelToCartesian.bind(this), this.eventDispatcher = new hi(), i.trackedEntity = void 0, this.onClick();
  }
  mergeStyle(i) {
    var t = new st();
    t.depthWrite = !1, t.depthTest = !0, t.colorWrite = !1, t.stencilWrite = !0, t.stencilFunc = ye, t.side = ti, t.stencilFail = ft, t.stencilZFail = ft, t.stencilZPass = we, t.stencilRef = this.ref;
    var e = new st();
    e.depthWrite = !1, e.depthTest = !0, e.colorWrite = !1, e.stencilWrite = !0, e.stencilFunc = ye, e.side = ei, e.stencilFail = ft, e.stencilZFail = ft, e.stencilZPass = ve, e.stencilRef = this.ref;
    var n = new st();
    n.depthWrite = !1, n.depthTest = !1, n.colorWrite = !0, n.stencilWrite = !0, n.color.set(this.color), n.stencilFunc = ni, n.stencilFail = ii, n.stencilZFail = we, n.stencilZPass = ve, n.stencilRef = this.ref, this.style = Object.assign(
      {
        PolygonStyle: new st({
          color: 255,
          side: si,
          transparent: !0,
          opacity: 0.8
        }),
        LineStyle: new oi({
          color: 16777215,
          linewidth: 2
        }),
        materials: [t, e, n]
      },
      i
    ), this.styleCache = ui(this.style);
  }
  /**
   * The base class provides a method to change the state, and different logic is implemented based on the state.
   *  The state is controlled by individual sub-components according to the actual situation.
   * @param state
   */
  setState(i) {
    this.state = i;
  }
  getState() {
    return this.state;
  }
  defined(i) {
    return i != null;
  }
  /**
   * Bind a global click event that responds differently based on the state. When in the drawing state,
   * a click will add points for geometric shapes. During editing, selecting a drawn shape puts it in an
   *  editable state. Clicking on empty space sets it to a static state.
   */
  onClick() {
    this.eventHandler = new H(this.viewer.baseMap.canvas), this.eventHandler.on("mouse-click", (i, t) => {
      let e = new ot(i, t), n = this.viewer.getModel(i, t)[0].object;
      const o = this.defined(n) && n instanceof tt && n.drawed;
      if (this.activeEntity = this.polygonEntity, this.type === "line" && (this.activeEntity = this.lineEntity), this.state === "drawing") {
        const r = this.pixelToCartesian(e), a = this.getPoints();
        if (!r || !this.freehand && a.length > 0 && !this.checkDistance(r, a[a.length - 1]))
          return;
        this.addPoint(r), this.getPoints().length === 1 && this.eventDispatcher.dispatchEvent("drawStart"), this.eventDispatcher.dispatchEvent("drawUpdate", r);
      } else if (this.state === "edit") {
        if (!o || this.activeEntity.id !== n.id) {
          this.setState("static"), this.removeControlPoints(), this.disableDrag(), this.eventDispatcher.dispatchEvent("editEnd", this.getPoints());
          return;
        }
      } else
        this.state === "static" && o && this.activeEntity.id === n.id && (this.entityId = this.activeEntity.id, this.setState("edit"), this.addControlPoints(), this.draggable(), this.eventDispatcher.dispatchEvent("editStart"));
    });
  }
  onMouseMove() {
    this.eventHandler.on("mouse-move", (i, t) => {
      let e = new ot(i, t);
      const n = this.getPoints(), o = this.pixelToCartesian(e);
      o && this.checkDistance(o, n[n.length - 1]) && this.updateMovingPoint(o, n.length);
    });
  }
  onDoubleClick() {
    this.eventHandler.on("mouse-double-click-left", (i, t) => {
      this.state === "drawing" && this.finishDrawing();
    });
  }
  /**
   * Check if the distance between two points is greater than 10 meters.
   */
  checkDistance(i, t) {
    return i.distanceTo(t) > 10;
  }
  finishDrawing() {
    this.type === "polygon" && this.lineEntity && this.viewer.baseMap.remove(this.lineEntity), this.removeMoveListener(), this.setState("edit"), this.addControlPoints(), this.draggable();
    const i = this.polygonEntity || this.lineEntity;
    this.entityId = i.id, this.eventDispatcher.dispatchEvent("drawEnd", this.getPoints());
  }
  removeClickListener() {
    this.eventHandler.off("mouse-click");
  }
  removeMoveListener() {
    this.eventHandler.off("mouse-move");
  }
  removeDoubleClickListener() {
    this.eventHandler.off("mouse-double-click-left");
  }
  setGeometryPoints(i) {
    this.geometryPoints = i;
  }
  getGeometryPoints() {
    return this.geometryPoints;
  }
  drawPolygon() {
    let t = () => {
      let e = [];
      for (let r = 0; r < this.geometryPoints.length; r++) {
        let a = this.cartesianToLnglat(this.geometryPoints[r]);
        e.push(new ot(a[1], a[0]));
      }
      let n = new ai(new ci(e), this.extrudeSettings), o = n.attributes.position.array;
      for (let r = 0; r < o.length; r += 3) {
        let a = L.fromDegrees(o[r], o[r + 1], o[r + 2] - 1e3);
        o[r] = a.x, o[r + 1] = a.y, o[r + 2] = a.z;
      }
      return n;
    };
    if (this.polygonEntity)
      this.polygonEntity instanceof Dt && this.polygonEntity.children.forEach((e) => {
        e.geometry = t();
      }), this.polygonEntity instanceof tt && (this.polygonEntity.geometry = t()), this.outlineEntity && (this.outlineEntity.geometry = new rt().setFromPoints(this.geometryPoints));
    else {
      this.style.PolygonStyle, this.polygonEntity = this.createMultiMaterialObject(t(), this.style.materials), this.polygonEntity.drawed = !0, Gt.add(this.polygonEntity);
      let e = this.style.LineStyle;
      this.outlineEntity = new Me(
        new rt().setFromPoints(this.geometryPoints),
        e
      ), Gt.add(this.outlineEntity), this.activeEntity = this.polygonEntity, this.type === "line" && (this.activeEntity = this.lineEntity);
    }
  }
  createMultiMaterialObject(i, t) {
    const e = new Dt();
    for (let n = 0, o = t.length; n < o; n++)
      e.add(new tt(i, t[n]));
    return e;
  }
  drawLine() {
    if (this.lineEntity)
      this.lineEntity.geometry = new rt().setFromPoints(this.geometryPoints);
    else {
      const i = this.style.LineStyle;
      this.lineEntity = this.addLineEntity(i);
    }
  }
  addTempLine() {
    if (this.tempLineEntity)
      this.tempLineEntity.geometry = new rt().setFromPoints(this.geometryPoints);
    else {
      const i = this.style.LineStyle;
      this.tempLineEntity = this.addLineEntity(i);
    }
  }
  removeTempLine() {
    this.tempLineEntity && (this.viewer.baseMap.remove(this.tempLineEntity), this.tempLineEntity = void 0);
  }
  addLineEntity(i) {
    const t = new Me(
      new rt().setFromPoints(this.geometryPoints),
      i
    );
    return this.viewer.baseMap.add(t), t;
  }
  cartesianToLnglat(i) {
    const t = L.vectorToDatums(i), e = t.latitude;
    return [t.longitude, e];
  }
  lnglatToCartesian(i) {
    return L.datumsToVector(i[1], i[0]);
  }
  // 将像素坐标转换为笛卡尔坐标
  pixelToCartesian(i) {
    return this.viewer.getXYZ(i.x, i.y);
  }
  /**
   * Display key points when creating a shape, allowing dragging of these points to edit and generate new shapes.
   */
  addControlPoints() {
    const i = this.getPoints();
    let t = 100;
    this.controlPoints = i.map((r) => {
      let a = new tt(new ri(t, 32, 32), new st({ color: 16711680 }));
      return a.position.copy(r), a.controlPoint = !0, this.viewer.baseMap.add(a), a;
    });
    let e = !1, n, o;
    this.controlPointsEventHandler = new H(this.viewer.baseMap.canvas), this.controlPointsEventHandler.on("mouse-down-left", (r, a) => {
      new ot(r, a);
      const h = this.viewer.getModel(r, a)[0].object;
      if (this.defined(h) && h.controlPoint) {
        for (let l = 0; l < this.controlPoints.length; l++)
          if (h.id === this.controlPoints[l].id) {
            e = !0, n = this.controlPoints[l], o = n.position, n.index = l;
            break;
          }
        this.viewer.baseMap.controls.enableRotate = !1;
      }
    }), this.controlPointsEventHandler.on("mouse-move", (r, a) => {
      if (e && n) {
        let h = new ot(r, a);
        const l = this.viewer.getXYZ(h.x, h.y);
        l && (n.position.copy(l), this.updateDraggingPoint(l, n.index));
      }
    }), this.controlPointsEventHandler.on("mouse-up", (r, a) => {
      n && !o.equals(n.position) && this.eventDispatcher.dispatchEvent("drawUpdate", n.position), e = !1, n = null, this.viewer.baseMap.controls.enableRotate = !0;
    });
  }
  removeControlPoints() {
    this.controlPoints.length > 0 && (this.controlPoints.forEach((i) => {
      this.viewer.baseMap.remove(i);
    }), this.controlPointsEventHandler.off("mouse-down-left"), this.controlPointsEventHandler.off("mouse-move"), this.controlPointsEventHandler.off("mouse-up"));
  }
  /**
   * Allow the entire shape to be dragged while in edit mode.
   */
  draggable() {
    let i = !1, t;
    this.dragEventHandler = new H(this.viewer.baseMap.canvas), this.dragEventHandler.on("mouse-down-left", (e, n) => {
      const o = this.viewer.getXYZ(e, n), r = this.viewer.getModel(e, n)[0].object;
      if (this.defined(r) && r instanceof tt && r.drawed) {
        const a = r.id;
        this.isCurrentEntity(a) && (i = !0, t = o, this.viewer.baseMap.controls.enableRotate = !1);
      }
    }), this.dragEventHandler.on("mouse-move", (e, n) => {
      if (i && t) {
        const o = this.viewer.getXYZ(e, n);
        if (o) {
          const r = o.clone().sub(t), a = this.geometryPoints.map((h) => h.add(r));
          this.points = this.points.map((h) => h.add(r)), this.controlPoints.map((h) => {
            const f = h.position.clone().add(r);
            h.position.copy(f);
          }), this.setGeometryPoints(a), this.minPointsForShape === 4 && (this.curveControlPointLeft = this.curveControlPointLeft.add(r), this.curveControlPointRight = this.curveControlPointRight.add(r)), t = o, this.drawPolygon();
        }
      } else {
        const o = this.viewer.getModel(e, n)[0].object;
        if (this.defined(o) && o instanceof tt && o.drawed) {
          const r = o.id;
          this.isCurrentEntity(r) ? this.viewer.baseMap.canvas.style.cursor = "move" : this.viewer.baseMap.canvas.style.cursor = "default";
        } else
          this.viewer.baseMap.canvas.style.cursor = "default";
      }
    }), this.dragEventHandler.on("mouse-up", () => {
      i = !1, t = void 0, this.viewer.baseMap.controls.enableRotate = !0;
    });
  }
  // Finish editing, disable dragging."
  disableDrag() {
    this.dragEventHandler.off("mouse-down-left"), this.dragEventHandler.off("mouse-move"), this.dragEventHandler.off("mouse-up");
  }
  show(i) {
    if (i) {
      const { duration: t, delay: e, callback: n } = i;
      this.showWithAnimation(t, e, n);
      return;
    } else
      this.showWithAnimation(0, 0);
  }
  hide(i) {
    if (i) {
      const { duration: t, delay: e, callback: n } = i;
      this.hideWithAnimation(t, e, n);
      return;
    } else
      this.hideWithAnimation(0, 0);
  }
  showWithAnimation(i = 2e3, t = 0, e) {
    var n, o;
    if (this.state === "hidden") {
      if (this.setState("static"), this.type === "polygon") {
        let r = 0.3;
        r = this.styleCache.PolygonStyle.opacity, this.animateOpacity(this.polygonEntity, r, i, t, e, this.state);
        const h = (o = (n = this.styleCache) == null ? void 0 : n.outlineMaterial) == null ? void 0 : o.alpha;
        this.animateOpacity(this.outlineEntity, h || 1, i, t, void 0, this.state);
      } else if (this.type === "line") {
        const r = this.styleCache.LineStyle.material;
        let a = 1;
        a = r.opacity, this.animateOpacity(this.lineEntity, a, i, t, e, this.state);
      }
      i != 0 && this.setState("animating");
    }
  }
  hideWithAnimation(i = 2e3, t = 0, e) {
    this.state === "hidden" || this.state != "static" || (this.setState("hidden"), this.type === "polygon" ? (this.animateOpacity(this.polygonEntity, 0, i, t, e, this.state), this.animateOpacity(this.outlineEntity, 0, i, t, void 0, this.state)) : this.type === "line" && this.animateOpacity(this.lineEntity, 0, i, t, e, this.state), i != 0 && this.setState("animating"));
  }
  animateOpacity(i, t, e, n, o, r) {
    setTimeout(() => {
      const a = i;
      let h, l = a.material;
      h = l.opacity;
      let f = 0;
      const p = (m) => {
        f || (f = m);
        const v = m - f;
        if (v < e) {
          const P = v / e * (t - h), M = h + P;
          l.opacity = M, requestAnimationFrame(p);
        } else {
          o && o();
          const P = r || "static";
          l.opacity = t, requestAnimationFrame(() => {
            this.setState(P);
          });
        }
      };
      requestAnimationFrame(p);
    }, n);
  }
  startGrowthAnimation(i) {
    const { duration: t = 2e3, delay: e = 0, callback: n } = i || {};
    if (!(this.state === "hidden" || this.state != "static")) {
      if (!this.minPointsForShape) {
        console.warn("Growth animation is not supported for this type of shape");
        return;
      }
      if (this.setState("animating"), this.minPointsForShape === 4) {
        this.doubleArrowGrowthAnimation(t, e, n);
        return;
      }
      setTimeout(() => {
        this.hideWithAnimation(0, 0, void 0);
        const o = this.getPoints();
        let r = 0;
        this.minPointsForShape === 2 ? r = t / (o.length - 1) : r = t / (o.length - 2);
        let a = Date.now(), h = 0, l = a;
        const f = () => {
          const p = Date.now(), m = p - a;
          if (p - l >= 16.7)
            l = p;
          else {
            requestAnimationFrame(f);
            return;
          }
          if (m >= t) {
            n && n(), a = 0, this.setState("static");
            return;
          }
          const P = Math.floor(m / r);
          let M;
          this.minPointsForShape === 2 ? h = P + 1 : h = P + 2, M = o[h - 1], P == 0 && this.minPointsForShape === 3 && (M = new q().lerpVectors(o[0], o[1], 0.5));
          let T = o[h];
          const b = (m - P * r) / r, S = new q().lerpVectors(M, T, b), E = o.slice(0, h + 1);
          E[E.length - 1] = S;
          const D = this.createGraphic(E);
          this.setGeometryPoints(D), this.drawPolygon(), this.showWithAnimation(0, 0, void 0), requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      }, e);
    }
  }
  doubleArrowGrowthAnimation(i = 2e3, t = 0, e) {
    setTimeout(() => {
      this.hideWithAnimation(0, 0, void 0);
      const n = this.getPoints();
      let o = Date.now(), r = o;
      const a = () => {
        const h = Date.now(), l = h - o;
        if (h - r >= 16.7)
          r = h;
        else {
          requestAnimationFrame(a);
          return;
        }
        if (l >= i) {
          e && e(), o = 0, this.setState("static");
          return;
        }
        const p = new q().lerpVectors(n[0], n[1], 0.5), m = new q().lerpVectors(n[0], p, 0.5), v = new q().lerpVectors(p, n[1], 0.5);
        let P = n[3], M = n[2];
        const T = l / i, b = this.getBezierControlPointforGrowthAnimation();
        let S = [m, b.left, P], E = [v, b.right, M];
        const D = this.getNewPosition(S, T), W = this.getNewPosition(E, T), _ = [...n];
        _[2] = W, _[3] = D;
        const Y = this.createGraphic(_);
        this.setGeometryPoints(Y), this.drawPolygon(), this.showWithAnimation(0, 0, void 0), requestAnimationFrame(a);
      };
      requestAnimationFrame(a);
    }, t);
  }
  getNewPosition(i, t) {
    i = i.map((o) => this.cartesianToLnglat(o));
    let e = Ht(0.3, i);
    return e = e.map((o) => L.fromDegrees(o[0], o[1])), this.interpolateAlongCurve(e, t);
  }
  interpolateAlongCurve(i, t) {
    const e = i.length - 1, n = Math.floor(t * e), o = t * e - n, r = i[n], a = i[n + 1], h = r.x + (a.x - r.x) * o, l = r.y + (a.y - r.y) * o, f = r.z + (a.z - r.z) * o;
    return new q(h, l, f);
  }
  remove() {
    this.type === "polygon" ? (this.viewer.baseMap.remove(this.polygonEntity), this.viewer.baseMap.remove(this.outlineEntity), this.polygonEntity = null, this.outlineEntity = null, this.lineEntity = null) : this.type === "line" && this.viewer.baseMap.remove(this.lineEntity), this.removeClickListener(), this.removeMoveListener(), this.removeDoubleClickListener(), this.removeControlPoints();
  }
  on(i, t) {
    this.eventDispatcher.on(i, t);
  }
  off(i, t) {
    this.eventDispatcher.off(i, t);
  }
  isCurrentEntity(i) {
    return this.entityId === i;
  }
  addPoint(i) {
  }
  getPoints() {
    return [new q()];
  }
  updateMovingPoint(i, t) {
  }
  updateDraggingPoint(i, t) {
  }
  getType() {
    return "polygon";
  }
  createGraphic(i) {
    return i;
  }
}
class Le extends G {
  constructor(t, e) {
    super(t, e);
    // points: Cartesian3[] = [];
    u(this, "points", []);
    u(this, "arrowLengthScale", 5);
    u(this, "maxArrowLength", 2);
    u(this, "tailWidthFactor");
    u(this, "neckWidthFactor");
    u(this, "headWidthFactor");
    u(this, "headAngle");
    u(this, "neckAngle");
    u(this, "minPointsForShape");
    this.tailWidthFactor = 0.1, this.neckWidthFactor = 0.2, this.headWidthFactor = 0.25, this.headAngle = Math.PI / 8.5, this.neckAngle = Math.PI / 13, this.minPointsForShape = 2, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    if (this.points.length < 2 && (this.points.push(t), this.onMouseMove()), this.points.length === 2) {
      const e = this.createGraphic(this.points);
      this.setGeometryPoints(e), this.drawPolygon(), this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const e = [...this.points, t], n = this.createGraphic(e);
    this.setGeometryPoints(n), this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, e) {
    this.points[e] = t;
    const n = this.createGraphic(this.points);
    this.setGeometryPoints(n), this.drawPolygon();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const [e, n] = t.map(this.cartesianToLnglat), o = R([e, n]), r = o * this.tailWidthFactor, a = o * this.neckWidthFactor, h = o * this.headWidthFactor, l = w(n, e, Math.PI / 2, r, !0), f = w(n, e, Math.PI / 2, r, !1), p = w(e, n, this.headAngle, h, !1), m = w(e, n, this.headAngle, h, !0), v = w(e, n, this.neckAngle, a, !1), P = w(e, n, this.neckAngle, a, !0), M = [...l, ...v, ...p, ...n, ...m, ...P, ...f];
    return L.fromDegreesArray(M);
  }
  getPoints() {
    return this.points;
  }
}
class Rt extends G {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    u(this, "headHeightFactor");
    u(this, "headWidthFactor");
    u(this, "neckHeightFactor");
    u(this, "neckWidthFactor");
    u(this, "headTailFactor");
    u(this, "minPointsForShape");
    this.headHeightFactor = 0.18, this.headWidthFactor = 0.3, this.neckHeightFactor = 0.85, this.neckWidthFactor = 0.15, this.headTailFactor = 0.8, this.minPointsForShape = 3, this.setState("drawing"), this.onDoubleClick();
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length < 2 ? this.onMouseMove() : this.points.length === 2 && (this.setGeometryPoints(this.points), this.drawPolygon());
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const e = [...this.points, t];
    if (this.setGeometryPoints(e), e.length === 2)
      this.addTempLine();
    else {
      this.removeTempLine();
      const n = this.createGraphic(e);
      this.setGeometryPoints(n), this.drawPolygon();
    }
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const e = t.map((E) => this.cartesianToLnglat(E));
    let [n, o] = [e[0], e[1]];
    at(e[0], e[1], e[2]) && (n = e[1], o = e[0]);
    const a = [O(n, o)].concat(e.slice(2)), h = this.getArrowHeadPoints(a, n, o), [l, f] = [h[0], h[4]], p = F(n, o) / R(a), m = this.getArrowBodyPoints(a, l, f, p), v = m.length;
    let P = [n].concat(m.slice(0, v / 2)), M = [o].concat(m.slice(v / 2, v));
    P = X(P), M = X(M);
    const T = P.concat(h, M.reverse()), b = [].concat(...T);
    return L.fromDegreesArray(b);
  }
  getPoints() {
    return this.points;
  }
  getArrowHeadPoints(t, e, n) {
    try {
      let o = R(t), r = o * this.headHeightFactor;
      const a = t[t.length - 1];
      o = F(a, t[t.length - 2]);
      const h = F(e, n);
      r > h * this.headTailFactor && (r = h * this.headTailFactor);
      const l = r * this.headWidthFactor, f = r * this.neckWidthFactor;
      r = r > o ? o : r;
      const p = r * this.neckHeightFactor, m = w(t[t.length - 2], a, 0, r, !0), v = w(t[t.length - 2], a, 0, p, !0), P = w(a, m, Math.PI / 2, l, !1), M = w(a, m, Math.PI / 2, l, !0), T = w(a, v, Math.PI / 2, f, !1), b = w(a, v, Math.PI / 2, f, !0);
      return [T, P, a, M, b];
    } catch (o) {
      console.log(o);
    }
  }
  getArrowBodyPoints(t, e, n, o) {
    const r = mt(t), h = R(t) * o, l = F(e, n), f = (h - l) / 2;
    let [p, m, v] = [0, [], []];
    for (let P = 1; P < t.length - 1; P++) {
      const M = It(t[P - 1], t[P], t[P + 1]) / 2;
      p += F(t[P - 1], t[P]);
      const T = (h / 2 - p / r * f) / Math.sin(M), b = w(t[P - 1], t[P], Math.PI - M, T, !0), S = w(t[P - 1], t[P], M, T, !1);
      m.push(b), v.push(S);
    }
    return m.concat(v);
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, e) {
    this.points[e] = t;
    const n = this.createGraphic(this.points);
    this.setGeometryPoints(n), this.drawPolygon();
  }
}
class Mi extends Rt {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    u(this, "headHeightFactor");
    u(this, "headWidthFactor");
    u(this, "neckHeightFactor");
    u(this, "neckWidthFactor");
    u(this, "headTailFactor");
    u(this, "tailWidthFactor");
    u(this, "swallowTailFactor");
    u(this, "swallowTailPnt");
    this.headHeightFactor = 0.18, this.headWidthFactor = 0.3, this.neckHeightFactor = 0.85, this.neckWidthFactor = 0.15, this.tailWidthFactor = 0.1, this.headTailFactor = 0.8, this.swallowTailFactor = 1, this.swallowTailPnt = [0, 0], this.minPointsForShape = 3;
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const e = t.map((_) => this.cartesianToLnglat(_));
    let [n, o] = [e[0], e[1]];
    at(e[0], e[1], e[2]) && (n = e[1], o = e[0]);
    const a = [O(n, o)].concat(e.slice(2)), h = this.getArrowHeadPoints(a, n, o), [l, f] = [h[0], h[4]], p = F(n, o), m = R(a), v = m * this.tailWidthFactor * this.swallowTailFactor;
    this.swallowTailPnt = w(a[1], a[0], 0, v, !0);
    const P = p / m, M = this.getArrowBodyPoints(a, l, f, P), T = M.length;
    let b = [n].concat(M.slice(0, T / 2)), S = [o].concat(M.slice(T / 2, T));
    b = X(b), S = X(S);
    const E = b.concat(h, S.reverse(), [this.swallowTailPnt, b[0]]), D = [].concat(...E);
    return L.fromDegreesArray(D);
  }
}
class Ae extends Rt {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    u(this, "headHeightFactor");
    u(this, "headWidthFactor");
    u(this, "neckHeightFactor");
    u(this, "neckWidthFactor");
    u(this, "tailWidthFactor");
    this.headHeightFactor = 0.18, this.headWidthFactor = 0.3, this.neckHeightFactor = 0.85, this.neckWidthFactor = 0.15, this.tailWidthFactor = 0.1, this.minPointsForShape = 2;
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length < 2 ? this.onMouseMove() : this.points.length > 2 && this.lineEntity && this.viewer.baseMap.remove(this.lineEntity);
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const e = [...this.points, t];
    if (this.setGeometryPoints(e), !(e.length < 2)) {
      const n = this.createGraphic(e);
      this.setGeometryPoints(n), this.drawPolygon();
    }
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const e = t.map((M) => this.cartesianToLnglat(M)), n = this.getTailPoints(e), o = this.getArrowHeadPoints(e, n[0], n[1]), r = o[0], a = o[4], h = this.getArrowBodyPoints(e, r, a, this.tailWidthFactor), l = h.length;
    let f = [n[0]].concat(h.slice(0, l / 2)), p = [n[1]].concat(h.slice(l / 2, l));
    f = X(f), p = X(p);
    const m = f.concat(o, p.reverse()), v = [].concat(...m);
    return L.fromDegreesArray(v);
  }
  getTailPoints(t) {
    const n = R(t) * this.tailWidthFactor, o = w(t[1], t[0], Math.PI / 2, n, !1), r = w(t[1], t[0], Math.PI / 2, n, !0);
    return [o, r];
  }
}
class bi extends Ae {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    u(this, "headHeightFactor");
    u(this, "headWidthFactor");
    u(this, "neckHeightFactor");
    u(this, "neckWidthFactor");
    u(this, "tailWidthFactor");
    u(this, "swallowTailFactor");
    this.headHeightFactor = 0.18, this.headWidthFactor = 0.3, this.neckHeightFactor = 0.85, this.neckWidthFactor = 0.15, this.tailWidthFactor = 0.1, this.swallowTailFactor = 1, this.minPointsForShape = 2;
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const e = t.map((M) => this.cartesianToLnglat(M)), n = this.getTailPoints(e), o = this.getArrowHeadPoints(e, n[0], n[2]), r = o[0], a = o[4], h = this.getArrowBodyPoints(e, r, a, this.tailWidthFactor), l = h.length;
    let f = [n[0]].concat(h.slice(0, l / 2)), p = [n[2]].concat(h.slice(l / 2, l));
    f = X(f), p = X(p);
    const m = f.concat(o, p.reverse(), [n[1], f[0]]), v = [].concat(...m);
    return L.fromDegreesArray(v);
  }
  getTailPoints(t) {
    const n = R(t) * this.tailWidthFactor, o = w(t[1], t[0], Math.PI / 2, n, !1), r = w(t[1], t[0], Math.PI / 2, n, !0), a = n * this.swallowTailFactor, h = w(t[1], t[0], 0, a, !0);
    return [o, h, r];
  }
}
class Ti extends G {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    u(this, "arrowLengthScale", 5);
    u(this, "maxArrowLength", 3e6);
    u(this, "minPointsForShape");
    this.minPointsForShape = 2, this.setState("drawing");
  }
  getType() {
    return "line";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    if (this.points.length < 2 && (this.points.push(t), this.onMouseMove()), this.points.length === 2) {
      const e = this.createGraphic(this.points);
      this.setGeometryPoints(e), this.drawLine(), this.finishDrawing();
    }
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const e = [...this.points, t], n = this.createGraphic(e);
    this.setGeometryPoints(n), this.drawLine();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, e) {
    this.points[e] = t;
    const n = this.createGraphic(this.points);
    this.setGeometryPoints(n), this.drawLine();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const [e, n] = t.map(this.cartesianToLnglat);
    let r = F(e, n) / this.arrowLengthScale;
    r = r > this.maxArrowLength ? this.maxArrowLength : r;
    const a = w(e, n, Math.PI / 6, r / 2, !1), h = w(e, n, Math.PI / 6, r / 2, !0), l = [...e, ...n, ...a, ...n, ...h];
    return L.fromDegreesArray(l);
  }
  getPoints() {
    return this.points;
  }
}
class Si extends G {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    u(this, "arrowLengthScale", 5);
    u(this, "maxArrowLength", 3e6);
    u(this, "t");
    u(this, "minPointsForShape");
    this.t = 0.3, this.minPointsForShape = 2, this.setState("drawing"), this.onDoubleClick();
  }
  getType() {
    return "line";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length < 2 && this.onMouseMove();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const e = [...this.points, t];
    let n = this.createGraphic(e);
    this.setGeometryPoints(n), this.drawLine();
  }
  createStraightArrow(t) {
    const [e, n] = t.map(this.cartesianToLnglat);
    let r = F(e, n) / this.arrowLengthScale;
    r = r > this.maxArrowLength ? this.maxArrowLength : r;
    const a = w(e, n, Math.PI / 6, r / 2, !1), h = w(e, n, Math.PI / 6, r / 2, !0), l = [...e, ...n, ...a, ...n, ...h];
    return L.fromDegreesArray(l);
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, e) {
    this.points[e] = t;
    const n = this.createGraphic(this.points);
    this.setGeometryPoints(n), this.drawLine();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const e = t.map((v) => this.cartesianToLnglat(v));
    if (t.length === 2)
      return this.createStraightArrow(t);
    const n = Ht(this.t, e);
    e[e.length - 2];
    const o = e[e.length - 1];
    let a = mt(e) / this.arrowLengthScale;
    a = a > this.maxArrowLength ? this.maxArrowLength : a;
    const h = w(n[n.length - 2], n[n.length - 1], Math.PI / 6, a / 2, !1), l = w(n[n.length - 2], n[n.length - 1], Math.PI / 6, a / 2, !0), p = [...[].concat(...n), ...h, ...o, ...l];
    return L.fromDegreesArray(p);
  }
  getPoints() {
    return this.points;
  }
}
class Li extends Le {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    u(this, "arrowLengthScale", 5);
    u(this, "maxArrowLength", 2);
    u(this, "tailWidthFactor");
    u(this, "neckWidthFactor");
    u(this, "headWidthFactor");
    u(this, "headAngle");
    u(this, "neckAngle");
    u(this, "minPointsForShape");
    this.tailWidthFactor = 0.08, this.neckWidthFactor = 0.1, this.headWidthFactor = 0.13, this.headAngle = Math.PI / 4, this.neckAngle = Math.PI * 0.17741, this.minPointsForShape = 2, this.setState("drawing");
  }
  createGraphic(t) {
    const [e, n] = t.map(this.cartesianToLnglat), o = R([e, n]) * 1.5, r = o * this.tailWidthFactor, a = o * this.neckWidthFactor, h = o * this.headWidthFactor, l = w(n, e, Math.PI / 2, r, !0), f = w(n, e, Math.PI / 2, r, !1), p = w(e, n, this.headAngle, h, !1), m = w(e, n, this.headAngle, h, !0), v = w(e, n, this.neckAngle, a, !1), P = w(e, n, this.neckAngle, a, !0), M = [...l, ...v, ...p, ...n, ...m, ...P, ...f];
    return L.fromDegreesArray(M);
  }
}
class Ai extends G {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    u(this, "arrowLengthScale", 5);
    u(this, "maxArrowLength", 2);
    u(this, "neckWidthFactor");
    u(this, "headWidthFactor");
    u(this, "headHeightFactor");
    u(this, "neckHeightFactor");
    u(this, "connPoint");
    u(this, "tempPoint4");
    u(this, "minPointsForShape");
    u(this, "llBodyPnts", []);
    u(this, "rrBodyPnts", []);
    u(this, "curveControlPointLeft");
    u(this, "curveControlPointRight");
    u(this, "isClockWise");
    this.headHeightFactor = 0.25, this.headWidthFactor = 0.3, this.neckHeightFactor = 0.85, this.neckWidthFactor = 0.15, this.connPoint = [0, 0], this.tempPoint4 = [0, 0], this.minPointsForShape = 4, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length < 2 ? this.onMouseMove() : this.points.length === 2 ? (this.setGeometryPoints(this.points), this.drawPolygon()) : this.points.length === 3 ? this.lineEntity && this.viewer.baseMap.remove(this.lineEntity) : this.finishDrawing();
  }
  finishDrawing() {
    this.curveControlPointLeft = L.fromDegrees(this.llBodyPnts[2][0], this.llBodyPnts[2][1]), this.curveControlPointRight = L.fromDegrees(this.rrBodyPnts[1][0], this.rrBodyPnts[1][1]), super.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const e = [...this.points, t];
    if (this.setGeometryPoints(e), e.length === 2)
      this.addTempLine();
    else if (e.length > 2) {
      this.removeTempLine();
      const n = this.createGraphic(e);
      this.setGeometryPoints(n), this.drawPolygon();
    }
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, e) {
    this.points[e] = t;
    const n = this.createGraphic(this.points);
    this.setGeometryPoints(n), this.drawPolygon();
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const e = t.map((_) => this.cartesianToLnglat(_)), [n, o, r] = [e[0], e[1], e[2]], a = e.length;
    a === 3 ? (this.tempPoint4 = this.getTempPoint4(n, o, r), this.connPoint = O(n, o)) : a === 4 ? (this.tempPoint4 = e[3], this.connPoint = O(n, o)) : (this.tempPoint4 = e[3], this.connPoint = e[4]);
    let h, l;
    this.isClockWise = at(n, o, r), this.isClockWise ? (h = this.getArrowPoints(n, this.connPoint, this.tempPoint4, !1), l = this.getArrowPoints(this.connPoint, o, r, !0)) : (h = this.getArrowPoints(o, this.connPoint, r, !1), l = this.getArrowPoints(this.connPoint, n, this.tempPoint4, !0));
    const f = h.length, p = (f - 5) / 2, m = h.slice(0, p), v = h.slice(p, p + 5);
    let P = h.slice(p + 5, f);
    this.llBodyPnts = m;
    let M = l.slice(0, p);
    const T = l.slice(p, p + 5), b = l.slice(p + 5, f);
    this.rrBodyPnts = b, M = _t(M);
    const S = _t(b.concat(m.slice(1)));
    P = _t(P);
    const E = M.concat(T, S, v, P), D = [].concat(...E);
    return L.fromDegreesArray(D);
  }
  getTempPoint4(t, e, n) {
    const o = O(t, e), r = F(o, n), a = It(t, o, n);
    let h = [0, 0], l, f, p;
    return a < Math.PI / 2 ? (l = r * Math.sin(a), f = r * Math.cos(a), p = w(t, o, Math.PI / 2, l, !1), h = w(o, p, Math.PI / 2, f, !0)) : a >= Math.PI / 2 && a < Math.PI ? (l = r * Math.sin(Math.PI - a), f = r * Math.cos(Math.PI - a), p = w(t, o, Math.PI / 2, l, !1), h = w(o, p, Math.PI / 2, f, !1)) : a >= Math.PI && a < Math.PI * 1.5 ? (l = r * Math.sin(a - Math.PI), f = r * Math.cos(a - Math.PI), p = w(t, o, Math.PI / 2, l, !0), h = w(o, p, Math.PI / 2, f, !0)) : (l = r * Math.sin(Math.PI * 2 - a), f = r * Math.cos(Math.PI * 2 - a), p = w(t, o, Math.PI / 2, l, !0), h = w(o, p, Math.PI / 2, f, !1)), h;
  }
  getArrowPoints(t, e, n, o) {
    const r = O(t, e), a = F(r, n);
    let h = w(n, r, 0, a * 0.3, !0), l = w(n, r, 0, a * 0.5, !0);
    h = w(r, h, Math.PI / 2, a / 5, o), l = w(r, l, Math.PI / 2, a / 4, o);
    const f = [r, h, l, n], p = this.getArrowHeadPoints(f);
    if (p && Array.isArray(p) && p.length > 0) {
      const m = p[0], v = p[4], P = F(t, e) / R(f) / 2, M = this.getArrowBodyPoints(f, m, v, P);
      if (M) {
        const T = M.length;
        let b = M.slice(0, T / 2), S = M.slice(T / 2, T);
        return b.push(m), S.push(v), b = b.reverse(), b.push(e), S = S.reverse(), S.push(t), b.reverse().concat(p, S);
      }
    } else
      throw new Error("Interpolation Error");
  }
  getArrowBodyPoints(t, e, n, o) {
    const r = mt(t), h = R(t) * o, l = F(e, n), f = (h - l) / 2;
    let p = 0, m = [], v = [];
    for (let P = 1; P < t.length - 1; P++) {
      const M = It(t[P - 1], t[P], t[P + 1]) / 2;
      p += F(t[P - 1], t[P]);
      const T = (h / 2 - p / r * f) / Math.sin(M), b = w(t[P - 1], t[P], Math.PI - M, T, !0), S = w(t[P - 1], t[P], M, T, !1);
      m.push(b), v.push(S);
    }
    return m.concat(v);
  }
  getArrowHeadPoints(t) {
    const n = R(t) * this.headHeightFactor, o = t[t.length - 1], r = n * this.headWidthFactor, a = n * this.neckWidthFactor, h = n * this.neckHeightFactor, l = w(t[t.length - 2], o, 0, n, !0), f = w(t[t.length - 2], o, 0, h, !0), p = w(o, l, Math.PI / 2, r, !1), m = w(o, l, Math.PI / 2, r, !0), v = w(o, f, Math.PI / 2, a, !1), P = w(o, f, Math.PI / 2, a, !0);
    return [v, p, o, m, P];
  }
  getPoints() {
    return this.points;
  }
  getBezierControlPointforGrowthAnimation() {
    return this.isClockWise ? {
      left: this.curveControlPointLeft,
      right: this.curveControlPointRight
    } : {
      right: this.curveControlPointLeft,
      left: this.curveControlPointRight
    };
  }
}
class Fi extends G {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    u(this, "freehand");
    this.freehand = !0, this.setState("drawing");
  }
  getType() {
    return "line";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    L.vectorScale(t, 10), this.points.push(t), this.points.length < 2 ? this.onMouseMove() : this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    L.vectorScale(t, 10), this.points.push(t), this.setGeometryPoints(this.points), this.drawLine(), this.eventDispatcher.dispatchEvent("drawUpdate", t);
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, e) {
    this.points[e] = t, this.setGeometryPoints(this.points), this.drawLine();
  }
  getPoints() {
    return this.points;
  }
}
class Ei extends G {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    u(this, "freehand");
    this.freehand = !0, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    L.vectorScale(t, 30), this.points.push(t), this.points.length === 1 ? this.onMouseMove() : this.points.length > 2 && this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    L.vectorScale(t, 30), this.points.push(t), this.points.length > 2 && (this.setGeometryPoints(this.points), this.drawPolygon(), this.eventDispatcher.dispatchEvent("drawUpdate", t));
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, e) {
    this.points[e] = t, this.setGeometryPoints(this.points), this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
}
class _i extends G {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    u(this, "arrowLengthScale", 5);
    u(this, "maxArrowLength", 3e6);
    u(this, "t");
    this.t = 0.3, this.setState("drawing"), this.onDoubleClick();
  }
  getType() {
    return "line";
  }
  /**
   * Points are only added upon click events.
   */
  addPoint(t) {
    this.points.push(t), this.points.length < 2 ? this.onMouseMove() : this.points.length === 2 && (this.setGeometryPoints(this.points), this.drawLine());
  }
  /**
   * Draw the shape based on the mouse movement position during the initial drawing.
   */
  updateMovingPoint(t) {
    const e = [...this.points, t];
    let n = [];
    e.length === 2 ? (this.setGeometryPoints(e), this.drawLine()) : (n = this.createGraphic(e), this.setGeometryPoints(n));
  }
  /**
   * During editing mode, drag key points to update the corresponding data.
   */
  updateDraggingPoint(t, e) {
    this.points[e] = t;
    const n = this.createGraphic(this.points);
    this.setGeometryPoints(n), this.drawLine();
  }
  /**
   * Generate geometric shape points based on key points..
   */
  createGraphic(t) {
    const e = t.map((a) => this.cartesianToLnglat(a)), n = Ht(this.t, e), o = [].concat(...n);
    return L.fromDegreesArray(o);
  }
  getPoints() {
    return this.points;
  }
}
class ki extends G {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    u(this, "freehand");
    this.freehand = !0, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length === 1 ? this.onMouseMove() : this.points.length > 1 && this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const e = [...this.points, t], n = this.createGraphic(e);
    this.setGeometryPoints(n), this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, e) {
    this.points[e] = t;
    const n = this.createGraphic(this.points);
    this.setGeometryPoints(n), this.drawPolygon();
  }
  createGraphic(t) {
    const e = t.map((m) => this.cartesianToLnglat(m)), n = e[0], o = e[1], r = O(n, o), a = Math.abs((n[0] - o[0]) / 2), h = Math.abs((n[1] - o[1]) / 2), l = this.generatePoints(r, a, h), f = [].concat(...l);
    return L.fromDegreesArray(f);
  }
  generatePoints(t, e, n) {
    let [o, r, a, h] = [null, null, 0, []];
    for (let l = 0; l <= 100; l++)
      a = Math.PI * 2 * l / 100, o = t[0] + e * Math.cos(a), r = t[1] + n * Math.sin(a), h.push([o, r]);
    return h;
  }
  getPoints() {
    return this.points;
  }
}
class Di extends G {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    u(this, "freehand");
    this.freehand = !0, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length === 1 ? this.onMouseMove() : this.points.length === 2 || this.points.length > 2 && this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const e = [...this.points, t], n = this.createGraphic(e);
    this.setGeometryPoints(n), this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, e) {
    this.points[e] = t;
    const n = this.createGraphic(this.points);
    this.setGeometryPoints(n), this.drawPolygon();
  }
  createGraphic(t) {
    const e = t.map((T) => this.cartesianToLnglat(T));
    if (e.length === 2) {
      const T = O(e[0], e[1]), b = F(e[0], T), S = w(e[0], T, Math.PI / 2, b, !1);
      e.push(S);
    }
    let [n, o, r, a, h] = [
      e[0],
      e[1],
      e[2],
      void 0,
      void 0
    ];
    const l = gi(n, o, r), f = F(n, l), p = Z(n, l), m = Z(o, l);
    at(n, o, r) ? (a = m, h = p) : (a = p, h = m);
    let v = Se(l, f, a, h);
    const P = [].concat(...v);
    return L.fromDegreesArray(P);
  }
  getPoints() {
    return this.points;
  }
}
class Ii extends G {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length === 1 ? this.onMouseMove() : this.points.length > 1 && this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const e = [...this.points, t], n = this.createGraphic(e);
    this.setGeometryPoints(n), this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, e) {
    this.points[e] = t;
    const n = this.createGraphic(this.points);
    this.setGeometryPoints(n), this.drawPolygon();
  }
  createGraphic(t) {
    const [e, n] = t.map(this.cartesianToLnglat), o = [...e, e[0], n[1], ...n, n[0], e[1], ...e];
    return L.fromDegreesArray(o);
  }
  getPoints() {
    return this.points;
  }
}
class Gi extends G {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length === 1 ? this.onMouseMove() : this.points.length === 3 && this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    L.vectorScale(t, 30);
    const e = [...this.points, t];
    this.setGeometryPoints(e), e.length === 2 ? this.addTempLine() : (this.removeTempLine(), this.drawPolygon());
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, e) {
    this.points[e] = t, this.setGeometryPoints(this.points), this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
}
class xi extends G {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    u(this, "height", 30);
    this.setState("drawing"), this.onDoubleClick();
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    L.vectorScale(t, 30), this.points.push(t), this.points.length === 1 && this.onMouseMove();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    L.vectorScale(t, 30);
    const e = [...this.points, t];
    this.setGeometryPoints(e), e.length === 2 ? this.addTempLine() : (this.removeTempLine(), this.drawPolygon());
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, e) {
    this.points[e] = t, this.setGeometryPoints(this.points), this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
}
class Ci extends G {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    u(this, "freehand");
    this.freehand = !0, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length === 1 ? this.onMouseMove() : this.points.length > 1 && this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const e = [...this.points, t], n = this.createGraphic(e);
    this.setGeometryPoints(n), this.drawPolygon();
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, e) {
    this.points[e] = t;
    const n = this.createGraphic(this.points);
    this.setGeometryPoints(n), this.drawPolygon();
  }
  createGraphic(t) {
    const e = t.map((f) => this.cartesianToLnglat(f)), n = e[0], o = e[1], r = F(n, o), a = this.generatePoints(n, r), h = [].concat(...a);
    return L.fromDegreesArray(h);
  }
  generatePoints(t, e) {
    let n, o, r;
    const a = [];
    for (let h = 0; h <= 100; h++)
      r = Math.PI * 2 * h / 100, n = t[0] + e * Math.cos(r), o = t[1] + e * Math.sin(r), a.push([n, o]);
    return a;
  }
  getPoints() {
    return this.points;
  }
}
class Wi extends G {
  constructor(t, e) {
    super(t, e);
    u(this, "points", []);
    this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    this.points.push(t), this.points.length === 1 ? this.onMouseMove() : this.points.length === 3 && this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    const e = [...this.points, t];
    if (this.setGeometryPoints(e), e.length === 2)
      this.addTempLine();
    else {
      this.removeTempLine();
      const n = this.createGraphic(e);
      this.setGeometryPoints(n), this.drawPolygon();
    }
  }
  createGraphic(t) {
    const e = t.map((v) => this.cartesianToLnglat(v)), [n, o, r] = [e[0], e[1], e[2]], a = F(o, n), h = Z(o, n), l = Z(r, n), f = Se(n, a, h, l);
    f.push(n, f[0]);
    const p = [].concat(...f);
    return L.fromDegreesArray(p);
  }
  /**
   * In edit mode, drag key points to update corresponding key point data.
   */
  updateDraggingPoint(t, e) {
    this.points[e] = t;
    const n = this.createGraphic(this.points);
    this.setGeometryPoints(n), this.drawPolygon();
  }
  getPoints() {
    return this.points;
  }
}
const Te = {
  FineArrow: Le,
  AttackArrow: Rt,
  SwallowtailAttackArrow: Mi,
  SquadCombat: Ae,
  SwallowtailSquadCombat: bi,
  StraightArrow: Ti,
  CurvedArrow: Si,
  AssaultDirection: Li,
  DoubleArrow: Ai,
  FreehandLine: Fi,
  FreehandPolygon: Ei,
  Curve: _i,
  Ellipse: ki,
  Lune: Di,
  Reactangle: Ii,
  Triangle: Gi,
  Polygon: xi,
  Circle: Ci,
  Sector: Wi,
  group: Gt
};
Te.createGeometryFromData = (c, i) => {
  const { type: t, style: e, cartesianPoints: n } = i, o = new Te[t](c, e);
  o.points = n;
  const r = o.createGraphic(n);
  return o.setGeometryPoints(r), o.type == "polygon" ? o.drawPolygon() : o.drawLine(), o.finishDrawing(), o.onClick(), o;
};
export {
  Te as default
};
//# sourceMappingURL=ThreePlot.js.map
