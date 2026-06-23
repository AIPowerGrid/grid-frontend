(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
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
      i = e.i(6633),
      a = e.i(50312),
      s = e.i(78873),
      c = e.i(36628),
      d = e.i(27069),
      u = e.i(91967),
      p = 'ScrollArea',
      [f, h] = (0, n.createContextScope)(p),
      [v, w] = f(p),
      m = t.forwardRef((e, l) => {
        let {
            __scopeScrollArea: n,
            type: a = 'hover',
            dir: c,
            scrollHideDelay: d = 600,
            ...u
          } = e,
          [p, f] = t.useState(null),
          [h, w] = t.useState(null),
          [m, b] = t.useState(null),
          [g, S] = t.useState(null),
          [x, R] = t.useState(null),
          [C, E] = t.useState(0),
          [y, T] = t.useState(0),
          [P, L] = t.useState(!1),
          [j, D] = t.useState(!1),
          _ = (0, i.useComposedRefs)(l, (e) => f(e)),
          A = (0, s.useDirection)(c);
        return (0, r.jsx)(v, {
          scope: n,
          type: a,
          dir: A,
          scrollHideDelay: d,
          scrollArea: p,
          viewport: h,
          onViewportChange: w,
          content: m,
          onContentChange: b,
          scrollbarX: g,
          onScrollbarXChange: S,
          scrollbarXEnabled: P,
          onScrollbarXEnabledChange: L,
          scrollbarY: x,
          onScrollbarYChange: R,
          scrollbarYEnabled: j,
          onScrollbarYEnabledChange: D,
          onCornerWidthChange: E,
          onCornerHeightChange: T,
          children: (0, r.jsx)(o.Primitive.div, {
            dir: A,
            ...u,
            ref: _,
            style: {
              position: 'relative',
              '--radix-scroll-area-corner-width': C + 'px',
              '--radix-scroll-area-corner-height': y + 'px',
              ...e.style
            }
          })
        });
      });
    m.displayName = p;
    var b = 'ScrollAreaViewport',
      g = t.forwardRef((e, l) => {
        let { __scopeScrollArea: n, children: a, nonce: s, ...c } = e,
          d = w(b, n),
          u = t.useRef(null),
          p = (0, i.useComposedRefs)(l, u, d.onViewportChange);
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
              ref: p,
              style: {
                overflowX: d.scrollbarXEnabled ? 'scroll' : 'hidden',
                overflowY: d.scrollbarYEnabled ? 'scroll' : 'hidden',
                ...e.style
              },
              children: (0, r.jsx)('div', {
                ref: d.onContentChange,
                style: { minWidth: '100%', display: 'table' },
                children: a
              })
            })
          ]
        });
      });
    g.displayName = b;
    var S = 'ScrollAreaScrollbar',
      x = t.forwardRef((e, o) => {
        let { forceMount: l, ...n } = e,
          i = w(S, e.__scopeScrollArea),
          { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = i,
          c = 'horizontal' === e.orientation;
        return (
          t.useEffect(
            () => (
              c ? a(!0) : s(!0),
              () => {
                c ? a(!1) : s(!1);
              }
            ),
            [c, a, s]
          ),
          'hover' === i.type
            ? (0, r.jsx)(R, { ...n, ref: o, forceMount: l })
            : 'scroll' === i.type
              ? (0, r.jsx)(C, { ...n, ref: o, forceMount: l })
              : 'auto' === i.type
                ? (0, r.jsx)(E, { ...n, ref: o, forceMount: l })
                : 'always' === i.type
                  ? (0, r.jsx)(y, { ...n, ref: o })
                  : null
        );
      });
    x.displayName = S;
    var R = t.forwardRef((e, o) => {
        let { forceMount: n, ...i } = e,
          a = w(S, e.__scopeScrollArea),
          [s, c] = t.useState(!1);
        return (
          t.useEffect(() => {
            let e = a.scrollArea,
              r = 0;
            if (e) {
              let t = () => {
                  window.clearTimeout(r), c(!0);
                },
                o = () => {
                  r = window.setTimeout(() => c(!1), a.scrollHideDelay);
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
          }, [a.scrollArea, a.scrollHideDelay]),
          (0, r.jsx)(l.Presence, {
            present: n || s,
            children: (0, r.jsx)(E, {
              'data-state': s ? 'visible' : 'hidden',
              ...i,
              ref: o
            })
          })
        );
      }),
      C = t.forwardRef((e, o) => {
        var n;
        let { forceMount: i, ...a } = e,
          s = w(S, e.__scopeScrollArea),
          c = 'horizontal' === e.orientation,
          d = B(() => f('SCROLL_END'), 100),
          [p, f] =
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
            if ('idle' === p) {
              let e = window.setTimeout(() => f('HIDE'), s.scrollHideDelay);
              return () => window.clearTimeout(e);
            }
          }, [p, s.scrollHideDelay, f]),
          t.useEffect(() => {
            let e = s.viewport,
              r = c ? 'scrollLeft' : 'scrollTop';
            if (e) {
              let t = e[r],
                o = () => {
                  let o = e[r];
                  t !== o && (f('SCROLL'), d()), (t = o);
                };
              return (
                e.addEventListener('scroll', o),
                () => e.removeEventListener('scroll', o)
              );
            }
          }, [s.viewport, c, f, d]),
          (0, r.jsx)(l.Presence, {
            present: i || 'hidden' !== p,
            children: (0, r.jsx)(y, {
              'data-state': 'hidden' === p ? 'hidden' : 'visible',
              ...a,
              ref: o,
              onPointerEnter: (0, u.composeEventHandlers)(
                e.onPointerEnter,
                () => f('POINTER_ENTER')
              ),
              onPointerLeave: (0, u.composeEventHandlers)(
                e.onPointerLeave,
                () => f('POINTER_LEAVE')
              )
            })
          })
        );
      }),
      E = t.forwardRef((e, o) => {
        let n = w(S, e.__scopeScrollArea),
          { forceMount: i, ...a } = e,
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
            present: i || s,
            children: (0, r.jsx)(y, {
              'data-state': s ? 'visible' : 'hidden',
              ...a,
              ref: o
            })
          })
        );
      }),
      y = t.forwardRef((e, o) => {
        let { orientation: l = 'vertical', ...n } = e,
          i = w(S, e.__scopeScrollArea),
          a = t.useRef(null),
          s = t.useRef(0),
          [c, d] = t.useState({
            content: 0,
            viewport: 0,
            scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
          }),
          u = k(c.viewport, c.content),
          p = {
            ...n,
            sizes: c,
            onSizesChange: d,
            hasThumb: !!(u > 0 && u < 1),
            onThumbChange: (e) => (a.current = e),
            onThumbPointerUp: () => (s.current = 0),
            onThumbPointerDown: (e) => (s.current = e)
          };
        function f(e, r) {
          return (function (e, r, t, o = 'ltr') {
            let l = I(t),
              n = r || l / 2,
              i = t.scrollbar.paddingStart + n,
              a = t.scrollbar.size - t.scrollbar.paddingEnd - (l - n),
              s = t.content - t.viewport;
            return X([i, a], 'ltr' === o ? [0, s] : [-1 * s, 0])(e);
          })(e, s.current, c, r);
        }
        return 'horizontal' === l
          ? (0, r.jsx)(T, {
              ...p,
              ref: o,
              onThumbPositionChange: () => {
                if (i.viewport && a.current) {
                  let e = U(i.viewport.scrollLeft, c, i.dir);
                  a.current.style.transform = `translate3d(${e}px, 0, 0)`;
                }
              },
              onWheelScroll: (e) => {
                i.viewport && (i.viewport.scrollLeft = e);
              },
              onDragScroll: (e) => {
                i.viewport && (i.viewport.scrollLeft = f(e, i.dir));
              }
            })
          : 'vertical' === l
            ? (0, r.jsx)(P, {
                ...p,
                ref: o,
                onThumbPositionChange: () => {
                  if (i.viewport && a.current) {
                    let e = U(i.viewport.scrollTop, c);
                    a.current.style.transform = `translate3d(0, ${e}px, 0)`;
                  }
                },
                onWheelScroll: (e) => {
                  i.viewport && (i.viewport.scrollTop = e);
                },
                onDragScroll: (e) => {
                  i.viewport && (i.viewport.scrollTop = f(e));
                }
              })
            : null;
      }),
      T = t.forwardRef((e, o) => {
        let { sizes: l, onSizesChange: n, ...a } = e,
          s = w(S, e.__scopeScrollArea),
          [c, d] = t.useState(),
          u = t.useRef(null),
          p = (0, i.useComposedRefs)(o, u, s.onScrollbarXChange);
        return (
          t.useEffect(() => {
            u.current && d(getComputedStyle(u.current));
          }, [u]),
          (0, r.jsx)(D, {
            'data-orientation': 'horizontal',
            ...a,
            ref: p,
            sizes: l,
            style: {
              bottom: 0,
              left:
                'rtl' === s.dir ? 'var(--radix-scroll-area-corner-width)' : 0,
              right:
                'ltr' === s.dir ? 'var(--radix-scroll-area-corner-width)' : 0,
              '--radix-scroll-area-thumb-width': I(l) + 'px',
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
                    paddingStart: O(c.paddingLeft),
                    paddingEnd: O(c.paddingRight)
                  }
                });
            }
          })
        );
      }),
      P = t.forwardRef((e, o) => {
        let { sizes: l, onSizesChange: n, ...a } = e,
          s = w(S, e.__scopeScrollArea),
          [c, d] = t.useState(),
          u = t.useRef(null),
          p = (0, i.useComposedRefs)(o, u, s.onScrollbarYChange);
        return (
          t.useEffect(() => {
            u.current && d(getComputedStyle(u.current));
          }, [u]),
          (0, r.jsx)(D, {
            'data-orientation': 'vertical',
            ...a,
            ref: p,
            sizes: l,
            style: {
              top: 0,
              right: 'ltr' === s.dir ? 0 : void 0,
              left: 'rtl' === s.dir ? 0 : void 0,
              bottom: 'var(--radix-scroll-area-corner-height)',
              '--radix-scroll-area-thumb-height': I(l) + 'px',
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
                    paddingStart: O(c.paddingTop),
                    paddingEnd: O(c.paddingBottom)
                  }
                });
            }
          })
        );
      }),
      [L, j] = f(S),
      D = t.forwardRef((e, l) => {
        let {
            __scopeScrollArea: n,
            sizes: s,
            hasThumb: c,
            onThumbChange: d,
            onThumbPointerUp: p,
            onThumbPointerDown: f,
            onThumbPositionChange: h,
            onDragScroll: v,
            onWheelScroll: m,
            onResize: b,
            ...g
          } = e,
          x = w(S, n),
          [R, C] = t.useState(null),
          E = (0, i.useComposedRefs)(l, (e) => C(e)),
          y = t.useRef(null),
          T = t.useRef(''),
          P = x.viewport,
          j = s.content - s.viewport,
          D = (0, a.useCallbackRef)(m),
          _ = (0, a.useCallbackRef)(h),
          A = B(b, 10);
        function N(e) {
          y.current &&
            v({ x: e.clientX - y.current.left, y: e.clientY - y.current.top });
        }
        return (
          t.useEffect(() => {
            let e = (e) => {
              let r = e.target;
              R?.contains(r) && D(e, j);
            };
            return (
              document.addEventListener('wheel', e, { passive: !1 }),
              () => document.removeEventListener('wheel', e, { passive: !1 })
            );
          }, [P, R, j, D]),
          t.useEffect(_, [s, _]),
          F(R, A),
          F(x.content, A),
          (0, r.jsx)(L, {
            scope: n,
            scrollbar: R,
            hasThumb: c,
            onThumbChange: (0, a.useCallbackRef)(d),
            onThumbPointerUp: (0, a.useCallbackRef)(p),
            onThumbPositionChange: _,
            onThumbPointerDown: (0, a.useCallbackRef)(f),
            children: (0, r.jsx)(o.Primitive.div, {
              ...g,
              ref: E,
              style: { position: 'absolute', ...g.style },
              onPointerDown: (0, u.composeEventHandlers)(
                e.onPointerDown,
                (e) => {
                  0 === e.button &&
                    (e.target.setPointerCapture(e.pointerId),
                    (y.current = R.getBoundingClientRect()),
                    (T.current = document.body.style.webkitUserSelect),
                    (document.body.style.webkitUserSelect = 'none'),
                    x.viewport && (x.viewport.style.scrollBehavior = 'auto'),
                    N(e));
                }
              ),
              onPointerMove: (0, u.composeEventHandlers)(e.onPointerMove, N),
              onPointerUp: (0, u.composeEventHandlers)(e.onPointerUp, (e) => {
                let r = e.target;
                r.hasPointerCapture(e.pointerId) &&
                  r.releasePointerCapture(e.pointerId),
                  (document.body.style.webkitUserSelect = T.current),
                  x.viewport && (x.viewport.style.scrollBehavior = ''),
                  (y.current = null);
              })
            })
          })
        );
      }),
      _ = 'ScrollAreaThumb',
      A = t.forwardRef((e, t) => {
        let { forceMount: o, ...n } = e,
          i = j(_, e.__scopeScrollArea);
        return (0, r.jsx)(l.Presence, {
          present: o || i.hasThumb,
          children: (0, r.jsx)(N, { ref: t, ...n })
        });
      }),
      N = t.forwardRef((e, l) => {
        let { __scopeScrollArea: n, style: a, ...s } = e,
          c = w(_, n),
          d = j(_, n),
          { onThumbPositionChange: p } = d,
          f = (0, i.useComposedRefs)(l, (e) => d.onThumbChange(e)),
          h = t.useRef(void 0),
          v = B(() => {
            h.current && (h.current(), (h.current = void 0));
          }, 100);
        return (
          t.useEffect(() => {
            let e = c.viewport;
            if (e) {
              let r = () => {
                v(), h.current || ((h.current = Y(e, p)), p());
              };
              return (
                p(),
                e.addEventListener('scroll', r),
                () => e.removeEventListener('scroll', r)
              );
            }
          }, [c.viewport, v, p]),
          (0, r.jsx)(o.Primitive.div, {
            'data-state': d.hasThumb ? 'visible' : 'hidden',
            ...s,
            ref: f,
            style: {
              width: 'var(--radix-scroll-area-thumb-width)',
              height: 'var(--radix-scroll-area-thumb-height)',
              ...a
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
    A.displayName = _;
    var H = 'ScrollAreaCorner',
      z = t.forwardRef((e, t) => {
        let o = w(H, e.__scopeScrollArea),
          l = !!(o.scrollbarX && o.scrollbarY);
        return 'scroll' !== o.type && l
          ? (0, r.jsx)(W, { ...e, ref: t })
          : null;
      });
    z.displayName = H;
    var W = t.forwardRef((e, l) => {
      let { __scopeScrollArea: n, ...i } = e,
        a = w(H, n),
        [s, c] = t.useState(0),
        [d, u] = t.useState(0),
        p = !!(s && d);
      return (
        F(a.scrollbarX, () => {
          let e = a.scrollbarX?.offsetHeight || 0;
          a.onCornerHeightChange(e), u(e);
        }),
        F(a.scrollbarY, () => {
          let e = a.scrollbarY?.offsetWidth || 0;
          a.onCornerWidthChange(e), c(e);
        }),
        p
          ? (0, r.jsx)(o.Primitive.div, {
              ...i,
              ref: l,
              style: {
                width: s,
                height: d,
                position: 'absolute',
                right: 'ltr' === a.dir ? 0 : void 0,
                left: 'rtl' === a.dir ? 0 : void 0,
                bottom: 0,
                ...e.style
              }
            })
          : null
      );
    });
    function O(e) {
      return e ? parseInt(e, 10) : 0;
    }
    function k(e, r) {
      let t = e / r;
      return isNaN(t) ? 0 : t;
    }
    function I(e) {
      let r = k(e.viewport, e.content),
        t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
      return Math.max((e.scrollbar.size - t) * r, 18);
    }
    function U(e, r, t = 'ltr') {
      let o = I(r),
        l = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
        n = r.scrollbar.size - l,
        i = r.content - r.viewport,
        a = (0, d.clamp)(e, 'ltr' === t ? [0, i] : [-1 * i, 0]);
      return X([0, i], [0, n - o])(a);
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
            i = t.left !== n.left,
            a = t.top !== n.top;
          (i || a) && r(), (t = n), (o = window.requestAnimationFrame(l));
        })(),
        () => window.cancelAnimationFrame(o)
      );
    };
    function B(e, r) {
      let o = (0, a.useCallbackRef)(e),
        l = t.useRef(0);
      return (
        t.useEffect(() => () => window.clearTimeout(l.current), []),
        t.useCallback(() => {
          window.clearTimeout(l.current), (l.current = window.setTimeout(o, r));
        }, [o, r])
      );
    }
    function F(e, r) {
      let t = (0, a.useCallbackRef)(r);
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
      (0, r.jsxs)(m, {
        ref: l,
        className: (0, M.cn)('relative', e),
        ...o,
        children: [
          (0, r.jsx)(g, {
            className: 'h-full w-full rounded-[inherit]',
            children: t
          }),
          (0, r.jsx)(q, {}),
          (0, r.jsx)(z, {})
        ]
      })
    );
    V.displayName = m.displayName;
    let q = t.forwardRef(
      ({ className: e, orientation: t = 'vertical', ...o }, l) =>
        (0, r.jsx)(x, {
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
          children: (0, r.jsx)(A, {
            className: 'relative flex-1 rounded-full bg-border'
          })
        })
    );
    (q.displayName = x.displayName),
      e.s(['ScrollArea', 0, V, 'ScrollBar', 0, q], 59684);
  }
]);
