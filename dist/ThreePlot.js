var zn = Object.defineProperty;
var Un = (h, i, t) => i in h ? zn(h, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[i] = t;
var g = (h, i, t) => (Un(h, typeof i != "symbol" ? i + "" : i, t), t);
import { Vector3 as X, MeshBasicMaterial as fe, DoubleSide as Vn, LineBasicMaterial as Kn, Vector2 as it, Mesh as st, Line as pe, BufferGeometry as ot, SphereGeometry as Zn, ShapeGeometry as Qn, Shape as Jn } from "three";
class Nn {
  constructor() {
    g(this, "listeners");
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
var ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ti(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var ft = { exports: {} };
ft.exports;
(function(h, i) {
  var t = 200, e = "__lodash_hash_undefined__", n = 9007199254740991, o = "[object Arguments]", r = "[object Array]", a = "[object Boolean]", c = "[object Date]", l = "[object Error]", f = "[object Function]", p = "[object GeneratorFunction]", m = "[object Map]", v = "[object Number]", P = "[object Object]", M = "[object Promise]", T = "[object RegExp]", b = "[object Set]", L = "[object String]", F = "[object Symbol]", k = "[object WeakMap]", W = "[object ArrayBuffer]", _ = "[object DataView]", q = "[object Float32Array]", xt = "[object Float64Array]", Wt = "[object Int8Array]", Ht = "[object Int16Array]", Rt = "[object Int32Array]", Ot = "[object Uint8Array]", jt = "[object Uint8ClampedArray]", Bt = "[object Uint16Array]", $t = "[object Uint32Array]", Me = /[\\^$.*+?()[\]{}|]/g, be = /\w*$/, Te = /^\[object .+?Constructor\]$/, Le = /^(?:0|[1-9]\d*)$/, S = {};
  S[o] = S[r] = S[W] = S[_] = S[a] = S[c] = S[q] = S[xt] = S[Wt] = S[Ht] = S[Rt] = S[m] = S[v] = S[P] = S[T] = S[b] = S[L] = S[F] = S[Ot] = S[jt] = S[Bt] = S[$t] = !0, S[l] = S[f] = S[k] = !1;
  var Ae = typeof ut == "object" && ut && ut.Object === Object && ut, Se = typeof self == "object" && self && self.Object === Object && self, j = Ae || Se || Function("return this")(), Xt = i && !i.nodeType && i, Yt = Xt && !0 && h && !h.nodeType && h, Ee = Yt && Yt.exports === Xt;
  function Fe(s, d) {
    return s.set(d[0], d[1]), s;
  }
  function _e(s, d) {
    return s.add(d), s;
  }
  function Ie(s, d) {
    for (var u = -1, y = s ? s.length : 0; ++u < y && d(s[u], u, s) !== !1; )
      ;
    return s;
  }
  function ke(s, d) {
    for (var u = -1, y = d.length, I = s.length; ++u < y; )
      s[I + u] = d[u];
    return s;
  }
  function qt(s, d, u, y) {
    var I = -1, D = s ? s.length : 0;
    for (y && D && (u = s[++I]); ++I < D; )
      u = d(u, s[I], I, s);
    return u;
  }
  function De(s, d) {
    for (var u = -1, y = Array(s); ++u < s; )
      y[u] = d(u);
    return y;
  }
  function Ge(s, d) {
    return s == null ? void 0 : s[d];
  }
  function zt(s) {
    var d = !1;
    if (s != null && typeof s.toString != "function")
      try {
        d = !!(s + "");
      } catch {
      }
    return d;
  }
  function Ut(s) {
    var d = -1, u = Array(s.size);
    return s.forEach(function(y, I) {
      u[++d] = [I, y];
    }), u;
  }
  function Pt(s, d) {
    return function(u) {
      return s(d(u));
    };
  }
  function Vt(s) {
    var d = -1, u = Array(s.size);
    return s.forEach(function(y) {
      u[++d] = y;
    }), u;
  }
  var Ce = Array.prototype, xe = Function.prototype, at = Object.prototype, mt = j["__core-js_shared__"], Kt = function() {
    var s = /[^.]+$/.exec(mt && mt.keys && mt.keys.IE_PROTO || "");
    return s ? "Symbol(src)_1." + s : "";
  }(), Zt = xe.toString, $ = at.hasOwnProperty, ht = at.toString, We = RegExp(
    "^" + Zt.call($).replace(Me, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Qt = Ee ? j.Buffer : void 0, Jt = j.Symbol, Nt = j.Uint8Array, He = Pt(Object.getPrototypeOf, Object), Re = Object.create, Oe = at.propertyIsEnumerable, je = Ce.splice, te = Object.getOwnPropertySymbols, Be = Qt ? Qt.isBuffer : void 0, $e = Pt(Object.keys, Object), yt = J(j, "DataView"), et = J(j, "Map"), wt = J(j, "Promise"), vt = J(j, "Set"), Mt = J(j, "WeakMap"), nt = J(Object, "create"), Xe = V(yt), Ye = V(et), qe = V(wt), ze = V(vt), Ue = V(Mt), ee = Jt ? Jt.prototype : void 0, ne = ee ? ee.valueOf : void 0;
  function z(s) {
    var d = -1, u = s ? s.length : 0;
    for (this.clear(); ++d < u; ) {
      var y = s[d];
      this.set(y[0], y[1]);
    }
  }
  function Ve() {
    this.__data__ = nt ? nt(null) : {};
  }
  function Ke(s) {
    return this.has(s) && delete this.__data__[s];
  }
  function Ze(s) {
    var d = this.__data__;
    if (nt) {
      var u = d[s];
      return u === e ? void 0 : u;
    }
    return $.call(d, s) ? d[s] : void 0;
  }
  function Qe(s) {
    var d = this.__data__;
    return nt ? d[s] !== void 0 : $.call(d, s);
  }
  function Je(s, d) {
    var u = this.__data__;
    return u[s] = nt && d === void 0 ? e : d, this;
  }
  z.prototype.clear = Ve, z.prototype.delete = Ke, z.prototype.get = Ze, z.prototype.has = Qe, z.prototype.set = Je;
  function B(s) {
    var d = -1, u = s ? s.length : 0;
    for (this.clear(); ++d < u; ) {
      var y = s[d];
      this.set(y[0], y[1]);
    }
  }
  function Ne() {
    this.__data__ = [];
  }
  function tn(s) {
    var d = this.__data__, u = ct(d, s);
    if (u < 0)
      return !1;
    var y = d.length - 1;
    return u == y ? d.pop() : je.call(d, u, 1), !0;
  }
  function en(s) {
    var d = this.__data__, u = ct(d, s);
    return u < 0 ? void 0 : d[u][1];
  }
  function nn(s) {
    return ct(this.__data__, s) > -1;
  }
  function sn(s, d) {
    var u = this.__data__, y = ct(u, s);
    return y < 0 ? u.push([s, d]) : u[y][1] = d, this;
  }
  B.prototype.clear = Ne, B.prototype.delete = tn, B.prototype.get = en, B.prototype.has = nn, B.prototype.set = sn;
  function Z(s) {
    var d = -1, u = s ? s.length : 0;
    for (this.clear(); ++d < u; ) {
      var y = s[d];
      this.set(y[0], y[1]);
    }
  }
  function on() {
    this.__data__ = {
      hash: new z(),
      map: new (et || B)(),
      string: new z()
    };
  }
  function rn(s) {
    return lt(this, s).delete(s);
  }
  function an(s) {
    return lt(this, s).get(s);
  }
  function hn(s) {
    return lt(this, s).has(s);
  }
  function cn(s, d) {
    return lt(this, s).set(s, d), this;
  }
  Z.prototype.clear = on, Z.prototype.delete = rn, Z.prototype.get = an, Z.prototype.has = hn, Z.prototype.set = cn;
  function Q(s) {
    this.__data__ = new B(s);
  }
  function ln() {
    this.__data__ = new B();
  }
  function dn(s) {
    return this.__data__.delete(s);
  }
  function gn(s) {
    return this.__data__.get(s);
  }
  function un(s) {
    return this.__data__.has(s);
  }
  function fn(s, d) {
    var u = this.__data__;
    if (u instanceof B) {
      var y = u.__data__;
      if (!et || y.length < t - 1)
        return y.push([s, d]), this;
      u = this.__data__ = new Z(y);
    }
    return u.set(s, d), this;
  }
  Q.prototype.clear = ln, Q.prototype.delete = dn, Q.prototype.get = gn, Q.prototype.has = un, Q.prototype.set = fn;
  function pn(s, d) {
    var u = Lt(s) || On(s) ? De(s.length, String) : [], y = u.length, I = !!y;
    for (var D in s)
      (d || $.call(s, D)) && !(I && (D == "length" || xn(D, y))) && u.push(D);
    return u;
  }
  function ie(s, d, u) {
    var y = s[d];
    (!($.call(s, d) && ae(y, u)) || u === void 0 && !(d in s)) && (s[d] = u);
  }
  function ct(s, d) {
    for (var u = s.length; u--; )
      if (ae(s[u][0], d))
        return u;
    return -1;
  }
  function Pn(s, d) {
    return s && se(d, At(d), s);
  }
  function bt(s, d, u, y, I, D, x) {
    var C;
    if (y && (C = D ? y(s, I, D, x) : y(s)), C !== void 0)
      return C;
    if (!dt(s))
      return s;
    var le = Lt(s);
    if (le) {
      if (C = Dn(s), !d)
        return _n(s, C);
    } else {
      var N = U(s), de = N == f || N == p;
      if (Bn(s))
        return bn(s, d);
      if (N == P || N == o || de && !D) {
        if (zt(s))
          return D ? s : {};
        if (C = Gn(de ? {} : s), !d)
          return In(s, Pn(C, s));
      } else {
        if (!S[N])
          return D ? s : {};
        C = Cn(s, N, bt, d);
      }
    }
    x || (x = new Q());
    var ge = x.get(s);
    if (ge)
      return ge;
    if (x.set(s, C), !le)
      var ue = u ? kn(s) : At(s);
    return Ie(ue || s, function(St, gt) {
      ue && (gt = St, St = s[gt]), ie(C, gt, bt(St, d, u, y, gt, s, x));
    }), C;
  }
  function mn(s) {
    return dt(s) ? Re(s) : {};
  }
  function yn(s, d, u) {
    var y = d(s);
    return Lt(s) ? y : ke(y, u(s));
  }
  function wn(s) {
    return ht.call(s);
  }
  function vn(s) {
    if (!dt(s) || Hn(s))
      return !1;
    var d = ce(s) || zt(s) ? We : Te;
    return d.test(V(s));
  }
  function Mn(s) {
    if (!re(s))
      return $e(s);
    var d = [];
    for (var u in Object(s))
      $.call(s, u) && u != "constructor" && d.push(u);
    return d;
  }
  function bn(s, d) {
    if (d)
      return s.slice();
    var u = new s.constructor(s.length);
    return s.copy(u), u;
  }
  function Tt(s) {
    var d = new s.constructor(s.byteLength);
    return new Nt(d).set(new Nt(s)), d;
  }
  function Tn(s, d) {
    var u = d ? Tt(s.buffer) : s.buffer;
    return new s.constructor(u, s.byteOffset, s.byteLength);
  }
  function Ln(s, d, u) {
    var y = d ? u(Ut(s), !0) : Ut(s);
    return qt(y, Fe, new s.constructor());
  }
  function An(s) {
    var d = new s.constructor(s.source, be.exec(s));
    return d.lastIndex = s.lastIndex, d;
  }
  function Sn(s, d, u) {
    var y = d ? u(Vt(s), !0) : Vt(s);
    return qt(y, _e, new s.constructor());
  }
  function En(s) {
    return ne ? Object(ne.call(s)) : {};
  }
  function Fn(s, d) {
    var u = d ? Tt(s.buffer) : s.buffer;
    return new s.constructor(u, s.byteOffset, s.length);
  }
  function _n(s, d) {
    var u = -1, y = s.length;
    for (d || (d = Array(y)); ++u < y; )
      d[u] = s[u];
    return d;
  }
  function se(s, d, u, y) {
    u || (u = {});
    for (var I = -1, D = d.length; ++I < D; ) {
      var x = d[I], C = y ? y(u[x], s[x], x, u, s) : void 0;
      ie(u, x, C === void 0 ? s[x] : C);
    }
    return u;
  }
  function In(s, d) {
    return se(s, oe(s), d);
  }
  function kn(s) {
    return yn(s, At, oe);
  }
  function lt(s, d) {
    var u = s.__data__;
    return Wn(d) ? u[typeof d == "string" ? "string" : "hash"] : u.map;
  }
  function J(s, d) {
    var u = Ge(s, d);
    return vn(u) ? u : void 0;
  }
  var oe = te ? Pt(te, Object) : Yn, U = wn;
  (yt && U(new yt(new ArrayBuffer(1))) != _ || et && U(new et()) != m || wt && U(wt.resolve()) != M || vt && U(new vt()) != b || Mt && U(new Mt()) != k) && (U = function(s) {
    var d = ht.call(s), u = d == P ? s.constructor : void 0, y = u ? V(u) : void 0;
    if (y)
      switch (y) {
        case Xe:
          return _;
        case Ye:
          return m;
        case qe:
          return M;
        case ze:
          return b;
        case Ue:
          return k;
      }
    return d;
  });
  function Dn(s) {
    var d = s.length, u = s.constructor(d);
    return d && typeof s[0] == "string" && $.call(s, "index") && (u.index = s.index, u.input = s.input), u;
  }
  function Gn(s) {
    return typeof s.constructor == "function" && !re(s) ? mn(He(s)) : {};
  }
  function Cn(s, d, u, y) {
    var I = s.constructor;
    switch (d) {
      case W:
        return Tt(s);
      case a:
      case c:
        return new I(+s);
      case _:
        return Tn(s, y);
      case q:
      case xt:
      case Wt:
      case Ht:
      case Rt:
      case Ot:
      case jt:
      case Bt:
      case $t:
        return Fn(s, y);
      case m:
        return Ln(s, y, u);
      case v:
      case L:
        return new I(s);
      case T:
        return An(s);
      case b:
        return Sn(s, y, u);
      case F:
        return En(s);
    }
  }
  function xn(s, d) {
    return d = d ?? n, !!d && (typeof s == "number" || Le.test(s)) && s > -1 && s % 1 == 0 && s < d;
  }
  function Wn(s) {
    var d = typeof s;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? s !== "__proto__" : s === null;
  }
  function Hn(s) {
    return !!Kt && Kt in s;
  }
  function re(s) {
    var d = s && s.constructor, u = typeof d == "function" && d.prototype || at;
    return s === u;
  }
  function V(s) {
    if (s != null) {
      try {
        return Zt.call(s);
      } catch {
      }
      try {
        return s + "";
      } catch {
      }
    }
    return "";
  }
  function Rn(s) {
    return bt(s, !0, !0);
  }
  function ae(s, d) {
    return s === d || s !== s && d !== d;
  }
  function On(s) {
    return jn(s) && $.call(s, "callee") && (!Oe.call(s, "callee") || ht.call(s) == o);
  }
  var Lt = Array.isArray;
  function he(s) {
    return s != null && $n(s.length) && !ce(s);
  }
  function jn(s) {
    return Xn(s) && he(s);
  }
  var Bn = Be || qn;
  function ce(s) {
    var d = dt(s) ? ht.call(s) : "";
    return d == f || d == p;
  }
  function $n(s) {
    return typeof s == "number" && s > -1 && s % 1 == 0 && s <= n;
  }
  function dt(s) {
    var d = typeof s;
    return !!s && (d == "object" || d == "function");
  }
  function Xn(s) {
    return !!s && typeof s == "object";
  }
  function At(s) {
    return he(s) ? pn(s) : Mn(s);
  }
  function Yn() {
    return [];
  }
  function qn() {
    return !1;
  }
  h.exports = Rn;
})(ft, ft.exports);
var ei = ft.exports;
const ni = /* @__PURE__ */ ti(ei), Pe = 100, It = 1e-4, E = (h, i) => Math.sqrt((h[0] - i[0]) ** 2 + (h[1] - i[1]) ** 2), pt = (h) => {
  let i = 0;
  return h && Array.isArray(h) && h.length > 0 && h.forEach((t, e) => {
    e < h.length - 1 && (i += E(t, h[e + 1]));
  }), i;
}, R = (h) => pt(h) ** 0.99, O = (h, i) => [(h[0] + i[0]) / 2, (h[1] + i[1]) / 2], ii = (h, i, t) => {
  const e = [(h[0] + i[0]) / 2, (h[1] + i[1]) / 2], n = [e[0] - h[1] + i[1], e[1] + h[0] - i[0]], o = [(h[0] + t[0]) / 2, (h[1] + t[1]) / 2], r = [o[0] - h[1] + t[1], o[1] + h[0] - t[0]];
  return si(e, n, o, r);
}, si = (h, i, t, e) => {
  if (h[1] === i[1]) {
    const l = (e[0] - t[0]) / (e[1] - t[1]) * (h[1] - t[1]) + t[0], f = h[1];
    return [l, f];
  }
  if (t[1] === e[1]) {
    const l = (i[0] - h[0]) / (i[1] - h[1]) * (t[1] - h[1]) + h[0], f = t[1];
    return [l, f];
  }
  const n = (i[0] - h[0]) / (i[1] - h[1]), o = (e[0] - t[0]) / (e[1] - t[1]), r = (n * h[1] - h[0] - o * t[1] + t[0]) / (n - o);
  return [n * r - n * h[1] + h[0], r];
}, K = (h, i) => {
  let t;
  const e = Math.asin(Math.abs(i[1] - h[1]) / E(h, i));
  return i[1] >= h[1] && i[0] >= h[0] ? t = e + Math.PI : i[1] >= h[1] && i[0] < h[0] ? t = Math.PI * 2 - e : i[1] < h[1] && i[0] < h[0] ? t = e : i[1] < h[1] && i[0] >= h[0] && (t = Math.PI - e), t;
}, _t = (h, i, t) => {
  const e = K(i, h) - K(i, t);
  return e < 0 ? e + Math.PI * 2 : e;
}, rt = (h, i, t) => (t[1] - h[1]) * (i[0] - h[0]) > (i[1] - h[1]) * (t[0] - h[0]), oi = (h, i, t, e, n) => {
  h = Math.max(Math.min(h, 1), 0);
  const [o, r] = [1 - h, h * h], a = r * h, c = o * o, l = c * o, f = l * i[0] + 3 * c * h * t[0] + 3 * o * r * e[0] + a * n[0], p = l * i[1] + 3 * c * h * t[1] + 3 * o * r * e[1] + a * n[1];
  return [f, p];
}, w = (h, i, t, e, n) => {
  const o = K(h, i), r = n ? o + t : o - t, a = e * Math.cos(r), c = e * Math.sin(r);
  return [i[0] + a, i[1] + c];
}, ye = (h, i, t, e) => {
  let [n, o, r, a] = [null, null, [], e - t];
  a = a < 0 ? a + Math.PI * 2 : a;
  for (let c = 0; c <= 100; c++) {
    const l = t + a * c / 100;
    n = h[0] + i * Math.cos(l), o = h[1] + i * Math.sin(l), r.push([n, o]);
  }
  return r;
}, kt = (h, i, t, e) => {
  const n = Dt(i, t, e);
  let [o, r, a, c, l] = [null, null, null, null, null];
  const f = Math.sqrt(n[0] * n[0] + n[1] * n[1]), p = n[0] / f, m = n[1] / f, v = E(i, t), P = E(t, e);
  return f > It ? rt(i, t, e) ? (a = h * v, c = t[0] - a * m, l = t[1] + a * p, o = [c, l], a = h * P, c = t[0] + a * m, l = t[1] - a * p, r = [c, l]) : (a = h * v, c = t[0] + a * m, l = t[1] - a * p, o = [c, l], a = h * P, c = t[0] - a * m, l = t[1] + a * p, r = [c, l]) : (c = t[0] + h * (i[0] - t[0]), l = t[1] + h * (i[1] - t[1]), o = [c, l], c = t[0] + h * (e[0] - t[0]), l = t[1] + h * (e[1] - t[1]), r = [c, l]), [o, r];
}, Dt = (h, i, t) => {
  let e = h[0] - i[0], n = h[1] - i[1];
  const o = Math.sqrt(e * e + n * n);
  e /= o, n /= o;
  let r = t[0] - i[0], a = t[1] - i[1];
  const c = Math.sqrt(r * r + a * a);
  r /= c, a /= c;
  const l = e + r, f = n + a;
  return [l, f];
}, ri = (h, i) => {
  let [t, e, n, o, r] = [h[0], h[1], h[2], null, null];
  const c = kt(0, t, e, n)[0], l = Dt(t, e, n);
  if (Math.sqrt(l[0] * l[0] + l[1] * l[1]) > It) {
    const p = O(t, e), m = t[0] - p[0], v = t[1] - p[1], M = 2 / E(t, e), T = -M * v, b = M * m, L = T * T - b * b, F = 2 * T * b, k = b * b - T * T, W = c[0] - p[0], _ = c[1] - p[1];
    o = p[0] + L * W + F * _, r = p[1] + F * W + k * _;
  } else
    o = t[0] + i * (e[0] - t[0]), r = t[1] + i * (e[1] - t[1]);
  return [o, r];
}, ai = (h, i) => {
  const t = h.length, e = h[t - 3], n = h[t - 2], o = h[t - 1], a = kt(0, e, n, o)[1], c = Dt(e, n, o), l = Math.sqrt(c[0] * c[0] + c[1] * c[1]);
  let [f, p] = [null, null];
  if (l > It) {
    const m = O(n, o), v = o[0] - m[0], P = o[1] - m[1], T = 2 / E(n, o), b = -T * P, L = T * v, F = b * b - L * L, k = 2 * b * L, W = L * L - b * b, _ = a[0] - m[0], q = a[1] - m[1];
    f = m[0] + F * _ + k * q, p = m[1] + k * _ + W * q;
  } else
    f = o[0] + i * (n[0] - o[0]), p = o[1] + i * (n[1] - o[1]);
  return [f, p];
}, Gt = (h, i) => {
  const t = ri(i, h);
  let [e, n, o, r, a] = [null, null, null, [t], []];
  for (let l = 0; l < i.length - 2; l++) {
    [e, n, o] = [i[l], i[l + 1], i[l + 2]];
    const f = kt(h, e, n, o);
    r = r.concat(f);
  }
  const c = ai(i, h);
  c && r.push(c);
  for (let l = 0; l < i.length - 1; l++) {
    e = i[l], n = i[l + 1], a.push(e);
    for (let f = 0; f < Pe; f++) {
      const p = oi(f / Pe, e, r[l * 2], r[l * 2 + 1], n);
      a.push(p);
    }
    a.push(n);
  }
  return a;
}, Et = function(h) {
  if (h.length <= 2)
    return h;
  const i = [], t = h.length - 1;
  for (let e = 0; e <= 1; e += 0.01) {
    let [n, o] = [0, 0];
    for (let r = 0; r <= t; r++) {
      const a = hi(t, r), c = e ** r, l = (1 - e) ** (t - r);
      n += a * c * l * h[r][0], o += a * c * l * h[r][1];
    }
    i.push([n, o]);
  }
  return i.push(h[t]), i;
}, Ft = (h) => {
  let i = 1;
  switch (h) {
    case h <= 1:
      i = 1;
      break;
    case h === 2:
      i = 2;
      break;
    case h === 3:
      i = 6;
      break;
    case h === 24:
      i = 24;
      break;
    case h === 5:
      i = 120;
      break;
    default:
      for (let t = 1; t <= h; t++)
        i *= t;
      break;
  }
  return i;
}, hi = (h, i) => Ft(h) / (Ft(i) * Ft(h - i)), Y = (h) => {
  if (h.length <= 2)
    return h;
  const [i, t] = [2, []], e = h.length - i - 1;
  t.push(h[0]);
  for (let n = 0; n <= e; n++)
    for (let o = 0; o <= 1; o += 0.05) {
      let [r, a] = [0, 0];
      for (let c = 0; c <= i; c++) {
        const l = ci(c, o);
        r += l * h[n + c][0], a += l * h[n + c][1];
      }
      t.push([r, a]);
    }
  return t.push(h[h.length - 1]), t;
}, ci = (h, i) => {
  let t = 0;
  return h === 0 ? t = (i - 1) ** 2 / 2 : h === 1 ? t = (-2 * i ** 2 + 2 * i + 1) / 2 : h === 2 && (t = i ** 2 / 2), t;
}, tt = class tt {
  static datumsToVector(i, t) {
    const e = Math.PI / 180, n = t * e, o = i * e;
    var r = Math.cos(o);
    return new X(-Math.cos(n + Math.PI) * r, Math.sin(o), Math.sin(n + Math.PI) * r);
  }
  static vectorScale(i, t = 10) {
    let e = i.clone().normalize();
    return e.multiplyScalar(t), i.add(e), i;
  }
  static fromDegrees(i, t) {
    let e = tt.datumsToVector(i, t);
    return e.multiplyScalar(tt.EARTH_RADIUS_A + 10), e;
  }
  static fromDegreesArray(i) {
    let t = [];
    for (let e = 0; e < i.length; e += 2) {
      let n = tt.fromDegrees(i[e + 1], i[e]);
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
g(tt, "EARTH_RADIUS_A", 6378137);
let A = tt;
class H {
  constructor(i) {
    g(this, "_eventListeners", {});
    // events 事件
    g(this, "_eventListenerNames", [
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
    const c = `${i}-${i === "touch" ? "start" : "down"}`;
    this.on(c, (l, f) => {
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
class G {
  constructor(i, t) {
    g(this, "viewer");
    // 这里的viewer是wegeo对象
    g(this, "eventHandler");
    g(this, "polygonEntity");
    g(this, "geometryPoints", []);
    g(this, "state", "drawing");
    g(this, "controlPoints", []);
    // 控制点
    g(this, "controlPointsEventHandler");
    g(this, "lineEntity");
    g(this, "type");
    g(this, "freehand");
    g(this, "style");
    g(this, "outlineEntity");
    g(this, "eventDispatcher");
    g(this, "dragEventHandler");
    g(this, "entityId");
    g(this, "points", []);
    g(this, "styleCache");
    g(this, "minPointsForShape", 0);
    g(this, "tempLineEntity");
    this.viewer = i, this.type = this.getType(), this.mergeStyle(t), this.cartesianToLnglat = this.cartesianToLnglat.bind(this), this.pixelToCartesian = this.pixelToCartesian.bind(this), this.eventDispatcher = new Nn(), i.trackedEntity = void 0, this.onClick();
  }
  mergeStyle(i) {
    this.style = Object.assign(
      {
        PolygonStyle: new fe({
          color: 255,
          side: Vn,
          transparent: !0,
          opacity: 0.8
        }),
        LineStyle: new Kn({
          color: 16777215,
          linewidth: 2
        })
      },
      i
    ), this.styleCache = ni(this.style);
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
      let e = new it(i, t), n = this.viewer.getModel(i, t)[0].object;
      const o = this.defined(n) && n instanceof st && n.drawed;
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
      let e = new it(i, t);
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
    const i = () => {
      let t = [];
      for (let n = 0; n < this.geometryPoints.length; n++)
        t.push(new it(this.geometryPoints[n].x, this.geometryPoints[n].y));
      let e = new Qn(new Jn(t));
      for (let n = 0; n < this.geometryPoints.length; n++)
        e.attributes.position.array[n * 3 + 0] = this.geometryPoints[n].x, e.attributes.position.array[n * 3 + 1] = this.geometryPoints[n].y, e.attributes.position.array[n * 3 + 2] = this.geometryPoints[n].z;
      return e;
    };
    if (this.polygonEntity)
      this.polygonEntity.geometry = i(), this.outlineEntity && (this.outlineEntity.geometry = new ot().setFromPoints(this.geometryPoints));
    else {
      const t = this.style.PolygonStyle;
      this.polygonEntity = new st(
        i(),
        t
      ), this.polygonEntity.drawed = !0, this.viewer.baseMap.add(this.polygonEntity);
      let e = this.style.LineStyle;
      this.outlineEntity = new pe(
        new ot().setFromPoints(this.geometryPoints),
        e
      ), this.viewer.baseMap.add(this.outlineEntity), this.activeEntity = this.polygonEntity, this.type === "line" && (this.activeEntity = this.lineEntity);
    }
  }
  drawLine() {
    if (this.lineEntity)
      this.lineEntity.geometry = new ot().setFromPoints(this.geometryPoints);
    else {
      const i = this.style.LineStyle;
      this.lineEntity = this.addLineEntity(i);
    }
  }
  addTempLine() {
    if (this.tempLineEntity)
      this.tempLineEntity.geometry = new ot().setFromPoints(this.geometryPoints);
    else {
      const i = this.style.LineStyle;
      this.tempLineEntity = this.addLineEntity(i);
    }
  }
  removeTempLine() {
    this.tempLineEntity && (this.viewer.baseMap.remove(this.tempLineEntity), this.tempLineEntity = void 0);
  }
  addLineEntity(i) {
    const t = new pe(
      new ot().setFromPoints(this.geometryPoints),
      i
    );
    return this.viewer.baseMap.add(t), t;
  }
  cartesianToLnglat(i) {
    const t = A.vectorToDatums(i), e = t.latitude;
    return [t.longitude, e];
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
      let a = new st(new Zn(t, 32, 32), new fe({ color: 16711680 }));
      return a.position.copy(r), a.controlPoint = !0, this.viewer.baseMap.add(a), a;
    });
    let e = !1, n, o;
    this.controlPointsEventHandler = new H(this.viewer.baseMap.canvas), this.controlPointsEventHandler.on("mouse-down-left", (r, a) => {
      new it(r, a);
      const c = this.viewer.getModel(r, a)[0].object;
      if (this.defined(c) && c.controlPoint) {
        for (let l = 0; l < this.controlPoints.length; l++)
          if (c.id === this.controlPoints[l].id) {
            e = !0, n = this.controlPoints[l], o = n.position, n.index = l;
            break;
          }
        this.viewer.baseMap.controls.enableRotate = !1;
      }
    }), this.controlPointsEventHandler.on("mouse-move", (r, a) => {
      if (e && n) {
        let c = new it(r, a);
        const l = this.viewer.getXYZ(c.x, c.y);
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
      if (this.defined(r) && r instanceof st && r.drawed) {
        const a = r.id;
        this.isCurrentEntity(a) && (i = !0, t = o, this.viewer.baseMap.controls.enableRotate = !1);
      }
    }), this.dragEventHandler.on("mouse-move", (e, n) => {
      if (i && t) {
        const o = this.viewer.getXYZ(e, n);
        if (o) {
          const r = o.clone().sub(t), a = this.geometryPoints.map((c) => c.add(r));
          this.points = this.points.map((c) => c.add(r)), this.controlPoints.map((c) => {
            const f = c.position.clone().add(r);
            c.position.copy(f);
          }), this.setGeometryPoints(a), this.minPointsForShape === 4 && (this.curveControlPointLeft = this.curveControlPointLeft.add(r), this.curveControlPointRight = this.curveControlPointRight.add(r)), t = o, this.drawPolygon();
        }
      } else {
        const o = this.viewer.getModel(e, n)[0].object;
        if (this.defined(o) && o instanceof st && o.drawed) {
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
        const c = (o = (n = this.styleCache) == null ? void 0 : n.outlineMaterial) == null ? void 0 : o.alpha;
        this.animateOpacity(this.outlineEntity, c || 1, i, t, void 0, this.state);
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
      let c, l = a.material;
      c = l.opacity;
      let f = 0;
      const p = (m) => {
        f || (f = m);
        const v = m - f;
        if (v < e) {
          const P = v / e * (t - c), M = c + P;
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
        let a = Date.now(), c = 0, l = a;
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
          this.minPointsForShape === 2 ? c = P + 1 : c = P + 2, M = o[c - 1], P == 0 && this.minPointsForShape === 3 && (M = new X().lerpVectors(o[0], o[1], 0.5));
          let T = o[c];
          const b = (m - P * r) / r, L = new X().lerpVectors(M, T, b), F = o.slice(0, c + 1);
          F[F.length - 1] = L;
          const k = this.createGraphic(F);
          this.setGeometryPoints(k), this.drawPolygon(), this.showWithAnimation(0, 0, void 0), requestAnimationFrame(f);
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
        const c = Date.now(), l = c - o;
        if (c - r >= 16.7)
          r = c;
        else {
          requestAnimationFrame(a);
          return;
        }
        if (l >= i) {
          e && e(), o = 0, this.setState("static");
          return;
        }
        const p = new X().lerpVectors(n[0], n[1], 0.5), m = new X().lerpVectors(n[0], p, 0.5), v = new X().lerpVectors(p, n[1], 0.5);
        let P = n[3], M = n[2];
        const T = l / i, b = this.getBezierControlPointforGrowthAnimation();
        let L = [m, b.left, P], F = [v, b.right, M];
        const k = this.getNewPosition(L, T), W = this.getNewPosition(F, T), _ = [...n];
        _[2] = W, _[3] = k;
        const q = this.createGraphic(_);
        this.setGeometryPoints(q), this.drawPolygon(), this.showWithAnimation(0, 0, void 0), requestAnimationFrame(a);
      };
      requestAnimationFrame(a);
    }, t);
  }
  getNewPosition(i, t) {
    i = i.map((o) => this.cartesianToLnglat(o));
    let e = Gt(0.3, i);
    return e = e.map((o) => A.fromDegrees(o[0], o[1])), this.interpolateAlongCurve(e, t);
  }
  interpolateAlongCurve(i, t) {
    const e = i.length - 1, n = Math.floor(t * e), o = t * e - n, r = i[n], a = i[n + 1], c = r.x + (a.x - r.x) * o, l = r.y + (a.y - r.y) * o, f = r.z + (a.z - r.z) * o;
    return new X(c, l, f);
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
    return [new X()];
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
class we extends G {
  constructor(t, e) {
    super(t, e);
    // points: Cartesian3[] = [];
    g(this, "points", []);
    g(this, "arrowLengthScale", 5);
    g(this, "maxArrowLength", 2);
    g(this, "tailWidthFactor");
    g(this, "neckWidthFactor");
    g(this, "headWidthFactor");
    g(this, "headAngle");
    g(this, "neckAngle");
    g(this, "minPointsForShape");
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
    const [e, n] = t.map(this.cartesianToLnglat), o = R([e, n]), r = o * this.tailWidthFactor, a = o * this.neckWidthFactor, c = o * this.headWidthFactor, l = w(n, e, Math.PI / 2, r, !0), f = w(n, e, Math.PI / 2, r, !1), p = w(e, n, this.headAngle, c, !1), m = w(e, n, this.headAngle, c, !0), v = w(e, n, this.neckAngle, a, !1), P = w(e, n, this.neckAngle, a, !0), M = [...l, ...v, ...p, ...n, ...m, ...P, ...f];
    return A.fromDegreesArray(M);
  }
  getPoints() {
    return this.points;
  }
}
class Ct extends G {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
    g(this, "headHeightFactor");
    g(this, "headWidthFactor");
    g(this, "neckHeightFactor");
    g(this, "neckWidthFactor");
    g(this, "headTailFactor");
    g(this, "minPointsForShape");
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
    const e = t.map((F) => this.cartesianToLnglat(F));
    let [n, o] = [e[0], e[1]];
    rt(e[0], e[1], e[2]) && (n = e[1], o = e[0]);
    const a = [O(n, o)].concat(e.slice(2)), c = this.getArrowHeadPoints(a, n, o), [l, f] = [c[0], c[4]], p = E(n, o) / R(a), m = this.getArrowBodyPoints(a, l, f, p), v = m.length;
    let P = [n].concat(m.slice(0, v / 2)), M = [o].concat(m.slice(v / 2, v));
    P = Y(P), M = Y(M);
    const T = P.concat(c, M.reverse()), b = [].concat(...T);
    return A.fromDegreesArray(b);
  }
  getPoints() {
    return this.points;
  }
  getArrowHeadPoints(t, e, n) {
    try {
      let o = R(t), r = o * this.headHeightFactor;
      const a = t[t.length - 1];
      o = E(a, t[t.length - 2]);
      const c = E(e, n);
      r > c * this.headTailFactor && (r = c * this.headTailFactor);
      const l = r * this.headWidthFactor, f = r * this.neckWidthFactor;
      r = r > o ? o : r;
      const p = r * this.neckHeightFactor, m = w(t[t.length - 2], a, 0, r, !0), v = w(t[t.length - 2], a, 0, p, !0), P = w(a, m, Math.PI / 2, l, !1), M = w(a, m, Math.PI / 2, l, !0), T = w(a, v, Math.PI / 2, f, !1), b = w(a, v, Math.PI / 2, f, !0);
      return [T, P, a, M, b];
    } catch (o) {
      console.log(o);
    }
  }
  getArrowBodyPoints(t, e, n, o) {
    const r = pt(t), c = R(t) * o, l = E(e, n), f = (c - l) / 2;
    let [p, m, v] = [0, [], []];
    for (let P = 1; P < t.length - 1; P++) {
      const M = _t(t[P - 1], t[P], t[P + 1]) / 2;
      p += E(t[P - 1], t[P]);
      const T = (c / 2 - p / r * f) / Math.sin(M), b = w(t[P - 1], t[P], Math.PI - M, T, !0), L = w(t[P - 1], t[P], M, T, !1);
      m.push(b), v.push(L);
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
class li extends Ct {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
    g(this, "headHeightFactor");
    g(this, "headWidthFactor");
    g(this, "neckHeightFactor");
    g(this, "neckWidthFactor");
    g(this, "headTailFactor");
    g(this, "tailWidthFactor");
    g(this, "swallowTailFactor");
    g(this, "swallowTailPnt");
    this.headHeightFactor = 0.18, this.headWidthFactor = 0.3, this.neckHeightFactor = 0.85, this.neckWidthFactor = 0.15, this.tailWidthFactor = 0.1, this.headTailFactor = 0.8, this.swallowTailFactor = 1, this.swallowTailPnt = [0, 0], this.minPointsForShape = 3;
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const e = t.map((_) => this.cartesianToLnglat(_));
    let [n, o] = [e[0], e[1]];
    rt(e[0], e[1], e[2]) && (n = e[1], o = e[0]);
    const a = [O(n, o)].concat(e.slice(2)), c = this.getArrowHeadPoints(a, n, o), [l, f] = [c[0], c[4]], p = E(n, o), m = R(a), v = m * this.tailWidthFactor * this.swallowTailFactor;
    this.swallowTailPnt = w(a[1], a[0], 0, v, !0);
    const P = p / m, M = this.getArrowBodyPoints(a, l, f, P), T = M.length;
    let b = [n].concat(M.slice(0, T / 2)), L = [o].concat(M.slice(T / 2, T));
    b = Y(b), L = Y(L);
    const F = b.concat(c, L.reverse(), [this.swallowTailPnt, b[0]]), k = [].concat(...F);
    return A.fromDegreesArray(k);
  }
}
class ve extends Ct {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
    g(this, "headHeightFactor");
    g(this, "headWidthFactor");
    g(this, "neckHeightFactor");
    g(this, "neckWidthFactor");
    g(this, "tailWidthFactor");
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
    const e = t.map((M) => this.cartesianToLnglat(M)), n = this.getTailPoints(e), o = this.getArrowHeadPoints(e, n[0], n[1]), r = o[0], a = o[4], c = this.getArrowBodyPoints(e, r, a, this.tailWidthFactor), l = c.length;
    let f = [n[0]].concat(c.slice(0, l / 2)), p = [n[1]].concat(c.slice(l / 2, l));
    f = Y(f), p = Y(p);
    const m = f.concat(o, p.reverse()), v = [].concat(...m);
    return A.fromDegreesArray(v);
  }
  getTailPoints(t) {
    const n = R(t) * this.tailWidthFactor, o = w(t[1], t[0], Math.PI / 2, n, !1), r = w(t[1], t[0], Math.PI / 2, n, !0);
    return [o, r];
  }
}
class di extends ve {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
    g(this, "headHeightFactor");
    g(this, "headWidthFactor");
    g(this, "neckHeightFactor");
    g(this, "neckWidthFactor");
    g(this, "tailWidthFactor");
    g(this, "swallowTailFactor");
    this.headHeightFactor = 0.18, this.headWidthFactor = 0.3, this.neckHeightFactor = 0.85, this.neckWidthFactor = 0.15, this.tailWidthFactor = 0.1, this.swallowTailFactor = 1, this.minPointsForShape = 2;
  }
  /**
   * Generate geometric shapes based on key points.
   */
  createGraphic(t) {
    const e = t.map((M) => this.cartesianToLnglat(M)), n = this.getTailPoints(e), o = this.getArrowHeadPoints(e, n[0], n[2]), r = o[0], a = o[4], c = this.getArrowBodyPoints(e, r, a, this.tailWidthFactor), l = c.length;
    let f = [n[0]].concat(c.slice(0, l / 2)), p = [n[2]].concat(c.slice(l / 2, l));
    f = Y(f), p = Y(p);
    const m = f.concat(o, p.reverse(), [n[1], f[0]]), v = [].concat(...m);
    return A.fromDegreesArray(v);
  }
  getTailPoints(t) {
    const n = R(t) * this.tailWidthFactor, o = w(t[1], t[0], Math.PI / 2, n, !1), r = w(t[1], t[0], Math.PI / 2, n, !0), a = n * this.swallowTailFactor, c = w(t[1], t[0], 0, a, !0);
    return [o, c, r];
  }
}
class gi extends G {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
    g(this, "arrowLengthScale", 5);
    g(this, "maxArrowLength", 3e6);
    g(this, "minPointsForShape");
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
    let r = E(e, n) / this.arrowLengthScale;
    r = r > this.maxArrowLength ? this.maxArrowLength : r;
    const a = w(e, n, Math.PI / 6, r / 2, !1), c = w(e, n, Math.PI / 6, r / 2, !0), l = [...e, ...n, ...a, ...n, ...c];
    return A.fromDegreesArray(l);
  }
  getPoints() {
    return this.points;
  }
}
class ui extends G {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
    g(this, "arrowLengthScale", 5);
    g(this, "maxArrowLength", 3e6);
    g(this, "t");
    g(this, "minPointsForShape");
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
    let r = E(e, n) / this.arrowLengthScale;
    r = r > this.maxArrowLength ? this.maxArrowLength : r;
    const a = w(e, n, Math.PI / 6, r / 2, !1), c = w(e, n, Math.PI / 6, r / 2, !0), l = [...e, ...n, ...a, ...n, ...c];
    return A.fromDegreesArray(l);
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
    const n = Gt(this.t, e);
    e[e.length - 2];
    const o = e[e.length - 1];
    let a = pt(e) / this.arrowLengthScale;
    a = a > this.maxArrowLength ? this.maxArrowLength : a;
    const c = w(n[n.length - 2], n[n.length - 1], Math.PI / 6, a / 2, !1), l = w(n[n.length - 2], n[n.length - 1], Math.PI / 6, a / 2, !0), p = [...[].concat(...n), ...c, ...o, ...l];
    return A.fromDegreesArray(p);
  }
  getPoints() {
    return this.points;
  }
}
class fi extends we {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
    g(this, "arrowLengthScale", 5);
    g(this, "maxArrowLength", 2);
    g(this, "tailWidthFactor");
    g(this, "neckWidthFactor");
    g(this, "headWidthFactor");
    g(this, "headAngle");
    g(this, "neckAngle");
    g(this, "minPointsForShape");
    this.tailWidthFactor = 0.08, this.neckWidthFactor = 0.1, this.headWidthFactor = 0.13, this.headAngle = Math.PI / 4, this.neckAngle = Math.PI * 0.17741, this.minPointsForShape = 2, this.setState("drawing");
  }
  createGraphic(t) {
    const [e, n] = t.map(this.cartesianToLnglat), o = R([e, n]) * 1.5, r = o * this.tailWidthFactor, a = o * this.neckWidthFactor, c = o * this.headWidthFactor, l = w(n, e, Math.PI / 2, r, !0), f = w(n, e, Math.PI / 2, r, !1), p = w(e, n, this.headAngle, c, !1), m = w(e, n, this.headAngle, c, !0), v = w(e, n, this.neckAngle, a, !1), P = w(e, n, this.neckAngle, a, !0), M = [...l, ...v, ...p, ...n, ...m, ...P, ...f];
    return A.fromDegreesArray(M);
  }
}
class pi extends G {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
    g(this, "arrowLengthScale", 5);
    g(this, "maxArrowLength", 2);
    g(this, "neckWidthFactor");
    g(this, "headWidthFactor");
    g(this, "headHeightFactor");
    g(this, "neckHeightFactor");
    g(this, "connPoint");
    g(this, "tempPoint4");
    g(this, "minPointsForShape");
    g(this, "llBodyPnts", []);
    g(this, "rrBodyPnts", []);
    g(this, "curveControlPointLeft");
    g(this, "curveControlPointRight");
    g(this, "isClockWise");
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
    this.curveControlPointLeft = A.fromDegrees(this.llBodyPnts[2][0], this.llBodyPnts[2][1]), this.curveControlPointRight = A.fromDegrees(this.rrBodyPnts[1][0], this.rrBodyPnts[1][1]), super.finishDrawing();
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
    let c, l;
    this.isClockWise = rt(n, o, r), this.isClockWise ? (c = this.getArrowPoints(n, this.connPoint, this.tempPoint4, !1), l = this.getArrowPoints(this.connPoint, o, r, !0)) : (c = this.getArrowPoints(o, this.connPoint, r, !1), l = this.getArrowPoints(this.connPoint, n, this.tempPoint4, !0));
    const f = c.length, p = (f - 5) / 2, m = c.slice(0, p), v = c.slice(p, p + 5);
    let P = c.slice(p + 5, f);
    this.llBodyPnts = m;
    let M = l.slice(0, p);
    const T = l.slice(p, p + 5), b = l.slice(p + 5, f);
    this.rrBodyPnts = b, M = Et(M);
    const L = Et(b.concat(m.slice(1)));
    P = Et(P);
    const F = M.concat(T, L, v, P), k = [].concat(...F);
    return A.fromDegreesArray(k);
  }
  getTempPoint4(t, e, n) {
    const o = O(t, e), r = E(o, n), a = _t(t, o, n);
    let c = [0, 0], l, f, p;
    return a < Math.PI / 2 ? (l = r * Math.sin(a), f = r * Math.cos(a), p = w(t, o, Math.PI / 2, l, !1), c = w(o, p, Math.PI / 2, f, !0)) : a >= Math.PI / 2 && a < Math.PI ? (l = r * Math.sin(Math.PI - a), f = r * Math.cos(Math.PI - a), p = w(t, o, Math.PI / 2, l, !1), c = w(o, p, Math.PI / 2, f, !1)) : a >= Math.PI && a < Math.PI * 1.5 ? (l = r * Math.sin(a - Math.PI), f = r * Math.cos(a - Math.PI), p = w(t, o, Math.PI / 2, l, !0), c = w(o, p, Math.PI / 2, f, !0)) : (l = r * Math.sin(Math.PI * 2 - a), f = r * Math.cos(Math.PI * 2 - a), p = w(t, o, Math.PI / 2, l, !0), c = w(o, p, Math.PI / 2, f, !1)), c;
  }
  getArrowPoints(t, e, n, o) {
    const r = O(t, e), a = E(r, n);
    let c = w(n, r, 0, a * 0.3, !0), l = w(n, r, 0, a * 0.5, !0);
    c = w(r, c, Math.PI / 2, a / 5, o), l = w(r, l, Math.PI / 2, a / 4, o);
    const f = [r, c, l, n], p = this.getArrowHeadPoints(f);
    if (p && Array.isArray(p) && p.length > 0) {
      const m = p[0], v = p[4], P = E(t, e) / R(f) / 2, M = this.getArrowBodyPoints(f, m, v, P);
      if (M) {
        const T = M.length;
        let b = M.slice(0, T / 2), L = M.slice(T / 2, T);
        return b.push(m), L.push(v), b = b.reverse(), b.push(e), L = L.reverse(), L.push(t), b.reverse().concat(p, L);
      }
    } else
      throw new Error("Interpolation Error");
  }
  getArrowBodyPoints(t, e, n, o) {
    const r = pt(t), c = R(t) * o, l = E(e, n), f = (c - l) / 2;
    let p = 0, m = [], v = [];
    for (let P = 1; P < t.length - 1; P++) {
      const M = _t(t[P - 1], t[P], t[P + 1]) / 2;
      p += E(t[P - 1], t[P]);
      const T = (c / 2 - p / r * f) / Math.sin(M), b = w(t[P - 1], t[P], Math.PI - M, T, !0), L = w(t[P - 1], t[P], M, T, !1);
      m.push(b), v.push(L);
    }
    return m.concat(v);
  }
  getArrowHeadPoints(t) {
    const n = R(t) * this.headHeightFactor, o = t[t.length - 1], r = n * this.headWidthFactor, a = n * this.neckWidthFactor, c = n * this.neckHeightFactor, l = w(t[t.length - 2], o, 0, n, !0), f = w(t[t.length - 2], o, 0, c, !0), p = w(o, l, Math.PI / 2, r, !1), m = w(o, l, Math.PI / 2, r, !0), v = w(o, f, Math.PI / 2, a, !1), P = w(o, f, Math.PI / 2, a, !0);
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
class Pi extends G {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
    g(this, "freehand");
    this.freehand = !0, this.setState("drawing");
  }
  getType() {
    return "line";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    A.vectorScale(t, 10), this.points.push(t), this.points.length < 2 ? this.onMouseMove() : this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    A.vectorScale(t, 10), this.points.push(t), this.setGeometryPoints(this.points), this.drawLine(), this.eventDispatcher.dispatchEvent("drawUpdate", t);
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
class mi extends G {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
    g(this, "freehand");
    this.freehand = !0, this.setState("drawing");
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    A.vectorScale(t, 30), this.points.push(t), this.points.length === 1 ? this.onMouseMove() : this.points.length > 2 && this.finishDrawing();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    A.vectorScale(t, 30), this.points.push(t), this.points.length > 2 && (this.setGeometryPoints(this.points), this.drawPolygon(), this.eventDispatcher.dispatchEvent("drawUpdate", t));
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
class yi extends G {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
    g(this, "arrowLengthScale", 5);
    g(this, "maxArrowLength", 3e6);
    g(this, "t");
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
    const e = t.map((a) => this.cartesianToLnglat(a)), n = Gt(this.t, e), o = [].concat(...n);
    return A.fromDegreesArray(o);
  }
  getPoints() {
    return this.points;
  }
}
class wi extends G {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
    g(this, "freehand");
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
    const e = t.map((m) => this.cartesianToLnglat(m)), n = e[0], o = e[1], r = O(n, o), a = Math.abs((n[0] - o[0]) / 2), c = Math.abs((n[1] - o[1]) / 2), l = this.generatePoints(r, a, c), f = [].concat(...l);
    return A.fromDegreesArray(f);
  }
  generatePoints(t, e, n) {
    let [o, r, a, c] = [null, null, 0, []];
    for (let l = 0; l <= 100; l++)
      a = Math.PI * 2 * l / 100, o = t[0] + e * Math.cos(a), r = t[1] + n * Math.sin(a), c.push([o, r]);
    return c;
  }
  getPoints() {
    return this.points;
  }
}
class vi extends G {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
    g(this, "freehand");
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
      const T = O(e[0], e[1]), b = E(e[0], T), L = w(e[0], T, Math.PI / 2, b, !1);
      e.push(L);
    }
    let [n, o, r, a, c] = [
      e[0],
      e[1],
      e[2],
      void 0,
      void 0
    ];
    const l = ii(n, o, r), f = E(n, l), p = K(n, l), m = K(o, l);
    rt(n, o, r) ? (a = m, c = p) : (a = p, c = m);
    let v = ye(l, f, a, c);
    const P = [].concat(...v);
    return A.fromDegreesArray(P);
  }
  getPoints() {
    return this.points;
  }
}
class Mi extends G {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
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
    return A.fromDegreesArray(o);
  }
  getPoints() {
    return this.points;
  }
}
class bi extends G {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
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
    A.vectorScale(t, 30);
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
class Ti extends G {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
    g(this, "height", 30);
    this.setState("drawing"), this.onDoubleClick();
  }
  getType() {
    return "polygon";
  }
  /**
   * Add points only on click events
   */
  addPoint(t) {
    A.vectorScale(t, 30), this.points.push(t), this.points.length === 1 && this.onMouseMove();
  }
  /**
   * Draw a shape based on mouse movement points during the initial drawing.
   */
  updateMovingPoint(t) {
    A.vectorScale(t, 30);
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
class Li extends G {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
    g(this, "freehand");
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
    const e = t.map((f) => this.cartesianToLnglat(f)), n = e[0], o = e[1], r = E(n, o), a = this.generatePoints(n, r), c = [].concat(...a);
    return A.fromDegreesArray(c);
  }
  generatePoints(t, e) {
    let n, o, r;
    const a = [];
    for (let c = 0; c <= 100; c++)
      r = Math.PI * 2 * c / 100, n = t[0] + e * Math.cos(r), o = t[1] + e * Math.sin(r), a.push([n, o]);
    return a;
  }
  getPoints() {
    return this.points;
  }
}
class Ai extends G {
  constructor(t, e) {
    super(t, e);
    g(this, "points", []);
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
    const e = t.map((v) => this.cartesianToLnglat(v)), [n, o, r] = [e[0], e[1], e[2]], a = E(o, n), c = K(o, n), l = K(r, n), f = ye(n, a, c, l);
    f.push(n, f[0]);
    const p = [].concat(...f);
    return A.fromDegreesArray(p);
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
const me = {
  FineArrow: we,
  AttackArrow: Ct,
  SwallowtailAttackArrow: li,
  SquadCombat: ve,
  SwallowtailSquadCombat: di,
  StraightArrow: gi,
  CurvedArrow: ui,
  AssaultDirection: fi,
  DoubleArrow: pi,
  FreehandLine: Pi,
  FreehandPolygon: mi,
  Curve: yi,
  Ellipse: wi,
  Lune: vi,
  Reactangle: Mi,
  Triangle: bi,
  Polygon: Ti,
  Circle: Li,
  Sector: Ai
};
me.createGeometryFromData = (h, i) => {
  const { type: t, style: e, cartesianPoints: n } = i, o = new me[t](h, e);
  o.points = n;
  const r = o.createGraphic(n);
  return o.setGeometryPoints(r), o.type == "polygon" ? o.drawPolygon() : o.drawLine(), o.finishDrawing(), o.onClick(), o;
};
export {
  me as default
};
//# sourceMappingURL=ThreePlot.js.map
