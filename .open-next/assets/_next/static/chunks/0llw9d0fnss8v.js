(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  94237,
  (e) => {
    'use strict';
    var t = e.i(7284);
    let r = (e) => ('boolean' == typeof e ? `${e}` : 0 === e ? '0' : e),
      n = t.clsx;
    e.s([
      'cva',
      0,
      (e, t) => (l) => {
        var o;
        if ((null == t ? void 0 : t.variants) == null)
          return n(
            e,
            null == l ? void 0 : l.class,
            null == l ? void 0 : l.className
          );
        let { variants: i, defaultVariants: s } = t,
          a = Object.keys(i).map((e) => {
            let t = null == l ? void 0 : l[e],
              n = null == s ? void 0 : s[e];
            if (null === t) return null;
            let o = r(t) || r(n);
            return i[e][o];
          }),
          u =
            l &&
            Object.entries(l).reduce((e, t) => {
              let [r, n] = t;
              return void 0 === n || (e[r] = n), e;
            }, {});
        return n(
          e,
          a,
          null == t || null == (o = t.compoundVariants)
            ? void 0
            : o.reduce((e, t) => {
                let { class: r, className: n, ...l } = t;
                return Object.entries(l).every((e) => {
                  let [t, r] = e;
                  return Array.isArray(r)
                    ? r.includes({ ...s, ...u }[t])
                    : { ...s, ...u }[t] === r;
                })
                  ? [...e, r, n]
                  : e;
              }, []),
          null == l ? void 0 : l.class,
          null == l ? void 0 : l.className
        );
      }
    ]);
  },
  6633,
  (e) => {
    'use strict';
    var t = e.i(22034);
    function r(e, t) {
      if ('function' == typeof e) return e(t);
      null != e && (e.current = t);
    }
    function n(...e) {
      return (t) => {
        let n = !1,
          l = e.map((e) => {
            let l = r(e, t);
            return n || 'function' != typeof l || (n = !0), l;
          });
        if (n)
          return () => {
            for (let t = 0; t < l.length; t++) {
              let n = l[t];
              'function' == typeof n ? n() : r(e[t], null);
            }
          };
      };
    }
    e.s([
      'composeRefs',
      0,
      n,
      'useComposedRefs',
      0,
      function (...e) {
        return t.useCallback(n(...e), e);
      }
    ]);
  },
  23824,
  (e) => {
    'use strict';
    var t = e.i(22034),
      r = e.i(6633),
      n = e.i(29971),
      l = Symbol.for('react.lazy'),
      o = t[' use '.trim().toString()];
    function i(e) {
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
    function s(e) {
      var l;
      let s,
        a =
          ((l = e),
          ((s = t.forwardRef((e, n) => {
            let { children: l, ...s } = e;
            if (
              (i(l) && 'function' == typeof o && (l = o(l._payload)),
              t.isValidElement(l))
            ) {
              var a;
              let e,
                o,
                i =
                  ((a = l),
                  (o =
                    (e = Object.getOwnPropertyDescriptor(
                      a.props,
                      'ref'
                    )?.get) &&
                    'isReactWarning' in e &&
                    e.isReactWarning)
                    ? a.ref
                    : (o =
                          (e = Object.getOwnPropertyDescriptor(
                            a,
                            'ref'
                          )?.get) &&
                          'isReactWarning' in e &&
                          e.isReactWarning)
                      ? a.props.ref
                      : a.props.ref || a.ref),
                u = (function (e, t) {
                  let r = { ...t };
                  for (let n in t) {
                    let l = e[n],
                      o = t[n];
                    /^on[A-Z]/.test(n)
                      ? l && o
                        ? (r[n] = (...e) => {
                            let t = o(...e);
                            return l(...e), t;
                          })
                        : l && (r[n] = l)
                      : 'style' === n
                        ? (r[n] = { ...l, ...o })
                        : 'className' === n &&
                          (r[n] = [l, o].filter(Boolean).join(' '));
                  }
                  return { ...e, ...r };
                })(s, l.props);
              return (
                l.type !== t.Fragment &&
                  (u.ref = n ? (0, r.composeRefs)(n, i) : i),
                t.cloneElement(l, u)
              );
            }
            return t.Children.count(l) > 1 ? t.Children.only(null) : null;
          })).displayName = `${l}.SlotClone`),
          s),
        u = t.forwardRef((e, r) => {
          let { children: l, ...s } = e;
          i(l) && 'function' == typeof o && (l = o(l._payload));
          let u = t.Children.toArray(l),
            d = u.find(c);
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
            return (0, n.jsx)(a, {
              ...s,
              ref: r,
              children: t.isValidElement(e)
                ? t.cloneElement(e, void 0, l)
                : null
            });
          }
          return (0, n.jsx)(a, { ...s, ref: r, children: l });
        });
      return (u.displayName = `${e}.Slot`), u;
    }
    var a = s('Slot'),
      u = Symbol('radix.slottable');
    function c(e) {
      return (
        t.isValidElement(e) &&
        'function' == typeof e.type &&
        '__radixId' in e.type &&
        e.type.__radixId === u
      );
    }
    e.s(['Slot', 0, a, 'createSlot', 0, s]);
  },
  19455,
  (e) => {
    'use strict';
    var t = e.i(29971),
      r = e.i(22034),
      n = e.i(23824),
      l = e.i(94237),
      o = e.i(75157);
    let i = (0, l.cva)(
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
      s = r.forwardRef(
        ({ className: e, variant: r, size: l, asChild: s = !1, ...a }, u) => {
          let c = s ? n.Slot : 'button';
          return (0, t.jsx)(c, {
            className: (0, o.cn)(i({ variant: r, size: l, className: e })),
            ref: u,
            ...a
          });
        }
      );
    (s.displayName = 'Button'), e.s(['Button', 0, s]);
  },
  29306,
  (e) => {
    'use strict';
    var t = e.i(29971),
      r = e.i(7561),
      n = e.i(19455);
    e.s([
      'default',
      0,
      function () {
        let e = (0, r.useRouter)();
        return (0, t.jsxs)('div', {
          className:
            'absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center',
          children: [
            (0, t.jsx)('span', {
              className:
                'bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent',
              children: '404'
            }),
            (0, t.jsx)('h2', {
              className: 'font-heading my-2 text-2xl font-bold',
              children: "Something's missing"
            }),
            (0, t.jsx)('p', {
              children:
                "Sorry, the page you are looking for doesn't exist or has been moved."
            }),
            (0, t.jsxs)('div', {
              className: 'mt-8 flex justify-center gap-2',
              children: [
                (0, t.jsx)(n.Button, {
                  onClick: () => e.back(),
                  variant: 'default',
                  size: 'lg',
                  children: 'Go back'
                }),
                (0, t.jsx)(n.Button, {
                  onClick: () => e.push('/dashboard'),
                  variant: 'ghost',
                  size: 'lg',
                  children: 'Back to Home'
                })
              ]
            })
          ]
        });
      }
    ]);
  }
]);
