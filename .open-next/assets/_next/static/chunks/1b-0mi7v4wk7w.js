(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  15288,
  (e) => {
    'use strict';
    var r = e.i(29971),
      t = e.i(22034),
      o = e.i(75157);
    let l = t.forwardRef(({ className: e, ...t }, l) =>
      (0, r.jsx)('div', {
        ref: l,
        className: (0, o.cn)(
          'rounded-lg border border-border/80 bg-card/90 text-card-foreground shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm',
          e
        ),
        ...t
      })
    );
    l.displayName = 'Card';
    let n = t.forwardRef(({ className: e, ...t }, l) =>
      (0, r.jsx)('div', {
        ref: l,
        className: (0, o.cn)('flex flex-col space-y-1.5 p-5', e),
        ...t
      })
    );
    n.displayName = 'CardHeader';
    let a = t.forwardRef(({ className: e, ...t }, l) =>
      (0, r.jsx)('h3', {
        ref: l,
        className: (0, o.cn)('font-semibold leading-none', e),
        ...t
      })
    );
    a.displayName = 'CardTitle';
    let i = t.forwardRef(({ className: e, ...t }, l) =>
      (0, r.jsx)('p', {
        ref: l,
        className: (0, o.cn)('text-sm text-muted-foreground', e),
        ...t
      })
    );
    i.displayName = 'CardDescription';
    let s = t.forwardRef(({ className: e, ...t }, l) =>
      (0, r.jsx)('div', { ref: l, className: (0, o.cn)('p-5 pt-0', e), ...t })
    );
    s.displayName = 'CardContent';
    let c = t.forwardRef(({ className: e, ...t }, l) =>
      (0, r.jsx)('div', {
        ref: l,
        className: (0, o.cn)('flex items-center p-5 pt-0', e),
        ...t
      })
    );
    (c.displayName = 'CardFooter'),
      e.s([
        'Card',
        0,
        l,
        'CardContent',
        0,
        s,
        'CardDescription',
        0,
        i,
        'CardFooter',
        0,
        c,
        'CardHeader',
        0,
        n,
        'CardTitle',
        0,
        a
      ]);
  },
  27069,
  (e) => {
    'use strict';
    e.s([
      'clamp',
      0,
      function (e, [r, t]) {
        return Math.min(t, Math.max(r, e));
      }
    ]);
  },
  59684,
  (e) => {
    'use strict';
    var r = e.i(29971),
      t = e.i(22034),
      o = e.i(20255),
      l = e.i(24575),
      n = e.i(2501),
      a = e.i(6633),
      i = e.i(50312),
      s = e.i(78873),
      c = e.i(36628),
      d = e.i(27069),
      u = e.i(91967),
      f = 'ScrollArea',
      [p, h] = (0, n.createContextScope)(f),
      [v, m] = p(f),
      w = t.forwardRef((e, l) => {
        let {
            __scopeScrollArea: n,
            type: i = 'hover',
            dir: c,
            scrollHideDelay: d = 600,
            ...u
          } = e,
          [f, p] = t.useState(null),
          [h, m] = t.useState(null),
          [w, x] = t.useState(null),
          [b, g] = t.useState(null),
          [C, S] = t.useState(null),
          [y, R] = t.useState(0),
          [j, E] = t.useState(0),
          [N, T] = t.useState(!1),
          [P, L] = t.useState(!1),
          A = (0, a.useComposedRefs)(l, (e) => p(e)),
          D = (0, s.useDirection)(c);
        return (0, r.jsx)(v, {
          scope: n,
          type: i,
          dir: D,
          scrollHideDelay: d,
          scrollArea: f,
          viewport: h,
          onViewportChange: m,
          content: w,
          onContentChange: x,
          scrollbarX: b,
          onScrollbarXChange: g,
          scrollbarXEnabled: N,
          onScrollbarXEnabledChange: T,
          scrollbarY: C,
          onScrollbarYChange: S,
          scrollbarYEnabled: P,
          onScrollbarYEnabledChange: L,
          onCornerWidthChange: R,
          onCornerHeightChange: E,
          children: (0, r.jsx)(o.Primitive.div, {
            dir: D,
            ...u,
            ref: A,
            style: {
              position: 'relative',
              '--radix-scroll-area-corner-width': y + 'px',
              '--radix-scroll-area-corner-height': j + 'px',
              ...e.style
            }
          })
        });
      });
    w.displayName = f;
    var x = 'ScrollAreaViewport',
      b = t.forwardRef((e, l) => {
        let { __scopeScrollArea: n, children: i, nonce: s, ...c } = e,
          d = m(x, n),
          u = t.useRef(null),
          f = (0, a.useComposedRefs)(l, u, d.onViewportChange);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)('style', {
              dangerouslySetInnerHTML: {
                __html:
                  '[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}'
              },
              nonce: s
            }),
            (0, r.jsx)(o.Primitive.div, {
              'data-radix-scroll-area-viewport': '',
              ...c,
              ref: f,
              style: {
                overflowX: d.scrollbarXEnabled ? 'scroll' : 'hidden',
                overflowY: d.scrollbarYEnabled ? 'scroll' : 'hidden',
                ...e.style
              },
              children: (0, r.jsx)('div', {
                ref: d.onContentChange,
                style: { minWidth: '100%', display: 'table' },
                children: i
              })
            })
          ]
        });
      });
    b.displayName = x;
    var g = 'ScrollAreaScrollbar',
      C = t.forwardRef((e, o) => {
        let { forceMount: l, ...n } = e,
          a = m(g, e.__scopeScrollArea),
          { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = a,
          c = 'horizontal' === e.orientation;
        return (
          t.useEffect(
            () => (
              c ? i(!0) : s(!0),
              () => {
                c ? i(!1) : s(!1);
              }
            ),
            [c, i, s]
          ),
          'hover' === a.type
            ? (0, r.jsx)(S, { ...n, ref: o, forceMount: l })
            : 'scroll' === a.type
              ? (0, r.jsx)(y, { ...n, ref: o, forceMount: l })
              : 'auto' === a.type
                ? (0, r.jsx)(R, { ...n, ref: o, forceMount: l })
                : 'always' === a.type
                  ? (0, r.jsx)(j, { ...n, ref: o })
                  : null
        );
      });
    C.displayName = g;
    var S = t.forwardRef((e, o) => {
        let { forceMount: n, ...a } = e,
          i = m(g, e.__scopeScrollArea),
          [s, c] = t.useState(!1);
        return (
          t.useEffect(() => {
            let e = i.scrollArea,
              r = 0;
            if (e) {
              let t = () => {
                  window.clearTimeout(r), c(!0);
                },
                o = () => {
                  r = window.setTimeout(() => c(!1), i.scrollHideDelay);
                };
              return (
                e.addEventListener('pointerenter', t),
                e.addEventListener('pointerleave', o),
                () => {
                  window.clearTimeout(r),
                    e.removeEventListener('pointerenter', t),
                    e.removeEventListener('pointerleave', o);
                }
              );
            }
          }, [i.scrollArea, i.scrollHideDelay]),
          (0, r.jsx)(l.Presence, {
            present: n || s,
            children: (0, r.jsx)(R, {
              'data-state': s ? 'visible' : 'hidden',
              ...a,
              ref: o
            })
          })
        );
      }),
      y = t.forwardRef((e, o) => {
        var n;
        let { forceMount: a, ...i } = e,
          s = m(g, e.__scopeScrollArea),
          c = 'horizontal' === e.orientation,
          d = B(() => p('SCROLL_END'), 100),
          [f, p] =
            ((n = {
              hidden: { SCROLL: 'scrolling' },
              scrolling: { SCROLL_END: 'idle', POINTER_ENTER: 'interacting' },
              interacting: { SCROLL: 'interacting', POINTER_LEAVE: 'idle' },
              idle: {
                HIDE: 'hidden',
                SCROLL: 'scrolling',
                POINTER_ENTER: 'interacting'
              }
            }),
            t.useReducer((e, r) => n[e][r] ?? e, 'hidden'));
        return (
          t.useEffect(() => {
            if ('idle' === f) {
              let e = window.setTimeout(() => p('HIDE'), s.scrollHideDelay);
              return () => window.clearTimeout(e);
            }
          }, [f, s.scrollHideDelay, p]),
          t.useEffect(() => {
            let e = s.viewport,
              r = c ? 'scrollLeft' : 'scrollTop';
            if (e) {
              let t = e[r],
                o = () => {
                  let o = e[r];
                  t !== o && (p('SCROLL'), d()), (t = o);
                };
              return (
                e.addEventListener('scroll', o),
                () => e.removeEventListener('scroll', o)
              );
            }
          }, [s.viewport, c, p, d]),
          (0, r.jsx)(l.Presence, {
            present: a || 'hidden' !== f,
            children: (0, r.jsx)(j, {
              'data-state': 'hidden' === f ? 'hidden' : 'visible',
              ...i,
              ref: o,
              onPointerEnter: (0, u.composeEventHandlers)(
                e.onPointerEnter,
                () => p('POINTER_ENTER')
              ),
              onPointerLeave: (0, u.composeEventHandlers)(
                e.onPointerLeave,
                () => p('POINTER_LEAVE')
              )
            })
          })
        );
      }),
      R = t.forwardRef((e, o) => {
        let n = m(g, e.__scopeScrollArea),
          { forceMount: a, ...i } = e,
          [s, c] = t.useState(!1),
          d = 'horizontal' === e.orientation,
          u = B(() => {
            if (n.viewport) {
              let e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                r = n.viewport.offsetHeight < n.viewport.scrollHeight;
              c(d ? e : r);
            }
          }, 10);
        return (
          F(n.viewport, u),
          F(n.content, u),
          (0, r.jsx)(l.Presence, {
            present: a || s,
            children: (0, r.jsx)(j, {
              'data-state': s ? 'visible' : 'hidden',
              ...i,
              ref: o
            })
          })
        );
      }),
      j = t.forwardRef((e, o) => {
        let { orientation: l = 'vertical', ...n } = e,
          a = m(g, e.__scopeScrollArea),
          i = t.useRef(null),
          s = t.useRef(0),
          [c, d] = t.useState({
            content: 0,
            viewport: 0,
            scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
          }),
          u = I(c.viewport, c.content),
          f = {
            ...n,
            sizes: c,
            onSizesChange: d,
            hasThumb: !!(u > 0 && u < 1),
            onThumbChange: (e) => (i.current = e),
            onThumbPointerUp: () => (s.current = 0),
            onThumbPointerDown: (e) => (s.current = e)
          };
        function p(e, r) {
          return (function (e, r, t, o = 'ltr') {
            let l = O(t),
              n = r || l / 2,
              a = t.scrollbar.paddingStart + n,
              i = t.scrollbar.size - t.scrollbar.paddingEnd - (l - n),
              s = t.content - t.viewport;
            return X([a, i], 'ltr' === o ? [0, s] : [-1 * s, 0])(e);
          })(e, s.current, c, r);
        }
        return 'horizontal' === l
          ? (0, r.jsx)(E, {
              ...f,
              ref: o,
              onThumbPositionChange: () => {
                if (a.viewport && i.current) {
                  let e = U(a.viewport.scrollLeft, c, a.dir);
                  i.current.style.transform = `translate3d(${e}px, 0, 0)`;
                }
              },
              onWheelScroll: (e) => {
                a.viewport && (a.viewport.scrollLeft = e);
              },
              onDragScroll: (e) => {
                a.viewport && (a.viewport.scrollLeft = p(e, a.dir));
              }
            })
          : 'vertical' === l
            ? (0, r.jsx)(N, {
                ...f,
                ref: o,
                onThumbPositionChange: () => {
                  if (a.viewport && i.current) {
                    let e = U(a.viewport.scrollTop, c);
                    i.current.style.transform = `translate3d(0, ${e}px, 0)`;
                  }
                },
                onWheelScroll: (e) => {
                  a.viewport && (a.viewport.scrollTop = e);
                },
                onDragScroll: (e) => {
                  a.viewport && (a.viewport.scrollTop = p(e));
                }
              })
            : null;
      }),
      E = t.forwardRef((e, o) => {
        let { sizes: l, onSizesChange: n, ...i } = e,
          s = m(g, e.__scopeScrollArea),
          [c, d] = t.useState(),
          u = t.useRef(null),
          f = (0, a.useComposedRefs)(o, u, s.onScrollbarXChange);
        return (
          t.useEffect(() => {
            u.current && d(getComputedStyle(u.current));
          }, [u]),
          (0, r.jsx)(L, {
            'data-orientation': 'horizontal',
            ...i,
            ref: f,
            sizes: l,
            style: {
              bottom: 0,
              left:
                'rtl' === s.dir ? 'var(--radix-scroll-area-corner-width)' : 0,
              right:
                'ltr' === s.dir ? 'var(--radix-scroll-area-corner-width)' : 0,
              '--radix-scroll-area-thumb-width': O(l) + 'px',
              ...e.style
            },
            onThumbPointerDown: (r) => e.onThumbPointerDown(r.x),
            onDragScroll: (r) => e.onDragScroll(r.x),
            onWheelScroll: (r, t) => {
              if (s.viewport) {
                var o, l;
                let n = s.viewport.scrollLeft + r.deltaX;
                e.onWheelScroll(n),
                  (o = n),
                  (l = t),
                  o > 0 && o < l && r.preventDefault();
              }
            },
            onResize: () => {
              u.current &&
                s.viewport &&
                c &&
                n({
                  content: s.viewport.scrollWidth,
                  viewport: s.viewport.offsetWidth,
                  scrollbar: {
                    size: u.current.clientWidth,
                    paddingStart: W(c.paddingLeft),
                    paddingEnd: W(c.paddingRight)
                  }
                });
            }
          })
        );
      }),
      N = t.forwardRef((e, o) => {
        let { sizes: l, onSizesChange: n, ...i } = e,
          s = m(g, e.__scopeScrollArea),
          [c, d] = t.useState(),
          u = t.useRef(null),
          f = (0, a.useComposedRefs)(o, u, s.onScrollbarYChange);
        return (
          t.useEffect(() => {
            u.current && d(getComputedStyle(u.current));
          }, [u]),
          (0, r.jsx)(L, {
            'data-orientation': 'vertical',
            ...i,
            ref: f,
            sizes: l,
            style: {
              top: 0,
              right: 'ltr' === s.dir ? 0 : void 0,
              left: 'rtl' === s.dir ? 0 : void 0,
              bottom: 'var(--radix-scroll-area-corner-height)',
              '--radix-scroll-area-thumb-height': O(l) + 'px',
              ...e.style
            },
            onThumbPointerDown: (r) => e.onThumbPointerDown(r.y),
            onDragScroll: (r) => e.onDragScroll(r.y),
            onWheelScroll: (r, t) => {
              if (s.viewport) {
                var o, l;
                let n = s.viewport.scrollTop + r.deltaY;
                e.onWheelScroll(n),
                  (o = n),
                  (l = t),
                  o > 0 && o < l && r.preventDefault();
              }
            },
            onResize: () => {
              u.current &&
                s.viewport &&
                c &&
                n({
                  content: s.viewport.scrollHeight,
                  viewport: s.viewport.offsetHeight,
                  scrollbar: {
                    size: u.current.clientHeight,
                    paddingStart: W(c.paddingTop),
                    paddingEnd: W(c.paddingBottom)
                  }
                });
            }
          })
        );
      }),
      [T, P] = p(g),
      L = t.forwardRef((e, l) => {
        let {
            __scopeScrollArea: n,
            sizes: s,
            hasThumb: c,
            onThumbChange: d,
            onThumbPointerUp: f,
            onThumbPointerDown: p,
            onThumbPositionChange: h,
            onDragScroll: v,
            onWheelScroll: w,
            onResize: x,
            ...b
          } = e,
          C = m(g, n),
          [S, y] = t.useState(null),
          R = (0, a.useComposedRefs)(l, (e) => y(e)),
          j = t.useRef(null),
          E = t.useRef(''),
          N = C.viewport,
          P = s.content - s.viewport,
          L = (0, i.useCallbackRef)(w),
          A = (0, i.useCallbackRef)(h),
          D = B(x, 10);
        function _(e) {
          j.current &&
            v({ x: e.clientX - j.current.left, y: e.clientY - j.current.top });
        }
        return (
          t.useEffect(() => {
            let e = (e) => {
              let r = e.target;
              S?.contains(r) && L(e, P);
            };
            return (
              document.addEventListener('wheel', e, { passive: !1 }),
              () => document.removeEventListener('wheel', e, { passive: !1 })
            );
          }, [N, S, P, L]),
          t.useEffect(A, [s, A]),
          F(S, D),
          F(C.content, D),
          (0, r.jsx)(T, {
            scope: n,
            scrollbar: S,
            hasThumb: c,
            onThumbChange: (0, i.useCallbackRef)(d),
            onThumbPointerUp: (0, i.useCallbackRef)(f),
            onThumbPositionChange: A,
            onThumbPointerDown: (0, i.useCallbackRef)(p),
            children: (0, r.jsx)(o.Primitive.div, {
              ...b,
              ref: R,
              style: { position: 'absolute', ...b.style },
              onPointerDown: (0, u.composeEventHandlers)(
                e.onPointerDown,
                (e) => {
                  0 === e.button &&
                    (e.target.setPointerCapture(e.pointerId),
                    (j.current = S.getBoundingClientRect()),
                    (E.current = document.body.style.webkitUserSelect),
                    (document.body.style.webkitUserSelect = 'none'),
                    C.viewport && (C.viewport.style.scrollBehavior = 'auto'),
                    _(e));
                }
              ),
              onPointerMove: (0, u.composeEventHandlers)(e.onPointerMove, _),
              onPointerUp: (0, u.composeEventHandlers)(e.onPointerUp, (e) => {
                let r = e.target;
                r.hasPointerCapture(e.pointerId) &&
                  r.releasePointerCapture(e.pointerId),
                  (document.body.style.webkitUserSelect = E.current),
                  C.viewport && (C.viewport.style.scrollBehavior = ''),
                  (j.current = null);
              })
            })
          })
        );
      }),
      A = 'ScrollAreaThumb',
      D = t.forwardRef((e, t) => {
        let { forceMount: o, ...n } = e,
          a = P(A, e.__scopeScrollArea);
        return (0, r.jsx)(l.Presence, {
          present: o || a.hasThumb,
          children: (0, r.jsx)(_, { ref: t, ...n })
        });
      }),
      _ = t.forwardRef((e, l) => {
        let { __scopeScrollArea: n, style: i, ...s } = e,
          c = m(A, n),
          d = P(A, n),
          { onThumbPositionChange: f } = d,
          p = (0, a.useComposedRefs)(l, (e) => d.onThumbChange(e)),
          h = t.useRef(void 0),
          v = B(() => {
            h.current && (h.current(), (h.current = void 0));
          }, 100);
        return (
          t.useEffect(() => {
            let e = c.viewport;
            if (e) {
              let r = () => {
                v(), h.current || ((h.current = Y(e, f)), f());
              };
              return (
                f(),
                e.addEventListener('scroll', r),
                () => e.removeEventListener('scroll', r)
              );
            }
          }, [c.viewport, v, f]),
          (0, r.jsx)(o.Primitive.div, {
            'data-state': d.hasThumb ? 'visible' : 'hidden',
            ...s,
            ref: p,
            style: {
              width: 'var(--radix-scroll-area-thumb-width)',
              height: 'var(--radix-scroll-area-thumb-height)',
              ...i
            },
            onPointerDownCapture: (0, u.composeEventHandlers)(
              e.onPointerDownCapture,
              (e) => {
                let r = e.target.getBoundingClientRect(),
                  t = e.clientX - r.left,
                  o = e.clientY - r.top;
                d.onThumbPointerDown({ x: t, y: o });
              }
            ),
            onPointerUp: (0, u.composeEventHandlers)(
              e.onPointerUp,
              d.onThumbPointerUp
            )
          })
        );
      });
    D.displayName = A;
    var H = 'ScrollAreaCorner',
      k = t.forwardRef((e, t) => {
        let o = m(H, e.__scopeScrollArea),
          l = !!(o.scrollbarX && o.scrollbarY);
        return 'scroll' !== o.type && l
          ? (0, r.jsx)(z, { ...e, ref: t })
          : null;
      });
    k.displayName = H;
    var z = t.forwardRef((e, l) => {
      let { __scopeScrollArea: n, ...a } = e,
        i = m(H, n),
        [s, c] = t.useState(0),
        [d, u] = t.useState(0),
        f = !!(s && d);
      return (
        F(i.scrollbarX, () => {
          let e = i.scrollbarX?.offsetHeight || 0;
          i.onCornerHeightChange(e), u(e);
        }),
        F(i.scrollbarY, () => {
          let e = i.scrollbarY?.offsetWidth || 0;
          i.onCornerWidthChange(e), c(e);
        }),
        f
          ? (0, r.jsx)(o.Primitive.div, {
              ...a,
              ref: l,
              style: {
                width: s,
                height: d,
                position: 'absolute',
                right: 'ltr' === i.dir ? 0 : void 0,
                left: 'rtl' === i.dir ? 0 : void 0,
                bottom: 0,
                ...e.style
              }
            })
          : null
      );
    });
    function W(e) {
      return e ? parseInt(e, 10) : 0;
    }
    function I(e, r) {
      let t = e / r;
      return isNaN(t) ? 0 : t;
    }
    function O(e) {
      let r = I(e.viewport, e.content),
        t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
      return Math.max((e.scrollbar.size - t) * r, 18);
    }
    function U(e, r, t = 'ltr') {
      let o = O(r),
        l = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
        n = r.scrollbar.size - l,
        a = r.content - r.viewport,
        i = (0, d.clamp)(e, 'ltr' === t ? [0, a] : [-1 * a, 0]);
      return X([0, a], [0, n - o])(i);
    }
    function X(e, r) {
      return (t) => {
        if (e[0] === e[1] || r[0] === r[1]) return r[0];
        let o = (r[1] - r[0]) / (e[1] - e[0]);
        return r[0] + o * (t - e[0]);
      };
    }
    var Y = (e, r = () => {}) => {
      let t = { left: e.scrollLeft, top: e.scrollTop },
        o = 0;
      return (
        !(function l() {
          let n = { left: e.scrollLeft, top: e.scrollTop },
            a = t.left !== n.left,
            i = t.top !== n.top;
          (a || i) && r(), (t = n), (o = window.requestAnimationFrame(l));
        })(),
        () => window.cancelAnimationFrame(o)
      );
    };
    function B(e, r) {
      let o = (0, i.useCallbackRef)(e),
        l = t.useRef(0);
      return (
        t.useEffect(() => () => window.clearTimeout(l.current), []),
        t.useCallback(() => {
          window.clearTimeout(l.current), (l.current = window.setTimeout(o, r));
        }, [o, r])
      );
    }
    function F(e, r) {
      let t = (0, i.useCallbackRef)(r);
      (0, c.useLayoutEffect)(() => {
        let r = 0;
        if (e) {
          let o = new ResizeObserver(() => {
            cancelAnimationFrame(r), (r = window.requestAnimationFrame(t));
          });
          return (
            o.observe(e),
            () => {
              window.cancelAnimationFrame(r), o.unobserve(e);
            }
          );
        }
      }, [e, t]);
    }
    var M = e.i(75157);
    let V = t.forwardRef(({ className: e, children: t, ...o }, l) =>
      (0, r.jsxs)(w, {
        ref: l,
        className: (0, M.cn)('relative', e),
        ...o,
        children: [
          (0, r.jsx)(b, {
            className: 'h-full w-full rounded-[inherit]',
            children: t
          }),
          (0, r.jsx)(G, {}),
          (0, r.jsx)(k, {})
        ]
      })
    );
    V.displayName = w.displayName;
    let G = t.forwardRef(
      ({ className: e, orientation: t = 'vertical', ...o }, l) =>
        (0, r.jsx)(C, {
          ref: l,
          orientation: t,
          className: (0, M.cn)(
            'flex touch-none select-none transition-colors',
            'vertical' === t &&
              'h-full w-2.5 border-l border-l-transparent p-[1px]',
            'horizontal' === t &&
              'h-2.5 flex-col border-t border-t-transparent p-[1px]',
            e
          ),
          ...o,
          children: (0, r.jsx)(D, {
            className: 'relative flex-1 rounded-full bg-border'
          })
        })
    );
    (G.displayName = C.displayName),
      e.s(['ScrollArea', 0, V, 'ScrollBar', 0, G], 59684);
  },
  35271,
  (e) => {
    'use strict';
    var r = e.i(29971),
      t = e.i(17913),
      o = e.i(22034),
      l = e.i(19455),
      n = e.i(15288);
    e.s([
      'default',
      0,
      function () {
        let [e, a] = (0, o.useState)(null),
          [i, s] = (0, o.useState)(!0),
          [c, d] = (0, o.useState)(''),
          u = (0, o.useCallback)(async () => {
            try {
              let e = await fetch('/api/account', { cache: 'no-store' });
              if (404 === e.status)
                return void d('No Grid account is attached to this session.');
              if (!e.ok) throw Error('Could not load account settings');
              a(await e.json());
            } catch (e) {
              d(
                e instanceof Error
                  ? e.message
                  : 'Could not load account settings'
              );
            } finally {
              s(!1);
            }
          }, []);
        return (
          (0, o.useEffect)(() => {
            u();
          }, [u]),
          (0, r.jsxs)('div', {
            className: 'space-y-6',
            children: [
              (0, r.jsxs)('div', {
                children: [
                  (0, r.jsx)('h1', {
                    className: 'text-3xl font-bold',
                    children: 'Settings'
                  }),
                  (0, r.jsx)('p', {
                    className: 'mt-2 text-muted-foreground',
                    children: 'Account details are provisioned by the Grid API.'
                  })
                ]
              }),
              (0, r.jsxs)(n.Card, {
                children: [
                  (0, r.jsx)(n.CardHeader, {
                    children: (0, r.jsx)(n.CardTitle, {
                      children: 'Grid Account'
                    })
                  }),
                  (0, r.jsxs)(n.CardContent, {
                    className: 'space-y-4',
                    children: [
                      i &&
                        (0, r.jsx)('p', {
                          className: 'text-sm text-muted-foreground',
                          children: 'Loading…'
                        }),
                      !i &&
                        c &&
                        (0, r.jsx)('p', {
                          className: 'text-sm text-red-500',
                          children: c
                        }),
                      !i &&
                        e &&
                        (0, r.jsxs)('div', {
                          className: 'space-y-3 text-sm',
                          children: [
                            (0, r.jsxs)('div', {
                              children: [
                                (0, r.jsx)('p', {
                                  className: 'text-muted-foreground',
                                  children: 'Account ID'
                                }),
                                (0, r.jsx)('p', {
                                  className: 'font-mono',
                                  children: e.account_id
                                })
                              ]
                            }),
                            (0, r.jsxs)('div', {
                              children: [
                                (0, r.jsx)('p', {
                                  className: 'text-muted-foreground',
                                  children: 'Username'
                                }),
                                (0, r.jsx)('p', {
                                  children: e.username ?? 'Not set'
                                })
                              ]
                            }),
                            (0, r.jsxs)('div', {
                              children: [
                                (0, r.jsx)('p', {
                                  className: 'text-muted-foreground',
                                  children: 'Wallet'
                                }),
                                (0, r.jsx)('p', {
                                  className: 'font-mono',
                                  children: e.wallet ?? 'Not linked'
                                })
                              ]
                            })
                          ]
                        }),
                      (0, r.jsxs)('div', {
                        className: 'flex flex-wrap gap-2 pt-2',
                        children: [
                          (0, r.jsx)(l.Button, {
                            asChild: !0,
                            children: (0, r.jsx)(t.default, {
                              href: '/dashboard/api-key',
                              children: 'Manage API keys'
                            })
                          }),
                          (0, r.jsx)(l.Button, {
                            asChild: !0,
                            variant: 'outline',
                            children: (0, r.jsx)(t.default, {
                              href: '/dashboard/profile',
                              children: 'Profile'
                            })
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        );
      }
    ]);
  }
]);
