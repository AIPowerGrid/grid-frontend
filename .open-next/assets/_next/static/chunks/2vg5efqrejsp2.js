(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  94237,
  (e) => {
    'use strict';
    var t = e.i(7284);
    let r = (e) => ('boolean' == typeof e ? `${e}` : 0 === e ? '0' : e),
      a = t.clsx;
    e.s([
      'cva',
      0,
      (e, t) => (l) => {
        var n;
        if ((null == t ? void 0 : t.variants) == null)
          return a(
            e,
            null == l ? void 0 : l.class,
            null == l ? void 0 : l.className
          );
        let { variants: o, defaultVariants: i } = t,
          c = Object.keys(o).map((e) => {
            let t = null == l ? void 0 : l[e],
              a = null == i ? void 0 : i[e];
            if (null === t) return null;
            let n = r(t) || r(a);
            return o[e][n];
          }),
          u =
            l &&
            Object.entries(l).reduce((e, t) => {
              let [r, a] = t;
              return void 0 === a || (e[r] = a), e;
            }, {});
        return a(
          e,
          c,
          null == t || null == (n = t.compoundVariants)
            ? void 0
            : n.reduce((e, t) => {
                let { class: r, className: a, ...l } = t;
                return Object.entries(l).every((e) => {
                  let [t, r] = e;
                  return Array.isArray(r)
                    ? r.includes({ ...i, ...u }[t])
                    : { ...i, ...u }[t] === r;
                })
                  ? [...e, r, a]
                  : e;
              }, []),
          null == l ? void 0 : l.class,
          null == l ? void 0 : l.className
        );
      }
    ]);
  },
  74420,
  (e) => {
    'use strict';
    var t = e.i(22034);
    let r = (...e) =>
      e
        .filter((e, t, r) => !!e && '' !== e.trim() && r.indexOf(e) === t)
        .join(' ')
        .trim();
    var a = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: 24,
      height: 24,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    };
    let l = (0, t.forwardRef)(
      (
        {
          color: e = 'currentColor',
          size: l = 24,
          strokeWidth: n = 2,
          absoluteStrokeWidth: o,
          className: i = '',
          children: c,
          iconNode: u,
          ...s
        },
        d
      ) =>
        (0, t.createElement)(
          'svg',
          {
            ref: d,
            ...a,
            width: l,
            height: l,
            stroke: e,
            strokeWidth: o ? (24 * Number(n)) / Number(l) : n,
            className: r('lucide', i),
            ...s
          },
          [
            ...u.map(([e, r]) => (0, t.createElement)(e, r)),
            ...(Array.isArray(c) ? c : [c])
          ]
        )
    );
    e.s(
      [
        'default',
        0,
        (e, a) => {
          let n = (0, t.forwardRef)(({ className: n, ...o }, i) =>
            (0, t.createElement)(l, {
              ref: i,
              iconNode: a,
              className: r(
                `lucide-${e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}`,
                n
              ),
              ...o
            })
          );
          return (n.displayName = `${e}`), n;
        }
      ],
      74420
    );
  },
  86609,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var a = {
      formatUrl: function () {
        return i;
      },
      formatWithValidation: function () {
        return u;
      },
      urlObjectKeys: function () {
        return c;
      }
    };
    for (var l in a) Object.defineProperty(r, l, { enumerable: !0, get: a[l] });
    let n = e.r(44066)._(e.r(21453)),
      o = /https?|ftp|gopher|file/;
    function i(e) {
      let { auth: t, hostname: r } = e,
        a = e.protocol || '',
        l = e.pathname || '',
        i = e.hash || '',
        c = e.query || '',
        u = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
        e.host
          ? (u = t + e.host)
          : r &&
            ((u = t + (~r.indexOf(':') ? `[${r}]` : r)),
            e.port && (u += ':' + e.port)),
        c && 'object' == typeof c && (c = String(n.urlQueryToSearchParams(c)));
      let s = e.search || (c && `?${c}`) || '';
      return (
        a && !a.endsWith(':') && (a += ':'),
        e.slashes || ((!a || o.test(a)) && !1 !== u)
          ? ((u = '//' + (u || '')), l && '/' !== l[0] && (l = '/' + l))
          : u || (u = ''),
        i && '#' !== i[0] && (i = '#' + i),
        s && '?' !== s[0] && (s = '?' + s),
        (l = l.replace(/[?#]/g, encodeURIComponent)),
        (s = s.replace('#', '%23')),
        `${a}${u}${l}${s}${i}`
      );
    }
    let c = [
      'auth',
      'hash',
      'host',
      'hostname',
      'href',
      'path',
      'pathname',
      'port',
      'protocol',
      'query',
      'search',
      'slashes'
    ];
    function u(e) {
      return i(e);
    }
  },
  41836,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'useMergedRef', {
        enumerable: !0,
        get: function () {
          return l;
        }
      });
    let a = e.r(22034);
    function l(e, t) {
      let r = (0, a.useRef)(null),
        l = (0, a.useRef)(null);
      return (0, a.useCallback)(
        (a) => {
          if (null === a) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = l.current;
            t && ((l.current = null), t());
          } else e && (r.current = n(e, a)), t && (l.current = n(t, a));
        },
        [e, t]
      );
    }
    function n(e, t) {
      if ('function' != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return 'function' == typeof r ? r : () => e(null);
      }
    }
    ('function' == typeof r.default ||
      ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  2139,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'isLocalURL', {
        enumerable: !0,
        get: function () {
          return n;
        }
      });
    let a = e.r(55814),
      l = e.r(9043);
    function n(e) {
      if (!(0, a.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, a.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, l.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  41392,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'errorOnce', {
        enumerable: !0,
        get: function () {
          return a;
        }
      });
    let a = (e) => {};
  },
  17913,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var a = {
      default: function () {
        return g;
      },
      useLinkStatus: function () {
        return m;
      }
    };
    for (var l in a) Object.defineProperty(r, l, { enumerable: !0, get: a[l] });
    let n = e.r(44066),
      o = e.r(29971),
      i = n._(e.r(22034)),
      c = e.r(86609),
      u = e.r(70829),
      s = e.r(41836),
      d = e.r(55814),
      h = e.r(45985);
    e.r(88874);
    let f = e.r(41755),
      p = e.r(54308),
      y = e.r(2139),
      v = e.r(40507);
    function g(t) {
      var r, a;
      let l,
        n,
        g,
        [m, x] = (0, i.useOptimistic)(p.IDLE_LINK_STATUS),
        b = (0, i.useRef)(null),
        {
          href: M,
          as: w,
          children: C,
          prefetch: j = null,
          passHref: R,
          replace: _,
          shallow: z,
          scroll: S,
          onClick: L,
          onMouseEnter: O,
          onTouchStart: P,
          legacyBehavior: A = !1,
          onNavigate: T,
          transitionTypes: E,
          ref: V,
          unstable_dynamicOnHover: N,
          ...H
        } = t;
      (l = C),
        A &&
          ('string' == typeof l || 'number' == typeof l) &&
          (l = (0, o.jsx)('a', { children: l }));
      let $ = i.default.useContext(u.AppRouterContext),
        U = !1 !== j,
        q =
          !1 !== j
            ? null === (a = j) || 'auto' === a
              ? v.FetchStrategy.PPR
              : v.FetchStrategy.Full
            : v.FetchStrategy.PPR,
        B = 'string' == typeof (r = w || M) ? r : (0, c.formatUrl)(r);
      if (A) {
        if (l?.$$typeof === Symbol.for('react.lazy'))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E863', enumerable: !1, configurable: !0 }
          );
        n = i.default.Children.only(l);
      }
      let I = A ? n && 'object' == typeof n && n.ref : V,
        F = i.default.useCallback(
          (e) => (
            null !== $ &&
              (b.current = (0, p.mountLinkInstance)(e, B, $, q, U, x)),
            () => {
              b.current &&
                ((0, p.unmountLinkForCurrentNavigation)(b.current),
                (b.current = null)),
                (0, p.unmountPrefetchableInstance)(e);
            }
          ),
          [U, B, $, q, x]
        ),
        D = {
          ref: (0, s.useMergedRef)(F, I),
          onClick(t) {
            A || 'function' != typeof L || L(t),
              A &&
                n.props &&
                'function' == typeof n.props.onClick &&
                n.props.onClick(t),
              !$ ||
                t.defaultPrevented ||
                (function (t, r, a, l, n, o, c) {
                  if ('u' > typeof window) {
                    let u,
                      { nodeName: s } = t.currentTarget;
                    if (
                      ('A' === s.toUpperCase() &&
                        (((u = t.currentTarget.getAttribute('target')) &&
                          '_self' !== u) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute('download')
                    )
                      return;
                    if (!(0, y.isLocalURL)(r)) {
                      l && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), o)) {
                      let e = !1;
                      if (
                        (o({
                          preventDefault: () => {
                            e = !0;
                          }
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: d } = e.r(33819);
                    i.default.startTransition(() => {
                      d(
                        r,
                        l ? 'replace' : 'push',
                        !1 === n
                          ? f.ScrollBehavior.NoScroll
                          : f.ScrollBehavior.Default,
                        a.current,
                        c
                      );
                    });
                  }
                })(t, B, b, _, S, T, E);
          },
          onMouseEnter(e) {
            A || 'function' != typeof O || O(e),
              A &&
                n.props &&
                'function' == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              $ && U && (0, p.onNavigationIntent)(e.currentTarget, !0 === N);
          },
          onTouchStart: function (e) {
            A || 'function' != typeof P || P(e),
              A &&
                n.props &&
                'function' == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              $ && U && (0, p.onNavigationIntent)(e.currentTarget, !0 === N);
          }
        };
      return (
        (0, d.isAbsoluteUrl)(B)
          ? (D.href = B)
          : (A && !R && ('a' !== n.type || 'href' in n.props)) ||
            (D.href = (0, h.addBasePath)(B)),
        (g = A
          ? i.default.cloneElement(n, D)
          : (0, o.jsx)('a', { ...H, ...D, children: l })),
        (0, o.jsx)(k.Provider, { value: m, children: g })
      );
    }
    e.r(41392);
    let k = (0, i.createContext)(p.IDLE_LINK_STATUS),
      m = () => (0, i.useContext)(k);
    ('function' == typeof r.default ||
      ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  6633,
  (e) => {
    'use strict';
    var t = e.i(22034);
    function r(e, t) {
      if ('function' == typeof e) return e(t);
      null != e && (e.current = t);
    }
    function a(...e) {
      return (t) => {
        let a = !1,
          l = e.map((e) => {
            let l = r(e, t);
            return a || 'function' != typeof l || (a = !0), l;
          });
        if (a)
          return () => {
            for (let t = 0; t < l.length; t++) {
              let a = l[t];
              'function' == typeof a ? a() : r(e[t], null);
            }
          };
      };
    }
    e.s([
      'composeRefs',
      0,
      a,
      'useComposedRefs',
      0,
      function (...e) {
        return t.useCallback(a(...e), e);
      }
    ]);
  },
  23824,
  (e) => {
    'use strict';
    var t = e.i(22034),
      r = e.i(6633),
      a = e.i(29971),
      l = Symbol.for('react.lazy'),
      n = t[' use '.trim().toString()];
    function o(e) {
      var t;
      return (
        null != e &&
        'object' == typeof e &&
        '$$typeof' in e &&
        e.$$typeof === l &&
        '_payload' in e &&
        'object' == typeof (t = e._payload) &&
        null !== t &&
        'then' in t
      );
    }
    function i(e) {
      var l;
      let i,
        c =
          ((l = e),
          ((i = t.forwardRef((e, a) => {
            let { children: l, ...i } = e;
            if (
              (o(l) && 'function' == typeof n && (l = n(l._payload)),
              t.isValidElement(l))
            ) {
              var c;
              let e,
                n,
                o =
                  ((c = l),
                  (n =
                    (e = Object.getOwnPropertyDescriptor(
                      c.props,
                      'ref'
                    )?.get) &&
                    'isReactWarning' in e &&
                    e.isReactWarning)
                    ? c.ref
                    : (n =
                          (e = Object.getOwnPropertyDescriptor(
                            c,
                            'ref'
                          )?.get) &&
                          'isReactWarning' in e &&
                          e.isReactWarning)
                      ? c.props.ref
                      : c.props.ref || c.ref),
                u = (function (e, t) {
                  let r = { ...t };
                  for (let a in t) {
                    let l = e[a],
                      n = t[a];
                    /^on[A-Z]/.test(a)
                      ? l && n
                        ? (r[a] = (...e) => {
                            let t = n(...e);
                            return l(...e), t;
                          })
                        : l && (r[a] = l)
                      : 'style' === a
                        ? (r[a] = { ...l, ...n })
                        : 'className' === a &&
                          (r[a] = [l, n].filter(Boolean).join(' '));
                  }
                  return { ...e, ...r };
                })(i, l.props);
              return (
                l.type !== t.Fragment &&
                  (u.ref = a ? (0, r.composeRefs)(a, o) : o),
                t.cloneElement(l, u)
              );
            }
            return t.Children.count(l) > 1 ? t.Children.only(null) : null;
          })).displayName = `${l}.SlotClone`),
          i),
        u = t.forwardRef((e, r) => {
          let { children: l, ...i } = e;
          o(l) && 'function' == typeof n && (l = n(l._payload));
          let u = t.Children.toArray(l),
            d = u.find(s);
          if (d) {
            let e = d.props.children,
              l = u.map((r) =>
                r !== d
                  ? r
                  : t.Children.count(e) > 1
                    ? t.Children.only(null)
                    : t.isValidElement(e)
                      ? e.props.children
                      : null
              );
            return (0, a.jsx)(c, {
              ...i,
              ref: r,
              children: t.isValidElement(e)
                ? t.cloneElement(e, void 0, l)
                : null
            });
          }
          return (0, a.jsx)(c, { ...i, ref: r, children: l });
        });
      return (u.displayName = `${e}.Slot`), u;
    }
    var c = i('Slot'),
      u = Symbol('radix.slottable');
    function s(e) {
      return (
        t.isValidElement(e) &&
        'function' == typeof e.type &&
        '__radixId' in e.type &&
        e.type.__radixId === u
      );
    }
    e.s(['Slot', 0, c, 'createSlot', 0, i]);
  },
  19455,
  (e) => {
    'use strict';
    var t = e.i(29971),
      r = e.i(22034),
      a = e.i(23824),
      l = e.i(94237),
      n = e.i(75157);
    let o = (0, l.cva)(
        'inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
        {
          variants: {
            variant: {
              default:
                'bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(79,70,229,0.28)] hover:bg-primary/90',
              destructive:
                'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
              outline:
                'border border-input bg-background/40 shadow-sm hover:bg-accent hover:text-accent-foreground',
              secondary:
                'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
              ghost: 'hover:bg-accent hover:text-accent-foreground',
              link: 'text-primary underline-offset-4 hover:underline'
            },
            size: {
              default: 'h-9 px-4 py-2',
              sm: 'h-8 px-3 text-xs',
              lg: 'h-10 px-8',
              icon: 'h-9 w-9'
            }
          },
          defaultVariants: { variant: 'default', size: 'default' }
        }
      ),
      i = r.forwardRef(
        ({ className: e, variant: r, size: l, asChild: i = !1, ...c }, u) => {
          let s = i ? a.Slot : 'button';
          return (0, t.jsx)(s, {
            className: (0, n.cn)(o({ variant: r, size: l, className: e })),
            ref: u,
            ...c
          });
        }
      );
    (i.displayName = 'Button'), e.s(['Button', 0, i]);
  },
  78218,
  (e) => {
    'use strict';
    let t = (0, e.i(74420).default)('LoaderCircle', [
      ['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }]
    ]);
    e.s(['Loader2', 0, t], 78218);
  },
  41665,
  94657,
  (e) => {
    'use strict';
    var t = e.i(74420);
    let r = (0, t.default)('TriangleAlert', [
      [
        'path',
        {
          d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
          key: 'wmoenq'
        }
      ],
      ['path', { d: 'M12 9v4', key: 'juzpu7' }],
      ['path', { d: 'M12 17h.01', key: 'p32p05' }]
    ]);
    e.s(['default', 0, r], 41665);
    let a = (0, t.default)('Trash', [
      ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
      ['path', { d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6', key: '4alrt4' }],
      ['path', { d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2', key: 'v07s0e' }]
    ]);
    e.s(['Trash', 0, a], 94657);
  },
  49511,
  84484,
  14296,
  95380,
  (e) => {
    'use strict';
    var t = e.i(41665);
    e.s(['AlertTriangle', () => t.default], 49511);
    var r = e.i(74420);
    let a = (0, r.default)('ArrowRight', [
      ['path', { d: 'M5 12h14', key: '1ays0h' }],
      ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }]
    ]);
    e.s(['ArrowRight', 0, a], 84484);
    let l = (0, r.default)('Check', [
      ['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]
    ]);
    e.s(['Check', 0, l], 14296);
    let n = (0, r.default)('ChevronLeft', [
      ['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }]
    ]);
    e.s(['ChevronLeft', 0, n], 95380);
  },
  15049,
  (e) => {
    'use strict';
    let t = (0, e.i(74420).default)('ChevronRight', [
      ['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]
    ]);
    e.s(['ChevronRight', 0, t], 15049);
  },
  8164,
  (e) => {
    'use strict';
    var t = e.i(29971),
      r = e.i(49511),
      a = e.i(84484),
      l = e.i(14296),
      n = e.i(95380),
      o = e.i(15049),
      i = e.i(74420);
    let c = (0, i.default)('CircuitBoard', [
        [
          'rect',
          { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }
        ],
        ['path', { d: 'M11 9h4a2 2 0 0 0 2-2V3', key: '1ve2rv' }],
        ['circle', { cx: '9', cy: '9', r: '2', key: 'af1f0g' }],
        ['path', { d: 'M7 21v-4a2 2 0 0 1 2-2h4', key: '1fwkro' }],
        ['circle', { cx: '15', cy: '15', r: '2', key: '3i40o0' }]
      ]),
      u = (0, i.default)('Command', [
        [
          'path',
          {
            d: 'M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3',
            key: '11bfej'
          }
        ]
      ]),
      s = (0, i.default)('CreditCard', [
        [
          'rect',
          { width: '20', height: '14', x: '2', y: '5', rx: '2', key: 'ynyp8z' }
        ],
        ['line', { x1: '2', x2: '22', y1: '10', y2: '10', key: '1b3vmo' }]
      ]),
      d = (0, i.default)('File', [
        [
          'path',
          {
            d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z',
            key: '1rqfz7'
          }
        ],
        ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }]
      ]),
      h = (0, i.default)('FileText', [
        [
          'path',
          {
            d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z',
            key: '1rqfz7'
          }
        ],
        ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
        ['path', { d: 'M10 9H8', key: 'b1mrlr' }],
        ['path', { d: 'M16 13H8', key: 't4e002' }],
        ['path', { d: 'M16 17H8', key: 'z1uh3a' }]
      ]),
      f = (0, i.default)('CircleHelp', [
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
        ['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
        ['path', { d: 'M12 17h.01', key: 'p32p05' }]
      ]),
      p = (0, i.default)('Image', [
        [
          'rect',
          {
            width: '18',
            height: '18',
            x: '3',
            y: '3',
            rx: '2',
            ry: '2',
            key: '1m3agn'
          }
        ],
        ['circle', { cx: '9', cy: '9', r: '2', key: 'af1f0g' }],
        [
          'path',
          { d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21', key: '1xmnt7' }
        ]
      ]),
      y = (0, i.default)('Laptop', [
        [
          'path',
          {
            d: 'M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16',
            key: 'tarvll'
          }
        ]
      ]),
      v = (0, i.default)('LayoutDashboard', [
        [
          'rect',
          { width: '7', height: '9', x: '3', y: '3', rx: '1', key: '10lvy0' }
        ],
        [
          'rect',
          { width: '7', height: '5', x: '14', y: '3', rx: '1', key: '16une8' }
        ],
        [
          'rect',
          { width: '7', height: '9', x: '14', y: '12', rx: '1', key: '1hutg5' }
        ],
        [
          'rect',
          { width: '7', height: '5', x: '3', y: '16', rx: '1', key: 'ldoo1y' }
        ]
      ]);
    var g = e.i(78218);
    let k = (0, i.default)('LogIn', [
        [
          'path',
          { d: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4', key: 'u53s6r' }
        ],
        ['polyline', { points: '10 17 15 12 10 7', key: '1ail0h' }],
        ['line', { x1: '15', x2: '3', y1: '12', y2: '12', key: 'v6grx8' }]
      ]),
      m = (0, i.default)('ShoppingBag', [
        [
          'path',
          {
            d: 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z',
            key: 'hou9p0'
          }
        ],
        ['path', { d: 'M3 6h18', key: 'd0wm0j' }],
        ['path', { d: 'M16 10a4 4 0 0 1-8 0', key: '1ltviw' }]
      ]),
      x = (0, i.default)('Moon', [
        ['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }]
      ]),
      b = (0, i.default)('EllipsisVertical', [
        ['circle', { cx: '12', cy: '12', r: '1', key: '41hilf' }],
        ['circle', { cx: '12', cy: '5', r: '1', key: 'gxeob9' }],
        ['circle', { cx: '12', cy: '19', r: '1', key: 'lyex9k' }]
      ]),
      M = (0, i.default)('Pizza', [
        ['path', { d: 'm12 14-1 1', key: '11onhr' }],
        ['path', { d: 'm13.75 18.25-1.25 1.42', key: '1yisr3' }],
        [
          'path',
          { d: 'M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12', key: '1qtqk6' }
        ],
        ['path', { d: 'M18.8 9.3a1 1 0 0 0 2.1 7.7', key: 'fbbbr2' }],
        [
          'path',
          {
            d: 'M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z',
            key: '1hyfdd'
          }
        ]
      ]),
      w = (0, i.default)('Plus', [
        ['path', { d: 'M5 12h14', key: '1ays0h' }],
        ['path', { d: 'M12 5v14', key: 's699le' }]
      ]),
      C = (0, i.default)('Settings', [
        [
          'path',
          {
            d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z',
            key: '1qme2f'
          }
        ],
        ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }]
      ]),
      j = (0, i.default)('SunMedium', [
        ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
        ['path', { d: 'M12 3v1', key: '1asbbs' }],
        ['path', { d: 'M12 20v1', key: '1wcdkc' }],
        ['path', { d: 'M3 12h1', key: 'lp3yf2' }],
        ['path', { d: 'M20 12h1', key: '1vloll' }],
        ['path', { d: 'm18.364 5.636-.707.707', key: '1hakh0' }],
        ['path', { d: 'm6.343 17.657-.707.707', key: '18m9nf' }],
        ['path', { d: 'm5.636 5.636.707.707', key: '1xv1c5' }],
        ['path', { d: 'm17.657 17.657.707.707', key: 'vl76zb' }]
      ]);
    var R = e.i(94657);
    let _ = (0, i.default)('Twitter', [
        [
          'path',
          {
            d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
            key: 'pff0z6'
          }
        ]
      ]),
      z = (0, i.default)('User', [
        [
          'path',
          { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' }
        ],
        ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }]
      ]),
      S = (0, i.default)('CircleUserRound', [
        ['path', { d: 'M18 20a6 6 0 0 0-12 0', key: '1qehca' }],
        ['circle', { cx: '12', cy: '10', r: '4', key: '1h16sb' }],
        ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }]
      ]),
      L = (0, i.default)('UserPen', [
        ['path', { d: 'M11.5 15H7a4 4 0 0 0-4 4v2', key: '15lzij' }],
        [
          'path',
          {
            d: 'M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z',
            key: '1817ys'
          }
        ],
        ['circle', { cx: '10', cy: '7', r: '4', key: 'e45bow' }]
      ]),
      O = (0, i.default)('UserRoundX', [
        ['path', { d: 'M2 21a8 8 0 0 1 11.873-7', key: '74fkxq' }],
        ['circle', { cx: '10', cy: '8', r: '5', key: 'o932ke' }],
        ['path', { d: 'm17 17 5 5', key: 'p7ous7' }],
        ['path', { d: 'm22 17-5 5', key: 'gqnmv0' }]
      ]),
      P = (0, i.default)('X', [
        ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
        ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }]
      ]),
      A = (0, i.default)('Network', [
        [
          'rect',
          { x: '16', y: '16', width: '6', height: '6', rx: '1', key: '4q2zg0' }
        ],
        [
          'rect',
          { x: '2', y: '16', width: '6', height: '6', rx: '1', key: '8cvhb9' }
        ],
        [
          'rect',
          { x: '9', y: '2', width: '6', height: '6', rx: '1', key: '1egb70' }
        ],
        [
          'path',
          { d: 'M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3', key: '1jsf9p' }
        ],
        ['path', { d: 'M12 12V8', key: '2874zd' }]
      ]),
      T = {
        dashboard: v,
        logo: u,
        login: k,
        close: P,
        flask: (0, i.default)('FlaskConical', [
          [
            'path',
            {
              d: 'M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2',
              key: '18mbvz'
            }
          ],
          ['path', { d: 'M6.453 15h11.094', key: '3shlmq' }],
          ['path', { d: 'M8.5 2h7', key: 'csnxdl' }]
        ]),
        network: A,
        product: m,
        spinner: g.Loader2,
        kanban: c,
        chevronLeft: n.ChevronLeft,
        chevronRight: o.ChevronRight,
        trash: R.Trash,
        employee: O,
        post: h,
        page: d,
        userPen: L,
        user2: S,
        media: p,
        settings: C,
        billing: s,
        ellipsis: b,
        add: w,
        warning: r.AlertTriangle,
        user: z,
        arrowRight: a.ArrowRight,
        help: f,
        pizza: M,
        sun: j,
        moon: x,
        laptop: y,
        gitHub: ({ ...e }) =>
          (0, t.jsx)('svg', {
            'aria-hidden': 'true',
            focusable: 'false',
            'data-prefix': 'fab',
            'data-icon': 'github',
            role: 'img',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 496 512',
            ...e,
            children: (0, t.jsx)('path', {
              fill: 'currentColor',
              d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
            })
          }),
        twitter: _,
        check: l.Check,
        google: ({ ...e }) =>
          (0, t.jsx)('div', {
            className: 'flex pr-2',
            children: (0, t.jsxs)('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              x: '0px',
              y: '0px',
              width: '20',
              height: '100',
              viewBox: '0 0 48 48',
              children: [
                (0, t.jsx)('path', {
                  fill: '#FFC107',
                  d: 'M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
                }),
                (0, t.jsx)('path', {
                  fill: '#FF3D00',
                  d: 'M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
                }),
                (0, t.jsx)('path', {
                  fill: '#4CAF50',
                  d: 'M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
                }),
                (0, t.jsx)('path', {
                  fill: '#1976D2',
                  d: 'M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
                })
              ]
            })
          }),
        wallet: ({ ...e }) =>
          (0, t.jsxs)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '20',
            height: '20',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            ...e,
            children: [
              (0, t.jsx)('path', { d: 'M21 12V7H5a2 2 0 0 1 0-4h14v4' }),
              (0, t.jsx)('path', { d: 'M3 5v14a2 2 0 0 0 2 2h16v-5' }),
              (0, t.jsx)('path', { d: 'M18 12a2 2 0 0 0 0 4h4v-4Z' })
            ]
          })
      };
    e.s(['Icons', 0, T], 8164);
  }
]);
