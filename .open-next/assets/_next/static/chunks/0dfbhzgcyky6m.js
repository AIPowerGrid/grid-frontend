(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  80793,
  (t, e, r) => {
    e.exports = function (t) {
      return null == t;
    };
  },
  5918,
  (t, e, r) => {
    e.exports = t.g && t.g.Object === Object && t.g;
  },
  78974,
  (t, e, r) => {
    var n = t.r(5918),
      o = 'object' == typeof self && self && self.Object === Object && self;
    e.exports = n || o || Function('return this')();
  },
  28042,
  (t, e, r) => {
    e.exports = t.r(78974).Symbol;
  },
  84435,
  (t, e, r) => {
    var n = t.r(28042),
      o = Object.prototype,
      i = o.hasOwnProperty,
      a = o.toString,
      u = n ? n.toStringTag : void 0;
    e.exports = function (t) {
      var e = i.call(t, u),
        r = t[u];
      try {
        t[u] = void 0;
        var n = !0;
      } catch (t) {}
      var o = a.call(t);
      return n && (e ? (t[u] = r) : delete t[u]), o;
    };
  },
  33680,
  (t, e, r) => {
    var n = Object.prototype.toString;
    e.exports = function (t) {
      return n.call(t);
    };
  },
  16907,
  (t, e, r) => {
    var n = t.r(28042),
      o = t.r(84435),
      i = t.r(33680),
      a = n ? n.toStringTag : void 0;
    e.exports = function (t) {
      return null == t
        ? void 0 === t
          ? '[object Undefined]'
          : '[object Null]'
        : a && a in Object(t)
          ? o(t)
          : i(t);
    };
  },
  78524,
  (t, e, r) => {
    e.exports = function (t) {
      var e = typeof t;
      return null != t && ('object' == e || 'function' == e);
    };
  },
  62931,
  (t, e, r) => {
    var n = t.r(16907),
      o = t.r(78524);
    e.exports = function (t) {
      if (!o(t)) return !1;
      var e = n(t);
      return (
        '[object Function]' == e ||
        '[object GeneratorFunction]' == e ||
        '[object AsyncFunction]' == e ||
        '[object Proxy]' == e
      );
    };
  },
  14118,
  (t, e, r) => {
    e.exports = Array.isArray;
  },
  94022,
  (t, e, r) => {
    e.exports = function (t) {
      return null != t && 'object' == typeof t;
    };
  },
  89089,
  (t, e, r) => {
    var n = t.r(16907),
      o = t.r(14118),
      i = t.r(94022);
    e.exports = function (t) {
      return (
        'string' == typeof t || (!o(t) && i(t) && '[object String]' == n(t))
      );
    };
  },
  94331,
  (t, e, r) => {
    var n = t.r(16907),
      o = t.r(94022);
    e.exports = function (t) {
      return 'number' == typeof t || (o(t) && '[object Number]' == n(t));
    };
  },
  72947,
  (t, e, r) => {
    var n = t.r(94331);
    e.exports = function (t) {
      return n(t) && t != +t;
    };
  },
  92558,
  (t, e, r) => {
    var n = t.r(16907),
      o = t.r(94022);
    e.exports = function (t) {
      return 'symbol' == typeof t || (o(t) && '[object Symbol]' == n(t));
    };
  },
  47562,
  (t, e, r) => {
    var n = t.r(14118),
      o = t.r(92558),
      i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      a = /^\w*$/;
    e.exports = function (t, e) {
      if (n(t)) return !1;
      var r = typeof t;
      return (
        !!(
          'number' == r ||
          'symbol' == r ||
          'boolean' == r ||
          null == t ||
          o(t)
        ) ||
        a.test(t) ||
        !i.test(t) ||
        (null != e && t in Object(e))
      );
    };
  },
  18309,
  (t, e, r) => {
    e.exports = t.r(78974)['__core-js_shared__'];
  },
  99822,
  (t, e, r) => {
    var n,
      o = t.r(18309),
      i = (n = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ''))
        ? 'Symbol(src)_1.' + n
        : '';
    e.exports = function (t) {
      return !!i && i in t;
    };
  },
  8829,
  (t, e, r) => {
    var n = Function.prototype.toString;
    e.exports = function (t) {
      if (null != t) {
        try {
          return n.call(t);
        } catch (t) {}
        try {
          return t + '';
        } catch (t) {}
      }
      return '';
    };
  },
  43245,
  (t, e, r) => {
    var n = t.r(62931),
      o = t.r(99822),
      i = t.r(78524),
      a = t.r(8829),
      u = /^\[object .+?Constructor\]$/,
      c = Object.prototype,
      l = Function.prototype.toString,
      s = c.hasOwnProperty,
      f = RegExp(
        '^' +
          l
            .call(s)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      );
    e.exports = function (t) {
      return !(!i(t) || o(t)) && (n(t) ? f : u).test(a(t));
    };
  },
  92117,
  (t, e, r) => {
    e.exports = function (t, e) {
      return null == t ? void 0 : t[e];
    };
  },
  81511,
  (t, e, r) => {
    var n = t.r(43245),
      o = t.r(92117);
    e.exports = function (t, e) {
      var r = o(t, e);
      return n(r) ? r : void 0;
    };
  },
  77902,
  (t, e, r) => {
    e.exports = t.r(81511)(Object, 'create');
  },
  8867,
  (t, e, r) => {
    var n = t.r(77902);
    e.exports = function () {
      (this.__data__ = n ? n(null) : {}), (this.size = 0);
    };
  },
  47265,
  (t, e, r) => {
    e.exports = function (t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= !!e), e;
    };
  },
  50095,
  (t, e, r) => {
    var n = t.r(77902),
      o = Object.prototype.hasOwnProperty;
    e.exports = function (t) {
      var e = this.__data__;
      if (n) {
        var r = e[t];
        return '__lodash_hash_undefined__' === r ? void 0 : r;
      }
      return o.call(e, t) ? e[t] : void 0;
    };
  },
  84942,
  (t, e, r) => {
    var n = t.r(77902),
      o = Object.prototype.hasOwnProperty;
    e.exports = function (t) {
      var e = this.__data__;
      return n ? void 0 !== e[t] : o.call(e, t);
    };
  },
  55558,
  (t, e, r) => {
    var n = t.r(77902);
    e.exports = function (t, e) {
      var r = this.__data__;
      return (
        (this.size += +!this.has(t)),
        (r[t] = n && void 0 === e ? '__lodash_hash_undefined__' : e),
        this
      );
    };
  },
  98435,
  (t, e, r) => {
    var n = t.r(8867),
      o = t.r(47265),
      i = t.r(50095),
      a = t.r(84942),
      u = t.r(55558);
    function c(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (c.prototype.clear = n),
      (c.prototype.delete = o),
      (c.prototype.get = i),
      (c.prototype.has = a),
      (c.prototype.set = u),
      (e.exports = c);
  },
  65776,
  (t, e, r) => {
    e.exports = function () {
      (this.__data__ = []), (this.size = 0);
    };
  },
  43346,
  (t, e, r) => {
    e.exports = function (t, e) {
      return t === e || (t != t && e != e);
    };
  },
  41664,
  (t, e, r) => {
    var n = t.r(43346);
    e.exports = function (t, e) {
      for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
      return -1;
    };
  },
  15386,
  (t, e, r) => {
    var n = t.r(41664),
      o = Array.prototype.splice;
    e.exports = function (t) {
      var e = this.__data__,
        r = n(e, t);
      return (
        !(r < 0) &&
        (r == e.length - 1 ? e.pop() : o.call(e, r, 1), --this.size, !0)
      );
    };
  },
  57624,
  (t, e, r) => {
    var n = t.r(41664);
    e.exports = function (t) {
      var e = this.__data__,
        r = n(e, t);
      return r < 0 ? void 0 : e[r][1];
    };
  },
  19301,
  (t, e, r) => {
    var n = t.r(41664);
    e.exports = function (t) {
      return n(this.__data__, t) > -1;
    };
  },
  82947,
  (t, e, r) => {
    var n = t.r(41664);
    e.exports = function (t, e) {
      var r = this.__data__,
        o = n(r, t);
      return o < 0 ? (++this.size, r.push([t, e])) : (r[o][1] = e), this;
    };
  },
  90543,
  (t, e, r) => {
    var n = t.r(65776),
      o = t.r(15386),
      i = t.r(57624),
      a = t.r(19301),
      u = t.r(82947);
    function c(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (c.prototype.clear = n),
      (c.prototype.delete = o),
      (c.prototype.get = i),
      (c.prototype.has = a),
      (c.prototype.set = u),
      (e.exports = c);
  },
  64138,
  (t, e, r) => {
    e.exports = t.r(81511)(t.r(78974), 'Map');
  },
  17416,
  (t, e, r) => {
    var n = t.r(98435),
      o = t.r(90543),
      i = t.r(64138);
    e.exports = function () {
      (this.size = 0),
        (this.__data__ = {
          hash: new n(),
          map: new (i || o)(),
          string: new n()
        });
    };
  },
  65867,
  (t, e, r) => {
    e.exports = function (t) {
      var e = typeof t;
      return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
        ? '__proto__' !== t
        : null === t;
    };
  },
  76501,
  (t, e, r) => {
    var n = t.r(65867);
    e.exports = function (t, e) {
      var r = t.__data__;
      return n(e) ? r['string' == typeof e ? 'string' : 'hash'] : r.map;
    };
  },
  92520,
  (t, e, r) => {
    var n = t.r(76501);
    e.exports = function (t) {
      var e = n(this, t).delete(t);
      return (this.size -= !!e), e;
    };
  },
  49966,
  (t, e, r) => {
    var n = t.r(76501);
    e.exports = function (t) {
      return n(this, t).get(t);
    };
  },
  49884,
  (t, e, r) => {
    var n = t.r(76501);
    e.exports = function (t) {
      return n(this, t).has(t);
    };
  },
  84711,
  (t, e, r) => {
    var n = t.r(76501);
    e.exports = function (t, e) {
      var r = n(this, t),
        o = r.size;
      return r.set(t, e), (this.size += +(r.size != o)), this;
    };
  },
  58774,
  (t, e, r) => {
    var n = t.r(17416),
      o = t.r(92520),
      i = t.r(49966),
      a = t.r(49884),
      u = t.r(84711);
    function c(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (c.prototype.clear = n),
      (c.prototype.delete = o),
      (c.prototype.get = i),
      (c.prototype.has = a),
      (c.prototype.set = u),
      (e.exports = c);
  },
  28535,
  (t, e, r) => {
    var n = t.r(58774);
    function o(t, e) {
      if ('function' != typeof t || (null != e && 'function' != typeof e))
        throw TypeError('Expected a function');
      var r = function () {
        var n = arguments,
          o = e ? e.apply(this, n) : n[0],
          i = r.cache;
        if (i.has(o)) return i.get(o);
        var a = t.apply(this, n);
        return (r.cache = i.set(o, a) || i), a;
      };
      return (r.cache = new (o.Cache || n)()), r;
    }
    (o.Cache = n), (e.exports = o);
  },
  93613,
  (t, e, r) => {
    var n = t.r(28535);
    e.exports = function (t) {
      var e = n(t, function (t) {
          return 500 === r.size && r.clear(), t;
        }),
        r = e.cache;
      return e;
    };
  },
  37344,
  (t, e, r) => {
    var n = t.r(93613),
      o =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      i = /\\(\\)?/g;
    e.exports = n(function (t) {
      var e = [];
      return (
        46 === t.charCodeAt(0) && e.push(''),
        t.replace(o, function (t, r, n, o) {
          e.push(n ? o.replace(i, '$1') : r || t);
        }),
        e
      );
    });
  },
  39145,
  (t, e, r) => {
    e.exports = function (t, e) {
      for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n; )
        o[r] = e(t[r], r, t);
      return o;
    };
  },
  73021,
  (t, e, r) => {
    var n = t.r(28042),
      o = t.r(39145),
      i = t.r(14118),
      a = t.r(92558),
      u = 1 / 0,
      c = n ? n.prototype : void 0,
      l = c ? c.toString : void 0;
    e.exports = function t(e) {
      if ('string' == typeof e) return e;
      if (i(e)) return o(e, t) + '';
      if (a(e)) return l ? l.call(e) : '';
      var r = e + '';
      return '0' == r && 1 / e == -u ? '-0' : r;
    };
  },
  53050,
  (t, e, r) => {
    var n = t.r(73021);
    e.exports = function (t) {
      return null == t ? '' : n(t);
    };
  },
  6205,
  (t, e, r) => {
    var n = t.r(14118),
      o = t.r(47562),
      i = t.r(37344),
      a = t.r(53050);
    e.exports = function (t, e) {
      return n(t) ? t : o(t, e) ? [t] : i(a(t));
    };
  },
  12232,
  (t, e, r) => {
    var n = t.r(92558),
      o = 1 / 0;
    e.exports = function (t) {
      if ('string' == typeof t || n(t)) return t;
      var e = t + '';
      return '0' == e && 1 / t == -o ? '-0' : e;
    };
  },
  55902,
  (t, e, r) => {
    var n = t.r(6205),
      o = t.r(12232);
    e.exports = function (t, e) {
      e = n(e, t);
      for (var r = 0, i = e.length; null != t && r < i; ) t = t[o(e[r++])];
      return r && r == i ? t : void 0;
    };
  },
  75194,
  (t, e, r) => {
    var n = t.r(55902);
    e.exports = function (t, e, r) {
      var o = null == t ? void 0 : n(t, e);
      return void 0 === o ? r : o;
    };
  },
  80038,
  (t, e, r) => {
    'use strict';
    var n,
      o = Symbol.for('react.element'),
      i = Symbol.for('react.portal'),
      a = Symbol.for('react.fragment'),
      u = Symbol.for('react.strict_mode'),
      c = Symbol.for('react.profiler'),
      l = Symbol.for('react.provider'),
      s = Symbol.for('react.context'),
      f = Symbol.for('react.server_context'),
      p = Symbol.for('react.forward_ref'),
      d = Symbol.for('react.suspense'),
      h = Symbol.for('react.suspense_list'),
      y = Symbol.for('react.memo'),
      v = Symbol.for('react.lazy'),
      m = Symbol.for('react.offscreen');
    function b(t) {
      if ('object' == typeof t && null !== t) {
        var e = t.$$typeof;
        switch (e) {
          case o:
            switch ((t = t.type)) {
              case a:
              case c:
              case u:
              case d:
              case h:
                return t;
              default:
                switch ((t = t && t.$$typeof)) {
                  case f:
                  case s:
                  case p:
                  case v:
                  case y:
                  case l:
                    return t;
                  default:
                    return e;
                }
            }
          case i:
            return e;
        }
      }
    }
    (n = Symbol.for('react.module.reference')),
      (r.ContextConsumer = s),
      (r.ContextProvider = l),
      (r.Element = o),
      (r.ForwardRef = p),
      (r.Fragment = a),
      (r.Lazy = v),
      (r.Memo = y),
      (r.Portal = i),
      (r.Profiler = c),
      (r.StrictMode = u),
      (r.Suspense = d),
      (r.SuspenseList = h),
      (r.isAsyncMode = function () {
        return !1;
      }),
      (r.isConcurrentMode = function () {
        return !1;
      }),
      (r.isContextConsumer = function (t) {
        return b(t) === s;
      }),
      (r.isContextProvider = function (t) {
        return b(t) === l;
      }),
      (r.isElement = function (t) {
        return 'object' == typeof t && null !== t && t.$$typeof === o;
      }),
      (r.isForwardRef = function (t) {
        return b(t) === p;
      }),
      (r.isFragment = function (t) {
        return b(t) === a;
      }),
      (r.isLazy = function (t) {
        return b(t) === v;
      }),
      (r.isMemo = function (t) {
        return b(t) === y;
      }),
      (r.isPortal = function (t) {
        return b(t) === i;
      }),
      (r.isProfiler = function (t) {
        return b(t) === c;
      }),
      (r.isStrictMode = function (t) {
        return b(t) === u;
      }),
      (r.isSuspense = function (t) {
        return b(t) === d;
      }),
      (r.isSuspenseList = function (t) {
        return b(t) === h;
      }),
      (r.isValidElementType = function (t) {
        return (
          'string' == typeof t ||
          'function' == typeof t ||
          t === a ||
          t === c ||
          t === u ||
          t === d ||
          t === h ||
          t === m ||
          ('object' == typeof t &&
            null !== t &&
            (t.$$typeof === v ||
              t.$$typeof === y ||
              t.$$typeof === l ||
              t.$$typeof === s ||
              t.$$typeof === p ||
              t.$$typeof === n ||
              void 0 !== t.getModuleId)) ||
          !1
        );
      }),
      (r.typeOf = b);
  },
  87683,
  (t, e, r) => {
    'use strict';
    e.exports = t.r(80038);
  },
  22319,
  (t, e, r) => {
    var n = t.r(92558);
    e.exports = function (t, e, r) {
      for (var o = -1, i = t.length; ++o < i; ) {
        var a = t[o],
          u = e(a);
        if (null != u && (void 0 === c ? u == u && !n(u) : r(u, c)))
          var c = u,
            l = a;
      }
      return l;
    };
  },
  72274,
  (t, e, r) => {
    e.exports = function (t, e) {
      return t > e;
    };
  },
  40046,
  (t, e, r) => {
    e.exports = function (t) {
      return t;
    };
  },
  57158,
  (t, e, r) => {
    var n = t.r(22319),
      o = t.r(72274),
      i = t.r(40046);
    e.exports = function (t) {
      return t && t.length ? n(t, i, o) : void 0;
    };
  },
  12025,
  (t, e, r) => {
    e.exports = function (t, e) {
      return t < e;
    };
  },
  13002,
  (t, e, r) => {
    var n = t.r(22319),
      o = t.r(12025),
      i = t.r(40046);
    e.exports = function (t) {
      return t && t.length ? n(t, i, o) : void 0;
    };
  },
  5836,
  (t, e, r) => {
    e.exports = function (t, e) {
      for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
      return t;
    };
  },
  38591,
  (t, e, r) => {
    var n = t.r(16907),
      o = t.r(94022);
    e.exports = function (t) {
      return o(t) && '[object Arguments]' == n(t);
    };
  },
  10090,
  (t, e, r) => {
    var n = t.r(38591),
      o = t.r(94022),
      i = Object.prototype,
      a = i.hasOwnProperty,
      u = i.propertyIsEnumerable;
    e.exports = n(
      (function () {
        return arguments;
      })()
    )
      ? n
      : function (t) {
          return o(t) && a.call(t, 'callee') && !u.call(t, 'callee');
        };
  },
  51263,
  (t, e, r) => {
    var n = t.r(28042),
      o = t.r(10090),
      i = t.r(14118),
      a = n ? n.isConcatSpreadable : void 0;
    e.exports = function (t) {
      return i(t) || o(t) || !!(a && t && t[a]);
    };
  },
  1362,
  (t, e, r) => {
    var n = t.r(5836),
      o = t.r(51263);
    e.exports = function t(e, r, i, a, u) {
      var c = -1,
        l = e.length;
      for (i || (i = o), u || (u = []); ++c < l; ) {
        var s = e[c];
        r > 0 && i(s)
          ? r > 1
            ? t(s, r - 1, i, a, u)
            : n(u, s)
          : a || (u[u.length] = s);
      }
      return u;
    };
  },
  36142,
  (t, e, r) => {
    var n = t.r(90543);
    e.exports = function () {
      (this.__data__ = new n()), (this.size = 0);
    };
  },
  8354,
  (t, e, r) => {
    e.exports = function (t) {
      var e = this.__data__,
        r = e.delete(t);
      return (this.size = e.size), r;
    };
  },
  73064,
  (t, e, r) => {
    e.exports = function (t) {
      return this.__data__.get(t);
    };
  },
  92789,
  (t, e, r) => {
    e.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  89160,
  (t, e, r) => {
    var n = t.r(90543),
      o = t.r(64138),
      i = t.r(58774);
    e.exports = function (t, e) {
      var r = this.__data__;
      if (r instanceof n) {
        var a = r.__data__;
        if (!o || a.length < 199)
          return a.push([t, e]), (this.size = ++r.size), this;
        r = this.__data__ = new i(a);
      }
      return r.set(t, e), (this.size = r.size), this;
    };
  },
  11796,
  (t, e, r) => {
    var n = t.r(90543),
      o = t.r(36142),
      i = t.r(8354),
      a = t.r(73064),
      u = t.r(92789),
      c = t.r(89160);
    function l(t) {
      var e = (this.__data__ = new n(t));
      this.size = e.size;
    }
    (l.prototype.clear = o),
      (l.prototype.delete = i),
      (l.prototype.get = a),
      (l.prototype.has = u),
      (l.prototype.set = c),
      (e.exports = l);
  },
  60220,
  (t, e, r) => {
    e.exports = function (t) {
      return this.__data__.set(t, '__lodash_hash_undefined__'), this;
    };
  },
  77783,
  (t, e, r) => {
    e.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  40848,
  (t, e, r) => {
    var n = t.r(58774),
      o = t.r(60220),
      i = t.r(77783);
    function a(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.__data__ = new n(); ++e < r; ) this.add(t[e]);
    }
    (a.prototype.add = a.prototype.push = o),
      (a.prototype.has = i),
      (e.exports = a);
  },
  91739,
  (t, e, r) => {
    e.exports = function (t, e) {
      for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
        if (e(t[r], r, t)) return !0;
      return !1;
    };
  },
  58954,
  (t, e, r) => {
    e.exports = function (t, e) {
      return t.has(e);
    };
  },
  5729,
  (t, e, r) => {
    var n = t.r(40848),
      o = t.r(91739),
      i = t.r(58954);
    e.exports = function (t, e, r, a, u, c) {
      var l = 1 & r,
        s = t.length,
        f = e.length;
      if (s != f && !(l && f > s)) return !1;
      var p = c.get(t),
        d = c.get(e);
      if (p && d) return p == e && d == t;
      var h = -1,
        y = !0,
        v = 2 & r ? new n() : void 0;
      for (c.set(t, e), c.set(e, t); ++h < s; ) {
        var m = t[h],
          b = e[h];
        if (a) var g = l ? a(b, m, h, e, t, c) : a(m, b, h, t, e, c);
        if (void 0 !== g) {
          if (g) continue;
          y = !1;
          break;
        }
        if (v) {
          if (
            !o(e, function (t, e) {
              if (!i(v, e) && (m === t || u(m, t, r, a, c))) return v.push(e);
            })
          ) {
            y = !1;
            break;
          }
        } else if (!(m === b || u(m, b, r, a, c))) {
          y = !1;
          break;
        }
      }
      return c.delete(t), c.delete(e), y;
    };
  },
  39914,
  (t, e, r) => {
    e.exports = t.r(78974).Uint8Array;
  },
  40048,
  (t, e, r) => {
    e.exports = function (t) {
      var e = -1,
        r = Array(t.size);
      return (
        t.forEach(function (t, n) {
          r[++e] = [n, t];
        }),
        r
      );
    };
  },
  11432,
  (t, e, r) => {
    e.exports = function (t) {
      var e = -1,
        r = Array(t.size);
      return (
        t.forEach(function (t) {
          r[++e] = t;
        }),
        r
      );
    };
  },
  31829,
  (t, e, r) => {
    var n = t.r(28042),
      o = t.r(39914),
      i = t.r(43346),
      a = t.r(5729),
      u = t.r(40048),
      c = t.r(11432),
      l = n ? n.prototype : void 0,
      s = l ? l.valueOf : void 0;
    e.exports = function (t, e, r, n, l, f, p) {
      switch (r) {
        case '[object DataView]':
          if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
            break;
          (t = t.buffer), (e = e.buffer);
        case '[object ArrayBuffer]':
          if (t.byteLength != e.byteLength || !f(new o(t), new o(e))) break;
          return !0;
        case '[object Boolean]':
        case '[object Date]':
        case '[object Number]':
          return i(+t, +e);
        case '[object Error]':
          return t.name == e.name && t.message == e.message;
        case '[object RegExp]':
        case '[object String]':
          return t == e + '';
        case '[object Map]':
          var d = u;
        case '[object Set]':
          var h = 1 & n;
          if ((d || (d = c), t.size != e.size && !h)) break;
          var y = p.get(t);
          if (y) return y == e;
          (n |= 2), p.set(t, e);
          var v = a(d(t), d(e), n, l, f, p);
          return p.delete(t), v;
        case '[object Symbol]':
          if (s) return s.call(t) == s.call(e);
      }
      return !1;
    };
  },
  80089,
  (t, e, r) => {
    var n = t.r(5836),
      o = t.r(14118);
    e.exports = function (t, e, r) {
      var i = e(t);
      return o(t) ? i : n(i, r(t));
    };
  },
  94430,
  (t, e, r) => {
    e.exports = function (t, e) {
      for (var r = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++r < n; ) {
        var a = t[r];
        e(a, r, t) && (i[o++] = a);
      }
      return i;
    };
  },
  26452,
  (t, e, r) => {
    e.exports = function () {
      return [];
    };
  },
  41300,
  (t, e, r) => {
    var n = t.r(94430),
      o = t.r(26452),
      i = Object.prototype.propertyIsEnumerable,
      a = Object.getOwnPropertySymbols;
    e.exports = a
      ? function (t) {
          return null == t
            ? []
            : n(a((t = Object(t))), function (e) {
                return i.call(t, e);
              });
        }
      : o;
  },
  55337,
  (t, e, r) => {
    e.exports = function (t, e) {
      for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
      return n;
    };
  },
  56024,
  (t, e, r) => {
    e.exports = function () {
      return !1;
    };
  },
  32816,
  (t, e, r) => {
    var n = t.r(78974),
      o = t.r(56024),
      i = r && !r.nodeType && r,
      a = i && e && !e.nodeType && e,
      u = a && a.exports === i ? n.Buffer : void 0;
    e.exports = (u ? u.isBuffer : void 0) || o;
  },
  60059,
  (t, e, r) => {
    var n = /^(?:0|[1-9]\d*)$/;
    e.exports = function (t, e) {
      var r = typeof t;
      return (
        !!(e = null == e ? 0x1fffffffffffff : e) &&
        ('number' == r || ('symbol' != r && n.test(t))) &&
        t > -1 &&
        t % 1 == 0 &&
        t < e
      );
    };
  },
  84800,
  (t, e, r) => {
    e.exports = function (t) {
      return (
        'number' == typeof t && t > -1 && t % 1 == 0 && t <= 0x1fffffffffffff
      );
    };
  },
  42112,
  (t, e, r) => {
    var n = t.r(16907),
      o = t.r(84800),
      i = t.r(94022),
      a = {};
    (a['[object Float32Array]'] =
      a['[object Float64Array]'] =
      a['[object Int8Array]'] =
      a['[object Int16Array]'] =
      a['[object Int32Array]'] =
      a['[object Uint8Array]'] =
      a['[object Uint8ClampedArray]'] =
      a['[object Uint16Array]'] =
      a['[object Uint32Array]'] =
        !0),
      (a['[object Arguments]'] =
        a['[object Array]'] =
        a['[object ArrayBuffer]'] =
        a['[object Boolean]'] =
        a['[object DataView]'] =
        a['[object Date]'] =
        a['[object Error]'] =
        a['[object Function]'] =
        a['[object Map]'] =
        a['[object Number]'] =
        a['[object Object]'] =
        a['[object RegExp]'] =
        a['[object Set]'] =
        a['[object String]'] =
        a['[object WeakMap]'] =
          !1),
      (e.exports = function (t) {
        return i(t) && o(t.length) && !!a[n(t)];
      });
  },
  85466,
  (t, e, r) => {
    e.exports = function (t) {
      return function (e) {
        return t(e);
      };
    };
  },
  91480,
  (t, e, r) => {
    var n = t.r(5918),
      o = r && !r.nodeType && r,
      i = o && e && !e.nodeType && e,
      a = i && i.exports === o && n.process;
    e.exports = (function () {
      try {
        var t = i && i.require && i.require('util').types;
        if (t) return t;
        return a && a.binding && a.binding('util');
      } catch (t) {}
    })();
  },
  5330,
  (t, e, r) => {
    var n = t.r(42112),
      o = t.r(85466),
      i = t.r(91480),
      a = i && i.isTypedArray;
    e.exports = a ? o(a) : n;
  },
  90091,
  (t, e, r) => {
    var n = t.r(55337),
      o = t.r(10090),
      i = t.r(14118),
      a = t.r(32816),
      u = t.r(60059),
      c = t.r(5330),
      l = Object.prototype.hasOwnProperty;
    e.exports = function (t, e) {
      var r = i(t),
        s = !r && o(t),
        f = !r && !s && a(t),
        p = !r && !s && !f && c(t),
        d = r || s || f || p,
        h = d ? n(t.length, String) : [],
        y = h.length;
      for (var v in t)
        (e || l.call(t, v)) &&
          !(
            d &&
            ('length' == v ||
              (f && ('offset' == v || 'parent' == v)) ||
              (p &&
                ('buffer' == v || 'byteLength' == v || 'byteOffset' == v)) ||
              u(v, y))
          ) &&
          h.push(v);
      return h;
    };
  },
  20092,
  (t, e, r) => {
    var n = Object.prototype;
    e.exports = function (t) {
      var e = t && t.constructor;
      return t === (('function' == typeof e && e.prototype) || n);
    };
  },
  16158,
  (t, e, r) => {
    e.exports = function (t, e) {
      return function (r) {
        return t(e(r));
      };
    };
  },
  94272,
  (t, e, r) => {
    e.exports = t.r(16158)(Object.keys, Object);
  },
  68488,
  (t, e, r) => {
    var n = t.r(20092),
      o = t.r(94272),
      i = Object.prototype.hasOwnProperty;
    e.exports = function (t) {
      if (!n(t)) return o(t);
      var e = [];
      for (var r in Object(t)) i.call(t, r) && 'constructor' != r && e.push(r);
      return e;
    };
  },
  22914,
  (t, e, r) => {
    var n = t.r(62931),
      o = t.r(84800);
    e.exports = function (t) {
      return null != t && o(t.length) && !n(t);
    };
  },
  53349,
  (t, e, r) => {
    var n = t.r(90091),
      o = t.r(68488),
      i = t.r(22914);
    e.exports = function (t) {
      return i(t) ? n(t) : o(t);
    };
  },
  24144,
  (t, e, r) => {
    var n = t.r(80089),
      o = t.r(41300),
      i = t.r(53349);
    e.exports = function (t) {
      return n(t, i, o);
    };
  },
  66457,
  (t, e, r) => {
    var n = t.r(24144),
      o = Object.prototype.hasOwnProperty;
    e.exports = function (t, e, r, i, a, u) {
      var c = 1 & r,
        l = n(t),
        s = l.length;
      if (s != n(e).length && !c) return !1;
      for (var f = s; f--; ) {
        var p = l[f];
        if (!(c ? p in e : o.call(e, p))) return !1;
      }
      var d = u.get(t),
        h = u.get(e);
      if (d && h) return d == e && h == t;
      var y = !0;
      u.set(t, e), u.set(e, t);
      for (var v = c; ++f < s; ) {
        var m = t[(p = l[f])],
          b = e[p];
        if (i) var g = c ? i(b, m, p, e, t, u) : i(m, b, p, t, e, u);
        if (!(void 0 === g ? m === b || a(m, b, r, i, u) : g)) {
          y = !1;
          break;
        }
        v || (v = 'constructor' == p);
      }
      if (y && !v) {
        var x = t.constructor,
          O = e.constructor;
        x != O &&
          'constructor' in t &&
          'constructor' in e &&
          !(
            'function' == typeof x &&
            x instanceof x &&
            'function' == typeof O &&
            O instanceof O
          ) &&
          (y = !1);
      }
      return u.delete(t), u.delete(e), y;
    };
  },
  91654,
  (t, e, r) => {
    e.exports = t.r(81511)(t.r(78974), 'DataView');
  },
  13715,
  (t, e, r) => {
    e.exports = t.r(81511)(t.r(78974), 'Promise');
  },
  92408,
  (t, e, r) => {
    e.exports = t.r(81511)(t.r(78974), 'Set');
  },
  43031,
  (t, e, r) => {
    e.exports = t.r(81511)(t.r(78974), 'WeakMap');
  },
  54700,
  (t, e, r) => {
    var n = t.r(91654),
      o = t.r(64138),
      i = t.r(13715),
      a = t.r(92408),
      u = t.r(43031),
      c = t.r(16907),
      l = t.r(8829),
      s = '[object Map]',
      f = '[object Promise]',
      p = '[object Set]',
      d = '[object WeakMap]',
      h = '[object DataView]',
      y = l(n),
      v = l(o),
      m = l(i),
      b = l(a),
      g = l(u),
      x = c;
    ((n && x(new n(new ArrayBuffer(1))) != h) ||
      (o && x(new o()) != s) ||
      (i && x(i.resolve()) != f) ||
      (a && x(new a()) != p) ||
      (u && x(new u()) != d)) &&
      (x = function (t) {
        var e = c(t),
          r = '[object Object]' == e ? t.constructor : void 0,
          n = r ? l(r) : '';
        if (n)
          switch (n) {
            case y:
              return h;
            case v:
              return s;
            case m:
              return f;
            case b:
              return p;
            case g:
              return d;
          }
        return e;
      }),
      (e.exports = x);
  },
  23684,
  (t, e, r) => {
    var n = t.r(11796),
      o = t.r(5729),
      i = t.r(31829),
      a = t.r(66457),
      u = t.r(54700),
      c = t.r(14118),
      l = t.r(32816),
      s = t.r(5330),
      f = '[object Arguments]',
      p = '[object Array]',
      d = '[object Object]',
      h = Object.prototype.hasOwnProperty;
    e.exports = function (t, e, r, y, v, m) {
      var b = c(t),
        g = c(e),
        x = b ? p : u(t),
        O = g ? p : u(e);
      (x = x == f ? d : x), (O = O == f ? d : O);
      var w = x == d,
        j = O == d,
        S = x == O;
      if (S && l(t)) {
        if (!l(e)) return !1;
        (b = !0), (w = !1);
      }
      if (S && !w)
        return (
          m || (m = new n()),
          b || s(t) ? o(t, e, r, y, v, m) : i(t, e, x, r, y, v, m)
        );
      if (!(1 & r)) {
        var A = w && h.call(t, '__wrapped__'),
          P = j && h.call(e, '__wrapped__');
        if (A || P) {
          var E = A ? t.value() : t,
            k = P ? e.value() : e;
          return m || (m = new n()), v(E, k, r, y, m);
        }
      }
      return !!S && (m || (m = new n()), a(t, e, r, y, v, m));
    };
  },
  96847,
  (t, e, r) => {
    var n = t.r(23684),
      o = t.r(94022);
    e.exports = function t(e, r, i, a, u) {
      return (
        e === r ||
        (null != e && null != r && (o(e) || o(r))
          ? n(e, r, i, a, t, u)
          : e != e && r != r)
      );
    };
  },
  29286,
  (t, e, r) => {
    var n = t.r(11796),
      o = t.r(96847);
    e.exports = function (t, e, r, i) {
      var a = r.length,
        u = a,
        c = !i;
      if (null == t) return !u;
      for (t = Object(t); a--; ) {
        var l = r[a];
        if (c && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
      }
      for (; ++a < u; ) {
        var s = (l = r[a])[0],
          f = t[s],
          p = l[1];
        if (c && l[2]) {
          if (void 0 === f && !(s in t)) return !1;
        } else {
          var d = new n();
          if (i) var h = i(f, p, s, t, e, d);
          if (!(void 0 === h ? o(p, f, 3, i, d) : h)) return !1;
        }
      }
      return !0;
    };
  },
  40286,
  (t, e, r) => {
    var n = t.r(78524);
    e.exports = function (t) {
      return t == t && !n(t);
    };
  },
  45866,
  (t, e, r) => {
    var n = t.r(40286),
      o = t.r(53349);
    e.exports = function (t) {
      for (var e = o(t), r = e.length; r--; ) {
        var i = e[r],
          a = t[i];
        e[r] = [i, a, n(a)];
      }
      return e;
    };
  },
  90457,
  (t, e, r) => {
    e.exports = function (t, e) {
      return function (r) {
        return null != r && r[t] === e && (void 0 !== e || t in Object(r));
      };
    };
  },
  32179,
  (t, e, r) => {
    var n = t.r(29286),
      o = t.r(45866),
      i = t.r(90457);
    e.exports = function (t) {
      var e = o(t);
      return 1 == e.length && e[0][2]
        ? i(e[0][0], e[0][1])
        : function (r) {
            return r === t || n(r, t, e);
          };
    };
  },
  14435,
  (t, e, r) => {
    e.exports = function (t, e) {
      return null != t && e in Object(t);
    };
  },
  32088,
  (t, e, r) => {
    var n = t.r(6205),
      o = t.r(10090),
      i = t.r(14118),
      a = t.r(60059),
      u = t.r(84800),
      c = t.r(12232);
    e.exports = function (t, e, r) {
      e = n(e, t);
      for (var l = -1, s = e.length, f = !1; ++l < s; ) {
        var p = c(e[l]);
        if (!(f = null != t && r(t, p))) break;
        t = t[p];
      }
      return f || ++l != s
        ? f
        : !!(s = null == t ? 0 : t.length) && u(s) && a(p, s) && (i(t) || o(t));
    };
  },
  30272,
  (t, e, r) => {
    var n = t.r(14435),
      o = t.r(32088);
    e.exports = function (t, e) {
      return null != t && o(t, e, n);
    };
  },
  79218,
  (t, e, r) => {
    var n = t.r(96847),
      o = t.r(75194),
      i = t.r(30272),
      a = t.r(47562),
      u = t.r(40286),
      c = t.r(90457),
      l = t.r(12232);
    e.exports = function (t, e) {
      return a(t) && u(e)
        ? c(l(t), e)
        : function (r) {
            var a = o(r, t);
            return void 0 === a && a === e ? i(r, t) : n(e, a, 3);
          };
    };
  },
  43683,
  (t, e, r) => {
    e.exports = function (t) {
      return function (e) {
        return null == e ? void 0 : e[t];
      };
    };
  },
  13419,
  (t, e, r) => {
    var n = t.r(55902);
    e.exports = function (t) {
      return function (e) {
        return n(e, t);
      };
    };
  },
  33230,
  (t, e, r) => {
    var n = t.r(43683),
      o = t.r(13419),
      i = t.r(47562),
      a = t.r(12232);
    e.exports = function (t) {
      return i(t) ? n(a(t)) : o(t);
    };
  },
  60839,
  (t, e, r) => {
    var n = t.r(32179),
      o = t.r(79218),
      i = t.r(40046),
      a = t.r(14118),
      u = t.r(33230);
    e.exports = function (t) {
      return 'function' == typeof t
        ? t
        : null == t
          ? i
          : 'object' == typeof t
            ? a(t)
              ? o(t[0], t[1])
              : n(t)
            : u(t);
    };
  },
  61060,
  (t, e, r) => {
    e.exports = function (t) {
      return function (e, r, n) {
        for (var o = -1, i = Object(e), a = n(e), u = a.length; u--; ) {
          var c = a[t ? u : ++o];
          if (!1 === r(i[c], c, i)) break;
        }
        return e;
      };
    };
  },
  95018,
  (t, e, r) => {
    e.exports = t.r(61060)();
  },
  54798,
  (t, e, r) => {
    var n = t.r(95018),
      o = t.r(53349);
    e.exports = function (t, e) {
      return t && n(t, e, o);
    };
  },
  67366,
  (t, e, r) => {
    var n = t.r(22914);
    e.exports = function (t, e) {
      return function (r, o) {
        if (null == r) return r;
        if (!n(r)) return t(r, o);
        for (
          var i = r.length, a = e ? i : -1, u = Object(r);
          (e ? a-- : ++a < i) && !1 !== o(u[a], a, u);

        );
        return r;
      };
    };
  },
  16110,
  (t, e, r) => {
    var n = t.r(54798);
    e.exports = t.r(67366)(n);
  },
  14846,
  (t, e, r) => {
    var n = t.r(16110),
      o = t.r(22914);
    e.exports = function (t, e) {
      var r = -1,
        i = o(t) ? Array(t.length) : [];
      return (
        n(t, function (t, n, o) {
          i[++r] = e(t, n, o);
        }),
        i
      );
    };
  },
  35642,
  (t, e, r) => {
    var n = t.r(39145),
      o = t.r(60839),
      i = t.r(14846),
      a = t.r(14118);
    e.exports = function (t, e) {
      return (a(t) ? n : i)(t, o(e, 3));
    };
  },
  45734,
  (t, e, r) => {
    var n = t.r(1362),
      o = t.r(35642);
    e.exports = function (t, e) {
      return n(o(t, e), 1);
    };
  },
  80470,
  (t, e, r) => {
    e.exports = function (t, e, r) {
      var n = -1,
        o = t.length;
      e < 0 && (e = -e > o ? 0 : o + e),
        (r = r > o ? o : r) < 0 && (r += o),
        (o = e > r ? 0 : (r - e) >>> 0),
        (e >>>= 0);
      for (var i = Array(o); ++n < o; ) i[n] = t[n + e];
      return i;
    };
  },
  30586,
  (t, e, r) => {
    var n = t.r(80470);
    e.exports = function (t, e, r) {
      var o = t.length;
      return (r = void 0 === r ? o : r), !e && r >= o ? t : n(t, e, r);
    };
  },
  26139,
  (t, e, r) => {
    var n = RegExp(
      '[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]'
    );
    e.exports = function (t) {
      return n.test(t);
    };
  },
  29025,
  (t, e, r) => {
    e.exports = function (t) {
      return t.split('');
    };
  },
  1284,
  (t, e, r) => {
    var n = '\\ud800-\\udfff',
      o = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
      i = '\\ud83c[\\udffb-\\udfff]',
      a = '[^' + n + ']',
      u = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      c = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      l = '(?:' + o + '|' + i + ')?',
      s = '[\\ufe0e\\ufe0f]?',
      f = '(?:\\u200d(?:' + [a, u, c].join('|') + ')' + s + l + ')*',
      p = RegExp(
        i +
          '(?=' +
          i +
          ')|' +
          ('(?:' + [a + o + '?', o, u, c, '[' + n + ']'].join('|')) +
          ')' +
          (s + l + f),
        'g'
      );
    e.exports = function (t) {
      return t.match(p) || [];
    };
  },
  32556,
  (t, e, r) => {
    var n = t.r(29025),
      o = t.r(26139),
      i = t.r(1284);
    e.exports = function (t) {
      return o(t) ? i(t) : n(t);
    };
  },
  96212,
  (t, e, r) => {
    var n = t.r(30586),
      o = t.r(26139),
      i = t.r(32556),
      a = t.r(53050);
    e.exports = function (t) {
      return function (e) {
        var r = o((e = a(e))) ? i(e) : void 0,
          u = r ? r[0] : e.charAt(0),
          c = r ? n(r, 1).join('') : e.slice(1);
        return u[t]() + c;
      };
    };
  },
  54133,
  (t, e, r) => {
    e.exports = t.r(96212)('toUpperCase');
  },
  61642,
  (t, e, r) => {
    var n = t.r(96847);
    e.exports = function (t, e) {
      return n(t, e);
    };
  },
  29478,
  (t, e, r) => {
    e.exports = function (t, e) {
      var r = t.length;
      for (t.sort(e); r--; ) t[r] = t[r].value;
      return t;
    };
  },
  16433,
  (t, e, r) => {
    var n = t.r(92558);
    e.exports = function (t, e) {
      if (t !== e) {
        var r = void 0 !== t,
          o = null === t,
          i = t == t,
          a = n(t),
          u = void 0 !== e,
          c = null === e,
          l = e == e,
          s = n(e);
        if (
          (!c && !s && !a && t > e) ||
          (a && u && l && !c && !s) ||
          (o && u && l) ||
          (!r && l) ||
          !i
        )
          return 1;
        if (
          (!o && !a && !s && t < e) ||
          (s && r && i && !o && !a) ||
          (c && r && i) ||
          (!u && i) ||
          !l
        )
          return -1;
      }
      return 0;
    };
  },
  5008,
  (t, e, r) => {
    var n = t.r(16433);
    e.exports = function (t, e, r) {
      for (
        var o = -1, i = t.criteria, a = e.criteria, u = i.length, c = r.length;
        ++o < u;

      ) {
        var l = n(i[o], a[o]);
        if (l) {
          if (o >= c) return l;
          return l * ('desc' == r[o] ? -1 : 1);
        }
      }
      return t.index - e.index;
    };
  },
  46339,
  (t, e, r) => {
    var n = t.r(39145),
      o = t.r(55902),
      i = t.r(60839),
      a = t.r(14846),
      u = t.r(29478),
      c = t.r(85466),
      l = t.r(5008),
      s = t.r(40046),
      f = t.r(14118);
    e.exports = function (t, e, r) {
      e = e.length
        ? n(e, function (t) {
            return f(t)
              ? function (e) {
                  return o(e, 1 === t.length ? t[0] : t);
                }
              : t;
          })
        : [s];
      var p = -1;
      return (
        (e = n(e, c(i))),
        u(
          a(t, function (t, r, o) {
            return {
              criteria: n(e, function (e) {
                return e(t);
              }),
              index: ++p,
              value: t
            };
          }),
          function (t, e) {
            return l(t, e, r);
          }
        )
      );
    };
  },
  65799,
  (t, e, r) => {
    e.exports = function (t, e, r) {
      switch (r.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, r[0]);
        case 2:
          return t.call(e, r[0], r[1]);
        case 3:
          return t.call(e, r[0], r[1], r[2]);
      }
      return t.apply(e, r);
    };
  },
  37048,
  (t, e, r) => {
    var n = t.r(65799),
      o = Math.max;
    e.exports = function (t, e, r) {
      return (
        (e = o(void 0 === e ? t.length - 1 : e, 0)),
        function () {
          for (
            var i = arguments, a = -1, u = o(i.length - e, 0), c = Array(u);
            ++a < u;

          )
            c[a] = i[e + a];
          a = -1;
          for (var l = Array(e + 1); ++a < e; ) l[a] = i[a];
          return (l[e] = r(c)), n(t, this, l);
        }
      );
    };
  },
  30747,
  (t, e, r) => {
    e.exports = function (t) {
      return function () {
        return t;
      };
    };
  },
  33436,
  (t, e, r) => {
    var n = t.r(81511);
    e.exports = (function () {
      try {
        var t = n(Object, 'defineProperty');
        return t({}, '', {}), t;
      } catch (t) {}
    })();
  },
  17508,
  (t, e, r) => {
    var n = t.r(30747),
      o = t.r(33436),
      i = t.r(40046);
    e.exports = o
      ? function (t, e) {
          return o(t, 'toString', {
            configurable: !0,
            enumerable: !1,
            value: n(e),
            writable: !0
          });
        }
      : i;
  },
  11818,
  (t, e, r) => {
    var n = Date.now;
    e.exports = function (t) {
      var e = 0,
        r = 0;
      return function () {
        var o = n(),
          i = 16 - (o - r);
        if (((r = o), i > 0)) {
          if (++e >= 800) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    };
  },
  8749,
  (t, e, r) => {
    var n = t.r(17508);
    e.exports = t.r(11818)(n);
  },
  6518,
  (t, e, r) => {
    var n = t.r(40046),
      o = t.r(37048),
      i = t.r(8749);
    e.exports = function (t, e) {
      return i(o(t, e, n), t + '');
    };
  },
  52164,
  (t, e, r) => {
    var n = t.r(43346),
      o = t.r(22914),
      i = t.r(60059),
      a = t.r(78524);
    e.exports = function (t, e, r) {
      if (!a(r)) return !1;
      var u = typeof e;
      return (
        ('number' == u
          ? !!(o(r) && i(e, r.length))
          : 'string' == u && e in r) && n(r[e], t)
      );
    };
  },
  4703,
  (t, e, r) => {
    var n = t.r(1362),
      o = t.r(46339),
      i = t.r(6518),
      a = t.r(52164);
    e.exports = i(function (t, e) {
      if (null == t) return [];
      var r = e.length;
      return (
        r > 1 && a(t, e[0], e[1])
          ? (e = [])
          : r > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]),
        o(t, n(e, 1), [])
      );
    });
  },
  60600,
  (t, e, r) => {
    !(function (r) {
      'use strict';
      var n,
        o = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
        },
        i = !0,
        a = '[DecimalError] ',
        u = a + 'Invalid argument: ',
        c = a + 'Exponent out of range: ',
        l = Math.floor,
        s = Math.pow,
        f = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        p = l(1286742750677284.5),
        d = {};
      function h(t, e) {
        var r,
          n,
          o,
          a,
          u,
          c,
          l,
          s,
          f = t.constructor,
          p = f.precision;
        if (!t.s || !e.s) return e.s || (e = new f(t)), i ? S(e, p) : e;
        if (
          ((l = t.d),
          (s = e.d),
          (u = t.e),
          (o = e.e),
          (l = l.slice()),
          (a = u - o))
        ) {
          for (
            a < 0
              ? ((n = l), (a = -a), (c = s.length))
              : ((n = s), (o = u), (c = l.length)),
              a > (c = (u = Math.ceil(p / 7)) > c ? u + 1 : c + 1) &&
                ((a = c), (n.length = 1)),
              n.reverse();
            a--;

          )
            n.push(0);
          n.reverse();
        }
        for (
          (c = l.length) - (a = s.length) < 0 &&
            ((a = c), (n = s), (s = l), (l = n)),
            r = 0;
          a;

        )
          (r = ((l[--a] = l[a] + s[a] + r) / 1e7) | 0), (l[a] %= 1e7);
        for (r && (l.unshift(r), ++o), c = l.length; 0 == l[--c]; ) l.pop();
        return (e.d = l), (e.e = o), i ? S(e, p) : e;
      }
      function y(t, e, r) {
        if (t !== ~~t || t < e || t > r) throw Error(u + t);
      }
      function v(t) {
        var e,
          r,
          n,
          o = t.length - 1,
          i = '',
          a = t[0];
        if (o > 0) {
          for (i += a, e = 1; e < o; e++)
            (r = 7 - (n = t[e] + '').length) && (i += O(r)), (i += n);
          (r = 7 - (n = (a = t[e]) + '').length) && (i += O(r));
        } else if (0 === a) return '0';
        for (; a % 10 == 0; ) a /= 10;
        return i + a;
      }
      (d.absoluteValue = d.abs =
        function () {
          var t = new this.constructor(this);
          return t.s && (t.s = 1), t;
        }),
        (d.comparedTo = d.cmp =
          function (t) {
            var e, r, n, o;
            if (((t = new this.constructor(t)), this.s !== t.s))
              return this.s || -t.s;
            if (this.e !== t.e) return (this.e > t.e) ^ (this.s < 0) ? 1 : -1;
            for (
              e = 0, r = (n = this.d.length) < (o = t.d.length) ? n : o;
              e < r;
              ++e
            )
              if (this.d[e] !== t.d[e])
                return (this.d[e] > t.d[e]) ^ (this.s < 0) ? 1 : -1;
            return n === o ? 0 : (n > o) ^ (this.s < 0) ? 1 : -1;
          }),
        (d.decimalPlaces = d.dp =
          function () {
            var t = this.d.length - 1,
              e = (t - this.e) * 7;
            if ((t = this.d[t])) for (; t % 10 == 0; t /= 10) e--;
            return e < 0 ? 0 : e;
          }),
        (d.dividedBy = d.div =
          function (t) {
            return m(this, new this.constructor(t));
          }),
        (d.dividedToIntegerBy = d.idiv =
          function (t) {
            var e = this.constructor;
            return S(m(this, new e(t), 0, 1), e.precision);
          }),
        (d.equals = d.eq =
          function (t) {
            return !this.cmp(t);
          }),
        (d.exponent = function () {
          return g(this);
        }),
        (d.greaterThan = d.gt =
          function (t) {
            return this.cmp(t) > 0;
          }),
        (d.greaterThanOrEqualTo = d.gte =
          function (t) {
            return this.cmp(t) >= 0;
          }),
        (d.isInteger = d.isint =
          function () {
            return this.e > this.d.length - 2;
          }),
        (d.isNegative = d.isneg =
          function () {
            return this.s < 0;
          }),
        (d.isPositive = d.ispos =
          function () {
            return this.s > 0;
          }),
        (d.isZero = function () {
          return 0 === this.s;
        }),
        (d.lessThan = d.lt =
          function (t) {
            return 0 > this.cmp(t);
          }),
        (d.lessThanOrEqualTo = d.lte =
          function (t) {
            return 1 > this.cmp(t);
          }),
        (d.logarithm = d.log =
          function (t) {
            var e,
              r = this.constructor,
              o = r.precision,
              u = o + 5;
            if (void 0 === t) t = new r(10);
            else if ((t = new r(t)).s < 1 || t.eq(n)) throw Error(a + 'NaN');
            if (this.s < 1) throw Error(a + (this.s ? 'NaN' : '-Infinity'));
            return this.eq(n)
              ? new r(0)
              : ((i = !1), (e = m(w(this, u), w(t, u), u)), (i = !0), S(e, o));
          }),
        (d.minus = d.sub =
          function (t) {
            return (
              (t = new this.constructor(t)),
              this.s == t.s ? A(this, t) : h(this, ((t.s = -t.s), t))
            );
          }),
        (d.modulo = d.mod =
          function (t) {
            var e,
              r = this.constructor,
              n = r.precision;
            if (!(t = new r(t)).s) throw Error(a + 'NaN');
            return this.s
              ? ((i = !1),
                (e = m(this, t, 0, 1).times(t)),
                (i = !0),
                this.minus(e))
              : S(new r(this), n);
          }),
        (d.naturalExponential = d.exp =
          function () {
            return b(this);
          }),
        (d.naturalLogarithm = d.ln =
          function () {
            return w(this);
          }),
        (d.negated = d.neg =
          function () {
            var t = new this.constructor(this);
            return (t.s = -t.s || 0), t;
          }),
        (d.plus = d.add =
          function (t) {
            return (
              (t = new this.constructor(t)),
              this.s == t.s ? h(this, t) : A(this, ((t.s = -t.s), t))
            );
          }),
        (d.precision = d.sd =
          function (t) {
            var e, r, n;
            if (void 0 !== t && !!t !== t && 1 !== t && 0 !== t)
              throw Error(u + t);
            if (
              ((e = g(this) + 1),
              (r = 7 * (n = this.d.length - 1) + 1),
              (n = this.d[n]))
            ) {
              for (; n % 10 == 0; n /= 10) r--;
              for (n = this.d[0]; n >= 10; n /= 10) r++;
            }
            return t && e > r ? e : r;
          }),
        (d.squareRoot = d.sqrt =
          function () {
            var t,
              e,
              r,
              n,
              o,
              u,
              c,
              s = this.constructor;
            if (this.s < 1) {
              if (!this.s) return new s(0);
              throw Error(a + 'NaN');
            }
            for (
              t = g(this),
                i = !1,
                0 == (o = Math.sqrt(+this)) || o == 1 / 0
                  ? (((e = v(this.d)).length + t) % 2 == 0 && (e += '0'),
                    (o = Math.sqrt(e)),
                    (t = l((t + 1) / 2) - (t < 0 || t % 2)),
                    (n = new s(
                      (e =
                        o == 1 / 0
                          ? '5e' + t
                          : (e = o.toExponential()).slice(
                              0,
                              e.indexOf('e') + 1
                            ) + t)
                    )))
                  : (n = new s(o.toString())),
                o = c = (r = s.precision) + 3;
              ;

            )
              if (
                ((n = (u = n).plus(m(this, u, c + 2)).times(0.5)),
                v(u.d).slice(0, c) === (e = v(n.d)).slice(0, c))
              ) {
                if (((e = e.slice(c - 3, c + 1)), o == c && '4999' == e)) {
                  if ((S(u, r + 1, 0), u.times(u).eq(this))) {
                    n = u;
                    break;
                  }
                } else if ('9999' != e) break;
                c += 4;
              }
            return (i = !0), S(n, r);
          }),
        (d.times = d.mul =
          function (t) {
            var e,
              r,
              n,
              o,
              a,
              u,
              c,
              l,
              s,
              f = this.constructor,
              p = this.d,
              d = (t = new f(t)).d;
            if (!this.s || !t.s) return new f(0);
            for (
              t.s *= this.s,
                r = this.e + t.e,
                (l = p.length) < (s = d.length) &&
                  ((a = p), (p = d), (d = a), (u = l), (l = s), (s = u)),
                a = [],
                n = u = l + s;
              n--;

            )
              a.push(0);
            for (n = s; --n >= 0; ) {
              for (e = 0, o = l + n; o > n; )
                (c = a[o] + d[n] * p[o - n - 1] + e),
                  (a[o--] = c % 1e7 | 0),
                  (e = (c / 1e7) | 0);
              a[o] = (a[o] + e) % 1e7 | 0;
            }
            for (; !a[--u]; ) a.pop();
            return (
              e ? ++r : a.shift(),
              (t.d = a),
              (t.e = r),
              i ? S(t, f.precision) : t
            );
          }),
        (d.toDecimalPlaces = d.todp =
          function (t, e) {
            var r = this,
              n = r.constructor;
            return ((r = new n(r)), void 0 === t)
              ? r
              : (y(t, 0, 1e9),
                void 0 === e ? (e = n.rounding) : y(e, 0, 8),
                S(r, t + g(r) + 1, e));
          }),
        (d.toExponential = function (t, e) {
          var r,
            n = this,
            o = n.constructor;
          return (
            void 0 === t
              ? (r = P(n, !0))
              : (y(t, 0, 1e9),
                void 0 === e ? (e = o.rounding) : y(e, 0, 8),
                (r = P((n = S(new o(n), t + 1, e)), !0, t + 1))),
            r
          );
        }),
        (d.toFixed = function (t, e) {
          var r,
            n,
            o = this.constructor;
          return void 0 === t
            ? P(this)
            : (y(t, 0, 1e9),
              void 0 === e ? (e = o.rounding) : y(e, 0, 8),
              (r = P(
                (n = S(new o(this), t + g(this) + 1, e)).abs(),
                !1,
                t + g(n) + 1
              )),
              this.isneg() && !this.isZero() ? '-' + r : r);
        }),
        (d.toInteger = d.toint =
          function () {
            var t = this.constructor;
            return S(new t(this), g(this) + 1, t.rounding);
          }),
        (d.toNumber = function () {
          return +this;
        }),
        (d.toPower = d.pow =
          function (t) {
            var e,
              r,
              o,
              u,
              c,
              s,
              f = this,
              p = f.constructor,
              d = +(t = new p(t));
            if (!t.s) return new p(n);
            if (!(f = new p(f)).s) {
              if (t.s < 1) throw Error(a + 'Infinity');
              return f;
            }
            if (f.eq(n)) return f;
            if (((o = p.precision), t.eq(n))) return S(f, o);
            if (((s = (e = t.e) >= (r = t.d.length - 1)), (c = f.s), s)) {
              if ((r = d < 0 ? -d : d) <= 0x1fffffffffffff) {
                for (
                  u = new p(n), e = Math.ceil(o / 7 + 4), i = !1;
                  r % 2 && E((u = u.times(f)).d, e), 0 !== (r = l(r / 2));

                )
                  E((f = f.times(f)).d, e);
                return (i = !0), t.s < 0 ? new p(n).div(u) : S(u, o);
              }
            } else if (c < 0) throw Error(a + 'NaN');
            return (
              (c = c < 0 && 1 & t.d[Math.max(e, r)] ? -1 : 1),
              (f.s = 1),
              (i = !1),
              (u = t.times(w(f, o + 12))),
              (i = !0),
              ((u = b(u)).s = c),
              u
            );
          }),
        (d.toPrecision = function (t, e) {
          var r,
            n,
            o = this,
            i = o.constructor;
          return (
            void 0 === t
              ? ((r = g(o)), (n = P(o, r <= i.toExpNeg || r >= i.toExpPos)))
              : (y(t, 1, 1e9),
                void 0 === e ? (e = i.rounding) : y(e, 0, 8),
                (r = g((o = S(new i(o), t, e)))),
                (n = P(o, t <= r || r <= i.toExpNeg, t))),
            n
          );
        }),
        (d.toSignificantDigits = d.tosd =
          function (t, e) {
            var r = this.constructor;
            return (
              void 0 === t
                ? ((t = r.precision), (e = r.rounding))
                : (y(t, 1, 1e9), void 0 === e ? (e = r.rounding) : y(e, 0, 8)),
              S(new r(this), t, e)
            );
          }),
        (d.toString =
          d.valueOf =
          d.val =
          d.toJSON =
            function () {
              var t = g(this),
                e = this.constructor;
              return P(this, t <= e.toExpNeg || t >= e.toExpPos);
            });
      var m = (function () {
        function t(t, e) {
          var r,
            n = 0,
            o = t.length;
          for (t = t.slice(); o--; )
            (r = t[o] * e + n), (t[o] = r % 1e7 | 0), (n = (r / 1e7) | 0);
          return n && t.unshift(n), t;
        }
        function e(t, e, r, n) {
          var o, i;
          if (r != n) i = r > n ? 1 : -1;
          else
            for (o = i = 0; o < r; o++)
              if (t[o] != e[o]) {
                i = t[o] > e[o] ? 1 : -1;
                break;
              }
          return i;
        }
        function r(t, e, r) {
          for (var n = 0; r--; )
            (t[r] -= n), (n = +(t[r] < e[r])), (t[r] = 1e7 * n + t[r] - e[r]);
          for (; !t[0] && t.length > 1; ) t.shift();
        }
        return function (n, o, i, u) {
          var c,
            l,
            s,
            f,
            p,
            d,
            h,
            y,
            v,
            m,
            b,
            x,
            O,
            w,
            j,
            A,
            P,
            E,
            k = n.constructor,
            M = n.s == o.s ? 1 : -1,
            T = n.d,
            _ = o.d;
          if (!n.s) return new k(n);
          if (!o.s) throw Error(a + 'Division by zero');
          for (
            s = 0,
              l = n.e - o.e,
              P = _.length,
              j = T.length,
              y = (h = new k(M)).d = [];
            _[s] == (T[s] || 0);

          )
            ++s;
          if (
            (_[s] > (T[s] || 0) && --l,
            (x =
              null == i ? (i = k.precision) : u ? i + (g(n) - g(o)) + 1 : i) <
              0)
          )
            return new k(0);
          if (((x = (x / 7 + 2) | 0), (s = 0), 1 == P))
            for (f = 0, _ = _[0], x++; (s < j || f) && x--; s++)
              (O = 1e7 * f + (T[s] || 0)),
                (y[s] = (O / _) | 0),
                (f = O % _ | 0);
          else {
            for (
              (f = (1e7 / (_[0] + 1)) | 0) > 1 &&
                ((_ = t(_, f)), (T = t(T, f)), (P = _.length), (j = T.length)),
                w = P,
                m = (v = T.slice(0, P)).length;
              m < P;

            )
              v[m++] = 0;
            (E = _.slice()).unshift(0), (A = _[0]), _[1] >= 1e7 / 2 && ++A;
            do
              (f = 0),
                (c = e(_, v, P, m)) < 0
                  ? ((b = v[0]),
                    P != m && (b = 1e7 * b + (v[1] || 0)),
                    (f = (b / A) | 0) > 1
                      ? (f >= 1e7 && (f = 1e7 - 1),
                        (d = (p = t(_, f)).length),
                        (m = v.length),
                        1 == (c = e(p, v, d, m)) &&
                          (f--, r(p, P < d ? E : _, d)))
                      : (0 == f && (c = f = 1), (p = _.slice())),
                    (d = p.length) < m && p.unshift(0),
                    r(v, p, m),
                    -1 == c &&
                      ((m = v.length),
                      (c = e(_, v, P, m)) < 1 && (f++, r(v, P < m ? E : _, m))),
                    (m = v.length))
                  : 0 === c && (f++, (v = [0])),
                (y[s++] = f),
                c && v[0] ? (v[m++] = T[w] || 0) : ((v = [T[w]]), (m = 1));
            while ((w++ < j || void 0 !== v[0]) && x--);
          }
          return y[0] || y.shift(), (h.e = l), S(h, u ? i + g(h) + 1 : i);
        };
      })();
      function b(t, e) {
        var r,
          o,
          a,
          u,
          l,
          f = 0,
          p = 0,
          d = t.constructor,
          h = d.precision;
        if (g(t) > 16) throw Error(c + g(t));
        if (!t.s) return new d(n);
        for (
          null == e ? ((i = !1), (l = h)) : (l = e), u = new d(0.03125);
          t.abs().gte(0.1);

        )
          (t = t.times(u)), (p += 5);
        for (
          l += ((Math.log(s(2, p)) / Math.LN10) * 2 + 5) | 0,
            r = o = a = new d(n),
            d.precision = l;
          ;

        ) {
          if (
            ((o = S(o.times(t), l)),
            (r = r.times(++f)),
            v((u = a.plus(m(o, r, l))).d).slice(0, l) === v(a.d).slice(0, l))
          ) {
            for (; p--; ) a = S(a.times(a), l);
            return (d.precision = h), null == e ? ((i = !0), S(a, h)) : a;
          }
          a = u;
        }
      }
      function g(t) {
        for (var e = 7 * t.e, r = t.d[0]; r >= 10; r /= 10) e++;
        return e;
      }
      function x(t, e, r) {
        if (e > t.LN10.sd())
          throw (
            ((i = !0),
            r && (t.precision = r),
            Error(a + 'LN10 precision limit exceeded'))
          );
        return S(new t(t.LN10), e);
      }
      function O(t) {
        for (var e = ''; t--; ) e += '0';
        return e;
      }
      function w(t, e) {
        var r,
          o,
          u,
          c,
          l,
          s,
          f,
          p,
          d,
          h = 1,
          y = t,
          b = y.d,
          O = y.constructor,
          j = O.precision;
        if (y.s < 1) throw Error(a + (y.s ? 'NaN' : '-Infinity'));
        if (y.eq(n)) return new O(0);
        if ((null == e ? ((i = !1), (p = j)) : (p = e), y.eq(10)))
          return null == e && (i = !0), x(O, p);
        if (
          ((O.precision = p += 10),
          (o = (r = v(b)).charAt(0)),
          !(15e14 > Math.abs((c = g(y)))))
        )
          return (
            (f = x(O, p + 2, j).times(c + '')),
            (y = w(new O(o + '.' + r.slice(1)), p - 10).plus(f)),
            (O.precision = j),
            null == e ? ((i = !0), S(y, j)) : y
          );
        for (; (o < 7 && 1 != o) || (1 == o && r.charAt(1) > 3); )
          (o = (r = v((y = y.times(t)).d)).charAt(0)), h++;
        for (
          c = g(y),
            o > 1
              ? ((y = new O('0.' + r)), c++)
              : (y = new O(o + '.' + r.slice(1))),
            s = l = y = m(y.minus(n), y.plus(n), p),
            d = S(y.times(y), p),
            u = 3;
          ;

        ) {
          if (
            ((l = S(l.times(d), p)),
            v((f = s.plus(m(l, new O(u), p))).d).slice(0, p) ===
              v(s.d).slice(0, p))
          )
            return (
              (s = s.times(2)),
              0 !== c && (s = s.plus(x(O, p + 2, j).times(c + ''))),
              (s = m(s, new O(h), p)),
              (O.precision = j),
              null == e ? ((i = !0), S(s, j)) : s
            );
          (s = f), (u += 2);
        }
      }
      function j(t, e) {
        var r, n, o;
        for (
          (r = e.indexOf('.')) > -1 && (e = e.replace('.', '')),
            (n = e.search(/e/i)) > 0
              ? (r < 0 && (r = n),
                (r += +e.slice(n + 1)),
                (e = e.substring(0, n)))
              : r < 0 && (r = e.length),
            n = 0;
          48 === e.charCodeAt(n);

        )
          ++n;
        for (o = e.length; 48 === e.charCodeAt(o - 1); ) --o;
        if ((e = e.slice(n, o))) {
          if (
            ((o -= n),
            (t.e = l((r = r - n - 1) / 7)),
            (t.d = []),
            (n = (r + 1) % 7),
            r < 0 && (n += 7),
            n < o)
          ) {
            for (n && t.d.push(+e.slice(0, n)), o -= 7; n < o; )
              t.d.push(+e.slice(n, (n += 7)));
            n = 7 - (e = e.slice(n)).length;
          } else n -= o;
          for (; n--; ) e += '0';
          if ((t.d.push(+e), i && (t.e > p || t.e < -p))) throw Error(c + r);
        } else (t.s = 0), (t.e = 0), (t.d = [0]);
        return t;
      }
      function S(t, e, r) {
        var n,
          o,
          a,
          u,
          f,
          d,
          h,
          y,
          v = t.d;
        for (u = 1, a = v[0]; a >= 10; a /= 10) u++;
        if ((n = e - u) < 0) (n += 7), (o = e), (h = v[(y = 0)]);
        else {
          if ((y = Math.ceil((n + 1) / 7)) >= (a = v.length)) return t;
          for (u = 1, h = a = v[y]; a >= 10; a /= 10) u++;
          (n %= 7), (o = n - 7 + u);
        }
        if (
          (void 0 !== r &&
            ((f = (h / (a = s(10, u - o - 1))) % 10 | 0),
            (d = e < 0 || void 0 !== v[y + 1] || h % a),
            (d =
              r < 4
                ? (f || d) && (0 == r || r == (t.s < 0 ? 3 : 2))
                : f > 5 ||
                  (5 == f &&
                    (4 == r ||
                      d ||
                      (6 == r &&
                        (n > 0 ? (o > 0 ? h / s(10, u - o) : 0) : v[y - 1]) %
                          10 &
                          1) ||
                      r == (t.s < 0 ? 8 : 7))))),
          e < 1 || !v[0])
        )
          return (
            d
              ? ((a = g(t)),
                (v.length = 1),
                (e = e - a - 1),
                (v[0] = s(10, (7 - (e % 7)) % 7)),
                (t.e = l(-e / 7) || 0))
              : ((v.length = 1), (v[0] = t.e = t.s = 0)),
            t
          );
        if (
          (0 == n
            ? ((v.length = y), (a = 1), y--)
            : ((v.length = y + 1),
              (a = s(10, 7 - n)),
              (v[y] = o > 0 ? ((h / s(10, u - o)) % s(10, o) | 0) * a : 0)),
          d)
        )
          for (;;)
            if (0 == y) {
              1e7 == (v[0] += a) && ((v[0] = 1), ++t.e);
              break;
            } else {
              if (((v[y] += a), 1e7 != v[y])) break;
              (v[y--] = 0), (a = 1);
            }
        for (n = v.length; 0 === v[--n]; ) v.pop();
        if (i && (t.e > p || t.e < -p)) throw Error(c + g(t));
        return t;
      }
      function A(t, e) {
        var r,
          n,
          o,
          a,
          u,
          c,
          l,
          s,
          f,
          p,
          d = t.constructor,
          h = d.precision;
        if (!t.s || !e.s)
          return e.s ? (e.s = -e.s) : (e = new d(t)), i ? S(e, h) : e;
        if (
          ((l = t.d),
          (p = e.d),
          (n = e.e),
          (s = t.e),
          (l = l.slice()),
          (u = s - n))
        ) {
          for (
            (f = u < 0)
              ? ((r = l), (u = -u), (c = p.length))
              : ((r = p), (n = s), (c = l.length)),
              u > (o = Math.max(Math.ceil(h / 7), c) + 2) &&
                ((u = o), (r.length = 1)),
              r.reverse(),
              o = u;
            o--;

          )
            r.push(0);
          r.reverse();
        } else {
          for (
            (f = (o = l.length) < (c = p.length)) && (c = o), o = 0;
            o < c;
            o++
          )
            if (l[o] != p[o]) {
              f = l[o] < p[o];
              break;
            }
          u = 0;
        }
        for (
          f && ((r = l), (l = p), (p = r), (e.s = -e.s)),
            c = l.length,
            o = p.length - c;
          o > 0;
          --o
        )
          l[c++] = 0;
        for (o = p.length; o > u; ) {
          if (l[--o] < p[o]) {
            for (a = o; a && 0 === l[--a]; ) l[a] = 1e7 - 1;
            --l[a], (l[o] += 1e7);
          }
          l[o] -= p[o];
        }
        for (; 0 === l[--c]; ) l.pop();
        for (; 0 === l[0]; l.shift()) --n;
        return l[0] ? ((e.d = l), (e.e = n), i ? S(e, h) : e) : new d(0);
      }
      function P(t, e, r) {
        var n,
          o = g(t),
          i = v(t.d),
          a = i.length;
        return (
          e
            ? (r && (n = r - a) > 0
                ? (i = i.charAt(0) + '.' + i.slice(1) + O(n))
                : a > 1 && (i = i.charAt(0) + '.' + i.slice(1)),
              (i = i + (o < 0 ? 'e' : 'e+') + o))
            : o < 0
              ? ((i = '0.' + O(-o - 1) + i),
                r && (n = r - a) > 0 && (i += O(n)))
              : o >= a
                ? ((i += O(o + 1 - a)),
                  r && (n = r - o - 1) > 0 && (i = i + '.' + O(n)))
                : ((n = o + 1) < a && (i = i.slice(0, n) + '.' + i.slice(n)),
                  r &&
                    (n = r - a) > 0 &&
                    (o + 1 === a && (i += '.'), (i += O(n)))),
          t.s < 0 ? '-' + i : i
        );
      }
      function E(t, e) {
        if (t.length > e) return (t.length = e), !0;
      }
      function k(t) {
        if (!t || 'object' != typeof t) throw Error(a + 'Object expected');
        var e,
          r,
          n,
          o = [
            'precision',
            1,
            1e9,
            'rounding',
            0,
            8,
            'toExpNeg',
            -1 / 0,
            0,
            'toExpPos',
            0,
            1 / 0
          ];
        for (e = 0; e < o.length; e += 3)
          if (void 0 !== (n = t[(r = o[e])]))
            if (l(n) === n && n >= o[e + 1] && n <= o[e + 2]) this[r] = n;
            else throw Error(u + r + ': ' + n);
        if (void 0 !== (n = t[(r = 'LN10')]))
          if (n == Math.LN10) this[r] = new this(n);
          else throw Error(u + r + ': ' + n);
        return this;
      }
      if (
        (((o = (function t(e) {
          var r, n, o;
          function i(t) {
            if (!(this instanceof i)) return new i(t);
            if (((this.constructor = i), t instanceof i)) {
              (this.s = t.s),
                (this.e = t.e),
                (this.d = (t = t.d) ? t.slice() : t);
              return;
            }
            if ('number' == typeof t) {
              if (0 * t != 0) throw Error(u + t);
              if (t > 0) this.s = 1;
              else if (t < 0) (t = -t), (this.s = -1);
              else {
                (this.s = 0), (this.e = 0), (this.d = [0]);
                return;
              }
              if (t === ~~t && t < 1e7) {
                (this.e = 0), (this.d = [t]);
                return;
              }
              return j(this, t.toString());
            }
            if ('string' != typeof t) throw Error(u + t);
            if (
              (45 === t.charCodeAt(0)
                ? ((t = t.slice(1)), (this.s = -1))
                : (this.s = 1),
              f.test(t))
            )
              j(this, t);
            else throw Error(u + t);
          }
          if (
            ((i.prototype = d),
            (i.ROUND_UP = 0),
            (i.ROUND_DOWN = 1),
            (i.ROUND_CEIL = 2),
            (i.ROUND_FLOOR = 3),
            (i.ROUND_HALF_UP = 4),
            (i.ROUND_HALF_DOWN = 5),
            (i.ROUND_HALF_EVEN = 6),
            (i.ROUND_HALF_CEIL = 7),
            (i.ROUND_HALF_FLOOR = 8),
            (i.clone = t),
            (i.config = i.set = k),
            void 0 === e && (e = {}),
            e)
          )
            for (
              r = 0,
                o = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'];
              r < o.length;

            )
              e.hasOwnProperty((n = o[r++])) || (e[n] = this[n]);
          return i.config(e), i;
        })(o)).default = o.Decimal =
          o),
        (n = new o(1)),
        'function' == typeof define && define.amd)
      ) {
        let e;
        t.r, void 0 !== (e = o) && t.v(e);
      } else
        e.exports
          ? (e.exports = o)
          : (r ||
              (r =
                'u' > typeof self && self && self.self == self
                  ? self
                  : Function('return this')()),
            (r.Decimal = o));
    })(t.e);
  },
  53269,
  (t, e, r) => {
    e.exports = function (t, e, r, n) {
      for (var o = t.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
        if (e(t[i], i, t)) return i;
      return -1;
    };
  },
  54849,
  (t, e, r) => {
    e.exports = function (t) {
      return t != t;
    };
  },
  93170,
  (t, e, r) => {
    e.exports = function (t, e, r) {
      for (var n = r - 1, o = t.length; ++n < o; ) if (t[n] === e) return n;
      return -1;
    };
  },
  25863,
  (t, e, r) => {
    var n = t.r(53269),
      o = t.r(54849),
      i = t.r(93170);
    e.exports = function (t, e, r) {
      return e == e ? i(t, e, r) : n(t, o, r);
    };
  },
  84058,
  (t, e, r) => {
    var n = t.r(25863);
    e.exports = function (t, e) {
      return !!(null == t ? 0 : t.length) && n(t, e, 0) > -1;
    };
  },
  15282,
  (t, e, r) => {
    e.exports = function (t, e, r) {
      for (var n = -1, o = null == t ? 0 : t.length; ++n < o; )
        if (r(e, t[n])) return !0;
      return !1;
    };
  },
  35673,
  (t, e, r) => {
    e.exports = function () {};
  },
  42027,
  (t, e, r) => {
    var n = t.r(92408),
      o = t.r(35673),
      i = t.r(11432);
    e.exports =
      n && 1 / i(new n([, -0]))[1] == 1 / 0
        ? function (t) {
            return new n(t);
          }
        : o;
  },
  8347,
  (t, e, r) => {
    var n = t.r(40848),
      o = t.r(84058),
      i = t.r(15282),
      a = t.r(58954),
      u = t.r(42027),
      c = t.r(11432);
    e.exports = function (t, e, r) {
      var l = -1,
        s = o,
        f = t.length,
        p = !0,
        d = [],
        h = d;
      if (r) (p = !1), (s = i);
      else if (f >= 200) {
        var y = e ? null : u(t);
        if (y) return c(y);
        (p = !1), (s = a), (h = new n());
      } else h = e ? [] : d;
      t: for (; ++l < f; ) {
        var v = t[l],
          m = e ? e(v) : v;
        if (((v = r || 0 !== v ? v : 0), p && m == m)) {
          for (var b = h.length; b--; ) if (h[b] === m) continue t;
          e && h.push(m), d.push(v);
        } else s(h, m, r) || (h !== d && h.push(m), d.push(v));
      }
      return d;
    };
  },
  30736,
  (t, e, r) => {
    var n = t.r(60839),
      o = t.r(8347);
    e.exports = function (t, e) {
      return t && t.length ? o(t, n(e, 2)) : [];
    };
  },
  92234,
  (t, e, r) => {
    e.exports = function (t) {
      var e = null == t ? 0 : t.length;
      return e ? t[e - 1] : void 0;
    };
  },
  23073,
  (t, e, r) => {
    e.exports = t.r(16158)(Object.getPrototypeOf, Object);
  },
  2844,
  (t, e, r) => {
    var n = t.r(16907),
      o = t.r(23073),
      i = t.r(94022),
      a = Object.prototype,
      u = Function.prototype.toString,
      c = a.hasOwnProperty,
      l = u.call(Object);
    e.exports = function (t) {
      if (!i(t) || '[object Object]' != n(t)) return !1;
      var e = o(t);
      if (null === e) return !0;
      var r = c.call(e, 'constructor') && e.constructor;
      return 'function' == typeof r && r instanceof r && u.call(r) == l;
    };
  },
  2690,
  (t, e, r) => {
    var n = t.r(16907),
      o = t.r(94022);
    e.exports = function (t) {
      return !0 === t || !1 === t || (o(t) && '[object Boolean]' == n(t));
    };
  },
  14048,
  (t, e, r) => {
    var n = Math.ceil,
      o = Math.max;
    e.exports = function (t, e, r, i) {
      for (var a = -1, u = o(n((e - t) / (r || 1)), 0), c = Array(u); u--; )
        (c[i ? u : ++a] = t), (t += r);
      return c;
    };
  },
  60205,
  (t, e, r) => {
    var n = /\s/;
    e.exports = function (t) {
      for (var e = t.length; e-- && n.test(t.charAt(e)); );
      return e;
    };
  },
  98430,
  (t, e, r) => {
    var n = t.r(60205),
      o = /^\s+/;
    e.exports = function (t) {
      return t ? t.slice(0, n(t) + 1).replace(o, '') : t;
    };
  },
  68922,
  (t, e, r) => {
    var n = t.r(98430),
      o = t.r(78524),
      i = t.r(92558),
      a = 0 / 0,
      u = /^[-+]0x[0-9a-f]+$/i,
      c = /^0b[01]+$/i,
      l = /^0o[0-7]+$/i,
      s = parseInt;
    e.exports = function (t) {
      if ('number' == typeof t) return t;
      if (i(t)) return a;
      if (o(t)) {
        var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
        t = o(e) ? e + '' : e;
      }
      if ('string' != typeof t) return 0 === t ? t : +t;
      t = n(t);
      var r = c.test(t);
      return r || l.test(t) ? s(t.slice(2), r ? 2 : 8) : u.test(t) ? a : +t;
    };
  },
  82437,
  (t, e, r) => {
    var n = t.r(68922),
      o = 1 / 0;
    e.exports = function (t) {
      return t
        ? (t = n(t)) === o || t === -o
          ? (t < 0 ? -1 : 1) * 17976931348623157e292
          : t == t
            ? t
            : 0
        : 0 === t
          ? t
          : 0;
    };
  },
  20550,
  (t, e, r) => {
    var n = t.r(14048),
      o = t.r(52164),
      i = t.r(82437);
    e.exports = function (t) {
      return function (e, r, a) {
        return (
          a && 'number' != typeof a && o(e, r, a) && (r = a = void 0),
          (e = i(e)),
          void 0 === r ? ((r = e), (e = 0)) : (r = i(r)),
          (a = void 0 === a ? (e < r ? 1 : -1) : i(a)),
          n(e, r, a, t)
        );
      };
    };
  },
  20404,
  (t, e, r) => {
    e.exports = t.r(20550)();
  },
  64564,
  (t, e, r) => {
    var n = t.r(78974);
    e.exports = function () {
      return n.Date.now();
    };
  },
  87331,
  (t, e, r) => {
    var n = t.r(78524),
      o = t.r(64564),
      i = t.r(68922),
      a = Math.max,
      u = Math.min;
    e.exports = function (t, e, r) {
      var c,
        l,
        s,
        f,
        p,
        d,
        h = 0,
        y = !1,
        v = !1,
        m = !0;
      if ('function' != typeof t) throw TypeError('Expected a function');
      function b(e) {
        var r = c,
          n = l;
        return (c = l = void 0), (h = e), (f = t.apply(n, r));
      }
      function g(t) {
        var r = t - d,
          n = t - h;
        return void 0 === d || r >= e || r < 0 || (v && n >= s);
      }
      function x() {
        var t,
          r,
          n,
          i = o();
        if (g(i)) return O(i);
        p = setTimeout(
          x,
          ((t = i - d), (r = i - h), (n = e - t), v ? u(n, s - r) : n)
        );
      }
      function O(t) {
        return ((p = void 0), m && c) ? b(t) : ((c = l = void 0), f);
      }
      function w() {
        var t,
          r = o(),
          n = g(r);
        if (((c = arguments), (l = this), (d = r), n)) {
          if (void 0 === p)
            return (h = t = d), (p = setTimeout(x, e)), y ? b(t) : f;
          if (v) return clearTimeout(p), (p = setTimeout(x, e)), b(d);
        }
        return void 0 === p && (p = setTimeout(x, e)), f;
      }
      return (
        (e = i(e) || 0),
        n(r) &&
          ((y = !!r.leading),
          (s = (v = 'maxWait' in r) ? a(i(r.maxWait) || 0, e) : s),
          (m = 'trailing' in r ? !!r.trailing : m)),
        (w.cancel = function () {
          void 0 !== p && clearTimeout(p), (h = 0), (c = d = l = p = void 0);
        }),
        (w.flush = function () {
          return void 0 === p ? f : O(o());
        }),
        w
      );
    };
  },
  48250,
  (t, e, r) => {
    var n = t.r(87331),
      o = t.r(78524);
    e.exports = function (t, e, r) {
      var i = !0,
        a = !0;
      if ('function' != typeof t) throw TypeError('Expected a function');
      return (
        o(r) &&
          ((i = 'leading' in r ? !!r.leading : i),
          (a = 'trailing' in r ? !!r.trailing : a)),
        n(t, e, { leading: i, maxWait: e, trailing: a })
      );
    };
  },
  6016,
  (t, e, r) => {
    var n = t.r(33436);
    e.exports = function (t, e, r) {
      '__proto__' == e && n
        ? n(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (t[e] = r);
    };
  },
  26223,
  (t, e, r) => {
    var n = t.r(6016),
      o = t.r(54798),
      i = t.r(60839);
    e.exports = function (t, e) {
      var r = {};
      return (
        (e = i(e, 3)),
        o(t, function (t, o, i) {
          n(r, o, e(t, o, i));
        }),
        r
      );
    };
  },
  44832,
  (t, e, r) => {
    e.exports = function (t, e) {
      for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
        if (!e(t[r], r, t)) return !1;
      return !0;
    };
  },
  73976,
  (t, e, r) => {
    var n = t.r(16110);
    e.exports = function (t, e) {
      var r = !0;
      return (
        n(t, function (t, n, o) {
          return (r = !!e(t, n, o));
        }),
        r
      );
    };
  },
  69189,
  (t, e, r) => {
    var n = t.r(44832),
      o = t.r(73976),
      i = t.r(60839),
      a = t.r(14118),
      u = t.r(52164);
    e.exports = function (t, e, r) {
      var c = a(t) ? n : o;
      return r && u(t, e, r) && (e = void 0), c(t, i(e, 3));
    };
  },
  90141,
  (t, e, r) => {
    var n = t.r(16110);
    e.exports = function (t, e) {
      var r;
      return (
        n(t, function (t, n, o) {
          return !(r = e(t, n, o));
        }),
        !!r
      );
    };
  },
  50225,
  (t, e, r) => {
    var n = t.r(91739),
      o = t.r(60839),
      i = t.r(90141),
      a = t.r(14118),
      u = t.r(52164);
    e.exports = function (t, e, r) {
      var c = a(t) ? n : i;
      return r && u(t, e, r) && (e = void 0), c(t, o(e, 3));
    };
  },
  43982,
  (t, e, r) => {
    var n = t.r(60839),
      o = t.r(22914),
      i = t.r(53349);
    e.exports = function (t) {
      return function (e, r, a) {
        var u = Object(e);
        if (!o(e)) {
          var c = n(r, 3);
          (e = i(e)),
            (r = function (t) {
              return c(u[t], t, u);
            });
        }
        var l = t(e, r, a);
        return l > -1 ? u[c ? e[l] : l] : void 0;
      };
    };
  },
  16379,
  (t, e, r) => {
    var n = t.r(82437);
    e.exports = function (t) {
      var e = n(t),
        r = e % 1;
      return e == e ? (r ? e - r : e) : 0;
    };
  },
  38281,
  (t, e, r) => {
    var n = t.r(53269),
      o = t.r(60839),
      i = t.r(16379),
      a = Math.max;
    e.exports = function (t, e, r) {
      var u = null == t ? 0 : t.length;
      if (!u) return -1;
      var c = null == r ? 0 : i(r);
      return c < 0 && (c = a(u + c, 0)), n(t, o(e, 3), c);
    };
  },
  84023,
  (t, e, r) => {
    e.exports = t.r(43982)(t.r(38281));
  },
  10482,
  (t, e, r) => {
    'use strict';
    var n = Object.prototype.hasOwnProperty,
      o = '~';
    function i() {}
    function a(t, e, r) {
      (this.fn = t), (this.context = e), (this.once = r || !1);
    }
    function u(t, e, r, n, i) {
      if ('function' != typeof r)
        throw TypeError('The listener must be a function');
      var u = new a(r, n || t, i),
        c = o ? o + e : e;
      return (
        t._events[c]
          ? t._events[c].fn
            ? (t._events[c] = [t._events[c], u])
            : t._events[c].push(u)
          : ((t._events[c] = u), t._eventsCount++),
        t
      );
    }
    function c(t, e) {
      0 == --t._eventsCount ? (t._events = new i()) : delete t._events[e];
    }
    function l() {
      (this._events = new i()), (this._eventsCount = 0);
    }
    Object.create &&
      ((i.prototype = Object.create(null)), new i().__proto__ || (o = !1)),
      (l.prototype.eventNames = function () {
        var t,
          e,
          r = [];
        if (0 === this._eventsCount) return r;
        for (e in (t = this._events))
          n.call(t, e) && r.push(o ? e.slice(1) : e);
        return Object.getOwnPropertySymbols
          ? r.concat(Object.getOwnPropertySymbols(t))
          : r;
      }),
      (l.prototype.listeners = function (t) {
        var e = o ? o + t : t,
          r = this._events[e];
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var n = 0, i = r.length, a = Array(i); n < i; n++) a[n] = r[n].fn;
        return a;
      }),
      (l.prototype.listenerCount = function (t) {
        var e = o ? o + t : t,
          r = this._events[e];
        return r ? (r.fn ? 1 : r.length) : 0;
      }),
      (l.prototype.emit = function (t, e, r, n, i, a) {
        var u = o ? o + t : t;
        if (!this._events[u]) return !1;
        var c,
          l,
          s = this._events[u],
          f = arguments.length;
        if (s.fn) {
          switch ((s.once && this.removeListener(t, s.fn, void 0, !0), f)) {
            case 1:
              return s.fn.call(s.context), !0;
            case 2:
              return s.fn.call(s.context, e), !0;
            case 3:
              return s.fn.call(s.context, e, r), !0;
            case 4:
              return s.fn.call(s.context, e, r, n), !0;
            case 5:
              return s.fn.call(s.context, e, r, n, i), !0;
            case 6:
              return s.fn.call(s.context, e, r, n, i, a), !0;
          }
          for (l = 1, c = Array(f - 1); l < f; l++) c[l - 1] = arguments[l];
          s.fn.apply(s.context, c);
        } else {
          var p,
            d = s.length;
          for (l = 0; l < d; l++)
            switch (
              (s[l].once && this.removeListener(t, s[l].fn, void 0, !0), f)
            ) {
              case 1:
                s[l].fn.call(s[l].context);
                break;
              case 2:
                s[l].fn.call(s[l].context, e);
                break;
              case 3:
                s[l].fn.call(s[l].context, e, r);
                break;
              case 4:
                s[l].fn.call(s[l].context, e, r, n);
                break;
              default:
                if (!c)
                  for (p = 1, c = Array(f - 1); p < f; p++)
                    c[p - 1] = arguments[p];
                s[l].fn.apply(s[l].context, c);
            }
        }
        return !0;
      }),
      (l.prototype.on = function (t, e, r) {
        return u(this, t, e, r, !1);
      }),
      (l.prototype.once = function (t, e, r) {
        return u(this, t, e, r, !0);
      }),
      (l.prototype.removeListener = function (t, e, r, n) {
        var i = o ? o + t : t;
        if (!this._events[i]) return this;
        if (!e) return c(this, i), this;
        var a = this._events[i];
        if (a.fn)
          a.fn !== e || (n && !a.once) || (r && a.context !== r) || c(this, i);
        else {
          for (var u = 0, l = [], s = a.length; u < s; u++)
            (a[u].fn !== e || (n && !a[u].once) || (r && a[u].context !== r)) &&
              l.push(a[u]);
          l.length ? (this._events[i] = 1 === l.length ? l[0] : l) : c(this, i);
        }
        return this;
      }),
      (l.prototype.removeAllListeners = function (t) {
        var e;
        return (
          t
            ? ((e = o ? o + t : t), this._events[e] && c(this, e))
            : ((this._events = new i()), (this._eventsCount = 0)),
          this
        );
      }),
      (l.prototype.off = l.prototype.removeListener),
      (l.prototype.addListener = l.prototype.on),
      (l.prefixed = o),
      (l.EventEmitter = l),
      (e.exports = l);
  },
  13581,
  (t, e, r) => {
    var n = t.r(22319),
      o = t.r(72274),
      i = t.r(60839);
    e.exports = function (t, e) {
      return t && t.length ? n(t, i(e, 2), o) : void 0;
    };
  },
  24161,
  (t, e, r) => {
    var n = t.r(22319),
      o = t.r(60839),
      i = t.r(12025);
    e.exports = function (t, e) {
      return t && t.length ? n(t, o(e, 2), i) : void 0;
    };
  },
  998,
  (t) => {
    'use strict';
    var e,
      r,
      n,
      o,
      i,
      a,
      u,
      c,
      l,
      s,
      f,
      p,
      d,
      h,
      y,
      v,
      m,
      b,
      g,
      x,
      O,
      w,
      j,
      S,
      A = t.i(29971),
      P = t.i(22034),
      E = t.i(78218),
      k = t.i(80793),
      M = t.i(62931),
      T = t.i(78524),
      _ = t.i(7284),
      C = t.i(89089),
      I = t.i(72947),
      D = t.i(75194),
      N = t.i(94331),
      R = function (t) {
        return 0 === t ? 0 : t > 0 ? 1 : -1;
      },
      B = function (t) {
        return (0, C.default)(t) && t.indexOf('%') === t.length - 1;
      },
      L = function (t) {
        return (0, N.default)(t) && !(0, I.default)(t);
      },
      U = function (t) {
        return L(t) || (0, C.default)(t);
      },
      $ = 0,
      z = function (t) {
        var e = ++$;
        return ''.concat(t || '').concat(e);
      },
      F = function (t, e) {
        var r,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!L(t) && !(0, C.default)(t)) return n;
        if (B(t)) {
          var i = t.indexOf('%');
          r = (e * parseFloat(t.slice(0, i))) / 100;
        } else r = +t;
        return (0, I.default)(r) && (r = n), o && r > e && (r = e), r;
      },
      q = function (t) {
        if (!t) return null;
        var e = Object.keys(t);
        return e && e.length ? t[e[0]] : null;
      },
      W = function (t) {
        if (!Array.isArray(t)) return !1;
        for (var e = t.length, r = {}, n = 0; n < e; n++)
          if (r[t[n]]) return !0;
          else r[t[n]] = !0;
        return !1;
      },
      X = function (t, e) {
        return L(t) && L(e)
          ? function (r) {
              return t + r * (e - t);
            }
          : function () {
              return e;
            };
      };
    function H(t, e, r) {
      return t && t.length
        ? t.find(function (t) {
            return (
              t && ('function' == typeof e ? e(t) : (0, D.default)(t, e)) === r
            );
          })
        : null;
    }
    var V = {
        isSsr: !(
          'u' > typeof window &&
          window.document &&
          window.document.createElement &&
          window.setTimeout
        ),
        get: function (t) {
          return V[t];
        },
        set: function (t, e) {
          if ('string' == typeof t) V[t] = e;
          else {
            var r = Object.keys(t);
            r &&
              r.length &&
              r.forEach(function (e) {
                V[e] = t[e];
              });
          }
        }
      },
      K = t.i(87683);
    function G(t, e) {
      for (var r in t)
        if (
          {}.hasOwnProperty.call(t, r) &&
          (!{}.hasOwnProperty.call(e, r) || t[r] !== e[r])
        )
          return !1;
      for (var n in e)
        if ({}.hasOwnProperty.call(e, n) && !{}.hasOwnProperty.call(t, n))
          return !1;
      return !0;
    }
    function Y(t) {
      return (Y =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    var Z = [
        'aria-activedescendant',
        'aria-atomic',
        'aria-autocomplete',
        'aria-busy',
        'aria-checked',
        'aria-colcount',
        'aria-colindex',
        'aria-colspan',
        'aria-controls',
        'aria-current',
        'aria-describedby',
        'aria-details',
        'aria-disabled',
        'aria-errormessage',
        'aria-expanded',
        'aria-flowto',
        'aria-haspopup',
        'aria-hidden',
        'aria-invalid',
        'aria-keyshortcuts',
        'aria-label',
        'aria-labelledby',
        'aria-level',
        'aria-live',
        'aria-modal',
        'aria-multiline',
        'aria-multiselectable',
        'aria-orientation',
        'aria-owns',
        'aria-placeholder',
        'aria-posinset',
        'aria-pressed',
        'aria-readonly',
        'aria-relevant',
        'aria-required',
        'aria-roledescription',
        'aria-rowcount',
        'aria-rowindex',
        'aria-rowspan',
        'aria-selected',
        'aria-setsize',
        'aria-sort',
        'aria-valuemax',
        'aria-valuemin',
        'aria-valuenow',
        'aria-valuetext',
        'className',
        'color',
        'height',
        'id',
        'lang',
        'max',
        'media',
        'method',
        'min',
        'name',
        'style',
        'target',
        'width',
        'role',
        'tabIndex',
        'accentHeight',
        'accumulate',
        'additive',
        'alignmentBaseline',
        'allowReorder',
        'alphabetic',
        'amplitude',
        'arabicForm',
        'ascent',
        'attributeName',
        'attributeType',
        'autoReverse',
        'azimuth',
        'baseFrequency',
        'baselineShift',
        'baseProfile',
        'bbox',
        'begin',
        'bias',
        'by',
        'calcMode',
        'capHeight',
        'clip',
        'clipPath',
        'clipPathUnits',
        'clipRule',
        'colorInterpolation',
        'colorInterpolationFilters',
        'colorProfile',
        'colorRendering',
        'contentScriptType',
        'contentStyleType',
        'cursor',
        'cx',
        'cy',
        'd',
        'decelerate',
        'descent',
        'diffuseConstant',
        'direction',
        'display',
        'divisor',
        'dominantBaseline',
        'dur',
        'dx',
        'dy',
        'edgeMode',
        'elevation',
        'enableBackground',
        'end',
        'exponent',
        'externalResourcesRequired',
        'fill',
        'fillOpacity',
        'fillRule',
        'filter',
        'filterRes',
        'filterUnits',
        'floodColor',
        'floodOpacity',
        'focusable',
        'fontFamily',
        'fontSize',
        'fontSizeAdjust',
        'fontStretch',
        'fontStyle',
        'fontVariant',
        'fontWeight',
        'format',
        'from',
        'fx',
        'fy',
        'g1',
        'g2',
        'glyphName',
        'glyphOrientationHorizontal',
        'glyphOrientationVertical',
        'glyphRef',
        'gradientTransform',
        'gradientUnits',
        'hanging',
        'horizAdvX',
        'horizOriginX',
        'href',
        'ideographic',
        'imageRendering',
        'in2',
        'in',
        'intercept',
        'k1',
        'k2',
        'k3',
        'k4',
        'k',
        'kernelMatrix',
        'kernelUnitLength',
        'kerning',
        'keyPoints',
        'keySplines',
        'keyTimes',
        'lengthAdjust',
        'letterSpacing',
        'lightingColor',
        'limitingConeAngle',
        'local',
        'markerEnd',
        'markerHeight',
        'markerMid',
        'markerStart',
        'markerUnits',
        'markerWidth',
        'mask',
        'maskContentUnits',
        'maskUnits',
        'mathematical',
        'mode',
        'numOctaves',
        'offset',
        'opacity',
        'operator',
        'order',
        'orient',
        'orientation',
        'origin',
        'overflow',
        'overlinePosition',
        'overlineThickness',
        'paintOrder',
        'panose1',
        'pathLength',
        'patternContentUnits',
        'patternTransform',
        'patternUnits',
        'pointerEvents',
        'pointsAtX',
        'pointsAtY',
        'pointsAtZ',
        'preserveAlpha',
        'preserveAspectRatio',
        'primitiveUnits',
        'r',
        'radius',
        'refX',
        'refY',
        'renderingIntent',
        'repeatCount',
        'repeatDur',
        'requiredExtensions',
        'requiredFeatures',
        'restart',
        'result',
        'rotate',
        'rx',
        'ry',
        'seed',
        'shapeRendering',
        'slope',
        'spacing',
        'specularConstant',
        'specularExponent',
        'speed',
        'spreadMethod',
        'startOffset',
        'stdDeviation',
        'stemh',
        'stemv',
        'stitchTiles',
        'stopColor',
        'stopOpacity',
        'strikethroughPosition',
        'strikethroughThickness',
        'string',
        'stroke',
        'strokeDasharray',
        'strokeDashoffset',
        'strokeLinecap',
        'strokeLinejoin',
        'strokeMiterlimit',
        'strokeOpacity',
        'strokeWidth',
        'surfaceScale',
        'systemLanguage',
        'tableValues',
        'targetX',
        'targetY',
        'textAnchor',
        'textDecoration',
        'textLength',
        'textRendering',
        'to',
        'transform',
        'u1',
        'u2',
        'underlinePosition',
        'underlineThickness',
        'unicode',
        'unicodeBidi',
        'unicodeRange',
        'unitsPerEm',
        'vAlphabetic',
        'values',
        'vectorEffect',
        'version',
        'vertAdvY',
        'vertOriginX',
        'vertOriginY',
        'vHanging',
        'vIdeographic',
        'viewTarget',
        'visibility',
        'vMathematical',
        'widths',
        'wordSpacing',
        'writingMode',
        'x1',
        'x2',
        'x',
        'xChannelSelector',
        'xHeight',
        'xlinkActuate',
        'xlinkArcrole',
        'xlinkHref',
        'xlinkRole',
        'xlinkShow',
        'xlinkTitle',
        'xlinkType',
        'xmlBase',
        'xmlLang',
        'xmlns',
        'xmlnsXlink',
        'xmlSpace',
        'y1',
        'y2',
        'y',
        'yChannelSelector',
        'z',
        'zoomAndPan',
        'ref',
        'key',
        'angle'
      ],
      J = ['points', 'pathLength'],
      Q = { svg: ['viewBox', 'children'], polygon: J, polyline: J },
      tt = [
        'dangerouslySetInnerHTML',
        'onCopy',
        'onCopyCapture',
        'onCut',
        'onCutCapture',
        'onPaste',
        'onPasteCapture',
        'onCompositionEnd',
        'onCompositionEndCapture',
        'onCompositionStart',
        'onCompositionStartCapture',
        'onCompositionUpdate',
        'onCompositionUpdateCapture',
        'onFocus',
        'onFocusCapture',
        'onBlur',
        'onBlurCapture',
        'onChange',
        'onChangeCapture',
        'onBeforeInput',
        'onBeforeInputCapture',
        'onInput',
        'onInputCapture',
        'onReset',
        'onResetCapture',
        'onSubmit',
        'onSubmitCapture',
        'onInvalid',
        'onInvalidCapture',
        'onLoad',
        'onLoadCapture',
        'onError',
        'onErrorCapture',
        'onKeyDown',
        'onKeyDownCapture',
        'onKeyPress',
        'onKeyPressCapture',
        'onKeyUp',
        'onKeyUpCapture',
        'onAbort',
        'onAbortCapture',
        'onCanPlay',
        'onCanPlayCapture',
        'onCanPlayThrough',
        'onCanPlayThroughCapture',
        'onDurationChange',
        'onDurationChangeCapture',
        'onEmptied',
        'onEmptiedCapture',
        'onEncrypted',
        'onEncryptedCapture',
        'onEnded',
        'onEndedCapture',
        'onLoadedData',
        'onLoadedDataCapture',
        'onLoadedMetadata',
        'onLoadedMetadataCapture',
        'onLoadStart',
        'onLoadStartCapture',
        'onPause',
        'onPauseCapture',
        'onPlay',
        'onPlayCapture',
        'onPlaying',
        'onPlayingCapture',
        'onProgress',
        'onProgressCapture',
        'onRateChange',
        'onRateChangeCapture',
        'onSeeked',
        'onSeekedCapture',
        'onSeeking',
        'onSeekingCapture',
        'onStalled',
        'onStalledCapture',
        'onSuspend',
        'onSuspendCapture',
        'onTimeUpdate',
        'onTimeUpdateCapture',
        'onVolumeChange',
        'onVolumeChangeCapture',
        'onWaiting',
        'onWaitingCapture',
        'onAuxClick',
        'onAuxClickCapture',
        'onClick',
        'onClickCapture',
        'onContextMenu',
        'onContextMenuCapture',
        'onDoubleClick',
        'onDoubleClickCapture',
        'onDrag',
        'onDragCapture',
        'onDragEnd',
        'onDragEndCapture',
        'onDragEnter',
        'onDragEnterCapture',
        'onDragExit',
        'onDragExitCapture',
        'onDragLeave',
        'onDragLeaveCapture',
        'onDragOver',
        'onDragOverCapture',
        'onDragStart',
        'onDragStartCapture',
        'onDrop',
        'onDropCapture',
        'onMouseDown',
        'onMouseDownCapture',
        'onMouseEnter',
        'onMouseLeave',
        'onMouseMove',
        'onMouseMoveCapture',
        'onMouseOut',
        'onMouseOutCapture',
        'onMouseOver',
        'onMouseOverCapture',
        'onMouseUp',
        'onMouseUpCapture',
        'onSelect',
        'onSelectCapture',
        'onTouchCancel',
        'onTouchCancelCapture',
        'onTouchEnd',
        'onTouchEndCapture',
        'onTouchMove',
        'onTouchMoveCapture',
        'onTouchStart',
        'onTouchStartCapture',
        'onPointerDown',
        'onPointerDownCapture',
        'onPointerMove',
        'onPointerMoveCapture',
        'onPointerUp',
        'onPointerUpCapture',
        'onPointerCancel',
        'onPointerCancelCapture',
        'onPointerEnter',
        'onPointerEnterCapture',
        'onPointerLeave',
        'onPointerLeaveCapture',
        'onPointerOver',
        'onPointerOverCapture',
        'onPointerOut',
        'onPointerOutCapture',
        'onGotPointerCapture',
        'onGotPointerCaptureCapture',
        'onLostPointerCapture',
        'onLostPointerCaptureCapture',
        'onScroll',
        'onScrollCapture',
        'onWheel',
        'onWheelCapture',
        'onAnimationStart',
        'onAnimationStartCapture',
        'onAnimationEnd',
        'onAnimationEndCapture',
        'onAnimationIteration',
        'onAnimationIterationCapture',
        'onTransitionEnd',
        'onTransitionEndCapture'
      ],
      te = function (t, e) {
        if (!t || 'function' == typeof t || 'boolean' == typeof t) return null;
        var r = t;
        if (((0, P.isValidElement)(t) && (r = t.props), !(0, T.default)(r)))
          return null;
        var n = {};
        return (
          Object.keys(r).forEach(function (t) {
            tt.includes(t) &&
              (n[t] =
                e ||
                function (e) {
                  return r[t](r, e);
                });
          }),
          n
        );
      },
      tr = function (t, e, r) {
        if (!(0, T.default)(t) || 'object' !== Y(t)) return null;
        var n = null;
        return (
          Object.keys(t).forEach(function (o) {
            var i = t[o];
            tt.includes(o) &&
              'function' == typeof i &&
              (n || (n = {}),
              (n[o] = function (t) {
                return i(e, r, t), null;
              }));
          }),
          n
        );
      },
      tn = ['children'],
      to = ['children'];
    function ti(t, e) {
      if (null == t) return {};
      var r,
        n,
        o = (function (t, e) {
          if (null == t) return {};
          var r = {};
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              if (e.indexOf(n) >= 0) continue;
              r[n] = t[n];
            }
          return r;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++)
          (r = i[n]),
            !(e.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, r) &&
              (o[r] = t[r]);
      }
      return o;
    }
    var ta = {
        click: 'onClick',
        mousedown: 'onMouseDown',
        mouseup: 'onMouseUp',
        mouseover: 'onMouseOver',
        mousemove: 'onMouseMove',
        mouseout: 'onMouseOut',
        mouseenter: 'onMouseEnter',
        mouseleave: 'onMouseLeave',
        touchcancel: 'onTouchCancel',
        touchend: 'onTouchEnd',
        touchmove: 'onTouchMove',
        touchstart: 'onTouchStart',
        contextmenu: 'onContextMenu',
        dblclick: 'onDoubleClick'
      },
      tu = function (t) {
        return 'string' == typeof t
          ? t
          : t
            ? t.displayName || t.name || 'Component'
            : '';
      },
      tc = null,
      tl = null,
      ts = function t(e) {
        if (e === tc && Array.isArray(tl)) return tl;
        var r = [];
        return (
          P.Children.forEach(e, function (e) {
            (0, k.default)(e) ||
              ((0, K.isFragment)(e)
                ? (r = r.concat(t(e.props.children)))
                : r.push(e));
          }),
          (tl = r),
          (tc = e),
          r
        );
      };
    function tf(t, e) {
      var r = [],
        n = [];
      return (
        (n = Array.isArray(e)
          ? e.map(function (t) {
              return tu(t);
            })
          : [tu(e)]),
        ts(t).forEach(function (t) {
          var e =
            (0, D.default)(t, 'type.displayName') ||
            (0, D.default)(t, 'type.name');
          -1 !== n.indexOf(e) && r.push(t);
        }),
        r
      );
    }
    function tp(t, e) {
      var r = tf(t, e);
      return r && r[0];
    }
    var td = function (t) {
        if (!t || !t.props) return !1;
        var e = t.props,
          r = e.width,
          n = e.height;
        return !!L(r) && !(r <= 0) && !!L(n) && !(n <= 0);
      },
      th = [
        'a',
        'altGlyph',
        'altGlyphDef',
        'altGlyphItem',
        'animate',
        'animateColor',
        'animateMotion',
        'animateTransform',
        'circle',
        'clipPath',
        'color-profile',
        'cursor',
        'defs',
        'desc',
        'ellipse',
        'feBlend',
        'feColormatrix',
        'feComponentTransfer',
        'feComposite',
        'feConvolveMatrix',
        'feDiffuseLighting',
        'feDisplacementMap',
        'feDistantLight',
        'feFlood',
        'feFuncA',
        'feFuncB',
        'feFuncG',
        'feFuncR',
        'feGaussianBlur',
        'feImage',
        'feMerge',
        'feMergeNode',
        'feMorphology',
        'feOffset',
        'fePointLight',
        'feSpecularLighting',
        'feSpotLight',
        'feTile',
        'feTurbulence',
        'filter',
        'font',
        'font-face',
        'font-face-format',
        'font-face-name',
        'font-face-url',
        'foreignObject',
        'g',
        'glyph',
        'glyphRef',
        'hkern',
        'image',
        'line',
        'lineGradient',
        'marker',
        'mask',
        'metadata',
        'missing-glyph',
        'mpath',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'script',
        'set',
        'stop',
        'style',
        'svg',
        'switch',
        'symbol',
        'text',
        'textPath',
        'title',
        'tref',
        'tspan',
        'use',
        'view',
        'vkern'
      ],
      ty = function (t, e, r, n) {
        var o,
          i = null != (o = null == Q ? void 0 : Q[n]) ? o : [];
        return (
          e.startsWith('data-') ||
          (!(0, M.default)(t) && ((n && i.includes(e)) || Z.includes(e))) ||
          (r && tt.includes(e))
        );
      },
      tv = function (t, e, r) {
        if (!t || 'function' == typeof t || 'boolean' == typeof t) return null;
        var n = t;
        if (((0, P.isValidElement)(t) && (n = t.props), !(0, T.default)(n)))
          return null;
        var o = {};
        return (
          Object.keys(n).forEach(function (t) {
            var i;
            ty(null == (i = n) ? void 0 : i[t], t, e, r) && (o[t] = n[t]);
          }),
          o
        );
      },
      tm = function t(e, r) {
        if (e === r) return !0;
        var n = P.Children.count(e);
        if (n !== P.Children.count(r)) return !1;
        if (0 === n) return !0;
        if (1 === n)
          return tb(Array.isArray(e) ? e[0] : e, Array.isArray(r) ? r[0] : r);
        for (var o = 0; o < n; o++) {
          var i = e[o],
            a = r[o];
          if (Array.isArray(i) || Array.isArray(a)) {
            if (!t(i, a)) return !1;
          } else if (!tb(i, a)) return !1;
        }
        return !0;
      },
      tb = function (t, e) {
        if ((0, k.default)(t) && (0, k.default)(e)) return !0;
        if (!(0, k.default)(t) && !(0, k.default)(e)) {
          var r = t.props || {},
            n = r.children,
            o = ti(r, tn),
            i = e.props || {},
            a = i.children,
            u = ti(i, to);
          if (n && a) return G(o, u) && tm(n, a);
          if (!n && !a) return G(o, u);
        }
        return !1;
      },
      tg = function (t, e) {
        var r = [],
          n = {};
        return (
          ts(t).forEach(function (t, o) {
            if (
              t &&
              t.type &&
              (0, C.default)(t.type) &&
              th.indexOf(t.type) >= 0
            )
              r.push(t);
            else if (t) {
              var i = tu(t.type),
                a = e[i] || {},
                u = a.handler,
                c = a.once;
              if (u && (!c || !n[i])) {
                var l = u(t, i, o);
                r.push(l), (n[i] = !0);
              }
            }
          }),
          r
        );
      },
      tx = function (t) {
        var e = t && t.type;
        return e && ta[e] ? ta[e] : null;
      };
    function tO(t) {
      return (tO =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function tw(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function tj(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? tw(Object(r), !0).forEach(function (e) {
              var n, o, i;
              (n = t),
                (o = e),
                (i = r[e]),
                (o = (function (t) {
                  var e = (function (t, e) {
                    if ('object' != tO(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || 'default');
                      if ('object' != tO(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === e ? String : Number)(t);
                  })(t, 'string');
                  return 'symbol' == tO(e) ? e : e + '';
                })(o)) in n
                  ? Object.defineProperty(n, o, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (n[o] = i);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : tw(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    var tS = { widthCache: {}, cacheCount: 0 },
      tA = {
        position: 'absolute',
        top: '-20000px',
        left: 0,
        padding: 0,
        margin: 0,
        border: 'none',
        whiteSpace: 'pre'
      },
      tP = 'recharts_measurement_span',
      tE = function (t) {
        var e,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == t || V.isSsr) return { width: 0, height: 0 };
        var n =
            (Object.keys((e = tj({}, r))).forEach(function (t) {
              e[t] || delete e[t];
            }),
            e),
          o = JSON.stringify({ text: t, copyStyle: n });
        if (tS.widthCache[o]) return tS.widthCache[o];
        try {
          var i = document.getElementById(tP);
          i ||
            ((i = document.createElement('span')).setAttribute('id', tP),
            i.setAttribute('aria-hidden', 'true'),
            document.body.appendChild(i));
          var a = tj(tj({}, tA), n);
          Object.assign(i.style, a), (i.textContent = ''.concat(t));
          var u = i.getBoundingClientRect(),
            c = { width: u.width, height: u.height };
          return (
            (tS.widthCache[o] = c),
            ++tS.cacheCount > 2e3 &&
              ((tS.cacheCount = 0), (tS.widthCache = {})),
            c
          );
        } catch (t) {
          return { width: 0, height: 0 };
        }
      };
    function tk(t) {
      return (tk =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function tM(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var r =
            null == t
              ? null
              : ('u' > typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
          if (null != r) {
            var n,
              o,
              i,
              a,
              u = [],
              c = !0,
              l = !1;
            try {
              if (((i = (r = r.call(t)).next), 0 === e)) {
                if (Object(r) !== r) return;
                c = !1;
              } else
                for (
                  ;
                  !(c = (n = i.call(r)).done) &&
                  (u.push(n.value), u.length !== e);
                  c = !0
                );
            } catch (t) {
              (l = !0), (o = t);
            } finally {
              try {
                if (
                  !c &&
                  null != r.return &&
                  ((a = r.return()), Object(a) !== a)
                )
                  return;
              } finally {
                if (l) throw o;
              }
            }
            return u;
          }
        })(t, e) ||
        (function (t, e) {
          if (t) {
            if ('string' == typeof t) return tT(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            if (
              ('Object' === r && t.constructor && (r = t.constructor.name),
              'Map' === r || 'Set' === r)
            )
              return Array.from(t);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return tT(t, e);
          }
        })(t, e) ||
        (function () {
          throw TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function tT(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function t_(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(
            t,
            (function (t) {
              var e = (function (t, e) {
                if ('object' != tk(t) || !t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(t, e || 'default');
                  if ('object' != tk(n)) return n;
                  throw TypeError(
                    '@@toPrimitive must return a primitive value.'
                  );
                }
                return ('string' === e ? String : Number)(t);
              })(t, 'string');
              return 'symbol' == tk(e) ? e : e + '';
            })(n.key),
            n
          );
      }
    }
    var tC = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      tI = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      tD = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      tN = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      tR = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      tB = Object.keys(tR),
      tL = (function () {
        var t, e;
        function r(t, e) {
          if (!(this instanceof r))
            throw TypeError('Cannot call a class as a function');
          (this.num = t),
            (this.unit = e),
            (this.num = t),
            (this.unit = e),
            Number.isNaN(t) && (this.unit = ''),
            '' === e || tD.test(e) || ((this.num = NaN), (this.unit = '')),
            tB.includes(e) && ((this.num = t * tR[e]), (this.unit = 'px'));
        }
        return (
          (t = [
            {
              key: 'add',
              value: function (t) {
                return this.unit !== t.unit
                  ? new r(NaN, '')
                  : new r(this.num + t.num, this.unit);
              }
            },
            {
              key: 'subtract',
              value: function (t) {
                return this.unit !== t.unit
                  ? new r(NaN, '')
                  : new r(this.num - t.num, this.unit);
              }
            },
            {
              key: 'multiply',
              value: function (t) {
                return '' !== this.unit && '' !== t.unit && this.unit !== t.unit
                  ? new r(NaN, '')
                  : new r(this.num * t.num, this.unit || t.unit);
              }
            },
            {
              key: 'divide',
              value: function (t) {
                return '' !== this.unit && '' !== t.unit && this.unit !== t.unit
                  ? new r(NaN, '')
                  : new r(this.num / t.num, this.unit || t.unit);
              }
            },
            {
              key: 'toString',
              value: function () {
                return ''.concat(this.num).concat(this.unit);
              }
            },
            {
              key: 'isNaN',
              value: function () {
                return Number.isNaN(this.num);
              }
            }
          ]),
          (e = [
            {
              key: 'parse',
              value: function (t) {
                var e,
                  n = tM(null != (e = tN.exec(t)) ? e : [], 3),
                  o = n[1],
                  i = n[2];
                return new r(parseFloat(o), null != i ? i : '');
              }
            }
          ]),
          t && t_(r.prototype, t),
          e && t_(r, e),
          Object.defineProperty(r, 'prototype', { writable: !1 }),
          r
        );
      })();
    function tU(t) {
      if (t.includes('NaN')) return 'NaN';
      for (var e = t; e.includes('*') || e.includes('/'); ) {
        var r,
          n = tM(null != (r = tC.exec(e)) ? r : [], 4),
          o = n[1],
          i = n[2],
          a = n[3],
          u = tL.parse(null != o ? o : ''),
          c = tL.parse(null != a ? a : ''),
          l = '*' === i ? u.multiply(c) : u.divide(c);
        if (l.isNaN()) return 'NaN';
        e = e.replace(tC, l.toString());
      }
      for (; e.includes('+') || /.-\d+(?:\.\d+)?/.test(e); ) {
        var s,
          f = tM(null != (s = tI.exec(e)) ? s : [], 4),
          p = f[1],
          d = f[2],
          h = f[3],
          y = tL.parse(null != p ? p : ''),
          v = tL.parse(null != h ? h : ''),
          m = '+' === d ? y.add(v) : y.subtract(v);
        if (m.isNaN()) return 'NaN';
        e = e.replace(tI, m.toString());
      }
      return e;
    }
    var t$ = /\(([^()]*)\)/;
    function tz(t) {
      var e = (function (t) {
        try {
          var e;
          return (
            (e = t.replace(/\s+/g, '')),
            (e = (function (t) {
              for (var e = t; e.includes('('); ) {
                var r = tM(t$.exec(e), 2)[1];
                e = e.replace(t$, tU(r));
              }
              return e;
            })(e)),
            (e = tU(e))
          );
        } catch (t) {
          return 'NaN';
        }
      })(t.slice(5, -1));
      return 'NaN' === e ? '' : e;
    }
    var tF = [
        'x',
        'y',
        'lineHeight',
        'capHeight',
        'scaleToFit',
        'textAnchor',
        'verticalAnchor',
        'fill'
      ],
      tq = ['dx', 'dy', 'angle', 'className', 'breakAll'];
    function tW() {
      return (tW = Object.assign.bind()).apply(this, arguments);
    }
    function tX(t, e) {
      if (null == t) return {};
      var r,
        n,
        o = (function (t, e) {
          if (null == t) return {};
          var r = {};
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              if (e.indexOf(n) >= 0) continue;
              r[n] = t[n];
            }
          return r;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++)
          (r = i[n]),
            !(e.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, r) &&
              (o[r] = t[r]);
      }
      return o;
    }
    function tH(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var r =
            null == t
              ? null
              : ('u' > typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
          if (null != r) {
            var n,
              o,
              i,
              a,
              u = [],
              c = !0,
              l = !1;
            try {
              if (((i = (r = r.call(t)).next), 0 === e)) {
                if (Object(r) !== r) return;
                c = !1;
              } else
                for (
                  ;
                  !(c = (n = i.call(r)).done) &&
                  (u.push(n.value), u.length !== e);
                  c = !0
                );
            } catch (t) {
              (l = !0), (o = t);
            } finally {
              try {
                if (
                  !c &&
                  null != r.return &&
                  ((a = r.return()), Object(a) !== a)
                )
                  return;
              } finally {
                if (l) throw o;
              }
            }
            return u;
          }
        })(t, e) ||
        (function (t, e) {
          if (t) {
            if ('string' == typeof t) return tV(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            if (
              ('Object' === r && t.constructor && (r = t.constructor.name),
              'Map' === r || 'Set' === r)
            )
              return Array.from(t);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return tV(t, e);
          }
        })(t, e) ||
        (function () {
          throw TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function tV(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var tK = /[ \f\n\r\t\v\u2028\u2029]+/,
      tG = function (t) {
        var e = t.children,
          r = t.breakAll,
          n = t.style;
        try {
          var o = [];
          (0, k.default)(e) ||
            (o = r ? e.toString().split('') : e.toString().split(tK));
          var i = o.map(function (t) {
              return { word: t, width: tE(t, n).width };
            }),
            a = r ? 0 : tE(' ', n).width;
          return { wordsWithComputedWidth: i, spaceWidth: a };
        } catch (t) {
          return null;
        }
      },
      tY = function (t, e, r, n, o) {
        var i,
          a = t.maxLines,
          u = t.children,
          c = t.style,
          l = t.breakAll,
          s = L(a),
          f = function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            return t.reduce(function (t, e) {
              var i = e.word,
                a = e.width,
                u = t[t.length - 1];
              return (
                u && (null == n || o || u.width + a + r < Number(n))
                  ? (u.words.push(i), (u.width += a + r))
                  : t.push({ words: [i], width: a }),
                t
              );
            }, []);
          },
          p = f(e);
        if (!s) return p;
        for (
          var d = function (t) {
              var e = f(
                tG({ breakAll: l, style: c, children: u.slice(0, t) + '…' })
                  .wordsWithComputedWidth
              );
              return [
                e.length > a ||
                  e.reduce(function (t, e) {
                    return t.width > e.width ? t : e;
                  }).width > Number(n),
                e
              ];
            },
            h = 0,
            y = u.length - 1,
            v = 0;
          h <= y && v <= u.length - 1;

        ) {
          var m = Math.floor((h + y) / 2),
            b = tH(d(m - 1), 2),
            g = b[0],
            x = b[1],
            O = tH(d(m), 1)[0];
          if ((g || O || (h = m + 1), g && O && (y = m - 1), !g && O)) {
            i = x;
            break;
          }
          v++;
        }
        return i || p;
      },
      tZ = function (t) {
        return [{ words: (0, k.default)(t) ? [] : t.toString().split(tK) }];
      },
      tJ = function (t) {
        var e = t.width,
          r = t.scaleToFit,
          n = t.children,
          o = t.style,
          i = t.breakAll,
          a = t.maxLines;
        if ((e || r) && !V.isSsr) {
          var u = tG({ breakAll: i, children: n, style: o });
          if (!u) return tZ(n);
          var c = u.wordsWithComputedWidth,
            l = u.spaceWidth;
          return tY(
            { breakAll: i, children: n, maxLines: a, style: o },
            c,
            l,
            e,
            r
          );
        }
        return tZ(n);
      },
      tQ = '#808080',
      t0 = function (t) {
        var e,
          r = t.x,
          n = void 0 === r ? 0 : r,
          o = t.y,
          i = void 0 === o ? 0 : o,
          a = t.lineHeight,
          u = void 0 === a ? '1em' : a,
          c = t.capHeight,
          l = void 0 === c ? '0.71em' : c,
          s = t.scaleToFit,
          f = void 0 !== s && s,
          p = t.textAnchor,
          d = t.verticalAnchor,
          h = t.fill,
          y = void 0 === h ? tQ : h,
          v = tX(t, tF),
          m = (0, P.useMemo)(
            function () {
              return tJ({
                breakAll: v.breakAll,
                children: v.children,
                maxLines: v.maxLines,
                scaleToFit: f,
                style: v.style,
                width: v.width
              });
            },
            [v.breakAll, v.children, v.maxLines, f, v.style, v.width]
          ),
          b = v.dx,
          g = v.dy,
          x = v.angle,
          O = v.className,
          w = v.breakAll,
          j = tX(v, tq);
        if (!U(n) || !U(i)) return null;
        var S = n + (L(b) ? b : 0),
          A = i + (L(g) ? g : 0);
        switch (void 0 === d ? 'end' : d) {
          case 'start':
            e = tz('calc('.concat(l, ')'));
            break;
          case 'middle':
            e = tz(
              'calc('
                .concat((m.length - 1) / 2, ' * -')
                .concat(u, ' + (')
                .concat(l, ' / 2))')
            );
            break;
          default:
            e = tz('calc('.concat(m.length - 1, ' * -').concat(u, ')'));
        }
        var E = [];
        if (f) {
          var k = m[0].width,
            M = v.width;
          E.push('scale('.concat((L(M) ? M / k : 1) / k, ')'));
        }
        return (
          x && E.push('rotate('.concat(x, ', ').concat(S, ', ').concat(A, ')')),
          E.length && (j.transform = E.join(' ')),
          P.default.createElement(
            'text',
            tW({}, tv(j, !0), {
              x: S,
              y: A,
              className: (0, _.default)('recharts-text', O),
              textAnchor: void 0 === p ? 'start' : p,
              fill: y.includes('url') ? tQ : y
            }),
            m.map(function (t, r) {
              var n = t.words.join(w ? '' : ' ');
              return P.default.createElement(
                'tspan',
                { x: S, dy: 0 === r ? e : u, key: ''.concat(n, '-').concat(r) },
                n
              );
            })
          )
        );
      };
    function t1(t, e) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(t);
          break;
        default:
          this.range(e).domain(t);
      }
      return this;
    }
    function t2(t, e) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          'function' == typeof t ? this.interpolator(t) : this.range(t);
          break;
        default:
          this.domain(t),
            'function' == typeof e ? this.interpolator(e) : this.range(e);
      }
      return this;
    }
    t.s([], 85899), t.i(85899), t.s([], 71752), t.i(71752);
    class t3 extends Map {
      constructor(t, e = t5) {
        if (
          (super(),
          Object.defineProperties(this, {
            _intern: { value: new Map() },
            _key: { value: e }
          }),
          null != t)
        )
          for (const [e, r] of t) this.set(e, r);
      }
      get(t) {
        return super.get(t4(this, t));
      }
      has(t) {
        return super.has(t4(this, t));
      }
      set(t, e) {
        return super.set(
          (function ({ _intern: t, _key: e }, r) {
            let n = e(r);
            return t.has(n) ? t.get(n) : (t.set(n, r), r);
          })(this, t),
          e
        );
      }
      delete(t) {
        return super.delete(
          (function ({ _intern: t, _key: e }, r) {
            let n = e(r);
            return t.has(n) && ((r = t.get(n)), t.delete(n)), r;
          })(this, t)
        );
      }
    }
    function t4({ _intern: t, _key: e }, r) {
      let n = e(r);
      return t.has(n) ? t.get(n) : r;
    }
    function t5(t) {
      return null !== t && 'object' == typeof t ? t.valueOf() : t;
    }
    let t8 = Symbol('implicit');
    function t6() {
      var t = new t3(),
        e = [],
        r = [],
        n = t8;
      function o(o) {
        let i = t.get(o);
        if (void 0 === i) {
          if (n !== t8) return n;
          t.set(o, (i = e.push(o) - 1));
        }
        return r[i % r.length];
      }
      return (
        (o.domain = function (r) {
          if (!arguments.length) return e.slice();
          for (let n of ((e = []), (t = new t3()), r))
            t.has(n) || t.set(n, e.push(n) - 1);
          return o;
        }),
        (o.range = function (t) {
          return arguments.length ? ((r = Array.from(t)), o) : r.slice();
        }),
        (o.unknown = function (t) {
          return arguments.length ? ((n = t), o) : n;
        }),
        (o.copy = function () {
          return t6(e, r).unknown(n);
        }),
        t1.apply(o, arguments),
        o
      );
    }
    function t9() {
      var t,
        e,
        r = t6().unknown(void 0),
        n = r.domain,
        o = r.range,
        i = 0,
        a = 1,
        u = !1,
        c = 0,
        l = 0,
        s = 0.5;
      function f() {
        var r = n().length,
          f = a < i,
          p = f ? a : i,
          d = f ? i : a;
        (t = (d - p) / Math.max(1, r - c + 2 * l)),
          u && (t = Math.floor(t)),
          (p += (d - p - t * (r - c)) * s),
          (e = t * (1 - c)),
          u && ((p = Math.round(p)), (e = Math.round(e)));
        var h = (function (t, e, r) {
          (t *= 1),
            (e *= 1),
            (r =
              (o = arguments.length) < 2
                ? ((e = t), (t = 0), 1)
                : o < 3
                  ? 1
                  : +r);
          for (
            var n = -1,
              o = 0 | Math.max(0, Math.ceil((e - t) / r)),
              i = Array(o);
            ++n < o;

          )
            i[n] = t + n * r;
          return i;
        })(r).map(function (e) {
          return p + t * e;
        });
        return o(f ? h.reverse() : h);
      }
      return (
        delete r.unknown,
        (r.domain = function (t) {
          return arguments.length ? (n(t), f()) : n();
        }),
        (r.range = function (t) {
          return arguments.length
            ? (([i, a] = t), (i *= 1), (a *= 1), f())
            : [i, a];
        }),
        (r.rangeRound = function (t) {
          return ([i, a] = t), (i *= 1), (a *= 1), (u = !0), f();
        }),
        (r.bandwidth = function () {
          return e;
        }),
        (r.step = function () {
          return t;
        }),
        (r.round = function (t) {
          return arguments.length ? ((u = !!t), f()) : u;
        }),
        (r.padding = function (t) {
          return arguments.length ? ((c = Math.min(1, (l = +t))), f()) : c;
        }),
        (r.paddingInner = function (t) {
          return arguments.length ? ((c = Math.min(1, t)), f()) : c;
        }),
        (r.paddingOuter = function (t) {
          return arguments.length ? ((l = +t), f()) : l;
        }),
        (r.align = function (t) {
          return arguments.length
            ? ((s = Math.max(0, Math.min(1, t))), f())
            : s;
        }),
        (r.copy = function () {
          return t9(n(), [i, a])
            .round(u)
            .paddingInner(c)
            .paddingOuter(l)
            .align(s);
        }),
        t1.apply(f(), arguments)
      );
    }
    function t7() {
      return (function t(e) {
        var r = e.copy;
        return (
          (e.padding = e.paddingOuter),
          delete e.paddingInner,
          delete e.paddingOuter,
          (e.copy = function () {
            return t(r());
          }),
          e
        );
      })(t9.apply(null, arguments).paddingInner(1));
    }
    let et = Math.sqrt(50),
      ee = Math.sqrt(10),
      er = Math.sqrt(2);
    function en(t, e, r) {
      let n,
        o,
        i,
        a = (e - t) / Math.max(0, r),
        u = Math.floor(Math.log10(a)),
        c = a / Math.pow(10, u),
        l = c >= et ? 10 : c >= ee ? 5 : c >= er ? 2 : 1;
      return (u < 0
        ? ((n = Math.round(t * (i = Math.pow(10, -u) / l))),
          (o = Math.round(e * i)),
          n / i < t && ++n,
          o / i > e && --o,
          (i = -i))
        : ((n = Math.round(t / (i = Math.pow(10, u) * l))),
          (o = Math.round(e / i)),
          n * i < t && ++n,
          o * i > e && --o),
      o < n && 0.5 <= r && r < 2)
        ? en(t, e, 2 * r)
        : [n, o, i];
    }
    function eo(t, e, r) {
      if (((e *= 1), (t *= 1), !((r *= 1) > 0))) return [];
      if (t === e) return [t];
      let n = e < t,
        [o, i, a] = n ? en(e, t, r) : en(t, e, r);
      if (!(i >= o)) return [];
      let u = i - o + 1,
        c = Array(u);
      if (n)
        if (a < 0) for (let t = 0; t < u; ++t) c[t] = -((i - t) / a);
        else for (let t = 0; t < u; ++t) c[t] = (i - t) * a;
      else if (a < 0) for (let t = 0; t < u; ++t) c[t] = -((o + t) / a);
      else for (let t = 0; t < u; ++t) c[t] = (o + t) * a;
      return c;
    }
    function ei(t, e, r) {
      return en((t *= 1), (e *= 1), (r *= 1))[2];
    }
    function ea(t, e, r) {
      (e *= 1), (t *= 1), (r *= 1);
      let n = e < t,
        o = n ? ei(e, t, r) : ei(t, e, r);
      return (n ? -1 : 1) * (o < 0 ? -(1 / o) : o);
    }
    function eu(t, e) {
      return null == t || null == e
        ? NaN
        : t < e
          ? -1
          : t > e
            ? 1
            : t >= e
              ? 0
              : NaN;
    }
    function ec(t, e) {
      return null == t || null == e
        ? NaN
        : e < t
          ? -1
          : e > t
            ? 1
            : e >= t
              ? 0
              : NaN;
    }
    function el(t) {
      let e, r, n;
      function o(t, n, i = 0, a = t.length) {
        if (i < a) {
          if (0 !== e(n, n)) return a;
          do {
            let e = (i + a) >>> 1;
            0 > r(t[e], n) ? (i = e + 1) : (a = e);
          } while (i < a);
        }
        return i;
      }
      return (
        2 !== t.length
          ? ((e = eu), (r = (e, r) => eu(t(e), r)), (n = (e, r) => t(e) - r))
          : ((e = t === eu || t === ec ? t : es), (r = t), (n = t)),
        {
          left: o,
          center: function (t, e, r = 0, i = t.length) {
            let a = o(t, e, r, i - 1);
            return a > r && n(t[a - 1], e) > -n(t[a], e) ? a - 1 : a;
          },
          right: function (t, n, o = 0, i = t.length) {
            if (o < i) {
              if (0 !== e(n, n)) return i;
              do {
                let e = (o + i) >>> 1;
                0 >= r(t[e], n) ? (o = e + 1) : (i = e);
              } while (o < i);
            }
            return o;
          }
        }
      );
    }
    function es() {
      return 0;
    }
    function ef(t) {
      return null === t ? NaN : +t;
    }
    let ep = el(eu),
      ed = ep.right;
    function eh(t, e, r) {
      (t.prototype = e.prototype = r), (r.constructor = t);
    }
    function ey(t, e) {
      var r = Object.create(t.prototype);
      for (var n in e) r[n] = e[n];
      return r;
    }
    function ev() {}
    ep.left, el(ef).center;
    var em = '\\s*([+-]?\\d+)\\s*',
      eb = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
      eg = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
      ex = /^#([0-9a-f]{3,8})$/,
      eO = RegExp(`^rgb\\(${em},${em},${em}\\)$`),
      ew = RegExp(`^rgb\\(${eg},${eg},${eg}\\)$`),
      ej = RegExp(`^rgba\\(${em},${em},${em},${eb}\\)$`),
      eS = RegExp(`^rgba\\(${eg},${eg},${eg},${eb}\\)$`),
      eA = RegExp(`^hsl\\(${eb},${eg},${eg}\\)$`),
      eP = RegExp(`^hsla\\(${eb},${eg},${eg},${eb}\\)$`),
      eE = {
        aliceblue: 0xf0f8ff,
        antiquewhite: 0xfaebd7,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 0xf0ffff,
        beige: 0xf5f5dc,
        bisque: 0xffe4c4,
        black: 0,
        blanchedalmond: 0xffebcd,
        blue: 255,
        blueviolet: 9055202,
        brown: 0xa52a2a,
        burlywood: 0xdeb887,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 0xd2691e,
        coral: 0xff7f50,
        cornflowerblue: 6591981,
        cornsilk: 0xfff8dc,
        crimson: 0xdc143c,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 0xb8860b,
        darkgray: 0xa9a9a9,
        darkgreen: 25600,
        darkgrey: 0xa9a9a9,
        darkkhaki: 0xbdb76b,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 0xff8c00,
        darkorchid: 0x9932cc,
        darkred: 9109504,
        darksalmon: 0xe9967a,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 0xff1493,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 0xb22222,
        floralwhite: 0xfffaf0,
        forestgreen: 2263842,
        fuchsia: 0xff00ff,
        gainsboro: 0xdcdcdc,
        ghostwhite: 0xf8f8ff,
        gold: 0xffd700,
        goldenrod: 0xdaa520,
        gray: 8421504,
        green: 32768,
        greenyellow: 0xadff2f,
        grey: 8421504,
        honeydew: 0xf0fff0,
        hotpink: 0xff69b4,
        indianred: 0xcd5c5c,
        indigo: 4915330,
        ivory: 0xfffff0,
        khaki: 0xf0e68c,
        lavender: 0xe6e6fa,
        lavenderblush: 0xfff0f5,
        lawngreen: 8190976,
        lemonchiffon: 0xfffacd,
        lightblue: 0xadd8e6,
        lightcoral: 0xf08080,
        lightcyan: 0xe0ffff,
        lightgoldenrodyellow: 0xfafad2,
        lightgray: 0xd3d3d3,
        lightgreen: 9498256,
        lightgrey: 0xd3d3d3,
        lightpink: 0xffb6c1,
        lightsalmon: 0xffa07a,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 0xb0c4de,
        lightyellow: 0xffffe0,
        lime: 65280,
        limegreen: 3329330,
        linen: 0xfaf0e6,
        magenta: 0xff00ff,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 0xba55d3,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 0xc71585,
        midnightblue: 1644912,
        mintcream: 0xf5fffa,
        mistyrose: 0xffe4e1,
        moccasin: 0xffe4b5,
        navajowhite: 0xffdead,
        navy: 128,
        oldlace: 0xfdf5e6,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 0xffa500,
        orangered: 0xff4500,
        orchid: 0xda70d6,
        palegoldenrod: 0xeee8aa,
        palegreen: 0x98fb98,
        paleturquoise: 0xafeeee,
        palevioletred: 0xdb7093,
        papayawhip: 0xffefd5,
        peachpuff: 0xffdab9,
        peru: 0xcd853f,
        pink: 0xffc0cb,
        plum: 0xdda0dd,
        powderblue: 0xb0e0e6,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 0xff0000,
        rosybrown: 0xbc8f8f,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 0xfa8072,
        sandybrown: 0xf4a460,
        seagreen: 3050327,
        seashell: 0xfff5ee,
        sienna: 0xa0522d,
        silver: 0xc0c0c0,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 0xfffafa,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 0xd2b48c,
        teal: 32896,
        thistle: 0xd8bfd8,
        tomato: 0xff6347,
        turquoise: 4251856,
        violet: 0xee82ee,
        wheat: 0xf5deb3,
        white: 0xffffff,
        whitesmoke: 0xf5f5f5,
        yellow: 0xffff00,
        yellowgreen: 0x9acd32
      };
    function ek() {
      return this.rgb().formatHex();
    }
    function eM() {
      return this.rgb().formatRgb();
    }
    function eT(t) {
      var e, r;
      return (
        (t = (t + '').trim().toLowerCase()),
        (e = ex.exec(t))
          ? ((r = e[1].length),
            (e = parseInt(e[1], 16)),
            6 === r
              ? e_(e)
              : 3 === r
                ? new eD(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1
                  )
                : 8 === r
                  ? eC(
                      (e >> 24) & 255,
                      (e >> 16) & 255,
                      (e >> 8) & 255,
                      (255 & e) / 255
                    )
                  : 4 === r
                    ? eC(
                        ((e >> 12) & 15) | ((e >> 8) & 240),
                        ((e >> 8) & 15) | ((e >> 4) & 240),
                        ((e >> 4) & 15) | (240 & e),
                        (((15 & e) << 4) | (15 & e)) / 255
                      )
                    : null)
          : (e = eO.exec(t))
            ? new eD(e[1], e[2], e[3], 1)
            : (e = ew.exec(t))
              ? new eD(
                  (255 * e[1]) / 100,
                  (255 * e[2]) / 100,
                  (255 * e[3]) / 100,
                  1
                )
              : (e = ej.exec(t))
                ? eC(e[1], e[2], e[3], e[4])
                : (e = eS.exec(t))
                  ? eC(
                      (255 * e[1]) / 100,
                      (255 * e[2]) / 100,
                      (255 * e[3]) / 100,
                      e[4]
                    )
                  : (e = eA.exec(t))
                    ? e$(e[1], e[2] / 100, e[3] / 100, 1)
                    : (e = eP.exec(t))
                      ? e$(e[1], e[2] / 100, e[3] / 100, e[4])
                      : eE.hasOwnProperty(t)
                        ? e_(eE[t])
                        : 'transparent' === t
                          ? new eD(NaN, NaN, NaN, 0)
                          : null
      );
    }
    function e_(t) {
      return new eD((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
    }
    function eC(t, e, r, n) {
      return n <= 0 && (t = e = r = NaN), new eD(t, e, r, n);
    }
    function eI(t, e, r, n) {
      var o;
      return 1 == arguments.length
        ? ((o = t) instanceof ev || (o = eT(o)), o)
          ? new eD((o = o.rgb()).r, o.g, o.b, o.opacity)
          : new eD()
        : new eD(t, e, r, null == n ? 1 : n);
    }
    function eD(t, e, r, n) {
      (this.r = +t), (this.g = +e), (this.b = +r), (this.opacity = +n);
    }
    function eN() {
      return `#${eU(this.r)}${eU(this.g)}${eU(this.b)}`;
    }
    function eR() {
      let t = eB(this.opacity);
      return `${1 === t ? 'rgb(' : 'rgba('}${eL(this.r)}, ${eL(this.g)}, ${eL(this.b)}${1 === t ? ')' : `, ${t})`}`;
    }
    function eB(t) {
      return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
    }
    function eL(t) {
      return Math.max(0, Math.min(255, Math.round(t) || 0));
    }
    function eU(t) {
      return ((t = eL(t)) < 16 ? '0' : '') + t.toString(16);
    }
    function e$(t, e, r, n) {
      return (
        n <= 0
          ? (t = e = r = NaN)
          : r <= 0 || r >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
        new eF(t, e, r, n)
      );
    }
    function ez(t) {
      if (t instanceof eF) return new eF(t.h, t.s, t.l, t.opacity);
      if ((t instanceof ev || (t = eT(t)), !t)) return new eF();
      if (t instanceof eF) return t;
      var e = (t = t.rgb()).r / 255,
        r = t.g / 255,
        n = t.b / 255,
        o = Math.min(e, r, n),
        i = Math.max(e, r, n),
        a = NaN,
        u = i - o,
        c = (i + o) / 2;
      return (
        u
          ? ((a =
              e === i
                ? (r - n) / u + (r < n) * 6
                : r === i
                  ? (n - e) / u + 2
                  : (e - r) / u + 4),
            (u /= c < 0.5 ? i + o : 2 - i - o),
            (a *= 60))
          : (u = c > 0 && c < 1 ? 0 : a),
        new eF(a, u, c, t.opacity)
      );
    }
    function eF(t, e, r, n) {
      (this.h = +t), (this.s = +e), (this.l = +r), (this.opacity = +n);
    }
    function eq(t) {
      return (t = (t || 0) % 360) < 0 ? t + 360 : t;
    }
    function eW(t) {
      return Math.max(0, Math.min(1, t || 0));
    }
    function eX(t, e, r) {
      return (
        (t < 60
          ? e + ((r - e) * t) / 60
          : t < 180
            ? r
            : t < 240
              ? e + ((r - e) * (240 - t)) / 60
              : e) * 255
      );
    }
    function eH(t, e, r, n, o) {
      var i = t * t,
        a = i * t;
      return (
        ((1 - 3 * t + 3 * i - a) * e +
          (4 - 6 * i + 3 * a) * r +
          (1 + 3 * t + 3 * i - 3 * a) * n +
          a * o) /
        6
      );
    }
    eh(ev, eT, {
      copy(t) {
        return Object.assign(new this.constructor(), this, t);
      },
      displayable() {
        return this.rgb().displayable();
      },
      hex: ek,
      formatHex: ek,
      formatHex8: function () {
        return this.rgb().formatHex8();
      },
      formatHsl: function () {
        return ez(this).formatHsl();
      },
      formatRgb: eM,
      toString: eM
    }),
      eh(
        eD,
        eI,
        ey(ev, {
          brighter(t) {
            return (
              (t =
                null == t
                  ? 1.4285714285714286
                  : Math.pow(1.4285714285714286, t)),
              new eD(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          darker(t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new eD(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          rgb() {
            return this;
          },
          clamp() {
            return new eD(eL(this.r), eL(this.g), eL(this.b), eB(this.opacity));
          },
          displayable() {
            return (
              -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: eN,
          formatHex: eN,
          formatHex8: function () {
            return `#${eU(this.r)}${eU(this.g)}${eU(this.b)}${eU((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
          },
          formatRgb: eR,
          toString: eR
        })
      ),
      eh(
        eF,
        function (t, e, r, n) {
          return 1 == arguments.length
            ? ez(t)
            : new eF(t, e, r, null == n ? 1 : n);
        },
        ey(ev, {
          brighter(t) {
            return (
              (t =
                null == t
                  ? 1.4285714285714286
                  : Math.pow(1.4285714285714286, t)),
              new eF(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker(t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new eF(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb() {
            var t = (this.h % 360) + (this.h < 0) * 360,
              e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              r = this.l,
              n = r + (r < 0.5 ? r : 1 - r) * e,
              o = 2 * r - n;
            return new eD(
              eX(t >= 240 ? t - 240 : t + 120, o, n),
              eX(t, o, n),
              eX(t < 120 ? t + 240 : t - 120, o, n),
              this.opacity
            );
          },
          clamp() {
            return new eF(eq(this.h), eW(this.s), eW(this.l), eB(this.opacity));
          },
          displayable() {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          formatHsl() {
            let t = eB(this.opacity);
            return `${1 === t ? 'hsl(' : 'hsla('}${eq(this.h)}, ${100 * eW(this.s)}%, ${100 * eW(this.l)}%${1 === t ? ')' : `, ${t})`}`;
          }
        })
      );
    let eV = (t) => () => t;
    function eK(t, e) {
      var r = e - t;
      return r
        ? function (e) {
            return t + e * r;
          }
        : eV(isNaN(t) ? e : t);
    }
    let eG = (function t(e) {
      var r,
        n =
          1 == (r = +e)
            ? eK
            : function (t, e) {
                var n, o, i;
                return e - t
                  ? ((n = t),
                    (o = e),
                    (n = Math.pow(n, (i = r))),
                    (o = Math.pow(o, i) - n),
                    (i = 1 / i),
                    function (t) {
                      return Math.pow(n + t * o, i);
                    })
                  : eV(isNaN(t) ? e : t);
              };
      function o(t, e) {
        var r = n((t = eI(t)).r, (e = eI(e)).r),
          o = n(t.g, e.g),
          i = n(t.b, e.b),
          a = eK(t.opacity, e.opacity);
        return function (e) {
          return (
            (t.r = r(e)), (t.g = o(e)), (t.b = i(e)), (t.opacity = a(e)), t + ''
          );
        };
      }
      return (o.gamma = t), o;
    })(1);
    function eY(t) {
      return function (e) {
        var r,
          n,
          o = e.length,
          i = Array(o),
          a = Array(o),
          u = Array(o);
        for (r = 0; r < o; ++r)
          (n = eI(e[r])),
            (i[r] = n.r || 0),
            (a[r] = n.g || 0),
            (u[r] = n.b || 0);
        return (
          (i = t(i)),
          (a = t(a)),
          (u = t(u)),
          (n.opacity = 1),
          function (t) {
            return (n.r = i(t)), (n.g = a(t)), (n.b = u(t)), n + '';
          }
        );
      };
    }
    function eZ(t, e) {
      return (
        (t *= 1),
        (e *= 1),
        function (r) {
          return t * (1 - r) + e * r;
        }
      );
    }
    eY(function (t) {
      var e = t.length - 1;
      return function (r) {
        var n =
            r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), e - 1) : Math.floor(r * e),
          o = t[n],
          i = t[n + 1],
          a = n > 0 ? t[n - 1] : 2 * o - i,
          u = n < e - 1 ? t[n + 2] : 2 * i - o;
        return eH((r - n / e) * e, a, o, i, u);
      };
    }),
      eY(function (t) {
        var e = t.length;
        return function (r) {
          var n = Math.floor(((r %= 1) < 0 ? ++r : r) * e),
            o = t[(n + e - 1) % e],
            i = t[n % e],
            a = t[(n + 1) % e],
            u = t[(n + 2) % e];
          return eH((r - n / e) * e, o, i, a, u);
        };
      });
    var eJ = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      eQ = RegExp(eJ.source, 'g');
    function e0(t, e) {
      var r,
        n,
        o = typeof e;
      return null == e || 'boolean' === o
        ? eV(e)
        : ('number' === o
            ? eZ
            : 'string' === o
              ? (n = eT(e))
                ? ((e = n), eG)
                : function (t, e) {
                    var r,
                      n,
                      o,
                      i,
                      a,
                      u = (eJ.lastIndex = eQ.lastIndex = 0),
                      c = -1,
                      l = [],
                      s = [];
                    for (
                      t += '', e += '';
                      (o = eJ.exec(t)) && (i = eQ.exec(e));

                    )
                      (a = i.index) > u &&
                        ((a = e.slice(u, a)),
                        l[c] ? (l[c] += a) : (l[++c] = a)),
                        (o = o[0]) === (i = i[0])
                          ? l[c]
                            ? (l[c] += i)
                            : (l[++c] = i)
                          : ((l[++c] = null), s.push({ i: c, x: eZ(o, i) })),
                        (u = eQ.lastIndex);
                    return (
                      u < e.length &&
                        ((a = e.slice(u)), l[c] ? (l[c] += a) : (l[++c] = a)),
                      l.length < 2
                        ? s[0]
                          ? ((r = s[0].x),
                            function (t) {
                              return r(t) + '';
                            })
                          : ((n = e),
                            function () {
                              return n;
                            })
                        : ((e = s.length),
                          function (t) {
                            for (var r, n = 0; n < e; ++n)
                              l[(r = s[n]).i] = r.x(t);
                            return l.join('');
                          })
                    );
                  }
              : e instanceof eT
                ? eG
                : e instanceof Date
                  ? function (t, e) {
                      var r = new Date();
                      return (
                        (t *= 1),
                        (e *= 1),
                        function (n) {
                          return r.setTime(t * (1 - n) + e * n), r;
                        }
                      );
                    }
                  : !ArrayBuffer.isView((r = e)) || r instanceof DataView
                    ? Array.isArray(e)
                      ? function (t, e) {
                          var r,
                            n = e ? e.length : 0,
                            o = t ? Math.min(n, t.length) : 0,
                            i = Array(o),
                            a = Array(n);
                          for (r = 0; r < o; ++r) i[r] = e0(t[r], e[r]);
                          for (; r < n; ++r) a[r] = e[r];
                          return function (t) {
                            for (r = 0; r < o; ++r) a[r] = i[r](t);
                            return a;
                          };
                        }
                      : ('function' != typeof e.valueOf &&
                            'function' != typeof e.toString) ||
                          isNaN(e)
                        ? function (t, e) {
                            var r,
                              n = {},
                              o = {};
                            for (r in ((null === t || 'object' != typeof t) &&
                              (t = {}),
                            (null === e || 'object' != typeof e) && (e = {}),
                            e))
                              r in t ? (n[r] = e0(t[r], e[r])) : (o[r] = e[r]);
                            return function (t) {
                              for (r in n) o[r] = n[r](t);
                              return o;
                            };
                          }
                        : eZ
                    : function (t, e) {
                        e || (e = []);
                        var r,
                          n = t ? Math.min(e.length, t.length) : 0,
                          o = e.slice();
                        return function (i) {
                          for (r = 0; r < n; ++r)
                            o[r] = t[r] * (1 - i) + e[r] * i;
                          return o;
                        };
                      })(t, e);
    }
    function e1(t, e) {
      return (
        (t *= 1),
        (e *= 1),
        function (r) {
          return Math.round(t * (1 - r) + e * r);
        }
      );
    }
    function e2(t) {
      return +t;
    }
    var e3 = [0, 1];
    function e4(t) {
      return t;
    }
    function e5(t, e) {
      var r;
      return (e -= t *= 1)
        ? function (r) {
            return (r - t) / e;
          }
        : ((r = isNaN(e) ? NaN : 0.5),
          function () {
            return r;
          });
    }
    function e8(t, e, r) {
      var n = t[0],
        o = t[1],
        i = e[0],
        a = e[1];
      return (
        o < n
          ? ((n = e5(o, n)), (i = r(a, i)))
          : ((n = e5(n, o)), (i = r(i, a))),
        function (t) {
          return i(n(t));
        }
      );
    }
    function e6(t, e, r) {
      var n = Math.min(t.length, e.length) - 1,
        o = Array(n),
        i = Array(n),
        a = -1;
      for (
        t[n] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
        ++a < n;

      )
        (o[a] = e5(t[a], t[a + 1])), (i[a] = r(e[a], e[a + 1]));
      return function (e) {
        var r = ed(t, e, 1, n) - 1;
        return i[r](o[r](e));
      };
    }
    function e9(t, e) {
      return e
        .domain(t.domain())
        .range(t.range())
        .interpolate(t.interpolate())
        .clamp(t.clamp())
        .unknown(t.unknown());
    }
    function e7() {
      var t,
        e,
        r,
        n,
        o,
        i,
        a = e3,
        u = e3,
        c = e0,
        l = e4;
      function s() {
        var t,
          e,
          r,
          c = Math.min(a.length, u.length);
        return (
          l !== e4 &&
            ((t = a[0]),
            (e = a[c - 1]),
            t > e && ((r = t), (t = e), (e = r)),
            (l = function (r) {
              return Math.max(t, Math.min(e, r));
            })),
          (n = c > 2 ? e6 : e8),
          (o = i = null),
          f
        );
      }
      function f(e) {
        return null == e || isNaN((e *= 1))
          ? r
          : (o || (o = n(a.map(t), u, c)))(t(l(e)));
      }
      return (
        (f.invert = function (r) {
          return l(e((i || (i = n(u, a.map(t), eZ)))(r)));
        }),
        (f.domain = function (t) {
          return arguments.length ? ((a = Array.from(t, e2)), s()) : a.slice();
        }),
        (f.range = function (t) {
          return arguments.length ? ((u = Array.from(t)), s()) : u.slice();
        }),
        (f.rangeRound = function (t) {
          return (u = Array.from(t)), (c = e1), s();
        }),
        (f.clamp = function (t) {
          return arguments.length ? ((l = !!t || e4), s()) : l !== e4;
        }),
        (f.interpolate = function (t) {
          return arguments.length ? ((c = t), s()) : c;
        }),
        (f.unknown = function (t) {
          return arguments.length ? ((r = t), f) : r;
        }),
        function (r, n) {
          return (t = r), (e = n), s();
        }
      );
    }
    function rt() {
      return e7()(e4, e4);
    }
    function re(t, e) {
      if (!isFinite(t) || 0 === t) return null;
      var r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf('e'),
        n = t.slice(0, r);
      return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(r + 1)];
    }
    function rr(t) {
      return (t = re(Math.abs(t))) ? t[1] : NaN;
    }
    var rn =
      /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function ro(t) {
      var e;
      if (!(e = rn.exec(t))) throw Error('invalid format: ' + t);
      return new ri({
        fill: e[1],
        align: e[2],
        sign: e[3],
        symbol: e[4],
        zero: e[5],
        width: e[6],
        comma: e[7],
        precision: e[8] && e[8].slice(1),
        trim: e[9],
        type: e[10]
      });
    }
    function ri(t) {
      (this.fill = void 0 === t.fill ? ' ' : t.fill + ''),
        (this.align = void 0 === t.align ? '>' : t.align + ''),
        (this.sign = void 0 === t.sign ? '-' : t.sign + ''),
        (this.symbol = void 0 === t.symbol ? '' : t.symbol + ''),
        (this.zero = !!t.zero),
        (this.width = void 0 === t.width ? void 0 : +t.width),
        (this.comma = !!t.comma),
        (this.precision = void 0 === t.precision ? void 0 : +t.precision),
        (this.trim = !!t.trim),
        (this.type = void 0 === t.type ? '' : t.type + '');
    }
    function ra(t, e) {
      var r = re(t, e);
      if (!r) return t + '';
      var n = r[0],
        o = r[1];
      return o < 0
        ? '0.' + Array(-o).join('0') + n
        : n.length > o + 1
          ? n.slice(0, o + 1) + '.' + n.slice(o + 1)
          : n + Array(o - n.length + 2).join('0');
    }
    (ro.prototype = ri.prototype),
      (ri.prototype.toString = function () {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? '0' : '') +
          (void 0 === this.width ? '' : Math.max(1, 0 | this.width)) +
          (this.comma ? ',' : '') +
          (void 0 === this.precision
            ? ''
            : '.' + Math.max(0, 0 | this.precision)) +
          (this.trim ? '~' : '') +
          this.type
        );
      });
    let ru = {
      '%': (t, e) => (100 * t).toFixed(e),
      b: (t) => Math.round(t).toString(2),
      c: (t) => t + '',
      d: function (t) {
        return Math.abs((t = Math.round(t))) >= 1e21
          ? t.toLocaleString('en').replace(/,/g, '')
          : t.toString(10);
      },
      e: (t, e) => t.toExponential(e),
      f: (t, e) => t.toFixed(e),
      g: (t, e) => t.toPrecision(e),
      o: (t) => Math.round(t).toString(8),
      p: (t, e) => ra(100 * t, e),
      r: ra,
      s: function (t, e) {
        var r = re(t, e);
        if (!r) return (b = void 0), t.toPrecision(e);
        var n = r[0],
          o = r[1],
          i = o - (b = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
          a = n.length;
        return i === a
          ? n
          : i > a
            ? n + Array(i - a + 1).join('0')
            : i > 0
              ? n.slice(0, i) + '.' + n.slice(i)
              : '0.' +
                Array(1 - i).join('0') +
                re(t, Math.max(0, e + i - 1))[0];
      },
      X: (t) => Math.round(t).toString(16).toUpperCase(),
      x: (t) => Math.round(t).toString(16)
    };
    function rc(t) {
      return t;
    }
    var rl = Array.prototype.map,
      rs = [
        'y',
        'z',
        'a',
        'f',
        'p',
        'n',
        'µ',
        'm',
        '',
        'k',
        'M',
        'G',
        'T',
        'P',
        'E',
        'Z',
        'Y'
      ];
    function rf(t, e, r, n) {
      var o,
        i,
        a = ea(t, e, r);
      switch ((n = ro(null == n ? ',f' : n)).type) {
        case 's':
          var u = Math.max(Math.abs(t), Math.abs(e));
          return (
            null != n.precision ||
              isNaN(
                (i = Math.max(
                  0,
                  3 * Math.max(-8, Math.min(8, Math.floor(rr(u) / 3))) -
                    rr(Math.abs(a))
                ))
              ) ||
              (n.precision = i),
            O(n, u)
          );
        case '':
        case 'e':
        case 'g':
        case 'p':
        case 'r':
          null != n.precision ||
            isNaN(
              (i =
                Math.max(
                  0,
                  rr(
                    Math.abs(Math.max(Math.abs(t), Math.abs(e))) -
                      (o = Math.abs((o = a)))
                  ) - rr(o)
                ) + 1)
            ) ||
            (n.precision = i - ('e' === n.type));
          break;
        case 'f':
        case '%':
          null != n.precision ||
            isNaN((i = Math.max(0, -rr(Math.abs(a))))) ||
            (n.precision = i - ('%' === n.type) * 2);
      }
      return x(n);
    }
    function rp(t) {
      var e = t.domain;
      return (
        (t.ticks = function (t) {
          var r = e();
          return eo(r[0], r[r.length - 1], null == t ? 10 : t);
        }),
        (t.tickFormat = function (t, r) {
          var n = e();
          return rf(n[0], n[n.length - 1], null == t ? 10 : t, r);
        }),
        (t.nice = function (r) {
          null == r && (r = 10);
          var n,
            o,
            i = e(),
            a = 0,
            u = i.length - 1,
            c = i[a],
            l = i[u],
            s = 10;
          for (
            l < c && ((o = c), (c = l), (l = o), (o = a), (a = u), (u = o));
            s-- > 0;

          ) {
            if ((o = ei(c, l, r)) === n) return (i[a] = c), (i[u] = l), e(i);
            if (o > 0) (c = Math.floor(c / o) * o), (l = Math.ceil(l / o) * o);
            else if (o < 0)
              (c = Math.ceil(c * o) / o), (l = Math.floor(l * o) / o);
            else break;
            n = o;
          }
          return t;
        }),
        t
      );
    }
    function rd() {
      var t = rt();
      return (
        (t.copy = function () {
          return e9(t, rd());
        }),
        t1.apply(t, arguments),
        rp(t)
      );
    }
    function rh(t) {
      var e;
      function r(t) {
        return null == t || isNaN((t *= 1)) ? e : t;
      }
      return (
        (r.invert = r),
        (r.domain = r.range =
          function (e) {
            return arguments.length ? ((t = Array.from(e, e2)), r) : t.slice();
          }),
        (r.unknown = function (t) {
          return arguments.length ? ((e = t), r) : e;
        }),
        (r.copy = function () {
          return rh(t).unknown(e);
        }),
        (t = arguments.length ? Array.from(t, e2) : [0, 1]),
        rp(r)
      );
    }
    function ry(t, e) {
      t = t.slice();
      var r,
        n = 0,
        o = t.length - 1,
        i = t[n],
        a = t[o];
      return (
        a < i && ((r = n), (n = o), (o = r), (r = i), (i = a), (a = r)),
        (t[n] = e.floor(i)),
        (t[o] = e.ceil(a)),
        t
      );
    }
    function rv(t) {
      return Math.log(t);
    }
    function rm(t) {
      return Math.exp(t);
    }
    function rb(t) {
      return -Math.log(-t);
    }
    function rg(t) {
      return -Math.exp(-t);
    }
    function rx(t) {
      return isFinite(t) ? +('1e' + t) : t < 0 ? 0 : t;
    }
    function rO(t) {
      return (e, r) => -t(-e, r);
    }
    function rw(t) {
      let e,
        r,
        n = t(rv, rm),
        o = n.domain,
        i = 10;
      function a() {
        var a, u;
        return (
          (e =
            (a = i) === Math.E
              ? Math.log
              : (10 === a && Math.log10) ||
                (2 === a && Math.log2) ||
                ((a = Math.log(a)), (t) => Math.log(t) / a)),
          (r =
            10 === (u = i)
              ? rx
              : u === Math.E
                ? Math.exp
                : (t) => Math.pow(u, t)),
          o()[0] < 0 ? ((e = rO(e)), (r = rO(r)), t(rb, rg)) : t(rv, rm),
          n
        );
      }
      return (
        (n.base = function (t) {
          return arguments.length ? ((i = +t), a()) : i;
        }),
        (n.domain = function (t) {
          return arguments.length ? (o(t), a()) : o();
        }),
        (n.ticks = (t) => {
          let n,
            a,
            u = o(),
            c = u[0],
            l = u[u.length - 1],
            s = l < c;
          s && ([c, l] = [l, c]);
          let f = e(c),
            p = e(l),
            d = null == t ? 10 : +t,
            h = [];
          if (!(i % 1) && p - f < d) {
            if (((f = Math.floor(f)), (p = Math.ceil(p)), c > 0)) {
              for (; f <= p; ++f)
                for (n = 1; n < i; ++n)
                  if (!((a = f < 0 ? n / r(-f) : n * r(f)) < c)) {
                    if (a > l) break;
                    h.push(a);
                  }
            } else
              for (; f <= p; ++f)
                for (n = i - 1; n >= 1; --n)
                  if (!((a = f > 0 ? n / r(-f) : n * r(f)) < c)) {
                    if (a > l) break;
                    h.push(a);
                  }
            2 * h.length < d && (h = eo(c, l, d));
          } else h = eo(f, p, Math.min(p - f, d)).map(r);
          return s ? h.reverse() : h;
        }),
        (n.tickFormat = (t, o) => {
          if (
            (null == t && (t = 10),
            null == o && (o = 10 === i ? 's' : ','),
            'function' != typeof o &&
              (i % 1 || null != (o = ro(o)).precision || (o.trim = !0),
              (o = x(o))),
            t === 1 / 0)
          )
            return o;
          let a = Math.max(1, (i * t) / n.ticks().length);
          return (t) => {
            let n = t / r(Math.round(e(t)));
            return n * i < i - 0.5 && (n *= i), n <= a ? o(t) : '';
          };
        }),
        (n.nice = () =>
          o(
            ry(o(), {
              floor: (t) => r(Math.floor(e(t))),
              ceil: (t) => r(Math.ceil(e(t)))
            })
          )),
        n
      );
    }
    function rj() {
      let t = rw(e7()).domain([1, 10]);
      return (
        (t.copy = () => e9(t, rj()).base(t.base())), t1.apply(t, arguments), t
      );
    }
    function rS(t) {
      return function (e) {
        return Math.sign(e) * Math.log1p(Math.abs(e / t));
      };
    }
    function rA(t) {
      return function (e) {
        return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
      };
    }
    function rP(t) {
      var e = 1,
        r = t(rS(1), rA(e));
      return (
        (r.constant = function (r) {
          return arguments.length ? t(rS((e = +r)), rA(e)) : e;
        }),
        rp(r)
      );
    }
    function rE() {
      var t = rP(e7());
      return (
        (t.copy = function () {
          return e9(t, rE()).constant(t.constant());
        }),
        t1.apply(t, arguments)
      );
    }
    function rk(t) {
      return function (e) {
        return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
      };
    }
    function rM(t) {
      return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
    }
    function rT(t) {
      return t < 0 ? -t * t : t * t;
    }
    function r_(t) {
      var e = t(e4, e4),
        r = 1;
      return (
        (e.exponent = function (e) {
          return arguments.length
            ? 1 == (r = +e)
              ? t(e4, e4)
              : 0.5 === r
                ? t(rM, rT)
                : t(rk(r), rk(1 / r))
            : r;
        }),
        rp(e)
      );
    }
    function rC() {
      var t = r_(e7());
      return (
        (t.copy = function () {
          return e9(t, rC()).exponent(t.exponent());
        }),
        t1.apply(t, arguments),
        t
      );
    }
    function rI() {
      return rC.apply(null, arguments).exponent(0.5);
    }
    function rD(t) {
      return Math.sign(t) * t * t;
    }
    function rN() {
      var t,
        e = rt(),
        r = [0, 1],
        n = !1;
      function o(r) {
        var o,
          i = Math.sign((o = e(r))) * Math.sqrt(Math.abs(o));
        return isNaN(i) ? t : n ? Math.round(i) : i;
      }
      return (
        (o.invert = function (t) {
          return e.invert(rD(t));
        }),
        (o.domain = function (t) {
          return arguments.length ? (e.domain(t), o) : e.domain();
        }),
        (o.range = function (t) {
          return arguments.length
            ? (e.range((r = Array.from(t, e2)).map(rD)), o)
            : r.slice();
        }),
        (o.rangeRound = function (t) {
          return o.range(t).round(!0);
        }),
        (o.round = function (t) {
          return arguments.length ? ((n = !!t), o) : n;
        }),
        (o.clamp = function (t) {
          return arguments.length ? (e.clamp(t), o) : e.clamp();
        }),
        (o.unknown = function (e) {
          return arguments.length ? ((t = e), o) : t;
        }),
        (o.copy = function () {
          return rN(e.domain(), r).round(n).clamp(e.clamp()).unknown(t);
        }),
        t1.apply(o, arguments),
        rp(o)
      );
    }
    function rR(t, e) {
      let r;
      if (void 0 === e)
        for (let e of t)
          null != e && (r < e || (void 0 === r && e >= e)) && (r = e);
      else {
        let n = -1;
        for (let o of t)
          null != (o = e(o, ++n, t)) &&
            (r < o || (void 0 === r && o >= o)) &&
            (r = o);
      }
      return r;
    }
    function rB(t, e) {
      let r;
      if (void 0 === e)
        for (let e of t)
          null != e && (r > e || (void 0 === r && e >= e)) && (r = e);
      else {
        let n = -1;
        for (let o of t)
          null != (o = e(o, ++n, t)) &&
            (r > o || (void 0 === r && o >= o)) &&
            (r = o);
      }
      return r;
    }
    function rL(t, e) {
      return (
        (null == t || !(t >= t)) - (null == e || !(e >= e)) ||
        (t < e ? -1 : +(t > e))
      );
    }
    function rU(t, e, r) {
      let n = t[e];
      (t[e] = t[r]), (t[r] = n);
    }
    function r$() {
      var t,
        e = [],
        r = [],
        n = [];
      function o() {
        var t = 0,
          o = Math.max(1, r.length);
        for (n = Array(o - 1); ++t < o; )
          n[t - 1] = (function (t, e, r = ef) {
            if (!(!(n = t.length) || isNaN((e *= 1)))) {
              if (e <= 0 || n < 2) return +r(t[0], 0, t);
              if (e >= 1) return +r(t[n - 1], n - 1, t);
              var n,
                o = (n - 1) * e,
                i = Math.floor(o),
                a = +r(t[i], i, t);
              return a + (r(t[i + 1], i + 1, t) - a) * (o - i);
            }
          })(e, t / o);
        return i;
      }
      function i(e) {
        return null == e || isNaN((e *= 1)) ? t : r[ed(n, e)];
      }
      return (
        (i.invertExtent = function (t) {
          var o = r.indexOf(t);
          return o < 0
            ? [NaN, NaN]
            : [o > 0 ? n[o - 1] : e[0], o < n.length ? n[o] : e[e.length - 1]];
        }),
        (i.domain = function (t) {
          if (!arguments.length) return e.slice();
          for (let r of ((e = []), t))
            null == r || isNaN((r *= 1)) || e.push(r);
          return e.sort(eu), o();
        }),
        (i.range = function (t) {
          return arguments.length ? ((r = Array.from(t)), o()) : r.slice();
        }),
        (i.unknown = function (e) {
          return arguments.length ? ((t = e), i) : t;
        }),
        (i.quantiles = function () {
          return n.slice();
        }),
        (i.copy = function () {
          return r$().domain(e).range(r).unknown(t);
        }),
        t1.apply(i, arguments)
      );
    }
    function rz() {
      var t,
        e = 0,
        r = 1,
        n = 1,
        o = [0.5],
        i = [0, 1];
      function a(e) {
        return null != e && e <= e ? i[ed(o, e, 0, n)] : t;
      }
      function u() {
        var t = -1;
        for (o = Array(n); ++t < n; )
          o[t] = ((t + 1) * r - (t - n) * e) / (n + 1);
        return a;
      }
      return (
        (a.domain = function (t) {
          return arguments.length
            ? (([e, r] = t), (e *= 1), (r *= 1), u())
            : [e, r];
        }),
        (a.range = function (t) {
          return arguments.length
            ? ((n = (i = Array.from(t)).length - 1), u())
            : i.slice();
        }),
        (a.invertExtent = function (t) {
          var a = i.indexOf(t);
          return a < 0
            ? [NaN, NaN]
            : a < 1
              ? [e, o[0]]
              : a >= n
                ? [o[n - 1], r]
                : [o[a - 1], o[a]];
        }),
        (a.unknown = function (e) {
          return arguments.length && (t = e), a;
        }),
        (a.thresholds = function () {
          return o.slice();
        }),
        (a.copy = function () {
          return rz().domain([e, r]).range(i).unknown(t);
        }),
        t1.apply(rp(a), arguments)
      );
    }
    function rF() {
      var t,
        e = [0.5],
        r = [0, 1],
        n = 1;
      function o(o) {
        return null != o && o <= o ? r[ed(e, o, 0, n)] : t;
      }
      return (
        (o.domain = function (t) {
          return arguments.length
            ? ((n = Math.min((e = Array.from(t)).length, r.length - 1)), o)
            : e.slice();
        }),
        (o.range = function (t) {
          return arguments.length
            ? ((r = Array.from(t)), (n = Math.min(e.length, r.length - 1)), o)
            : r.slice();
        }),
        (o.invertExtent = function (t) {
          var n = r.indexOf(t);
          return [e[n - 1], e[n]];
        }),
        (o.unknown = function (e) {
          return arguments.length ? ((t = e), o) : t;
        }),
        (o.copy = function () {
          return rF().domain(e).range(r).unknown(t);
        }),
        t1.apply(o, arguments)
      );
    }
    (x = (g = (function (t) {
      var e,
        r,
        n,
        o =
          void 0 === t.grouping || void 0 === t.thousands
            ? rc
            : ((e = rl.call(t.grouping, Number)),
              (r = t.thousands + ''),
              function (t, n) {
                for (
                  var o = t.length, i = [], a = 0, u = e[0], c = 0;
                  o > 0 &&
                  u > 0 &&
                  (c + u + 1 > n && (u = Math.max(1, n - c)),
                  i.push(t.substring((o -= u), o + u)),
                  !((c += u + 1) > n));

                )
                  u = e[(a = (a + 1) % e.length)];
                return i.reverse().join(r);
              }),
        i = void 0 === t.currency ? '' : t.currency[0] + '',
        a = void 0 === t.currency ? '' : t.currency[1] + '',
        u = void 0 === t.decimal ? '.' : t.decimal + '',
        c =
          void 0 === t.numerals
            ? rc
            : ((n = rl.call(t.numerals, String)),
              function (t) {
                return t.replace(/[0-9]/g, function (t) {
                  return n[+t];
                });
              }),
        l = void 0 === t.percent ? '%' : t.percent + '',
        s = void 0 === t.minus ? '−' : t.minus + '',
        f = void 0 === t.nan ? 'NaN' : t.nan + '';
      function p(t, e) {
        var r = (t = ro(t)).fill,
          n = t.align,
          p = t.sign,
          d = t.symbol,
          h = t.zero,
          y = t.width,
          v = t.comma,
          m = t.precision,
          g = t.trim,
          x = t.type;
        'n' === x
          ? ((v = !0), (x = 'g'))
          : ru[x] || (void 0 === m && (m = 12), (g = !0), (x = 'g')),
          (h || ('0' === r && '=' === n)) && ((h = !0), (r = '0'), (n = '='));
        var O =
            (e && void 0 !== e.prefix ? e.prefix : '') +
            ('$' === d
              ? i
              : '#' === d && /[boxX]/.test(x)
                ? '0' + x.toLowerCase()
                : ''),
          w =
            ('$' === d ? a : /[%p]/.test(x) ? l : '') +
            (e && void 0 !== e.suffix ? e.suffix : ''),
          j = ru[x],
          S = /[defgprs%]/.test(x);
        function A(t) {
          var e,
            i,
            a,
            l = O,
            d = w;
          if ('c' === x) (d = j(t) + d), (t = '');
          else {
            var A = (t *= 1) < 0 || 1 / t < 0;
            if (
              ((t = isNaN(t) ? f : j(Math.abs(t), m)),
              g &&
                (t = (function (t) {
                  e: for (var e, r = t.length, n = 1, o = -1; n < r; ++n)
                    switch (t[n]) {
                      case '.':
                        o = e = n;
                        break;
                      case '0':
                        0 === o && (o = n), (e = n);
                        break;
                      default:
                        if (!+t[n]) break e;
                        o > 0 && (o = 0);
                    }
                  return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
                })(t)),
              A && 0 == +t && '+' !== p && (A = !1),
              (l =
                (A ? ('(' === p ? p : s) : '-' === p || '(' === p ? '' : p) +
                l),
              (d =
                ('s' !== x || isNaN(t) || void 0 === b ? '' : rs[8 + b / 3]) +
                d +
                (A && '(' === p ? ')' : '')),
              S)
            ) {
              for (e = -1, i = t.length; ++e < i; )
                if (48 > (a = t.charCodeAt(e)) || a > 57) {
                  (d = (46 === a ? u + t.slice(e + 1) : t.slice(e)) + d),
                    (t = t.slice(0, e));
                  break;
                }
            }
          }
          v && !h && (t = o(t, 1 / 0));
          var P = l.length + t.length + d.length,
            E = P < y ? Array(y - P + 1).join(r) : '';
          switch (
            (v &&
              h &&
              ((t = o(E + t, E.length ? y - d.length : 1 / 0)), (E = '')),
            n)
          ) {
            case '<':
              t = l + t + d + E;
              break;
            case '=':
              t = l + E + t + d;
              break;
            case '^':
              t = E.slice(0, (P = E.length >> 1)) + l + t + d + E.slice(P);
              break;
            default:
              t = E + l + t + d;
          }
          return c(t);
        }
        return (
          (m =
            void 0 === m
              ? 6
              : /[gprs]/.test(x)
                ? Math.max(1, Math.min(21, m))
                : Math.max(0, Math.min(20, m))),
          (A.toString = function () {
            return t + '';
          }),
          A
        );
      }
      return {
        format: p,
        formatPrefix: function (t, e) {
          var r = 3 * Math.max(-8, Math.min(8, Math.floor(rr(e) / 3))),
            n = Math.pow(10, -r),
            o = p((((t = ro(t)).type = 'f'), t), { suffix: rs[8 + r / 3] });
          return function (t) {
            return o(n * t);
          };
        }
      };
    })({ thousands: ',', grouping: [3], currency: ['$', ''] })).format),
      (O = g.formatPrefix);
    let rq = new Date(),
      rW = new Date();
    function rX(t, e, r, n) {
      function o(e) {
        return t((e = 0 == arguments.length ? new Date() : new Date(+e))), e;
      }
      return (
        (o.floor = (e) => (t((e = new Date(+e))), e)),
        (o.ceil = (r) => (t((r = new Date(r - 1))), e(r, 1), t(r), r)),
        (o.round = (t) => {
          let e = o(t),
            r = o.ceil(t);
          return t - e < r - t ? e : r;
        }),
        (o.offset = (t, r) => (
          e((t = new Date(+t)), null == r ? 1 : Math.floor(r)), t
        )),
        (o.range = (r, n, i) => {
          let a,
            u = [];
          if (
            ((r = o.ceil(r)),
            (i = null == i ? 1 : Math.floor(i)),
            !(r < n) || !(i > 0))
          )
            return u;
          do u.push((a = new Date(+r))), e(r, i), t(r);
          while (a < r && r < n);
          return u;
        }),
        (o.filter = (r) =>
          rX(
            (e) => {
              if (e >= e) for (; t(e), !r(e); ) e.setTime(e - 1);
            },
            (t, n) => {
              if (t >= t)
                if (n < 0) for (; ++n <= 0; ) for (; e(t, -1), !r(t); );
                else for (; --n >= 0; ) for (; e(t, 1), !r(t); );
            }
          )),
        r &&
          ((o.count = (e, n) => (
            rq.setTime(+e), rW.setTime(+n), t(rq), t(rW), Math.floor(r(rq, rW))
          )),
          (o.every = (t) =>
            isFinite((t = Math.floor(t))) && t > 0
              ? t > 1
                ? o.filter(
                    n ? (e) => n(e) % t == 0 : (e) => o.count(0, e) % t == 0
                  )
                : o
              : null)),
        o
      );
    }
    let rH = rX(
      (t) => {
        t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
      },
      (t, e) => {
        t.setFullYear(t.getFullYear() + e);
      },
      (t, e) => e.getFullYear() - t.getFullYear(),
      (t) => t.getFullYear()
    );
    (rH.every = (t) =>
      isFinite((t = Math.floor(t))) && t > 0
        ? rX(
            (e) => {
              e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                e.setMonth(0, 1),
                e.setHours(0, 0, 0, 0);
            },
            (e, r) => {
              e.setFullYear(e.getFullYear() + r * t);
            }
          )
        : null),
      rH.range;
    let rV = rX(
      (t) => {
        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
      },
      (t, e) => {
        t.setUTCFullYear(t.getUTCFullYear() + e);
      },
      (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
      (t) => t.getUTCFullYear()
    );
    (rV.every = (t) =>
      isFinite((t = Math.floor(t))) && t > 0
        ? rX(
            (e) => {
              e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                e.setUTCMonth(0, 1),
                e.setUTCHours(0, 0, 0, 0);
            },
            (e, r) => {
              e.setUTCFullYear(e.getUTCFullYear() + r * t);
            }
          )
        : null),
      rV.range;
    let rK = rX(
      (t) => {
        t.setDate(1), t.setHours(0, 0, 0, 0);
      },
      (t, e) => {
        t.setMonth(t.getMonth() + e);
      },
      (t, e) =>
        e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12,
      (t) => t.getMonth()
    );
    rK.range;
    let rG = rX(
      (t) => {
        t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
      },
      (t, e) => {
        t.setUTCMonth(t.getUTCMonth() + e);
      },
      (t, e) =>
        e.getUTCMonth() -
        t.getUTCMonth() +
        (e.getUTCFullYear() - t.getUTCFullYear()) * 12,
      (t) => t.getUTCMonth()
    );
    rG.range;
    function rY(t) {
      return rX(
        (e) => {
          e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
            e.setHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setDate(t.getDate() + 7 * e);
        },
        (t, e) =>
          (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) /
          6048e5
      );
    }
    let rZ = rY(0),
      rJ = rY(1),
      rQ = rY(2),
      r0 = rY(3),
      r1 = rY(4),
      r2 = rY(5),
      r3 = rY(6);
    function r4(t) {
      return rX(
        (e) => {
          e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
            e.setUTCHours(0, 0, 0, 0);
        },
        (t, e) => {
          t.setUTCDate(t.getUTCDate() + 7 * e);
        },
        (t, e) => (e - t) / 6048e5
      );
    }
    rZ.range, rJ.range, rQ.range, r0.range, r1.range, r2.range, r3.range;
    let r5 = r4(0),
      r8 = r4(1),
      r6 = r4(2),
      r9 = r4(3),
      r7 = r4(4),
      nt = r4(5),
      ne = r4(6);
    r5.range, r8.range, r6.range, r9.range, r7.range, nt.range, ne.range;
    let nr = rX(
      (t) => t.setHours(0, 0, 0, 0),
      (t, e) => t.setDate(t.getDate() + e),
      (t, e) =>
        (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5,
      (t) => t.getDate() - 1
    );
    nr.range;
    let nn = rX(
      (t) => {
        t.setUTCHours(0, 0, 0, 0);
      },
      (t, e) => {
        t.setUTCDate(t.getUTCDate() + e);
      },
      (t, e) => (e - t) / 864e5,
      (t) => t.getUTCDate() - 1
    );
    nn.range;
    let no = rX(
      (t) => {
        t.setUTCHours(0, 0, 0, 0);
      },
      (t, e) => {
        t.setUTCDate(t.getUTCDate() + e);
      },
      (t, e) => (e - t) / 864e5,
      (t) => Math.floor(t / 864e5)
    );
    no.range;
    let ni = rX(
      (t) => {
        t.setTime(
          t - t.getMilliseconds() - 1e3 * t.getSeconds() - 6e4 * t.getMinutes()
        );
      },
      (t, e) => {
        t.setTime(+t + 36e5 * e);
      },
      (t, e) => (e - t) / 36e5,
      (t) => t.getHours()
    );
    ni.range;
    let na = rX(
      (t) => {
        t.setUTCMinutes(0, 0, 0);
      },
      (t, e) => {
        t.setTime(+t + 36e5 * e);
      },
      (t, e) => (e - t) / 36e5,
      (t) => t.getUTCHours()
    );
    na.range;
    let nu = rX(
      (t) => {
        t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds());
      },
      (t, e) => {
        t.setTime(+t + 6e4 * e);
      },
      (t, e) => (e - t) / 6e4,
      (t) => t.getMinutes()
    );
    nu.range;
    let nc = rX(
      (t) => {
        t.setUTCSeconds(0, 0);
      },
      (t, e) => {
        t.setTime(+t + 6e4 * e);
      },
      (t, e) => (e - t) / 6e4,
      (t) => t.getUTCMinutes()
    );
    nc.range;
    let nl = rX(
      (t) => {
        t.setTime(t - t.getMilliseconds());
      },
      (t, e) => {
        t.setTime(+t + 1e3 * e);
      },
      (t, e) => (e - t) / 1e3,
      (t) => t.getUTCSeconds()
    );
    nl.range;
    let ns = rX(
      () => {},
      (t, e) => {
        t.setTime(+t + e);
      },
      (t, e) => e - t
    );
    function nf(t, e, r, n, o, i) {
      let a = [
        [nl, 1, 1e3],
        [nl, 5, 5e3],
        [nl, 15, 15e3],
        [nl, 30, 3e4],
        [i, 1, 6e4],
        [i, 5, 3e5],
        [i, 15, 9e5],
        [i, 30, 18e5],
        [o, 1, 36e5],
        [o, 3, 108e5],
        [o, 6, 216e5],
        [o, 12, 432e5],
        [n, 1, 864e5],
        [n, 2, 1728e5],
        [r, 1, 6048e5],
        [e, 1, 2592e6],
        [e, 3, 7776e6],
        [t, 1, 31536e6]
      ];
      function u(e, r, n) {
        let o = Math.abs(r - e) / n,
          i = el(([, , t]) => t).right(a, o);
        if (i === a.length) return t.every(ea(e / 31536e6, r / 31536e6, n));
        if (0 === i) return ns.every(Math.max(ea(e, r, n), 1));
        let [u, c] = a[o / a[i - 1][2] < a[i][2] / o ? i - 1 : i];
        return u.every(c);
      }
      return [
        function (t, e, r) {
          let n = e < t;
          n && ([t, e] = [e, t]);
          let o = r && 'function' == typeof r.range ? r : u(t, e, r),
            i = o ? o.range(t, +e + 1) : [];
          return n ? i.reverse() : i;
        },
        u
      ];
    }
    (ns.every = (t) =>
      isFinite((t = Math.floor(t))) && t > 0
        ? t > 1
          ? rX(
              (e) => {
                e.setTime(Math.floor(e / t) * t);
              },
              (e, r) => {
                e.setTime(+e + r * t);
              },
              (e, r) => (r - e) / t
            )
          : ns
        : null),
      ns.range;
    let [np, nd] = nf(rV, rG, r5, no, na, nc),
      [nh, ny] = nf(rH, rK, rZ, nr, ni, nu);
    function nv(t) {
      if (0 <= t.y && t.y < 100) {
        var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return e.setFullYear(t.y), e;
      }
      return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
    }
    function nm(t) {
      if (0 <= t.y && t.y < 100) {
        var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return e.setUTCFullYear(t.y), e;
      }
      return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
    }
    function nb(t, e, r) {
      return { y: t, m: e, d: r, H: 0, M: 0, S: 0, L: 0 };
    }
    var ng = { '-': '', _: ' ', 0: '0' },
      nx = /^\s*\d+/,
      nO = /^%/,
      nw = /[\\^$*+?|[\]().{}]/g;
    function nj(t, e, r) {
      var n = t < 0 ? '-' : '',
        o = (n ? -t : t) + '',
        i = o.length;
      return n + (i < r ? Array(r - i + 1).join(e) + o : o);
    }
    function nS(t) {
      return t.replace(nw, '\\$&');
    }
    function nA(t) {
      return RegExp('^(?:' + t.map(nS).join('|') + ')', 'i');
    }
    function nP(t) {
      return new Map(t.map((t, e) => [t.toLowerCase(), e]));
    }
    function nE(t, e, r) {
      var n = nx.exec(e.slice(r, r + 1));
      return n ? ((t.w = +n[0]), r + n[0].length) : -1;
    }
    function nk(t, e, r) {
      var n = nx.exec(e.slice(r, r + 1));
      return n ? ((t.u = +n[0]), r + n[0].length) : -1;
    }
    function nM(t, e, r) {
      var n = nx.exec(e.slice(r, r + 2));
      return n ? ((t.U = +n[0]), r + n[0].length) : -1;
    }
    function nT(t, e, r) {
      var n = nx.exec(e.slice(r, r + 2));
      return n ? ((t.V = +n[0]), r + n[0].length) : -1;
    }
    function n_(t, e, r) {
      var n = nx.exec(e.slice(r, r + 2));
      return n ? ((t.W = +n[0]), r + n[0].length) : -1;
    }
    function nC(t, e, r) {
      var n = nx.exec(e.slice(r, r + 4));
      return n ? ((t.y = +n[0]), r + n[0].length) : -1;
    }
    function nI(t, e, r) {
      var n = nx.exec(e.slice(r, r + 2));
      return n
        ? ((t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length)
        : -1;
    }
    function nD(t, e, r) {
      var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
      return n
        ? ((t.Z = n[1] ? 0 : -(n[2] + (n[3] || '00'))), r + n[0].length)
        : -1;
    }
    function nN(t, e, r) {
      var n = nx.exec(e.slice(r, r + 1));
      return n ? ((t.q = 3 * n[0] - 3), r + n[0].length) : -1;
    }
    function nR(t, e, r) {
      var n = nx.exec(e.slice(r, r + 2));
      return n ? ((t.m = n[0] - 1), r + n[0].length) : -1;
    }
    function nB(t, e, r) {
      var n = nx.exec(e.slice(r, r + 2));
      return n ? ((t.d = +n[0]), r + n[0].length) : -1;
    }
    function nL(t, e, r) {
      var n = nx.exec(e.slice(r, r + 3));
      return n ? ((t.m = 0), (t.d = +n[0]), r + n[0].length) : -1;
    }
    function nU(t, e, r) {
      var n = nx.exec(e.slice(r, r + 2));
      return n ? ((t.H = +n[0]), r + n[0].length) : -1;
    }
    function n$(t, e, r) {
      var n = nx.exec(e.slice(r, r + 2));
      return n ? ((t.M = +n[0]), r + n[0].length) : -1;
    }
    function nz(t, e, r) {
      var n = nx.exec(e.slice(r, r + 2));
      return n ? ((t.S = +n[0]), r + n[0].length) : -1;
    }
    function nF(t, e, r) {
      var n = nx.exec(e.slice(r, r + 3));
      return n ? ((t.L = +n[0]), r + n[0].length) : -1;
    }
    function nq(t, e, r) {
      var n = nx.exec(e.slice(r, r + 6));
      return n ? ((t.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
    }
    function nW(t, e, r) {
      var n = nO.exec(e.slice(r, r + 1));
      return n ? r + n[0].length : -1;
    }
    function nX(t, e, r) {
      var n = nx.exec(e.slice(r));
      return n ? ((t.Q = +n[0]), r + n[0].length) : -1;
    }
    function nH(t, e, r) {
      var n = nx.exec(e.slice(r));
      return n ? ((t.s = +n[0]), r + n[0].length) : -1;
    }
    function nV(t, e) {
      return nj(t.getDate(), e, 2);
    }
    function nK(t, e) {
      return nj(t.getHours(), e, 2);
    }
    function nG(t, e) {
      return nj(t.getHours() % 12 || 12, e, 2);
    }
    function nY(t, e) {
      return nj(1 + nr.count(rH(t), t), e, 3);
    }
    function nZ(t, e) {
      return nj(t.getMilliseconds(), e, 3);
    }
    function nJ(t, e) {
      return nZ(t, e) + '000';
    }
    function nQ(t, e) {
      return nj(t.getMonth() + 1, e, 2);
    }
    function n0(t, e) {
      return nj(t.getMinutes(), e, 2);
    }
    function n1(t, e) {
      return nj(t.getSeconds(), e, 2);
    }
    function n2(t) {
      var e = t.getDay();
      return 0 === e ? 7 : e;
    }
    function n3(t, e) {
      return nj(rZ.count(rH(t) - 1, t), e, 2);
    }
    function n4(t) {
      var e = t.getDay();
      return e >= 4 || 0 === e ? r1(t) : r1.ceil(t);
    }
    function n5(t, e) {
      return (t = n4(t)), nj(r1.count(rH(t), t) + (4 === rH(t).getDay()), e, 2);
    }
    function n8(t) {
      return t.getDay();
    }
    function n6(t, e) {
      return nj(rJ.count(rH(t) - 1, t), e, 2);
    }
    function n9(t, e) {
      return nj(t.getFullYear() % 100, e, 2);
    }
    function n7(t, e) {
      return nj((t = n4(t)).getFullYear() % 100, e, 2);
    }
    function ot(t, e) {
      return nj(t.getFullYear() % 1e4, e, 4);
    }
    function oe(t, e) {
      var r = t.getDay();
      return nj(
        (t = r >= 4 || 0 === r ? r1(t) : r1.ceil(t)).getFullYear() % 1e4,
        e,
        4
      );
    }
    function or(t) {
      var e = t.getTimezoneOffset();
      return (
        (e > 0 ? '-' : ((e *= -1), '+')) +
        nj((e / 60) | 0, '0', 2) +
        nj(e % 60, '0', 2)
      );
    }
    function on(t, e) {
      return nj(t.getUTCDate(), e, 2);
    }
    function oo(t, e) {
      return nj(t.getUTCHours(), e, 2);
    }
    function oi(t, e) {
      return nj(t.getUTCHours() % 12 || 12, e, 2);
    }
    function oa(t, e) {
      return nj(1 + nn.count(rV(t), t), e, 3);
    }
    function ou(t, e) {
      return nj(t.getUTCMilliseconds(), e, 3);
    }
    function oc(t, e) {
      return ou(t, e) + '000';
    }
    function ol(t, e) {
      return nj(t.getUTCMonth() + 1, e, 2);
    }
    function os(t, e) {
      return nj(t.getUTCMinutes(), e, 2);
    }
    function of(t, e) {
      return nj(t.getUTCSeconds(), e, 2);
    }
    function op(t) {
      var e = t.getUTCDay();
      return 0 === e ? 7 : e;
    }
    function od(t, e) {
      return nj(r5.count(rV(t) - 1, t), e, 2);
    }
    function oh(t) {
      var e = t.getUTCDay();
      return e >= 4 || 0 === e ? r7(t) : r7.ceil(t);
    }
    function oy(t, e) {
      return (
        (t = oh(t)), nj(r7.count(rV(t), t) + (4 === rV(t).getUTCDay()), e, 2)
      );
    }
    function ov(t) {
      return t.getUTCDay();
    }
    function om(t, e) {
      return nj(r8.count(rV(t) - 1, t), e, 2);
    }
    function ob(t, e) {
      return nj(t.getUTCFullYear() % 100, e, 2);
    }
    function og(t, e) {
      return nj((t = oh(t)).getUTCFullYear() % 100, e, 2);
    }
    function ox(t, e) {
      return nj(t.getUTCFullYear() % 1e4, e, 4);
    }
    function oO(t, e) {
      var r = t.getUTCDay();
      return nj(
        (t = r >= 4 || 0 === r ? r7(t) : r7.ceil(t)).getUTCFullYear() % 1e4,
        e,
        4
      );
    }
    function ow() {
      return '+0000';
    }
    function oj() {
      return '%';
    }
    function oS(t) {
      return +t;
    }
    function oA(t) {
      return Math.floor(t / 1e3);
    }
    function oP(t) {
      return new Date(t);
    }
    function oE(t) {
      return t instanceof Date ? +t : +new Date(+t);
    }
    function ok(t, e, r, n, o, i, a, u, c, l) {
      var s = rt(),
        f = s.invert,
        p = s.domain,
        d = l('.%L'),
        h = l(':%S'),
        y = l('%I:%M'),
        v = l('%I %p'),
        m = l('%a %d'),
        b = l('%b %d'),
        g = l('%B'),
        x = l('%Y');
      function O(t) {
        return (
          c(t) < t
            ? d
            : u(t) < t
              ? h
              : a(t) < t
                ? y
                : i(t) < t
                  ? v
                  : n(t) < t
                    ? o(t) < t
                      ? m
                      : b
                    : r(t) < t
                      ? g
                      : x
        )(t);
      }
      return (
        (s.invert = function (t) {
          return new Date(f(t));
        }),
        (s.domain = function (t) {
          return arguments.length ? p(Array.from(t, oE)) : p().map(oP);
        }),
        (s.ticks = function (e) {
          var r = p();
          return t(r[0], r[r.length - 1], null == e ? 10 : e);
        }),
        (s.tickFormat = function (t, e) {
          return null == e ? O : l(e);
        }),
        (s.nice = function (t) {
          var r = p();
          return (
            (t && 'function' == typeof t.range) ||
              (t = e(r[0], r[r.length - 1], null == t ? 10 : t)),
            t ? p(ry(r, t)) : s
          );
        }),
        (s.copy = function () {
          return e9(s, ok(t, e, r, n, o, i, a, u, c, l));
        }),
        s
      );
    }
    function oM() {
      return t1.apply(
        ok(nh, ny, rH, rK, rZ, nr, ni, nu, nl, j).domain([
          new Date(2e3, 0, 1),
          new Date(2e3, 0, 2)
        ]),
        arguments
      );
    }
    function oT() {
      return t1.apply(
        ok(np, nd, rV, rG, r5, nn, na, nc, nl, S).domain([
          Date.UTC(2e3, 0, 1),
          Date.UTC(2e3, 0, 2)
        ]),
        arguments
      );
    }
    function o_() {
      var t,
        e,
        r,
        n,
        o,
        i = 0,
        a = 1,
        u = e4,
        c = !1;
      function l(e) {
        return null == e || isNaN((e *= 1))
          ? o
          : u(
              0 === r
                ? 0.5
                : ((e = (n(e) - t) * r), c ? Math.max(0, Math.min(1, e)) : e)
            );
      }
      function s(t) {
        return function (e) {
          var r, n;
          return arguments.length
            ? (([r, n] = e), (u = t(r, n)), l)
            : [u(0), u(1)];
        };
      }
      return (
        (l.domain = function (o) {
          return arguments.length
            ? (([i, a] = o),
              (t = n((i *= 1))),
              (e = n((a *= 1))),
              (r = t === e ? 0 : 1 / (e - t)),
              l)
            : [i, a];
        }),
        (l.clamp = function (t) {
          return arguments.length ? ((c = !!t), l) : c;
        }),
        (l.interpolator = function (t) {
          return arguments.length ? ((u = t), l) : u;
        }),
        (l.range = s(e0)),
        (l.rangeRound = s(e1)),
        (l.unknown = function (t) {
          return arguments.length ? ((o = t), l) : o;
        }),
        function (o) {
          return (
            (n = o), (t = o(i)), (e = o(a)), (r = t === e ? 0 : 1 / (e - t)), l
          );
        }
      );
    }
    function oC(t, e) {
      return e
        .domain(t.domain())
        .interpolator(t.interpolator())
        .clamp(t.clamp())
        .unknown(t.unknown());
    }
    function oI() {
      var t = rp(o_()(e4));
      return (
        (t.copy = function () {
          return oC(t, oI());
        }),
        t2.apply(t, arguments)
      );
    }
    function oD() {
      var t = rw(o_()).domain([1, 10]);
      return (
        (t.copy = function () {
          return oC(t, oD()).base(t.base());
        }),
        t2.apply(t, arguments)
      );
    }
    function oN() {
      var t = rP(o_());
      return (
        (t.copy = function () {
          return oC(t, oN()).constant(t.constant());
        }),
        t2.apply(t, arguments)
      );
    }
    function oR() {
      var t = r_(o_());
      return (
        (t.copy = function () {
          return oC(t, oR()).exponent(t.exponent());
        }),
        t2.apply(t, arguments)
      );
    }
    function oB() {
      return oR.apply(null, arguments).exponent(0.5);
    }
    function oL() {
      var t = [],
        e = e4;
      function r(r) {
        if (null != r && !isNaN((r *= 1)))
          return e((ed(t, r, 1) - 1) / (t.length - 1));
      }
      return (
        (r.domain = function (e) {
          if (!arguments.length) return t.slice();
          for (let r of ((t = []), e))
            null == r || isNaN((r *= 1)) || t.push(r);
          return t.sort(eu), r;
        }),
        (r.interpolator = function (t) {
          return arguments.length ? ((e = t), r) : e;
        }),
        (r.range = function () {
          return t.map((r, n) => e(n / (t.length - 1)));
        }),
        (r.quantiles = function (e) {
          return Array.from({ length: e + 1 }, (r, n) =>
            (function (t, e) {
              if (
                !(
                  !(r = (t = Float64Array.from(
                    (function* (t, e) {
                      if (void 0 === e)
                        for (let e of t)
                          null != e && (e *= 1) >= e && (yield e);
                      else {
                        let r = -1;
                        for (let n of t)
                          null != (n = e(n, ++r, t)) &&
                            (n *= 1) >= n &&
                            (yield n);
                      }
                    })(t, void 0)
                  )).length) || isNaN((e *= 1))
                )
              ) {
                if (e <= 0 || r < 2) return rB(t);
                if (e >= 1) return rR(t);
                var r,
                  n = (r - 1) * e,
                  o = Math.floor(n),
                  i = rR(
                    (function t(e, r, n = 0, o = 1 / 0, i) {
                      if (
                        ((r = Math.floor(r)),
                        (n = Math.floor(Math.max(0, n))),
                        (o = Math.floor(Math.min(e.length - 1, o))),
                        !(n <= r && r <= o))
                      )
                        return e;
                      for (
                        i =
                          void 0 === i
                            ? rL
                            : (function (t = eu) {
                                if (t === eu) return rL;
                                if ('function' != typeof t)
                                  throw TypeError('compare is not a function');
                                return (e, r) => {
                                  let n = t(e, r);
                                  return n || 0 === n
                                    ? n
                                    : (0 === t(r, r)) - (0 === t(e, e));
                                };
                              })(i);
                        o > n;

                      ) {
                        if (o - n > 600) {
                          let a = o - n + 1,
                            u = r - n + 1,
                            c = Math.log(a),
                            l = 0.5 * Math.exp((2 * c) / 3),
                            s =
                              0.5 *
                              Math.sqrt((c * l * (a - l)) / a) *
                              (u - a / 2 < 0 ? -1 : 1),
                            f = Math.max(n, Math.floor(r - (u * l) / a + s)),
                            p = Math.min(
                              o,
                              Math.floor(r + ((a - u) * l) / a + s)
                            );
                          t(e, r, f, p, i);
                        }
                        let a = e[r],
                          u = n,
                          c = o;
                        for (
                          rU(e, n, r), i(e[o], a) > 0 && rU(e, n, o);
                          u < c;

                        ) {
                          for (rU(e, u, c), ++u, --c; 0 > i(e[u], a); ) ++u;
                          for (; i(e[c], a) > 0; ) --c;
                        }
                        0 === i(e[n], a) ? rU(e, n, c) : rU(e, ++c, o),
                          c <= r && (n = c + 1),
                          r <= c && (o = c - 1);
                      }
                      return e;
                    })(t, o).subarray(0, o + 1)
                  );
                return i + (rB(t.subarray(o + 1)) - i) * (n - o);
              }
            })(t, n / e)
          );
        }),
        (r.copy = function () {
          return oL(e).domain(t);
        }),
        t2.apply(r, arguments)
      );
    }
    function oU() {
      var t,
        e,
        r,
        n,
        o,
        i,
        a,
        u = 0,
        c = 0.5,
        l = 1,
        s = 1,
        f = e4,
        p = !1;
      function d(t) {
        return isNaN((t *= 1))
          ? a
          : ((t = 0.5 + ((t = +i(t)) - e) * (s * t < s * e ? n : o)),
            f(p ? Math.max(0, Math.min(1, t)) : t));
      }
      function h(t) {
        return function (e) {
          var r, n, o;
          return arguments.length
            ? (([r, n, o] = e),
              (f = (function (t, e) {
                void 0 === e && ((e = t), (t = e0));
                for (
                  var r = 0,
                    n = e.length - 1,
                    o = e[0],
                    i = Array(n < 0 ? 0 : n);
                  r < n;

                )
                  i[r] = t(o, (o = e[++r]));
                return function (t) {
                  var e = Math.max(0, Math.min(n - 1, Math.floor((t *= n))));
                  return i[e](t - e);
                };
              })(t, [r, n, o])),
              d)
            : [f(0), f(0.5), f(1)];
        };
      }
      return (
        (d.domain = function (a) {
          return arguments.length
            ? (([u, c, l] = a),
              (t = i((u *= 1))),
              (e = i((c *= 1))),
              (r = i((l *= 1))),
              (n = t === e ? 0 : 0.5 / (e - t)),
              (o = e === r ? 0 : 0.5 / (r - e)),
              (s = e < t ? -1 : 1),
              d)
            : [u, c, l];
        }),
        (d.clamp = function (t) {
          return arguments.length ? ((p = !!t), d) : p;
        }),
        (d.interpolator = function (t) {
          return arguments.length ? ((f = t), d) : f;
        }),
        (d.range = h(e0)),
        (d.rangeRound = h(e1)),
        (d.unknown = function (t) {
          return arguments.length ? ((a = t), d) : a;
        }),
        function (a) {
          return (
            (i = a),
            (t = a(u)),
            (e = a(c)),
            (r = a(l)),
            (n = t === e ? 0 : 0.5 / (e - t)),
            (o = e === r ? 0 : 0.5 / (r - e)),
            (s = e < t ? -1 : 1),
            d
          );
        }
      );
    }
    function o$() {
      var t = rp(oU()(e4));
      return (
        (t.copy = function () {
          return oC(t, o$());
        }),
        t2.apply(t, arguments)
      );
    }
    function oz() {
      var t = rw(oU()).domain([0.1, 1, 10]);
      return (
        (t.copy = function () {
          return oC(t, oz()).base(t.base());
        }),
        t2.apply(t, arguments)
      );
    }
    function oF() {
      var t = rP(oU());
      return (
        (t.copy = function () {
          return oC(t, oF()).constant(t.constant());
        }),
        t2.apply(t, arguments)
      );
    }
    function oq() {
      var t = r_(oU());
      return (
        (t.copy = function () {
          return oC(t, oq()).exponent(t.exponent());
        }),
        t2.apply(t, arguments)
      );
    }
    function oW() {
      return oq.apply(null, arguments).exponent(0.5);
    }
    (j = (w = (function (t) {
      var e = t.dateTime,
        r = t.date,
        n = t.time,
        o = t.periods,
        i = t.days,
        a = t.shortDays,
        u = t.months,
        c = t.shortMonths,
        l = nA(o),
        s = nP(o),
        f = nA(i),
        p = nP(i),
        d = nA(a),
        h = nP(a),
        y = nA(u),
        v = nP(u),
        m = nA(c),
        b = nP(c),
        g = {
          a: function (t) {
            return a[t.getDay()];
          },
          A: function (t) {
            return i[t.getDay()];
          },
          b: function (t) {
            return c[t.getMonth()];
          },
          B: function (t) {
            return u[t.getMonth()];
          },
          c: null,
          d: nV,
          e: nV,
          f: nJ,
          g: n7,
          G: oe,
          H: nK,
          I: nG,
          j: nY,
          L: nZ,
          m: nQ,
          M: n0,
          p: function (t) {
            return o[+(t.getHours() >= 12)];
          },
          q: function (t) {
            return 1 + ~~(t.getMonth() / 3);
          },
          Q: oS,
          s: oA,
          S: n1,
          u: n2,
          U: n3,
          V: n5,
          w: n8,
          W: n6,
          x: null,
          X: null,
          y: n9,
          Y: ot,
          Z: or,
          '%': oj
        },
        x = {
          a: function (t) {
            return a[t.getUTCDay()];
          },
          A: function (t) {
            return i[t.getUTCDay()];
          },
          b: function (t) {
            return c[t.getUTCMonth()];
          },
          B: function (t) {
            return u[t.getUTCMonth()];
          },
          c: null,
          d: on,
          e: on,
          f: oc,
          g: og,
          G: oO,
          H: oo,
          I: oi,
          j: oa,
          L: ou,
          m: ol,
          M: os,
          p: function (t) {
            return o[+(t.getUTCHours() >= 12)];
          },
          q: function (t) {
            return 1 + ~~(t.getUTCMonth() / 3);
          },
          Q: oS,
          s: oA,
          S: of,
          u: op,
          U: od,
          V: oy,
          w: ov,
          W: om,
          x: null,
          X: null,
          y: ob,
          Y: ox,
          Z: ow,
          '%': oj
        },
        O = {
          a: function (t, e, r) {
            var n = d.exec(e.slice(r));
            return n
              ? ((t.w = h.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          A: function (t, e, r) {
            var n = f.exec(e.slice(r));
            return n
              ? ((t.w = p.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          b: function (t, e, r) {
            var n = m.exec(e.slice(r));
            return n
              ? ((t.m = b.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          B: function (t, e, r) {
            var n = y.exec(e.slice(r));
            return n
              ? ((t.m = v.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          c: function (t, r, n) {
            return S(t, e, r, n);
          },
          d: nB,
          e: nB,
          f: nq,
          g: nI,
          G: nC,
          H: nU,
          I: nU,
          j: nL,
          L: nF,
          m: nR,
          M: n$,
          p: function (t, e, r) {
            var n = l.exec(e.slice(r));
            return n
              ? ((t.p = s.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          q: nN,
          Q: nX,
          s: nH,
          S: nz,
          u: nk,
          U: nM,
          V: nT,
          w: nE,
          W: n_,
          x: function (t, e, n) {
            return S(t, r, e, n);
          },
          X: function (t, e, r) {
            return S(t, n, e, r);
          },
          y: nI,
          Y: nC,
          Z: nD,
          '%': nW
        };
      function w(t, e) {
        return function (r) {
          var n,
            o,
            i,
            a = [],
            u = -1,
            c = 0,
            l = t.length;
          for (r instanceof Date || (r = new Date(+r)); ++u < l; )
            37 === t.charCodeAt(u) &&
              (a.push(t.slice(c, u)),
              null != (o = ng[(n = t.charAt(++u))])
                ? (n = t.charAt(++u))
                : (o = 'e' === n ? ' ' : '0'),
              (i = e[n]) && (n = i(r, o)),
              a.push(n),
              (c = u + 1));
          return a.push(t.slice(c, u)), a.join('');
        };
      }
      function j(t, e) {
        return function (r) {
          var n,
            o,
            i = nb(1900, void 0, 1);
          if (S(i, t, (r += ''), 0) != r.length) return null;
          if ('Q' in i) return new Date(i.Q);
          if ('s' in i) return new Date(1e3 * i.s + ('L' in i ? i.L : 0));
          if (
            (!e || 'Z' in i || (i.Z = 0),
            'p' in i && (i.H = (i.H % 12) + 12 * i.p),
            void 0 === i.m && (i.m = 'q' in i ? i.q : 0),
            'V' in i)
          ) {
            if (i.V < 1 || i.V > 53) return null;
            'w' in i || (i.w = 1),
              'Z' in i
                ? ((n =
                    (o = (n = nm(nb(i.y, 0, 1))).getUTCDay()) > 4 || 0 === o
                      ? r8.ceil(n)
                      : r8(n)),
                  (n = nn.offset(n, (i.V - 1) * 7)),
                  (i.y = n.getUTCFullYear()),
                  (i.m = n.getUTCMonth()),
                  (i.d = n.getUTCDate() + ((i.w + 6) % 7)))
                : ((n =
                    (o = (n = nv(nb(i.y, 0, 1))).getDay()) > 4 || 0 === o
                      ? rJ.ceil(n)
                      : rJ(n)),
                  (n = nr.offset(n, (i.V - 1) * 7)),
                  (i.y = n.getFullYear()),
                  (i.m = n.getMonth()),
                  (i.d = n.getDate() + ((i.w + 6) % 7)));
          } else
            ('W' in i || 'U' in i) &&
              ('w' in i || (i.w = 'u' in i ? i.u % 7 : +('W' in i)),
              (o =
                'Z' in i
                  ? nm(nb(i.y, 0, 1)).getUTCDay()
                  : nv(nb(i.y, 0, 1)).getDay()),
              (i.m = 0),
              (i.d =
                'W' in i
                  ? ((i.w + 6) % 7) + 7 * i.W - ((o + 5) % 7)
                  : i.w + 7 * i.U - ((o + 6) % 7)));
          return 'Z' in i
            ? ((i.H += (i.Z / 100) | 0), (i.M += i.Z % 100), nm(i))
            : nv(i);
        };
      }
      function S(t, e, r, n) {
        for (var o, i, a = 0, u = e.length, c = r.length; a < u; ) {
          if (n >= c) return -1;
          if (37 === (o = e.charCodeAt(a++))) {
            if (
              !(i = O[(o = e.charAt(a++)) in ng ? e.charAt(a++) : o]) ||
              (n = i(t, r, n)) < 0
            )
              return -1;
          } else if (o != r.charCodeAt(n++)) return -1;
        }
        return n;
      }
      return (
        (g.x = w(r, g)),
        (g.X = w(n, g)),
        (g.c = w(e, g)),
        (x.x = w(r, x)),
        (x.X = w(n, x)),
        (x.c = w(e, x)),
        {
          format: function (t) {
            var e = w((t += ''), g);
            return (
              (e.toString = function () {
                return t;
              }),
              e
            );
          },
          parse: function (t) {
            var e = j((t += ''), !1);
            return (
              (e.toString = function () {
                return t;
              }),
              e
            );
          },
          utcFormat: function (t) {
            var e = w((t += ''), x);
            return (
              (e.toString = function () {
                return t;
              }),
              e
            );
          },
          utcParse: function (t) {
            var e = j((t += ''), !0);
            return (
              (e.toString = function () {
                return t;
              }),
              e
            );
          }
        }
      );
    })({
      dateTime: '%x, %X',
      date: '%-m/%-d/%Y',
      time: '%-I:%M:%S %p',
      periods: ['AM', 'PM'],
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      shortMonths: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    })).format),
      w.parse,
      (S = w.utcFormat),
      w.utcParse,
      t.s(
        [
          'scaleBand',
          0,
          t9,
          'scaleDiverging',
          0,
          o$,
          'scaleDivergingLog',
          0,
          oz,
          'scaleDivergingPow',
          0,
          oq,
          'scaleDivergingSqrt',
          0,
          oW,
          'scaleDivergingSymlog',
          0,
          oF,
          'scaleIdentity',
          0,
          rh,
          'scaleImplicit',
          0,
          t8,
          'scaleLinear',
          0,
          rd,
          'scaleLog',
          0,
          rj,
          'scaleOrdinal',
          0,
          t6,
          'scalePoint',
          0,
          t7,
          'scalePow',
          0,
          rC,
          'scaleQuantile',
          0,
          r$,
          'scaleQuantize',
          0,
          rz,
          'scaleRadial',
          0,
          rN,
          'scaleSequential',
          0,
          oI,
          'scaleSequentialLog',
          0,
          oD,
          'scaleSequentialPow',
          0,
          oR,
          'scaleSequentialQuantile',
          0,
          oL,
          'scaleSequentialSqrt',
          0,
          oB,
          'scaleSequentialSymlog',
          0,
          oN,
          'scaleSqrt',
          0,
          rI,
          'scaleSymlog',
          0,
          rE,
          'scaleThreshold',
          0,
          rF,
          'scaleTime',
          0,
          oM,
          'scaleUtc',
          0,
          oT,
          'tickFormat',
          0,
          rf
        ],
        89717
      ),
      t.i(89717),
      t.s(
        [
          'scaleBand',
          0,
          t9,
          'scaleDiverging',
          0,
          o$,
          'scaleDivergingLog',
          0,
          oz,
          'scaleDivergingPow',
          0,
          oq,
          'scaleDivergingSqrt',
          0,
          oW,
          'scaleDivergingSymlog',
          0,
          oF,
          'scaleIdentity',
          0,
          rh,
          'scaleImplicit',
          0,
          t8,
          'scaleLinear',
          0,
          rd,
          'scaleLog',
          0,
          rj,
          'scaleOrdinal',
          0,
          t6,
          'scalePoint',
          0,
          t7,
          'scalePow',
          0,
          rC,
          'scaleQuantile',
          0,
          r$,
          'scaleQuantize',
          0,
          rz,
          'scaleRadial',
          0,
          rN,
          'scaleSequential',
          0,
          oI,
          'scaleSequentialLog',
          0,
          oD,
          'scaleSequentialPow',
          0,
          oR,
          'scaleSequentialQuantile',
          0,
          oL,
          'scaleSequentialSqrt',
          0,
          oB,
          'scaleSequentialSymlog',
          0,
          oN,
          'scaleSqrt',
          0,
          rI,
          'scaleSymlog',
          0,
          rE,
          'scaleThreshold',
          0,
          rF,
          'scaleTime',
          0,
          oM,
          'scaleUtc',
          0,
          oT,
          'tickFormat',
          0,
          rf
        ],
        29419
      );
    var oX = t.i(29419);
    function oH(t) {
      return 'object' == typeof t && 'length' in t ? t : Array.from(t);
    }
    function oV(t) {
      return function () {
        return t;
      };
    }
    function oK(t, e) {
      if ((o = t.length) > 1)
        for (var r, n, o, i = 1, a = t[e[0]], u = a.length; i < o; ++i)
          for (n = a, a = t[e[i]], r = 0; r < u; ++r)
            a[r][1] += a[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1];
    }
    function oG(t) {
      for (var e = t.length, r = Array(e); --e >= 0; ) r[e] = e;
      return r;
    }
    function oY(t, e) {
      return t[e];
    }
    function oZ(t) {
      let e = [];
      return (e.key = t), e;
    }
    Array.prototype.slice;
    var oJ = t.i(57158),
      oQ = t.i(13002),
      o0 = t.i(45734),
      o1 = t.i(54133),
      o2 = t.i(61642),
      o3 = t.i(4703),
      o4 = t.i(60600);
    function o5(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var o8 = function (t) {
        return t;
      },
      o6 = {},
      o9 = function (t) {
        return t === o6;
      },
      o7 = function (t) {
        return function e() {
          return 0 == arguments.length ||
            (1 == arguments.length &&
              o9(arguments.length <= 0 ? void 0 : arguments[0]))
            ? e
            : t.apply(void 0, arguments);
        };
      },
      it = function (t) {
        return (function t(e, r) {
          return 1 === e
            ? r
            : o7(function () {
                for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
                  o[i] = arguments[i];
                var a = o.filter(function (t) {
                  return t !== o6;
                }).length;
                return a >= e
                  ? r.apply(void 0, o)
                  : t(
                      e - a,
                      o7(function () {
                        for (
                          var t = arguments.length, e = Array(t), n = 0;
                          n < t;
                          n++
                        )
                          e[n] = arguments[n];
                        var i = o.map(function (t) {
                          return o9(t) ? e.shift() : t;
                        });
                        return r.apply(
                          void 0,
                          (
                            (function (t) {
                              if (Array.isArray(t)) return o5(t);
                            })(i) ||
                            (function (t) {
                              if (
                                'u' > typeof Symbol &&
                                Symbol.iterator in Object(t)
                              )
                                return Array.from(t);
                            })(i) ||
                            (function (t) {
                              if (t) {
                                if ('string' == typeof t) return o5(t, void 0);
                                var e = Object.prototype.toString
                                  .call(t)
                                  .slice(8, -1);
                                if (
                                  ('Object' === e &&
                                    t.constructor &&
                                    (e = t.constructor.name),
                                  'Map' === e || 'Set' === e)
                                )
                                  return Array.from(t);
                                if (
                                  'Arguments' === e ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    e
                                  )
                                )
                                  return o5(t, void 0);
                              }
                            })(i) ||
                            (function () {
                              throw TypeError(
                                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                              );
                            })()
                          ).concat(e)
                        );
                      })
                    );
              });
        })(t.length, t);
      },
      ie = function (t, e) {
        for (var r = [], n = t; n < e; ++n) r[n - t] = n;
        return r;
      },
      ir = it(function (t, e) {
        return Array.isArray(e)
          ? e.map(t)
          : Object.keys(e)
              .map(function (t) {
                return e[t];
              })
              .map(t);
      }),
      io = function () {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        if (!e.length) return o8;
        var n = e.reverse(),
          o = n[0],
          i = n.slice(1);
        return function () {
          return i.reduce(
            function (t, e) {
              return e(t);
            },
            o.apply(void 0, arguments)
          );
        };
      },
      ii = function (t) {
        return Array.isArray(t) ? t.reverse() : t.split('').reverse.join('');
      },
      ia = function (t) {
        var e = null,
          r = null;
        return function () {
          for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
          return e &&
            o.every(function (t, r) {
              return t === e[r];
            })
            ? r
            : ((e = o), (r = t.apply(void 0, o)));
        };
      };
    it(function (t, e, r) {
      var n = +t;
      return n + r * (e - n);
    }),
      it(function (t, e, r) {
        var n = e - t;
        return (r - t) / (n = n || 1 / 0);
      }),
      it(function (t, e, r) {
        var n = e - t;
        return Math.max(0, Math.min(1, (r - t) / (n = n || 1 / 0)));
      });
    let iu = function (t, e, r) {
        for (var n = new o4.default(t), o = 0, i = []; n.lt(e) && o < 1e5; )
          i.push(n.toNumber()), (n = n.add(r)), o++;
        return i;
      },
      ic = function (t) {
        return 0 === t
          ? 1
          : Math.floor(new o4.default(t).abs().log(10).toNumber()) + 1;
      };
    function il(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return id(t);
        })(t) ||
        (function (t) {
          if ('u' > typeof Symbol && Symbol.iterator in Object(t))
            return Array.from(t);
        })(t) ||
        ip(t) ||
        (function () {
          throw TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function is(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ('u' > typeof Symbol && Symbol.iterator in Object(t)) {
            var r = [],
              n = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, u = t[Symbol.iterator]();
                !(n = (a = u.next()).done) &&
                (r.push(a.value), !e || r.length !== e);
                n = !0
              );
            } catch (t) {
              (o = !0), (i = t);
            } finally {
              try {
                n || null == u.return || u.return();
              } finally {
                if (o) throw i;
              }
            }
            return r;
          }
        })(t, e) ||
        ip(t, e) ||
        (function () {
          throw TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function ip(t, e) {
      if (t) {
        if ('string' == typeof t) return id(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          ('Object' === r && t.constructor && (r = t.constructor.name),
          'Map' === r || 'Set' === r)
        )
          return Array.from(t);
        if (
          'Arguments' === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return id(t, e);
      }
    }
    function id(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function ih(t) {
      var e = is(t, 2),
        r = e[0],
        n = e[1],
        o = r,
        i = n;
      return r > n && ((o = n), (i = r)), [o, i];
    }
    function iy(t, e, r) {
      if (t.lte(0)) return new o4.default(0);
      var n = ic(t.toNumber()),
        o = new o4.default(10).pow(n),
        i = t.div(o),
        a = 1 !== n ? 0.05 : 0.1,
        u = new o4.default(Math.ceil(i.div(a).toNumber())).add(r).mul(a).mul(o);
      return e ? u : new o4.default(Math.ceil(u));
    }
    function iv(t, e, r) {
      var n = 1,
        o = new o4.default(t);
      if (!o.isint() && r) {
        var i = Math.abs(t);
        i < 1
          ? ((n = new o4.default(10).pow(ic(t) - 1)),
            (o = new o4.default(Math.floor(o.div(n).toNumber())).mul(n)))
          : i > 1 && (o = new o4.default(Math.floor(t)));
      } else
        0 === t
          ? (o = new o4.default(Math.floor((e - 1) / 2)))
          : r || (o = new o4.default(Math.floor(t)));
      var a = Math.floor((e - 1) / 2);
      return io(
        ir(function (t) {
          return o.add(new o4.default(t - a).mul(n)).toNumber();
        }),
        ie
      )(0, e);
    }
    var im = ia(function (t) {
      var e = is(t, 2),
        r = e[0],
        n = e[1],
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
        i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = Math.max(o, 2),
        u = is(ih([r, n]), 2),
        c = u[0],
        l = u[1];
      if (c === -1 / 0 || l === 1 / 0) {
        var s =
          l === 1 / 0
            ? [c].concat(
                il(
                  ie(0, o - 1).map(function () {
                    return 1 / 0;
                  })
                )
              )
            : [].concat(
                il(
                  ie(0, o - 1).map(function () {
                    return -1 / 0;
                  })
                ),
                [l]
              );
        return r > n ? ii(s) : s;
      }
      if (c === l) return iv(c, o, i);
      var f = (function t(e, r, n, o) {
          var i,
            a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0;
          if (!Number.isFinite((r - e) / (n - 1)))
            return {
              step: new o4.default(0),
              tickMin: new o4.default(0),
              tickMax: new o4.default(0)
            };
          var u = iy(new o4.default(r).sub(e).div(n - 1), o, a),
            c = Math.ceil(
              (i =
                e <= 0 && r >= 0
                  ? new o4.default(0)
                  : (i = new o4.default(e).add(r).div(2)).sub(
                      new o4.default(i).mod(u)
                    ))
                .sub(e)
                .div(u)
                .toNumber()
            ),
            l = Math.ceil(new o4.default(r).sub(i).div(u).toNumber()),
            s = c + l + 1;
          return s > n
            ? t(e, r, n, o, a + 1)
            : (s < n &&
                ((l = r > 0 ? l + (n - s) : l), (c = r > 0 ? c : c + (n - s))),
              {
                step: u,
                tickMin: i.sub(new o4.default(c).mul(u)),
                tickMax: i.add(new o4.default(l).mul(u))
              });
        })(c, l, a, i),
        p = f.step,
        d = iu(f.tickMin, f.tickMax.add(new o4.default(0.1).mul(p)), p);
      return r > n ? ii(d) : d;
    });
    ia(function (t) {
      var e = is(t, 2),
        r = e[0],
        n = e[1],
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
        i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = Math.max(o, 2),
        u = is(ih([r, n]), 2),
        c = u[0],
        l = u[1];
      if (c === -1 / 0 || l === 1 / 0) return [r, n];
      if (c === l) return iv(c, o, i);
      var s = iy(new o4.default(l).sub(c).div(a - 1), i, 0),
        f = io(
          ir(function (t) {
            return new o4.default(c).add(new o4.default(t).mul(s)).toNumber();
          }),
          ie
        )(0, a).filter(function (t) {
          return t >= c && t <= l;
        });
      return r > n ? ii(f) : f;
    });
    var ib = ia(function (t, e) {
      var r = is(t, 2),
        n = r[0],
        o = r[1],
        i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = is(ih([n, o]), 2),
        u = a[0],
        c = a[1];
      if (u === -1 / 0 || c === 1 / 0) return [n, o];
      if (u === c) return [u];
      var l = Math.max(e, 2),
        s = iy(new o4.default(c).sub(u).div(l - 1), i, 0),
        f = [].concat(
          il(
            iu(
              new o4.default(u),
              new o4.default(c).sub(new o4.default(0.99).mul(s)),
              s
            )
          ),
          [c]
        );
      return n > o ? ii(f) : f;
    });
    function ig(t, e) {
      if (!t) throw Error('Invariant failed');
    }
    t.i(39089);
    var ix = ['children', 'className'];
    function iO() {
      return (iO = Object.assign.bind()).apply(this, arguments);
    }
    var iw = P.default.forwardRef(function (t, e) {
        var r = t.children,
          n = t.className,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (e.indexOf(n) >= 0) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]);
            }
            return o;
          })(t, ix),
          i = (0, _.default)('recharts-layer', n);
        return P.default.createElement(
          'g',
          iO({ className: i }, tv(o, !0), { ref: e }),
          r
        );
      }),
      ij = [
        'offset',
        'layout',
        'width',
        'dataKey',
        'data',
        'dataPointFormatter',
        'xAxis',
        'yAxis'
      ];
    function iS(t) {
      return (iS =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function iA() {
      return (iA = Object.assign.bind()).apply(this, arguments);
    }
    function iP(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function iE() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (t) {}
      return (iE = function () {
        return !!t;
      })();
    }
    function ik(t) {
      return (ik = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function iM(t, e) {
      return (iM = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function iT(t, e, r) {
      return (
        (e = i_(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function i_(t) {
      var e = (function (t, e) {
        if ('object' != iS(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != iS(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == iS(e) ? e : e + '';
    }
    var iC = (function (t) {
      var e;
      function r() {
        var t, e;
        if (!(this instanceof r))
          throw TypeError('Cannot call a class as a function');
        return (
          (t = r),
          (e = arguments),
          (t = ik(t)),
          (function (t, e) {
            if (e && ('object' === iS(e) || 'function' == typeof e)) return e;
            if (void 0 !== e)
              throw TypeError(
                'Derived constructors may only return object or undefined'
              );
            var r = t;
            if (void 0 === r)
              throw ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return r;
          })(
            this,
            iE()
              ? Reflect.construct(t, e || [], ik(this).constructor)
              : t.apply(this, e)
          )
        );
      }
      if ('function' != typeof t && null !== t)
        throw TypeError('Super expression must either be null or a function');
      return (
        (r.prototype = Object.create(t && t.prototype, {
          constructor: { value: r, writable: !0, configurable: !0 }
        })),
        Object.defineProperty(r, 'prototype', { writable: !1 }),
        t && iM(r, t),
        (e = [
          {
            key: 'render',
            value: function () {
              var t = this.props,
                e = t.offset,
                r = t.layout,
                n = t.width,
                o = t.dataKey,
                i = t.data,
                a = t.dataPointFormatter,
                u = t.xAxis,
                c = t.yAxis,
                l = tv(
                  (function (t, e) {
                    if (null == t) return {};
                    var r,
                      n,
                      o = (function (t, e) {
                        if (null == t) return {};
                        var r = {};
                        for (var n in t)
                          if (Object.prototype.hasOwnProperty.call(t, n)) {
                            if (e.indexOf(n) >= 0) continue;
                            r[n] = t[n];
                          }
                        return r;
                      })(t, e);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      for (n = 0; n < i.length; n++)
                        (r = i[n]),
                          !(e.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(t, r) &&
                            (o[r] = t[r]);
                    }
                    return o;
                  })(t, ij),
                  !1
                );
              'x' === this.props.direction && 'number' !== u.type && ig(!1);
              var s = i.map(function (t) {
                var i,
                  s,
                  f = a(t, o),
                  p = f.x,
                  d = f.y,
                  h = f.value,
                  y = f.errorVal;
                if (!y) return null;
                var v = [];
                if (Array.isArray(y)) {
                  var m =
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })(y) ||
                    (function (t) {
                      var e =
                        null == t
                          ? null
                          : ('u' > typeof Symbol && t[Symbol.iterator]) ||
                            t['@@iterator'];
                      if (null != e) {
                        var r,
                          n,
                          o,
                          i,
                          a = [],
                          u = !0,
                          c = !1;
                        try {
                          (o = (e = e.call(t)).next), !1;
                          for (
                            ;
                            !(u = (r = o.call(e)).done) &&
                            (a.push(r.value), 2 !== a.length);
                            u = !0
                          );
                        } catch (t) {
                          (c = !0), (n = t);
                        } finally {
                          try {
                            if (
                              !u &&
                              null != e.return &&
                              ((i = e.return()), Object(i) !== i)
                            )
                              return;
                          } finally {
                            if (c) throw n;
                          }
                        }
                        return a;
                      }
                    })(y) ||
                    (function (t) {
                      if (t) {
                        if ('string' == typeof t) return iP(t, 2);
                        var e = Object.prototype.toString.call(t).slice(8, -1);
                        if (
                          ('Object' === e &&
                            t.constructor &&
                            (e = t.constructor.name),
                          'Map' === e || 'Set' === e)
                        )
                          return Array.from(t);
                        if (
                          'Arguments' === e ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                        )
                          return iP(t, 2);
                      }
                    })(y) ||
                    (function () {
                      throw TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      );
                    })();
                  (i = m[0]), (s = m[1]);
                } else i = s = y;
                if ('vertical' === r) {
                  var b = u.scale,
                    g = d + e,
                    x = g + n,
                    O = g - n,
                    w = b(h - i),
                    j = b(h + s);
                  v.push({ x1: j, y1: x, x2: j, y2: O }),
                    v.push({ x1: w, y1: g, x2: j, y2: g }),
                    v.push({ x1: w, y1: x, x2: w, y2: O });
                } else if ('horizontal' === r) {
                  var S = c.scale,
                    A = p + e,
                    E = A - n,
                    k = A + n,
                    M = S(h - i),
                    T = S(h + s);
                  v.push({ x1: E, y1: T, x2: k, y2: T }),
                    v.push({ x1: A, y1: M, x2: A, y2: T }),
                    v.push({ x1: E, y1: M, x2: k, y2: M });
                }
                return P.default.createElement(
                  iw,
                  iA(
                    {
                      className: 'recharts-errorBar',
                      key: 'bar-'.concat(
                        v.map(function (t) {
                          return ''
                            .concat(t.x1, '-')
                            .concat(t.x2, '-')
                            .concat(t.y1, '-')
                            .concat(t.y2);
                        })
                      )
                    },
                    l
                  ),
                  v.map(function (t) {
                    return P.default.createElement(
                      'line',
                      iA({}, t, {
                        key: 'line-'
                          .concat(t.x1, '-')
                          .concat(t.x2, '-')
                          .concat(t.y1, '-')
                          .concat(t.y2)
                      })
                    );
                  })
                );
              });
              return P.default.createElement(
                iw,
                { className: 'recharts-errorBars' },
                s
              );
            }
          }
        ]),
        (function (t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, i_(n.key), n);
          }
        })(r.prototype, e),
        Object.defineProperty(r, 'prototype', { writable: !1 }),
        r
      );
    })(P.default.Component);
    iT(iC, 'defaultProps', {
      stroke: 'black',
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: 'horizontal'
    }),
      iT(iC, 'displayName', 'ErrorBar');
    var iI = function (t, e) {
        for (
          var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2;
          o < r;
          o++
        )
          n[o - 2] = arguments[o];
      },
      iD = [
        'children',
        'width',
        'height',
        'viewBox',
        'className',
        'style',
        'title',
        'desc'
      ];
    function iN() {
      return (iN = Object.assign.bind()).apply(this, arguments);
    }
    function iR(t) {
      var e = t.children,
        r = t.width,
        n = t.height,
        o = t.viewBox,
        i = t.className,
        a = t.style,
        u = t.title,
        c = t.desc,
        l = (function (t, e) {
          if (null == t) return {};
          var r,
            n,
            o = (function (t, e) {
              if (null == t) return {};
              var r = {};
              for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                  if (e.indexOf(n) >= 0) continue;
                  r[n] = t[n];
                }
              return r;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]),
                !(e.indexOf(r) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]);
          }
          return o;
        })(t, iD),
        s = o || { width: r, height: n, x: 0, y: 0 },
        f = (0, _.default)('recharts-surface', i);
      return P.default.createElement(
        'svg',
        iN({}, tv(l, !0, 'svg'), {
          className: f,
          width: r,
          height: n,
          style: a,
          viewBox: ''
            .concat(s.x, ' ')
            .concat(s.y, ' ')
            .concat(s.width, ' ')
            .concat(s.height)
        }),
        P.default.createElement('title', null, u),
        P.default.createElement('desc', null, c),
        e
      );
    }
    let iB = Math.PI,
      iL = 2 * iB,
      iU = iL - 1e-6;
    function i$(t) {
      this._ += t[0];
      for (let e = 1, r = t.length; e < r; ++e) this._ += arguments[e] + t[e];
    }
    class iz {
      constructor(t) {
        (this._x0 = this._y0 = this._x1 = this._y1 = null),
          (this._ = ''),
          (this._append =
            null == t
              ? i$
              : (function (t) {
                  let e = Math.floor(t);
                  if (!(e >= 0)) throw Error(`invalid digits: ${t}`);
                  if (e > 15) return i$;
                  let r = 10 ** e;
                  return function (t) {
                    this._ += t[0];
                    for (let e = 1, n = t.length; e < n; ++e)
                      this._ += Math.round(arguments[e] * r) / r + t[e];
                  };
                })(t));
      }
      moveTo(t, e) {
        this
          ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +e)}`;
      }
      closePath() {
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
      }
      lineTo(t, e) {
        this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
      }
      quadraticCurveTo(t, e, r, n) {
        this._append`Q${+t},${+e},${(this._x1 = +r)},${(this._y1 = +n)}`;
      }
      bezierCurveTo(t, e, r, n, o, i) {
        this
          ._append`C${+t},${+e},${+r},${+n},${(this._x1 = +o)},${(this._y1 = +i)}`;
      }
      arcTo(t, e, r, n, o) {
        if (((t *= 1), (e *= 1), (r *= 1), (n *= 1), (o *= 1) < 0))
          throw Error(`negative radius: ${o}`);
        let i = this._x1,
          a = this._y1,
          u = r - t,
          c = n - e,
          l = i - t,
          s = a - e,
          f = l * l + s * s;
        if (null === this._x1)
          this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
        else if (f > 1e-6)
          if (Math.abs(s * u - c * l) > 1e-6 && o) {
            let p = r - i,
              d = n - a,
              h = u * u + c * c,
              y = Math.sqrt(h),
              v = Math.sqrt(f),
              m =
                o *
                Math.tan(
                  (iB - Math.acos((h + f - (p * p + d * d)) / (2 * y * v))) / 2
                ),
              b = m / v,
              g = m / y;
            Math.abs(b - 1) > 1e-6 && this._append`L${t + b * l},${e + b * s}`,
              this
                ._append`A${o},${o},0,0,${+(s * p > l * d)},${(this._x1 = t + g * u)},${(this._y1 = e + g * c)}`;
          } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
      }
      arc(t, e, r, n, o, i) {
        if (((t *= 1), (e *= 1), (r *= 1), (i = !!i), r < 0))
          throw Error(`negative radius: ${r}`);
        let a = r * Math.cos(n),
          u = r * Math.sin(n),
          c = t + a,
          l = e + u,
          s = 1 ^ i,
          f = i ? n - o : o - n;
        null === this._x1
          ? this._append`M${c},${l}`
          : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - l) > 1e-6) &&
            this._append`L${c},${l}`,
          r &&
            (f < 0 && (f = (f % iL) + iL),
            f > iU
              ? this
                  ._append`A${r},${r},0,1,${s},${t - a},${e - u}A${r},${r},0,1,${s},${(this._x1 = c)},${(this._y1 = l)}`
              : f > 1e-6 &&
                this
                  ._append`A${r},${r},0,${+(f >= iB)},${s},${(this._x1 = t + r * Math.cos(o))},${(this._y1 = e + r * Math.sin(o))}`);
      }
      rect(t, e, r, n) {
        this
          ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +e)}h${(r *= 1)}v${+n}h${-r}Z`;
      }
      toString() {
        return this._;
      }
    }
    function iF(t) {
      let e = 3;
      return (
        (t.digits = function (r) {
          if (!arguments.length) return e;
          if (null == r) e = null;
          else {
            let t = Math.floor(r);
            if (!(t >= 0)) throw RangeError(`invalid digits: ${r}`);
            e = t;
          }
          return t;
        }),
        () => new iz(e)
      );
    }
    iz.prototype;
    let iq = Math.cos,
      iW = Math.sin,
      iX = Math.sqrt,
      iH = Math.PI,
      iV = 2 * iH;
    iX(3);
    let iK = {
        draw(t, e) {
          let r = iX(e / iH);
          t.moveTo(r, 0), t.arc(0, 0, r, 0, iV);
        }
      },
      iG = iX(1 / 3),
      iY = 2 * iG,
      iZ = iW(iH / 10) / iW((7 * iH) / 10),
      iJ = iW(iV / 10) * iZ,
      iQ = -iq(iV / 10) * iZ,
      i0 = iX(3);
    iX(3);
    let i1 = iX(3) / 2,
      i2 = 1 / iX(12),
      i3 = (i2 / 2 + 1) * 3;
    function i4(t) {
      return (i4 =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    var i5 = ['type', 'size', 'sizeType'];
    function i8() {
      return (i8 = Object.assign.bind()).apply(this, arguments);
    }
    function i6(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function i9(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? i6(Object(r), !0).forEach(function (e) {
              var n, o, i;
              (n = t),
                (o = e),
                (i = r[e]),
                (o = (function (t) {
                  var e = (function (t, e) {
                    if ('object' != i4(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || 'default');
                      if ('object' != i4(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === e ? String : Number)(t);
                  })(t, 'string');
                  return 'symbol' == i4(e) ? e : e + '';
                })(o)) in n
                  ? Object.defineProperty(n, o, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (n[o] = i);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : i6(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    var i7 = {
        symbolCircle: iK,
        symbolCross: {
          draw(t, e) {
            let r = iX(e / 5) / 2;
            t.moveTo(-3 * r, -r),
              t.lineTo(-r, -r),
              t.lineTo(-r, -3 * r),
              t.lineTo(r, -3 * r),
              t.lineTo(r, -r),
              t.lineTo(3 * r, -r),
              t.lineTo(3 * r, r),
              t.lineTo(r, r),
              t.lineTo(r, 3 * r),
              t.lineTo(-r, 3 * r),
              t.lineTo(-r, r),
              t.lineTo(-3 * r, r),
              t.closePath();
          }
        },
        symbolDiamond: {
          draw(t, e) {
            let r = iX(e / iY),
              n = r * iG;
            t.moveTo(0, -r),
              t.lineTo(n, 0),
              t.lineTo(0, r),
              t.lineTo(-n, 0),
              t.closePath();
          }
        },
        symbolSquare: {
          draw(t, e) {
            let r = iX(e),
              n = -r / 2;
            t.rect(n, n, r, r);
          }
        },
        symbolStar: {
          draw(t, e) {
            let r = iX(0.8908130915292852 * e),
              n = iJ * r,
              o = iQ * r;
            t.moveTo(0, -r), t.lineTo(n, o);
            for (let e = 1; e < 5; ++e) {
              let i = (iV * e) / 5,
                a = iq(i),
                u = iW(i);
              t.lineTo(u * r, -a * r), t.lineTo(a * n - u * o, u * n + a * o);
            }
            t.closePath();
          }
        },
        symbolTriangle: {
          draw(t, e) {
            let r = -iX(e / (3 * i0));
            t.moveTo(0, 2 * r),
              t.lineTo(-i0 * r, -r),
              t.lineTo(i0 * r, -r),
              t.closePath();
          }
        },
        symbolWye: {
          draw(t, e) {
            let r = iX(e / i3),
              n = r / 2,
              o = r * i2,
              i = r * i2 + r,
              a = -n;
            t.moveTo(n, o),
              t.lineTo(n, i),
              t.lineTo(a, i),
              t.lineTo(-0.5 * n - i1 * o, i1 * n + -0.5 * o),
              t.lineTo(-0.5 * n - i1 * i, i1 * n + -0.5 * i),
              t.lineTo(-0.5 * a - i1 * i, i1 * a + -0.5 * i),
              t.lineTo(-0.5 * n + i1 * o, -0.5 * o - i1 * n),
              t.lineTo(-0.5 * n + i1 * i, -0.5 * i - i1 * n),
              t.lineTo(-0.5 * a + i1 * i, -0.5 * i - i1 * a),
              t.closePath();
          }
        }
      },
      at = Math.PI / 180,
      ae = function (t, e, r) {
        if ('area' === e) return t;
        switch (r) {
          case 'cross':
            return (5 * t * t) / 9;
          case 'diamond':
            return (0.5 * t * t) / Math.sqrt(3);
          case 'square':
            return t * t;
          case 'star':
            var n = 18 * at;
            return (
              1.25 *
              t *
              t *
              (Math.tan(n) - Math.tan(2 * n) * Math.pow(Math.tan(n), 2))
            );
          case 'triangle':
            return (Math.sqrt(3) * t * t) / 4;
          case 'wye':
            return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
          default:
            return (Math.PI * t * t) / 4;
        }
      },
      ar = function (t) {
        var e,
          r = t.type,
          n = void 0 === r ? 'circle' : r,
          o = t.size,
          i = void 0 === o ? 64 : o,
          a = t.sizeType,
          u = void 0 === a ? 'area' : a,
          c = i9(
            i9(
              {},
              (function (t, e) {
                if (null == t) return {};
                var r,
                  n,
                  o = (function (t, e) {
                    if (null == t) return {};
                    var r = {};
                    for (var n in t)
                      if (Object.prototype.hasOwnProperty.call(t, n)) {
                        if (e.indexOf(n) >= 0) continue;
                        r[n] = t[n];
                      }
                    return r;
                  })(t, e);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(t);
                  for (n = 0; n < i.length; n++)
                    (r = i[n]),
                      !(e.indexOf(r) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(t, r) &&
                        (o[r] = t[r]);
                }
                return o;
              })(t, i5)
            ),
            {},
            { type: n, size: i, sizeType: u }
          ),
          l = c.className,
          s = c.cx,
          f = c.cy,
          p = tv(c, !0);
        return s === +s && f === +f && i === +i
          ? P.default.createElement(
              'path',
              i8({}, p, {
                className: (0, _.default)('recharts-symbols', l),
                transform: 'translate('.concat(s, ', ').concat(f, ')'),
                d:
                  ((e = i7['symbol'.concat((0, o1.default)(n))] || iK),
                  (function (t, e) {
                    let r = null,
                      n = iF(o);
                    function o() {
                      let o;
                      if (
                        (r || (r = o = n()),
                        t
                          .apply(this, arguments)
                          .draw(r, +e.apply(this, arguments)),
                        o)
                      )
                        return (r = null), o + '' || null;
                    }
                    return (
                      (t = 'function' == typeof t ? t : oV(t || iK)),
                      (e =
                        'function' == typeof e
                          ? e
                          : oV(void 0 === e ? 64 : +e)),
                      (o.type = function (e) {
                        return arguments.length
                          ? ((t = 'function' == typeof e ? e : oV(e)), o)
                          : t;
                      }),
                      (o.size = function (t) {
                        return arguments.length
                          ? ((e = 'function' == typeof t ? t : oV(+t)), o)
                          : e;
                      }),
                      (o.context = function (t) {
                        return arguments.length
                          ? ((r = null == t ? null : t), o)
                          : r;
                      }),
                      o
                    );
                  })()
                    .type(e)
                    .size(ae(i, u, n))())
              })
            )
          : null;
      };
    function an(t) {
      return (an =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function ao() {
      return (ao = Object.assign.bind()).apply(this, arguments);
    }
    function ai(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    ar.registerSymbol = function (t, e) {
      i7['symbol'.concat((0, o1.default)(t))] = e;
    };
    function aa() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (t) {}
      return (aa = function () {
        return !!t;
      })();
    }
    function au(t) {
      return (au = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function ac(t, e) {
      return (ac = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function al(t, e, r) {
      return (
        (e = as(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function as(t) {
      var e = (function (t, e) {
        if ('object' != an(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != an(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == an(e) ? e : e + '';
    }
    var af = (function (t) {
      var e;
      function r() {
        var t, e;
        if (!(this instanceof r))
          throw TypeError('Cannot call a class as a function');
        return (
          (t = r),
          (e = arguments),
          (t = au(t)),
          (function (t, e) {
            if (e && ('object' === an(e) || 'function' == typeof e)) return e;
            if (void 0 !== e)
              throw TypeError(
                'Derived constructors may only return object or undefined'
              );
            var r = t;
            if (void 0 === r)
              throw ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return r;
          })(
            this,
            aa()
              ? Reflect.construct(t, e || [], au(this).constructor)
              : t.apply(this, e)
          )
        );
      }
      if ('function' != typeof t && null !== t)
        throw TypeError('Super expression must either be null or a function');
      return (
        (r.prototype = Object.create(t && t.prototype, {
          constructor: { value: r, writable: !0, configurable: !0 }
        })),
        Object.defineProperty(r, 'prototype', { writable: !1 }),
        t && ac(r, t),
        (e = [
          {
            key: 'renderIcon',
            value: function (t) {
              var e = this.props.inactiveColor,
                r = 32 / 6,
                n = 32 / 3,
                o = t.inactive ? e : t.color;
              if ('plainline' === t.type)
                return P.default.createElement('line', {
                  strokeWidth: 4,
                  fill: 'none',
                  stroke: o,
                  strokeDasharray: t.payload.strokeDasharray,
                  x1: 0,
                  y1: 16,
                  x2: 32,
                  y2: 16,
                  className: 'recharts-legend-icon'
                });
              if ('line' === t.type)
                return P.default.createElement('path', {
                  strokeWidth: 4,
                  fill: 'none',
                  stroke: o,
                  d: 'M0,'
                    .concat(16, 'h')
                    .concat(n, '\n            A')
                    .concat(r, ',')
                    .concat(r, ',0,1,1,')
                    .concat(2 * n, ',')
                    .concat(16, '\n            H')
                    .concat(32, 'M')
                    .concat(2 * n, ',')
                    .concat(16, '\n            A')
                    .concat(r, ',')
                    .concat(r, ',0,1,1,')
                    .concat(n, ',')
                    .concat(16),
                  className: 'recharts-legend-icon'
                });
              if ('rect' === t.type)
                return P.default.createElement('path', {
                  stroke: 'none',
                  fill: o,
                  d: 'M0,'
                    .concat(4, 'h')
                    .concat(32, 'v')
                    .concat(24, 'h')
                    .concat(-32, 'z'),
                  className: 'recharts-legend-icon'
                });
              if (P.default.isValidElement(t.legendIcon)) {
                var i = (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? ai(Object(r), !0).forEach(function (e) {
                          al(t, e, r[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : ai(Object(r)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(r, e)
                            );
                          });
                  }
                  return t;
                })({}, t);
                return (
                  delete i.legendIcon, P.default.cloneElement(t.legendIcon, i)
                );
              }
              return P.default.createElement(ar, {
                fill: o,
                cx: 16,
                cy: 16,
                size: 32,
                sizeType: 'diameter',
                type: t.type
              });
            }
          },
          {
            key: 'renderItems',
            value: function () {
              var t = this,
                e = this.props,
                r = e.payload,
                n = e.iconSize,
                o = e.layout,
                i = e.formatter,
                a = e.inactiveColor,
                u = { x: 0, y: 0, width: 32, height: 32 },
                c = {
                  display: 'horizontal' === o ? 'inline-block' : 'block',
                  marginRight: 10
                },
                l = {
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  marginRight: 4
                };
              return r.map(function (e, r) {
                var o = e.formatter || i,
                  s = (0, _.default)(
                    al(
                      al(
                        { 'recharts-legend-item': !0 },
                        'legend-item-'.concat(r),
                        !0
                      ),
                      'inactive',
                      e.inactive
                    )
                  );
                if ('none' === e.type) return null;
                var f = (0, M.default)(e.value) ? null : e.value;
                iI(
                  !(0, M.default)(e.value),
                  'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>'
                );
                var p = e.inactive ? a : e.color;
                return P.default.createElement(
                  'li',
                  ao(
                    { className: s, style: c, key: 'legend-item-'.concat(r) },
                    tr(t.props, e, r)
                  ),
                  P.default.createElement(
                    iR,
                    { width: n, height: n, viewBox: u, style: l },
                    t.renderIcon(e)
                  ),
                  P.default.createElement(
                    'span',
                    {
                      className: 'recharts-legend-item-text',
                      style: { color: p }
                    },
                    o ? o(f, e, r) : f
                  )
                );
              });
            }
          },
          {
            key: 'render',
            value: function () {
              var t = this.props,
                e = t.payload,
                r = t.layout,
                n = t.align;
              return e && e.length
                ? P.default.createElement(
                    'ul',
                    {
                      className: 'recharts-default-legend',
                      style: {
                        padding: 0,
                        margin: 0,
                        textAlign: 'horizontal' === r ? n : 'left'
                      }
                    },
                    this.renderItems()
                  )
                : null;
            }
          }
        ]),
        (function (t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, as(n.key), n);
          }
        })(r.prototype, e),
        Object.defineProperty(r, 'prototype', { writable: !1 }),
        r
      );
    })(P.PureComponent);
    al(af, 'displayName', 'Legend'),
      al(af, 'defaultProps', {
        iconSize: 14,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'middle',
        inactiveColor: '#ccc'
      });
    var ap = t.i(30736);
    function ad(t, e, r) {
      return !0 === e
        ? (0, ap.default)(t, r)
        : (0, M.default)(e)
          ? (0, ap.default)(t, e)
          : t;
    }
    function ah(t) {
      return (ah =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    var ay = ['ref'];
    function av(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function am(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? av(Object(r), !0).forEach(function (e) {
              aw(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : av(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function ab(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, aj(n.key), n);
      }
    }
    function ag() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (t) {}
      return (ag = function () {
        return !!t;
      })();
    }
    function ax(t) {
      return (ax = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function aO(t, e) {
      return (aO = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function aw(t, e, r) {
      return (
        (e = aj(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function aj(t) {
      var e = (function (t, e) {
        if ('object' != ah(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != ah(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == ah(e) ? e : e + '';
    }
    function aS(t) {
      return t.value;
    }
    var aA = (function (t) {
      var e, r;
      function n() {
        var t, e, r;
        if (!(this instanceof n))
          throw TypeError('Cannot call a class as a function');
        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
          i[a] = arguments[a];
        return (
          (e = n),
          (r = [].concat(i)),
          (e = ax(e)),
          aw(
            (t = (function (t, e) {
              if (e && ('object' === ah(e) || 'function' == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  'Derived constructors may only return object or undefined'
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return r;
            })(
              this,
              ag()
                ? Reflect.construct(e, r || [], ax(this).constructor)
                : e.apply(this, r)
            )),
            'lastBoundingBox',
            { width: -1, height: -1 }
          ),
          t
        );
      }
      if ('function' != typeof t && null !== t)
        throw TypeError('Super expression must either be null or a function');
      return (
        (n.prototype = Object.create(t && t.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 }
        })),
        Object.defineProperty(n, 'prototype', { writable: !1 }),
        t && aO(n, t),
        (e = [
          {
            key: 'componentDidMount',
            value: function () {
              this.updateBBox();
            }
          },
          {
            key: 'componentDidUpdate',
            value: function () {
              this.updateBBox();
            }
          },
          {
            key: 'getBBox',
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var t = this.wrapperNode.getBoundingClientRect();
                return (
                  (t.height = this.wrapperNode.offsetHeight),
                  (t.width = this.wrapperNode.offsetWidth),
                  t
                );
              }
              return null;
            }
          },
          {
            key: 'updateBBox',
            value: function () {
              var t = this.props.onBBoxUpdate,
                e = this.getBBox();
              e
                ? (Math.abs(e.width - this.lastBoundingBox.width) > 1 ||
                    Math.abs(e.height - this.lastBoundingBox.height) > 1) &&
                  ((this.lastBoundingBox.width = e.width),
                  (this.lastBoundingBox.height = e.height),
                  t && t(e))
                : (-1 !== this.lastBoundingBox.width ||
                    -1 !== this.lastBoundingBox.height) &&
                  ((this.lastBoundingBox.width = -1),
                  (this.lastBoundingBox.height = -1),
                  t && t(null));
            }
          },
          {
            key: 'getBBoxSnapshot',
            value: function () {
              return this.lastBoundingBox.width >= 0 &&
                this.lastBoundingBox.height >= 0
                ? am({}, this.lastBoundingBox)
                : { width: 0, height: 0 };
            }
          },
          {
            key: 'getDefaultPosition',
            value: function (t) {
              var e,
                r,
                n = this.props,
                o = n.layout,
                i = n.align,
                a = n.verticalAlign,
                u = n.margin,
                c = n.chartWidth,
                l = n.chartHeight;
              return (
                (t &&
                  ((void 0 !== t.left && null !== t.left) ||
                    (void 0 !== t.right && null !== t.right))) ||
                  (e =
                    'center' === i && 'vertical' === o
                      ? { left: ((c || 0) - this.getBBoxSnapshot().width) / 2 }
                      : 'right' === i
                        ? { right: (u && u.right) || 0 }
                        : { left: (u && u.left) || 0 }),
                (t &&
                  ((void 0 !== t.top && null !== t.top) ||
                    (void 0 !== t.bottom && null !== t.bottom))) ||
                  (r =
                    'middle' === a
                      ? { top: ((l || 0) - this.getBBoxSnapshot().height) / 2 }
                      : 'bottom' === a
                        ? { bottom: (u && u.bottom) || 0 }
                        : { top: (u && u.top) || 0 }),
                am(am({}, e), r)
              );
            }
          },
          {
            key: 'render',
            value: function () {
              var t = this,
                e = this.props,
                r = e.content,
                n = e.width,
                o = e.height,
                i = e.wrapperStyle,
                a = e.payloadUniqBy,
                u = e.payload,
                c = am(
                  am(
                    {
                      position: 'absolute',
                      width: n || 'auto',
                      height: o || 'auto'
                    },
                    this.getDefaultPosition(i)
                  ),
                  i
                );
              return P.default.createElement(
                'div',
                {
                  className: 'recharts-legend-wrapper',
                  style: c,
                  ref: function (e) {
                    t.wrapperNode = e;
                  }
                },
                (function (t, e) {
                  if (P.default.isValidElement(t))
                    return P.default.cloneElement(t, e);
                  if ('function' == typeof t)
                    return P.default.createElement(t, e);
                  e.ref;
                  var r = (function (t, e) {
                    if (null == t) return {};
                    var r,
                      n,
                      o = (function (t, e) {
                        if (null == t) return {};
                        var r = {};
                        for (var n in t)
                          if (Object.prototype.hasOwnProperty.call(t, n)) {
                            if (e.indexOf(n) >= 0) continue;
                            r[n] = t[n];
                          }
                        return r;
                      })(t, e);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      for (n = 0; n < i.length; n++)
                        (r = i[n]),
                          !(e.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(t, r) &&
                            (o[r] = t[r]);
                    }
                    return o;
                  })(e, ay);
                  return P.default.createElement(af, r);
                })(r, am(am({}, this.props), {}, { payload: ad(u, a, aS) }))
              );
            }
          }
        ]),
        (r = [
          {
            key: 'getWithHeight',
            value: function (t, e) {
              var r = am(am({}, this.defaultProps), t.props).layout;
              return 'vertical' === r && L(t.props.height)
                ? { height: t.props.height }
                : 'horizontal' === r
                  ? { width: t.props.width || e }
                  : null;
            }
          }
        ]),
        e && ab(n.prototype, e),
        r && ab(n, r),
        Object.defineProperty(n, 'prototype', { writable: !1 }),
        n
      );
    })(P.PureComponent);
    function aP(t) {
      return (aP =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function aE(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function ak(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? aE(Object(r), !0).forEach(function (e) {
              var n, o, i;
              (n = t),
                (o = e),
                (i = r[e]),
                (o = (function (t) {
                  var e = (function (t, e) {
                    if ('object' != aP(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || 'default');
                      if ('object' != aP(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === e ? String : Number)(t);
                  })(t, 'string');
                  return 'symbol' == aP(e) ? e : e + '';
                })(o)) in n
                  ? Object.defineProperty(n, o, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (n[o] = i);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : aE(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    aw(aA, 'displayName', 'Legend'),
      aw(aA, 'defaultProps', {
        iconSize: 14,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
      });
    var aM = function (t) {
      var e,
        r = t.children,
        n = t.formattedGraphicalItems,
        o = t.legendWidth,
        i = t.legendContent,
        a = tp(r, aA);
      if (!a) return null;
      var u = aA.defaultProps,
        c = void 0 !== u ? ak(ak({}, u), a.props) : {};
      return (
        (e =
          a.props && a.props.payload
            ? a.props && a.props.payload
            : 'children' === i
              ? (n || []).reduce(function (t, e) {
                  var r = e.item,
                    n = e.props,
                    o = n.sectors || n.data || [];
                  return t.concat(
                    o.map(function (t) {
                      return {
                        type: a.props.iconType || r.props.legendType,
                        value: t.name,
                        color: t.fill,
                        payload: t
                      };
                    })
                  );
                }, [])
              : (n || []).map(function (t) {
                  var e = t.item,
                    r = e.type.defaultProps,
                    n = void 0 !== r ? ak(ak({}, r), e.props) : {},
                    o = n.dataKey,
                    i = n.name,
                    a = n.legendType;
                  return {
                    inactive: n.hide,
                    dataKey: o,
                    type: c.iconType || a || 'square',
                    color: aU(e),
                    value: i || o,
                    payload: n
                  };
                })),
        ak(ak(ak({}, c), aA.getWithHeight(a, o)), {}, { payload: e, item: a })
      );
    };
    function aT(t) {
      return (aT =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function a_(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return aC(t);
        })(t) ||
        (function (t) {
          if (
            ('u' > typeof Symbol && null != t[Symbol.iterator]) ||
            null != t['@@iterator']
          )
            return Array.from(t);
        })(t) ||
        (function (t) {
          if (t) {
            if ('string' == typeof t) return aC(t, void 0);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            if (
              ('Object' === e && t.constructor && (e = t.constructor.name),
              'Map' === e || 'Set' === e)
            )
              return Array.from(t);
            if (
              'Arguments' === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return aC(t, void 0);
          }
        })(t) ||
        (function () {
          throw TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function aC(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function aI(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function aD(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? aI(Object(r), !0).forEach(function (e) {
              aN(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : aI(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function aN(t, e, r) {
      var n;
      return (
        ((n = (function (t, e) {
          if ('object' != aT(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || 'default');
            if ('object' != aT(n)) return n;
            throw TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(e, 'string')),
        (e = 'symbol' == aT(n) ? n : n + '') in t)
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function aR(t, e, r) {
      return (0, k.default)(t) || (0, k.default)(e)
        ? r
        : U(e)
          ? (0, D.default)(t, e, r)
          : (0, M.default)(e)
            ? e(t)
            : r;
    }
    function aB(t, e, r, n) {
      var o = (0, o0.default)(t, function (t) {
        return aR(t, e);
      });
      if ('number' === r) {
        var i = o.filter(function (t) {
          return L(t) || parseFloat(t);
        });
        return i.length
          ? [(0, oQ.default)(i), (0, oJ.default)(i)]
          : [1 / 0, -1 / 0];
      }
      return (
        n
          ? o.filter(function (t) {
              return !(0, k.default)(t);
            })
          : o
      ).map(function (t) {
        return U(t) || t instanceof Date ? t : '';
      });
    }
    var aL = function (t) {
        var e,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = arguments.length > 2 ? arguments[2] : void 0,
          o = arguments.length > 3 ? arguments[3] : void 0,
          i = -1,
          a = null != (e = null == r ? void 0 : r.length) ? e : 0;
        if (a <= 1) return 0;
        if (
          o &&
          'angleAxis' === o.axisType &&
          1e-6 >= Math.abs(Math.abs(o.range[1] - o.range[0]) - 360)
        )
          for (var u = o.range, c = 0; c < a; c++) {
            var l = c > 0 ? n[c - 1].coordinate : n[a - 1].coordinate,
              s = n[c].coordinate,
              f = c >= a - 1 ? n[0].coordinate : n[c + 1].coordinate,
              p = void 0;
            if (R(s - l) !== R(f - s)) {
              var d = [];
              if (R(f - s) === R(u[1] - u[0])) {
                p = f;
                var h = s + u[1] - u[0];
                (d[0] = Math.min(h, (h + l) / 2)),
                  (d[1] = Math.max(h, (h + l) / 2));
              } else {
                p = l;
                var y = f + u[1] - u[0];
                (d[0] = Math.min(s, (y + s) / 2)),
                  (d[1] = Math.max(s, (y + s) / 2));
              }
              var v = [Math.min(s, (p + s) / 2), Math.max(s, (p + s) / 2)];
              if ((t > v[0] && t <= v[1]) || (t >= d[0] && t <= d[1])) {
                i = n[c].index;
                break;
              }
            } else {
              var m = Math.min(l, f),
                b = Math.max(l, f);
              if (t > (m + s) / 2 && t <= (b + s) / 2) {
                i = n[c].index;
                break;
              }
            }
          }
        else
          for (var g = 0; g < a; g++)
            if (
              (0 === g && t <= (r[g].coordinate + r[g + 1].coordinate) / 2) ||
              (g > 0 &&
                g < a - 1 &&
                t > (r[g].coordinate + r[g - 1].coordinate) / 2 &&
                t <= (r[g].coordinate + r[g + 1].coordinate) / 2) ||
              (g === a - 1 && t > (r[g].coordinate + r[g - 1].coordinate) / 2)
            ) {
              i = r[g].index;
              break;
            }
        return i;
      },
      aU = function (t) {
        var e,
          r,
          n = t.type.displayName,
          o =
            null != (e = t.type) && e.defaultProps
              ? aD(aD({}, t.type.defaultProps), t.props)
              : t.props,
          i = o.stroke,
          a = o.fill;
        switch (n) {
          case 'Line':
            r = i;
            break;
          case 'Area':
          case 'Radar':
            r = i && 'none' !== i ? i : a;
            break;
          default:
            r = a;
        }
        return r;
      },
      a$ = function (t) {
        var e = t.barSize,
          r = t.totalSize,
          n = t.stackGroups,
          o = void 0 === n ? {} : n;
        if (!o) return {};
        for (var i = {}, a = Object.keys(o), u = 0, c = a.length; u < c; u++)
          for (
            var l = o[a[u]].stackGroups,
              s = Object.keys(l),
              f = 0,
              p = s.length;
            f < p;
            f++
          ) {
            var d = l[s[f]],
              h = d.items,
              y = d.cateAxisId,
              v = h.filter(function (t) {
                return tu(t.type).indexOf('Bar') >= 0;
              });
            if (v && v.length) {
              var m = v[0].type.defaultProps,
                b = void 0 !== m ? aD(aD({}, m), v[0].props) : v[0].props,
                g = b.barSize,
                x = b[y];
              i[x] || (i[x] = []);
              var O = (0, k.default)(g) ? e : g;
              i[x].push({
                item: v[0],
                stackList: v.slice(1),
                barSize: (0, k.default)(O) ? void 0 : F(O, r, 0)
              });
            }
          }
        return i;
      },
      az = function (t) {
        var e,
          r = t.barGap,
          n = t.barCategoryGap,
          o = t.bandSize,
          i = t.sizeList,
          a = void 0 === i ? [] : i,
          u = t.maxBarSize,
          c = a.length;
        if (c < 1) return null;
        var l = F(r, o, 0, !0),
          s = [];
        if (a[0].barSize === +a[0].barSize) {
          var f = !1,
            p = o / c,
            d = a.reduce(function (t, e) {
              return t + e.barSize || 0;
            }, 0);
          (d += (c - 1) * l) >= o && ((d -= (c - 1) * l), (l = 0)),
            d >= o && p > 0 && ((f = !0), (p *= 0.9), (d = c * p));
          var h = { offset: (((o - d) / 2) | 0) - l, size: 0 };
          e = a.reduce(function (t, e) {
            var r = {
                item: e.item,
                position: {
                  offset: h.offset + h.size + l,
                  size: f ? p : e.barSize
                }
              },
              n = [].concat(a_(t), [r]);
            return (
              (h = n[n.length - 1].position),
              e.stackList &&
                e.stackList.length &&
                e.stackList.forEach(function (t) {
                  n.push({ item: t, position: h });
                }),
              n
            );
          }, s);
        } else {
          var y = F(n, o, 0, !0);
          o - 2 * y - (c - 1) * l <= 0 && (l = 0);
          var v = (o - 2 * y - (c - 1) * l) / c;
          v > 1 && (v >>= 0);
          var m = u === +u ? Math.min(v, u) : v;
          e = a.reduce(function (t, e, r) {
            var n = [].concat(a_(t), [
              {
                item: e.item,
                position: { offset: y + (v + l) * r + (v - m) / 2, size: m }
              }
            ]);
            return (
              e.stackList &&
                e.stackList.length &&
                e.stackList.forEach(function (t) {
                  n.push({ item: t, position: n[n.length - 1].position });
                }),
              n
            );
          }, s);
        }
        return e;
      },
      aF = function (t, e, r, n) {
        var o = r.children,
          i = r.width,
          a = r.margin,
          u = aM({
            children: o,
            legendWidth: i - (a.left || 0) - (a.right || 0)
          });
        if (u) {
          var c = n || {},
            l = c.width,
            s = c.height,
            f = u.align,
            p = u.verticalAlign,
            d = u.layout;
          if (
            ('vertical' === d || ('horizontal' === d && 'middle' === p)) &&
            'center' !== f &&
            L(t[f])
          )
            return aD(aD({}, t), {}, aN({}, f, t[f] + (l || 0)));
          if (
            ('horizontal' === d || ('vertical' === d && 'center' === f)) &&
            'middle' !== p &&
            L(t[p])
          )
            return aD(aD({}, t), {}, aN({}, p, t[p] + (s || 0)));
        }
        return t;
      },
      aq = function (t, e, r, n, o) {
        var i = tf(e.props.children, iC).filter(function (t) {
          var e;
          return (
            (e = t.props.direction),
            !!(0, k.default)(o) ||
              ('horizontal' === n
                ? 'yAxis' === o
                : 'vertical' === n || 'x' === e
                  ? 'xAxis' === o
                  : 'y' !== e || 'yAxis' === o)
          );
        });
        if (i && i.length) {
          var a = i.map(function (t) {
            return t.props.dataKey;
          });
          return t.reduce(
            function (t, e) {
              var n = aR(e, r);
              if ((0, k.default)(n)) return t;
              var o = Array.isArray(n)
                  ? [(0, oQ.default)(n), (0, oJ.default)(n)]
                  : [n, n],
                i = a.reduce(
                  function (t, r) {
                    var n = aR(e, r, 0),
                      i = o[0] - Math.abs(Array.isArray(n) ? n[0] : n),
                      a = o[1] + Math.abs(Array.isArray(n) ? n[1] : n);
                    return [Math.min(i, t[0]), Math.max(a, t[1])];
                  },
                  [1 / 0, -1 / 0]
                );
              return [Math.min(i[0], t[0]), Math.max(i[1], t[1])];
            },
            [1 / 0, -1 / 0]
          );
        }
        return null;
      },
      aW = function (t, e, r, n, o) {
        var i = e
          .map(function (e) {
            return aq(t, e, r, o, n);
          })
          .filter(function (t) {
            return !(0, k.default)(t);
          });
        return i && i.length
          ? i.reduce(
              function (t, e) {
                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
              },
              [1 / 0, -1 / 0]
            )
          : null;
      },
      aX = function (t, e, r, n, o) {
        var i = e.map(function (e) {
          var i = e.props.dataKey;
          return ('number' === r && i && aq(t, e, i, n)) || aB(t, i, r, o);
        });
        if ('number' === r)
          return i.reduce(
            function (t, e) {
              return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
            },
            [1 / 0, -1 / 0]
          );
        var a = {};
        return i.reduce(function (t, e) {
          for (var r = 0, n = e.length; r < n; r++)
            a[e[r]] || ((a[e[r]] = !0), t.push(e[r]));
          return t;
        }, []);
      },
      aH = function (t, e) {
        return (
          ('horizontal' === t && 'xAxis' === e) ||
          ('vertical' === t && 'yAxis' === e) ||
          ('centric' === t && 'angleAxis' === e) ||
          ('radial' === t && 'radiusAxis' === e)
        );
      },
      aV = function (t, e, r) {
        if (!t) return null;
        var n = t.scale,
          o = t.duplicateDomain,
          i = t.type,
          a = t.range,
          u = 'scaleBand' === t.realScaleType ? n.bandwidth() / 2 : 2,
          c =
            (e || r) && 'category' === i && n.bandwidth ? n.bandwidth() / u : 0;
        return ((c =
          'angleAxis' === t.axisType && (null == a ? void 0 : a.length) >= 2
            ? 2 * R(a[0] - a[1]) * c
            : c),
        e && (t.ticks || t.niceTicks))
          ? (t.ticks || t.niceTicks)
              .map(function (t) {
                return {
                  coordinate: n(o ? o.indexOf(t) : t) + c,
                  value: t,
                  offset: c
                };
              })
              .filter(function (t) {
                return !(0, I.default)(t.coordinate);
              })
          : t.isCategorical && t.categoricalDomain
            ? t.categoricalDomain.map(function (t, e) {
                return { coordinate: n(t) + c, value: t, index: e, offset: c };
              })
            : n.ticks && !r
              ? n.ticks(t.tickCount).map(function (t) {
                  return { coordinate: n(t) + c, value: t, offset: c };
                })
              : n.domain().map(function (t, e) {
                  return {
                    coordinate: n(t) + c,
                    value: o ? o[t] : t,
                    index: e,
                    offset: c
                  };
                });
      },
      aK = new WeakMap(),
      aG = function (t, e) {
        if ('function' != typeof e) return t;
        aK.has(t) || aK.set(t, new WeakMap());
        var r = aK.get(t);
        if (r.has(e)) return r.get(e);
        var n = function () {
          t.apply(void 0, arguments), e.apply(void 0, arguments);
        };
        return r.set(e, n), n;
      },
      aY = function (t, e, r) {
        var n = t.scale,
          o = t.type,
          i = t.layout,
          a = t.axisType;
        if ('auto' === n)
          return 'radial' === i && 'radiusAxis' === a
            ? { scale: oX.scaleBand(), realScaleType: 'band' }
            : 'radial' === i && 'angleAxis' === a
              ? { scale: oX.scaleLinear(), realScaleType: 'linear' }
              : 'category' === o &&
                  e &&
                  (e.indexOf('LineChart') >= 0 ||
                    e.indexOf('AreaChart') >= 0 ||
                    (e.indexOf('ComposedChart') >= 0 && !r))
                ? { scale: oX.scalePoint(), realScaleType: 'point' }
                : 'category' === o
                  ? { scale: oX.scaleBand(), realScaleType: 'band' }
                  : { scale: oX.scaleLinear(), realScaleType: 'linear' };
        if ((0, C.default)(n)) {
          var u = 'scale'.concat((0, o1.default)(n));
          return {
            scale: (oX[u] || oX.scalePoint)(),
            realScaleType: oX[u] ? u : 'point'
          };
        }
        return (0, M.default)(n)
          ? { scale: n }
          : { scale: oX.scalePoint(), realScaleType: 'point' };
      },
      aZ = function (t) {
        var e = t.domain();
        if (e && !(e.length <= 2)) {
          var r = e.length,
            n = t.range(),
            o = Math.min(n[0], n[1]) - 1e-4,
            i = Math.max(n[0], n[1]) + 1e-4,
            a = t(e[0]),
            u = t(e[r - 1]);
          (a < o || a > i || u < o || u > i) && t.domain([e[0], e[r - 1]]);
        }
      },
      aJ = function (t, e) {
        if (!t) return null;
        for (var r = 0, n = t.length; r < n; r++)
          if (t[r].item === e) return t[r].position;
        return null;
      },
      aQ = function (t, e) {
        if (!e || 2 !== e.length || !L(e[0]) || !L(e[1])) return t;
        var r = Math.min(e[0], e[1]),
          n = Math.max(e[0], e[1]),
          o = [t[0], t[1]];
        return (
          (!L(t[0]) || t[0] < r) && (o[0] = r),
          (!L(t[1]) || t[1] > n) && (o[1] = n),
          o[0] > n && (o[0] = n),
          o[1] < r && (o[1] = r),
          o
        );
      },
      a0 = {
        sign: function (t) {
          var e = t.length;
          if (!(e <= 0))
            for (var r = 0, n = t[0].length; r < n; ++r)
              for (var o = 0, i = 0, a = 0; a < e; ++a) {
                var u = (0, I.default)(t[a][r][1]) ? t[a][r][0] : t[a][r][1];
                u >= 0
                  ? ((t[a][r][0] = o), (t[a][r][1] = o + u), (o = t[a][r][1]))
                  : ((t[a][r][0] = i), (t[a][r][1] = i + u), (i = t[a][r][1]));
              }
        },
        expand: function (t, e) {
          if ((n = t.length) > 0) {
            for (var r, n, o, i = 0, a = t[0].length; i < a; ++i) {
              for (o = r = 0; r < n; ++r) o += t[r][i][1] || 0;
              if (o) for (r = 0; r < n; ++r) t[r][i][1] /= o;
            }
            oK(t, e);
          }
        },
        none: oK,
        silhouette: function (t, e) {
          if ((r = t.length) > 0) {
            for (var r, n = 0, o = t[e[0]], i = o.length; n < i; ++n) {
              for (var a = 0, u = 0; a < r; ++a) u += t[a][n][1] || 0;
              o[n][1] += o[n][0] = -u / 2;
            }
            oK(t, e);
          }
        },
        wiggle: function (t, e) {
          if ((o = t.length) > 0 && (n = (r = t[e[0]]).length) > 0) {
            for (var r, n, o, i = 0, a = 1; a < n; ++a) {
              for (var u = 0, c = 0, l = 0; u < o; ++u) {
                for (
                  var s = t[e[u]],
                    f = s[a][1] || 0,
                    p = (f - (s[a - 1][1] || 0)) / 2,
                    d = 0;
                  d < u;
                  ++d
                ) {
                  var h = t[e[d]];
                  p += (h[a][1] || 0) - (h[a - 1][1] || 0);
                }
                (c += f), (l += p * f);
              }
              (r[a - 1][1] += r[a - 1][0] = i), c && (i -= l / c);
            }
            (r[a - 1][1] += r[a - 1][0] = i), oK(t, e);
          }
        },
        positive: function (t) {
          var e = t.length;
          if (!(e <= 0))
            for (var r = 0, n = t[0].length; r < n; ++r)
              for (var o = 0, i = 0; i < e; ++i) {
                var a = (0, I.default)(t[i][r][1]) ? t[i][r][0] : t[i][r][1];
                a >= 0
                  ? ((t[i][r][0] = o), (t[i][r][1] = o + a), (o = t[i][r][1]))
                  : ((t[i][r][0] = 0), (t[i][r][1] = 0));
              }
        }
      },
      a1 = function (t, e, r) {
        var n = e.map(function (t) {
            return t.props.dataKey;
          }),
          o = a0[r];
        return (function () {
          var t = oV([]),
            e = oG,
            r = oK,
            n = oY;
          function o(o) {
            var i,
              a,
              u = Array.from(t.apply(this, arguments), oZ),
              c = u.length,
              l = -1;
            for (let t of o)
              for (i = 0, ++l; i < c; ++i)
                (u[i][l] = [0, +n(t, u[i].key, l, o)]).data = t;
            for (i = 0, a = oH(e(u)); i < c; ++i) u[a[i]].index = i;
            return r(u, a), u;
          }
          return (
            (o.keys = function (e) {
              return arguments.length
                ? ((t = 'function' == typeof e ? e : oV(Array.from(e))), o)
                : t;
            }),
            (o.value = function (t) {
              return arguments.length
                ? ((n = 'function' == typeof t ? t : oV(+t)), o)
                : n;
            }),
            (o.order = function (t) {
              return arguments.length
                ? ((e =
                    null == t
                      ? oG
                      : 'function' == typeof t
                        ? t
                        : oV(Array.from(t))),
                  o)
                : e;
            }),
            (o.offset = function (t) {
              return arguments.length ? ((r = null == t ? oK : t), o) : r;
            }),
            o
          );
        })()
          .keys(n)
          .value(function (t, e) {
            return +aR(t, e, 0);
          })
          .order(oG)
          .offset(o)(t);
      },
      a2 = function (t, e, r, n, o, i) {
        if (!t) return null;
        var a = (i ? e.reverse() : e).reduce(function (t, e) {
          var o,
            i =
              null != (o = e.type) && o.defaultProps
                ? aD(aD({}, e.type.defaultProps), e.props)
                : e.props,
            a = i.stackId;
          if (i.hide) return t;
          var u = i[r],
            c = t[u] || { hasStack: !1, stackGroups: {} };
          if (U(a)) {
            var l = c.stackGroups[a] || {
              numericAxisId: r,
              cateAxisId: n,
              items: []
            };
            l.items.push(e), (c.hasStack = !0), (c.stackGroups[a] = l);
          } else
            c.stackGroups[z('_stackId_')] = {
              numericAxisId: r,
              cateAxisId: n,
              items: [e]
            };
          return aD(aD({}, t), {}, aN({}, u, c));
        }, {});
        return Object.keys(a).reduce(function (e, i) {
          var u = a[i];
          return (
            u.hasStack &&
              (u.stackGroups = Object.keys(u.stackGroups).reduce(function (
                e,
                i
              ) {
                var a = u.stackGroups[i];
                return aD(
                  aD({}, e),
                  {},
                  aN({}, i, {
                    numericAxisId: r,
                    cateAxisId: n,
                    items: a.items,
                    stackedData: a1(t, a.items, o)
                  })
                );
              }, {})),
            aD(aD({}, e), {}, aN({}, i, u))
          );
        }, {});
      },
      a3 = function (t, e) {
        var r = e.realScaleType,
          n = e.type,
          o = e.tickCount,
          i = e.originalDomain,
          a = e.allowDecimals,
          u = r || e.scale;
        if ('auto' !== u && 'linear' !== u) return null;
        if (o && 'number' === n && i && ('auto' === i[0] || 'auto' === i[1])) {
          var c = t.domain();
          if (!c.length) return null;
          var l = im(c, o, a);
          return (
            t.domain([(0, oQ.default)(l), (0, oJ.default)(l)]), { niceTicks: l }
          );
        }
        return o && 'number' === n ? { niceTicks: ib(t.domain(), o, a) } : null;
      },
      a4 = function (t) {
        var e = t.axis,
          r = t.ticks,
          n = t.offset,
          o = t.bandSize,
          i = t.entry,
          a = t.index;
        if ('category' === e.type) return r[a] ? r[a].coordinate + n : null;
        var u = aR(i, e.dataKey, e.domain[a]);
        return (0, k.default)(u) ? null : e.scale(u) - o / 2 + n;
      },
      a5 = function (t) {
        var e = t.numericAxis,
          r = e.scale.domain();
        if ('number' === e.type) {
          var n = Math.min(r[0], r[1]),
            o = Math.max(r[0], r[1]);
          return n <= 0 && o >= 0 ? 0 : o < 0 ? o : n;
        }
        return r[0];
      },
      a8 = function (t, e) {
        var r,
          n = (
            null != (r = t.type) && r.defaultProps
              ? aD(aD({}, t.type.defaultProps), t.props)
              : t.props
          ).stackId;
        if (U(n)) {
          var o = e[n];
          if (o) {
            var i = o.items.indexOf(t);
            return i >= 0 ? o.stackedData[i] : null;
          }
        }
        return null;
      },
      a6 = function (t, e, r) {
        return Object.keys(t)
          .reduce(
            function (n, o) {
              var i = t[o].stackedData.reduce(
                function (t, n) {
                  var o = n.slice(e, r + 1).reduce(
                    function (t, e) {
                      return [
                        (0, oQ.default)(e.concat([t[0]]).filter(L)),
                        (0, oJ.default)(e.concat([t[1]]).filter(L))
                      ];
                    },
                    [1 / 0, -1 / 0]
                  );
                  return [Math.min(t[0], o[0]), Math.max(t[1], o[1])];
                },
                [1 / 0, -1 / 0]
              );
              return [Math.min(i[0], n[0]), Math.max(i[1], n[1])];
            },
            [1 / 0, -1 / 0]
          )
          .map(function (t) {
            return t === 1 / 0 || t === -1 / 0 ? 0 : t;
          });
      },
      a9 = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      a7 = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      ut = function (t, e, r) {
        if ((0, M.default)(t)) return t(e, r);
        if (!Array.isArray(t)) return e;
        var n = [];
        if (L(t[0])) n[0] = r ? t[0] : Math.min(t[0], e[0]);
        else if (a9.test(t[0])) {
          var o = +a9.exec(t[0])[1];
          n[0] = e[0] - o;
        } else (0, M.default)(t[0]) ? (n[0] = t[0](e[0])) : (n[0] = e[0]);
        if (L(t[1])) n[1] = r ? t[1] : Math.max(t[1], e[1]);
        else if (a7.test(t[1])) {
          var i = +a7.exec(t[1])[1];
          n[1] = e[1] + i;
        } else (0, M.default)(t[1]) ? (n[1] = t[1](e[1])) : (n[1] = e[1]);
        return n;
      },
      ue = function (t, e, r) {
        if (t && t.scale && t.scale.bandwidth) {
          var n = t.scale.bandwidth();
          if (!r || n > 0) return n;
        }
        if (t && e && e.length >= 2) {
          for (
            var o = (0, o3.default)(e, function (t) {
                return t.coordinate;
              }),
              i = 1 / 0,
              a = 1,
              u = o.length;
            a < u;
            a++
          ) {
            var c = o[a],
              l = o[a - 1];
            i = Math.min((c.coordinate || 0) - (l.coordinate || 0), i);
          }
          return i === 1 / 0 ? 0 : i;
        }
        return r ? void 0 : 0;
      },
      ur = function (t, e, r) {
        return !t ||
          !t.length ||
          (0, o2.default)(t, (0, D.default)(r, 'type.defaultProps.domain'))
          ? e
          : t;
      },
      un = function (t, e) {
        var r = t.type.defaultProps
            ? aD(aD({}, t.type.defaultProps), t.props)
            : t.props,
          n = r.dataKey,
          o = r.name,
          i = r.unit,
          a = r.formatter,
          u = r.tooltipType,
          c = r.chartType,
          l = r.hide;
        return aD(
          aD({}, tv(t, !1)),
          {},
          {
            dataKey: n,
            unit: i,
            formatter: a,
            name: o || n,
            color: aU(t),
            value: aR(e, n),
            type: u,
            payload: e,
            chartType: c,
            hide: l
          }
        );
      };
    function uo(t) {
      return (uo =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function ui(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function ua(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ui(Object(r), !0).forEach(function (e) {
              uu(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ui(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function uu(t, e, r) {
      var n;
      return (
        ((n = (function (t, e) {
          if ('object' != uo(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || 'default');
            if ('object' != uo(n)) return n;
            throw TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(e, 'string')),
        (e = 'symbol' == uo(n) ? n : n + '') in t)
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function uc(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var ul = Math.PI / 180,
      us = function (t, e, r, n) {
        return { x: t + Math.cos(-ul * n) * r, y: e + Math.sin(-ul * n) * r };
      },
      uf = function (t, e) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { top: 0, right: 0, bottom: 0, left: 0 };
        return (
          Math.min(
            Math.abs(t - (r.left || 0) - (r.right || 0)),
            Math.abs(e - (r.top || 0) - (r.bottom || 0))
          ) / 2
        );
      },
      up = function (t, e) {
        var r = t.x,
          n = t.y;
        return Math.sqrt(Math.pow(r - e.x, 2) + Math.pow(n - e.y, 2));
      },
      ud = function (t, e) {
        var r = t.x,
          n = t.y,
          o = e.cx,
          i = e.cy,
          a = up({ x: r, y: n }, { x: o, y: i });
        if (a <= 0) return { radius: a };
        var u = Math.acos((r - o) / a);
        return (
          n > i && (u = 2 * Math.PI - u),
          { radius: a, angle: (180 * u) / Math.PI, angleInRadian: u }
        );
      },
      uh = function (t) {
        var e = t.startAngle,
          r = t.endAngle,
          n = Math.min(Math.floor(e / 360), Math.floor(r / 360));
        return { startAngle: e - 360 * n, endAngle: r - 360 * n };
      },
      uy = function (t, e) {
        var r,
          n = ud({ x: t.x, y: t.y }, e),
          o = n.radius,
          i = n.angle,
          a = e.innerRadius,
          u = e.outerRadius;
        if (o < a || o > u) return !1;
        if (0 === o) return !0;
        var c = uh(e),
          l = c.startAngle,
          s = c.endAngle,
          f = i;
        if (l <= s) {
          for (; f > s; ) f -= 360;
          for (; f < l; ) f += 360;
          r = f >= l && f <= s;
        } else {
          for (; f > l; ) f -= 360;
          for (; f < s; ) f += 360;
          r = f >= s && f <= l;
        }
        return r
          ? ua(
              ua({}, e),
              {},
              {
                radius: o,
                angle:
                  f +
                  360 *
                    Math.min(
                      Math.floor(e.startAngle / 360),
                      Math.floor(e.endAngle / 360)
                    )
              }
            )
          : null;
      },
      uv = function (t) {
        return (0, P.isValidElement)(t) ||
          (0, M.default)(t) ||
          'boolean' == typeof t
          ? ''
          : t.className;
      };
    function um(t) {
      return (um =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    var ub = ['offset'];
    function ug(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function ux(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function uO(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ux(Object(r), !0).forEach(function (e) {
              var n, o, i;
              (n = t),
                (o = e),
                (i = r[e]),
                (o = (function (t) {
                  var e = (function (t, e) {
                    if ('object' != um(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || 'default');
                      if ('object' != um(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === e ? String : Number)(t);
                  })(t, 'string');
                  return 'symbol' == um(e) ? e : e + '';
                })(o)) in n
                  ? Object.defineProperty(n, o, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (n[o] = i);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ux(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function uw() {
      return (uw = Object.assign.bind()).apply(this, arguments);
    }
    var uj = function (t) {
        var e = t.value,
          r = t.formatter,
          n = (0, k.default)(t.children) ? e : t.children;
        return (0, M.default)(r) ? r(n) : n;
      },
      uS = function (t, e, r) {
        var n,
          o,
          i = t.position,
          a = t.viewBox,
          u = t.offset,
          c = t.className,
          l = a.cx,
          s = a.cy,
          f = a.innerRadius,
          p = a.outerRadius,
          d = a.startAngle,
          h = a.endAngle,
          y = a.clockWise,
          v = (f + p) / 2,
          m = R(h - d) * Math.min(Math.abs(h - d), 360),
          b = m >= 0 ? 1 : -1;
        'insideStart' === i
          ? ((n = d + b * u), (o = y))
          : 'insideEnd' === i
            ? ((n = h - b * u), (o = !y))
            : 'end' === i && ((n = h + b * u), (o = y)),
          (o = m <= 0 ? o : !o);
        var g = us(l, s, v, n),
          x = us(l, s, v, n + (o ? 1 : -1) * 359),
          O = 'M'
            .concat(g.x, ',')
            .concat(g.y, '\n    A')
            .concat(v, ',')
            .concat(v, ',0,1,')
            .concat(+!o, ',\n    ')
            .concat(x.x, ',')
            .concat(x.y),
          w = (0, k.default)(t.id) ? z('recharts-radial-line-') : t.id;
        return P.default.createElement(
          'text',
          uw({}, r, {
            dominantBaseline: 'central',
            className: (0, _.default)('recharts-radial-bar-label', c)
          }),
          P.default.createElement(
            'defs',
            null,
            P.default.createElement('path', { id: w, d: O })
          ),
          P.default.createElement('textPath', { xlinkHref: '#'.concat(w) }, e)
        );
      },
      uA = function (t) {
        var e = t.viewBox,
          r = t.offset,
          n = t.position,
          o = e.cx,
          i = e.cy,
          a = e.innerRadius,
          u = e.outerRadius,
          c = (e.startAngle + e.endAngle) / 2;
        if ('outside' === n) {
          var l = us(o, i, u + r, c),
            s = l.x;
          return {
            x: s,
            y: l.y,
            textAnchor: s >= o ? 'start' : 'end',
            verticalAnchor: 'middle'
          };
        }
        if ('center' === n)
          return { x: o, y: i, textAnchor: 'middle', verticalAnchor: 'middle' };
        if ('centerTop' === n)
          return { x: o, y: i, textAnchor: 'middle', verticalAnchor: 'start' };
        if ('centerBottom' === n)
          return { x: o, y: i, textAnchor: 'middle', verticalAnchor: 'end' };
        var f = us(o, i, (a + u) / 2, c);
        return {
          x: f.x,
          y: f.y,
          textAnchor: 'middle',
          verticalAnchor: 'middle'
        };
      },
      uP = function (t) {
        var e = t.viewBox,
          r = t.parentViewBox,
          n = t.offset,
          o = t.position,
          i = e.x,
          a = e.y,
          u = e.width,
          c = e.height,
          l = c >= 0 ? 1 : -1,
          s = l * n,
          f = l > 0 ? 'end' : 'start',
          p = l > 0 ? 'start' : 'end',
          d = u >= 0 ? 1 : -1,
          h = d * n,
          y = d > 0 ? 'end' : 'start',
          v = d > 0 ? 'start' : 'end';
        if ('top' === o)
          return uO(
            uO(
              {},
              {
                x: i + u / 2,
                y: a - l * n,
                textAnchor: 'middle',
                verticalAnchor: f
              }
            ),
            r ? { height: Math.max(a - r.y, 0), width: u } : {}
          );
        if ('bottom' === o)
          return uO(
            uO(
              {},
              {
                x: i + u / 2,
                y: a + c + s,
                textAnchor: 'middle',
                verticalAnchor: p
              }
            ),
            r ? { height: Math.max(r.y + r.height - (a + c), 0), width: u } : {}
          );
        if ('left' === o) {
          var m = {
            x: i - h,
            y: a + c / 2,
            textAnchor: y,
            verticalAnchor: 'middle'
          };
          return uO(
            uO({}, m),
            r ? { width: Math.max(m.x - r.x, 0), height: c } : {}
          );
        }
        if ('right' === o) {
          var b = {
            x: i + u + h,
            y: a + c / 2,
            textAnchor: v,
            verticalAnchor: 'middle'
          };
          return uO(
            uO({}, b),
            r ? { width: Math.max(r.x + r.width - b.x, 0), height: c } : {}
          );
        }
        var g = r ? { width: u, height: c } : {};
        return 'insideLeft' === o
          ? uO(
              {
                x: i + h,
                y: a + c / 2,
                textAnchor: v,
                verticalAnchor: 'middle'
              },
              g
            )
          : 'insideRight' === o
            ? uO(
                {
                  x: i + u - h,
                  y: a + c / 2,
                  textAnchor: y,
                  verticalAnchor: 'middle'
                },
                g
              )
            : 'insideTop' === o
              ? uO(
                  {
                    x: i + u / 2,
                    y: a + s,
                    textAnchor: 'middle',
                    verticalAnchor: p
                  },
                  g
                )
              : 'insideBottom' === o
                ? uO(
                    {
                      x: i + u / 2,
                      y: a + c - s,
                      textAnchor: 'middle',
                      verticalAnchor: f
                    },
                    g
                  )
                : 'insideTopLeft' === o
                  ? uO(
                      { x: i + h, y: a + s, textAnchor: v, verticalAnchor: p },
                      g
                    )
                  : 'insideTopRight' === o
                    ? uO(
                        {
                          x: i + u - h,
                          y: a + s,
                          textAnchor: y,
                          verticalAnchor: p
                        },
                        g
                      )
                    : 'insideBottomLeft' === o
                      ? uO(
                          {
                            x: i + h,
                            y: a + c - s,
                            textAnchor: v,
                            verticalAnchor: f
                          },
                          g
                        )
                      : 'insideBottomRight' === o
                        ? uO(
                            {
                              x: i + u - h,
                              y: a + c - s,
                              textAnchor: y,
                              verticalAnchor: f
                            },
                            g
                          )
                        : (0, T.default)(o) &&
                            (L(o.x) || B(o.x)) &&
                            (L(o.y) || B(o.y))
                          ? uO(
                              {
                                x: i + F(o.x, u),
                                y: a + F(o.y, c),
                                textAnchor: 'end',
                                verticalAnchor: 'end'
                              },
                              g
                            )
                          : uO(
                              {
                                x: i + u / 2,
                                y: a + c / 2,
                                textAnchor: 'middle',
                                verticalAnchor: 'middle'
                              },
                              g
                            );
      };
    function uE(t) {
      var e,
        r = t.offset,
        n = uO(
          { offset: void 0 === r ? 5 : r },
          (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (e.indexOf(n) >= 0) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]);
            }
            return o;
          })(t, ub)
        ),
        o = n.viewBox,
        i = n.position,
        a = n.value,
        u = n.children,
        c = n.content,
        l = n.className,
        s = n.textBreakAll;
      if (
        !o ||
        ((0, k.default)(a) &&
          (0, k.default)(u) &&
          !(0, P.isValidElement)(c) &&
          !(0, M.default)(c))
      )
        return null;
      if ((0, P.isValidElement)(c)) return (0, P.cloneElement)(c, n);
      if ((0, M.default)(c)) {
        if (((e = (0, P.createElement)(c, n)), (0, P.isValidElement)(e)))
          return e;
      } else e = uj(n);
      var f = 'cx' in o && L(o.cx),
        p = tv(n, !0);
      if (f && ('insideStart' === i || 'insideEnd' === i || 'end' === i))
        return uS(n, e, p);
      var d = f ? uA(n) : uP(n);
      return P.default.createElement(
        t0,
        uw(
          {
            className: (0, _.default)('recharts-label', void 0 === l ? '' : l)
          },
          p,
          d,
          { breakAll: s }
        ),
        e
      );
    }
    uE.displayName = 'Label';
    var uk = function (t) {
      var e = t.cx,
        r = t.cy,
        n = t.angle,
        o = t.startAngle,
        i = t.endAngle,
        a = t.r,
        u = t.radius,
        c = t.innerRadius,
        l = t.outerRadius,
        s = t.x,
        f = t.y,
        p = t.top,
        d = t.left,
        h = t.width,
        y = t.height,
        v = t.clockWise,
        m = t.labelViewBox;
      if (m) return m;
      if (L(h) && L(y)) {
        if (L(s) && L(f)) return { x: s, y: f, width: h, height: y };
        if (L(p) && L(d)) return { x: p, y: d, width: h, height: y };
      }
      return L(s) && L(f)
        ? { x: s, y: f, width: 0, height: 0 }
        : L(e) && L(r)
          ? {
              cx: e,
              cy: r,
              startAngle: o || n || 0,
              endAngle: i || n || 0,
              innerRadius: c || 0,
              outerRadius: l || u || a || 0,
              clockWise: v
            }
          : t.viewBox
            ? t.viewBox
            : {};
    };
    (uE.parseViewBox = uk),
      (uE.renderCallByParent = function (t, e) {
        var r,
          n,
          o =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (!t || (!t.children && o && !t.label)) return null;
        var i = t.children,
          a = uk(t),
          u = tf(i, uE).map(function (t, r) {
            return (0, P.cloneElement)(t, {
              viewBox: e || a,
              key: 'label-'.concat(r)
            });
          });
        if (!o) return u;
        return [
          ((r = t.label),
          (n = e || a),
          !r
            ? null
            : !0 === r
              ? P.default.createElement(uE, {
                  key: 'label-implicit',
                  viewBox: n
                })
              : U(r)
                ? P.default.createElement(uE, {
                    key: 'label-implicit',
                    viewBox: n,
                    value: r
                  })
                : (0, P.isValidElement)(r)
                  ? r.type === uE
                    ? (0, P.cloneElement)(r, {
                        key: 'label-implicit',
                        viewBox: n
                      })
                    : P.default.createElement(uE, {
                        key: 'label-implicit',
                        content: r,
                        viewBox: n
                      })
                  : (0, M.default)(r)
                    ? P.default.createElement(uE, {
                        key: 'label-implicit',
                        content: r,
                        viewBox: n
                      })
                    : (0, T.default)(r)
                      ? P.default.createElement(
                          uE,
                          uw({ viewBox: n }, r, { key: 'label-implicit' })
                        )
                      : null)
        ].concat(
          (function (t) {
            if (Array.isArray(t)) return ug(t);
          })(u) ||
            (function (t) {
              if (
                ('u' > typeof Symbol && null != t[Symbol.iterator]) ||
                null != t['@@iterator']
              )
                return Array.from(t);
            })(u) ||
            (function (t) {
              if (t) {
                if ('string' == typeof t) return ug(t, void 0);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ('Object' === e && t.constructor && (e = t.constructor.name),
                  'Map' === e || 'Set' === e)
                )
                  return Array.from(t);
                if (
                  'Arguments' === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                )
                  return ug(t, void 0);
              }
            })(u) ||
            (function () {
              throw TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
        );
      });
    var uM = t.i(4153);
    let { getOwnPropertyNames: uT, getOwnPropertySymbols: u_ } = Object,
      { hasOwnProperty: uC } = Object.prototype;
    function uI(t, e) {
      return function (r, n, o) {
        return t(r, n, o) && e(r, n, o);
      };
    }
    function uD(t) {
      return function (e, r, n) {
        if (!e || !r || 'object' != typeof e || 'object' != typeof r)
          return t(e, r, n);
        let { cache: o } = n,
          i = o.get(e),
          a = o.get(r);
        if (i && a) return i === r && a === e;
        o.set(e, r), o.set(r, e);
        let u = t(e, r, n);
        return o.delete(e), o.delete(r), u;
      };
    }
    function uN(t) {
      return uT(t).concat(u_(t));
    }
    let uR = Object.hasOwn || ((t, e) => uC.call(t, e));
    function uB(t, e) {
      return t === e || (!t && !e && t != t && e != e);
    }
    let { getOwnPropertyDescriptor: uL, keys: uU } = Object;
    function u$(t, e) {
      return (
        t.byteLength === e.byteLength &&
        uJ(new Uint8Array(t), new Uint8Array(e))
      );
    }
    function uz(t, e, r) {
      let n = t.length;
      if (e.length !== n) return !1;
      for (; n-- > 0; ) if (!r.equals(t[n], e[n], n, n, t, e, r)) return !1;
      return !0;
    }
    function uF(t, e) {
      return (
        t.byteLength === e.byteLength &&
        uJ(
          new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
          new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
        )
      );
    }
    function uq(t, e) {
      return uB(t.getTime(), e.getTime());
    }
    function uW(t, e) {
      return (
        t.name === e.name &&
        t.message === e.message &&
        t.cause === e.cause &&
        t.stack === e.stack
      );
    }
    function uX(t, e) {
      return t === e;
    }
    function uH(t, e, r) {
      let n,
        o,
        i = t.size;
      if (i !== e.size) return !1;
      if (!i) return !0;
      let a = Array(i),
        u = t.entries(),
        c = 0;
      for (; (n = u.next()) && !n.done; ) {
        let i = e.entries(),
          u = !1,
          l = 0;
        for (; (o = i.next()) && !o.done; ) {
          if (a[l]) {
            l++;
            continue;
          }
          let i = n.value,
            s = o.value;
          if (
            r.equals(i[0], s[0], c, l, t, e, r) &&
            r.equals(i[1], s[1], i[0], s[0], t, e, r)
          ) {
            u = a[l] = !0;
            break;
          }
          l++;
        }
        if (!u) return !1;
        c++;
      }
      return !0;
    }
    function uV(t, e, r) {
      let n = uU(t),
        o = n.length;
      if (uU(e).length !== o) return !1;
      for (; o-- > 0; ) if (!u0(t, e, r, n[o])) return !1;
      return !0;
    }
    function uK(t, e, r) {
      let n,
        o,
        i,
        a = uN(t),
        u = a.length;
      if (uN(e).length !== u) return !1;
      for (; u-- > 0; )
        if (
          !u0(t, e, r, (n = a[u])) ||
          ((o = uL(t, n)),
          (i = uL(e, n)),
          (o || i) &&
            (!o ||
              !i ||
              o.configurable !== i.configurable ||
              o.enumerable !== i.enumerable ||
              o.writable !== i.writable))
        )
          return !1;
      return !0;
    }
    function uG(t, e) {
      return uB(t.valueOf(), e.valueOf());
    }
    function uY(t, e) {
      return t.source === e.source && t.flags === e.flags;
    }
    function uZ(t, e, r) {
      let n,
        o,
        i = t.size;
      if (i !== e.size) return !1;
      if (!i) return !0;
      let a = Array(i),
        u = t.values();
      for (; (n = u.next()) && !n.done; ) {
        let i = e.values(),
          u = !1,
          c = 0;
        for (; (o = i.next()) && !o.done; ) {
          if (!a[c] && r.equals(n.value, o.value, n.value, o.value, t, e, r)) {
            u = a[c] = !0;
            break;
          }
          c++;
        }
        if (!u) return !1;
      }
      return !0;
    }
    function uJ(t, e) {
      let r = t.byteLength;
      if (e.byteLength !== r || t.byteOffset !== e.byteOffset) return !1;
      for (; r-- > 0; ) if (t[r] !== e[r]) return !1;
      return !0;
    }
    function uQ(t, e) {
      return (
        t.hostname === e.hostname &&
        t.pathname === e.pathname &&
        t.protocol === e.protocol &&
        t.port === e.port &&
        t.hash === e.hash &&
        t.username === e.username &&
        t.password === e.password
      );
    }
    function u0(t, e, r, n) {
      return (
        (('_owner' === n || '__o' === n || '__v' === n) &&
          (!!t.$$typeof || !!e.$$typeof)) ||
        (uR(e, n) && r.equals(t[n], e[n], n, n, t, e, r))
      );
    }
    let u1 = {
        '[object Int8Array]': !0,
        '[object Uint8Array]': !0,
        '[object Uint8ClampedArray]': !0,
        '[object Int16Array]': !0,
        '[object Uint16Array]': !0,
        '[object Int32Array]': !0,
        '[object Uint32Array]': !0,
        '[object Float16Array]': !0,
        '[object Float32Array]': !0,
        '[object Float64Array]': !0,
        '[object BigInt64Array]': !0,
        '[object BigUint64Array]': !0
      },
      u2 = Object.prototype.toString,
      u3 = u4();
    function u4(t = {}) {
      let {
          circular: e = !1,
          createInternalComparator: r,
          createState: n,
          strict: o = !1
        } = t,
        i = (function ({
          areArrayBuffersEqual: t,
          areArraysEqual: e,
          areDataViewsEqual: r,
          areDatesEqual: n,
          areErrorsEqual: o,
          areFunctionsEqual: i,
          areMapsEqual: a,
          areNumbersEqual: u,
          areObjectsEqual: c,
          arePrimitiveWrappersEqual: l,
          areRegExpsEqual: s,
          areSetsEqual: f,
          areTypedArraysEqual: p,
          areUrlsEqual: d,
          unknownTagComparators: h
        }) {
          return function (y, v, m) {
            if (y === v) return !0;
            if (null == y || null == v) return !1;
            let b = typeof y;
            if (b !== typeof v) return !1;
            if ('object' !== b)
              return 'number' === b
                ? u(y, v, m)
                : 'function' === b && i(y, v, m);
            let g = y.constructor;
            if (g !== v.constructor) return !1;
            if (g === Object) return c(y, v, m);
            if (Array.isArray(y)) return e(y, v, m);
            if (g === Date) return n(y, v, m);
            if (g === RegExp) return s(y, v, m);
            if (g === Map) return a(y, v, m);
            if (g === Set) return f(y, v, m);
            let x = u2.call(y);
            if ('[object Date]' === x) return n(y, v, m);
            if ('[object RegExp]' === x) return s(y, v, m);
            if ('[object Map]' === x) return a(y, v, m);
            if ('[object Set]' === x) return f(y, v, m);
            if ('[object Object]' === x)
              return (
                'function' != typeof y.then &&
                'function' != typeof v.then &&
                c(y, v, m)
              );
            if ('[object URL]' === x) return d(y, v, m);
            if ('[object Error]' === x) return o(y, v, m);
            if ('[object Arguments]' === x) return c(y, v, m);
            if (u1[x]) return p(y, v, m);
            if ('[object ArrayBuffer]' === x) return t(y, v, m);
            if ('[object DataView]' === x) return r(y, v, m);
            if (
              '[object Boolean]' === x ||
              '[object Number]' === x ||
              '[object String]' === x
            )
              return l(y, v, m);
            if (h) {
              let t = h[x];
              if (!t) {
                let e = null != y ? y[Symbol.toStringTag] : void 0;
                e && (t = h[e]);
              }
              if (t) return t(y, v, m);
            }
            return !1;
          };
        })(
          (function ({ circular: t, createCustomConfig: e, strict: r }) {
            let n = {
              areArrayBuffersEqual: u$,
              areArraysEqual: r ? uK : uz,
              areDataViewsEqual: uF,
              areDatesEqual: uq,
              areErrorsEqual: uW,
              areFunctionsEqual: uX,
              areMapsEqual: r ? uI(uH, uK) : uH,
              areNumbersEqual: uB,
              areObjectsEqual: r ? uK : uV,
              arePrimitiveWrappersEqual: uG,
              areRegExpsEqual: uY,
              areSetsEqual: r ? uI(uZ, uK) : uZ,
              areTypedArraysEqual: r ? uI(uJ, uK) : uJ,
              areUrlsEqual: uQ,
              unknownTagComparators: void 0
            };
            if ((e && (n = Object.assign({}, n, e(n))), t)) {
              let t = uD(n.areArraysEqual),
                e = uD(n.areMapsEqual),
                r = uD(n.areObjectsEqual),
                o = uD(n.areSetsEqual);
              n = Object.assign({}, n, {
                areArraysEqual: t,
                areMapsEqual: e,
                areObjectsEqual: r,
                areSetsEqual: o
              });
            }
            return n;
          })(t)
        ),
        a = r
          ? r(i)
          : function (t, e, r, n, o, a, u) {
              return i(t, e, u);
            };
      return (function ({
        circular: t,
        comparator: e,
        createState: r,
        equals: n,
        strict: o
      }) {
        if (r)
          return function (i, a) {
            let { cache: u = t ? new WeakMap() : void 0, meta: c } = r();
            return e(i, a, { cache: u, equals: n, meta: c, strict: o });
          };
        if (t)
          return function (t, r) {
            return e(t, r, {
              cache: new WeakMap(),
              equals: n,
              meta: void 0,
              strict: o
            });
          };
        let i = { cache: void 0, equals: n, meta: void 0, strict: o };
        return function (t, r) {
          return e(t, r, i);
        };
      })({ circular: e, comparator: i, createState: n, equals: a, strict: o });
    }
    function u5(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = -1;
      requestAnimationFrame(function n(o) {
        if ((r < 0 && (r = o), o - r > e)) t(o), (r = -1);
        else {
          var i;
          (i = n),
            'u' > typeof requestAnimationFrame && requestAnimationFrame(i);
        }
      });
    }
    function u8(t) {
      return (u8 =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function u6(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function u9(t) {
      return (u9 =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function u7(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function ct(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? u7(Object(r), !0).forEach(function (e) {
              ce(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : u7(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function ce(t, e, r) {
      var n;
      return (
        ((n = (function (t, e) {
          if ('object' !== u9(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || 'default');
            if ('object' !== u9(n)) return n;
            throw TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(e, 'string')),
        (e = 'symbol' === u9(n) ? n : String(n)) in t)
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    u4({ strict: !0 }),
      u4({ circular: !0 }),
      u4({ circular: !0, strict: !0 }),
      u4({ createInternalComparator: () => uB }),
      u4({ strict: !0, createInternalComparator: () => uB }),
      u4({ circular: !0, createInternalComparator: () => uB }),
      u4({ circular: !0, createInternalComparator: () => uB, strict: !0 });
    var cr = function (t) {
        return t;
      },
      cn = function (t, e) {
        return Object.keys(e).reduce(function (r, n) {
          return ct(ct({}, r), {}, ce({}, n, t(n, e[n])));
        }, {});
      },
      co = function (t, e, r) {
        return t
          .map(function (t) {
            return ''
              .concat(
                t.replace(/([A-Z])/g, function (t) {
                  return '-'.concat(t.toLowerCase());
                }),
                ' '
              )
              .concat(e, 'ms ')
              .concat(r);
          })
          .join(',');
      },
      ci = function (t, e, r, n, o, i, a, u) {};
    function ca(t, e) {
      if (t) {
        if ('string' == typeof t) return cu(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          ('Object' === r && t.constructor && (r = t.constructor.name),
          'Map' === r || 'Set' === r)
        )
          return Array.from(t);
        if (
          'Arguments' === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return cu(t, e);
      }
    }
    function cu(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var cc = function (t, e) {
        return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1];
      },
      cl = function (t, e) {
        return t
          .map(function (t, r) {
            return t * Math.pow(e, r);
          })
          .reduce(function (t, e) {
            return t + e;
          });
      },
      cs = function (t, e) {
        return function (r) {
          return cl(cc(t, e), r);
        };
      },
      cf = function () {
        for (var t, e, r = arguments.length, n = Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        var i = n[0],
          a = n[1],
          u = n[2],
          c = n[3];
        if (1 === n.length)
          switch (n[0]) {
            case 'linear':
              (i = 0), (a = 0), (u = 1), (c = 1);
              break;
            case 'ease':
              (i = 0.25), (a = 0.1), (u = 0.25), (c = 1);
              break;
            case 'ease-in':
              (i = 0.42), (a = 0), (u = 1), (c = 1);
              break;
            case 'ease-out':
              (i = 0.42), (a = 0), (u = 0.58), (c = 1);
              break;
            case 'ease-in-out':
              (i = 0), (a = 0), (u = 0.58), (c = 1);
              break;
            default:
              var l = n[0].split('(');
              if (
                'cubic-bezier' === l[0] &&
                4 === l[1].split(')')[0].split(',').length
              ) {
                var s,
                  f =
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })(
                      (s = l[1]
                        .split(')')[0]
                        .split(',')
                        .map(function (t) {
                          return parseFloat(t);
                        }))
                    ) ||
                    (function (t) {
                      var e =
                        null == t
                          ? null
                          : ('u' > typeof Symbol && t[Symbol.iterator]) ||
                            t['@@iterator'];
                      if (null != e) {
                        var r,
                          n,
                          o,
                          i,
                          a = [],
                          u = !0,
                          c = !1;
                        try {
                          (o = (e = e.call(t)).next), !1;
                          for (
                            ;
                            !(u = (r = o.call(e)).done) &&
                            (a.push(r.value), 4 !== a.length);
                            u = !0
                          );
                        } catch (t) {
                          (c = !0), (n = t);
                        } finally {
                          try {
                            if (
                              !u &&
                              null != e.return &&
                              ((i = e.return()), Object(i) !== i)
                            )
                              return;
                          } finally {
                            if (c) throw n;
                          }
                        }
                        return a;
                      }
                    })(s) ||
                    ca(s, 4) ||
                    (function () {
                      throw TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      );
                    })();
                (i = f[0]), (a = f[1]), (u = f[2]), (c = f[3]);
              } else
                ci(
                  !1,
                  "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s",
                  n
                );
          }
        ci(
          [i, u, a, c].every(function (t) {
            return 'number' == typeof t && t >= 0 && t <= 1;
          }),
          '[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s',
          n
        );
        var p = cs(i, u),
          d = cs(a, c),
          h =
            ((t = i),
            (e = u),
            function (r) {
              var n;
              return cl(
                [].concat(
                  (function (t) {
                    if (Array.isArray(t)) return cu(t);
                  })(
                    (n = cc(t, e)
                      .map(function (t, e) {
                        return t * e;
                      })
                      .slice(1))
                  ) ||
                    (function (t) {
                      if (
                        ('u' > typeof Symbol && null != t[Symbol.iterator]) ||
                        null != t['@@iterator']
                      )
                        return Array.from(t);
                    })(n) ||
                    ca(n) ||
                    (function () {
                      throw TypeError(
                        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      );
                    })(),
                  [0]
                ),
                r
              );
            }),
          y = function (t) {
            for (var e = t > 1 ? 1 : t, r = e, n = 0; n < 8; ++n) {
              var o,
                i = p(r) - e,
                a = h(r);
              if (1e-4 > Math.abs(i - e) || a < 1e-4) break;
              r = (o = r - i / a) > 1 ? 1 : o < 0 ? 0 : o;
            }
            return d(r);
          };
        return (y.isStepper = !1), y;
      },
      cp = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.stiff,
          r = void 0 === e ? 100 : e,
          n = t.damping,
          o = void 0 === n ? 8 : n,
          i = t.dt,
          a = void 0 === i ? 17 : i,
          u = function (t, e, n) {
            var i = n + ((-(t - e) * r - n * o) * a) / 1e3,
              u = (n * a) / 1e3 + t;
            return 1e-4 > Math.abs(u - e) && 1e-4 > Math.abs(i)
              ? [e, 0]
              : [u, i];
          };
        return (u.isStepper = !0), (u.dt = a), u;
      },
      cd = function () {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        var n = e[0];
        if ('string' == typeof n)
          switch (n) {
            case 'ease':
            case 'ease-in-out':
            case 'ease-out':
            case 'ease-in':
            case 'linear':
              return cf(n);
            case 'spring':
              return cp();
            default:
              if ('cubic-bezier' === n.split('(')[0]) return cf(n);
              ci(
                !1,
                "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s",
                e
              );
          }
        return 'function' == typeof n
          ? n
          : (ci(
              !1,
              '[configEasing]: first argument type should be function or string, instead received %s',
              e
            ),
            null);
      };
    function ch(t) {
      return (ch =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function cy(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return cx(t);
        })(t) ||
        (function (t) {
          if (
            ('u' > typeof Symbol && null != t[Symbol.iterator]) ||
            null != t['@@iterator']
          )
            return Array.from(t);
        })(t) ||
        cg(t) ||
        (function () {
          throw TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function cv(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function cm(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? cv(Object(r), !0).forEach(function (e) {
              cb(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : cv(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function cb(t, e, r) {
      var n;
      return (
        ((n = (function (t, e) {
          if ('object' !== ch(t) || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || 'default');
            if ('object' !== ch(n)) return n;
            throw TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(e, 'string')),
        (e = 'symbol' === ch(n) ? n : String(n)) in t)
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function cg(t, e) {
      if (t) {
        if ('string' == typeof t) return cx(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          ('Object' === r && t.constructor && (r = t.constructor.name),
          'Map' === r || 'Set' === r)
        )
          return Array.from(t);
        if (
          'Arguments' === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return cx(t, e);
      }
    }
    function cx(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var cO = function (t, e, r) {
        return t + (e - t) * r;
      },
      cw = function (t) {
        return t.from !== t.to;
      },
      cj = function t(e, r, n) {
        var o = cn(function (t, r) {
          if (cw(r)) {
            var n,
              o =
                (function (t) {
                  if (Array.isArray(t)) return t;
                })((n = e(r.from, r.to, r.velocity))) ||
                (function (t) {
                  var e =
                    null == t
                      ? null
                      : ('u' > typeof Symbol && t[Symbol.iterator]) ||
                        t['@@iterator'];
                  if (null != e) {
                    var r,
                      n,
                      o,
                      i,
                      a = [],
                      u = !0,
                      c = !1;
                    try {
                      (o = (e = e.call(t)).next), !1;
                      for (
                        ;
                        !(u = (r = o.call(e)).done) &&
                        (a.push(r.value), 2 !== a.length);
                        u = !0
                      );
                    } catch (t) {
                      (c = !0), (n = t);
                    } finally {
                      try {
                        if (
                          !u &&
                          null != e.return &&
                          ((i = e.return()), Object(i) !== i)
                        )
                          return;
                      } finally {
                        if (c) throw n;
                      }
                    }
                    return a;
                  }
                })(n) ||
                cg(n, 2) ||
                (function () {
                  throw TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                })(),
              i = o[0],
              a = o[1];
            return cm(cm({}, r), {}, { from: i, velocity: a });
          }
          return r;
        }, r);
        return n < 1
          ? cn(function (t, e) {
              return cw(e)
                ? cm(
                    cm({}, e),
                    {},
                    {
                      velocity: cO(e.velocity, o[t].velocity, n),
                      from: cO(e.from, o[t].from, n)
                    }
                  )
                : e;
            }, r)
          : t(e, o, n - 1);
      };
    let cS = function (t, e, r, n, o) {
      var i,
        a,
        u = [Object.keys(t), Object.keys(e)].reduce(function (t, e) {
          return t.filter(function (t) {
            return e.includes(t);
          });
        }),
        c = u.reduce(function (r, n) {
          return cm(cm({}, r), {}, cb({}, n, [t[n], e[n]]));
        }, {}),
        l = u.reduce(function (r, n) {
          return cm(
            cm({}, r),
            {},
            cb({}, n, { from: t[n], velocity: 0, to: e[n] })
          );
        }, {}),
        s = -1,
        f = function () {
          return null;
        };
      return (
        (f = r.isStepper
          ? function (n) {
              i || (i = n);
              var a = (n - i) / r.dt;
              (l = cj(r, l, a)),
                o(
                  cm(
                    cm(cm({}, t), e),
                    cn(function (t, e) {
                      return e.from;
                    }, l)
                  )
                ),
                (i = n),
                Object.values(l).filter(cw).length &&
                  (s = requestAnimationFrame(f));
            }
          : function (i) {
              a || (a = i);
              var u = (i - a) / n,
                l = cn(function (t, e) {
                  return cO.apply(void 0, cy(e).concat([r(u)]));
                }, c);
              if ((o(cm(cm(cm({}, t), e), l)), u < 1))
                s = requestAnimationFrame(f);
              else {
                var p = cn(function (t, e) {
                  return cO.apply(void 0, cy(e).concat([r(1)]));
                }, c);
                o(cm(cm(cm({}, t), e), p));
              }
            }),
        function () {
          return (
            requestAnimationFrame(f),
            function () {
              cancelAnimationFrame(s);
            }
          );
        }
      );
    };
    function cA(t) {
      return (cA =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    var cP = [
      'children',
      'begin',
      'duration',
      'attributeName',
      'easing',
      'isActive',
      'steps',
      'from',
      'to',
      'canBegin',
      'onAnimationEnd',
      'shouldReAnimate',
      'onAnimationReStart'
    ];
    function cE(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return ck(t);
        })(t) ||
        (function (t) {
          if (
            ('u' > typeof Symbol && null != t[Symbol.iterator]) ||
            null != t['@@iterator']
          )
            return Array.from(t);
        })(t) ||
        (function (t) {
          if (t) {
            if ('string' == typeof t) return ck(t, void 0);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            if (
              ('Object' === e && t.constructor && (e = t.constructor.name),
              'Map' === e || 'Set' === e)
            )
              return Array.from(t);
            if (
              'Arguments' === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return ck(t, void 0);
          }
        })(t) ||
        (function () {
          throw TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function ck(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function cM(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function cT(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? cM(Object(r), !0).forEach(function (e) {
              c_(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : cM(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function c_(t, e, r) {
      return (
        (e = cC(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function cC(t) {
      var e = (function (t, e) {
        if ('object' !== cA(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== cA(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === cA(e) ? e : String(e);
    }
    function cI(t, e) {
      return (cI = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function cD(t, e) {
      if (e && ('object' === cA(e) || 'function' == typeof e)) return e;
      if (void 0 !== e)
        throw TypeError(
          'Derived constructors may only return object or undefined'
        );
      return cN(t);
    }
    function cN(t) {
      if (void 0 === t)
        throw ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function cR(t) {
      return (cR = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var cB = (function (t) {
      if ('function' != typeof t && null !== t)
        throw TypeError('Super expression must either be null or a function');
      (o.prototype = Object.create(t && t.prototype, {
        constructor: { value: o, writable: !0, configurable: !0 }
      })),
        Object.defineProperty(o, 'prototype', { writable: !1 }),
        t && cI(o, t);
      var e,
        r,
        n =
          ((e = (function () {
            if (
              'u' < typeof Reflect ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })()),
          function () {
            var t,
              r = cR(o);
            return (
              (t = e
                ? Reflect.construct(r, arguments, cR(this).constructor)
                : r.apply(this, arguments)),
              cD(this, t)
            );
          });
      function o(t, e) {
        if (!(this instanceof o))
          throw TypeError('Cannot call a class as a function');
        var r = n.call(this, t, e),
          i = r.props,
          a = i.isActive,
          u = i.attributeName,
          c = i.from,
          l = i.to,
          s = i.steps,
          f = i.children,
          p = i.duration;
        if (
          ((r.handleStyleChange = r.handleStyleChange.bind(cN(r))),
          (r.changeStyle = r.changeStyle.bind(cN(r))),
          !a || p <= 0)
        )
          return (
            (r.state = { style: {} }),
            'function' == typeof f && (r.state = { style: l }),
            cD(r)
          );
        if (s && s.length) r.state = { style: s[0].style };
        else if (c) {
          if ('function' == typeof f) return (r.state = { style: c }), cD(r);
          r.state = { style: u ? c_({}, u, c) : c };
        } else r.state = { style: {} };
        return r;
      }
      return (
        (r = [
          {
            key: 'componentDidMount',
            value: function () {
              var t = this.props,
                e = t.isActive,
                r = t.canBegin;
              (this.mounted = !0), e && r && this.runAnimation(this.props);
            }
          },
          {
            key: 'componentDidUpdate',
            value: function (t) {
              var e = this.props,
                r = e.isActive,
                n = e.canBegin,
                o = e.attributeName,
                i = e.shouldReAnimate,
                a = e.to,
                u = e.from,
                c = this.state.style;
              if (n) {
                if (!r) {
                  var l = { style: o ? c_({}, o, a) : a };
                  this.state &&
                    c &&
                    ((o && c[o] !== a) || (!o && c !== a)) &&
                    this.setState(l);
                  return;
                }
                if (!u3(t.to, a) || !t.canBegin || !t.isActive) {
                  var s = !t.canBegin || !t.isActive;
                  this.manager && this.manager.stop(),
                    this.stopJSAnimation && this.stopJSAnimation();
                  var f = s || i ? u : t.to;
                  if (this.state && c) {
                    var p = { style: o ? c_({}, o, f) : f };
                    ((o && c[o] !== f) || (!o && c !== f)) && this.setState(p);
                  }
                  this.runAnimation(
                    cT(cT({}, this.props), {}, { from: f, begin: 0 })
                  );
                }
              }
            }
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              this.mounted = !1;
              var t = this.props.onAnimationEnd;
              this.unSubscribe && this.unSubscribe(),
                this.manager && (this.manager.stop(), (this.manager = null)),
                this.stopJSAnimation && this.stopJSAnimation(),
                t && t();
            }
          },
          {
            key: 'handleStyleChange',
            value: function (t) {
              this.changeStyle(t);
            }
          },
          {
            key: 'changeStyle',
            value: function (t) {
              this.mounted && this.setState({ style: t });
            }
          },
          {
            key: 'runJSAnimation',
            value: function (t) {
              var e = this,
                r = t.from,
                n = t.to,
                o = t.duration,
                i = t.easing,
                a = t.begin,
                u = t.onAnimationEnd,
                c = t.onAnimationStart,
                l = cS(r, n, cd(i), o, this.changeStyle);
              this.manager.start([
                c,
                a,
                function () {
                  e.stopJSAnimation = l();
                },
                o,
                u
              ]);
            }
          },
          {
            key: 'runStepAnimation',
            value: function (t) {
              var e = this,
                r = t.steps,
                n = t.begin,
                o = t.onAnimationStart,
                i = r[0],
                a = i.style,
                u = i.duration;
              return this.manager.start(
                [o].concat(
                  cE(
                    r.reduce(
                      function (t, n, o) {
                        if (0 === o) return t;
                        var i = n.duration,
                          a = n.easing,
                          u = void 0 === a ? 'ease' : a,
                          c = n.style,
                          l = n.properties,
                          s = n.onAnimationEnd,
                          f = o > 0 ? r[o - 1] : n,
                          p = l || Object.keys(c);
                        if ('function' == typeof u || 'spring' === u)
                          return [].concat(cE(t), [
                            e.runJSAnimation.bind(e, {
                              from: f.style,
                              to: c,
                              duration: i,
                              easing: u
                            }),
                            i
                          ]);
                        var d = co(p, i, u),
                          h = cT(cT(cT({}, f.style), c), {}, { transition: d });
                        return [].concat(cE(t), [h, i, s]).filter(cr);
                      },
                      [a, Math.max(void 0 === u ? 0 : u, n)]
                    )
                  ),
                  [t.onAnimationEnd]
                )
              );
            }
          },
          {
            key: 'runAnimation',
            value: function (t) {
              this.manager ||
                (this.manager =
                  ((e = function () {
                    return null;
                  }),
                  (r = !1),
                  (n = function t(n) {
                    if (!r) {
                      if (Array.isArray(n)) {
                        if (!n.length) return;
                        var o =
                            (function (t) {
                              if (Array.isArray(t)) return t;
                            })(n) ||
                            (function (t) {
                              if (
                                ('u' > typeof Symbol &&
                                  null != t[Symbol.iterator]) ||
                                null != t['@@iterator']
                              )
                                return Array.from(t);
                            })(n) ||
                            (function (t) {
                              if (t) {
                                if ('string' == typeof t) return u6(t, void 0);
                                var e = Object.prototype.toString
                                  .call(t)
                                  .slice(8, -1);
                                if (
                                  ('Object' === e &&
                                    t.constructor &&
                                    (e = t.constructor.name),
                                  'Map' === e || 'Set' === e)
                                )
                                  return Array.from(t);
                                if (
                                  'Arguments' === e ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    e
                                  )
                                )
                                  return u6(t, void 0);
                              }
                            })(n) ||
                            (function () {
                              throw TypeError(
                                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                              );
                            })(),
                          i = o[0],
                          a = o.slice(1);
                        return 'number' == typeof i
                          ? void u5(t.bind(null, a), i)
                          : (t(i), void u5(t.bind(null, a)));
                      }
                      'object' === u8(n) && e(n), 'function' == typeof n && n();
                    }
                  }),
                  {
                    stop: function () {
                      r = !0;
                    },
                    start: function (t) {
                      (r = !1), n(t);
                    },
                    subscribe: function (t) {
                      return (
                        (e = t),
                        function () {
                          e = function () {
                            return null;
                          };
                        }
                      );
                    }
                  }));
              var e,
                r,
                n,
                o = t.begin,
                i = t.duration,
                a = t.attributeName,
                u = t.to,
                c = t.easing,
                l = t.onAnimationStart,
                s = t.onAnimationEnd,
                f = t.steps,
                p = t.children,
                d = this.manager;
              if (
                ((this.unSubscribe = d.subscribe(this.handleStyleChange)),
                'function' == typeof c ||
                  'function' == typeof p ||
                  'spring' === c)
              )
                return void this.runJSAnimation(t);
              if (f.length > 1) return void this.runStepAnimation(t);
              var h = a ? c_({}, a, u) : u,
                y = co(Object.keys(h), i, c);
              d.start([l, o, cT(cT({}, h), {}, { transition: y }), i, s]);
            }
          },
          {
            key: 'render',
            value: function () {
              var t = this.props,
                e = t.children,
                r = (t.begin, t.duration),
                n = (t.attributeName, t.easing, t.isActive),
                o =
                  (t.steps,
                  t.from,
                  t.to,
                  t.canBegin,
                  t.onAnimationEnd,
                  t.shouldReAnimate,
                  t.onAnimationReStart,
                  (function (t, e) {
                    if (null == t) return {};
                    var r,
                      n,
                      o = (function (t, e) {
                        if (null == t) return {};
                        var r,
                          n,
                          o = {},
                          i = Object.keys(t);
                        for (n = 0; n < i.length; n++)
                          (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                        return o;
                      })(t, e);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      for (n = 0; n < i.length; n++)
                        (r = i[n]),
                          !(e.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(t, r) &&
                            (o[r] = t[r]);
                    }
                    return o;
                  })(t, cP)),
                i = P.Children.count(e),
                a = this.state.style;
              if ('function' == typeof e) return e(a);
              if (!n || 0 === i || r <= 0) return e;
              var u = function (t) {
                var e = t.props,
                  r = e.style,
                  n = e.className;
                return (0, P.cloneElement)(
                  t,
                  cT(
                    cT({}, o),
                    {},
                    {
                      style: cT(cT({}, void 0 === r ? {} : r), a),
                      className: n
                    }
                  )
                );
              };
              return 1 === i
                ? u(P.Children.only(e))
                : P.default.createElement(
                    'div',
                    null,
                    P.Children.map(e, function (t) {
                      return u(t);
                    })
                  );
            }
          }
        ]),
        (function (t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, cC(n.key), n);
          }
        })(o.prototype, r),
        Object.defineProperty(o, 'prototype', { writable: !1 }),
        o
      );
    })(P.PureComponent);
    function cL(t, e) {
      if (null == t) return {};
      var r = {};
      for (var n in t)
        if ({}.hasOwnProperty.call(t, n)) {
          if (-1 !== e.indexOf(n)) continue;
          r[n] = t[n];
        }
      return r;
    }
    function cU() {
      return (cU = Object.assign.bind()).apply(null, arguments);
    }
    function c$(t, e) {
      return (c$ = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function cz(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        c$(t, e);
    }
    (cB.displayName = 'Animate'),
      (cB.defaultProps = {
        begin: 0,
        duration: 1e3,
        from: '',
        to: '',
        attributeName: '',
        easing: 'ease',
        isActive: !0,
        canBegin: !0,
        steps: [],
        onAnimationEnd: function () {},
        onAnimationStart: function () {}
      }),
      (cB.propTypes = {
        from: uM.default.oneOfType([uM.default.object, uM.default.string]),
        to: uM.default.oneOfType([uM.default.object, uM.default.string]),
        attributeName: uM.default.string,
        duration: uM.default.number,
        begin: uM.default.number,
        easing: uM.default.oneOfType([uM.default.string, uM.default.func]),
        steps: uM.default.arrayOf(
          uM.default.shape({
            duration: uM.default.number.isRequired,
            style: uM.default.object.isRequired,
            easing: uM.default.oneOfType([
              uM.default.oneOf([
                'ease',
                'ease-in',
                'ease-out',
                'ease-in-out',
                'linear'
              ]),
              uM.default.func
            ]),
            properties: uM.default.arrayOf('string'),
            onAnimationEnd: uM.default.func
          })
        ),
        children: uM.default.oneOfType([uM.default.node, uM.default.func]),
        isActive: uM.default.bool,
        canBegin: uM.default.bool,
        onAnimationEnd: uM.default.func,
        shouldReAnimate: uM.default.bool,
        onAnimationStart: uM.default.func,
        onAnimationReStart: uM.default.func
      });
    let cF = P.default.createContext(null);
    function cq(t, e) {
      var r = Object.create(null);
      return (
        t &&
          P.Children.map(t, function (t) {
            return t;
          }).forEach(function (t) {
            r[t.key] = e && (0, P.isValidElement)(t) ? e(t) : t;
          }),
        r
      );
    }
    function cW(t, e, r) {
      return null != r[e] ? r[e] : t.props[e];
    }
    var cX =
        Object.values ||
        function (t) {
          return Object.keys(t).map(function (e) {
            return t[e];
          });
        },
      cH = (function (t) {
        function e(e, r) {
          var n = t.call(this, e, r) || this,
            o = n.handleExited.bind(
              (function (t) {
                if (void 0 === t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t;
              })(n)
            );
          return (
            (n.state = {
              contextValue: { isMounting: !0 },
              handleExited: o,
              firstRender: !0
            }),
            n
          );
        }
        cz(e, t);
        var r = e.prototype;
        return (
          (r.componentDidMount = function () {
            (this.mounted = !0),
              this.setState({ contextValue: { isMounting: !1 } });
          }),
          (r.componentWillUnmount = function () {
            this.mounted = !1;
          }),
          (e.getDerivedStateFromProps = function (t, e) {
            var r,
              n,
              o = e.children,
              i = e.handleExited;
            return {
              children: e.firstRender
                ? cq(t.children, function (e) {
                    return (0, P.cloneElement)(e, {
                      onExited: i.bind(null, e),
                      in: !0,
                      appear: cW(e, 'appear', t),
                      enter: cW(e, 'enter', t),
                      exit: cW(e, 'exit', t)
                    });
                  })
                : (Object.keys(
                    (n = (function (t, e) {
                      function r(r) {
                        return r in e ? e[r] : t[r];
                      }
                      (t = t || {}), (e = e || {});
                      var n,
                        o = Object.create(null),
                        i = [];
                      for (var a in t)
                        a in e ? i.length && ((o[a] = i), (i = [])) : i.push(a);
                      var u = {};
                      for (var c in e) {
                        if (o[c])
                          for (n = 0; n < o[c].length; n++) {
                            var l = o[c][n];
                            u[o[c][n]] = r(l);
                          }
                        u[c] = r(c);
                      }
                      for (n = 0; n < i.length; n++) u[i[n]] = r(i[n]);
                      return u;
                    })(o, (r = cq(t.children))))
                  ).forEach(function (e) {
                    var a = n[e];
                    if ((0, P.isValidElement)(a)) {
                      var u = e in o,
                        c = e in r,
                        l = o[e],
                        s = (0, P.isValidElement)(l) && !l.props.in;
                      c && (!u || s)
                        ? (n[e] = (0, P.cloneElement)(a, {
                            onExited: i.bind(null, a),
                            in: !0,
                            exit: cW(a, 'exit', t),
                            enter: cW(a, 'enter', t)
                          }))
                        : c || !u || s
                          ? c &&
                            u &&
                            (0, P.isValidElement)(l) &&
                            (n[e] = (0, P.cloneElement)(a, {
                              onExited: i.bind(null, a),
                              in: l.props.in,
                              exit: cW(a, 'exit', t),
                              enter: cW(a, 'enter', t)
                            }))
                          : (n[e] = (0, P.cloneElement)(a, { in: !1 }));
                    }
                  }),
                  n),
              firstRender: !1
            };
          }),
          (r.handleExited = function (t, e) {
            var r = cq(this.props.children);
            t.key in r ||
              (t.props.onExited && t.props.onExited(e),
              this.mounted &&
                this.setState(function (e) {
                  var r = cU({}, e.children);
                  return delete r[t.key], { children: r };
                }));
          }),
          (r.render = function () {
            var t = this.props,
              e = t.component,
              r = t.childFactory,
              n = cL(t, ['component', 'childFactory']),
              o = this.state.contextValue,
              i = cX(this.state.children).map(r);
            return (delete n.appear, delete n.enter, delete n.exit, null === e)
              ? P.default.createElement(cF.Provider, { value: o }, i)
              : P.default.createElement(
                  cF.Provider,
                  { value: o },
                  P.default.createElement(e, n, i)
                );
          }),
          e
        );
      })(P.default.Component);
    (cH.propTypes = {}),
      (cH.defaultProps = {
        component: 'div',
        childFactory: function (t) {
          return t;
        }
      });
    var cV = t.i(50560),
      cK = 'unmounted',
      cG = 'exited',
      cY = 'entering',
      cZ = 'entered',
      cJ = 'exiting',
      cQ = (function (t) {
        function e(e, r) {
          var n,
            o = t.call(this, e, r) || this,
            i = r && !r.isMounting ? e.enter : e.appear;
          return (
            (o.appearStatus = null),
            e.in
              ? i
                ? ((n = cG), (o.appearStatus = cY))
                : (n = cZ)
              : (n = e.unmountOnExit || e.mountOnEnter ? cK : cG),
            (o.state = { status: n }),
            (o.nextCallback = null),
            o
          );
        }
        cz(e, t),
          (e.getDerivedStateFromProps = function (t, e) {
            return t.in && e.status === cK ? { status: cG } : null;
          });
        var r = e.prototype;
        return (
          (r.componentDidMount = function () {
            this.updateStatus(!0, this.appearStatus);
          }),
          (r.componentDidUpdate = function (t) {
            var e = null;
            if (t !== this.props) {
              var r = this.state.status;
              this.props.in
                ? r !== cY && r !== cZ && (e = cY)
                : (r === cY || r === cZ) && (e = cJ);
            }
            this.updateStatus(!1, e);
          }),
          (r.componentWillUnmount = function () {
            this.cancelNextCallback();
          }),
          (r.getTimeouts = function () {
            var t,
              e,
              r,
              n = this.props.timeout;
            return (
              (t = e = r = n),
              null != n &&
                'number' != typeof n &&
                ((t = n.exit),
                (e = n.enter),
                (r = void 0 !== n.appear ? n.appear : e)),
              { exit: t, enter: e, appear: r }
            );
          }),
          (r.updateStatus = function (t, e) {
            if ((void 0 === t && (t = !1), null !== e))
              if ((this.cancelNextCallback(), e === cY)) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                  var r = this.props.nodeRef
                    ? this.props.nodeRef.current
                    : cV.default.findDOMNode(this);
                  r && r.scrollTop;
                }
                this.performEnter(t);
              } else this.performExit();
            else
              this.props.unmountOnExit &&
                this.state.status === cG &&
                this.setState({ status: cK });
          }),
          (r.performEnter = function (t) {
            var e = this,
              r = this.props.enter,
              n = this.context ? this.context.isMounting : t,
              o = this.props.nodeRef ? [n] : [cV.default.findDOMNode(this), n],
              i = o[0],
              a = o[1],
              u = this.getTimeouts(),
              c = n ? u.appear : u.enter;
            (t || r) && 1
              ? (this.props.onEnter(i, a),
                this.safeSetState({ status: cY }, function () {
                  e.props.onEntering(i, a),
                    e.onTransitionEnd(c, function () {
                      e.safeSetState({ status: cZ }, function () {
                        e.props.onEntered(i, a);
                      });
                    });
                }))
              : this.safeSetState({ status: cZ }, function () {
                  e.props.onEntered(i);
                });
          }),
          (r.performExit = function () {
            var t = this,
              e = this.props.exit,
              r = this.getTimeouts(),
              n = this.props.nodeRef ? void 0 : cV.default.findDOMNode(this);
            e
              ? (this.props.onExit(n),
                this.safeSetState({ status: cJ }, function () {
                  t.props.onExiting(n),
                    t.onTransitionEnd(r.exit, function () {
                      t.safeSetState({ status: cG }, function () {
                        t.props.onExited(n);
                      });
                    });
                }))
              : this.safeSetState({ status: cG }, function () {
                  t.props.onExited(n);
                });
          }),
          (r.cancelNextCallback = function () {
            null !== this.nextCallback &&
              (this.nextCallback.cancel(), (this.nextCallback = null));
          }),
          (r.safeSetState = function (t, e) {
            (e = this.setNextCallback(e)), this.setState(t, e);
          }),
          (r.setNextCallback = function (t) {
            var e = this,
              r = !0;
            return (
              (this.nextCallback = function (n) {
                r && ((r = !1), (e.nextCallback = null), t(n));
              }),
              (this.nextCallback.cancel = function () {
                r = !1;
              }),
              this.nextCallback
            );
          }),
          (r.onTransitionEnd = function (t, e) {
            this.setNextCallback(e);
            var r = this.props.nodeRef
                ? this.props.nodeRef.current
                : cV.default.findDOMNode(this),
              n = null == t && !this.props.addEndListener;
            if (!r || n) return void setTimeout(this.nextCallback, 0);
            if (this.props.addEndListener) {
              var o = this.props.nodeRef
                  ? [this.nextCallback]
                  : [r, this.nextCallback],
                i = o[0],
                a = o[1];
              this.props.addEndListener(i, a);
            }
            null != t && setTimeout(this.nextCallback, t);
          }),
          (r.render = function () {
            var t = this.state.status;
            if (t === cK) return null;
            var e = this.props,
              r = e.children,
              n =
                (e.in,
                e.mountOnEnter,
                e.unmountOnExit,
                e.appear,
                e.enter,
                e.exit,
                e.timeout,
                e.addEndListener,
                e.onEnter,
                e.onEntering,
                e.onEntered,
                e.onExit,
                e.onExiting,
                e.onExited,
                e.nodeRef,
                cL(e, [
                  'children',
                  'in',
                  'mountOnEnter',
                  'unmountOnExit',
                  'appear',
                  'enter',
                  'exit',
                  'timeout',
                  'addEndListener',
                  'onEnter',
                  'onEntering',
                  'onEntered',
                  'onExit',
                  'onExiting',
                  'onExited',
                  'nodeRef'
                ]));
            return P.default.createElement(
              cF.Provider,
              { value: null },
              'function' == typeof r
                ? r(t, n)
                : P.default.cloneElement(P.default.Children.only(r), n)
            );
          }),
          e
        );
      })(P.default.Component);
    function c0() {}
    (cQ.contextType = cF),
      (cQ.propTypes = {}),
      (cQ.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: c0,
        onEntering: c0,
        onEntered: c0,
        onExit: c0,
        onExiting: c0,
        onExited: c0
      }),
      (cQ.UNMOUNTED = cK),
      (cQ.EXITED = cG),
      (cQ.ENTERING = cY),
      (cQ.ENTERED = cZ),
      (cQ.EXITING = cJ);
    var c1 = ['children', 'appearOptions', 'enterOptions', 'leaveOptions'];
    function c2(t) {
      return (c2 =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function c3() {
      return (c3 = Object.assign.bind()).apply(this, arguments);
    }
    function c4(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function c5(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? c4(Object(r), !0).forEach(function (e) {
              c7(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : c4(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function c8(t, e) {
      return (c8 = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function c6(t) {
      if (void 0 === t)
        throw ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    }
    function c9(t) {
      return (c9 = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function c7(t, e, r) {
      return (
        (e = lt(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function lt(t) {
      var e = (function (t, e) {
        if ('object' !== c2(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' !== c2(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' === c2(e) ? e : String(e);
    }
    var le = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.steps,
          r = t.duration;
        return e && e.length
          ? e.reduce(function (t, e) {
              return (
                t +
                (Number.isFinite(e.duration) && e.duration > 0 ? e.duration : 0)
              );
            }, 0)
          : Number.isFinite(r)
            ? r
            : 0;
      },
      lr = (function (t) {
        if ('function' != typeof t && null !== t)
          throw TypeError('Super expression must either be null or a function');
        (o.prototype = Object.create(t && t.prototype, {
          constructor: { value: o, writable: !0, configurable: !0 }
        })),
          Object.defineProperty(o, 'prototype', { writable: !1 }),
          t && c8(o, t);
        var e,
          r,
          n =
            ((e = (function () {
              if (
                'u' < typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })()),
            function () {
              var t,
                r = c9(o);
              return (
                (t = e
                  ? Reflect.construct(r, arguments, c9(this).constructor)
                  : r.apply(this, arguments)),
                (function (t, e) {
                  if (e && ('object' === c2(e) || 'function' == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw TypeError(
                      'Derived constructors may only return object or undefined'
                    );
                  return c6(t);
                })(this, t)
              );
            });
        function o() {
          var t;
          if (!(this instanceof o))
            throw TypeError('Cannot call a class as a function');
          return (
            c7(c6((t = n.call(this))), 'handleEnter', function (e, r) {
              var n = t.props,
                o = n.appearOptions,
                i = n.enterOptions;
              t.handleStyleActive(r ? o : i);
            }),
            c7(c6(t), 'handleExit', function () {
              var e = t.props.leaveOptions;
              t.handleStyleActive(e);
            }),
            (t.state = { isActive: !1 }),
            t
          );
        }
        return (
          (r = [
            {
              key: 'handleStyleActive',
              value: function (t) {
                if (t) {
                  var e = t.onAnimationEnd
                    ? function () {
                        t.onAnimationEnd();
                      }
                    : null;
                  this.setState(
                    c5(c5({}, t), {}, { onAnimationEnd: e, isActive: !0 })
                  );
                }
              }
            },
            {
              key: 'parseTimeout',
              value: function () {
                var t = this.props,
                  e = t.appearOptions,
                  r = t.enterOptions,
                  n = t.leaveOptions;
                return le(e) + le(r) + le(n);
              }
            },
            {
              key: 'render',
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.children,
                  n =
                    (e.appearOptions,
                    e.enterOptions,
                    e.leaveOptions,
                    (function (t, e) {
                      if (null == t) return {};
                      var r,
                        n,
                        o = (function (t, e) {
                          if (null == t) return {};
                          var r,
                            n,
                            o = {},
                            i = Object.keys(t);
                          for (n = 0; n < i.length; n++)
                            (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                          return o;
                        })(t, e);
                      if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        for (n = 0; n < i.length; n++)
                          (r = i[n]),
                            !(e.indexOf(r) >= 0) &&
                              Object.prototype.propertyIsEnumerable.call(
                                t,
                                r
                              ) &&
                              (o[r] = t[r]);
                      }
                      return o;
                    })(e, c1));
                return P.default.createElement(
                  cQ,
                  c3({}, n, {
                    onEnter: this.handleEnter,
                    onExit: this.handleExit,
                    timeout: this.parseTimeout()
                  }),
                  function () {
                    return P.default.createElement(
                      cB,
                      t.state,
                      P.Children.only(r)
                    );
                  }
                );
              }
            }
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(t, lt(n.key), n);
            }
          })(o.prototype, r),
          Object.defineProperty(o, 'prototype', { writable: !1 }),
          o
        );
      })(P.Component);
    function ln(t) {
      var e = t.component,
        r = t.children,
        n = t.appear,
        o = t.enter,
        i = t.leave;
      return P.default.createElement(
        cH,
        { component: e },
        P.Children.map(r, function (t, e) {
          return P.default.createElement(
            lr,
            {
              appearOptions: n,
              enterOptions: o,
              leaveOptions: i,
              key: 'child-'.concat(e)
            },
            t
          );
        })
      );
    }
    function lo(t) {
      this._context = t;
    }
    function li(t) {
      return new lo(t);
    }
    function la(t) {
      return t[0];
    }
    function lu(t) {
      return t[1];
    }
    function lc(t, e) {
      var r = oV(!0),
        n = null,
        o = li,
        i = null,
        a = iF(u);
      function u(u) {
        var c,
          l,
          s,
          f = (u = oH(u)).length,
          p = !1;
        for (null == n && (i = o((s = a()))), c = 0; c <= f; ++c)
          !(c < f && r((l = u[c]), c, u)) === p &&
            ((p = !p) ? i.lineStart() : i.lineEnd()),
            p && i.point(+t(l, c, u), +e(l, c, u));
        if (s) return (i = null), s + '' || null;
      }
      return (
        (t = 'function' == typeof t ? t : void 0 === t ? la : oV(t)),
        (e = 'function' == typeof e ? e : void 0 === e ? lu : oV(e)),
        (u.x = function (e) {
          return arguments.length
            ? ((t = 'function' == typeof e ? e : oV(+e)), u)
            : t;
        }),
        (u.y = function (t) {
          return arguments.length
            ? ((e = 'function' == typeof t ? t : oV(+t)), u)
            : e;
        }),
        (u.defined = function (t) {
          return arguments.length
            ? ((r = 'function' == typeof t ? t : oV(!!t)), u)
            : r;
        }),
        (u.curve = function (t) {
          return arguments.length ? ((o = t), null != n && (i = o(n)), u) : o;
        }),
        (u.context = function (t) {
          return arguments.length
            ? (null == t ? (n = i = null) : (i = o((n = t))), u)
            : n;
        }),
        u
      );
    }
    function ll(t, e, r) {
      var n = null,
        o = oV(!0),
        i = null,
        a = li,
        u = null,
        c = iF(l);
      function l(l) {
        var s,
          f,
          p,
          d,
          h,
          y = (l = oH(l)).length,
          v = !1,
          m = Array(y),
          b = Array(y);
        for (null == i && (u = a((h = c()))), s = 0; s <= y; ++s) {
          if (!(s < y && o((d = l[s]), s, l)) === v)
            if ((v = !v)) (f = s), u.areaStart(), u.lineStart();
            else {
              for (u.lineEnd(), u.lineStart(), p = s - 1; p >= f; --p)
                u.point(m[p], b[p]);
              u.lineEnd(), u.areaEnd();
            }
          v &&
            ((m[s] = +t(d, s, l)),
            (b[s] = +e(d, s, l)),
            u.point(n ? +n(d, s, l) : m[s], r ? +r(d, s, l) : b[s]));
        }
        if (h) return (u = null), h + '' || null;
      }
      function s() {
        return lc().defined(o).curve(a).context(i);
      }
      return (
        (t = 'function' == typeof t ? t : void 0 === t ? la : oV(+t)),
        (e = 'function' == typeof e ? e : void 0 === e ? oV(0) : oV(+e)),
        (r = 'function' == typeof r ? r : void 0 === r ? lu : oV(+r)),
        (l.x = function (e) {
          return arguments.length
            ? ((t = 'function' == typeof e ? e : oV(+e)), (n = null), l)
            : t;
        }),
        (l.x0 = function (e) {
          return arguments.length
            ? ((t = 'function' == typeof e ? e : oV(+e)), l)
            : t;
        }),
        (l.x1 = function (t) {
          return arguments.length
            ? ((n = null == t ? null : 'function' == typeof t ? t : oV(+t)), l)
            : n;
        }),
        (l.y = function (t) {
          return arguments.length
            ? ((e = 'function' == typeof t ? t : oV(+t)), (r = null), l)
            : e;
        }),
        (l.y0 = function (t) {
          return arguments.length
            ? ((e = 'function' == typeof t ? t : oV(+t)), l)
            : e;
        }),
        (l.y1 = function (t) {
          return arguments.length
            ? ((r = null == t ? null : 'function' == typeof t ? t : oV(+t)), l)
            : r;
        }),
        (l.lineX0 = l.lineY0 =
          function () {
            return s().x(t).y(e);
          }),
        (l.lineY1 = function () {
          return s().x(t).y(r);
        }),
        (l.lineX1 = function () {
          return s().x(n).y(e);
        }),
        (l.defined = function (t) {
          return arguments.length
            ? ((o = 'function' == typeof t ? t : oV(!!t)), l)
            : o;
        }),
        (l.curve = function (t) {
          return arguments.length ? ((a = t), null != i && (u = a(i)), l) : a;
        }),
        (l.context = function (t) {
          return arguments.length
            ? (null == t ? (i = u = null) : (u = a((i = t))), l)
            : i;
        }),
        l
      );
    }
    function ls() {}
    function lf(t, e, r) {
      t._context.bezierCurveTo(
        (2 * t._x0 + t._x1) / 3,
        (2 * t._y0 + t._y1) / 3,
        (t._x0 + 2 * t._x1) / 3,
        (t._y0 + 2 * t._y1) / 3,
        (t._x0 + 4 * t._x1 + e) / 6,
        (t._y0 + 4 * t._y1 + r) / 6
      );
    }
    function lp(t) {
      this._context = t;
    }
    function ld(t) {
      this._context = t;
    }
    function lh(t) {
      this._context = t;
    }
    (lr.propTypes = {
      appearOptions: uM.default.object,
      enterOptions: uM.default.object,
      leaveOptions: uM.default.object,
      children: uM.default.element
    }),
      (ln.propTypes = {
        appear: uM.default.object,
        enter: uM.default.object,
        leave: uM.default.object,
        children: uM.default.oneOfType([uM.default.array, uM.default.element]),
        component: uM.default.any
      }),
      (ln.defaultProps = { component: 'span' }),
      (lo.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t *= 1), (e *= 1), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(t, e);
          }
        }
      }),
      (lp.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              lf(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t *= 1), (e *= 1), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6
                );
            default:
              lf(this, t, e);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e);
        }
      }),
      (ld.prototype = {
        areaStart: ls,
        areaEnd: ls,
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
              NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x2, this._y2),
                this._context.closePath();
              break;
            case 2:
              this._context.moveTo(
                (this._x2 + 2 * this._x3) / 3,
                (this._y2 + 2 * this._y3) / 3
              ),
                this._context.lineTo(
                  (this._x3 + 2 * this._x2) / 3,
                  (this._y3 + 2 * this._y2) / 3
                ),
                this._context.closePath();
              break;
            case 3:
              this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4);
          }
        },
        point: function (t, e) {
          switch (((t *= 1), (e *= 1), this._point)) {
            case 0:
              (this._point = 1), (this._x2 = t), (this._y2 = e);
              break;
            case 1:
              (this._point = 2), (this._x3 = t), (this._y3 = e);
              break;
            case 2:
              (this._point = 3),
                (this._x4 = t),
                (this._y4 = e),
                this._context.moveTo(
                  (this._x0 + 4 * this._x1 + t) / 6,
                  (this._y0 + 4 * this._y1 + e) / 6
                );
              break;
            default:
              lf(this, t, e);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e);
        }
      }),
      (lh.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t *= 1), (e *= 1), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              var r = (this._x0 + 4 * this._x1 + t) / 6,
                n = (this._y0 + 4 * this._y1 + e) / 6;
              this._line
                ? this._context.lineTo(r, n)
                : this._context.moveTo(r, n);
              break;
            case 3:
              this._point = 4;
            default:
              lf(this, t, e);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e);
        }
      });
    class ly {
      constructor(t, e) {
        (this._context = t), (this._x = e);
      }
      areaStart() {
        this._line = 0;
      }
      areaEnd() {
        this._line = NaN;
      }
      lineStart() {
        this._point = 0;
      }
      lineEnd() {
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      }
      point(t, e) {
        switch (((t *= 1), (e *= 1), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, e)
                : this._context.moveTo(t, e);
            break;
          case 1:
            this._point = 2;
          default:
            this._x
              ? this._context.bezierCurveTo(
                  (this._x0 = (this._x0 + t) / 2),
                  this._y0,
                  this._x0,
                  e,
                  t,
                  e
                )
              : this._context.bezierCurveTo(
                  this._x0,
                  (this._y0 = (this._y0 + e) / 2),
                  t,
                  this._y0,
                  t,
                  e
                );
        }
        (this._x0 = t), (this._y0 = e);
      }
    }
    function lv(t) {
      this._context = t;
    }
    lv.prototype = {
      areaStart: ls,
      areaEnd: ls,
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        this._point && this._context.closePath();
      },
      point: function (t, e) {
        (t *= 1),
          (e *= 1),
          this._point
            ? this._context.lineTo(t, e)
            : ((this._point = 1), this._context.moveTo(t, e));
      }
    };
    function lm(t, e, r) {
      var n = t._x1 - t._x0,
        o = e - t._x1,
        i = (t._y1 - t._y0) / (n || (o < 0 && -0)),
        a = (r - t._y1) / (o || (n < 0 && -0));
      return (
        ((i < 0 ? -1 : 1) + (a < 0 ? -1 : 1)) *
          Math.min(
            Math.abs(i),
            Math.abs(a),
            0.5 * Math.abs((i * o + a * n) / (n + o))
          ) || 0
      );
    }
    function lb(t, e) {
      var r = t._x1 - t._x0;
      return r ? ((3 * (t._y1 - t._y0)) / r - e) / 2 : e;
    }
    function lg(t, e, r) {
      var n = t._x0,
        o = t._y0,
        i = t._x1,
        a = t._y1,
        u = (i - n) / 3;
      t._context.bezierCurveTo(n + u, o + u * e, i - u, a - u * r, i, a);
    }
    function lx(t) {
      this._context = t;
    }
    function lO(t) {
      this._context = new lw(t);
    }
    function lw(t) {
      this._context = t;
    }
    function lj(t) {
      this._context = t;
    }
    function lS(t) {
      var e,
        r,
        n = t.length - 1,
        o = Array(n),
        i = Array(n),
        a = Array(n);
      for (o[0] = 0, i[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e)
        (o[e] = 1), (i[e] = 4), (a[e] = 4 * t[e] + 2 * t[e + 1]);
      for (
        o[n - 1] = 2, i[n - 1] = 7, a[n - 1] = 8 * t[n - 1] + t[n], e = 1;
        e < n;
        ++e
      )
        (r = o[e] / i[e - 1]), (i[e] -= r), (a[e] -= r * a[e - 1]);
      for (o[n - 1] = a[n - 1] / i[n - 1], e = n - 2; e >= 0; --e)
        o[e] = (a[e] - o[e + 1]) / i[e];
      for (e = 0, i[n - 1] = (t[n] + o[n - 1]) / 2; e < n - 1; ++e)
        i[e] = 2 * t[e + 1] - o[e + 1];
      return [o, i];
    }
    function lA(t, e) {
      (this._context = t), (this._t = e);
    }
    function lP(t) {
      return (lP =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function lE() {
      return (lE = Object.assign.bind()).apply(this, arguments);
    }
    function lk(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function lM(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? lk(Object(r), !0).forEach(function (e) {
              var n, o, i;
              (n = t),
                (o = e),
                (i = r[e]),
                (o = (function (t) {
                  var e = (function (t, e) {
                    if ('object' != lP(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || 'default');
                      if ('object' != lP(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === e ? String : Number)(t);
                  })(t, 'string');
                  return 'symbol' == lP(e) ? e : e + '';
                })(o)) in n
                  ? Object.defineProperty(n, o, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (n[o] = i);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : lk(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    (lx.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            lg(this, this._t0, lb(this, this._t0));
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, e) {
        var r = NaN;
        if (((e *= 1), (t *= 1) !== this._x1 || e !== this._y1)) {
          switch (this._point) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3), lg(this, lb(this, (r = lm(this, t, e))), r);
              break;
            default:
              lg(this, this._t0, (r = lm(this, t, e)));
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e),
            (this._t0 = r);
        }
      }
    }),
      ((lO.prototype = Object.create(lx.prototype)).point = function (t, e) {
        lx.prototype.point.call(this, e, t);
      }),
      (lw.prototype = {
        moveTo: function (t, e) {
          this._context.moveTo(e, t);
        },
        closePath: function () {
          this._context.closePath();
        },
        lineTo: function (t, e) {
          this._context.lineTo(e, t);
        },
        bezierCurveTo: function (t, e, r, n, o, i) {
          this._context.bezierCurveTo(e, t, n, r, i, o);
        }
      }),
      (lj.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x = []), (this._y = []);
        },
        lineEnd: function () {
          var t = this._x,
            e = this._y,
            r = t.length;
          if (r)
            if (
              (this._line
                ? this._context.lineTo(t[0], e[0])
                : this._context.moveTo(t[0], e[0]),
              2 === r)
            )
              this._context.lineTo(t[1], e[1]);
            else
              for (var n = lS(t), o = lS(e), i = 0, a = 1; a < r; ++i, ++a)
                this._context.bezierCurveTo(
                  n[0][i],
                  o[0][i],
                  n[1][i],
                  o[1][i],
                  t[a],
                  e[a]
                );
          (this._line || (0 !== this._line && 1 === r)) &&
            this._context.closePath(),
            (this._line = 1 - this._line),
            (this._x = this._y = null);
        },
        point: function (t, e) {
          this._x.push(+t), this._y.push(+e);
        }
      }),
      (lA.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x = this._y = NaN), (this._point = 0);
        },
        lineEnd: function () {
          0 < this._t &&
            this._t < 1 &&
            2 === this._point &&
            this._context.lineTo(this._x, this._y),
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
            this._line >= 0 &&
              ((this._t = 1 - this._t), (this._line = 1 - this._line));
        },
        point: function (t, e) {
          switch (((t *= 1), (e *= 1), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
            default:
              if (this._t <= 0)
                this._context.lineTo(this._x, e), this._context.lineTo(t, e);
              else {
                var r = this._x * (1 - this._t) + t * this._t;
                this._context.lineTo(r, this._y), this._context.lineTo(r, e);
              }
          }
          (this._x = t), (this._y = e);
        }
      });
    var lT = {
        curveBasisClosed: function (t) {
          return new ld(t);
        },
        curveBasisOpen: function (t) {
          return new lh(t);
        },
        curveBasis: function (t) {
          return new lp(t);
        },
        curveBumpX: function (t) {
          return new ly(t, !0);
        },
        curveBumpY: function (t) {
          return new ly(t, !1);
        },
        curveLinearClosed: function (t) {
          return new lv(t);
        },
        curveLinear: li,
        curveMonotoneX: function (t) {
          return new lx(t);
        },
        curveMonotoneY: function (t) {
          return new lO(t);
        },
        curveNatural: function (t) {
          return new lj(t);
        },
        curveStep: function (t) {
          return new lA(t, 0.5);
        },
        curveStepAfter: function (t) {
          return new lA(t, 1);
        },
        curveStepBefore: function (t) {
          return new lA(t, 0);
        }
      },
      l_ = function (t) {
        return t.x === +t.x && t.y === +t.y;
      },
      lC = function (t) {
        return t.x;
      },
      lI = function (t) {
        return t.y;
      },
      lD = function (t, e) {
        if ((0, M.default)(t)) return t;
        var r = 'curve'.concat((0, o1.default)(t));
        return ('curveMonotone' === r || 'curveBump' === r) && e
          ? lT[''.concat(r).concat('vertical' === e ? 'Y' : 'X')]
          : lT[r] || li;
      },
      lN = function (t) {
        var e,
          r = t.type,
          n = t.points,
          o = void 0 === n ? [] : n,
          i = t.baseLine,
          a = t.layout,
          u = t.connectNulls,
          c = void 0 !== u && u,
          l = lD(void 0 === r ? 'linear' : r, a),
          s = c
            ? o.filter(function (t) {
                return l_(t);
              })
            : o;
        if (Array.isArray(i)) {
          var f = c
              ? i.filter(function (t) {
                  return l_(t);
                })
              : i,
            p = s.map(function (t, e) {
              return lM(lM({}, t), {}, { base: f[e] });
            });
          return (
            (e =
              'vertical' === a
                ? ll()
                    .y(lI)
                    .x1(lC)
                    .x0(function (t) {
                      return t.base.x;
                    })
                : ll()
                    .x(lC)
                    .y1(lI)
                    .y0(function (t) {
                      return t.base.y;
                    }))
              .defined(l_)
              .curve(l),
            e(p)
          );
        }
        return (
          (e =
            'vertical' === a && L(i)
              ? ll().y(lI).x1(lC).x0(i)
              : L(i)
                ? ll().x(lC).y1(lI).y0(i)
                : lc().x(lC).y(lI))
            .defined(l_)
            .curve(l),
          e(s)
        );
      },
      lR = function (t) {
        var e = t.className,
          r = t.points,
          n = t.path,
          o = t.pathRef;
        if ((!r || !r.length) && !n) return null;
        var i = r && r.length ? lN(t) : n;
        return P.createElement(
          'path',
          lE({}, tv(t, !1), te(t), {
            className: (0, _.default)('recharts-curve', e),
            d: i,
            ref: o
          })
        );
      },
      lB = t.i(92234);
    function lL(t) {
      return (lL =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    var lU = ['valueAccessor'],
      l$ = ['data', 'dataKey', 'clockWise', 'id', 'textBreakAll'];
    function lz(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function lF() {
      return (lF = Object.assign.bind()).apply(this, arguments);
    }
    function lq(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function lW(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? lq(Object(r), !0).forEach(function (e) {
              var n, o, i;
              (n = t),
                (o = e),
                (i = r[e]),
                (o = (function (t) {
                  var e = (function (t, e) {
                    if ('object' != lL(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || 'default');
                      if ('object' != lL(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === e ? String : Number)(t);
                  })(t, 'string');
                  return 'symbol' == lL(e) ? e : e + '';
                })(o)) in n
                  ? Object.defineProperty(n, o, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (n[o] = i);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : lq(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function lX(t, e) {
      if (null == t) return {};
      var r,
        n,
        o = (function (t, e) {
          if (null == t) return {};
          var r = {};
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              if (e.indexOf(n) >= 0) continue;
              r[n] = t[n];
            }
          return r;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++)
          (r = i[n]),
            !(e.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, r) &&
              (o[r] = t[r]);
      }
      return o;
    }
    var lH = function (t) {
      return Array.isArray(t.value) ? (0, lB.default)(t.value) : t.value;
    };
    function lV(t) {
      var e = t.valueAccessor,
        r = void 0 === e ? lH : e,
        n = lX(t, lU),
        o = n.data,
        i = n.dataKey,
        a = n.clockWise,
        u = n.id,
        c = n.textBreakAll,
        l = lX(n, l$);
      return o && o.length
        ? P.default.createElement(
            iw,
            { className: 'recharts-label-list' },
            o.map(function (t, e) {
              var n = (0, k.default)(i) ? r(t, e) : aR(t && t.payload, i),
                o = (0, k.default)(u)
                  ? {}
                  : { id: ''.concat(u, '-').concat(e) };
              return P.default.createElement(
                uE,
                lF({}, tv(t, !0), l, o, {
                  parentViewBox: t.parentViewBox,
                  value: n,
                  textBreakAll: c,
                  viewBox: uE.parseViewBox(
                    (0, k.default)(a) ? t : lW(lW({}, t), {}, { clockWise: a })
                  ),
                  key: 'label-'.concat(e),
                  index: e
                })
              );
            })
          )
        : null;
    }
    (lV.displayName = 'LabelList'),
      (lV.renderCallByParent = function (t, e) {
        var r,
          n =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (!t || (!t.children && n && !t.label)) return null;
        var o = tf(t.children, lV).map(function (t, r) {
          return (0, P.cloneElement)(t, {
            data: e,
            key: 'labelList-'.concat(r)
          });
        });
        return n
          ? [
              ((r = t.label),
              !r
                ? null
                : !0 === r
                  ? P.default.createElement(lV, {
                      key: 'labelList-implicit',
                      data: e
                    })
                  : P.default.isValidElement(r) || (0, M.default)(r)
                    ? P.default.createElement(lV, {
                        key: 'labelList-implicit',
                        data: e,
                        content: r
                      })
                    : (0, T.default)(r)
                      ? P.default.createElement(
                          lV,
                          lF({ data: e }, r, { key: 'labelList-implicit' })
                        )
                      : null)
            ].concat(
              (function (t) {
                if (Array.isArray(t)) return lz(t);
              })(o) ||
                (function (t) {
                  if (
                    ('u' > typeof Symbol && null != t[Symbol.iterator]) ||
                    null != t['@@iterator']
                  )
                    return Array.from(t);
                })(o) ||
                (function (t) {
                  if (t) {
                    if ('string' == typeof t) return lz(t, void 0);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    if (
                      ('Object' === e &&
                        t.constructor &&
                        (e = t.constructor.name),
                      'Map' === e || 'Set' === e)
                    )
                      return Array.from(t);
                    if (
                      'Arguments' === e ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                    )
                      return lz(t, void 0);
                  }
                })(o) ||
                (function () {
                  throw TypeError(
                    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                })()
            )
          : o;
      });
    var lK = function (t) {
      return null;
    };
    lK.displayName = 'Cell';
    var lG = t.i(2844),
      lY = t.i(2690);
    function lZ(t) {
      return (lZ =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function lJ() {
      return (lJ = Object.assign.bind()).apply(this, arguments);
    }
    function lQ(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function l0(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function l1(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? l0(Object(r), !0).forEach(function (e) {
              var n, o, i;
              (n = t),
                (o = e),
                (i = r[e]),
                (o = (function (t) {
                  var e = (function (t, e) {
                    if ('object' != lZ(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || 'default');
                      if ('object' != lZ(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === e ? String : Number)(t);
                  })(t, 'string');
                  return 'symbol' == lZ(e) ? e : e + '';
                })(o)) in n
                  ? Object.defineProperty(n, o, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (n[o] = i);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : l0(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    var l2 = function (t, e, r, n, o) {
        var i,
          a = Math.min(Math.abs(r) / 2, Math.abs(n) / 2),
          u = n >= 0 ? 1 : -1,
          c = r >= 0 ? 1 : -1,
          l = +((n >= 0 && r >= 0) || (n < 0 && r < 0));
        if (a > 0 && o instanceof Array) {
          for (var s = [0, 0, 0, 0], f = 0; f < 4; f++)
            s[f] = o[f] > a ? a : o[f];
          (i = 'M'.concat(t, ',').concat(e + u * s[0])),
            s[0] > 0 &&
              (i += 'A '
                .concat(s[0], ',')
                .concat(s[0], ',0,0,')
                .concat(l, ',')
                .concat(t + c * s[0], ',')
                .concat(e)),
            (i += 'L '.concat(t + r - c * s[1], ',').concat(e)),
            s[1] > 0 &&
              (i += 'A '
                .concat(s[1], ',')
                .concat(s[1], ',0,0,')
                .concat(l, ',\n        ')
                .concat(t + r, ',')
                .concat(e + u * s[1])),
            (i += 'L '.concat(t + r, ',').concat(e + n - u * s[2])),
            s[2] > 0 &&
              (i += 'A '
                .concat(s[2], ',')
                .concat(s[2], ',0,0,')
                .concat(l, ',\n        ')
                .concat(t + r - c * s[2], ',')
                .concat(e + n)),
            (i += 'L '.concat(t + c * s[3], ',').concat(e + n)),
            s[3] > 0 &&
              (i += 'A '
                .concat(s[3], ',')
                .concat(s[3], ',0,0,')
                .concat(l, ',\n        ')
                .concat(t, ',')
                .concat(e + n - u * s[3])),
            (i += 'Z');
        } else if (a > 0 && o === +o && o > 0) {
          var p = Math.min(a, o);
          i = 'M '
            .concat(t, ',')
            .concat(e + u * p, '\n            A ')
            .concat(p, ',')
            .concat(p, ',0,0,')
            .concat(l, ',')
            .concat(t + c * p, ',')
            .concat(e, '\n            L ')
            .concat(t + r - c * p, ',')
            .concat(e, '\n            A ')
            .concat(p, ',')
            .concat(p, ',0,0,')
            .concat(l, ',')
            .concat(t + r, ',')
            .concat(e + u * p, '\n            L ')
            .concat(t + r, ',')
            .concat(e + n - u * p, '\n            A ')
            .concat(p, ',')
            .concat(p, ',0,0,')
            .concat(l, ',')
            .concat(t + r - c * p, ',')
            .concat(e + n, '\n            L ')
            .concat(t + c * p, ',')
            .concat(e + n, '\n            A ')
            .concat(p, ',')
            .concat(p, ',0,0,')
            .concat(l, ',')
            .concat(t, ',')
            .concat(e + n - u * p, ' Z');
        } else
          i = 'M '
            .concat(t, ',')
            .concat(e, ' h ')
            .concat(r, ' v ')
            .concat(n, ' h ')
            .concat(-r, ' Z');
        return i;
      },
      l3 = function (t, e) {
        if (!t || !e) return !1;
        var r = t.x,
          n = t.y,
          o = e.x,
          i = e.y,
          a = e.width,
          u = e.height;
        if (Math.abs(a) > 0 && Math.abs(u) > 0) {
          var c = Math.min(o, o + a),
            l = Math.max(o, o + a),
            s = Math.min(i, i + u),
            f = Math.max(i, i + u);
          return r >= c && r <= l && n >= s && n <= f;
        }
        return !1;
      },
      l4 = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        isAnimationActive: !1,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: 'ease'
      },
      l5 = function (t) {
        var e,
          r = l1(l1({}, l4), t),
          n = (0, P.useRef)(),
          o =
            (function (t) {
              if (Array.isArray(t)) return t;
            })((e = (0, P.useState)(-1))) ||
            (function (t) {
              var e =
                null == t
                  ? null
                  : ('u' > typeof Symbol && t[Symbol.iterator]) ||
                    t['@@iterator'];
              if (null != e) {
                var r,
                  n,
                  o,
                  i,
                  a = [],
                  u = !0,
                  c = !1;
                try {
                  (o = (e = e.call(t)).next), !1;
                  for (
                    ;
                    !(u = (r = o.call(e)).done) &&
                    (a.push(r.value), 2 !== a.length);
                    u = !0
                  );
                } catch (t) {
                  (c = !0), (n = t);
                } finally {
                  try {
                    if (
                      !u &&
                      null != e.return &&
                      ((i = e.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (c) throw n;
                  }
                }
                return a;
              }
            })(e) ||
            (function (t) {
              if (t) {
                if ('string' == typeof t) return lQ(t, 2);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ('Object' === e && t.constructor && (e = t.constructor.name),
                  'Map' === e || 'Set' === e)
                )
                  return Array.from(t);
                if (
                  'Arguments' === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                )
                  return lQ(t, 2);
              }
            })(e) ||
            (function () {
              throw TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })(),
          i = o[0],
          a = o[1];
        (0, P.useEffect)(function () {
          if (n.current && n.current.getTotalLength)
            try {
              var t = n.current.getTotalLength();
              t && a(t);
            } catch (t) {}
        }, []);
        var u = r.x,
          c = r.y,
          l = r.width,
          s = r.height,
          f = r.radius,
          p = r.className,
          d = r.animationEasing,
          h = r.animationDuration,
          y = r.animationBegin,
          v = r.isAnimationActive,
          m = r.isUpdateAnimationActive;
        if (u !== +u || c !== +c || l !== +l || s !== +s || 0 === l || 0 === s)
          return null;
        var b = (0, _.default)('recharts-rectangle', p);
        return m
          ? P.default.createElement(
              cB,
              {
                canBegin: i > 0,
                from: { width: l, height: s, x: u, y: c },
                to: { width: l, height: s, x: u, y: c },
                duration: h,
                animationEasing: d,
                isActive: m
              },
              function (t) {
                var e = t.width,
                  o = t.height,
                  a = t.x,
                  u = t.y;
                return P.default.createElement(
                  cB,
                  {
                    canBegin: i > 0,
                    from: '0px '.concat(-1 === i ? 1 : i, 'px'),
                    to: ''.concat(i, 'px 0px'),
                    attributeName: 'strokeDasharray',
                    begin: y,
                    duration: h,
                    isActive: v,
                    easing: d
                  },
                  P.default.createElement(
                    'path',
                    lJ({}, tv(r, !0), {
                      className: b,
                      d: l2(a, u, e, o, f),
                      ref: n
                    })
                  )
                );
              }
            )
          : P.default.createElement(
              'path',
              lJ({}, tv(r, !0), { className: b, d: l2(u, c, l, s, f) })
            );
      };
    function l8(t) {
      return (l8 =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function l6() {
      return (l6 = Object.assign.bind()).apply(this, arguments);
    }
    function l9(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function l7(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function st(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? l7(Object(r), !0).forEach(function (e) {
              var n, o, i;
              (n = t),
                (o = e),
                (i = r[e]),
                (o = (function (t) {
                  var e = (function (t, e) {
                    if ('object' != l8(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || 'default');
                      if ('object' != l8(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === e ? String : Number)(t);
                  })(t, 'string');
                  return 'symbol' == l8(e) ? e : e + '';
                })(o)) in n
                  ? Object.defineProperty(n, o, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (n[o] = i);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : l7(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    var se = function (t, e, r, n, o) {
        var i = r - n;
        return (
          'M '.concat(t, ',').concat(e) +
          'L '.concat(t + r, ',').concat(e) +
          'L '.concat(t + r - i / 2, ',').concat(e + o) +
          'L '.concat(t + r - i / 2 - n, ',').concat(e + o) +
          'L '.concat(t, ',').concat(e, ' Z')
        );
      },
      sr = {
        x: 0,
        y: 0,
        upperWidth: 0,
        lowerWidth: 0,
        height: 0,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: 'ease'
      },
      sn = function (t) {
        var e,
          r = st(st({}, sr), t),
          n = (0, P.useRef)(),
          o =
            (function (t) {
              if (Array.isArray(t)) return t;
            })((e = (0, P.useState)(-1))) ||
            (function (t) {
              var e =
                null == t
                  ? null
                  : ('u' > typeof Symbol && t[Symbol.iterator]) ||
                    t['@@iterator'];
              if (null != e) {
                var r,
                  n,
                  o,
                  i,
                  a = [],
                  u = !0,
                  c = !1;
                try {
                  (o = (e = e.call(t)).next), !1;
                  for (
                    ;
                    !(u = (r = o.call(e)).done) &&
                    (a.push(r.value), 2 !== a.length);
                    u = !0
                  );
                } catch (t) {
                  (c = !0), (n = t);
                } finally {
                  try {
                    if (
                      !u &&
                      null != e.return &&
                      ((i = e.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (c) throw n;
                  }
                }
                return a;
              }
            })(e) ||
            (function (t) {
              if (t) {
                if ('string' == typeof t) return l9(t, 2);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ('Object' === e && t.constructor && (e = t.constructor.name),
                  'Map' === e || 'Set' === e)
                )
                  return Array.from(t);
                if (
                  'Arguments' === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                )
                  return l9(t, 2);
              }
            })(e) ||
            (function () {
              throw TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })(),
          i = o[0],
          a = o[1];
        (0, P.useEffect)(function () {
          if (n.current && n.current.getTotalLength)
            try {
              var t = n.current.getTotalLength();
              t && a(t);
            } catch (t) {}
        }, []);
        var u = r.x,
          c = r.y,
          l = r.upperWidth,
          s = r.lowerWidth,
          f = r.height,
          p = r.className,
          d = r.animationEasing,
          h = r.animationDuration,
          y = r.animationBegin,
          v = r.isUpdateAnimationActive;
        if (
          u !== +u ||
          c !== +c ||
          l !== +l ||
          s !== +s ||
          f !== +f ||
          (0 === l && 0 === s) ||
          0 === f
        )
          return null;
        var m = (0, _.default)('recharts-trapezoid', p);
        return v
          ? P.default.createElement(
              cB,
              {
                canBegin: i > 0,
                from: { upperWidth: 0, lowerWidth: 0, height: f, x: u, y: c },
                to: { upperWidth: l, lowerWidth: s, height: f, x: u, y: c },
                duration: h,
                animationEasing: d,
                isActive: v
              },
              function (t) {
                var e = t.upperWidth,
                  o = t.lowerWidth,
                  a = t.height,
                  u = t.x,
                  c = t.y;
                return P.default.createElement(
                  cB,
                  {
                    canBegin: i > 0,
                    from: '0px '.concat(-1 === i ? 1 : i, 'px'),
                    to: ''.concat(i, 'px 0px'),
                    attributeName: 'strokeDasharray',
                    begin: y,
                    duration: h,
                    easing: d
                  },
                  P.default.createElement(
                    'path',
                    l6({}, tv(r, !0), {
                      className: m,
                      d: se(u, c, e, o, a),
                      ref: n
                    })
                  )
                );
              }
            )
          : P.default.createElement(
              'g',
              null,
              P.default.createElement(
                'path',
                l6({}, tv(r, !0), { className: m, d: se(u, c, l, s, f) })
              )
            );
      };
    function so(t) {
      return (so =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function si() {
      return (si = Object.assign.bind()).apply(this, arguments);
    }
    function sa(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function su(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? sa(Object(r), !0).forEach(function (e) {
              var n, o, i;
              (n = t),
                (o = e),
                (i = r[e]),
                (o = (function (t) {
                  var e = (function (t, e) {
                    if ('object' != so(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || 'default');
                      if ('object' != so(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === e ? String : Number)(t);
                  })(t, 'string');
                  return 'symbol' == so(e) ? e : e + '';
                })(o)) in n
                  ? Object.defineProperty(n, o, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (n[o] = i);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : sa(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    var sc = function (t) {
        var e = t.cx,
          r = t.cy,
          n = t.radius,
          o = t.angle,
          i = t.sign,
          a = t.isExternal,
          u = t.cornerRadius,
          c = t.cornerIsExternal,
          l = u * (a ? 1 : -1) + n,
          s = Math.asin(u / l) / ul,
          f = c ? o : o + i * s;
        return {
          center: us(e, r, l, f),
          circleTangency: us(e, r, n, f),
          lineTangency: us(e, r, l * Math.cos(s * ul), c ? o - i * s : o),
          theta: s
        };
      },
      sl = function (t) {
        var e = t.cx,
          r = t.cy,
          n = t.innerRadius,
          o = t.outerRadius,
          i = t.startAngle,
          a = t.endAngle,
          u = R(a - i) * Math.min(Math.abs(a - i), 359.999),
          c = i + u,
          l = us(e, r, o, i),
          s = us(e, r, o, c),
          f = 'M '
            .concat(l.x, ',')
            .concat(l.y, '\n    A ')
            .concat(o, ',')
            .concat(o, ',0,\n    ')
            .concat(+(Math.abs(u) > 180), ',')
            .concat(+(i > c), ',\n    ')
            .concat(s.x, ',')
            .concat(s.y, '\n  ');
        if (n > 0) {
          var p = us(e, r, n, i),
            d = us(e, r, n, c);
          f += 'L '
            .concat(d.x, ',')
            .concat(d.y, '\n            A ')
            .concat(n, ',')
            .concat(n, ',0,\n            ')
            .concat(+(Math.abs(u) > 180), ',')
            .concat(+(i <= c), ',\n            ')
            .concat(p.x, ',')
            .concat(p.y, ' Z');
        } else f += 'L '.concat(e, ',').concat(r, ' Z');
        return f;
      },
      ss = function (t) {
        var e = t.cx,
          r = t.cy,
          n = t.innerRadius,
          o = t.outerRadius,
          i = t.cornerRadius,
          a = t.forceCornerRadius,
          u = t.cornerIsExternal,
          c = t.startAngle,
          l = t.endAngle,
          s = R(l - c),
          f = sc({
            cx: e,
            cy: r,
            radius: o,
            angle: c,
            sign: s,
            cornerRadius: i,
            cornerIsExternal: u
          }),
          p = f.circleTangency,
          d = f.lineTangency,
          h = f.theta,
          y = sc({
            cx: e,
            cy: r,
            radius: o,
            angle: l,
            sign: -s,
            cornerRadius: i,
            cornerIsExternal: u
          }),
          v = y.circleTangency,
          m = y.lineTangency,
          b = y.theta,
          g = u ? Math.abs(c - l) : Math.abs(c - l) - h - b;
        if (g < 0)
          return a
            ? 'M '
                .concat(d.x, ',')
                .concat(d.y, '\n        a')
                .concat(i, ',')
                .concat(i, ',0,0,1,')
                .concat(2 * i, ',0\n        a')
                .concat(i, ',')
                .concat(i, ',0,0,1,')
                .concat(-(2 * i), ',0\n      ')
            : sl({
                cx: e,
                cy: r,
                innerRadius: n,
                outerRadius: o,
                startAngle: c,
                endAngle: l
              });
        var x = 'M '
          .concat(d.x, ',')
          .concat(d.y, '\n    A')
          .concat(i, ',')
          .concat(i, ',0,0,')
          .concat(+(s < 0), ',')
          .concat(p.x, ',')
          .concat(p.y, '\n    A')
          .concat(o, ',')
          .concat(o, ',0,')
          .concat(+(g > 180), ',')
          .concat(+(s < 0), ',')
          .concat(v.x, ',')
          .concat(v.y, '\n    A')
          .concat(i, ',')
          .concat(i, ',0,0,')
          .concat(+(s < 0), ',')
          .concat(m.x, ',')
          .concat(m.y, '\n  ');
        if (n > 0) {
          var O = sc({
              cx: e,
              cy: r,
              radius: n,
              angle: c,
              sign: s,
              isExternal: !0,
              cornerRadius: i,
              cornerIsExternal: u
            }),
            w = O.circleTangency,
            j = O.lineTangency,
            S = O.theta,
            A = sc({
              cx: e,
              cy: r,
              radius: n,
              angle: l,
              sign: -s,
              isExternal: !0,
              cornerRadius: i,
              cornerIsExternal: u
            }),
            P = A.circleTangency,
            E = A.lineTangency,
            k = A.theta,
            M = u ? Math.abs(c - l) : Math.abs(c - l) - S - k;
          if (M < 0 && 0 === i)
            return ''.concat(x, 'L').concat(e, ',').concat(r, 'Z');
          x += 'L'
            .concat(E.x, ',')
            .concat(E.y, '\n      A')
            .concat(i, ',')
            .concat(i, ',0,0,')
            .concat(+(s < 0), ',')
            .concat(P.x, ',')
            .concat(P.y, '\n      A')
            .concat(n, ',')
            .concat(n, ',0,')
            .concat(+(M > 180), ',')
            .concat(+(s > 0), ',')
            .concat(w.x, ',')
            .concat(w.y, '\n      A')
            .concat(i, ',')
            .concat(i, ',0,0,')
            .concat(+(s < 0), ',')
            .concat(j.x, ',')
            .concat(j.y, 'Z');
        } else x += 'L'.concat(e, ',').concat(r, 'Z');
        return x;
      },
      sf = {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        startAngle: 0,
        endAngle: 0,
        cornerRadius: 0,
        forceCornerRadius: !1,
        cornerIsExternal: !1
      },
      sp = function (t) {
        var e,
          r = su(su({}, sf), t),
          n = r.cx,
          o = r.cy,
          i = r.innerRadius,
          a = r.outerRadius,
          u = r.cornerRadius,
          c = r.forceCornerRadius,
          l = r.cornerIsExternal,
          s = r.startAngle,
          f = r.endAngle,
          p = r.className;
        if (a < i || s === f) return null;
        var d = (0, _.default)('recharts-sector', p),
          h = a - i,
          y = F(u, h, 0, !0);
        return (
          (e =
            y > 0 && 360 > Math.abs(s - f)
              ? ss({
                  cx: n,
                  cy: o,
                  innerRadius: i,
                  outerRadius: a,
                  cornerRadius: Math.min(y, h / 2),
                  forceCornerRadius: c,
                  cornerIsExternal: l,
                  startAngle: s,
                  endAngle: f
                })
              : sl({
                  cx: n,
                  cy: o,
                  innerRadius: i,
                  outerRadius: a,
                  startAngle: s,
                  endAngle: f
                })),
          P.default.createElement(
            'path',
            si({}, tv(r, !0), { className: d, d: e, role: 'img' })
          )
        );
      },
      sd = [
        'option',
        'shapeType',
        'propTransformer',
        'activeClassName',
        'isActive'
      ];
    function sh(t) {
      return (sh =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function sy(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function sv(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? sy(Object(r), !0).forEach(function (e) {
              var n, o, i;
              (n = t),
                (o = e),
                (i = r[e]),
                (o = (function (t) {
                  var e = (function (t, e) {
                    if ('object' != sh(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || 'default');
                      if ('object' != sh(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === e ? String : Number)(t);
                  })(t, 'string');
                  return 'symbol' == sh(e) ? e : e + '';
                })(o)) in n
                  ? Object.defineProperty(n, o, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (n[o] = i);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : sy(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function sm(t) {
      var e = t.shapeType,
        r = t.elementProps;
      switch (e) {
        case 'rectangle':
          return P.default.createElement(l5, r);
        case 'trapezoid':
          return P.default.createElement(sn, r);
        case 'sector':
          return P.default.createElement(sp, r);
        case 'symbols':
          if ('symbols' === e) return P.default.createElement(ar, r);
          break;
        default:
          return null;
      }
    }
    function sb(t) {
      var e,
        r = t.option,
        n = t.shapeType,
        o = t.propTransformer,
        i = t.activeClassName,
        a = t.isActive,
        u = (function (t, e) {
          if (null == t) return {};
          var r,
            n,
            o = (function (t, e) {
              if (null == t) return {};
              var r = {};
              for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                  if (e.indexOf(n) >= 0) continue;
                  r[n] = t[n];
                }
              return r;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]),
                !(e.indexOf(r) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]);
          }
          return o;
        })(t, sd);
      if ((0, P.isValidElement)(r))
        e = (0, P.cloneElement)(
          r,
          sv(sv({}, u), (0, P.isValidElement)(r) ? r.props : r)
        );
      else if ((0, M.default)(r)) e = r(u);
      else if ((0, lG.default)(r) && !(0, lY.default)(r)) {
        var c = (
          void 0 === o
            ? function (t, e) {
                return sv(sv({}, e), t);
              }
            : o
        )(r, u);
        e = P.default.createElement(sm, { shapeType: n, elementProps: c });
      } else e = P.default.createElement(sm, { shapeType: n, elementProps: u });
      return a
        ? P.default.createElement(
            iw,
            { className: void 0 === i ? 'recharts-active-shape' : i },
            e
          )
        : e;
    }
    function sg(t, e) {
      return null != e && 'trapezoids' in t.props;
    }
    function sx(t, e) {
      return null != e && 'sectors' in t.props;
    }
    function sO(t, e) {
      return null != e && 'points' in t.props;
    }
    function sw(t, e) {
      var r,
        n,
        o =
          t.x === (null == e || null == (r = e.labelViewBox) ? void 0 : r.x) ||
          t.x === e.x,
        i =
          t.y === (null == e || null == (n = e.labelViewBox) ? void 0 : n.y) ||
          t.y === e.y;
      return o && i;
    }
    function sj(t, e) {
      var r = t.endAngle === e.endAngle,
        n = t.startAngle === e.startAngle;
      return r && n;
    }
    function sS(t, e) {
      var r = t.x === e.x,
        n = t.y === e.y,
        o = t.z === e.z;
      return r && n && o;
    }
    function sA(t) {
      return (sA =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function sP() {
      return (sP = Object.assign.bind()).apply(this, arguments);
    }
    function sE(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function sk(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? sE(Object(r), !0).forEach(function (e) {
              sI(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : sE(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function sM(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, sD(n.key), n);
      }
    }
    function sT() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (t) {}
      return (sT = function () {
        return !!t;
      })();
    }
    function s_(t) {
      return (s_ = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function sC(t, e) {
      return (sC = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function sI(t, e, r) {
      return (
        (e = sD(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function sD(t) {
      var e = (function (t, e) {
        if ('object' != sA(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != sA(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == sA(e) ? e : e + '';
    }
    var sN = (function (t) {
      var e, r;
      function n(t) {
        var e, r, o;
        if (!(this instanceof n))
          throw TypeError('Cannot call a class as a function');
        return (
          (r = n),
          (o = [t]),
          (r = s_(r)),
          sI(
            (e = (function (t, e) {
              if (e && ('object' === sA(e) || 'function' == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  'Derived constructors may only return object or undefined'
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return r;
            })(
              this,
              sT()
                ? Reflect.construct(r, o || [], s_(this).constructor)
                : r.apply(this, o)
            )),
            'pieRef',
            null
          ),
          sI(e, 'sectorRefs', []),
          sI(e, 'id', z('recharts-pie-')),
          sI(e, 'handleAnimationEnd', function () {
            var t = e.props.onAnimationEnd;
            e.setState({ isAnimationFinished: !0 }), (0, M.default)(t) && t();
          }),
          sI(e, 'handleAnimationStart', function () {
            var t = e.props.onAnimationStart;
            e.setState({ isAnimationFinished: !1 }), (0, M.default)(t) && t();
          }),
          (e.state = {
            isAnimationFinished: !t.isAnimationActive,
            prevIsAnimationActive: t.isAnimationActive,
            prevAnimationId: t.animationId,
            sectorToFocus: 0
          }),
          e
        );
      }
      if ('function' != typeof t && null !== t)
        throw TypeError('Super expression must either be null or a function');
      return (
        (n.prototype = Object.create(t && t.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 }
        })),
        Object.defineProperty(n, 'prototype', { writable: !1 }),
        t && sC(n, t),
        (e = [
          {
            key: 'isActiveIndex',
            value: function (t) {
              var e = this.props.activeIndex;
              return Array.isArray(e) ? -1 !== e.indexOf(t) : t === e;
            }
          },
          {
            key: 'hasActiveIndex',
            value: function () {
              var t = this.props.activeIndex;
              return Array.isArray(t) ? 0 !== t.length : t || 0 === t;
            }
          },
          {
            key: 'renderLabels',
            value: function (t) {
              if (
                this.props.isAnimationActive &&
                !this.state.isAnimationFinished
              )
                return null;
              var e = this.props,
                r = e.label,
                o = e.labelLine,
                i = e.dataKey,
                a = e.valueKey,
                u = tv(this.props, !1),
                c = tv(r, !1),
                l = tv(o, !1),
                s = (r && r.offsetRadius) || 20,
                f = t.map(function (t, e) {
                  var f = (t.startAngle + t.endAngle) / 2,
                    p = us(t.cx, t.cy, t.outerRadius + s, f),
                    d = sk(
                      sk(sk(sk({}, u), t), {}, { stroke: 'none' }, c),
                      {},
                      { index: e, textAnchor: n.getTextAnchor(p.x, t.cx) },
                      p
                    ),
                    h = sk(
                      sk(
                        sk(sk({}, u), t),
                        {},
                        { fill: 'none', stroke: t.fill },
                        l
                      ),
                      {},
                      {
                        index: e,
                        points: [us(t.cx, t.cy, t.outerRadius, f), p]
                      }
                    ),
                    y = i;
                  return (
                    (0, k.default)(i) && (0, k.default)(a)
                      ? (y = 'value')
                      : (0, k.default)(i) && (y = a),
                    P.default.createElement(
                      iw,
                      {
                        key: 'label-'
                          .concat(t.startAngle, '-')
                          .concat(t.endAngle, '-')
                          .concat(t.midAngle, '-')
                          .concat(e)
                      },
                      o && n.renderLabelLineItem(o, h, 'line'),
                      n.renderLabelItem(r, d, aR(t, y))
                    )
                  );
                });
              return P.default.createElement(
                iw,
                { className: 'recharts-pie-labels' },
                f
              );
            }
          },
          {
            key: 'renderSectorsStatically',
            value: function (t) {
              var e = this,
                r = this.props,
                n = r.activeShape,
                o = r.blendStroke,
                i = r.inactiveShape;
              return t.map(function (r, a) {
                if (
                  (null == r ? void 0 : r.startAngle) === 0 &&
                  (null == r ? void 0 : r.endAngle) === 0 &&
                  1 !== t.length
                )
                  return null;
                var u = e.isActiveIndex(a),
                  c = i && e.hasActiveIndex() ? i : null,
                  l = sk(
                    sk({}, r),
                    {},
                    { stroke: o ? r.fill : r.stroke, tabIndex: -1 }
                  );
                return P.default.createElement(
                  iw,
                  sP(
                    {
                      ref: function (t) {
                        t && !e.sectorRefs.includes(t) && e.sectorRefs.push(t);
                      },
                      tabIndex: -1,
                      className: 'recharts-pie-sector'
                    },
                    tr(e.props, r, a),
                    {
                      key: 'sector-'
                        .concat(null == r ? void 0 : r.startAngle, '-')
                        .concat(null == r ? void 0 : r.endAngle, '-')
                        .concat(r.midAngle, '-')
                        .concat(a)
                    }
                  ),
                  P.default.createElement(
                    sb,
                    sP(
                      { option: u ? n : c, isActive: u, shapeType: 'sector' },
                      l
                    )
                  )
                );
              });
            }
          },
          {
            key: 'renderSectorsWithAnimation',
            value: function () {
              var t = this,
                e = this.props,
                r = e.sectors,
                n = e.isAnimationActive,
                o = e.animationBegin,
                i = e.animationDuration,
                a = e.animationEasing,
                u = e.animationId,
                c = this.state,
                l = c.prevSectors,
                s = c.prevIsAnimationActive;
              return P.default.createElement(
                cB,
                {
                  begin: o,
                  duration: i,
                  isActive: n,
                  easing: a,
                  from: { t: 0 },
                  to: { t: 1 },
                  key: 'pie-'.concat(u, '-').concat(s),
                  onAnimationStart: this.handleAnimationStart,
                  onAnimationEnd: this.handleAnimationEnd
                },
                function (e) {
                  var n = e.t,
                    o = [],
                    i = (r && r[0]).startAngle;
                  return (
                    r.forEach(function (t, e) {
                      var r = l && l[e],
                        a = e > 0 ? (0, D.default)(t, 'paddingAngle', 0) : 0;
                      if (r) {
                        var u = X(
                            r.endAngle - r.startAngle,
                            t.endAngle - t.startAngle
                          ),
                          c = sk(
                            sk({}, t),
                            {},
                            { startAngle: i + a, endAngle: i + u(n) + a }
                          );
                        o.push(c), (i = c.endAngle);
                      } else {
                        var s = X(0, t.endAngle - t.startAngle)(n),
                          f = sk(
                            sk({}, t),
                            {},
                            { startAngle: i + a, endAngle: i + s + a }
                          );
                        o.push(f), (i = f.endAngle);
                      }
                    }),
                    P.default.createElement(
                      iw,
                      null,
                      t.renderSectorsStatically(o)
                    )
                  );
                }
              );
            }
          },
          {
            key: 'attachKeyboardHandlers',
            value: function (t) {
              var e = this;
              t.onkeydown = function (t) {
                if (!t.altKey)
                  switch (t.key) {
                    case 'ArrowLeft':
                      var r = ++e.state.sectorToFocus % e.sectorRefs.length;
                      e.sectorRefs[r].focus(), e.setState({ sectorToFocus: r });
                      break;
                    case 'ArrowRight':
                      var n =
                        --e.state.sectorToFocus < 0
                          ? e.sectorRefs.length - 1
                          : e.state.sectorToFocus % e.sectorRefs.length;
                      e.sectorRefs[n].focus(), e.setState({ sectorToFocus: n });
                      break;
                    case 'Escape':
                      e.sectorRefs[e.state.sectorToFocus].blur(),
                        e.setState({ sectorToFocus: 0 });
                  }
              };
            }
          },
          {
            key: 'renderSectors',
            value: function () {
              var t = this.props,
                e = t.sectors,
                r = t.isAnimationActive,
                n = this.state.prevSectors;
              return r && e && e.length && (!n || !(0, o2.default)(n, e))
                ? this.renderSectorsWithAnimation()
                : this.renderSectorsStatically(e);
            }
          },
          {
            key: 'componentDidMount',
            value: function () {
              this.pieRef && this.attachKeyboardHandlers(this.pieRef);
            }
          },
          {
            key: 'render',
            value: function () {
              var t = this,
                e = this.props,
                r = e.hide,
                n = e.sectors,
                o = e.className,
                i = e.label,
                a = e.cx,
                u = e.cy,
                c = e.innerRadius,
                l = e.outerRadius,
                s = e.isAnimationActive,
                f = this.state.isAnimationFinished;
              if (r || !n || !n.length || !L(a) || !L(u) || !L(c) || !L(l))
                return null;
              var p = (0, _.default)('recharts-pie', o);
              return P.default.createElement(
                iw,
                {
                  tabIndex: this.props.rootTabIndex,
                  className: p,
                  ref: function (e) {
                    t.pieRef = e;
                  }
                },
                this.renderSectors(),
                i && this.renderLabels(n),
                uE.renderCallByParent(this.props, null, !1),
                (!s || f) && lV.renderCallByParent(this.props, n, !1)
              );
            }
          }
        ]),
        (r = [
          {
            key: 'getDerivedStateFromProps',
            value: function (t, e) {
              return e.prevIsAnimationActive !== t.isAnimationActive
                ? {
                    prevIsAnimationActive: t.isAnimationActive,
                    prevAnimationId: t.animationId,
                    curSectors: t.sectors,
                    prevSectors: [],
                    isAnimationFinished: !0
                  }
                : t.isAnimationActive && t.animationId !== e.prevAnimationId
                  ? {
                      prevAnimationId: t.animationId,
                      curSectors: t.sectors,
                      prevSectors: e.curSectors,
                      isAnimationFinished: !0
                    }
                  : t.sectors !== e.curSectors
                    ? { curSectors: t.sectors, isAnimationFinished: !0 }
                    : null;
            }
          },
          {
            key: 'getTextAnchor',
            value: function (t, e) {
              return t > e ? 'start' : t < e ? 'end' : 'middle';
            }
          },
          {
            key: 'renderLabelLineItem',
            value: function (t, e, r) {
              if (P.default.isValidElement(t))
                return P.default.cloneElement(t, e);
              if ((0, M.default)(t)) return t(e);
              var n = (0, _.default)(
                'recharts-pie-label-line',
                'boolean' != typeof t ? t.className : ''
              );
              return P.default.createElement(
                lR,
                sP({}, e, { key: r, type: 'linear', className: n })
              );
            }
          },
          {
            key: 'renderLabelItem',
            value: function (t, e, r) {
              if (P.default.isValidElement(t))
                return P.default.cloneElement(t, e);
              var n = r;
              if (
                (0, M.default)(t) &&
                ((n = t(e)), P.default.isValidElement(n))
              )
                return n;
              var o = (0, _.default)(
                'recharts-pie-label-text',
                'boolean' == typeof t || (0, M.default)(t) ? '' : t.className
              );
              return P.default.createElement(
                t0,
                sP({}, e, { alignmentBaseline: 'middle', className: o }),
                n
              );
            }
          }
        ]),
        e && sM(n.prototype, e),
        r && sM(n, r),
        Object.defineProperty(n, 'prototype', { writable: !1 }),
        n
      );
    })(P.PureComponent);
    sI(sN, 'displayName', 'Pie'),
      sI(sN, 'defaultProps', {
        stroke: '#fff',
        fill: '#808080',
        legendType: 'rect',
        cx: '50%',
        cy: '50%',
        startAngle: 0,
        endAngle: 360,
        innerRadius: 0,
        outerRadius: '80%',
        paddingAngle: 0,
        labelLine: !0,
        hide: !1,
        minAngle: 0,
        isAnimationActive: !V.isSsr,
        animationBegin: 400,
        animationDuration: 1500,
        animationEasing: 'ease',
        nameKey: 'name',
        blendStroke: !1,
        rootTabIndex: 0
      }),
      sI(sN, 'parseDeltaAngle', function (t, e) {
        return R(e - t) * Math.min(Math.abs(e - t), 360);
      }),
      sI(sN, 'getRealPieData', function (t) {
        var e = t.data,
          r = t.children,
          n = tv(t, !1),
          o = tf(r, lK);
        return e && e.length
          ? e.map(function (t, e) {
              return sk(sk(sk({ payload: t }, n), t), o && o[e] && o[e].props);
            })
          : o && o.length
            ? o.map(function (t) {
                return sk(sk({}, n), t.props);
              })
            : [];
      }),
      sI(sN, 'parseCoordinateOfPie', function (t, e) {
        var r = e.top,
          n = e.left,
          o = e.width,
          i = e.height,
          a = uf(o, i);
        return {
          cx: n + F(t.cx, o, o / 2),
          cy: r + F(t.cy, i, i / 2),
          innerRadius: F(t.innerRadius, a, 0),
          outerRadius: F(t.outerRadius, a, 0.8 * a),
          maxRadius: t.maxRadius || Math.sqrt(o * o + i * i) / 2
        };
      }),
      sI(sN, 'getComposedData', function (t) {
        var e,
          r,
          n = t.item,
          o = t.offset,
          i =
            void 0 !== n.type.defaultProps
              ? sk(sk({}, n.type.defaultProps), n.props)
              : n.props,
          a = sN.getRealPieData(i);
        if (!a || !a.length) return null;
        var u = i.cornerRadius,
          c = i.startAngle,
          l = i.endAngle,
          s = i.paddingAngle,
          f = i.dataKey,
          p = i.nameKey,
          d = i.valueKey,
          h = i.tooltipType,
          y = Math.abs(i.minAngle),
          v = sN.parseCoordinateOfPie(i, o),
          m = sN.parseDeltaAngle(c, l),
          b = Math.abs(m),
          g = f;
        (0, k.default)(f) && (0, k.default)(d)
          ? (iI(
              !1,
              'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'
            ),
            (g = 'value'))
          : (0, k.default)(f) &&
            (iI(
              !1,
              'Use "dataKey" to specify the value of pie,\n      the props "valueKey" will be deprecated in 1.1.0'
            ),
            (g = d));
        var x = a.filter(function (t) {
            return 0 !== aR(t, g, 0);
          }).length,
          O = b - x * y - (b >= 360 ? x : x - 1) * s,
          w = a.reduce(function (t, e) {
            var r = aR(e, g, 0);
            return t + (L(r) ? r : 0);
          }, 0);
        return (
          w > 0 &&
            (e = a.map(function (t, e) {
              var n,
                o = aR(t, g, 0),
                i = aR(t, p, e),
                a = (L(o) ? o : 0) / w,
                l =
                  (n = e ? r.endAngle + R(m) * s * (0 !== o) : c) +
                  R(m) * ((0 !== o ? y : 0) + a * O),
                f = (n + l) / 2,
                d = (v.innerRadius + v.outerRadius) / 2,
                b = [{ name: i, value: o, payload: t, dataKey: g, type: h }],
                x = us(v.cx, v.cy, d, f);
              return (r = sk(
                sk(
                  sk(
                    {
                      percent: a,
                      cornerRadius: u,
                      name: i,
                      tooltipPayload: b,
                      midAngle: f,
                      middleRadius: d,
                      tooltipPosition: x
                    },
                    t
                  ),
                  v
                ),
                {},
                {
                  value: aR(t, g),
                  startAngle: n,
                  endAngle: l,
                  payload: t,
                  paddingAngle: R(m) * s
                }
              ));
            })),
          sk(sk({}, v), {}, { sectors: e, data: a })
        );
      });
    var sR = t.i(20404),
      sB = t.i(48250);
    function sL(t) {
      return (sL =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function sU() {
      return (sU = Object.assign.bind()).apply(this, arguments);
    }
    function s$(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function sz(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function sF(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? sz(Object(r), !0).forEach(function (e) {
              var n, o, i;
              (n = t),
                (o = e),
                (i = r[e]),
                (o = (function (t) {
                  var e = (function (t, e) {
                    if ('object' != sL(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || 'default');
                      if ('object' != sL(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === e ? String : Number)(t);
                  })(t, 'string');
                  return 'symbol' == sL(e) ? e : e + '';
                })(o)) in n
                  ? Object.defineProperty(n, o, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (n[o] = i);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : sz(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function sq(t) {
      return Array.isArray(t) && U(t[0]) && U(t[1]) ? t.join(' ~ ') : t;
    }
    var sW = function (t) {
      var e = t.separator,
        r = void 0 === e ? ' : ' : e,
        n = t.contentStyle,
        o = t.itemStyle,
        i = void 0 === o ? {} : o,
        a = t.labelStyle,
        u = t.payload,
        c = t.formatter,
        l = t.itemSorter,
        s = t.wrapperClassName,
        f = t.labelClassName,
        p = t.label,
        d = t.labelFormatter,
        h = t.accessibilityLayer,
        y = sF(
          {
            margin: 0,
            padding: 10,
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            whiteSpace: 'nowrap'
          },
          void 0 === n ? {} : n
        ),
        v = sF({ margin: 0 }, void 0 === a ? {} : a),
        m = !(0, k.default)(p),
        b = m ? p : '',
        g = (0, _.default)('recharts-default-tooltip', s),
        x = (0, _.default)('recharts-tooltip-label', f);
      return (
        m && d && null != u && (b = d(p, u)),
        P.default.createElement(
          'div',
          sU(
            { className: g, style: y },
            void 0 !== h && h
              ? { role: 'status', 'aria-live': 'assertive' }
              : {}
          ),
          P.default.createElement(
            'p',
            { className: x, style: v },
            P.default.isValidElement(b) ? b : ''.concat(b)
          ),
          (function () {
            if (u && u.length) {
              var t = (l ? (0, o3.default)(u, l) : u).map(function (t, e) {
                if ('none' === t.type) return null;
                var n = sF(
                    {
                      display: 'block',
                      paddingTop: 4,
                      paddingBottom: 4,
                      color: t.color || '#000'
                    },
                    i
                  ),
                  o = t.formatter || c || sq,
                  a = t.value,
                  l = t.name,
                  s = a,
                  f = l;
                if (o && null != s && null != f) {
                  var p = o(a, l, t, e, u);
                  if (Array.isArray(p)) {
                    var d =
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })(p) ||
                      (function (t) {
                        var e =
                          null == t
                            ? null
                            : ('u' > typeof Symbol && t[Symbol.iterator]) ||
                              t['@@iterator'];
                        if (null != e) {
                          var r,
                            n,
                            o,
                            i,
                            a = [],
                            u = !0,
                            c = !1;
                          try {
                            (o = (e = e.call(t)).next), !1;
                            for (
                              ;
                              !(u = (r = o.call(e)).done) &&
                              (a.push(r.value), 2 !== a.length);
                              u = !0
                            );
                          } catch (t) {
                            (c = !0), (n = t);
                          } finally {
                            try {
                              if (
                                !u &&
                                null != e.return &&
                                ((i = e.return()), Object(i) !== i)
                              )
                                return;
                            } finally {
                              if (c) throw n;
                            }
                          }
                          return a;
                        }
                      })(p) ||
                      (function (t) {
                        if (t) {
                          if ('string' == typeof t) return s$(t, 2);
                          var e = Object.prototype.toString
                            .call(t)
                            .slice(8, -1);
                          if (
                            ('Object' === e &&
                              t.constructor &&
                              (e = t.constructor.name),
                            'Map' === e || 'Set' === e)
                          )
                            return Array.from(t);
                          if (
                            'Arguments' === e ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                          )
                            return s$(t, 2);
                        }
                      })(p) ||
                      (function () {
                        throw TypeError(
                          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                      })();
                    (s = d[0]), (f = d[1]);
                  } else s = p;
                }
                return P.default.createElement(
                  'li',
                  {
                    className: 'recharts-tooltip-item',
                    key: 'tooltip-item-'.concat(e),
                    style: n
                  },
                  U(f)
                    ? P.default.createElement(
                        'span',
                        { className: 'recharts-tooltip-item-name' },
                        f
                      )
                    : null,
                  U(f)
                    ? P.default.createElement(
                        'span',
                        { className: 'recharts-tooltip-item-separator' },
                        r
                      )
                    : null,
                  P.default.createElement(
                    'span',
                    { className: 'recharts-tooltip-item-value' },
                    s
                  ),
                  P.default.createElement(
                    'span',
                    { className: 'recharts-tooltip-item-unit' },
                    t.unit || ''
                  )
                );
              });
              return P.default.createElement(
                'ul',
                {
                  className: 'recharts-tooltip-item-list',
                  style: { padding: 0, margin: 0 }
                },
                t
              );
            }
            return null;
          })()
        )
      );
    };
    function sX(t) {
      return (sX =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function sH(t, e, r) {
      var n;
      return (
        ((n = (function (t, e) {
          if ('object' != sX(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || 'default');
            if ('object' != sX(n)) return n;
            throw TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(e, 'string')),
        (e = 'symbol' == sX(n) ? n : n + '') in t)
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    var sV = 'recharts-tooltip-wrapper',
      sK = { visibility: 'hidden' };
    function sG(t) {
      var e = t.allowEscapeViewBox,
        r = t.coordinate,
        n = t.key,
        o = t.offsetTopLeft,
        i = t.position,
        a = t.reverseDirection,
        u = t.tooltipDimension,
        c = t.viewBox,
        l = t.viewBoxDimension;
      if (i && L(i[n])) return i[n];
      var s = r[n] - u - o,
        f = r[n] + o;
      return e[n]
        ? a[n]
          ? s
          : f
        : a[n]
          ? s < c[n]
            ? Math.max(f, c[n])
            : Math.max(s, c[n])
          : f + u > c[n] + l
            ? Math.max(s, c[n])
            : Math.max(f, c[n]);
    }
    function sY(t) {
      return (sY =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function sZ(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function sJ(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? sZ(Object(r), !0).forEach(function (e) {
              s2(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : sZ(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function sQ() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (t) {}
      return (sQ = function () {
        return !!t;
      })();
    }
    function s0(t) {
      return (s0 = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function s1(t, e) {
      return (s1 = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function s2(t, e, r) {
      return (
        (e = s3(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function s3(t) {
      var e = (function (t, e) {
        if ('object' != sY(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != sY(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == sY(e) ? e : e + '';
    }
    var s4 = (function (t) {
      var e;
      function r() {
        var t, e, n;
        if (!(this instanceof r))
          throw TypeError('Cannot call a class as a function');
        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
          i[a] = arguments[a];
        return (
          (e = r),
          (n = [].concat(i)),
          (e = s0(e)),
          s2(
            (t = (function (t, e) {
              if (e && ('object' === sY(e) || 'function' == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  'Derived constructors may only return object or undefined'
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return r;
            })(
              this,
              sQ()
                ? Reflect.construct(e, n || [], s0(this).constructor)
                : e.apply(this, n)
            )),
            'state',
            {
              dismissed: !1,
              dismissedAtCoordinate: { x: 0, y: 0 },
              lastBoundingBox: { width: -1, height: -1 }
            }
          ),
          s2(t, 'handleKeyDown', function (e) {
            if ('Escape' === e.key) {
              var r, n, o, i;
              t.setState({
                dismissed: !0,
                dismissedAtCoordinate: {
                  x:
                    null !=
                    (r = null == (n = t.props.coordinate) ? void 0 : n.x)
                      ? r
                      : 0,
                  y:
                    null !=
                    (o = null == (i = t.props.coordinate) ? void 0 : i.y)
                      ? o
                      : 0
                }
              });
            }
          }),
          t
        );
      }
      if ('function' != typeof t && null !== t)
        throw TypeError('Super expression must either be null or a function');
      return (
        (r.prototype = Object.create(t && t.prototype, {
          constructor: { value: r, writable: !0, configurable: !0 }
        })),
        Object.defineProperty(r, 'prototype', { writable: !1 }),
        t && s1(r, t),
        (e = [
          {
            key: 'updateBBox',
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var t = this.wrapperNode.getBoundingClientRect();
                (Math.abs(t.width - this.state.lastBoundingBox.width) > 1 ||
                  Math.abs(t.height - this.state.lastBoundingBox.height) > 1) &&
                  this.setState({
                    lastBoundingBox: { width: t.width, height: t.height }
                  });
              } else
                (-1 !== this.state.lastBoundingBox.width ||
                  -1 !== this.state.lastBoundingBox.height) &&
                  this.setState({ lastBoundingBox: { width: -1, height: -1 } });
            }
          },
          {
            key: 'componentDidMount',
            value: function () {
              document.addEventListener('keydown', this.handleKeyDown),
                this.updateBBox();
            }
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              document.removeEventListener('keydown', this.handleKeyDown);
            }
          },
          {
            key: 'componentDidUpdate',
            value: function () {
              var t, e;
              this.props.active && this.updateBBox(),
                this.state.dismissed &&
                  ((null == (t = this.props.coordinate) ? void 0 : t.x) !==
                    this.state.dismissedAtCoordinate.x ||
                    (null == (e = this.props.coordinate) ? void 0 : e.y) !==
                      this.state.dismissedAtCoordinate.y) &&
                  (this.state.dismissed = !1);
            }
          },
          {
            key: 'render',
            value: function () {
              var t,
                e,
                r,
                n,
                o,
                i,
                a,
                u,
                c,
                l,
                s,
                f,
                p,
                d,
                h,
                y,
                v,
                m,
                b,
                g = this,
                x = this.props,
                O = x.active,
                w = x.allowEscapeViewBox,
                j = x.animationDuration,
                S = x.animationEasing,
                A = x.children,
                E = x.coordinate,
                k = x.hasPayload,
                M = x.isAnimationActive,
                T = x.offset,
                C = x.position,
                I = x.reverseDirection,
                D = x.useTranslate3d,
                N = x.viewBox,
                R = x.wrapperStyle,
                B =
                  ((f = (t = {
                    allowEscapeViewBox: w,
                    coordinate: E,
                    offsetTopLeft: T,
                    position: C,
                    reverseDirection: I,
                    tooltipBox: this.state.lastBoundingBox,
                    useTranslate3d: D,
                    viewBox: N
                  }).allowEscapeViewBox),
                  (p = t.coordinate),
                  (d = t.offsetTopLeft),
                  (h = t.position),
                  (y = t.reverseDirection),
                  (v = t.tooltipBox),
                  (m = t.useTranslate3d),
                  (b = t.viewBox),
                  v.height > 0 && v.width > 0 && p
                    ? ((r = (e = {
                        translateX: (l = sG({
                          allowEscapeViewBox: f,
                          coordinate: p,
                          key: 'x',
                          offsetTopLeft: d,
                          position: h,
                          reverseDirection: y,
                          tooltipDimension: v.width,
                          viewBox: b,
                          viewBoxDimension: b.width
                        })),
                        translateY: (s = sG({
                          allowEscapeViewBox: f,
                          coordinate: p,
                          key: 'y',
                          offsetTopLeft: d,
                          position: h,
                          reverseDirection: y,
                          tooltipDimension: v.height,
                          viewBox: b,
                          viewBoxDimension: b.height
                        })),
                        useTranslate3d: m
                      }).translateX),
                      (n = e.translateY),
                      (c = {
                        transform: e.useTranslate3d
                          ? 'translate3d('.concat(r, 'px, ').concat(n, 'px, 0)')
                          : 'translate('.concat(r, 'px, ').concat(n, 'px)')
                      }))
                    : (c = sK),
                  {
                    cssProperties: c,
                    cssClasses:
                      ((i = (o = {
                        translateX: l,
                        translateY: s,
                        coordinate: p
                      }).coordinate),
                      (a = o.translateX),
                      (u = o.translateY),
                      (0, _.default)(
                        sV,
                        sH(
                          sH(
                            sH(
                              sH(
                                {},
                                ''.concat(sV, '-right'),
                                L(a) && i && L(i.x) && a >= i.x
                              ),
                              ''.concat(sV, '-left'),
                              L(a) && i && L(i.x) && a < i.x
                            ),
                            ''.concat(sV, '-bottom'),
                            L(u) && i && L(i.y) && u >= i.y
                          ),
                          ''.concat(sV, '-top'),
                          L(u) && i && L(i.y) && u < i.y
                        )
                      ))
                  }),
                U = B.cssClasses,
                $ = B.cssProperties,
                z = sJ(
                  sJ(
                    {
                      transition:
                        M && O
                          ? 'transform '.concat(j, 'ms ').concat(S)
                          : void 0
                    },
                    $
                  ),
                  {},
                  {
                    pointerEvents: 'none',
                    visibility:
                      !this.state.dismissed && O && k ? 'visible' : 'hidden',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  },
                  R
                );
              return P.default.createElement(
                'div',
                {
                  tabIndex: -1,
                  className: U,
                  style: z,
                  ref: function (t) {
                    g.wrapperNode = t;
                  }
                },
                A
              );
            }
          }
        ]),
        (function (t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, s3(n.key), n);
          }
        })(r.prototype, e),
        Object.defineProperty(r, 'prototype', { writable: !1 }),
        r
      );
    })(P.PureComponent);
    function s5(t) {
      return (s5 =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function s8(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function s6(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? s8(Object(r), !0).forEach(function (e) {
              fe(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : s8(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function s9() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (t) {}
      return (s9 = function () {
        return !!t;
      })();
    }
    function s7(t) {
      return (s7 = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function ft(t, e) {
      return (ft = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function fe(t, e, r) {
      return (
        (e = fr(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function fr(t) {
      var e = (function (t, e) {
        if ('object' != s5(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != s5(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == s5(e) ? e : e + '';
    }
    function fn(t) {
      return t.dataKey;
    }
    var fo = (function (t) {
      var e;
      function r() {
        var t, e;
        if (!(this instanceof r))
          throw TypeError('Cannot call a class as a function');
        return (
          (t = r),
          (e = arguments),
          (t = s7(t)),
          (function (t, e) {
            if (e && ('object' === s5(e) || 'function' == typeof e)) return e;
            if (void 0 !== e)
              throw TypeError(
                'Derived constructors may only return object or undefined'
              );
            var r = t;
            if (void 0 === r)
              throw ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return r;
          })(
            this,
            s9()
              ? Reflect.construct(t, e || [], s7(this).constructor)
              : t.apply(this, e)
          )
        );
      }
      if ('function' != typeof t && null !== t)
        throw TypeError('Super expression must either be null or a function');
      return (
        (r.prototype = Object.create(t && t.prototype, {
          constructor: { value: r, writable: !0, configurable: !0 }
        })),
        Object.defineProperty(r, 'prototype', { writable: !1 }),
        t && ft(r, t),
        (e = [
          {
            key: 'render',
            value: function () {
              var t,
                e = this,
                r = this.props,
                n = r.active,
                o = r.allowEscapeViewBox,
                i = r.animationDuration,
                a = r.animationEasing,
                u = r.content,
                c = r.coordinate,
                l = r.filterNull,
                s = r.isAnimationActive,
                f = r.offset,
                p = r.payload,
                d = r.payloadUniqBy,
                h = r.position,
                y = r.reverseDirection,
                v = r.useTranslate3d,
                m = r.viewBox,
                b = r.wrapperStyle,
                g = null != p ? p : [];
              l &&
                g.length &&
                (g = ad(
                  p.filter(function (t) {
                    return (
                      null != t.value &&
                      (!0 !== t.hide || e.props.includeHidden)
                    );
                  }),
                  d,
                  fn
                ));
              var x = g.length > 0;
              return P.default.createElement(
                s4,
                {
                  allowEscapeViewBox: o,
                  animationDuration: i,
                  animationEasing: a,
                  isAnimationActive: s,
                  active: n,
                  coordinate: c,
                  hasPayload: x,
                  offset: f,
                  position: h,
                  reverseDirection: y,
                  useTranslate3d: v,
                  viewBox: m,
                  wrapperStyle: b
                },
                ((t = s6(s6({}, this.props), {}, { payload: g })),
                P.default.isValidElement(u)
                  ? P.default.cloneElement(u, t)
                  : 'function' == typeof u
                    ? P.default.createElement(u, t)
                    : P.default.createElement(sW, t))
              );
            }
          }
        ]),
        (function (t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, fr(n.key), n);
          }
        })(r.prototype, e),
        Object.defineProperty(r, 'prototype', { writable: !1 }),
        r
      );
    })(P.PureComponent);
    function fi() {
      return (fi = Object.assign.bind()).apply(this, arguments);
    }
    fe(fo, 'displayName', 'Tooltip'),
      fe(fo, 'defaultProps', {
        accessibilityLayer: !1,
        allowEscapeViewBox: { x: !1, y: !1 },
        animationDuration: 400,
        animationEasing: 'ease',
        contentStyle: {},
        coordinate: { x: 0, y: 0 },
        cursor: !0,
        cursorStyle: {},
        filterNull: !0,
        isAnimationActive: !V.isSsr,
        itemStyle: {},
        labelStyle: {},
        offset: 10,
        reverseDirection: { x: !1, y: !1 },
        separator: ' : ',
        trigger: 'hover',
        useTranslate3d: !1,
        viewBox: { x: 0, y: 0, height: 0, width: 0 },
        wrapperStyle: {}
      });
    var fa = function (t) {
      var e = t.cx,
        r = t.cy,
        n = t.r,
        o = t.className,
        i = (0, _.default)('recharts-dot', o);
      return e === +e && r === +r && n === +n
        ? P.createElement(
            'circle',
            fi({}, tv(t, !1), te(t), { className: i, cx: e, cy: r, r: n })
          )
        : null;
    };
    function fu(t) {
      return (fu =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function fc(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function fl(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? fc(Object(r), !0).forEach(function (e) {
              fs(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : fc(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function fs(t, e, r) {
      var n;
      return (
        ((n = (function (t, e) {
          if ('object' != fu(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || 'default');
            if ('object' != fu(n)) return n;
            throw TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === e ? String : Number)(t);
        })(e, 'string')),
        (e = 'symbol' == fu(n) ? n : n + '') in t)
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    var ff = ['Webkit', 'Moz', 'O', 'ms'],
      fp = function (t, e) {
        if (!t) return null;
        var r = t.replace(/(\w)/, function (t) {
            return t.toUpperCase();
          }),
          n = ff.reduce(function (t, n) {
            return fl(fl({}, t), {}, fs({}, n + r, e));
          }, {});
        return (n[t] = e), n;
      };
    function fd(t) {
      return (fd =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function fh() {
      return (fh = Object.assign.bind()).apply(this, arguments);
    }
    function fy(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function fv(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? fy(Object(r), !0).forEach(function (e) {
              fO(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : fy(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function fm(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, fw(n.key), n);
      }
    }
    function fb() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (t) {}
      return (fb = function () {
        return !!t;
      })();
    }
    function fg(t) {
      return (fg = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function fx(t, e) {
      return (fx = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function fO(t, e, r) {
      return (
        (e = fw(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function fw(t) {
      var e = (function (t, e) {
        if ('object' != fd(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != fd(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == fd(e) ? e : e + '';
    }
    var fj = function (t) {
        var e = t.data,
          r = t.startIndex,
          n = t.endIndex,
          o = t.x,
          i = t.width,
          a = t.travellerWidth;
        if (!e || !e.length) return {};
        var u = e.length,
          c = t7()
            .domain((0, sR.default)(0, u))
            .range([o, o + i - a]),
          l = c.domain().map(function (t) {
            return c(t);
          });
        return {
          isTextActive: !1,
          isSlideMoving: !1,
          isTravellerMoving: !1,
          isTravellerFocused: !1,
          startX: c(r),
          endX: c(n),
          scale: c,
          scaleValues: l
        };
      },
      fS = function (t) {
        return t.changedTouches && !!t.changedTouches.length;
      },
      fA = (function (t) {
        var e, r;
        function n(t) {
          var e, r, o;
          if (!(this instanceof n))
            throw TypeError('Cannot call a class as a function');
          return (
            (r = n),
            (o = [t]),
            (r = fg(r)),
            fO(
              (e = (function (t, e) {
                if (e && ('object' === fd(e) || 'function' == typeof e))
                  return e;
                if (void 0 !== e)
                  throw TypeError(
                    'Derived constructors may only return object or undefined'
                  );
                var r = t;
                if (void 0 === r)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return r;
              })(
                this,
                fb()
                  ? Reflect.construct(r, o || [], fg(this).constructor)
                  : r.apply(this, o)
              )),
              'handleDrag',
              function (t) {
                e.leaveTimer &&
                  (clearTimeout(e.leaveTimer), (e.leaveTimer = null)),
                  e.state.isTravellerMoving
                    ? e.handleTravellerMove(t)
                    : e.state.isSlideMoving && e.handleSlideDrag(t);
              }
            ),
            fO(e, 'handleTouchMove', function (t) {
              null != t.changedTouches &&
                t.changedTouches.length > 0 &&
                e.handleDrag(t.changedTouches[0]);
            }),
            fO(e, 'handleDragEnd', function () {
              e.setState(
                { isTravellerMoving: !1, isSlideMoving: !1 },
                function () {
                  var t = e.props,
                    r = t.endIndex,
                    n = t.onDragEnd,
                    o = t.startIndex;
                  null == n || n({ endIndex: r, startIndex: o });
                }
              ),
                e.detachDragEndListener();
            }),
            fO(e, 'handleLeaveWrapper', function () {
              (e.state.isTravellerMoving || e.state.isSlideMoving) &&
                (e.leaveTimer = window.setTimeout(
                  e.handleDragEnd,
                  e.props.leaveTimeOut
                ));
            }),
            fO(e, 'handleEnterSlideOrTraveller', function () {
              e.setState({ isTextActive: !0 });
            }),
            fO(e, 'handleLeaveSlideOrTraveller', function () {
              e.setState({ isTextActive: !1 });
            }),
            fO(e, 'handleSlideDragStart', function (t) {
              var r = fS(t) ? t.changedTouches[0] : t;
              e.setState({
                isTravellerMoving: !1,
                isSlideMoving: !0,
                slideMoveStartX: r.pageX
              }),
                e.attachDragEndListener();
            }),
            (e.travellerDragStartHandlers = {
              startX: e.handleTravellerDragStart.bind(e, 'startX'),
              endX: e.handleTravellerDragStart.bind(e, 'endX')
            }),
            (e.state = {}),
            e
          );
        }
        if ('function' != typeof t && null !== t)
          throw TypeError('Super expression must either be null or a function');
        return (
          (n.prototype = Object.create(t && t.prototype, {
            constructor: { value: n, writable: !0, configurable: !0 }
          })),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          t && fx(n, t),
          (e = [
            {
              key: 'componentWillUnmount',
              value: function () {
                this.leaveTimer &&
                  (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                  this.detachDragEndListener();
              }
            },
            {
              key: 'getIndex',
              value: function (t) {
                var e = t.startX,
                  r = t.endX,
                  o = this.state.scaleValues,
                  i = this.props,
                  a = i.gap,
                  u = i.data.length - 1,
                  c = Math.min(e, r),
                  l = Math.max(e, r),
                  s = n.getIndexInRange(o, c),
                  f = n.getIndexInRange(o, l);
                return {
                  startIndex: s - (s % a),
                  endIndex: f === u ? u : f - (f % a)
                };
              }
            },
            {
              key: 'getTextOfTick',
              value: function (t) {
                var e = this.props,
                  r = e.data,
                  n = e.tickFormatter,
                  o = e.dataKey,
                  i = aR(r[t], o, t);
                return (0, M.default)(n) ? n(i, t) : i;
              }
            },
            {
              key: 'attachDragEndListener',
              value: function () {
                window.addEventListener('mouseup', this.handleDragEnd, !0),
                  window.addEventListener('touchend', this.handleDragEnd, !0),
                  window.addEventListener('mousemove', this.handleDrag, !0);
              }
            },
            {
              key: 'detachDragEndListener',
              value: function () {
                window.removeEventListener('mouseup', this.handleDragEnd, !0),
                  window.removeEventListener(
                    'touchend',
                    this.handleDragEnd,
                    !0
                  ),
                  window.removeEventListener('mousemove', this.handleDrag, !0);
              }
            },
            {
              key: 'handleSlideDrag',
              value: function (t) {
                var e = this.state,
                  r = e.slideMoveStartX,
                  n = e.startX,
                  o = e.endX,
                  i = this.props,
                  a = i.x,
                  u = i.width,
                  c = i.travellerWidth,
                  l = i.startIndex,
                  s = i.endIndex,
                  f = i.onChange,
                  p = t.pageX - r;
                p > 0
                  ? (p = Math.min(p, a + u - c - o, a + u - c - n))
                  : p < 0 && (p = Math.max(p, a - n, a - o));
                var d = this.getIndex({ startX: n + p, endX: o + p });
                (d.startIndex !== l || d.endIndex !== s) && f && f(d),
                  this.setState({
                    startX: n + p,
                    endX: o + p,
                    slideMoveStartX: t.pageX
                  });
              }
            },
            {
              key: 'handleTravellerDragStart',
              value: function (t, e) {
                var r = fS(e) ? e.changedTouches[0] : e;
                this.setState({
                  isSlideMoving: !1,
                  isTravellerMoving: !0,
                  movingTravellerId: t,
                  brushMoveStartX: r.pageX
                }),
                  this.attachDragEndListener();
              }
            },
            {
              key: 'handleTravellerMove',
              value: function (t) {
                var e = this.state,
                  r = e.brushMoveStartX,
                  n = e.movingTravellerId,
                  o = e.endX,
                  i = e.startX,
                  a = this.state[n],
                  u = this.props,
                  c = u.x,
                  l = u.width,
                  s = u.travellerWidth,
                  f = u.onChange,
                  p = u.gap,
                  d = u.data,
                  h = { startX: this.state.startX, endX: this.state.endX },
                  y = t.pageX - r;
                y > 0
                  ? (y = Math.min(y, c + l - s - a))
                  : y < 0 && (y = Math.max(y, c - a)),
                  (h[n] = a + y);
                var v = this.getIndex(h),
                  m = v.startIndex,
                  b = v.endIndex,
                  g = function () {
                    var t = d.length - 1;
                    return (
                      ('startX' === n && (o > i ? m % p == 0 : b % p == 0)) ||
                      (!!(o < i) && b === t) ||
                      ('endX' === n && (o > i ? b % p == 0 : m % p == 0)) ||
                      (!!(o > i) && b === t)
                    );
                  };
                this.setState(
                  fO(fO({}, n, a + y), 'brushMoveStartX', t.pageX),
                  function () {
                    f && g() && f(v);
                  }
                );
              }
            },
            {
              key: 'handleTravellerMoveKeyboard',
              value: function (t, e) {
                var r = this,
                  n = this.state,
                  o = n.scaleValues,
                  i = n.startX,
                  a = n.endX,
                  u = this.state[e],
                  c = o.indexOf(u);
                if (-1 !== c) {
                  var l = c + t;
                  if (-1 !== l && !(l >= o.length)) {
                    var s = o[l];
                    ('startX' === e && s >= a) ||
                      ('endX' === e && s <= i) ||
                      this.setState(fO({}, e, s), function () {
                        r.props.onChange(
                          r.getIndex({
                            startX: r.state.startX,
                            endX: r.state.endX
                          })
                        );
                      });
                  }
                }
              }
            },
            {
              key: 'renderBackground',
              value: function () {
                var t = this.props,
                  e = t.x,
                  r = t.y,
                  n = t.width,
                  o = t.height,
                  i = t.fill,
                  a = t.stroke;
                return P.default.createElement('rect', {
                  stroke: a,
                  fill: i,
                  x: e,
                  y: r,
                  width: n,
                  height: o
                });
              }
            },
            {
              key: 'renderPanorama',
              value: function () {
                var t = this.props,
                  e = t.x,
                  r = t.y,
                  n = t.width,
                  o = t.height,
                  i = t.data,
                  a = t.children,
                  u = t.padding,
                  c = P.Children.only(a);
                return c
                  ? P.default.cloneElement(c, {
                      x: e,
                      y: r,
                      width: n,
                      height: o,
                      margin: u,
                      compact: !0,
                      data: i
                    })
                  : null;
              }
            },
            {
              key: 'renderTravellerLayer',
              value: function (t, e) {
                var r,
                  o,
                  i = this,
                  a = this.props,
                  u = a.y,
                  c = a.travellerWidth,
                  l = a.height,
                  s = a.traveller,
                  f = a.ariaLabel,
                  p = a.data,
                  d = a.startIndex,
                  h = a.endIndex,
                  y = Math.max(t, this.props.x),
                  v = fv(
                    fv({}, tv(this.props, !1)),
                    {},
                    { x: y, y: u, width: c, height: l }
                  ),
                  m =
                    f ||
                    'Min value: '
                      .concat(
                        null == (r = p[d]) ? void 0 : r.name,
                        ', Max value: '
                      )
                      .concat(null == (o = p[h]) ? void 0 : o.name);
                return P.default.createElement(
                  iw,
                  {
                    tabIndex: 0,
                    role: 'slider',
                    'aria-label': m,
                    'aria-valuenow': t,
                    className: 'recharts-brush-traveller',
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.travellerDragStartHandlers[e],
                    onTouchStart: this.travellerDragStartHandlers[e],
                    onKeyDown: function (t) {
                      ['ArrowLeft', 'ArrowRight'].includes(t.key) &&
                        (t.preventDefault(),
                        t.stopPropagation(),
                        i.handleTravellerMoveKeyboard(
                          'ArrowRight' === t.key ? 1 : -1,
                          e
                        ));
                    },
                    onFocus: function () {
                      i.setState({ isTravellerFocused: !0 });
                    },
                    onBlur: function () {
                      i.setState({ isTravellerFocused: !1 });
                    },
                    style: { cursor: 'col-resize' }
                  },
                  n.renderTraveller(s, v)
                );
              }
            },
            {
              key: 'renderSlide',
              value: function (t, e) {
                var r = this.props,
                  n = r.y,
                  o = r.height,
                  i = r.stroke,
                  a = r.travellerWidth,
                  u = Math.min(t, e) + a,
                  c = Math.max(Math.abs(e - t) - a, 0);
                return P.default.createElement('rect', {
                  className: 'recharts-brush-slide',
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.handleSlideDragStart,
                  onTouchStart: this.handleSlideDragStart,
                  style: { cursor: 'move' },
                  stroke: 'none',
                  fill: i,
                  fillOpacity: 0.2,
                  x: u,
                  y: n,
                  width: c,
                  height: o
                });
              }
            },
            {
              key: 'renderText',
              value: function () {
                var t = this.props,
                  e = t.startIndex,
                  r = t.endIndex,
                  n = t.y,
                  o = t.height,
                  i = t.travellerWidth,
                  a = t.stroke,
                  u = this.state,
                  c = u.startX,
                  l = u.endX,
                  s = { pointerEvents: 'none', fill: a };
                return P.default.createElement(
                  iw,
                  { className: 'recharts-brush-texts' },
                  P.default.createElement(
                    t0,
                    fh(
                      {
                        textAnchor: 'end',
                        verticalAnchor: 'middle',
                        x: Math.min(c, l) - 5,
                        y: n + o / 2
                      },
                      s
                    ),
                    this.getTextOfTick(e)
                  ),
                  P.default.createElement(
                    t0,
                    fh(
                      {
                        textAnchor: 'start',
                        verticalAnchor: 'middle',
                        x: Math.max(c, l) + i + 5,
                        y: n + o / 2
                      },
                      s
                    ),
                    this.getTextOfTick(r)
                  )
                );
              }
            },
            {
              key: 'render',
              value: function () {
                var t = this.props,
                  e = t.data,
                  r = t.className,
                  n = t.children,
                  o = t.x,
                  i = t.y,
                  a = t.width,
                  u = t.height,
                  c = t.alwaysShowText,
                  l = this.state,
                  s = l.startX,
                  f = l.endX,
                  p = l.isTextActive,
                  d = l.isSlideMoving,
                  h = l.isTravellerMoving,
                  y = l.isTravellerFocused;
                if (
                  !e ||
                  !e.length ||
                  !L(o) ||
                  !L(i) ||
                  !L(a) ||
                  !L(u) ||
                  a <= 0 ||
                  u <= 0
                )
                  return null;
                var v = (0, _.default)('recharts-brush', r),
                  m = 1 === P.default.Children.count(n),
                  b = fp('userSelect', 'none');
                return P.default.createElement(
                  iw,
                  {
                    className: v,
                    onMouseLeave: this.handleLeaveWrapper,
                    onTouchMove: this.handleTouchMove,
                    style: b
                  },
                  this.renderBackground(),
                  m && this.renderPanorama(),
                  this.renderSlide(s, f),
                  this.renderTravellerLayer(s, 'startX'),
                  this.renderTravellerLayer(f, 'endX'),
                  (p || d || h || y || c) && this.renderText()
                );
              }
            }
          ]),
          (r = [
            {
              key: 'renderDefaultTraveller',
              value: function (t) {
                var e = t.x,
                  r = t.y,
                  n = t.width,
                  o = t.height,
                  i = t.stroke,
                  a = Math.floor(r + o / 2) - 1;
                return P.default.createElement(
                  P.default.Fragment,
                  null,
                  P.default.createElement('rect', {
                    x: e,
                    y: r,
                    width: n,
                    height: o,
                    fill: i,
                    stroke: 'none'
                  }),
                  P.default.createElement('line', {
                    x1: e + 1,
                    y1: a,
                    x2: e + n - 1,
                    y2: a,
                    fill: 'none',
                    stroke: '#fff'
                  }),
                  P.default.createElement('line', {
                    x1: e + 1,
                    y1: a + 2,
                    x2: e + n - 1,
                    y2: a + 2,
                    fill: 'none',
                    stroke: '#fff'
                  })
                );
              }
            },
            {
              key: 'renderTraveller',
              value: function (t, e) {
                return P.default.isValidElement(t)
                  ? P.default.cloneElement(t, e)
                  : (0, M.default)(t)
                    ? t(e)
                    : n.renderDefaultTraveller(e);
              }
            },
            {
              key: 'getDerivedStateFromProps',
              value: function (t, e) {
                var r = t.data,
                  n = t.width,
                  o = t.x,
                  i = t.travellerWidth,
                  a = t.updateId,
                  u = t.startIndex,
                  c = t.endIndex;
                if (r !== e.prevData || a !== e.prevUpdateId)
                  return fv(
                    {
                      prevData: r,
                      prevTravellerWidth: i,
                      prevUpdateId: a,
                      prevX: o,
                      prevWidth: n
                    },
                    r && r.length
                      ? fj({
                          data: r,
                          width: n,
                          x: o,
                          travellerWidth: i,
                          startIndex: u,
                          endIndex: c
                        })
                      : { scale: null, scaleValues: null }
                  );
                if (
                  e.scale &&
                  (n !== e.prevWidth ||
                    o !== e.prevX ||
                    i !== e.prevTravellerWidth)
                ) {
                  e.scale.range([o, o + n - i]);
                  var l = e.scale.domain().map(function (t) {
                    return e.scale(t);
                  });
                  return {
                    prevData: r,
                    prevTravellerWidth: i,
                    prevUpdateId: a,
                    prevX: o,
                    prevWidth: n,
                    startX: e.scale(t.startIndex),
                    endX: e.scale(t.endIndex),
                    scaleValues: l
                  };
                }
                return null;
              }
            },
            {
              key: 'getIndexInRange',
              value: function (t, e) {
                for (var r = t.length, n = 0, o = r - 1; o - n > 1; ) {
                  var i = Math.floor((n + o) / 2);
                  t[i] > e ? (o = i) : (n = i);
                }
                return e >= t[o] ? o : n;
              }
            }
          ]),
          e && fm(n.prototype, e),
          r && fm(n, r),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          n
        );
      })(P.PureComponent);
    fO(fA, 'displayName', 'Brush'),
      fO(fA, 'defaultProps', {
        height: 40,
        travellerWidth: 5,
        gap: 1,
        fill: '#fff',
        stroke: '#666',
        padding: { top: 1, right: 1, bottom: 1, left: 1 },
        leaveTimeOut: 1e3,
        alwaysShowText: !1
      });
    var fP = function (t, e) {
        var r = t.alwaysShow,
          n = t.ifOverflow;
        return r && (n = 'extendDomain'), n === e;
      },
      fE = t.i(26223),
      fk = t.i(69189),
      fM = ['x', 'y'];
    function fT(t) {
      return (fT =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function f_() {
      return (f_ = Object.assign.bind()).apply(this, arguments);
    }
    function fC(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function fI(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? fC(Object(r), !0).forEach(function (e) {
              var n, o, i;
              (n = t),
                (o = e),
                (i = r[e]),
                (o = (function (t) {
                  var e = (function (t, e) {
                    if ('object' != fT(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || 'default');
                      if ('object' != fT(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === e ? String : Number)(t);
                  })(t, 'string');
                  return 'symbol' == fT(e) ? e : e + '';
                })(o)) in n
                  ? Object.defineProperty(n, o, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (n[o] = i);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : fC(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function fD(t, e) {
      var r = t.x,
        n = t.y,
        o = (function (t, e) {
          if (null == t) return {};
          var r,
            n,
            o = (function (t, e) {
              if (null == t) return {};
              var r = {};
              for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                  if (e.indexOf(n) >= 0) continue;
                  r[n] = t[n];
                }
              return r;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]),
                !(e.indexOf(r) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]);
          }
          return o;
        })(t, fM),
        i = parseInt(''.concat(r), 10),
        a = parseInt(''.concat(n), 10),
        u = parseInt(''.concat(e.height || o.height), 10),
        c = parseInt(''.concat(e.width || o.width), 10);
      return fI(
        fI(fI(fI(fI({}, e), o), i ? { x: i } : {}), a ? { y: a } : {}),
        {},
        { height: u, width: c, name: e.name, radius: e.radius }
      );
    }
    function fN(t) {
      return P.default.createElement(
        sb,
        f_(
          {
            shapeType: 'rectangle',
            propTransformer: fD,
            activeClassName: 'recharts-active-bar'
          },
          t
        )
      );
    }
    var fR = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return function (r, n) {
          if ('number' == typeof t) return t;
          var o = L(r) || (0, k.default)(r);
          return o ? t(r, n) : (o || ig(!1), e);
        };
      },
      fB = ['value', 'background'];
    function fL(t) {
      return (fL =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function fU() {
      return (fU = Object.assign.bind()).apply(this, arguments);
    }
    function f$(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function fz(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? f$(Object(r), !0).forEach(function (e) {
              fH(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : f$(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function fF(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, fV(n.key), n);
      }
    }
    function fq() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (t) {}
      return (fq = function () {
        return !!t;
      })();
    }
    function fW(t) {
      return (fW = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function fX(t, e) {
      return (fX = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function fH(t, e, r) {
      return (
        (e = fV(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function fV(t) {
      var e = (function (t, e) {
        if ('object' != fL(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != fL(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == fL(e) ? e : e + '';
    }
    var fK = (function (t) {
      var e, r;
      function n() {
        var t, e, r;
        if (!(this instanceof n))
          throw TypeError('Cannot call a class as a function');
        for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
          i[a] = arguments[a];
        return (
          (e = n),
          (r = [].concat(i)),
          (e = fW(e)),
          fH(
            (t = (function (t, e) {
              if (e && ('object' === fL(e) || 'function' == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  'Derived constructors may only return object or undefined'
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return r;
            })(
              this,
              fq()
                ? Reflect.construct(e, r || [], fW(this).constructor)
                : e.apply(this, r)
            )),
            'state',
            { isAnimationFinished: !1 }
          ),
          fH(t, 'id', z('recharts-bar-')),
          fH(t, 'handleAnimationEnd', function () {
            var e = t.props.onAnimationEnd;
            t.setState({ isAnimationFinished: !0 }), e && e();
          }),
          fH(t, 'handleAnimationStart', function () {
            var e = t.props.onAnimationStart;
            t.setState({ isAnimationFinished: !1 }), e && e();
          }),
          t
        );
      }
      if ('function' != typeof t && null !== t)
        throw TypeError('Super expression must either be null or a function');
      return (
        (n.prototype = Object.create(t && t.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 }
        })),
        Object.defineProperty(n, 'prototype', { writable: !1 }),
        t && fX(n, t),
        (e = [
          {
            key: 'renderRectanglesStatically',
            value: function (t) {
              var e = this,
                r = this.props,
                n = r.shape,
                o = r.dataKey,
                i = r.activeIndex,
                a = r.activeBar,
                u = tv(this.props, !1);
              return (
                t &&
                t.map(function (t, r) {
                  var c = r === i,
                    l = fz(
                      fz(fz({}, u), t),
                      {},
                      {
                        isActive: c,
                        option: c ? a : n,
                        index: r,
                        dataKey: o,
                        onAnimationStart: e.handleAnimationStart,
                        onAnimationEnd: e.handleAnimationEnd
                      }
                    );
                  return P.default.createElement(
                    iw,
                    fU(
                      { className: 'recharts-bar-rectangle' },
                      tr(e.props, t, r),
                      {
                        key: 'rectangle-'
                          .concat(null == t ? void 0 : t.x, '-')
                          .concat(null == t ? void 0 : t.y, '-')
                          .concat(null == t ? void 0 : t.value, '-')
                          .concat(r)
                      }
                    ),
                    P.default.createElement(fN, l)
                  );
                })
              );
            }
          },
          {
            key: 'renderRectanglesWithAnimation',
            value: function () {
              var t = this,
                e = this.props,
                r = e.data,
                n = e.layout,
                o = e.isAnimationActive,
                i = e.animationBegin,
                a = e.animationDuration,
                u = e.animationEasing,
                c = e.animationId,
                l = this.state.prevData;
              return P.default.createElement(
                cB,
                {
                  begin: i,
                  duration: a,
                  isActive: o,
                  easing: u,
                  from: { t: 0 },
                  to: { t: 1 },
                  key: 'bar-'.concat(c),
                  onAnimationEnd: this.handleAnimationEnd,
                  onAnimationStart: this.handleAnimationStart
                },
                function (e) {
                  var o = e.t,
                    i = r.map(function (t, e) {
                      var r = l && l[e];
                      if (r) {
                        var i = X(r.x, t.x),
                          a = X(r.y, t.y),
                          u = X(r.width, t.width),
                          c = X(r.height, t.height);
                        return fz(
                          fz({}, t),
                          {},
                          { x: i(o), y: a(o), width: u(o), height: c(o) }
                        );
                      }
                      if ('horizontal' === n) {
                        var s = X(0, t.height)(o);
                        return fz(
                          fz({}, t),
                          {},
                          { y: t.y + t.height - s, height: s }
                        );
                      }
                      var f = X(0, t.width)(o);
                      return fz(fz({}, t), {}, { width: f });
                    });
                  return P.default.createElement(
                    iw,
                    null,
                    t.renderRectanglesStatically(i)
                  );
                }
              );
            }
          },
          {
            key: 'renderRectangles',
            value: function () {
              var t = this.props,
                e = t.data,
                r = t.isAnimationActive,
                n = this.state.prevData;
              return r && e && e.length && (!n || !(0, o2.default)(n, e))
                ? this.renderRectanglesWithAnimation()
                : this.renderRectanglesStatically(e);
            }
          },
          {
            key: 'renderBackground',
            value: function () {
              var t = this,
                e = this.props,
                r = e.data,
                n = e.dataKey,
                o = e.activeIndex,
                i = tv(this.props.background, !1);
              return r.map(function (e, r) {
                e.value;
                var a = e.background,
                  u = (function (t, e) {
                    if (null == t) return {};
                    var r,
                      n,
                      o = (function (t, e) {
                        if (null == t) return {};
                        var r = {};
                        for (var n in t)
                          if (Object.prototype.hasOwnProperty.call(t, n)) {
                            if (e.indexOf(n) >= 0) continue;
                            r[n] = t[n];
                          }
                        return r;
                      })(t, e);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      for (n = 0; n < i.length; n++)
                        (r = i[n]),
                          !(e.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(t, r) &&
                            (o[r] = t[r]);
                    }
                    return o;
                  })(e, fB);
                if (!a) return null;
                var c = fz(
                  fz(
                    fz(fz(fz({}, u), {}, { fill: '#eee' }, a), i),
                    tr(t.props, e, r)
                  ),
                  {},
                  {
                    onAnimationStart: t.handleAnimationStart,
                    onAnimationEnd: t.handleAnimationEnd,
                    dataKey: n,
                    index: r,
                    className: 'recharts-bar-background-rectangle'
                  }
                );
                return P.default.createElement(
                  fN,
                  fU(
                    {
                      key: 'background-bar-'.concat(r),
                      option: t.props.background,
                      isActive: r === o
                    },
                    c
                  )
                );
              });
            }
          },
          {
            key: 'renderErrorBar',
            value: function (t, e) {
              if (
                this.props.isAnimationActive &&
                !this.state.isAnimationFinished
              )
                return null;
              var r = this.props,
                n = r.data,
                o = r.xAxis,
                i = r.yAxis,
                a = r.layout,
                u = tf(r.children, iC);
              if (!u) return null;
              var c = 'vertical' === a ? n[0].height / 2 : n[0].width / 2,
                l = function (t, e) {
                  var r = Array.isArray(t.value) ? t.value[1] : t.value;
                  return { x: t.x, y: t.y, value: r, errorVal: aR(t, e) };
                };
              return P.default.createElement(
                iw,
                { clipPath: t ? 'url(#clipPath-'.concat(e, ')') : null },
                u.map(function (t) {
                  return P.default.cloneElement(t, {
                    key: 'error-bar-'.concat(e, '-').concat(t.props.dataKey),
                    data: n,
                    xAxis: o,
                    yAxis: i,
                    layout: a,
                    offset: c,
                    dataPointFormatter: l
                  });
                })
              );
            }
          },
          {
            key: 'render',
            value: function () {
              var t = this.props,
                e = t.hide,
                r = t.data,
                n = t.className,
                o = t.xAxis,
                i = t.yAxis,
                a = t.left,
                u = t.top,
                c = t.width,
                l = t.height,
                s = t.isAnimationActive,
                f = t.background,
                p = t.id;
              if (e || !r || !r.length) return null;
              var d = this.state.isAnimationFinished,
                h = (0, _.default)('recharts-bar', n),
                y = o && o.allowDataOverflow,
                v = i && i.allowDataOverflow,
                m = y || v,
                b = (0, k.default)(p) ? this.id : p;
              return P.default.createElement(
                iw,
                { className: h },
                y || v
                  ? P.default.createElement(
                      'defs',
                      null,
                      P.default.createElement(
                        'clipPath',
                        { id: 'clipPath-'.concat(b) },
                        P.default.createElement('rect', {
                          x: y ? a : a - c / 2,
                          y: v ? u : u - l / 2,
                          width: y ? c : 2 * c,
                          height: v ? l : 2 * l
                        })
                      )
                    )
                  : null,
                P.default.createElement(
                  iw,
                  {
                    className: 'recharts-bar-rectangles',
                    clipPath: m ? 'url(#clipPath-'.concat(b, ')') : null
                  },
                  f ? this.renderBackground() : null,
                  this.renderRectangles()
                ),
                this.renderErrorBar(m, b),
                (!s || d) && lV.renderCallByParent(this.props, r)
              );
            }
          }
        ]),
        (r = [
          {
            key: 'getDerivedStateFromProps',
            value: function (t, e) {
              return t.animationId !== e.prevAnimationId
                ? {
                    prevAnimationId: t.animationId,
                    curData: t.data,
                    prevData: e.curData
                  }
                : t.data !== e.curData
                  ? { curData: t.data }
                  : null;
            }
          }
        ]),
        e && fF(n.prototype, e),
        r && fF(n, r),
        Object.defineProperty(n, 'prototype', { writable: !1 }),
        n
      );
    })(P.PureComponent);
    function fG(t) {
      return (fG =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function fY(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, f0(n.key), n);
      }
    }
    function fZ(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function fJ(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? fZ(Object(r), !0).forEach(function (e) {
              fQ(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : fZ(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function fQ(t, e, r) {
      return (
        (e = f0(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function f0(t) {
      var e = (function (t, e) {
        if ('object' != fG(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != fG(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == fG(e) ? e : e + '';
    }
    fH(fK, 'displayName', 'Bar'),
      fH(fK, 'defaultProps', {
        xAxisId: 0,
        yAxisId: 0,
        legendType: 'rect',
        minPointSize: 0,
        hide: !1,
        data: [],
        layout: 'vertical',
        activeBar: !1,
        isAnimationActive: !V.isSsr,
        animationBegin: 0,
        animationDuration: 400,
        animationEasing: 'ease'
      }),
      fH(fK, 'getComposedData', function (t) {
        var e = t.props,
          r = t.item,
          n = t.barPosition,
          o = t.bandSize,
          i = t.xAxis,
          a = t.yAxis,
          u = t.xAxisTicks,
          c = t.yAxisTicks,
          l = t.stackedData,
          s = t.dataStartIndex,
          f = t.displayedData,
          p = t.offset,
          d = aJ(n, r);
        if (!d) return null;
        var h = e.layout,
          y = r.type.defaultProps,
          v = void 0 !== y ? fz(fz({}, y), r.props) : r.props,
          m = v.dataKey,
          b = v.children,
          g = v.minPointSize,
          x = 'horizontal' === h ? a : i,
          O = l ? x.scale.domain() : null,
          w = a5({ numericAxis: x }),
          j = tf(b, lK),
          S = f.map(function (t, e) {
            l
              ? (f = aQ(l[s + e], O))
              : Array.isArray((f = aR(t, m))) || (f = [w, f]);
            var n = fR(g, fK.defaultProps.minPointSize)(f[1], e);
            if ('horizontal' === h) {
              var f,
                p,
                y,
                v,
                b,
                x,
                S,
                A = [a.scale(f[0]), a.scale(f[1])],
                P = A[0],
                E = A[1];
              (p = a4({
                axis: i,
                ticks: u,
                bandSize: o,
                offset: d.offset,
                entry: t,
                index: e
              })),
                (y = null != (S = null != E ? E : P) ? S : void 0),
                (v = d.size);
              var k = P - E;
              if (
                ((b = Number.isNaN(k) ? 0 : k),
                (x = { x: p, y: a.y, width: v, height: a.height }),
                Math.abs(n) > 0 && Math.abs(b) < Math.abs(n))
              ) {
                var M = R(b || n) * (Math.abs(n) - Math.abs(b));
                (y -= M), (b += M);
              }
            } else {
              var T = [i.scale(f[0]), i.scale(f[1])],
                _ = T[0],
                C = T[1];
              if (
                ((p = _),
                (y = a4({
                  axis: a,
                  ticks: c,
                  bandSize: o,
                  offset: d.offset,
                  entry: t,
                  index: e
                })),
                (v = C - _),
                (b = d.size),
                (x = { x: i.x, y: y, width: i.width, height: b }),
                Math.abs(n) > 0 && Math.abs(v) < Math.abs(n))
              ) {
                var I = R(v || n) * (Math.abs(n) - Math.abs(v));
                v += I;
              }
            }
            return fz(
              fz(
                fz({}, t),
                {},
                {
                  x: p,
                  y: y,
                  width: v,
                  height: b,
                  value: l ? f : f[1],
                  payload: t,
                  background: x
                },
                j && j[e] && j[e].props
              ),
              {},
              {
                tooltipPayload: [un(r, t)],
                tooltipPosition: { x: p + v / 2, y: y + b / 2 }
              }
            );
          });
        return fz({ data: S, layout: h }, p);
      });
    var f1 = function (t, e) {
        var r = t.x,
          n = t.y,
          o = e.x,
          i = e.y;
        return {
          x: Math.min(r, o),
          y: Math.min(n, i),
          width: Math.abs(o - r),
          height: Math.abs(i - n)
        };
      },
      f2 = (function () {
        var t, e;
        function r(t) {
          if (!(this instanceof r))
            throw TypeError('Cannot call a class as a function');
          this.scale = t;
        }
        return (
          (t = [
            {
              key: 'domain',
              get: function () {
                return this.scale.domain;
              }
            },
            {
              key: 'range',
              get: function () {
                return this.scale.range;
              }
            },
            {
              key: 'rangeMin',
              get: function () {
                return this.range()[0];
              }
            },
            {
              key: 'rangeMax',
              get: function () {
                return this.range()[1];
              }
            },
            {
              key: 'bandwidth',
              get: function () {
                return this.scale.bandwidth;
              }
            },
            {
              key: 'apply',
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = e.bandAware,
                  n = e.position;
                if (void 0 !== t) {
                  if (n)
                    switch (n) {
                      case 'start':
                      default:
                        return this.scale(t);
                      case 'middle':
                        var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                        return this.scale(t) + o;
                      case 'end':
                        var i = this.bandwidth ? this.bandwidth() : 0;
                        return this.scale(t) + i;
                    }
                  if (r) {
                    var a = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(t) + a;
                  }
                  return this.scale(t);
                }
              }
            },
            {
              key: 'isInRange',
              value: function (t) {
                var e = this.range(),
                  r = e[0],
                  n = e[e.length - 1];
                return r <= n ? t >= r && t <= n : t >= n && t <= r;
              }
            }
          ]),
          (e = [
            {
              key: 'create',
              value: function (t) {
                return new r(t);
              }
            }
          ]),
          t && fY(r.prototype, t),
          e && fY(r, e),
          Object.defineProperty(r, 'prototype', { writable: !1 }),
          r
        );
      })();
    fQ(f2, 'EPS', 1e-4);
    var f3 = function (t) {
      var e = Object.keys(t).reduce(function (e, r) {
        return fJ(fJ({}, e), {}, fQ({}, r, f2.create(t[r])));
      }, {});
      return fJ(
        fJ({}, e),
        {},
        {
          apply: function (t) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = r.bandAware,
              o = r.position;
            return (0, fE.default)(t, function (t, r) {
              return e[r].apply(t, { bandAware: n, position: o });
            });
          },
          isInRange: function (t) {
            return (0, fk.default)(t, function (t, r) {
              return e[r].isInRange(t);
            });
          }
        }
      );
    };
    function f4() {
      return (f4 = Object.assign.bind()).apply(this, arguments);
    }
    function f5(t) {
      return (f5 =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function f8(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function f6(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? f8(Object(r), !0).forEach(function (e) {
              pe(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : f8(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function f9() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (t) {}
      return (f9 = function () {
        return !!t;
      })();
    }
    function f7(t) {
      return (f7 = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function pt(t, e) {
      return (pt = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function pe(t, e, r) {
      return (
        (e = pr(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function pr(t) {
      var e = (function (t, e) {
        if ('object' != f5(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != f5(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == f5(e) ? e : e + '';
    }
    var pn = function (t) {
        var e = t.x,
          r = t.y,
          n = t.xAxis,
          o = t.yAxis,
          i = f3({ x: n.scale, y: o.scale }),
          a = i.apply({ x: e, y: r }, { bandAware: !0 });
        return fP(t, 'discard') && !i.isInRange(a) ? null : a;
      },
      po = (function (t) {
        var e;
        function r() {
          var t, e;
          if (!(this instanceof r))
            throw TypeError('Cannot call a class as a function');
          return (
            (t = r),
            (e = arguments),
            (t = f7(t)),
            (function (t, e) {
              if (e && ('object' === f5(e) || 'function' == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  'Derived constructors may only return object or undefined'
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return r;
            })(
              this,
              f9()
                ? Reflect.construct(t, e || [], f7(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        if ('function' != typeof t && null !== t)
          throw TypeError('Super expression must either be null or a function');
        return (
          (r.prototype = Object.create(t && t.prototype, {
            constructor: { value: r, writable: !0, configurable: !0 }
          })),
          Object.defineProperty(r, 'prototype', { writable: !1 }),
          t && pt(r, t),
          (e = [
            {
              key: 'render',
              value: function () {
                var t = this.props,
                  e = t.x,
                  n = t.y,
                  o = t.r,
                  i = t.alwaysShow,
                  a = t.clipPathId,
                  u = U(e),
                  c = U(n);
                if (
                  (iI(
                    void 0 === i,
                    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
                  ),
                  !u || !c)
                )
                  return null;
                var l = pn(this.props);
                if (!l) return null;
                var s = l.x,
                  f = l.y,
                  p = this.props,
                  d = p.shape,
                  h = p.className,
                  y = f6(
                    f6(
                      {
                        clipPath: fP(this.props, 'hidden')
                          ? 'url(#'.concat(a, ')')
                          : void 0
                      },
                      tv(this.props, !0)
                    ),
                    {},
                    { cx: s, cy: f }
                  );
                return P.default.createElement(
                  iw,
                  { className: (0, _.default)('recharts-reference-dot', h) },
                  r.renderDot(d, y),
                  uE.renderCallByParent(this.props, {
                    x: s - o,
                    y: f - o,
                    width: 2 * o,
                    height: 2 * o
                  })
                );
              }
            }
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(t, pr(n.key), n);
            }
          })(r.prototype, e),
          Object.defineProperty(r, 'prototype', { writable: !1 }),
          r
        );
      })(P.default.Component);
    pe(po, 'displayName', 'ReferenceDot'),
      pe(po, 'defaultProps', {
        isFront: !1,
        ifOverflow: 'discard',
        xAxisId: 0,
        yAxisId: 0,
        r: 10,
        fill: '#fff',
        stroke: '#ccc',
        fillOpacity: 1,
        strokeWidth: 1
      }),
      pe(po, 'renderDot', function (t, e) {
        return P.default.isValidElement(t)
          ? P.default.cloneElement(t, e)
          : (0, M.default)(t)
            ? t(e)
            : P.default.createElement(
                fa,
                f4({}, e, {
                  cx: e.cx,
                  cy: e.cy,
                  className: 'recharts-reference-dot-dot'
                })
              );
      });
    var pi = t.i(50225);
    t.i(84023);
    var pa = (0, t.i(28535).default)(
        function (t) {
          return { x: t.left, y: t.top, width: t.width, height: t.height };
        },
        function (t) {
          return 'l' + t.left + 't' + t.top + 'w' + t.width + 'h' + t.height;
        }
      ),
      pu = (0, P.createContext)(void 0),
      pc = (0, P.createContext)(void 0),
      pl = (0, P.createContext)(void 0),
      ps = (0, P.createContext)({}),
      pf = (0, P.createContext)(void 0),
      pp = (0, P.createContext)(0),
      pd = (0, P.createContext)(0),
      ph = function (t) {
        var e = t.state,
          r = e.xAxisMap,
          n = e.yAxisMap,
          o = e.offset,
          i = t.clipPathId,
          a = t.children,
          u = t.width,
          c = t.height,
          l = pa(o);
        return P.default.createElement(
          pu.Provider,
          { value: r },
          P.default.createElement(
            pc.Provider,
            { value: n },
            P.default.createElement(
              ps.Provider,
              { value: o },
              P.default.createElement(
                pl.Provider,
                { value: l },
                P.default.createElement(
                  pf.Provider,
                  { value: i },
                  P.default.createElement(
                    pp.Provider,
                    { value: c },
                    P.default.createElement(pd.Provider, { value: u }, a)
                  )
                )
              )
            )
          )
        );
      },
      py = function (t) {
        var e = (0, P.useContext)(pu);
        null == e && ig(!1);
        var r = e[t];
        return null == r && ig(!1), r;
      },
      pv = function (t) {
        var e = (0, P.useContext)(pc);
        null == e && ig(!1);
        var r = e[t];
        return null == r && ig(!1), r;
      };
    function pm(t) {
      return (pm =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function pb() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (t) {}
      return (pb = function () {
        return !!t;
      })();
    }
    function pg(t) {
      return (pg = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function px(t, e) {
      return (px = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function pO(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function pw(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? pO(Object(r), !0).forEach(function (e) {
              pj(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : pO(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function pj(t, e, r) {
      return (
        (e = pS(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function pS(t) {
      var e = (function (t, e) {
        if ('object' != pm(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != pm(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == pm(e) ? e : e + '';
    }
    function pA(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function pP() {
      return (pP = Object.assign.bind()).apply(this, arguments);
    }
    var pE = function (t, e) {
        return P.default.isValidElement(t)
          ? P.default.cloneElement(t, e)
          : (0, M.default)(t)
            ? t(e)
            : P.default.createElement(
                'line',
                pP({}, e, { className: 'recharts-reference-line-line' })
              );
      },
      pk = function (t, e, r, n, o, i, a, u, c) {
        var l = o.x,
          s = o.y,
          f = o.width,
          p = o.height;
        if (r) {
          var d = c.y,
            h = t.y.apply(d, { position: i });
          if (fP(c, 'discard') && !t.y.isInRange(h)) return null;
          var y = [
            { x: l + f, y: h },
            { x: l, y: h }
          ];
          return 'left' === u ? y.reverse() : y;
        }
        if (e) {
          var v = c.x,
            m = t.x.apply(v, { position: i });
          if (fP(c, 'discard') && !t.x.isInRange(m)) return null;
          var b = [
            { x: m, y: s + p },
            { x: m, y: s }
          ];
          return 'top' === a ? b.reverse() : b;
        }
        if (n) {
          var g = c.segment.map(function (e) {
            return t.apply(e, { position: i });
          });
          return fP(c, 'discard') &&
            (0, pi.default)(g, function (e) {
              return !t.isInRange(e);
            })
            ? null
            : g;
        }
        return null;
      };
    function pM(t) {
      var e,
        r = t.x,
        n = t.y,
        o = t.segment,
        i = t.xAxisId,
        a = t.yAxisId,
        u = t.shape,
        c = t.className,
        l = t.alwaysShow,
        s = (0, P.useContext)(pf),
        f = py(i),
        p = pv(a),
        d = (0, P.useContext)(pl);
      if (!s || !d) return null;
      iI(
        void 0 === l,
        'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
      );
      var h = pk(
        f3({ x: f.scale, y: p.scale }),
        U(r),
        U(n),
        o && 2 === o.length,
        d,
        t.position,
        f.orientation,
        p.orientation,
        t
      );
      if (!h) return null;
      var y =
          (function (t) {
            if (Array.isArray(t)) return t;
          })(h) ||
          (function (t) {
            var e =
              null == t
                ? null
                : ('u' > typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != e) {
              var r,
                n,
                o,
                i,
                a = [],
                u = !0,
                c = !1;
              try {
                (o = (e = e.call(t)).next), !1;
                for (
                  ;
                  !(u = (r = o.call(e)).done) &&
                  (a.push(r.value), 2 !== a.length);
                  u = !0
                );
              } catch (t) {
                (c = !0), (n = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != e.return &&
                    ((i = e.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (c) throw n;
                }
              }
              return a;
            }
          })(h) ||
          (function (t) {
            if (t) {
              if ('string' == typeof t) return pA(t, 2);
              var e = Object.prototype.toString.call(t).slice(8, -1);
              if (
                ('Object' === e && t.constructor && (e = t.constructor.name),
                'Map' === e || 'Set' === e)
              )
                return Array.from(t);
              if (
                'Arguments' === e ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
              )
                return pA(t, 2);
            }
          })(h) ||
          (function () {
            throw TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })(),
        v = y[0],
        m = v.x,
        b = v.y,
        g = y[1],
        x = g.x,
        O = g.y,
        w = pw(
          pw(
            { clipPath: fP(t, 'hidden') ? 'url(#'.concat(s, ')') : void 0 },
            tv(t, !0)
          ),
          {},
          { x1: m, y1: b, x2: x, y2: O }
        );
      return P.default.createElement(
        iw,
        { className: (0, _.default)('recharts-reference-line', c) },
        pE(u, w),
        uE.renderCallByParent(
          t,
          f1(
            { x: (e = { x1: m, y1: b, x2: x, y2: O }).x1, y: e.y1 },
            { x: e.x2, y: e.y2 }
          )
        )
      );
    }
    var pT = (function (t) {
      var e;
      function r() {
        var t, e;
        if (!(this instanceof r))
          throw TypeError('Cannot call a class as a function');
        return (
          (t = r),
          (e = arguments),
          (t = pg(t)),
          (function (t, e) {
            if (e && ('object' === pm(e) || 'function' == typeof e)) return e;
            if (void 0 !== e)
              throw TypeError(
                'Derived constructors may only return object or undefined'
              );
            var r = t;
            if (void 0 === r)
              throw ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return r;
          })(
            this,
            pb()
              ? Reflect.construct(t, e || [], pg(this).constructor)
              : t.apply(this, e)
          )
        );
      }
      if ('function' != typeof t && null !== t)
        throw TypeError('Super expression must either be null or a function');
      return (
        (r.prototype = Object.create(t && t.prototype, {
          constructor: { value: r, writable: !0, configurable: !0 }
        })),
        Object.defineProperty(r, 'prototype', { writable: !1 }),
        t && px(r, t),
        (e = [
          {
            key: 'render',
            value: function () {
              return P.default.createElement(pM, this.props);
            }
          }
        ]),
        (function (t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, pS(n.key), n);
          }
        })(r.prototype, e),
        Object.defineProperty(r, 'prototype', { writable: !1 }),
        r
      );
    })(P.default.Component);
    function p_() {
      return (p_ = Object.assign.bind()).apply(this, arguments);
    }
    function pC(t) {
      return (pC =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function pI(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function pD(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? pI(Object(r), !0).forEach(function (e) {
              pL(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : pI(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    pj(pT, 'displayName', 'ReferenceLine'),
      pj(pT, 'defaultProps', {
        isFront: !1,
        ifOverflow: 'discard',
        xAxisId: 0,
        yAxisId: 0,
        fill: 'none',
        stroke: '#ccc',
        fillOpacity: 1,
        strokeWidth: 1,
        position: 'middle'
      });
    function pN() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (t) {}
      return (pN = function () {
        return !!t;
      })();
    }
    function pR(t) {
      return (pR = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function pB(t, e) {
      return (pB = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function pL(t, e, r) {
      return (
        (e = pU(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function pU(t) {
      var e = (function (t, e) {
        if ('object' != pC(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != pC(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == pC(e) ? e : e + '';
    }
    var p$ = function (t, e, r, n, o) {
        var i = o.x1,
          a = o.x2,
          u = o.y1,
          c = o.y2,
          l = o.xAxis,
          s = o.yAxis;
        if (!l || !s) return null;
        var f = f3({ x: l.scale, y: s.scale }),
          p = {
            x: t ? f.x.apply(i, { position: 'start' }) : f.x.rangeMin,
            y: r ? f.y.apply(u, { position: 'start' }) : f.y.rangeMin
          },
          d = {
            x: e ? f.x.apply(a, { position: 'end' }) : f.x.rangeMax,
            y: n ? f.y.apply(c, { position: 'end' }) : f.y.rangeMax
          };
        return !fP(o, 'discard') || (f.isInRange(p) && f.isInRange(d))
          ? f1(p, d)
          : null;
      },
      pz = (function (t) {
        var e;
        function r() {
          var t, e;
          if (!(this instanceof r))
            throw TypeError('Cannot call a class as a function');
          return (
            (t = r),
            (e = arguments),
            (t = pR(t)),
            (function (t, e) {
              if (e && ('object' === pC(e) || 'function' == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  'Derived constructors may only return object or undefined'
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return r;
            })(
              this,
              pN()
                ? Reflect.construct(t, e || [], pR(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        if ('function' != typeof t && null !== t)
          throw TypeError('Super expression must either be null or a function');
        return (
          (r.prototype = Object.create(t && t.prototype, {
            constructor: { value: r, writable: !0, configurable: !0 }
          })),
          Object.defineProperty(r, 'prototype', { writable: !1 }),
          t && pB(r, t),
          (e = [
            {
              key: 'render',
              value: function () {
                var t = this.props,
                  e = t.x1,
                  n = t.x2,
                  o = t.y1,
                  i = t.y2,
                  a = t.className,
                  u = t.alwaysShow,
                  c = t.clipPathId;
                iI(
                  void 0 === u,
                  'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
                );
                var l = U(e),
                  s = U(n),
                  f = U(o),
                  p = U(i),
                  d = this.props.shape;
                if (!l && !s && !f && !p && !d) return null;
                var h = p$(l, s, f, p, this.props);
                if (!h && !d) return null;
                var y = fP(this.props, 'hidden')
                  ? 'url(#'.concat(c, ')')
                  : void 0;
                return P.default.createElement(
                  iw,
                  { className: (0, _.default)('recharts-reference-area', a) },
                  r.renderRect(
                    d,
                    pD(pD({ clipPath: y }, tv(this.props, !0)), h)
                  ),
                  uE.renderCallByParent(this.props, h)
                );
              }
            }
          ]),
          (function (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(t, pU(n.key), n);
            }
          })(r.prototype, e),
          Object.defineProperty(r, 'prototype', { writable: !1 }),
          r
        );
      })(P.default.Component);
    function pF(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return pq(t);
        })(t) ||
        (function (t) {
          if (
            ('u' > typeof Symbol && null != t[Symbol.iterator]) ||
            null != t['@@iterator']
          )
            return Array.from(t);
        })(t) ||
        (function (t) {
          if (t) {
            if ('string' == typeof t) return pq(t, void 0);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            if (
              ('Object' === e && t.constructor && (e = t.constructor.name),
              'Map' === e || 'Set' === e)
            )
              return Array.from(t);
            if (
              'Arguments' === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return pq(t, void 0);
          }
        })(t) ||
        (function () {
          throw TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function pq(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    pL(pz, 'displayName', 'ReferenceArea'),
      pL(pz, 'defaultProps', {
        isFront: !1,
        ifOverflow: 'discard',
        xAxisId: 0,
        yAxisId: 0,
        r: 10,
        fill: '#ccc',
        fillOpacity: 0.5,
        stroke: 'none',
        strokeWidth: 1
      }),
      pL(pz, 'renderRect', function (t, e) {
        return P.default.isValidElement(t)
          ? P.default.cloneElement(t, e)
          : (0, M.default)(t)
            ? t(e)
            : P.default.createElement(
                l5,
                p_({}, e, { className: 'recharts-reference-area-rect' })
              );
      });
    var pW = function (t, e, r, n, o) {
        var i = tf(t, pT),
          a = tf(t, po),
          u = [].concat(pF(i), pF(a)),
          c = tf(t, pz),
          l = ''.concat(n, 'Id'),
          s = n[0],
          f = e;
        if (
          (u.length &&
            (f = u.reduce(function (t, e) {
              if (
                e.props[l] === r &&
                fP(e.props, 'extendDomain') &&
                L(e.props[s])
              ) {
                var n = e.props[s];
                return [Math.min(t[0], n), Math.max(t[1], n)];
              }
              return t;
            }, f)),
          c.length)
        ) {
          var p = ''.concat(s, '1'),
            d = ''.concat(s, '2');
          f = c.reduce(function (t, e) {
            if (
              e.props[l] === r &&
              fP(e.props, 'extendDomain') &&
              L(e.props[p]) &&
              L(e.props[d])
            ) {
              var n = e.props[p],
                o = e.props[d];
              return [Math.min(t[0], n, o), Math.max(t[1], n, o)];
            }
            return t;
          }, f);
        }
        return (
          o &&
            o.length &&
            (f = o.reduce(function (t, e) {
              return L(e) ? [Math.min(t[0], e), Math.max(t[1], e)] : t;
            }, f)),
          f
        );
      },
      pX = new (t.i(10482).default)(),
      pH = 'recharts.syncMouseEvents';
    function pV(t) {
      return (pV =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function pK(t, e, r) {
      return (
        (e = pG(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function pG(t) {
      var e = (function (t, e) {
        if ('object' != pV(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != pV(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == pV(e) ? e : e + '';
    }
    var pY =
      ((e = function t() {
        if (!(this instanceof t))
          throw TypeError('Cannot call a class as a function');
        pK(this, 'activeIndex', 0),
          pK(this, 'coordinateList', []),
          pK(this, 'layout', 'horizontal');
      }),
      (r = [
        {
          key: 'setDetails',
          value: function (t) {
            var e,
              r = t.coordinateList,
              n = void 0 === r ? null : r,
              o = t.container,
              i = void 0 === o ? null : o,
              a = t.layout,
              u = void 0 === a ? null : a,
              c = t.offset,
              l = void 0 === c ? null : c,
              s = t.mouseHandlerCallback,
              f = void 0 === s ? null : s;
            (this.coordinateList =
              null != (e = null != n ? n : this.coordinateList) ? e : []),
              (this.container = null != i ? i : this.container),
              (this.layout = null != u ? u : this.layout),
              (this.offset = null != l ? l : this.offset),
              (this.mouseHandlerCallback =
                null != f ? f : this.mouseHandlerCallback),
              (this.activeIndex = Math.min(
                Math.max(this.activeIndex, 0),
                this.coordinateList.length - 1
              ));
          }
        },
        {
          key: 'focus',
          value: function () {
            this.spoofMouse();
          }
        },
        {
          key: 'keyboardEvent',
          value: function (t) {
            if (0 !== this.coordinateList.length)
              switch (t.key) {
                case 'ArrowRight':
                  if ('horizontal' !== this.layout) return;
                  (this.activeIndex = Math.min(
                    this.activeIndex + 1,
                    this.coordinateList.length - 1
                  )),
                    this.spoofMouse();
                  break;
                case 'ArrowLeft':
                  if ('horizontal' !== this.layout) return;
                  (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                    this.spoofMouse();
              }
          }
        },
        {
          key: 'setIndex',
          value: function (t) {
            this.activeIndex = t;
          }
        },
        {
          key: 'spoofMouse',
          value: function () {
            if (
              'horizontal' === this.layout &&
              0 !== this.coordinateList.length
            ) {
              var t,
                e,
                r = this.container.getBoundingClientRect(),
                n = r.x,
                o = r.y,
                i = r.height,
                a = this.coordinateList[this.activeIndex].coordinate,
                u = (null == (t = window) ? void 0 : t.scrollX) || 0,
                c = (null == (e = window) ? void 0 : e.scrollY) || 0,
                l = o + this.offset.top + i / 2 + c;
              this.mouseHandlerCallback({ pageX: n + a + u, pageY: l });
            }
          }
        }
      ]),
      (function (t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, pG(n.key), n);
        }
      })(e.prototype, r),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e);
    function pZ(t) {
      return (pZ =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    var pJ = ['x', 'y', 'top', 'left', 'width', 'height', 'className'];
    function pQ() {
      return (pQ = Object.assign.bind()).apply(this, arguments);
    }
    function p0(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    var p1 = function (t) {
      var e = t.x,
        r = void 0 === e ? 0 : e,
        n = t.y,
        o = void 0 === n ? 0 : n,
        i = t.top,
        a = void 0 === i ? 0 : i,
        u = t.left,
        c = void 0 === u ? 0 : u,
        l = t.width,
        s = void 0 === l ? 0 : l,
        f = t.height,
        p = void 0 === f ? 0 : f,
        d = t.className,
        h = (function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? p0(Object(r), !0).forEach(function (e) {
                  var n, o, i;
                  (n = t),
                    (o = e),
                    (i = r[e]),
                    (o = (function (t) {
                      var e = (function (t, e) {
                        if ('object' != pZ(t) || !t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                          var n = r.call(t, e || 'default');
                          if ('object' != pZ(n)) return n;
                          throw TypeError(
                            '@@toPrimitive must return a primitive value.'
                          );
                        }
                        return ('string' === e ? String : Number)(t);
                      })(t, 'string');
                      return 'symbol' == pZ(e) ? e : e + '';
                    })(o)) in n
                      ? Object.defineProperty(n, o, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                        })
                      : (n[o] = i);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : p0(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e)
                    );
                  });
          }
          return t;
        })(
          { x: r, y: o, top: a, left: c, width: s, height: p },
          (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (e.indexOf(n) >= 0) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]);
            }
            return o;
          })(t, pJ)
        );
      return L(r) && L(o) && L(s) && L(p) && L(a) && L(c)
        ? P.default.createElement(
            'path',
            pQ({}, tv(h, !0), {
              className: (0, _.default)('recharts-cross', d),
              d: 'M'
                .concat(r, ',')
                .concat(a, 'v')
                .concat(p, 'M')
                .concat(c, ',')
                .concat(o, 'h')
                .concat(s)
            })
          )
        : null;
    };
    function p2(t) {
      var e = t.cx,
        r = t.cy,
        n = t.radius,
        o = t.startAngle,
        i = t.endAngle;
      return {
        points: [us(e, r, n, o), us(e, r, n, i)],
        cx: e,
        cy: r,
        radius: n,
        startAngle: o,
        endAngle: i
      };
    }
    function p3(t) {
      return (p3 =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function p4(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function p5(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? p4(Object(r), !0).forEach(function (e) {
              var n, o, i;
              (n = t),
                (o = e),
                (i = r[e]),
                (o = (function (t) {
                  var e = (function (t, e) {
                    if ('object' != p3(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || 'default');
                      if ('object' != p3(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === e ? String : Number)(t);
                  })(t, 'string');
                  return 'symbol' == p3(e) ? e : e + '';
                })(o)) in n
                  ? Object.defineProperty(n, o, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (n[o] = i);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : p4(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function p8(t) {
      var e,
        r,
        n,
        o,
        i = t.element,
        a = t.tooltipEventType,
        u = t.isActive,
        c = t.activeCoordinate,
        l = t.activePayload,
        s = t.offset,
        f = t.activeTooltipIndex,
        p = t.tooltipAxisBandSize,
        d = t.layout,
        h = t.chartName,
        y =
          null != (r = i.props.cursor)
            ? r
            : null == (n = i.type.defaultProps)
              ? void 0
              : n.cursor;
      if (!i || !y || !u || !c || ('ScatterChart' !== h && 'axis' !== a))
        return null;
      var v = lR;
      if ('ScatterChart' === h) (o = c), (v = p1);
      else if ('BarChart' === h)
        (e = p / 2),
          (o = {
            stroke: 'none',
            fill: '#ccc',
            x: 'horizontal' === d ? c.x - e : s.left + 0.5,
            y: 'horizontal' === d ? s.top + 0.5 : c.y - e,
            width: 'horizontal' === d ? p : s.width - 1,
            height: 'horizontal' === d ? s.height - 1 : p
          }),
          (v = l5);
      else if ('radial' === d) {
        var m = p2(c),
          b = m.cx,
          g = m.cy,
          x = m.radius;
        (o = {
          cx: b,
          cy: g,
          startAngle: m.startAngle,
          endAngle: m.endAngle,
          innerRadius: x,
          outerRadius: x
        }),
          (v = sp);
      } else
        (o = {
          points: (function (t, e, r) {
            var n, o, i, a;
            if ('horizontal' === t)
              (i = n = e.x), (o = r.top), (a = r.top + r.height);
            else if ('vertical' === t)
              (a = o = e.y), (n = r.left), (i = r.left + r.width);
            else if (null != e.cx && null != e.cy)
              if ('centric' !== t) return p2(e);
              else {
                var u = e.cx,
                  c = e.cy,
                  l = e.innerRadius,
                  s = e.outerRadius,
                  f = e.angle,
                  p = us(u, c, l, f),
                  d = us(u, c, s, f);
                (n = p.x), (o = p.y), (i = d.x), (a = d.y);
              }
            return [
              { x: n, y: o },
              { x: i, y: a }
            ];
          })(d, c, s)
        }),
          (v = lR);
      var O = p5(
        p5(p5(p5({ stroke: '#ccc', pointerEvents: 'none' }, s), o), tv(y, !1)),
        {},
        {
          payload: l,
          payloadIndex: f,
          className: (0, _.default)('recharts-tooltip-cursor', y.className)
        }
      );
      return (0, P.isValidElement)(y)
        ? (0, P.cloneElement)(y, O)
        : (0, P.createElement)(v, O);
    }
    var p6 = ['item'],
      p9 = [
        'children',
        'className',
        'width',
        'height',
        'style',
        'compact',
        'title',
        'desc'
      ];
    function p7(t) {
      return (p7 =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function dt() {
      return (dt = Object.assign.bind()).apply(this, arguments);
    }
    function de(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var r =
            null == t
              ? null
              : ('u' > typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
          if (null != r) {
            var n,
              o,
              i,
              a,
              u = [],
              c = !0,
              l = !1;
            try {
              if (((i = (r = r.call(t)).next), 0 === e)) {
                if (Object(r) !== r) return;
                c = !1;
              } else
                for (
                  ;
                  !(c = (n = i.call(r)).done) &&
                  (u.push(n.value), u.length !== e);
                  c = !0
                );
            } catch (t) {
              (l = !0), (o = t);
            } finally {
              try {
                if (
                  !c &&
                  null != r.return &&
                  ((a = r.return()), Object(a) !== a)
                )
                  return;
              } finally {
                if (l) throw o;
              }
            }
            return u;
          }
        })(t, e) ||
        dc(t, e) ||
        (function () {
          throw TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function dr(t, e) {
      if (null == t) return {};
      var r,
        n,
        o = (function (t, e) {
          if (null == t) return {};
          var r = {};
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              if (e.indexOf(n) >= 0) continue;
              r[n] = t[n];
            }
          return r;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++)
          (r = i[n]),
            !(e.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, r) &&
              (o[r] = t[r]);
      }
      return o;
    }
    function dn() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (t) {}
      return (dn = function () {
        return !!t;
      })();
    }
    function di(t) {
      return (di = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function da(t, e) {
      return (da = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function du(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return dl(t);
        })(t) ||
        (function (t) {
          if (
            ('u' > typeof Symbol && null != t[Symbol.iterator]) ||
            null != t['@@iterator']
          )
            return Array.from(t);
        })(t) ||
        dc(t) ||
        (function () {
          throw TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function dc(t, e) {
      if (t) {
        if ('string' == typeof t) return dl(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (
          ('Object' === r && t.constructor && (r = t.constructor.name),
          'Map' === r || 'Set' === r)
        )
          return Array.from(t);
        if (
          'Arguments' === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return dl(t, e);
      }
    }
    function dl(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function ds(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function df(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ds(Object(r), !0).forEach(function (e) {
              dp(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ds(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function dp(t, e, r) {
      return (
        (e = dd(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function dd(t) {
      var e = (function (t, e) {
        if ('object' != p7(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != p7(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == p7(e) ? e : e + '';
    }
    var dh = { xAxis: ['bottom', 'top'], yAxis: ['left', 'right'] },
      dy = { width: '100%', height: '100%' },
      dv = { x: 0, y: 0 };
    function dm(t) {
      return t;
    }
    var db = function (t, e, r, n) {
        var o = e.find(function (t) {
          return t && t.index === r;
        });
        if (o) {
          if ('horizontal' === t) return { x: o.coordinate, y: n.y };
          if ('vertical' === t) return { x: n.x, y: o.coordinate };
          if ('centric' === t) {
            var i = o.coordinate,
              a = n.radius;
            return df(
              df(df({}, n), us(n.cx, n.cy, a, i)),
              {},
              { angle: i, radius: a }
            );
          }
          var u = o.coordinate,
            c = n.angle;
          return df(
            df(df({}, n), us(n.cx, n.cy, u, c)),
            {},
            { angle: c, radius: u }
          );
        }
        return dv;
      },
      dg = function (t, e) {
        var r = e.graphicalItems,
          n = e.dataStartIndex,
          o = e.dataEndIndex,
          i = (null != r ? r : []).reduce(function (t, e) {
            var r = e.props.data;
            return r && r.length ? [].concat(du(t), du(r)) : t;
          }, []);
        return i.length > 0
          ? i
          : t && t.length && L(n) && L(o)
            ? t.slice(n, o + 1)
            : [];
      };
    function dx(t) {
      return 'number' === t ? [0, 'auto'] : void 0;
    }
    var dO = function (t, e, r, n) {
        var o = t.graphicalItems,
          i = t.tooltipAxis,
          a = dg(e, t);
        return r < 0 || !o || !o.length || r >= a.length
          ? null
          : o.reduce(function (o, u) {
              var c,
                l,
                s = null != (c = u.props.data) ? c : e;
              return (s &&
                t.dataStartIndex + t.dataEndIndex !== 0 &&
                t.dataEndIndex - t.dataStartIndex >= r &&
                (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1)),
              (l =
                i.dataKey && !i.allowDuplicatedCategory
                  ? H(void 0 === s ? a : s, i.dataKey, n)
                  : (s && s[r]) || a[r]))
                ? [].concat(du(o), [un(u, l)])
                : o;
            }, []);
      },
      dw = function (t, e, r, n) {
        var o = n || { x: t.chartX, y: t.chartY },
          i =
            'horizontal' === r
              ? o.x
              : 'vertical' === r
                ? o.y
                : 'centric' === r
                  ? o.angle
                  : o.radius,
          a = t.orderedTooltipTicks,
          u = t.tooltipAxis,
          c = t.tooltipTicks,
          l = aL(i, a, c, u);
        if (l >= 0 && c) {
          var s = c[l] && c[l].value,
            f = dO(t, e, l, s),
            p = db(r, a, l, o);
          return {
            activeTooltipIndex: l,
            activeLabel: s,
            activePayload: f,
            activeCoordinate: p
          };
        }
        return null;
      },
      dj = function (t, e) {
        var r = e.axes,
          n = e.graphicalItems,
          o = e.axisType,
          i = e.axisIdKey,
          a = e.stackGroups,
          u = e.dataStartIndex,
          c = e.dataEndIndex,
          l = t.layout,
          s = t.children,
          f = t.stackOffset,
          p = aH(l, o);
        return r.reduce(function (e, r) {
          var d =
              void 0 !== r.type.defaultProps
                ? df(df({}, r.type.defaultProps), r.props)
                : r.props,
            h = d.type,
            y = d.dataKey,
            v = d.allowDataOverflow,
            m = d.allowDuplicatedCategory,
            b = d.scale,
            g = d.ticks,
            x = d.includeHidden,
            O = d[i];
          if (e[O]) return e;
          var w = dg(t.data, {
              graphicalItems: n.filter(function (t) {
                var e;
                return (
                  (i in t.props
                    ? t.props[i]
                    : null == (e = t.type.defaultProps)
                      ? void 0
                      : e[i]) === O
                );
              }),
              dataStartIndex: u,
              dataEndIndex: c
            }),
            j = w.length;
          (function (t, e, r) {
            if ('number' === r && !0 === e && Array.isArray(t)) {
              var n = null == t ? void 0 : t[0],
                o = null == t ? void 0 : t[1];
              if (n && o && L(n) && L(o)) return !0;
            }
            return !1;
          })(d.domain, v, h) &&
            ((P = ut(d.domain, null, v)),
            p &&
              ('number' === h || 'auto' !== b) &&
              (M = aB(w, y, 'category')));
          var S = dx(h);
          if (!P || 0 === P.length) {
            var A,
              P,
              E,
              M,
              T,
              _ = null != (T = d.domain) ? T : S;
            if (y) {
              if (((P = aB(w, y, h)), 'category' === h && p)) {
                var C = W(P);
                m && C
                  ? ((E = P), (P = (0, sR.default)(0, j)))
                  : m ||
                    (P = ur(_, P, r).reduce(function (t, e) {
                      return t.indexOf(e) >= 0 ? t : [].concat(du(t), [e]);
                    }, []));
              } else if ('category' === h)
                P = m
                  ? P.filter(function (t) {
                      return '' !== t && !(0, k.default)(t);
                    })
                  : ur(_, P, r).reduce(function (t, e) {
                      return t.indexOf(e) >= 0 || '' === e || (0, k.default)(e)
                        ? t
                        : [].concat(du(t), [e]);
                    }, []);
              else if ('number' === h) {
                var I = aW(
                  w,
                  n.filter(function (t) {
                    var e,
                      r,
                      n =
                        i in t.props
                          ? t.props[i]
                          : null == (e = t.type.defaultProps)
                            ? void 0
                            : e[i],
                      o =
                        'hide' in t.props
                          ? t.props.hide
                          : null == (r = t.type.defaultProps)
                            ? void 0
                            : r.hide;
                    return n === O && (x || !o);
                  }),
                  y,
                  o,
                  l
                );
                I && (P = I);
              }
              p &&
                ('number' === h || 'auto' !== b) &&
                (M = aB(w, y, 'category'));
            } else
              P = p
                ? (0, sR.default)(0, j)
                : a && a[O] && a[O].hasStack && 'number' === h
                  ? 'expand' === f
                    ? [0, 1]
                    : a6(a[O].stackGroups, u, c)
                  : aX(
                      w,
                      n.filter(function (t) {
                        var e =
                            i in t.props ? t.props[i] : t.type.defaultProps[i],
                          r =
                            'hide' in t.props
                              ? t.props.hide
                              : t.type.defaultProps.hide;
                        return e === O && (x || !r);
                      }),
                      h,
                      l,
                      !0
                    );
            'number' === h
              ? ((P = pW(s, P, O, o, g)), _ && (P = ut(_, P, v)))
              : 'category' === h &&
                _ &&
                P.every(function (t) {
                  return _.indexOf(t) >= 0;
                }) &&
                (P = _);
          }
          return df(
            df({}, e),
            {},
            dp(
              {},
              O,
              df(
                df({}, d),
                {},
                {
                  axisType: o,
                  domain: P,
                  categoricalDomain: M,
                  duplicateDomain: E,
                  originalDomain: null != (A = d.domain) ? A : S,
                  isCategorical: p,
                  layout: l
                }
              )
            )
          );
        }, {});
      },
      dS = function (t, e) {
        var r = e.graphicalItems,
          n = e.Axis,
          o = e.axisType,
          i = e.axisIdKey,
          a = e.stackGroups,
          u = e.dataStartIndex,
          c = e.dataEndIndex,
          l = t.layout,
          s = t.children,
          f = dg(t.data, {
            graphicalItems: r,
            dataStartIndex: u,
            dataEndIndex: c
          }),
          p = f.length,
          d = aH(l, o),
          h = -1;
        return r.reduce(function (t, e) {
          var y,
            v = (
              void 0 !== e.type.defaultProps
                ? df(df({}, e.type.defaultProps), e.props)
                : e.props
            )[i],
            m = dx('number');
          return t[v]
            ? t
            : (h++,
              (y = d
                ? (0, sR.default)(0, p)
                : a && a[v] && a[v].hasStack
                  ? pW(s, (y = a6(a[v].stackGroups, u, c)), v, o)
                  : pW(
                      s,
                      (y = ut(
                        m,
                        aX(
                          f,
                          r.filter(function (t) {
                            var e,
                              r,
                              n =
                                i in t.props
                                  ? t.props[i]
                                  : null == (e = t.type.defaultProps)
                                    ? void 0
                                    : e[i],
                              o =
                                'hide' in t.props
                                  ? t.props.hide
                                  : null == (r = t.type.defaultProps)
                                    ? void 0
                                    : r.hide;
                            return n === v && !o;
                          }),
                          'number',
                          l
                        ),
                        n.defaultProps.allowDataOverflow
                      )),
                      v,
                      o
                    )),
              df(
                df({}, t),
                {},
                dp(
                  {},
                  v,
                  df(
                    df({ axisType: o }, n.defaultProps),
                    {},
                    {
                      hide: !0,
                      orientation: (0, D.default)(
                        dh,
                        ''.concat(o, '.').concat(h % 2),
                        null
                      ),
                      domain: y,
                      originalDomain: m,
                      isCategorical: d,
                      layout: l
                    }
                  )
                )
              ));
        }, {});
      },
      dA = function (t, e) {
        var r = e.axisType,
          n = void 0 === r ? 'xAxis' : r,
          o = e.AxisComp,
          i = e.graphicalItems,
          a = e.stackGroups,
          u = e.dataStartIndex,
          c = e.dataEndIndex,
          l = t.children,
          s = ''.concat(n, 'Id'),
          f = tf(l, o),
          p = {};
        return (
          f && f.length
            ? (p = dj(t, {
                axes: f,
                graphicalItems: i,
                axisType: n,
                axisIdKey: s,
                stackGroups: a,
                dataStartIndex: u,
                dataEndIndex: c
              }))
            : i &&
              i.length &&
              (p = dS(t, {
                Axis: o,
                graphicalItems: i,
                axisType: n,
                axisIdKey: s,
                stackGroups: a,
                dataStartIndex: u,
                dataEndIndex: c
              })),
          p
        );
      },
      dP = function (t) {
        var e = q(t),
          r = aV(e, !1, !0);
        return {
          tooltipTicks: r,
          orderedTooltipTicks: (0, o3.default)(r, function (t) {
            return t.coordinate;
          }),
          tooltipAxis: e,
          tooltipAxisBandSize: ue(e, r)
        };
      },
      dE = function (t) {
        var e = t.children,
          r = t.defaultShowTooltip,
          n = tp(e, fA),
          o = 0,
          i = 0;
        return (
          t.data && 0 !== t.data.length && (i = t.data.length - 1),
          n &&
            n.props &&
            (n.props.startIndex >= 0 && (o = n.props.startIndex),
            n.props.endIndex >= 0 && (i = n.props.endIndex)),
          {
            chartX: 0,
            chartY: 0,
            dataStartIndex: o,
            dataEndIndex: i,
            activeTooltipIndex: -1,
            isTooltipActive: !!r
          }
        );
      },
      dk = function (t) {
        return 'horizontal' === t
          ? { numericAxisName: 'yAxis', cateAxisName: 'xAxis' }
          : 'vertical' === t
            ? { numericAxisName: 'xAxis', cateAxisName: 'yAxis' }
            : 'centric' === t
              ? { numericAxisName: 'radiusAxis', cateAxisName: 'angleAxis' }
              : { numericAxisName: 'angleAxis', cateAxisName: 'radiusAxis' };
      },
      dM = function (t, e) {
        var r = t.props,
          n = t.graphicalItems,
          o = t.xAxisMap,
          i = void 0 === o ? {} : o,
          a = t.yAxisMap,
          u = void 0 === a ? {} : a,
          c = r.width,
          l = r.height,
          s = r.children,
          f = r.margin || {},
          p = tp(s, fA),
          d = tp(s, aA),
          h = Object.keys(u).reduce(
            function (t, e) {
              var r = u[e],
                n = r.orientation;
              return r.mirror || r.hide
                ? t
                : df(df({}, t), {}, dp({}, n, t[n] + r.width));
            },
            { left: f.left || 0, right: f.right || 0 }
          ),
          y = Object.keys(i).reduce(
            function (t, e) {
              var r = i[e],
                n = r.orientation;
              return r.mirror || r.hide
                ? t
                : df(
                    df({}, t),
                    {},
                    dp({}, n, (0, D.default)(t, ''.concat(n)) + r.height)
                  );
            },
            { top: f.top || 0, bottom: f.bottom || 0 }
          ),
          v = df(df({}, y), h),
          m = v.bottom;
        p && (v.bottom += p.props.height || fA.defaultProps.height),
          d && e && (v = aF(v, n, r, e));
        var b = c - v.left - v.right,
          g = l - v.top - v.bottom;
        return df(
          df({ brushBottom: m }, v),
          {},
          { width: Math.max(b, 0), height: Math.max(g, 0) }
        );
      },
      dT = ['points', 'className', 'baseLinePoints', 'connectNulls'];
    function d_() {
      return (d_ = Object.assign.bind()).apply(this, arguments);
    }
    function dC(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return dI(t);
        })(t) ||
        (function (t) {
          if (
            ('u' > typeof Symbol && null != t[Symbol.iterator]) ||
            null != t['@@iterator']
          )
            return Array.from(t);
        })(t) ||
        (function (t) {
          if (t) {
            if ('string' == typeof t) return dI(t, void 0);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            if (
              ('Object' === e && t.constructor && (e = t.constructor.name),
              'Map' === e || 'Set' === e)
            )
              return Array.from(t);
            if (
              'Arguments' === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return dI(t, void 0);
          }
        })(t) ||
        (function () {
          throw TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function dI(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var dD = function (t) {
        return t && t.x === +t.x && t.y === +t.y;
      },
      dN = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          e = [[]];
        return (
          t.forEach(function (t) {
            dD(t)
              ? e[e.length - 1].push(t)
              : e[e.length - 1].length > 0 && e.push([]);
          }),
          dD(t[0]) && e[e.length - 1].push(t[0]),
          e[e.length - 1].length <= 0 && (e = e.slice(0, -1)),
          e
        );
      },
      dR = function (t, e) {
        var r = dN(t);
        e &&
          (r = [
            r.reduce(function (t, e) {
              return [].concat(dC(t), dC(e));
            }, [])
          ]);
        var n = r
          .map(function (t) {
            return t.reduce(function (t, e, r) {
              return ''
                .concat(t)
                .concat(0 === r ? 'M' : 'L')
                .concat(e.x, ',')
                .concat(e.y);
            }, '');
          })
          .join('');
        return 1 === r.length ? ''.concat(n, 'Z') : n;
      },
      dB = function (t, e, r) {
        var n = dR(t, r);
        return ''
          .concat('Z' === n.slice(-1) ? n.slice(0, -1) : n, 'L')
          .concat(dR(e.reverse(), r).slice(1));
      },
      dL = function (t) {
        var e = t.points,
          r = t.className,
          n = t.baseLinePoints,
          o = t.connectNulls,
          i = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = (function (t, e) {
                if (null == t) return {};
                var r = {};
                for (var n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    if (e.indexOf(n) >= 0) continue;
                    r[n] = t[n];
                  }
                return r;
              })(t, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  !(e.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]);
            }
            return o;
          })(t, dT);
        if (!e || !e.length) return null;
        var a = (0, _.default)('recharts-polygon', r);
        if (n && n.length) {
          var u = i.stroke && 'none' !== i.stroke,
            c = dB(e, n, o);
          return P.default.createElement(
            'g',
            { className: a },
            P.default.createElement(
              'path',
              d_({}, tv(i, !0), {
                fill: 'Z' === c.slice(-1) ? i.fill : 'none',
                stroke: 'none',
                d: c
              })
            ),
            u
              ? P.default.createElement(
                  'path',
                  d_({}, tv(i, !0), { fill: 'none', d: dR(e, o) })
                )
              : null,
            u
              ? P.default.createElement(
                  'path',
                  d_({}, tv(i, !0), { fill: 'none', d: dR(n, o) })
                )
              : null
          );
        }
        var l = dR(e, o);
        return P.default.createElement(
          'path',
          d_({}, tv(i, !0), {
            fill: 'Z' === l.slice(-1) ? i.fill : 'none',
            className: a,
            d: l
          })
        );
      };
    function dU(t) {
      return (dU =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function d$() {
      return (d$ = Object.assign.bind()).apply(this, arguments);
    }
    function dz(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function dF(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? dz(Object(r), !0).forEach(function (e) {
              dV(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : dz(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function dq(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, dK(n.key), n);
      }
    }
    function dW() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (t) {}
      return (dW = function () {
        return !!t;
      })();
    }
    function dX(t) {
      return (dX = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function dH(t, e) {
      return (dH = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function dV(t, e, r) {
      return (
        (e = dK(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function dK(t) {
      var e = (function (t, e) {
        if ('object' != dU(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != dU(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == dU(e) ? e : e + '';
    }
    var dG = Math.PI / 180,
      dY = (function (t) {
        var e, r;
        function n() {
          var t, e;
          if (!(this instanceof n))
            throw TypeError('Cannot call a class as a function');
          return (
            (t = n),
            (e = arguments),
            (t = dX(t)),
            (function (t, e) {
              if (e && ('object' === dU(e) || 'function' == typeof e)) return e;
              if (void 0 !== e)
                throw TypeError(
                  'Derived constructors may only return object or undefined'
                );
              var r = t;
              if (void 0 === r)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return r;
            })(
              this,
              dW()
                ? Reflect.construct(t, e || [], dX(this).constructor)
                : t.apply(this, e)
            )
          );
        }
        if ('function' != typeof t && null !== t)
          throw TypeError('Super expression must either be null or a function');
        return (
          (n.prototype = Object.create(t && t.prototype, {
            constructor: { value: n, writable: !0, configurable: !0 }
          })),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          t && dH(n, t),
          (e = [
            {
              key: 'getTickLineCoord',
              value: function (t) {
                var e = this.props,
                  r = e.cx,
                  n = e.cy,
                  o = e.radius,
                  i = e.orientation,
                  a = e.tickSize,
                  u = us(r, n, o, t.coordinate),
                  c = us(
                    r,
                    n,
                    o + ('inner' === i ? -1 : 1) * (a || 8),
                    t.coordinate
                  );
                return { x1: u.x, y1: u.y, x2: c.x, y2: c.y };
              }
            },
            {
              key: 'getTickTextAnchor',
              value: function (t) {
                var e = this.props.orientation,
                  r = Math.cos(-t.coordinate * dG);
                return r > 1e-5
                  ? 'outer' === e
                    ? 'start'
                    : 'end'
                  : r < -1e-5
                    ? 'outer' === e
                      ? 'end'
                      : 'start'
                    : 'middle';
              }
            },
            {
              key: 'renderAxisLine',
              value: function () {
                var t = this.props,
                  e = t.cx,
                  r = t.cy,
                  n = t.radius,
                  o = t.axisLine,
                  i = t.axisLineType,
                  a = dF(
                    dF({}, tv(this.props, !1)),
                    {},
                    { fill: 'none' },
                    tv(o, !1)
                  );
                if ('circle' === i)
                  return P.default.createElement(
                    fa,
                    d$({ className: 'recharts-polar-angle-axis-line' }, a, {
                      cx: e,
                      cy: r,
                      r: n
                    })
                  );
                var u = this.props.ticks.map(function (t) {
                  return us(e, r, n, t.coordinate);
                });
                return P.default.createElement(
                  dL,
                  d$({ className: 'recharts-polar-angle-axis-line' }, a, {
                    points: u
                  })
                );
              }
            },
            {
              key: 'renderTicks',
              value: function () {
                var t = this,
                  e = this.props,
                  r = e.ticks,
                  o = e.tick,
                  i = e.tickLine,
                  a = e.tickFormatter,
                  u = e.stroke,
                  c = tv(this.props, !1),
                  l = tv(o, !1),
                  s = dF(dF({}, c), {}, { fill: 'none' }, tv(i, !1)),
                  f = r.map(function (e, r) {
                    var f = t.getTickLineCoord(e),
                      p = dF(
                        dF(
                          dF({ textAnchor: t.getTickTextAnchor(e) }, c),
                          {},
                          { stroke: 'none', fill: u },
                          l
                        ),
                        {},
                        { index: r, payload: e, x: f.x2, y: f.y2 }
                      );
                    return P.default.createElement(
                      iw,
                      d$(
                        {
                          className: (0, _.default)(
                            'recharts-polar-angle-axis-tick',
                            uv(o)
                          ),
                          key: 'tick-'.concat(e.coordinate)
                        },
                        tr(t.props, e, r)
                      ),
                      i &&
                        P.default.createElement(
                          'line',
                          d$(
                            {
                              className: 'recharts-polar-angle-axis-tick-line'
                            },
                            s,
                            f
                          )
                        ),
                      o && n.renderTickItem(o, p, a ? a(e.value, r) : e.value)
                    );
                  });
                return P.default.createElement(
                  iw,
                  { className: 'recharts-polar-angle-axis-ticks' },
                  f
                );
              }
            },
            {
              key: 'render',
              value: function () {
                var t = this.props,
                  e = t.ticks,
                  r = t.radius,
                  n = t.axisLine;
                return !(r <= 0) && e && e.length
                  ? P.default.createElement(
                      iw,
                      {
                        className: (0, _.default)(
                          'recharts-polar-angle-axis',
                          this.props.className
                        )
                      },
                      n && this.renderAxisLine(),
                      this.renderTicks()
                    )
                  : null;
              }
            }
          ]),
          (r = [
            {
              key: 'renderTickItem',
              value: function (t, e, r) {
                return P.default.isValidElement(t)
                  ? P.default.cloneElement(t, e)
                  : (0, M.default)(t)
                    ? t(e)
                    : P.default.createElement(
                        t0,
                        d$({}, e, {
                          className: 'recharts-polar-angle-axis-tick-value'
                        }),
                        r
                      );
              }
            }
          ]),
          e && dq(n.prototype, e),
          r && dq(n, r),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          n
        );
      })(P.PureComponent);
    dV(dY, 'displayName', 'PolarAngleAxis'),
      dV(dY, 'axisType', 'angleAxis'),
      dV(dY, 'defaultProps', {
        type: 'category',
        angleAxisId: 0,
        scale: 'auto',
        cx: 0,
        cy: 0,
        orientation: 'outer',
        axisLine: !0,
        tickLine: !0,
        tickSize: 8,
        tick: !0,
        hide: !1,
        allowDuplicatedCategory: !0
      });
    var dZ = t.i(13581),
      dJ = t.i(24161),
      dQ = ['cx', 'cy', 'angle', 'ticks', 'axisLine'],
      d0 = ['ticks', 'tick', 'angle', 'tickFormatter', 'stroke'];
    function d1(t) {
      return (d1 =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function d2() {
      return (d2 = Object.assign.bind()).apply(this, arguments);
    }
    function d3(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function d4(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? d3(Object(r), !0).forEach(function (e) {
              ht(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : d3(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function d5(t, e) {
      if (null == t) return {};
      var r,
        n,
        o = (function (t, e) {
          if (null == t) return {};
          var r = {};
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              if (e.indexOf(n) >= 0) continue;
              r[n] = t[n];
            }
          return r;
        })(t, e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++)
          (r = i[n]),
            !(e.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(t, r) &&
              (o[r] = t[r]);
      }
      return o;
    }
    function d8(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, he(n.key), n);
      }
    }
    function d6() {
      try {
        var t = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (t) {}
      return (d6 = function () {
        return !!t;
      })();
    }
    function d9(t) {
      return (d9 = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function d7(t, e) {
      return (d7 = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
    }
    function ht(t, e, r) {
      return (
        (e = he(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = r),
        t
      );
    }
    function he(t) {
      var e = (function (t, e) {
        if ('object' != d1(t) || !t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, e || 'default');
          if ('object' != d1(n)) return n;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === e ? String : Number)(t);
      })(t, 'string');
      return 'symbol' == d1(e) ? e : e + '';
    }
    var hr = (function (t) {
      var e, r;
      function n() {
        var t, e;
        if (!(this instanceof n))
          throw TypeError('Cannot call a class as a function');
        return (
          (t = n),
          (e = arguments),
          (t = d9(t)),
          (function (t, e) {
            if (e && ('object' === d1(e) || 'function' == typeof e)) return e;
            if (void 0 !== e)
              throw TypeError(
                'Derived constructors may only return object or undefined'
              );
            var r = t;
            if (void 0 === r)
              throw ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return r;
          })(
            this,
            d6()
              ? Reflect.construct(t, e || [], d9(this).constructor)
              : t.apply(this, e)
          )
        );
      }
      if ('function' != typeof t && null !== t)
        throw TypeError('Super expression must either be null or a function');
      return (
        (n.prototype = Object.create(t && t.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 }
        })),
        Object.defineProperty(n, 'prototype', { writable: !1 }),
        t && d7(n, t),
        (e = [
          {
            key: 'getTickValueCoord',
            value: function (t) {
              var e = t.coordinate,
                r = this.props,
                n = r.angle;
              return us(r.cx, r.cy, e, n);
            }
          },
          {
            key: 'getTickTextAnchor',
            value: function () {
              var t;
              switch (this.props.orientation) {
                case 'left':
                  t = 'end';
                  break;
                case 'right':
                  t = 'start';
                  break;
                default:
                  t = 'middle';
              }
              return t;
            }
          },
          {
            key: 'getViewBox',
            value: function () {
              var t = this.props,
                e = t.cx,
                r = t.cy,
                n = t.angle,
                o = t.ticks,
                i = (0, dZ.default)(o, function (t) {
                  return t.coordinate || 0;
                });
              return {
                cx: e,
                cy: r,
                startAngle: n,
                endAngle: n,
                innerRadius:
                  (0, dJ.default)(o, function (t) {
                    return t.coordinate || 0;
                  }).coordinate || 0,
                outerRadius: i.coordinate || 0
              };
            }
          },
          {
            key: 'renderAxisLine',
            value: function () {
              var t = this.props,
                e = t.cx,
                r = t.cy,
                n = t.angle,
                o = t.ticks,
                i = t.axisLine,
                a = d5(t, dQ),
                u = o.reduce(
                  function (t, e) {
                    return [
                      Math.min(t[0], e.coordinate),
                      Math.max(t[1], e.coordinate)
                    ];
                  },
                  [1 / 0, -1 / 0]
                ),
                c = us(e, r, u[0], n),
                l = us(e, r, u[1], n),
                s = d4(
                  d4(d4({}, tv(a, !1)), {}, { fill: 'none' }, tv(i, !1)),
                  {},
                  { x1: c.x, y1: c.y, x2: l.x, y2: l.y }
                );
              return P.default.createElement(
                'line',
                d2({ className: 'recharts-polar-radius-axis-line' }, s)
              );
            }
          },
          {
            key: 'renderTicks',
            value: function () {
              var t = this,
                e = this.props,
                r = e.ticks,
                o = e.tick,
                i = e.angle,
                a = e.tickFormatter,
                u = e.stroke,
                c = d5(e, d0),
                l = this.getTickTextAnchor(),
                s = tv(c, !1),
                f = tv(o, !1),
                p = r.map(function (e, r) {
                  var c = t.getTickValueCoord(e),
                    p = d4(
                      d4(
                        d4(
                          d4(
                            {
                              textAnchor: l,
                              transform: 'rotate('
                                .concat(90 - i, ', ')
                                .concat(c.x, ', ')
                                .concat(c.y, ')')
                            },
                            s
                          ),
                          {},
                          { stroke: 'none', fill: u },
                          f
                        ),
                        {},
                        { index: r },
                        c
                      ),
                      {},
                      { payload: e }
                    );
                  return P.default.createElement(
                    iw,
                    d2(
                      {
                        className: (0, _.default)(
                          'recharts-polar-radius-axis-tick',
                          uv(o)
                        ),
                        key: 'tick-'.concat(e.coordinate)
                      },
                      tr(t.props, e, r)
                    ),
                    n.renderTickItem(o, p, a ? a(e.value, r) : e.value)
                  );
                });
              return P.default.createElement(
                iw,
                { className: 'recharts-polar-radius-axis-ticks' },
                p
              );
            }
          },
          {
            key: 'render',
            value: function () {
              var t = this.props,
                e = t.ticks,
                r = t.axisLine,
                n = t.tick;
              return e && e.length
                ? P.default.createElement(
                    iw,
                    {
                      className: (0, _.default)(
                        'recharts-polar-radius-axis',
                        this.props.className
                      )
                    },
                    r && this.renderAxisLine(),
                    n && this.renderTicks(),
                    uE.renderCallByParent(this.props, this.getViewBox())
                  )
                : null;
            }
          }
        ]),
        (r = [
          {
            key: 'renderTickItem',
            value: function (t, e, r) {
              return P.default.isValidElement(t)
                ? P.default.cloneElement(t, e)
                : (0, M.default)(t)
                  ? t(e)
                  : P.default.createElement(
                      t0,
                      d2({}, e, {
                        className: 'recharts-polar-radius-axis-tick-value'
                      }),
                      r
                    );
            }
          }
        ]),
        e && d8(n.prototype, e),
        r && d8(n, r),
        Object.defineProperty(n, 'prototype', { writable: !1 }),
        n
      );
    })(P.PureComponent);
    ht(hr, 'displayName', 'PolarRadiusAxis'),
      ht(hr, 'axisType', 'radiusAxis'),
      ht(hr, 'defaultProps', {
        type: 'number',
        radiusAxisId: 0,
        cx: 0,
        cy: 0,
        angle: 0,
        orientation: 'right',
        stroke: '#ccc',
        axisLine: !0,
        tick: !0,
        tickCount: 5,
        allowDataOverflow: !1,
        scale: 'auto',
        allowDuplicatedCategory: !0
      });
    var hn =
        ((o = (n = {
          chartName: 'PieChart',
          GraphicalChild: sN,
          validateTooltipEventTypes: ['item'],
          defaultTooltipEventType: 'item',
          legendContent: 'children',
          axisComponents: [
            { axisType: 'angleAxis', AxisComp: dY },
            { axisType: 'radiusAxis', AxisComp: hr }
          ],
          formatAxisMap: function (t, e, r, n, o) {
            var i = t.width,
              a = t.height,
              u = t.startAngle,
              c = t.endAngle,
              l = F(t.cx, i, i / 2),
              s = F(t.cy, a, a / 2),
              f = uf(i, a, r),
              p = F(t.innerRadius, f, 0),
              d = F(t.outerRadius, f, 0.8 * f);
            return Object.keys(e).reduce(function (t, r) {
              var i,
                a = e[r],
                f = a.domain,
                h = a.reversed;
              if ((0, k.default)(a.range))
                'angleAxis' === n
                  ? (i = [u, c])
                  : 'radiusAxis' === n && (i = [p, d]),
                  h && (i = [i[1], i[0]]);
              else {
                var y,
                  v =
                    (function (t) {
                      if (Array.isArray(t)) return t;
                    })((y = i = a.range)) ||
                    (function (t) {
                      var e =
                        null == t
                          ? null
                          : ('u' > typeof Symbol && t[Symbol.iterator]) ||
                            t['@@iterator'];
                      if (null != e) {
                        var r,
                          n,
                          o,
                          i,
                          a = [],
                          u = !0,
                          c = !1;
                        try {
                          (o = (e = e.call(t)).next), !1;
                          for (
                            ;
                            !(u = (r = o.call(e)).done) &&
                            (a.push(r.value), 2 !== a.length);
                            u = !0
                          );
                        } catch (t) {
                          (c = !0), (n = t);
                        } finally {
                          try {
                            if (
                              !u &&
                              null != e.return &&
                              ((i = e.return()), Object(i) !== i)
                            )
                              return;
                          } finally {
                            if (c) throw n;
                          }
                        }
                        return a;
                      }
                    })(y) ||
                    (function (t) {
                      if (t) {
                        if ('string' == typeof t) return uc(t, 2);
                        var e = Object.prototype.toString.call(t).slice(8, -1);
                        if (
                          ('Object' === e &&
                            t.constructor &&
                            (e = t.constructor.name),
                          'Map' === e || 'Set' === e)
                        )
                          return Array.from(t);
                        if (
                          'Arguments' === e ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                        )
                          return uc(t, 2);
                      }
                    })(y) ||
                    (function () {
                      throw TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      );
                    })();
                (u = v[0]), (c = v[1]);
              }
              var m = aY(a, o),
                b = m.realScaleType,
                g = m.scale;
              g.domain(f).range(i), aZ(g);
              var x = a3(g, ua(ua({}, a), {}, { realScaleType: b })),
                O = ua(
                  ua(ua({}, a), x),
                  {},
                  {
                    range: i,
                    radius: d,
                    realScaleType: b,
                    scale: g,
                    cx: l,
                    cy: s,
                    innerRadius: p,
                    outerRadius: d,
                    startAngle: u,
                    endAngle: c
                  }
                );
              return ua(ua({}, t), {}, uu({}, r, O));
            }, {});
          },
          defaultProps: {
            layout: 'centric',
            startAngle: 0,
            endAngle: 360,
            cx: '50%',
            cy: '50%',
            innerRadius: 0,
            outerRadius: '80%'
          }
        }).chartName),
        (i = n.GraphicalChild),
        (u = void 0 === (a = n.defaultTooltipEventType) ? 'axis' : a),
        (l = void 0 === (c = n.validateTooltipEventTypes) ? ['axis'] : c),
        (s = n.axisComponents),
        (f = n.legendContent),
        (p = n.formatAxisMap),
        (d = n.defaultProps),
        (h = function (t, e) {
          var r = e.graphicalItems,
            n = e.stackGroups,
            o = e.offset,
            i = e.updateId,
            a = e.dataStartIndex,
            u = e.dataEndIndex,
            c = t.barSize,
            l = t.layout,
            f = t.barGap,
            p = t.barCategoryGap,
            d = t.maxBarSize,
            h = dk(l),
            y = h.numericAxisName,
            v = h.cateAxisName,
            m =
              !!r &&
              !!r.length &&
              r.some(function (t) {
                var e = tu(t && t.type);
                return e && e.indexOf('Bar') >= 0;
              }),
            b = [];
          return (
            r.forEach(function (r, h) {
              var g = dg(t.data, {
                  graphicalItems: [r],
                  dataStartIndex: a,
                  dataEndIndex: u
                }),
                x =
                  void 0 !== r.type.defaultProps
                    ? df(df({}, r.type.defaultProps), r.props)
                    : r.props,
                O = x.dataKey,
                w = x.maxBarSize,
                j = x[''.concat(y, 'Id')],
                S = x[''.concat(v, 'Id')],
                A = s.reduce(function (t, r) {
                  var n = e[''.concat(r.axisType, 'Map')],
                    o = x[''.concat(r.axisType, 'Id')];
                  (n && n[o]) || 'zAxis' === r.axisType || ig(!1);
                  var i = n[o];
                  return df(
                    df({}, t),
                    {},
                    dp(
                      dp({}, r.axisType, i),
                      ''.concat(r.axisType, 'Ticks'),
                      aV(i)
                    )
                  );
                }, {}),
                P = A[v],
                E = A[''.concat(v, 'Ticks')],
                M = n && n[j] && n[j].hasStack && a8(r, n[j].stackGroups),
                T = tu(r.type).indexOf('Bar') >= 0,
                _ = ue(P, E),
                C = [],
                I =
                  m &&
                  a$({
                    barSize: c,
                    stackGroups: n,
                    totalSize:
                      'xAxis' === v
                        ? A[v].width
                        : 'yAxis' === v
                          ? A[v].height
                          : void 0
                  });
              if (T) {
                var D,
                  N,
                  R = (0, k.default)(w) ? d : w,
                  B = null != (D = null != (N = ue(P, E, !0)) ? N : R) ? D : 0;
                (C = az({
                  barGap: f,
                  barCategoryGap: p,
                  bandSize: B !== _ ? B : _,
                  sizeList: I[S],
                  maxBarSize: R
                })),
                  B !== _ &&
                    (C = C.map(function (t) {
                      return df(
                        df({}, t),
                        {},
                        {
                          position: df(
                            df({}, t.position),
                            {},
                            { offset: t.position.offset - B / 2 }
                          )
                        }
                      );
                    }));
              }
              var L = r && r.type && r.type.getComposedData;
              L &&
                b.push({
                  props: df(
                    df(
                      {},
                      L(
                        df(
                          df({}, A),
                          {},
                          {
                            displayedData: g,
                            props: t,
                            dataKey: O,
                            item: r,
                            bandSize: _,
                            barPosition: C,
                            offset: o,
                            stackedData: M,
                            layout: l,
                            dataStartIndex: a,
                            dataEndIndex: u
                          }
                        )
                      )
                    ),
                    {},
                    dp(
                      dp(
                        dp({ key: r.key || 'item-'.concat(h) }, y, A[y]),
                        v,
                        A[v]
                      ),
                      'animationId',
                      i
                    )
                  ),
                  childIndex: ts(t.children).indexOf(r),
                  item: r
                });
            }),
            b
          );
        }),
        (y = function (t, e) {
          var r = t.props,
            n = t.dataStartIndex,
            a = t.dataEndIndex,
            u = t.updateId;
          if (!td({ props: r })) return null;
          var c = r.children,
            l = r.layout,
            f = r.stackOffset,
            d = r.data,
            y = r.reverseStackOrder,
            v = dk(l),
            m = v.numericAxisName,
            b = v.cateAxisName,
            g = tf(c, i),
            x = a2(d, g, ''.concat(m, 'Id'), ''.concat(b, 'Id'), f, y),
            O = s.reduce(function (t, e) {
              var o = ''.concat(e.axisType, 'Map');
              return df(
                df({}, t),
                {},
                dp(
                  {},
                  o,
                  dA(
                    r,
                    df(
                      df({}, e),
                      {},
                      {
                        graphicalItems: g,
                        stackGroups: e.axisType === m && x,
                        dataStartIndex: n,
                        dataEndIndex: a
                      }
                    )
                  )
                )
              );
            }, {}),
            w = dM(
              df(df({}, O), {}, { props: r, graphicalItems: g }),
              null == e ? void 0 : e.legendBBox
            );
          Object.keys(O).forEach(function (t) {
            O[t] = p(r, O[t], w, t.replace('Map', ''), o);
          });
          var j = dP(O[''.concat(b, 'Map')]),
            S = h(
              r,
              df(
                df({}, O),
                {},
                {
                  dataStartIndex: n,
                  dataEndIndex: a,
                  updateId: u,
                  graphicalItems: g,
                  stackGroups: x,
                  offset: w
                }
              )
            );
          return df(
            df(
              {
                formattedGraphicalItems: S,
                graphicalItems: g,
                offset: w,
                stackGroups: x
              },
              j
            ),
            O
          );
        }),
        (v = (function (t) {
          var e;
          function r(t) {
            var e, n, i, a, u;
            if (!(this instanceof r))
              throw TypeError('Cannot call a class as a function');
            return (
              (a = r),
              (u = [t]),
              (a = di(a)),
              dp(
                (i = (function (t, e) {
                  if (e && ('object' === p7(e) || 'function' == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw TypeError(
                      'Derived constructors may only return object or undefined'
                    );
                  var r = t;
                  if (void 0 === r)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return r;
                })(
                  this,
                  dn()
                    ? Reflect.construct(a, u || [], di(this).constructor)
                    : a.apply(this, u)
                )),
                'eventEmitterSymbol',
                Symbol('rechartsEventEmitter')
              ),
              dp(i, 'accessibilityManager', new pY()),
              dp(i, 'handleLegendBBoxUpdate', function (t) {
                if (t) {
                  var e = i.state,
                    r = e.dataStartIndex,
                    n = e.dataEndIndex,
                    o = e.updateId;
                  i.setState(
                    df(
                      { legendBBox: t },
                      y(
                        {
                          props: i.props,
                          dataStartIndex: r,
                          dataEndIndex: n,
                          updateId: o
                        },
                        df(df({}, i.state), {}, { legendBBox: t })
                      )
                    )
                  );
                }
              }),
              dp(i, 'handleReceiveSyncEvent', function (t, e, r) {
                i.props.syncId === t &&
                  (r !== i.eventEmitterSymbol ||
                    'function' == typeof i.props.syncMethod) &&
                  i.applySyncEvent(e);
              }),
              dp(i, 'handleBrushChange', function (t) {
                var e = t.startIndex,
                  r = t.endIndex;
                if (
                  e !== i.state.dataStartIndex ||
                  r !== i.state.dataEndIndex
                ) {
                  var n = i.state.updateId;
                  i.setState(function () {
                    return df(
                      { dataStartIndex: e, dataEndIndex: r },
                      y(
                        {
                          props: i.props,
                          dataStartIndex: e,
                          dataEndIndex: r,
                          updateId: n
                        },
                        i.state
                      )
                    );
                  }),
                    i.triggerSyncEvent({ dataStartIndex: e, dataEndIndex: r });
                }
              }),
              dp(i, 'handleMouseEnter', function (t) {
                var e = i.getMouseInfo(t);
                if (e) {
                  var r = df(df({}, e), {}, { isTooltipActive: !0 });
                  i.setState(r), i.triggerSyncEvent(r);
                  var n = i.props.onMouseEnter;
                  (0, M.default)(n) && n(r, t);
                }
              }),
              dp(i, 'triggeredAfterMouseMove', function (t) {
                var e = i.getMouseInfo(t),
                  r = e
                    ? df(df({}, e), {}, { isTooltipActive: !0 })
                    : { isTooltipActive: !1 };
                i.setState(r), i.triggerSyncEvent(r);
                var n = i.props.onMouseMove;
                (0, M.default)(n) && n(r, t);
              }),
              dp(i, 'handleItemMouseEnter', function (t) {
                i.setState(function () {
                  return {
                    isTooltipActive: !0,
                    activeItem: t,
                    activePayload: t.tooltipPayload,
                    activeCoordinate: t.tooltipPosition || { x: t.cx, y: t.cy }
                  };
                });
              }),
              dp(i, 'handleItemMouseLeave', function () {
                i.setState(function () {
                  return { isTooltipActive: !1 };
                });
              }),
              dp(i, 'handleMouseMove', function (t) {
                t.persist(), i.throttleTriggeredAfterMouseMove(t);
              }),
              dp(i, 'handleMouseLeave', function (t) {
                i.throttleTriggeredAfterMouseMove.cancel();
                var e = { isTooltipActive: !1 };
                i.setState(e), i.triggerSyncEvent(e);
                var r = i.props.onMouseLeave;
                (0, M.default)(r) && r(e, t);
              }),
              dp(i, 'handleOuterEvent', function (t) {
                var e,
                  r = tx(t),
                  n = (0, D.default)(i.props, ''.concat(r));
                r &&
                  (0, M.default)(n) &&
                  n(
                    null !=
                      (e = /.*touch.*/i.test(r)
                        ? i.getMouseInfo(t.changedTouches[0])
                        : i.getMouseInfo(t))
                      ? e
                      : {},
                    t
                  );
              }),
              dp(i, 'handleClick', function (t) {
                var e = i.getMouseInfo(t);
                if (e) {
                  var r = df(df({}, e), {}, { isTooltipActive: !0 });
                  i.setState(r), i.triggerSyncEvent(r);
                  var n = i.props.onClick;
                  (0, M.default)(n) && n(r, t);
                }
              }),
              dp(i, 'handleMouseDown', function (t) {
                var e = i.props.onMouseDown;
                (0, M.default)(e) && e(i.getMouseInfo(t), t);
              }),
              dp(i, 'handleMouseUp', function (t) {
                var e = i.props.onMouseUp;
                (0, M.default)(e) && e(i.getMouseInfo(t), t);
              }),
              dp(i, 'handleTouchMove', function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  i.throttleTriggeredAfterMouseMove(t.changedTouches[0]);
              }),
              dp(i, 'handleTouchStart', function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  i.handleMouseDown(t.changedTouches[0]);
              }),
              dp(i, 'handleTouchEnd', function (t) {
                null != t.changedTouches &&
                  t.changedTouches.length > 0 &&
                  i.handleMouseUp(t.changedTouches[0]);
              }),
              dp(i, 'handleDoubleClick', function (t) {
                var e = i.props.onDoubleClick;
                (0, M.default)(e) && e(i.getMouseInfo(t), t);
              }),
              dp(i, 'handleContextMenu', function (t) {
                var e = i.props.onContextMenu;
                (0, M.default)(e) && e(i.getMouseInfo(t), t);
              }),
              dp(i, 'triggerSyncEvent', function (t) {
                void 0 !== i.props.syncId &&
                  pX.emit(pH, i.props.syncId, t, i.eventEmitterSymbol);
              }),
              dp(i, 'applySyncEvent', function (t) {
                var e = i.props,
                  r = e.layout,
                  n = e.syncMethod,
                  o = i.state.updateId,
                  a = t.dataStartIndex,
                  u = t.dataEndIndex;
                if (void 0 !== t.dataStartIndex || void 0 !== t.dataEndIndex)
                  i.setState(
                    df(
                      { dataStartIndex: a, dataEndIndex: u },
                      y(
                        {
                          props: i.props,
                          dataStartIndex: a,
                          dataEndIndex: u,
                          updateId: o
                        },
                        i.state
                      )
                    )
                  );
                else if (void 0 !== t.activeTooltipIndex) {
                  var c = t.chartX,
                    l = t.chartY,
                    s = t.activeTooltipIndex,
                    f = i.state,
                    p = f.offset,
                    d = f.tooltipTicks;
                  if (!p) return;
                  if ('function' == typeof n) s = n(d, t);
                  else if ('value' === n) {
                    s = -1;
                    for (var h = 0; h < d.length; h++)
                      if (d[h].value === t.activeLabel) {
                        s = h;
                        break;
                      }
                  }
                  var v = df(df({}, p), {}, { x: p.left, y: p.top }),
                    m = Math.min(c, v.x + v.width),
                    b = Math.min(l, v.y + v.height),
                    g = d[s] && d[s].value,
                    x = dO(i.state, i.props.data, s),
                    O = d[s]
                      ? {
                          x: 'horizontal' === r ? d[s].coordinate : m,
                          y: 'horizontal' === r ? b : d[s].coordinate
                        }
                      : dv;
                  i.setState(
                    df(
                      df({}, t),
                      {},
                      {
                        activeLabel: g,
                        activeCoordinate: O,
                        activePayload: x,
                        activeTooltipIndex: s
                      }
                    )
                  );
                } else i.setState(t);
              }),
              dp(i, 'renderCursor', function (t) {
                var e,
                  r = i.state,
                  n = r.isTooltipActive,
                  a = r.activeCoordinate,
                  u = r.activePayload,
                  c = r.offset,
                  l = r.activeTooltipIndex,
                  s = r.tooltipAxisBandSize,
                  f = i.getTooltipEventType(),
                  p = null != (e = t.props.active) ? e : n,
                  d = i.props.layout,
                  h = t.key || '_recharts-cursor';
                return P.default.createElement(p8, {
                  key: h,
                  activeCoordinate: a,
                  activePayload: u,
                  activeTooltipIndex: l,
                  chartName: o,
                  element: t,
                  isActive: p,
                  layout: d,
                  offset: c,
                  tooltipAxisBandSize: s,
                  tooltipEventType: f
                });
              }),
              dp(i, 'renderPolarAxis', function (t, e, r) {
                var n = (0, D.default)(t, 'type.axisType'),
                  o = (0, D.default)(i.state, ''.concat(n, 'Map')),
                  a = t.type.defaultProps,
                  u = void 0 !== a ? df(df({}, a), t.props) : t.props,
                  c = o && o[u[''.concat(n, 'Id')]];
                return (0, P.cloneElement)(
                  t,
                  df(
                    df({}, c),
                    {},
                    {
                      className: (0, _.default)(n, c.className),
                      key: t.key || ''.concat(e, '-').concat(r),
                      ticks: aV(c, !0)
                    }
                  )
                );
              }),
              dp(i, 'renderPolarGrid', function (t) {
                var e = t.props,
                  r = e.radialLines,
                  n = e.polarAngles,
                  o = e.polarRadius,
                  a = i.state,
                  u = a.radiusAxisMap,
                  c = a.angleAxisMap,
                  l = q(u),
                  s = q(c),
                  f = s.cx,
                  p = s.cy,
                  d = s.innerRadius,
                  h = s.outerRadius;
                return (0, P.cloneElement)(t, {
                  polarAngles: Array.isArray(n)
                    ? n
                    : aV(s, !0).map(function (t) {
                        return t.coordinate;
                      }),
                  polarRadius: Array.isArray(o)
                    ? o
                    : aV(l, !0).map(function (t) {
                        return t.coordinate;
                      }),
                  cx: f,
                  cy: p,
                  innerRadius: d,
                  outerRadius: h,
                  key: t.key || 'polar-grid',
                  radialLines: r
                });
              }),
              dp(i, 'renderLegend', function () {
                var t = i.state.formattedGraphicalItems,
                  e = i.props,
                  r = e.children,
                  n = e.width,
                  o = e.height,
                  a = i.props.margin || {},
                  u = aM({
                    children: r,
                    formattedGraphicalItems: t,
                    legendWidth: n - (a.left || 0) - (a.right || 0),
                    legendContent: f
                  });
                if (!u) return null;
                var c = u.item,
                  l = dr(u, p6);
                return (0, P.cloneElement)(
                  c,
                  df(
                    df({}, l),
                    {},
                    {
                      chartWidth: n,
                      chartHeight: o,
                      margin: a,
                      onBBoxUpdate: i.handleLegendBBoxUpdate
                    }
                  )
                );
              }),
              dp(i, 'renderTooltip', function () {
                var t,
                  e = i.props,
                  r = e.children,
                  n = e.accessibilityLayer,
                  o = tp(r, fo);
                if (!o) return null;
                var a = i.state,
                  u = a.isTooltipActive,
                  c = a.activeCoordinate,
                  l = a.activePayload,
                  s = a.activeLabel,
                  f = a.offset,
                  p = null != (t = o.props.active) ? t : u;
                return (0, P.cloneElement)(o, {
                  viewBox: df(df({}, f), {}, { x: f.left, y: f.top }),
                  active: p,
                  label: s,
                  payload: p ? l : [],
                  coordinate: c,
                  accessibilityLayer: n
                });
              }),
              dp(i, 'renderBrush', function (t) {
                var e = i.props,
                  r = e.margin,
                  n = e.data,
                  o = i.state,
                  a = o.offset,
                  u = o.dataStartIndex,
                  c = o.dataEndIndex,
                  l = o.updateId;
                return (0, P.cloneElement)(t, {
                  key: t.key || '_recharts-brush',
                  onChange: aG(i.handleBrushChange, t.props.onChange),
                  data: n,
                  x: L(t.props.x) ? t.props.x : a.left,
                  y: L(t.props.y)
                    ? t.props.y
                    : a.top + a.height + a.brushBottom - (r.bottom || 0),
                  width: L(t.props.width) ? t.props.width : a.width,
                  startIndex: u,
                  endIndex: c,
                  updateId: 'brush-'.concat(l)
                });
              }),
              dp(i, 'renderReferenceElement', function (t, e, r) {
                if (!t) return null;
                var n = i.clipPathId,
                  o = i.state,
                  a = o.xAxisMap,
                  u = o.yAxisMap,
                  c = o.offset,
                  l = t.type.defaultProps || {},
                  s = t.props,
                  f = s.xAxisId,
                  p = void 0 === f ? l.xAxisId : f,
                  d = s.yAxisId,
                  h = void 0 === d ? l.yAxisId : d;
                return (0, P.cloneElement)(t, {
                  key: t.key || ''.concat(e, '-').concat(r),
                  xAxis: a[p],
                  yAxis: u[h],
                  viewBox: {
                    x: c.left,
                    y: c.top,
                    width: c.width,
                    height: c.height
                  },
                  clipPathId: n
                });
              }),
              dp(i, 'renderActivePoints', function (t) {
                var e = t.item,
                  n = t.activePoint,
                  o = t.basePoint,
                  i = t.childIndex,
                  a = t.isRange,
                  u = [],
                  c = e.props.key,
                  l =
                    void 0 !== e.item.type.defaultProps
                      ? df(df({}, e.item.type.defaultProps), e.item.props)
                      : e.item.props,
                  s = l.activeDot,
                  f = df(
                    df(
                      {
                        index: i,
                        dataKey: l.dataKey,
                        cx: n.x,
                        cy: n.y,
                        r: 4,
                        fill: aU(e.item),
                        strokeWidth: 2,
                        stroke: '#fff',
                        payload: n.payload,
                        value: n.value
                      },
                      tv(s, !1)
                    ),
                    te(s)
                  );
                return (
                  u.push(
                    r.renderActiveDot(
                      s,
                      f,
                      ''.concat(c, '-activePoint-').concat(i)
                    )
                  ),
                  o
                    ? u.push(
                        r.renderActiveDot(
                          s,
                          df(df({}, f), {}, { cx: o.x, cy: o.y }),
                          ''.concat(c, '-basePoint-').concat(i)
                        )
                      )
                    : a && u.push(null),
                  u
                );
              }),
              dp(i, 'renderGraphicChild', function (t, e, r) {
                var n = i.filterFormatItem(t, e, r);
                if (!n) return null;
                var o = i.getTooltipEventType(),
                  a = i.state,
                  u = a.isTooltipActive,
                  c = a.tooltipAxis,
                  l = a.activeTooltipIndex,
                  s = a.activeLabel,
                  f = tp(i.props.children, fo),
                  p = n.props,
                  d = p.points,
                  h = p.isRange,
                  y = p.baseLine,
                  v =
                    void 0 !== n.item.type.defaultProps
                      ? df(df({}, n.item.type.defaultProps), n.item.props)
                      : n.item.props,
                  m = v.activeDot,
                  b = v.hide,
                  g = v.activeBar,
                  x = v.activeShape,
                  O = !!(!b && u && f && (m || g || x)),
                  w = {};
                'axis' !== o && f && 'click' === f.props.trigger
                  ? (w = {
                      onClick: aG(i.handleItemMouseEnter, t.props.onClick)
                    })
                  : 'axis' !== o &&
                    (w = {
                      onMouseLeave: aG(
                        i.handleItemMouseLeave,
                        t.props.onMouseLeave
                      ),
                      onMouseEnter: aG(
                        i.handleItemMouseEnter,
                        t.props.onMouseEnter
                      )
                    });
                var j = (0, P.cloneElement)(t, df(df({}, n.props), w));
                if (O)
                  if (l >= 0) {
                    if (c.dataKey && !c.allowDuplicatedCategory) {
                      var S =
                        'function' == typeof c.dataKey
                          ? function (t) {
                              return 'function' == typeof c.dataKey
                                ? c.dataKey(t.payload)
                                : null;
                            }
                          : 'payload.'.concat(c.dataKey.toString());
                      (E = H(d, S, s)), (M = h && y && H(y, S, s));
                    } else
                      (E = null == d ? void 0 : d[l]), (M = h && y && y[l]);
                    if (x || g) {
                      var A =
                        void 0 !== t.props.activeIndex
                          ? t.props.activeIndex
                          : l;
                      return [
                        (0, P.cloneElement)(
                          t,
                          df(df(df({}, n.props), w), {}, { activeIndex: A })
                        ),
                        null,
                        null
                      ];
                    }
                    if (!(0, k.default)(E))
                      return [j].concat(
                        du(
                          i.renderActivePoints({
                            item: n,
                            activePoint: E,
                            basePoint: M,
                            childIndex: l,
                            isRange: h
                          })
                        )
                      );
                  } else {
                    var E,
                      M,
                      T,
                      _ = (
                        null != (T = i.getItemByXY(i.state.activeCoordinate))
                          ? T
                          : { graphicalItem: j }
                      ).graphicalItem,
                      C = _.item,
                      I = void 0 === C ? t : C,
                      D = _.childIndex,
                      N = df(df(df({}, n.props), w), {}, { activeIndex: D });
                    return [(0, P.cloneElement)(I, N), null, null];
                  }
                return h ? [j, null, null] : [j, null];
              }),
              dp(i, 'renderCustomized', function (t, e, r) {
                return (0, P.cloneElement)(
                  t,
                  df(
                    df({ key: 'recharts-customized-'.concat(r) }, i.props),
                    i.state
                  )
                );
              }),
              dp(i, 'renderMap', {
                CartesianGrid: { handler: dm, once: !0 },
                ReferenceArea: { handler: i.renderReferenceElement },
                ReferenceLine: { handler: dm },
                ReferenceDot: { handler: i.renderReferenceElement },
                XAxis: { handler: dm },
                YAxis: { handler: dm },
                Brush: { handler: i.renderBrush, once: !0 },
                Bar: { handler: i.renderGraphicChild },
                Line: { handler: i.renderGraphicChild },
                Area: { handler: i.renderGraphicChild },
                Radar: { handler: i.renderGraphicChild },
                RadialBar: { handler: i.renderGraphicChild },
                Scatter: { handler: i.renderGraphicChild },
                Pie: { handler: i.renderGraphicChild },
                Funnel: { handler: i.renderGraphicChild },
                Tooltip: { handler: i.renderCursor, once: !0 },
                PolarGrid: { handler: i.renderPolarGrid, once: !0 },
                PolarAngleAxis: { handler: i.renderPolarAxis },
                PolarRadiusAxis: { handler: i.renderPolarAxis },
                Customized: { handler: i.renderCustomized }
              }),
              (i.clipPathId = ''.concat(
                null != (e = t.id) ? e : z('recharts'),
                '-clip'
              )),
              (i.throttleTriggeredAfterMouseMove = (0, sB.default)(
                i.triggeredAfterMouseMove,
                null != (n = t.throttleDelay) ? n : 1e3 / 60
              )),
              (i.state = {}),
              i
            );
          }
          if ('function' != typeof t && null !== t)
            throw TypeError(
              'Super expression must either be null or a function'
            );
          return (
            (r.prototype = Object.create(t && t.prototype, {
              constructor: { value: r, writable: !0, configurable: !0 }
            })),
            Object.defineProperty(r, 'prototype', { writable: !1 }),
            t && da(r, t),
            (e = [
              {
                key: 'componentDidMount',
                value: function () {
                  var t, e;
                  this.addListener(),
                    this.accessibilityManager.setDetails({
                      container: this.container,
                      offset: {
                        left: null != (t = this.props.margin.left) ? t : 0,
                        top: null != (e = this.props.margin.top) ? e : 0
                      },
                      coordinateList: this.state.tooltipTicks,
                      mouseHandlerCallback: this.triggeredAfterMouseMove,
                      layout: this.props.layout
                    }),
                    this.displayDefaultTooltip();
                }
              },
              {
                key: 'displayDefaultTooltip',
                value: function () {
                  var t = this.props,
                    e = t.children,
                    r = t.data,
                    n = t.height,
                    o = t.layout,
                    i = tp(e, fo);
                  if (i) {
                    var a = i.props.defaultIndex;
                    if (
                      'number' == typeof a &&
                      !(a < 0) &&
                      !(a > this.state.tooltipTicks.length - 1)
                    ) {
                      var u =
                          this.state.tooltipTicks[a] &&
                          this.state.tooltipTicks[a].value,
                        c = dO(this.state, r, a, u),
                        l = this.state.tooltipTicks[a].coordinate,
                        s = (this.state.offset.top + n) / 2,
                        f =
                          'horizontal' === o ? { x: l, y: s } : { y: l, x: s },
                        p = this.state.formattedGraphicalItems.find(
                          function (t) {
                            return 'Scatter' === t.item.type.name;
                          }
                        );
                      p &&
                        ((f = df(df({}, f), p.props.points[a].tooltipPosition)),
                        (c = p.props.points[a].tooltipPayload));
                      var d = {
                        activeTooltipIndex: a,
                        isTooltipActive: !0,
                        activeLabel: u,
                        activePayload: c,
                        activeCoordinate: f
                      };
                      this.setState(d),
                        this.renderCursor(i),
                        this.accessibilityManager.setIndex(a);
                    }
                  }
                }
              },
              {
                key: 'getSnapshotBeforeUpdate',
                value: function (t, e) {
                  if (!this.props.accessibilityLayer) return null;
                  if (
                    (this.state.tooltipTicks !== e.tooltipTicks &&
                      this.accessibilityManager.setDetails({
                        coordinateList: this.state.tooltipTicks
                      }),
                    this.props.layout !== t.layout &&
                      this.accessibilityManager.setDetails({
                        layout: this.props.layout
                      }),
                    this.props.margin !== t.margin)
                  ) {
                    var r, n;
                    this.accessibilityManager.setDetails({
                      offset: {
                        left: null != (r = this.props.margin.left) ? r : 0,
                        top: null != (n = this.props.margin.top) ? n : 0
                      }
                    });
                  }
                  return null;
                }
              },
              {
                key: 'componentDidUpdate',
                value: function (t) {
                  tm([tp(t.children, fo)], [tp(this.props.children, fo)]) ||
                    this.displayDefaultTooltip();
                }
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.removeListener(),
                    this.throttleTriggeredAfterMouseMove.cancel();
                }
              },
              {
                key: 'getTooltipEventType',
                value: function () {
                  var t = tp(this.props.children, fo);
                  if (t && 'boolean' == typeof t.props.shared) {
                    var e = t.props.shared ? 'axis' : 'item';
                    return l.indexOf(e) >= 0 ? e : u;
                  }
                  return u;
                }
              },
              {
                key: 'getMouseInfo',
                value: function (t) {
                  if (!this.container) return null;
                  var e = this.container,
                    r = e.getBoundingClientRect(),
                    n = {
                      top:
                        r.top +
                        window.scrollY -
                        document.documentElement.clientTop,
                      left:
                        r.left +
                        window.scrollX -
                        document.documentElement.clientLeft
                    },
                    o = {
                      chartX: Math.round(t.pageX - n.left),
                      chartY: Math.round(t.pageY - n.top)
                    },
                    i = r.width / e.offsetWidth || 1,
                    a = this.inRange(o.chartX, o.chartY, i);
                  if (!a) return null;
                  var u = this.state,
                    c = u.xAxisMap,
                    l = u.yAxisMap,
                    s = this.getTooltipEventType(),
                    f = dw(this.state, this.props.data, this.props.layout, a);
                  if ('axis' !== s && c && l) {
                    var p = q(c).scale,
                      d = q(l).scale,
                      h = p && p.invert ? p.invert(o.chartX) : null,
                      y = d && d.invert ? d.invert(o.chartY) : null;
                    return df(df({}, o), {}, { xValue: h, yValue: y }, f);
                  }
                  return f ? df(df({}, o), f) : null;
                }
              },
              {
                key: 'inRange',
                value: function (t, e) {
                  var r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 1,
                    n = this.props.layout,
                    o = t / r,
                    i = e / r;
                  if ('horizontal' === n || 'vertical' === n) {
                    var a = this.state.offset;
                    return o >= a.left &&
                      o <= a.left + a.width &&
                      i >= a.top &&
                      i <= a.top + a.height
                      ? { x: o, y: i }
                      : null;
                  }
                  var u = this.state,
                    c = u.angleAxisMap,
                    l = u.radiusAxisMap;
                  return c && l ? uy({ x: o, y: i }, q(c)) : null;
                }
              },
              {
                key: 'parseEventsOfWrapper',
                value: function () {
                  var t = this.props.children,
                    e = this.getTooltipEventType(),
                    r = tp(t, fo),
                    n = {};
                  return (
                    r &&
                      'axis' === e &&
                      (n =
                        'click' === r.props.trigger
                          ? { onClick: this.handleClick }
                          : {
                              onMouseEnter: this.handleMouseEnter,
                              onDoubleClick: this.handleDoubleClick,
                              onMouseMove: this.handleMouseMove,
                              onMouseLeave: this.handleMouseLeave,
                              onTouchMove: this.handleTouchMove,
                              onTouchStart: this.handleTouchStart,
                              onTouchEnd: this.handleTouchEnd,
                              onContextMenu: this.handleContextMenu
                            }),
                    df(df({}, te(this.props, this.handleOuterEvent)), n)
                  );
                }
              },
              {
                key: 'addListener',
                value: function () {
                  pX.on(pH, this.handleReceiveSyncEvent);
                }
              },
              {
                key: 'removeListener',
                value: function () {
                  pX.removeListener(pH, this.handleReceiveSyncEvent);
                }
              },
              {
                key: 'filterFormatItem',
                value: function (t, e, r) {
                  for (
                    var n = this.state.formattedGraphicalItems,
                      o = 0,
                      i = n.length;
                    o < i;
                    o++
                  ) {
                    var a = n[o];
                    if (
                      a.item === t ||
                      a.props.key === t.key ||
                      (e === tu(a.item.type) && r === a.childIndex)
                    )
                      return a;
                  }
                  return null;
                }
              },
              {
                key: 'renderClipPath',
                value: function () {
                  var t = this.clipPathId,
                    e = this.state.offset,
                    r = e.left,
                    n = e.top,
                    o = e.height,
                    i = e.width;
                  return P.default.createElement(
                    'defs',
                    null,
                    P.default.createElement(
                      'clipPath',
                      { id: t },
                      P.default.createElement('rect', {
                        x: r,
                        y: n,
                        height: o,
                        width: i
                      })
                    )
                  );
                }
              },
              {
                key: 'getXScales',
                value: function () {
                  var t = this.state.xAxisMap;
                  return t
                    ? Object.entries(t).reduce(function (t, e) {
                        var r = de(e, 2),
                          n = r[0],
                          o = r[1];
                        return df(df({}, t), {}, dp({}, n, o.scale));
                      }, {})
                    : null;
                }
              },
              {
                key: 'getYScales',
                value: function () {
                  var t = this.state.yAxisMap;
                  return t
                    ? Object.entries(t).reduce(function (t, e) {
                        var r = de(e, 2),
                          n = r[0],
                          o = r[1];
                        return df(df({}, t), {}, dp({}, n, o.scale));
                      }, {})
                    : null;
                }
              },
              {
                key: 'getXScaleByAxisId',
                value: function (t) {
                  var e;
                  return null == (e = this.state.xAxisMap) || null == (e = e[t])
                    ? void 0
                    : e.scale;
                }
              },
              {
                key: 'getYScaleByAxisId',
                value: function (t) {
                  var e;
                  return null == (e = this.state.yAxisMap) || null == (e = e[t])
                    ? void 0
                    : e.scale;
                }
              },
              {
                key: 'getItemByXY',
                value: function (t) {
                  var e = this.state,
                    r = e.formattedGraphicalItems,
                    n = e.activeItem;
                  if (r && r.length)
                    for (var o = 0, i = r.length; o < i; o++) {
                      var a = r[o],
                        u = a.props,
                        c = a.item,
                        l =
                          void 0 !== c.type.defaultProps
                            ? df(df({}, c.type.defaultProps), c.props)
                            : c.props,
                        s = tu(c.type);
                      if ('Bar' === s) {
                        var f = (u.data || []).find(function (e) {
                          return l3(t, e);
                        });
                        if (f) return { graphicalItem: a, payload: f };
                      } else if ('RadialBar' === s) {
                        var p = (u.data || []).find(function (e) {
                          return uy(t, e);
                        });
                        if (p) return { graphicalItem: a, payload: p };
                      } else if (sg(a, n) || sx(a, n) || sO(a, n)) {
                        var d = (function (t) {
                            var e,
                              r,
                              n,
                              o = t.activeTooltipItem,
                              i = t.graphicalItem,
                              a = t.itemData,
                              u =
                                (sg(i, o)
                                  ? (e = 'trapezoids')
                                  : sx(i, o)
                                    ? (e = 'sectors')
                                    : sO(i, o) && (e = 'points'),
                                e),
                              c = sg(i, o)
                                ? null == (r = o.tooltipPayload) ||
                                  null == (r = r[0]) ||
                                  null == (r = r.payload)
                                  ? void 0
                                  : r.payload
                                : sx(i, o)
                                  ? null == (n = o.tooltipPayload) ||
                                    null == (n = n[0]) ||
                                    null == (n = n.payload)
                                    ? void 0
                                    : n.payload
                                  : sO(i, o)
                                    ? o.payload
                                    : {},
                              l = a.filter(function (t, e) {
                                var r = (0, o2.default)(c, t),
                                  n = i.props[u].filter(function (t) {
                                    var e;
                                    return (sg(i, o)
                                      ? (e = sw)
                                      : sx(i, o)
                                        ? (e = sj)
                                        : sO(i, o) && (e = sS),
                                    e)(t, o);
                                  }),
                                  a = i.props[u].indexOf(n[n.length - 1]);
                                return r && e === a;
                              });
                            return a.indexOf(l[l.length - 1]);
                          })({
                            graphicalItem: a,
                            activeTooltipItem: n,
                            itemData: l.data
                          }),
                          h = void 0 === l.activeIndex ? d : l.activeIndex;
                        return {
                          graphicalItem: df(df({}, a), {}, { childIndex: h }),
                          payload: sO(a, n) ? l.data[d] : a.props.data[d]
                        };
                      }
                    }
                  return null;
                }
              },
              {
                key: 'render',
                value: function () {
                  var t,
                    e,
                    r = this;
                  if (!td(this)) return null;
                  var n = this.props,
                    o = n.children,
                    i = n.className,
                    a = n.width,
                    u = n.height,
                    c = n.style,
                    l = n.compact,
                    s = n.title,
                    f = n.desc,
                    p = tv(dr(n, p9), !1);
                  if (l)
                    return P.default.createElement(
                      ph,
                      {
                        state: this.state,
                        width: this.props.width,
                        height: this.props.height,
                        clipPathId: this.clipPathId
                      },
                      P.default.createElement(
                        iR,
                        dt({}, p, { width: a, height: u, title: s, desc: f }),
                        this.renderClipPath(),
                        tg(o, this.renderMap)
                      )
                    );
                  this.props.accessibilityLayer &&
                    ((p.tabIndex = null != (t = this.props.tabIndex) ? t : 0),
                    (p.role =
                      null != (e = this.props.role) ? e : 'application'),
                    (p.onKeyDown = function (t) {
                      r.accessibilityManager.keyboardEvent(t);
                    }),
                    (p.onFocus = function () {
                      r.accessibilityManager.focus();
                    }));
                  var d = this.parseEventsOfWrapper();
                  return P.default.createElement(
                    ph,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId
                    },
                    P.default.createElement(
                      'div',
                      dt(
                        {
                          className: (0, _.default)('recharts-wrapper', i),
                          style: df(
                            {
                              position: 'relative',
                              cursor: 'default',
                              width: a,
                              height: u
                            },
                            c
                          )
                        },
                        d,
                        {
                          ref: function (t) {
                            r.container = t;
                          }
                        }
                      ),
                      P.default.createElement(
                        iR,
                        dt({}, p, {
                          width: a,
                          height: u,
                          title: s,
                          desc: f,
                          style: dy
                        }),
                        this.renderClipPath(),
                        tg(o, this.renderMap)
                      ),
                      this.renderLegend(),
                      this.renderTooltip()
                    )
                  );
                }
              }
            ]),
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  'value' in n && (n.writable = !0),
                  Object.defineProperty(t, dd(n.key), n);
              }
            })(r.prototype, e),
            Object.defineProperty(r, 'prototype', { writable: !1 }),
            r
          );
        })(P.Component)),
        dp(v, 'displayName', o),
        dp(
          v,
          'defaultProps',
          df(
            {
              layout: 'horizontal',
              stackOffset: 'none',
              barCategoryGap: '10%',
              barGap: 4,
              margin: { top: 5, right: 5, bottom: 5, left: 5 },
              reverseStackOrder: !1,
              syncMethod: 'index'
            },
            d
          )
        ),
        dp(v, 'getDerivedStateFromProps', function (t, e) {
          var r = t.dataKey,
            n = t.data,
            o = t.children,
            i = t.width,
            a = t.height,
            u = t.layout,
            c = t.stackOffset,
            l = t.margin,
            s = e.dataStartIndex,
            f = e.dataEndIndex;
          if (void 0 === e.updateId) {
            var p = dE(t);
            return df(
              df(
                df({}, p),
                {},
                { updateId: 0 },
                y(df(df({ props: t }, p), {}, { updateId: 0 }), e)
              ),
              {},
              {
                prevDataKey: r,
                prevData: n,
                prevWidth: i,
                prevHeight: a,
                prevLayout: u,
                prevStackOffset: c,
                prevMargin: l,
                prevChildren: o
              }
            );
          }
          if (
            r !== e.prevDataKey ||
            n !== e.prevData ||
            i !== e.prevWidth ||
            a !== e.prevHeight ||
            u !== e.prevLayout ||
            c !== e.prevStackOffset ||
            !G(l, e.prevMargin)
          ) {
            var d = dE(t),
              h = {
                chartX: e.chartX,
                chartY: e.chartY,
                isTooltipActive: e.isTooltipActive
              },
              v = df(df({}, dw(e, n, u)), {}, { updateId: e.updateId + 1 }),
              m = df(df(df({}, d), h), v);
            return df(
              df(df({}, m), y(df({ props: t }, m), e)),
              {},
              {
                prevDataKey: r,
                prevData: n,
                prevWidth: i,
                prevHeight: a,
                prevLayout: u,
                prevStackOffset: c,
                prevMargin: l,
                prevChildren: o
              }
            );
          }
          if (!tm(o, e.prevChildren)) {
            var b,
              g,
              x,
              O,
              w = tp(o, fA),
              j =
                w && null != (b = null == (g = w.props) ? void 0 : g.startIndex)
                  ? b
                  : s,
              S =
                w && null != (x = null == (O = w.props) ? void 0 : O.endIndex)
                  ? x
                  : f,
              A =
                (0, k.default)(n) || j !== s || S !== f
                  ? e.updateId + 1
                  : e.updateId;
            return df(
              df(
                { updateId: A },
                y(
                  df(
                    df({ props: t }, e),
                    {},
                    { updateId: A, dataStartIndex: j, dataEndIndex: S }
                  ),
                  e
                )
              ),
              {},
              { prevChildren: o, dataStartIndex: j, dataEndIndex: S }
            );
          }
          return null;
        }),
        dp(v, 'renderActiveDot', function (t, e, r) {
          var n;
          return (
            (n = (0, P.isValidElement)(t)
              ? (0, P.cloneElement)(t, e)
              : (0, M.default)(t)
                ? t(e)
                : P.default.createElement(fa, e)),
            P.default.createElement(
              iw,
              { className: 'recharts-active-dot', key: r },
              n
            )
          );
        }),
        ((m = (0, P.forwardRef)(function (t, e) {
          return P.default.createElement(v, dt({}, t, { ref: e }));
        })).displayName = v.displayName),
        m),
      ho = t.i(15288),
      hi = t.i(19455);
    function ha(t) {
      return (ha =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function hu(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function hc(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? hu(Object(r), !0).forEach(function (e) {
              var n, o, i;
              (n = t),
                (o = e),
                (i = r[e]),
                (o = (function (t) {
                  var e = (function (t, e) {
                    if ('object' != ha(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(t, e || 'default');
                      if ('object' != ha(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === e ? String : Number)(t);
                  })(t, 'string');
                  return 'symbol' == ha(e) ? e : e + '';
                })(o)) in n
                  ? Object.defineProperty(n, o, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (n[o] = i);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : hu(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
      }
      return t;
    }
    function hl(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    var hs = (0, P.forwardRef)(function (t, e) {
        var r,
          n = t.aspect,
          o = t.initialDimension,
          i = void 0 === o ? { width: -1, height: -1 } : o,
          a = t.width,
          u = void 0 === a ? '100%' : a,
          c = t.height,
          l = void 0 === c ? '100%' : c,
          s = t.minWidth,
          f = void 0 === s ? 0 : s,
          p = t.minHeight,
          d = t.maxHeight,
          h = t.children,
          y = t.debounce,
          v = void 0 === y ? 0 : y,
          m = t.id,
          b = t.className,
          g = t.onResize,
          x = t.style,
          O = (0, P.useRef)(null),
          w = (0, P.useRef)();
        (w.current = g),
          (0, P.useImperativeHandle)(e, function () {
            return Object.defineProperty(O.current, 'current', {
              get: function () {
                return (
                  console.warn(
                    'The usage of ref.current.current is deprecated and will no longer be supported.'
                  ),
                  O.current
                );
              },
              configurable: !0
            });
          });
        var j =
            (function (t) {
              if (Array.isArray(t)) return t;
            })(
              (r = (0, P.useState)({
                containerWidth: i.width,
                containerHeight: i.height
              }))
            ) ||
            (function (t) {
              var e =
                null == t
                  ? null
                  : ('u' > typeof Symbol && t[Symbol.iterator]) ||
                    t['@@iterator'];
              if (null != e) {
                var r,
                  n,
                  o,
                  i,
                  a = [],
                  u = !0,
                  c = !1;
                try {
                  (o = (e = e.call(t)).next), !1;
                  for (
                    ;
                    !(u = (r = o.call(e)).done) &&
                    (a.push(r.value), 2 !== a.length);
                    u = !0
                  );
                } catch (t) {
                  (c = !0), (n = t);
                } finally {
                  try {
                    if (
                      !u &&
                      null != e.return &&
                      ((i = e.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (c) throw n;
                  }
                }
                return a;
              }
            })(r) ||
            (function (t) {
              if (t) {
                if ('string' == typeof t) return hl(t, 2);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                if (
                  ('Object' === e && t.constructor && (e = t.constructor.name),
                  'Map' === e || 'Set' === e)
                )
                  return Array.from(t);
                if (
                  'Arguments' === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                )
                  return hl(t, 2);
              }
            })(r) ||
            (function () {
              throw TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })(),
          S = j[0],
          A = j[1],
          E = (0, P.useCallback)(function (t, e) {
            A(function (r) {
              var n = Math.round(t),
                o = Math.round(e);
              return r.containerWidth === n && r.containerHeight === o
                ? r
                : { containerWidth: n, containerHeight: o };
            });
          }, []);
        (0, P.useEffect)(
          function () {
            var t = function (t) {
              var e,
                r = t[0].contentRect,
                n = r.width,
                o = r.height;
              E(n, o), null == (e = w.current) || e.call(w, n, o);
            };
            v > 0 && (t = (0, sB.default)(t, v, { trailing: !0, leading: !1 }));
            var e = new ResizeObserver(t),
              r = O.current.getBoundingClientRect();
            return (
              E(r.width, r.height),
              e.observe(O.current),
              function () {
                e.disconnect();
              }
            );
          },
          [E, v]
        );
        var k = (0, P.useMemo)(
          function () {
            var t = S.containerWidth,
              e = S.containerHeight;
            if (t < 0 || e < 0) return null;
            iI(
              B(u) || B(l),
              "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.",
              u,
              l
            ),
              iI(!n || n > 0, 'The aspect(%s) must be greater than zero.', n);
            var r = B(u) ? t : u,
              o = B(l) ? e : l;
            n &&
              n > 0 &&
              (r ? (o = r / n) : o && (r = o * n), d && o > d && (o = d)),
              iI(
                r > 0 || o > 0,
                'The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.',
                r,
                o,
                u,
                l,
                f,
                p,
                n
              );
            var i = !Array.isArray(h) && tu(h.type).endsWith('Chart');
            return P.default.Children.map(h, function (t) {
              return P.default.isValidElement(t)
                ? (0, P.cloneElement)(
                    t,
                    hc(
                      { width: r, height: o },
                      i
                        ? {
                            style: hc(
                              {
                                height: '100%',
                                width: '100%',
                                maxHeight: o,
                                maxWidth: r
                              },
                              t.props.style
                            )
                          }
                        : {}
                    )
                  )
                : t;
            });
          },
          [n, h, l, d, p, f, S, u]
        );
        return P.default.createElement(
          'div',
          {
            id: m ? ''.concat(m) : void 0,
            className: (0, _.default)('recharts-responsive-container', b),
            style: hc(
              hc({}, void 0 === x ? {} : x),
              {},
              { width: u, height: l, minWidth: f, minHeight: p, maxHeight: d }
            ),
            ref: O
          },
          k
        );
      }),
      hf = t.i(75157);
    let hp = { light: '', dark: '.dark' },
      hd = P.createContext(null);
    function hh() {
      let t = P.useContext(hd);
      if (!t) throw Error('useChart must be used within a <ChartContainer />');
      return t;
    }
    let hy = P.forwardRef(
      ({ id: t, className: e, children: r, config: n, ...o }, i) => {
        let a = P.useId(),
          u = `chart-${t || a.replace(/:/g, '')}`;
        return (0, A.jsx)(hd.Provider, {
          value: { config: n },
          children: (0, A.jsxs)('div', {
            'data-chart': u,
            ref: i,
            className: (0, hf.cn)(
              "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line-line]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
              e
            ),
            ...o,
            children: [
              (0, A.jsx)(hv, { id: u, config: n }),
              (0, A.jsx)(hs, { debounce: 2e3, children: r })
            ]
          })
        });
      }
    );
    hy.displayName = 'Chart';
    let hv = ({ id: t, config: e }) => {
        let r = Object.entries(e).filter(([t, e]) => e.theme || e.color);
        return r.length
          ? (0, A.jsx)('style', {
              dangerouslySetInnerHTML: {
                __html: Object.entries(hp).map(
                  ([e, n]) => `
${n} [data-chart=${t}] {
${r
  .map(([t, r]) => {
    let n = r.theme?.[e] || r.color;
    return n ? `  --color-${t}: ${n};` : null;
  })
  .join('\n')}
}
`
                )
              }
            })
          : null;
      },
      hm = P.forwardRef(
        (
          {
            active: t,
            payload: e,
            className: r,
            indicator: n = 'dot',
            hideLabel: o = !1,
            hideIndicator: i = !1,
            label: a,
            labelFormatter: u,
            labelClassName: c,
            formatter: l,
            color: s,
            nameKey: f,
            labelKey: p
          },
          d
        ) => {
          let { config: h } = hh(),
            y = P.useMemo(() => {
              if (o || !e?.length) return null;
              let [t] = e,
                r = `${p || t.dataKey || t.name || 'value'}`,
                n = hb(h, t, r),
                i = p || 'string' != typeof a ? n?.label : h[a]?.label || a;
              return u
                ? (0, A.jsx)('div', {
                    className: (0, hf.cn)('font-medium', c),
                    children: u(i, e)
                  })
                : i
                  ? (0, A.jsx)('div', {
                      className: (0, hf.cn)('font-medium', c),
                      children: i
                    })
                  : null;
            }, [a, u, e, o, c, h, p]);
          if (!t || !e?.length) return null;
          let v = 1 === e.length && 'dot' !== n;
          return (0, A.jsxs)('div', {
            ref: d,
            className: (0, hf.cn)(
              'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl',
              r
            ),
            children: [
              v ? null : y,
              (0, A.jsx)('div', {
                className: 'grid gap-1.5',
                children: e.map((t, e) => {
                  let r = `${f || t.name || t.dataKey || 'value'}`,
                    o = hb(h, t, r),
                    a = s || t.payload.fill || t.color;
                  return (0, A.jsx)(
                    'div',
                    {
                      className: (0, hf.cn)(
                        'flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground',
                        'dot' === n && 'items-center'
                      ),
                      children:
                        l && t.value && t.name
                          ? l(t.value, t.name, t, e, t.payload)
                          : (0, A.jsxs)(A.Fragment, {
                              children: [
                                o?.icon
                                  ? (0, A.jsx)(o.icon, {})
                                  : !i &&
                                    (0, A.jsx)('div', {
                                      className: (0, hf.cn)(
                                        'shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]',
                                        {
                                          'h-2.5 w-2.5': 'dot' === n,
                                          'w-1': 'line' === n,
                                          'w-0 border-[1.5px] border-dashed bg-transparent':
                                            'dashed' === n,
                                          'my-0.5': v && 'dashed' === n
                                        }
                                      ),
                                      style: {
                                        '--color-bg': a,
                                        '--color-border': a
                                      }
                                    }),
                                (0, A.jsxs)('div', {
                                  className: (0, hf.cn)(
                                    'flex flex-1 justify-between leading-none',
                                    v ? 'items-end' : 'items-center'
                                  ),
                                  children: [
                                    (0, A.jsxs)('div', {
                                      className: 'grid gap-1.5',
                                      children: [
                                        v ? y : null,
                                        (0, A.jsx)('span', {
                                          className: 'text-muted-foreground',
                                          children: o?.label || t.name
                                        })
                                      ]
                                    }),
                                    t.value &&
                                      (0, A.jsx)('span', {
                                        className:
                                          'font-mono font-medium tabular-nums text-foreground',
                                        children: t.value.toLocaleString()
                                      })
                                  ]
                                })
                              ]
                            })
                    },
                    t.dataKey
                  );
                })
              })
            ]
          });
        }
      );
    function hb(t, e, r) {
      if ('object' != typeof e || null === e) return;
      let n =
          'payload' in e && 'object' == typeof e.payload && null !== e.payload
            ? e.payload
            : void 0,
        o = r;
      return (
        r in e && 'string' == typeof e[r]
          ? (o = e[r])
          : n && r in n && 'string' == typeof n[r] && (o = n[r]),
        o in t ? t[o] : t[r]
      );
    }
    (hm.displayName = 'ChartTooltip'),
      (P.forwardRef(
        (
          {
            className: t,
            hideIcon: e = !1,
            payload: r,
            verticalAlign: n = 'bottom',
            nameKey: o
          },
          i
        ) => {
          let { config: a } = hh();
          return r?.length
            ? (0, A.jsx)('div', {
                ref: i,
                className: (0, hf.cn)(
                  'flex items-center justify-center gap-4',
                  'top' === n ? 'pb-3' : 'pt-3',
                  t
                ),
                children: r.map((t) => {
                  let r = `${o || t.dataKey || 'value'}`,
                    n = hb(a, t, r);
                  return (0, A.jsxs)(
                    'div',
                    {
                      className: (0, hf.cn)(
                        'flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground'
                      ),
                      children: [
                        n?.icon && !e
                          ? (0, A.jsx)(n.icon, {})
                          : (0, A.jsx)('div', {
                              className: 'h-2 w-2 shrink-0 rounded-[2px]',
                              style: { backgroundColor: t.color }
                            }),
                        n?.label
                      ]
                    },
                    t.value
                  );
                })
              })
            : null;
        }
      ).displayName = 'ChartLegend');
    let hg = {
      requests: { label: 'Requests' },
      text: { label: 'Text', color: 'hsl(var(--chart-3))' },
      image: { label: 'Image', color: 'hsl(var(--chart-2))' }
    };
    t.s(
      [
        'PieGraph',
        0,
        function () {
          let [t, e] = P.useState(null),
            [r, n] = P.useState(!1),
            [o, i] = P.useState('day');
          P.useEffect(() => {
            !(async function () {
              n(!0);
              try {
                let t = await fetch(`/api/historical-stats?timeframe=${o}`);
                if (!t.ok)
                  throw Error(`Failed to fetch generation stats for ${o}`);
                let r = await t.json();
                e(r);
              } catch {
                e({ text: 0, image: 0 });
              } finally {
                n(!1);
              }
            })();
          }, [o]);
          let a = P.useMemo(
              () => [
                {
                  type: 'Text Generation',
                  requests: t ? t.text : 0,
                  fill: 'var(--color-text)'
                },
                {
                  type: 'Image Generation',
                  requests: t ? t.image : 0,
                  fill: 'var(--color-image)'
                }
              ],
              [t]
            ),
            u = P.useMemo(() => (t ? t.text + t.image : 0), [t]);
          return (0, A.jsxs)(ho.Card, {
            className: 'flex flex-col',
            children: [
              (0, A.jsxs)(ho.CardHeader, {
                className: 'items-center pb-0',
                children: [
                  (0, A.jsx)(ho.CardTitle, { children: 'Job Mix' }),
                  (0, A.jsxs)(ho.CardDescription, {
                    children: [
                      o.charAt(0).toUpperCase() + o.slice(1),
                      ' request volume'
                    ]
                  })
                ]
              }),
              (0, A.jsx)(ho.CardContent, {
                className: 'flex-1 pb-0',
                children: r
                  ? (0, A.jsx)('div', {
                      className: 'flex h-full items-center justify-center',
                      children: (0, A.jsx)(E.Loader2, {
                        className: 'h-6 w-6 animate-spin'
                      })
                    })
                  : (0, A.jsx)(hy, {
                      config: hg,
                      className: 'mx-auto aspect-square max-h-[360px]',
                      children: (0, A.jsxs)(hn, {
                        children: [
                          (0, A.jsx)(fo, {
                            cursor: !1,
                            content: (0, A.jsx)(hm, { hideLabel: !0 })
                          }),
                          (0, A.jsx)(sN, {
                            data: a,
                            dataKey: 'requests',
                            nameKey: 'type',
                            innerRadius: 60,
                            strokeWidth: 5,
                            children: (0, A.jsx)(uE, {
                              content: ({ viewBox: t }) =>
                                t && 'cx' in t && 'cy' in t
                                  ? (0, A.jsxs)('text', {
                                      x: t.cx,
                                      y: t.cy,
                                      textAnchor: 'middle',
                                      dominantBaseline: 'middle',
                                      children: [
                                        (0, A.jsx)('tspan', {
                                          x: t.cx,
                                          y: t.cy,
                                          className:
                                            'fill-foreground text-3xl font-bold',
                                          children: u.toLocaleString()
                                        }),
                                        (0, A.jsx)('tspan', {
                                          x: t.cx,
                                          y: (t.cy ?? 0) + 24,
                                          className:
                                            'fill-muted-foreground text-xs',
                                          children: 'Requests'
                                        })
                                      ]
                                    })
                                  : null
                            })
                          })
                        ]
                      })
                    })
              }),
              (0, A.jsx)(ho.CardFooter, {
                className: 'flex-col gap-2 text-sm',
                children: (0, A.jsx)('div', {
                  className: 'flex flex-wrap justify-center gap-2',
                  children: ['minute', 'hour', 'day', 'month', 'total'].map(
                    (t) =>
                      (0, A.jsx)(
                        hi.Button,
                        {
                          variant: o === t ? 'default' : 'outline',
                          size: 'sm',
                          onClick: () => i(t),
                          disabled: r,
                          children: t.charAt(0).toUpperCase() + t.slice(1)
                        },
                        t
                      )
                  )
                })
              })
            ]
          });
        }
      ],
      998
    );
  }
]);
