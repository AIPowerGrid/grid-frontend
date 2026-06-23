(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  60111,
  (e) => {
    'use strict';
    var t = e.i(22034);
    e.i(50560);
    var n = e.i(23824),
      r = e.i(29971),
      o = [
        'a',
        'button',
        'div',
        'form',
        'h2',
        'h3',
        'img',
        'input',
        'label',
        'li',
        'nav',
        'ol',
        'p',
        'select',
        'span',
        'svg',
        'ul'
      ].reduce((e, o) => {
        let i = (0, n.createSlot)(`Primitive.${o}`),
          a = t.forwardRef((e, t) => {
            let { asChild: n, ...a } = e;
            return (
              'u' > typeof window && (window[Symbol.for('radix-ui')] = !0),
              (0, r.jsx)(n ? i : o, { ...a, ref: t })
            );
          });
        return (a.displayName = `Primitive.${o}`), { ...e, [o]: a };
      }, {});
    e.s(['Primitive', 0, o]);
  },
  30396,
  (e) => {
    'use strict';
    var t = e.i(22034),
      n = e.i(91967),
      r = e.i(2501),
      o = e.i(40776),
      i = e.i(36628),
      a = e.i(6633),
      l = e.i(20255),
      c = e.i(24575),
      s = e.i(93107),
      u = e.i(29971),
      f = 'Collapsible',
      [d, p] = (0, r.createContextScope)(f),
      [h, m] = d(f),
      v = t.forwardRef((e, n) => {
        let {
            __scopeCollapsible: r,
            open: i,
            defaultOpen: a,
            disabled: c,
            onOpenChange: d,
            ...p
          } = e,
          [m, v] = (0, o.useControllableState)({
            prop: i,
            defaultProp: a ?? !1,
            onChange: d,
            caller: f
          });
        return (0, u.jsx)(h, {
          scope: r,
          disabled: c,
          contentId: (0, s.useId)(),
          open: m,
          onOpenToggle: t.useCallback(() => v((e) => !e), [v]),
          children: (0, u.jsx)(l.Primitive.div, {
            'data-state': x(m),
            'data-disabled': c ? '' : void 0,
            ...p,
            ref: n
          })
        });
      });
    v.displayName = f;
    var g = 'CollapsibleTrigger',
      w = t.forwardRef((e, t) => {
        let { __scopeCollapsible: r, ...o } = e,
          i = m(g, r);
        return (0, u.jsx)(l.Primitive.button, {
          type: 'button',
          'aria-controls': i.contentId,
          'aria-expanded': i.open || !1,
          'data-state': x(i.open),
          'data-disabled': i.disabled ? '' : void 0,
          disabled: i.disabled,
          ...o,
          ref: t,
          onClick: (0, n.composeEventHandlers)(e.onClick, i.onOpenToggle)
        });
      });
    w.displayName = g;
    var y = 'CollapsibleContent',
      C = t.forwardRef((e, t) => {
        let { forceMount: n, ...r } = e,
          o = m(y, e.__scopeCollapsible);
        return (0, u.jsx)(c.Presence, {
          present: n || o.open,
          children: ({ present: e }) =>
            (0, u.jsx)(b, { ...r, ref: t, present: e })
        });
      });
    C.displayName = y;
    var b = t.forwardRef((e, n) => {
      let { __scopeCollapsible: r, present: o, children: c, ...s } = e,
        f = m(y, r),
        [d, p] = t.useState(o),
        h = t.useRef(null),
        v = (0, a.useComposedRefs)(n, h),
        g = t.useRef(0),
        w = g.current,
        C = t.useRef(0),
        b = C.current,
        E = f.open || d,
        L = t.useRef(E),
        R = t.useRef(void 0);
      return (
        t.useEffect(() => {
          let e = requestAnimationFrame(() => (L.current = !1));
          return () => cancelAnimationFrame(e);
        }, []),
        (0, i.useLayoutEffect)(() => {
          let e = h.current;
          if (e) {
            (R.current = R.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }),
              (e.style.transitionDuration = '0s'),
              (e.style.animationName = 'none');
            let t = e.getBoundingClientRect();
            (g.current = t.height),
              (C.current = t.width),
              L.current ||
                ((e.style.transitionDuration = R.current.transitionDuration),
                (e.style.animationName = R.current.animationName)),
              p(o);
          }
        }, [f.open, o]),
        (0, u.jsx)(l.Primitive.div, {
          'data-state': x(f.open),
          'data-disabled': f.disabled ? '' : void 0,
          id: f.contentId,
          hidden: !E,
          ...s,
          ref: v,
          style: {
            '--radix-collapsible-content-height': w ? `${w}px` : void 0,
            '--radix-collapsible-content-width': b ? `${b}px` : void 0,
            ...e.style
          },
          children: E && c
        })
      );
    });
    function x(e) {
      return e ? 'open' : 'closed';
    }
    e.s([
      'CollapsibleContent',
      0,
      C,
      'CollapsibleTrigger',
      0,
      w,
      'Content',
      0,
      C,
      'Root',
      0,
      v,
      'Trigger',
      0,
      w,
      'createCollapsibleScope',
      0,
      p
    ]);
  },
  42174,
  (e) => {
    'use strict';
    var t,
      n = e.i(22034),
      r = e.i(91967),
      o = e.i(20255),
      i = e.i(6633),
      a = e.i(50312),
      l = e.i(29971),
      c = 'dismissableLayer.update',
      s = n.createContext({
        layers: new Set(),
        layersWithOutsidePointerEventsDisabled: new Set(),
        branches: new Set()
      }),
      u = n.forwardRef((e, u) => {
        let {
            disableOutsidePointerEvents: p = !1,
            onEscapeKeyDown: h,
            onPointerDownOutside: m,
            onFocusOutside: v,
            onInteractOutside: g,
            onDismiss: w,
            ...y
          } = e,
          C = n.useContext(s),
          [b, x] = n.useState(null),
          E = b?.ownerDocument ?? globalThis?.document,
          [, L] = n.useState({}),
          R = (0, i.useComposedRefs)(u, (e) => x(e)),
          S = Array.from(C.layers),
          [A] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
          P = S.indexOf(A),
          O = b ? S.indexOf(b) : -1,
          T = C.layersWithOutsidePointerEventsDisabled.size > 0,
          M = O >= P,
          k = (function (e, t = globalThis?.document) {
            let r = (0, a.useCallbackRef)(e),
              o = n.useRef(!1),
              i = n.useRef(() => {});
            return (
              n.useEffect(() => {
                let e = (e) => {
                    if (e.target && !o.current) {
                      let n = function () {
                          d('dismissableLayer.pointerDownOutside', r, o, {
                            discrete: !0
                          });
                        },
                        o = { originalEvent: e };
                      'touch' === e.pointerType
                        ? (t.removeEventListener('click', i.current),
                          (i.current = n),
                          t.addEventListener('click', i.current, { once: !0 }))
                        : n();
                    } else t.removeEventListener('click', i.current);
                    o.current = !1;
                  },
                  n = window.setTimeout(() => {
                    t.addEventListener('pointerdown', e);
                  }, 0);
                return () => {
                  window.clearTimeout(n),
                    t.removeEventListener('pointerdown', e),
                    t.removeEventListener('click', i.current);
                };
              }, [t, r]),
              { onPointerDownCapture: () => (o.current = !0) }
            );
          })((e) => {
            let t = e.target,
              n = [...C.branches].some((e) => e.contains(t));
            M && !n && (m?.(e), g?.(e), e.defaultPrevented || w?.());
          }, E),
          N = (function (e, t = globalThis?.document) {
            let r = (0, a.useCallbackRef)(e),
              o = n.useRef(!1);
            return (
              n.useEffect(() => {
                let e = (e) => {
                  e.target &&
                    !o.current &&
                    d(
                      'dismissableLayer.focusOutside',
                      r,
                      { originalEvent: e },
                      { discrete: !1 }
                    );
                };
                return (
                  t.addEventListener('focusin', e),
                  () => t.removeEventListener('focusin', e)
                );
              }, [t, r]),
              {
                onFocusCapture: () => (o.current = !0),
                onBlurCapture: () => (o.current = !1)
              }
            );
          })((e) => {
            let t = e.target;
            ![...C.branches].some((e) => e.contains(t)) &&
              (v?.(e), g?.(e), e.defaultPrevented || w?.());
          }, E);
        return (
          !(function (e, t = globalThis?.document) {
            let r = (0, a.useCallbackRef)(e);
            n.useEffect(() => {
              let e = (e) => {
                'Escape' === e.key && r(e);
              };
              return (
                t.addEventListener('keydown', e, { capture: !0 }),
                () => t.removeEventListener('keydown', e, { capture: !0 })
              );
            }, [r, t]);
          })((e) => {
            O === C.layers.size - 1 &&
              (h?.(e), !e.defaultPrevented && w && (e.preventDefault(), w()));
          }, E),
          n.useEffect(() => {
            if (b)
              return (
                p &&
                  (0 === C.layersWithOutsidePointerEventsDisabled.size &&
                    ((t = E.body.style.pointerEvents),
                    (E.body.style.pointerEvents = 'none')),
                  C.layersWithOutsidePointerEventsDisabled.add(b)),
                C.layers.add(b),
                f(),
                () => {
                  p &&
                    1 === C.layersWithOutsidePointerEventsDisabled.size &&
                    (E.body.style.pointerEvents = t);
                }
              );
          }, [b, E, p, C]),
          n.useEffect(
            () => () => {
              b &&
                (C.layers.delete(b),
                C.layersWithOutsidePointerEventsDisabled.delete(b),
                f());
            },
            [b, C]
          ),
          n.useEffect(() => {
            let e = () => L({});
            return (
              document.addEventListener(c, e),
              () => document.removeEventListener(c, e)
            );
          }, []),
          (0, l.jsx)(o.Primitive.div, {
            ...y,
            ref: R,
            style: {
              pointerEvents: T ? (M ? 'auto' : 'none') : void 0,
              ...e.style
            },
            onFocusCapture: (0, r.composeEventHandlers)(
              e.onFocusCapture,
              N.onFocusCapture
            ),
            onBlurCapture: (0, r.composeEventHandlers)(
              e.onBlurCapture,
              N.onBlurCapture
            ),
            onPointerDownCapture: (0, r.composeEventHandlers)(
              e.onPointerDownCapture,
              k.onPointerDownCapture
            )
          })
        );
      });
    function f() {
      let e = new CustomEvent(c);
      document.dispatchEvent(e);
    }
    function d(e, t, n, { discrete: r }) {
      let i = n.originalEvent.target,
        a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
      t && i.addEventListener(e, t, { once: !0 }),
        r ? (0, o.dispatchDiscreteCustomEvent)(i, a) : i.dispatchEvent(a);
    }
    (u.displayName = 'DismissableLayer'),
      (n.forwardRef((e, t) => {
        let r = n.useContext(s),
          a = n.useRef(null),
          c = (0, i.useComposedRefs)(t, a);
        return (
          n.useEffect(() => {
            let e = a.current;
            if (e)
              return (
                r.branches.add(e),
                () => {
                  r.branches.delete(e);
                }
              );
          }, [r.branches]),
          (0, l.jsx)(o.Primitive.div, { ...e, ref: c })
        );
      }).displayName = 'DismissableLayerBranch'),
      e.s(['DismissableLayer', 0, u], 42174);
  },
  41681,
  (e) => {
    'use strict';
    var t = e.i(22034),
      n = 0;
    function r() {
      let e = document.createElement('span');
      return (
        e.setAttribute('data-radix-focus-guard', ''),
        (e.tabIndex = 0),
        (e.style.outline = 'none'),
        (e.style.opacity = '0'),
        (e.style.position = 'fixed'),
        (e.style.pointerEvents = 'none'),
        e
      );
    }
    e.s([
      'useFocusGuards',
      0,
      function () {
        t.useEffect(() => {
          let e = document.querySelectorAll('[data-radix-focus-guard]');
          return (
            document.body.insertAdjacentElement('afterbegin', e[0] ?? r()),
            document.body.insertAdjacentElement('beforeend', e[1] ?? r()),
            n++,
            () => {
              1 === n &&
                document
                  .querySelectorAll('[data-radix-focus-guard]')
                  .forEach((e) => e.remove()),
                n--;
            }
          );
        }, []);
      }
    ]);
  },
  54881,
  (e) => {
    'use strict';
    let t;
    var n = e.i(22034),
      r = e.i(6633),
      o = e.i(20255),
      i = e.i(50312),
      a = e.i(29971),
      l = 'focusScope.autoFocusOnMount',
      c = 'focusScope.autoFocusOnUnmount',
      s = { bubbles: !1, cancelable: !0 },
      u = n.forwardRef((e, t) => {
        let {
            loop: u = !1,
            trapped: m = !1,
            onMountAutoFocus: v,
            onUnmountAutoFocus: g,
            ...w
          } = e,
          [y, C] = n.useState(null),
          b = (0, i.useCallbackRef)(v),
          x = (0, i.useCallbackRef)(g),
          E = n.useRef(null),
          L = (0, r.useComposedRefs)(t, (e) => C(e)),
          R = n.useRef({
            paused: !1,
            pause() {
              this.paused = !0;
            },
            resume() {
              this.paused = !1;
            }
          }).current;
        n.useEffect(() => {
          if (m) {
            let e = function (e) {
                if (R.paused || !y) return;
                let t = e.target;
                y.contains(t) ? (E.current = t) : p(E.current, { select: !0 });
              },
              t = function (e) {
                if (R.paused || !y) return;
                let t = e.relatedTarget;
                null !== t && (y.contains(t) || p(E.current, { select: !0 }));
              };
            document.addEventListener('focusin', e),
              document.addEventListener('focusout', t);
            let n = new MutationObserver(function (e) {
              if (document.activeElement === document.body)
                for (let t of e) t.removedNodes.length > 0 && p(y);
            });
            return (
              y && n.observe(y, { childList: !0, subtree: !0 }),
              () => {
                document.removeEventListener('focusin', e),
                  document.removeEventListener('focusout', t),
                  n.disconnect();
              }
            );
          }
        }, [m, y, R.paused]),
          n.useEffect(() => {
            if (y) {
              h.add(R);
              let e = document.activeElement;
              if (!y.contains(e)) {
                let t = new CustomEvent(l, s);
                y.addEventListener(l, b),
                  y.dispatchEvent(t),
                  t.defaultPrevented ||
                    ((function (e, { select: t = !1 } = {}) {
                      let n = document.activeElement;
                      for (let r of e)
                        if ((p(r, { select: t }), document.activeElement !== n))
                          return;
                    })(
                      f(y).filter((e) => 'A' !== e.tagName),
                      { select: !0 }
                    ),
                    document.activeElement === e && p(y));
              }
              return () => {
                y.removeEventListener(l, b),
                  setTimeout(() => {
                    let t = new CustomEvent(c, s);
                    y.addEventListener(c, x),
                      y.dispatchEvent(t),
                      t.defaultPrevented ||
                        p(e ?? document.body, { select: !0 }),
                      y.removeEventListener(c, x),
                      h.remove(R);
                  }, 0);
              };
            }
          }, [y, b, x, R]);
        let S = n.useCallback(
          (e) => {
            if ((!u && !m) || R.paused) return;
            let t = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              n = document.activeElement;
            if (t && n) {
              var r;
              let t,
                o = e.currentTarget,
                [i, a] = [d((t = f((r = o))), r), d(t.reverse(), r)];
              i && a
                ? e.shiftKey || n !== a
                  ? e.shiftKey &&
                    n === i &&
                    (e.preventDefault(), u && p(a, { select: !0 }))
                  : (e.preventDefault(), u && p(i, { select: !0 }))
                : n === o && e.preventDefault();
            }
          },
          [u, m, R.paused]
        );
        return (0, a.jsx)(o.Primitive.div, {
          tabIndex: -1,
          ...w,
          ref: L,
          onKeyDown: S
        });
      });
    function f(e) {
      let t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
          acceptNode: (e) => {
            let t = 'INPUT' === e.tagName && 'hidden' === e.type;
            return e.disabled || e.hidden || t
              ? NodeFilter.FILTER_SKIP
              : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
          }
        });
      for (; n.nextNode(); ) t.push(n.currentNode);
      return t;
    }
    function d(e, t) {
      for (let n of e)
        if (
          !(function (e, { upTo: t }) {
            if ('hidden' === getComputedStyle(e).visibility) return !0;
            for (; e && (void 0 === t || e !== t); ) {
              if ('none' === getComputedStyle(e).display) return !0;
              e = e.parentElement;
            }
            return !1;
          })(n, { upTo: t })
        )
          return n;
    }
    function p(e, { select: t = !1 } = {}) {
      if (e && e.focus) {
        var n;
        let r = document.activeElement;
        e.focus({ preventScroll: !0 }),
          e !== r &&
            (n = e) instanceof HTMLInputElement &&
            'select' in n &&
            t &&
            e.select();
      }
    }
    u.displayName = 'FocusScope';
    var h =
      ((t = []),
      {
        add(e) {
          let n = t[0];
          e !== n && n?.pause(), (t = m(t, e)).unshift(e);
        },
        remove(e) {
          (t = m(t, e)), t[0]?.resume();
        }
      });
    function m(e, t) {
      let n = [...e],
        r = n.indexOf(t);
      return -1 !== r && n.splice(r, 1), n;
    }
    e.s(['FocusScope', 0, u]);
  },
  89407,
  (e) => {
    'use strict';
    let t;
    var n = e.i(22034);
    let r = ['top', 'right', 'bottom', 'left'],
      o = Math.min,
      i = Math.max,
      a = Math.round,
      l = Math.floor,
      c = (e) => ({ x: e, y: e }),
      s = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    function u(e, t) {
      return 'function' == typeof e ? e(t) : e;
    }
    function f(e) {
      return e.split('-')[0];
    }
    function d(e) {
      return e.split('-')[1];
    }
    function p(e) {
      return 'x' === e ? 'y' : 'x';
    }
    function h(e) {
      return 'y' === e ? 'height' : 'width';
    }
    function m(e) {
      let t = e[0];
      return 't' === t || 'b' === t ? 'y' : 'x';
    }
    function v(e) {
      return e.includes('start')
        ? e.replace('start', 'end')
        : e.replace('end', 'start');
    }
    let g = ['left', 'right'],
      w = ['right', 'left'],
      y = ['top', 'bottom'],
      C = ['bottom', 'top'];
    function b(e) {
      let t = f(e);
      return s[t] + e.slice(t.length);
    }
    function x(e) {
      return 'number' != typeof e
        ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
        : { top: e, right: e, bottom: e, left: e };
    }
    function E(e) {
      let { x: t, y: n, width: r, height: o } = e;
      return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
      };
    }
    function L(e, t, n) {
      let r,
        { reference: o, floating: i } = e,
        a = m(t),
        l = p(m(t)),
        c = h(l),
        s = f(t),
        u = 'y' === a,
        v = o.x + o.width / 2 - i.width / 2,
        g = o.y + o.height / 2 - i.height / 2,
        w = o[c] / 2 - i[c] / 2;
      switch (s) {
        case 'top':
          r = { x: v, y: o.y - i.height };
          break;
        case 'bottom':
          r = { x: v, y: o.y + o.height };
          break;
        case 'right':
          r = { x: o.x + o.width, y: g };
          break;
        case 'left':
          r = { x: o.x - i.width, y: g };
          break;
        default:
          r = { x: o.x, y: o.y };
      }
      switch (d(t)) {
        case 'start':
          r[l] -= w * (n && u ? -1 : 1);
          break;
        case 'end':
          r[l] += w * (n && u ? -1 : 1);
      }
      return r;
    }
    async function R(e, t) {
      var n;
      void 0 === t && (t = {});
      let { x: r, y: o, platform: i, rects: a, elements: l, strategy: c } = e,
        {
          boundary: s = 'clippingAncestors',
          rootBoundary: f = 'viewport',
          elementContext: d = 'floating',
          altBoundary: p = !1,
          padding: h = 0
        } = u(t, e),
        m = x(h),
        v = l[p ? ('floating' === d ? 'reference' : 'floating') : d],
        g = E(
          await i.getClippingRect({
            element:
              null ==
                (n = await (null == i.isElement ? void 0 : i.isElement(v))) || n
                ? v
                : v.contextElement ||
                  (await (null == i.getDocumentElement
                    ? void 0
                    : i.getDocumentElement(l.floating))),
            boundary: s,
            rootBoundary: f,
            strategy: c
          })
        ),
        w =
          'floating' === d
            ? { x: r, y: o, width: a.floating.width, height: a.floating.height }
            : a.reference,
        y = await (null == i.getOffsetParent
          ? void 0
          : i.getOffsetParent(l.floating)),
        C = ((await (null == i.isElement ? void 0 : i.isElement(y))) &&
          (await (null == i.getScale ? void 0 : i.getScale(y)))) || {
          x: 1,
          y: 1
        },
        b = E(
          i.convertOffsetParentRelativeRectToViewportRelativeRect
            ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: l,
                rect: w,
                offsetParent: y,
                strategy: c
              })
            : w
        );
      return {
        top: (g.top - b.top + m.top) / C.y,
        bottom: (b.bottom - g.bottom + m.bottom) / C.y,
        left: (g.left - b.left + m.left) / C.x,
        right: (b.right - g.right + m.right) / C.x
      };
    }
    let S = async (e, t, n) => {
      let {
          placement: r = 'bottom',
          strategy: o = 'absolute',
          middleware: i = [],
          platform: a
        } = n,
        l = a.detectOverflow ? a : { ...a, detectOverflow: R },
        c = await (null == a.isRTL ? void 0 : a.isRTL(t)),
        s = await a.getElementRects({ reference: e, floating: t, strategy: o }),
        { x: u, y: f } = L(s, r, c),
        d = r,
        p = 0,
        h = {};
      for (let n = 0; n < i.length; n++) {
        let m = i[n];
        if (!m) continue;
        let { name: v, fn: g } = m,
          {
            x: w,
            y: y,
            data: C,
            reset: b
          } = await g({
            x: u,
            y: f,
            initialPlacement: r,
            placement: d,
            strategy: o,
            middlewareData: h,
            rects: s,
            platform: l,
            elements: { reference: e, floating: t }
          });
        (u = null != w ? w : u),
          (f = null != y ? y : f),
          (h[v] = { ...h[v], ...C }),
          b &&
            p < 50 &&
            (p++,
            'object' == typeof b &&
              (b.placement && (d = b.placement),
              b.rects &&
                (s =
                  !0 === b.rects
                    ? await a.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                      })
                    : b.rects),
              ({ x: u, y: f } = L(s, d, c))),
            (n = -1));
      }
      return { x: u, y: f, placement: d, strategy: o, middlewareData: h };
    };
    function A(e, t) {
      return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
      };
    }
    function P(e) {
      return r.some((t) => e[t] >= 0);
    }
    let O = new Set(['left', 'top']);
    async function T(e, t) {
      let { placement: n, platform: r, elements: o } = e,
        i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
        a = f(n),
        l = d(n),
        c = 'y' === m(n),
        s = O.has(a) ? -1 : 1,
        p = i && c ? -1 : 1,
        h = u(t, e),
        {
          mainAxis: v,
          crossAxis: g,
          alignmentAxis: w
        } = 'number' == typeof h
          ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
          : {
              mainAxis: h.mainAxis || 0,
              crossAxis: h.crossAxis || 0,
              alignmentAxis: h.alignmentAxis
            };
      return (
        l && 'number' == typeof w && (g = 'end' === l ? -1 * w : w),
        c ? { x: g * p, y: v * s } : { x: v * s, y: g * p }
      );
    }
    function M() {
      return 'u' > typeof window;
    }
    function k(e) {
      return j(e) ? (e.nodeName || '').toLowerCase() : '#document';
    }
    function N(e) {
      var t;
      return (
        (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) ||
        window
      );
    }
    function D(e) {
      var t;
      return null ==
        (t = (j(e) ? e.ownerDocument : e.document) || window.document)
        ? void 0
        : t.documentElement;
    }
    function j(e) {
      return !!M() && (e instanceof Node || e instanceof N(e).Node);
    }
    function H(e) {
      return !!M() && (e instanceof Element || e instanceof N(e).Element);
    }
    function F(e) {
      return (
        !!M() && (e instanceof HTMLElement || e instanceof N(e).HTMLElement)
      );
    }
    function W(e) {
      return (
        !(!M() || 'u' < typeof ShadowRoot) &&
        (e instanceof ShadowRoot || e instanceof N(e).ShadowRoot)
      );
    }
    function I(e) {
      let { overflow: t, overflowX: n, overflowY: r, display: o } = K(e);
      return (
        /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
        'inline' !== o &&
        'contents' !== o
      );
    }
    function B(e) {
      try {
        if (e.matches(':popover-open')) return !0;
      } catch (e) {}
      try {
        return e.matches(':modal');
      } catch (e) {
        return !1;
      }
    }
    let Z = /transform|translate|scale|rotate|perspective|filter/,
      V = /paint|layout|strict|content/,
      _ = (e) => !!e && 'none' !== e;
    function z(e) {
      let t = H(e) ? K(e) : e;
      return (
        _(t.transform) ||
        _(t.translate) ||
        _(t.scale) ||
        _(t.rotate) ||
        _(t.perspective) ||
        (!$() && (_(t.backdropFilter) || _(t.filter))) ||
        Z.test(t.willChange || '') ||
        V.test(t.contain || '')
      );
    }
    function $() {
      return (
        null == t &&
          (t =
            'u' > typeof CSS &&
            CSS.supports &&
            CSS.supports('-webkit-backdrop-filter', 'none')),
        t
      );
    }
    function Y(e) {
      return /^(html|body|#document)$/.test(k(e));
    }
    function K(e) {
      return N(e).getComputedStyle(e);
    }
    function X(e) {
      return H(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
    }
    function U(e) {
      if ('html' === k(e)) return e;
      let t = e.assignedSlot || e.parentNode || (W(e) && e.host) || D(e);
      return W(t) ? t.host : t;
    }
    function q(e, t, n) {
      var r;
      void 0 === t && (t = []), void 0 === n && (n = !0);
      let o = (function e(t) {
          let n = U(t);
          return Y(n)
            ? t.ownerDocument
              ? t.ownerDocument.body
              : t.body
            : F(n) && I(n)
              ? n
              : e(n);
        })(e),
        i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
        a = N(o);
      if (!i) return t.concat(o, q(o, [], n));
      {
        let e = G(a);
        return t.concat(
          a,
          a.visualViewport || [],
          I(o) ? o : [],
          e && n ? q(e) : []
        );
      }
    }
    function G(e) {
      return e.parent && Object.getPrototypeOf(e.parent)
        ? e.frameElement
        : null;
    }
    function J(e) {
      let t = K(e),
        n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0,
        o = F(e),
        i = o ? e.offsetWidth : n,
        l = o ? e.offsetHeight : r,
        c = a(n) !== i || a(r) !== l;
      return c && ((n = i), (r = l)), { width: n, height: r, $: c };
    }
    function Q(e) {
      return H(e) ? e : e.contextElement;
    }
    function ee(e) {
      let t = Q(e);
      if (!F(t)) return c(1);
      let n = t.getBoundingClientRect(),
        { width: r, height: o, $: i } = J(t),
        l = (i ? a(n.width) : n.width) / r,
        s = (i ? a(n.height) : n.height) / o;
      return (
        (l && Number.isFinite(l)) || (l = 1),
        (s && Number.isFinite(s)) || (s = 1),
        { x: l, y: s }
      );
    }
    let et = c(0);
    function en(e) {
      let t = N(e);
      return $() && t.visualViewport
        ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
        : et;
    }
    function er(e, t, n, r) {
      var o;
      void 0 === t && (t = !1), void 0 === n && (n = !1);
      let i = e.getBoundingClientRect(),
        a = Q(e),
        l = c(1);
      t && (r ? H(r) && (l = ee(r)) : (l = ee(e)));
      let s = (void 0 === (o = n) && (o = !1), r && (!o || r === N(a)) && o)
          ? en(a)
          : c(0),
        u = (i.left + s.x) / l.x,
        f = (i.top + s.y) / l.y,
        d = i.width / l.x,
        p = i.height / l.y;
      if (a) {
        let e = N(a),
          t = r && H(r) ? N(r) : r,
          n = e,
          o = G(n);
        for (; o && r && t !== n; ) {
          let e = ee(o),
            t = o.getBoundingClientRect(),
            r = K(o),
            i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
            a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
          (u *= e.x),
            (f *= e.y),
            (d *= e.x),
            (p *= e.y),
            (u += i),
            (f += a),
            (o = G((n = N(o))));
        }
      }
      return E({ width: d, height: p, x: u, y: f });
    }
    function eo(e, t) {
      let n = X(e).scrollLeft;
      return t ? t.left + n : er(D(e)).left + n;
    }
    function ei(e, t) {
      let n = e.getBoundingClientRect();
      return { x: n.left + t.scrollLeft - eo(e, n), y: n.top + t.scrollTop };
    }
    function ea(e, t, n) {
      var r;
      let o;
      if ('viewport' === t)
        o = (function (e, t) {
          let n = N(e),
            r = D(e),
            o = n.visualViewport,
            i = r.clientWidth,
            a = r.clientHeight,
            l = 0,
            c = 0;
          if (o) {
            (i = o.width), (a = o.height);
            let e = $();
            (!e || (e && 'fixed' === t)) &&
              ((l = o.offsetLeft), (c = o.offsetTop));
          }
          let s = eo(r);
          if (s <= 0) {
            let e = r.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              o =
                ('CSS1Compat' === e.compatMode &&
                  parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
                0,
              a = Math.abs(r.clientWidth - t.clientWidth - o);
            a <= 25 && (i -= a);
          } else s <= 25 && (i += s);
          return { width: i, height: a, x: l, y: c };
        })(e, n);
      else if ('document' === t) {
        let t, n, a, l, c, s, u;
        (r = D(e)),
          (t = D(r)),
          (n = X(r)),
          (a = r.ownerDocument.body),
          (l = i(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth)),
          (c = i(
            t.scrollHeight,
            t.clientHeight,
            a.scrollHeight,
            a.clientHeight
          )),
          (s = -n.scrollLeft + eo(r)),
          (u = -n.scrollTop),
          'rtl' === K(a).direction &&
            (s += i(t.clientWidth, a.clientWidth) - l),
          (o = { width: l, height: c, x: s, y: u });
      } else if (H(t)) {
        let e, r, i, a, l, s;
        (r = (e = er(t, !0, 'fixed' === n)).top + t.clientTop),
          (i = e.left + t.clientLeft),
          (a = F(t) ? ee(t) : c(1)),
          (l = t.clientWidth * a.x),
          (s = t.clientHeight * a.y),
          (o = { width: l, height: s, x: i * a.x, y: r * a.y });
      } else {
        let n = en(e);
        o = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
      }
      return E(o);
    }
    function el(e) {
      return 'static' === K(e).position;
    }
    function ec(e, t) {
      if (!F(e) || 'fixed' === K(e).position) return null;
      if (t) return t(e);
      let n = e.offsetParent;
      return D(e) === n && (n = n.ownerDocument.body), n;
    }
    function es(e, t) {
      var n;
      let r = N(e);
      if (B(e)) return r;
      if (!F(e)) {
        let t = U(e);
        for (; t && !Y(t); ) {
          if (H(t) && !el(t)) return t;
          t = U(t);
        }
        return r;
      }
      let o = ec(e, t);
      for (; o && ((n = o), /^(table|td|th)$/.test(k(n))) && el(o); )
        o = ec(o, t);
      return o && Y(o) && el(o) && !z(o)
        ? r
        : o ||
            (function (e) {
              let t = U(e);
              for (; F(t) && !Y(t); ) {
                if (z(t)) return t;
                if (B(t)) break;
                t = U(t);
              }
              return null;
            })(e) ||
            r;
    }
    let eu = async function (e) {
        let t = this.getOffsetParent || es,
          n = this.getDimensions,
          r = await n(e.floating);
        return {
          reference: (function (e, t, n) {
            let r = F(t),
              o = D(t),
              i = 'fixed' === n,
              a = er(e, !0, i, t),
              l = { scrollLeft: 0, scrollTop: 0 },
              s = c(0);
            if (r || (!r && !i))
              if ((('body' !== k(t) || I(o)) && (l = X(t)), r)) {
                let e = er(t, !0, i, t);
                (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
              } else o && (s.x = eo(o));
            i && !r && o && (s.x = eo(o));
            let u = !o || r || i ? c(0) : ei(o, l);
            return {
              x: a.left + l.scrollLeft - s.x - u.x,
              y: a.top + l.scrollTop - s.y - u.y,
              width: a.width,
              height: a.height
            };
          })(e.reference, await t(e.floating), e.strategy),
          floating: { x: 0, y: 0, width: r.width, height: r.height }
        };
      },
      ef = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
            i = 'fixed' === o,
            a = D(r),
            l = !!t && B(t.floating);
          if (r === a || (l && i)) return n;
          let s = { scrollLeft: 0, scrollTop: 0 },
            u = c(1),
            f = c(0),
            d = F(r);
          if (
            (d || (!d && !i)) &&
            (('body' !== k(r) || I(a)) && (s = X(r)), d)
          ) {
            let e = er(r);
            (u = ee(r)), (f.x = e.x + r.clientLeft), (f.y = e.y + r.clientTop);
          }
          let p = !a || d || i ? c(0) : ei(a, s);
          return {
            width: n.width * u.x,
            height: n.height * u.y,
            x: n.x * u.x - s.scrollLeft * u.x + f.x + p.x,
            y: n.y * u.y - s.scrollTop * u.y + f.y + p.y
          };
        },
        getDocumentElement: D,
        getClippingRect: function (e) {
          let { element: t, boundary: n, rootBoundary: r, strategy: a } = e,
            l = [
              ...('clippingAncestors' === n
                ? B(t)
                  ? []
                  : (function (e, t) {
                      let n = t.get(e);
                      if (n) return n;
                      let r = q(e, [], !1).filter(
                          (e) => H(e) && 'body' !== k(e)
                        ),
                        o = null,
                        i = 'fixed' === K(e).position,
                        a = i ? U(e) : e;
                      for (; H(a) && !Y(a); ) {
                        let t = K(a),
                          n = z(a);
                        n || 'fixed' !== t.position || (o = null),
                          (
                            i
                              ? n || o
                              : !(
                                  (!n &&
                                    'static' === t.position &&
                                    o &&
                                    ('absolute' === o.position ||
                                      'fixed' === o.position)) ||
                                  (I(a) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = U(t);
                                      return (
                                        !(r === n || !H(r) || Y(r)) &&
                                        ('fixed' === K(r).position || e(r, n))
                                      );
                                    })(e, a))
                                )
                          )
                            ? (o = t)
                            : (r = r.filter((e) => e !== a)),
                          (a = U(a));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                : [].concat(n)),
              r
            ],
            c = ea(t, l[0], a),
            s = c.top,
            u = c.right,
            f = c.bottom,
            d = c.left;
          for (let e = 1; e < l.length; e++) {
            let n = ea(t, l[e], a);
            (s = i(n.top, s)),
              (u = o(n.right, u)),
              (f = o(n.bottom, f)),
              (d = i(n.left, d));
          }
          return { width: u - d, height: f - s, x: d, y: s };
        },
        getOffsetParent: es,
        getElementRects: eu,
        getClientRects: function (e) {
          return Array.from(e.getClientRects());
        },
        getDimensions: function (e) {
          let { width: t, height: n } = J(e);
          return { width: t, height: n };
        },
        getScale: ee,
        isElement: H,
        isRTL: function (e) {
          return 'rtl' === K(e).direction;
        }
      };
    function ed(e, t) {
      return (
        e.x === t.x &&
        e.y === t.y &&
        e.width === t.width &&
        e.height === t.height
      );
    }
    let ep = (e) => ({
      name: 'arrow',
      options: e,
      async fn(t) {
        let {
            x: n,
            y: r,
            placement: a,
            rects: l,
            platform: c,
            elements: s,
            middlewareData: f
          } = t,
          { element: v, padding: g = 0 } = u(e, t) || {};
        if (null == v) return {};
        let w = x(g),
          y = { x: n, y: r },
          C = p(m(a)),
          b = h(C),
          E = await c.getDimensions(v),
          L = 'y' === C,
          R = L ? 'clientHeight' : 'clientWidth',
          S = l.reference[b] + l.reference[C] - y[C] - l.floating[b],
          A = y[C] - l.reference[C],
          P = await (null == c.getOffsetParent ? void 0 : c.getOffsetParent(v)),
          O = P ? P[R] : 0;
        (O && (await (null == c.isElement ? void 0 : c.isElement(P)))) ||
          (O = s.floating[R] || l.floating[b]);
        let T = O / 2 - E[b] / 2 - 1,
          M = o(w[L ? 'top' : 'left'], T),
          k = o(w[L ? 'bottom' : 'right'], T),
          N = O - E[b] - k,
          D = O / 2 - E[b] / 2 + (S / 2 - A / 2),
          j = i(M, o(D, N)),
          H =
            !f.arrow &&
            null != d(a) &&
            D !== j &&
            l.reference[b] / 2 - (D < M ? M : k) - E[b] / 2 < 0,
          F = H ? (D < M ? D - M : D - N) : 0;
        return {
          [C]: y[C] + F,
          data: {
            [C]: j,
            centerOffset: D - j - F,
            ...(H && { alignmentOffset: F })
          },
          reset: H
        };
      }
    });
    var eh = e.i(50560),
      em = 'u' > typeof document ? n.useLayoutEffect : function () {};
    function ev(e, t) {
      let n, r, o;
      if (e === t) return !0;
      if (typeof e != typeof t) return !1;
      if ('function' == typeof e && e.toString() === t.toString()) return !0;
      if (e && t && 'object' == typeof e) {
        if (Array.isArray(e)) {
          if ((n = e.length) !== t.length) return !1;
          for (r = n; 0 != r--; ) if (!ev(e[r], t[r])) return !1;
          return !0;
        }
        if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
          return !1;
        for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; 0 != r--; ) {
          let n = o[r];
          if (('_owner' !== n || !e.$$typeof) && !ev(e[n], t[n])) return !1;
        }
        return !0;
      }
      return e != e && t != t;
    }
    function eg(e) {
      return 'u' < typeof window
        ? 1
        : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
    }
    function ew(e, t) {
      let n = eg(e);
      return Math.round(t * n) / n;
    }
    function ey(e) {
      let t = n.useRef(e);
      return (
        em(() => {
          t.current = e;
        }),
        t
      );
    }
    var eC = e.i(20255),
      eb = e.i(29971),
      ex = n.forwardRef((e, t) => {
        let { children: n, width: r = 10, height: o = 5, ...i } = e;
        return (0, eb.jsx)(eC.Primitive.svg, {
          ...i,
          ref: t,
          width: r,
          height: o,
          viewBox: '0 0 30 10',
          preserveAspectRatio: 'none',
          children: e.asChild
            ? n
            : (0, eb.jsx)('polygon', { points: '0,0 30,0 15,10' })
        });
      });
    ex.displayName = 'Arrow';
    var eE = e.i(6633),
      eL = e.i(2501),
      eR = e.i(50312),
      eS = e.i(36628),
      eA = 'Popper',
      [eP, eO] = (0, eL.createContextScope)(eA),
      [eT, eM] = eP(eA),
      ek = (e) => {
        let { __scopePopper: t, children: r } = e,
          [o, i] = n.useState(null);
        return (0, eb.jsx)(eT, {
          scope: t,
          anchor: o,
          onAnchorChange: i,
          children: r
        });
      };
    ek.displayName = eA;
    var eN = 'PopperAnchor',
      eD = n.forwardRef((e, t) => {
        let { __scopePopper: r, virtualRef: o, ...i } = e,
          a = eM(eN, r),
          l = n.useRef(null),
          c = (0, eE.useComposedRefs)(t, l),
          s = n.useRef(null);
        return (
          n.useEffect(() => {
            let e = s.current;
            (s.current = o?.current || l.current),
              e !== s.current && a.onAnchorChange(s.current);
          }),
          o ? null : (0, eb.jsx)(eC.Primitive.div, { ...i, ref: c })
        );
      });
    eD.displayName = eN;
    var ej = 'PopperContent',
      [eH, eF] = eP(ej),
      eW = n.forwardRef((e, t) => {
        var r, a, c, s, x, E, L, R, M, k, N, j, H, F, W, I, B, Z, V, _, z;
        let $,
          Y,
          K,
          X,
          U,
          G,
          {
            __scopePopper: J,
            side: ee = 'bottom',
            sideOffset: et = 0,
            align: en = 'center',
            alignOffset: eo = 0,
            arrowPadding: ei = 0,
            avoidCollisions: ea = !0,
            collisionBoundary: el = [],
            collisionPadding: ec = 0,
            sticky: es = 'partial',
            hideWhenDetached: eu = !1,
            updatePositionStrategy: ex = 'optimized',
            onPlaced: eL,
            ...eA
          } = e,
          eP = eM(ej, J),
          [eO, eT] = n.useState(null),
          ek = (0, eE.useComposedRefs)(t, (e) => eT(e)),
          [eN, eD] = n.useState(null),
          eF = (function (e) {
            let [t, r] = n.useState(void 0);
            return (
              (0, eS.useLayoutEffect)(() => {
                if (e) {
                  r({ width: e.offsetWidth, height: e.offsetHeight });
                  let t = new ResizeObserver((t) => {
                    let n, o;
                    if (!Array.isArray(t) || !t.length) return;
                    let i = t[0];
                    if ('borderBoxSize' in i) {
                      let e = i.borderBoxSize,
                        t = Array.isArray(e) ? e[0] : e;
                      (n = t.inlineSize), (o = t.blockSize);
                    } else (n = e.offsetWidth), (o = e.offsetHeight);
                    r({ width: n, height: o });
                  });
                  return (
                    t.observe(e, { box: 'border-box' }), () => t.unobserve(e)
                  );
                }
                r(void 0);
              }, [e]),
              t
            );
          })(eN),
          eW = eF?.width ?? 0,
          eI = eF?.height ?? 0,
          eB =
            'number' == typeof ec
              ? ec
              : { top: 0, right: 0, bottom: 0, left: 0, ...ec },
          eZ = Array.isArray(el) ? el : [el],
          e$ = eZ.length > 0,
          eY = { padding: eB, boundary: eZ.filter(eV), altBoundary: e$ },
          {
            refs: eK,
            floatingStyles: eX,
            placement: eU,
            isPositioned: eq,
            middlewareData: eG
          } = (function (e) {
            void 0 === e && (e = {});
            let {
                placement: t = 'bottom',
                strategy: r = 'absolute',
                middleware: o = [],
                platform: i,
                elements: { reference: a, floating: l } = {},
                transform: c = !0,
                whileElementsMounted: s,
                open: u
              } = e,
              [f, d] = n.useState({
                x: 0,
                y: 0,
                strategy: r,
                placement: t,
                middlewareData: {},
                isPositioned: !1
              }),
              [p, h] = n.useState(o);
            ev(p, o) || h(o);
            let [m, v] = n.useState(null),
              [g, w] = n.useState(null),
              y = n.useCallback((e) => {
                e !== E.current && ((E.current = e), v(e));
              }, []),
              C = n.useCallback((e) => {
                e !== L.current && ((L.current = e), w(e));
              }, []),
              b = a || m,
              x = l || g,
              E = n.useRef(null),
              L = n.useRef(null),
              R = n.useRef(f),
              A = null != s,
              P = ey(s),
              O = ey(i),
              T = ey(u),
              M = n.useCallback(() => {
                var e, n;
                let o, i, a;
                if (!E.current || !L.current) return;
                let l = { placement: t, strategy: r, middleware: p };
                O.current && (l.platform = O.current),
                  ((e = E.current),
                  (n = L.current),
                  (o = new Map()),
                  (a = { ...(i = { platform: ef, ...l }).platform, _c: o }),
                  S(e, n, { ...i, platform: a })).then((e) => {
                    let t = { ...e, isPositioned: !1 !== T.current };
                    k.current &&
                      !ev(R.current, t) &&
                      ((R.current = t),
                      eh.flushSync(() => {
                        d(t);
                      }));
                  });
              }, [p, t, r, O, T]);
            em(() => {
              !1 === u &&
                R.current.isPositioned &&
                ((R.current.isPositioned = !1),
                d((e) => ({ ...e, isPositioned: !1 })));
            }, [u]);
            let k = n.useRef(!1);
            em(
              () => (
                (k.current = !0),
                () => {
                  k.current = !1;
                }
              ),
              []
            ),
              em(() => {
                if ((b && (E.current = b), x && (L.current = x), b && x)) {
                  if (P.current) return P.current(b, x, M);
                  M();
                }
              }, [b, x, M, P, A]);
            let N = n.useMemo(
                () => ({
                  reference: E,
                  floating: L,
                  setReference: y,
                  setFloating: C
                }),
                [y, C]
              ),
              D = n.useMemo(() => ({ reference: b, floating: x }), [b, x]),
              j = n.useMemo(() => {
                let e = { position: r, left: 0, top: 0 };
                if (!D.floating) return e;
                let t = ew(D.floating, f.x),
                  n = ew(D.floating, f.y);
                return c
                  ? {
                      ...e,
                      transform: 'translate(' + t + 'px, ' + n + 'px)',
                      ...(eg(D.floating) >= 1.5 && { willChange: 'transform' })
                    }
                  : { position: r, left: t, top: n };
              }, [r, c, D.floating, f.x, f.y]);
            return n.useMemo(
              () => ({
                ...f,
                update: M,
                refs: N,
                elements: D,
                floatingStyles: j
              }),
              [f, M, N, D, j]
            );
          })({
            strategy: 'fixed',
            placement: ee + ('center' !== en ? '-' + en : ''),
            whileElementsMounted: (...e) =>
              (function (e, t, n, r) {
                let a;
                void 0 === r && (r = {});
                let {
                    ancestorScroll: c = !0,
                    ancestorResize: s = !0,
                    elementResize: u = 'function' == typeof ResizeObserver,
                    layoutShift: f = 'function' == typeof IntersectionObserver,
                    animationFrame: d = !1
                  } = r,
                  p = Q(e),
                  h = c || s ? [...(p ? q(p) : []), ...(t ? q(t) : [])] : [];
                h.forEach((e) => {
                  c && e.addEventListener('scroll', n, { passive: !0 }),
                    s && e.addEventListener('resize', n);
                });
                let m =
                    p && f
                      ? (function (e, t) {
                          let n,
                            r = null,
                            a = D(e);
                          function c() {
                            var e;
                            clearTimeout(n),
                              null == (e = r) || e.disconnect(),
                              (r = null);
                          }
                          return (
                            !(function s(u, f) {
                              void 0 === u && (u = !1),
                                void 0 === f && (f = 1),
                                c();
                              let d = e.getBoundingClientRect(),
                                { left: p, top: h, width: m, height: v } = d;
                              if ((u || t(), !m || !v)) return;
                              let g = {
                                  rootMargin:
                                    -l(h) +
                                    'px ' +
                                    -l(a.clientWidth - (p + m)) +
                                    'px ' +
                                    -l(a.clientHeight - (h + v)) +
                                    'px ' +
                                    -l(p) +
                                    'px',
                                  threshold: i(0, o(1, f)) || 1
                                },
                                w = !0;
                              function y(t) {
                                let r = t[0].intersectionRatio;
                                if (r !== f) {
                                  if (!w) return s();
                                  r
                                    ? s(!1, r)
                                    : (n = setTimeout(() => {
                                        s(!1, 1e-7);
                                      }, 1e3));
                                }
                                1 !== r ||
                                  ed(d, e.getBoundingClientRect()) ||
                                  s(),
                                  (w = !1);
                              }
                              try {
                                r = new IntersectionObserver(y, {
                                  ...g,
                                  root: a.ownerDocument
                                });
                              } catch (e) {
                                r = new IntersectionObserver(y, g);
                              }
                              r.observe(e);
                            })(!0),
                            c
                          );
                        })(p, n)
                      : null,
                  v = -1,
                  g = null;
                u &&
                  ((g = new ResizeObserver((e) => {
                    let [r] = e;
                    r &&
                      r.target === p &&
                      g &&
                      t &&
                      (g.unobserve(t),
                      cancelAnimationFrame(v),
                      (v = requestAnimationFrame(() => {
                        var e;
                        null == (e = g) || e.observe(t);
                      }))),
                      n();
                  })),
                  p && !d && g.observe(p),
                  t && g.observe(t));
                let w = d ? er(e) : null;
                return (
                  d &&
                    (function t() {
                      let r = er(e);
                      w && !ed(w, r) && n(),
                        (w = r),
                        (a = requestAnimationFrame(t));
                    })(),
                  n(),
                  () => {
                    var e;
                    h.forEach((e) => {
                      c && e.removeEventListener('scroll', n),
                        s && e.removeEventListener('resize', n);
                    }),
                      null == m || m(),
                      null == (e = g) || e.disconnect(),
                      (g = null),
                      d && cancelAnimationFrame(a);
                  }
                );
              })(...e, { animationFrame: 'always' === ex }),
            elements: { reference: eP.anchor },
            middleware: [
              {
                name: ($ = {
                  name: 'offset',
                  options: (c = r = { mainAxis: et + eI, alignmentAxis: eo }),
                  async fn(e) {
                    var t, n;
                    let { x: r, y: o, placement: i, middlewareData: a } = e,
                      l = await T(e, c);
                    return i ===
                      (null == (t = a.offset) ? void 0 : t.placement) &&
                      null != (n = a.arrow) &&
                      n.alignmentOffset
                      ? {}
                      : {
                          x: r + l.x,
                          y: o + l.y,
                          data: { ...l, placement: i }
                        };
                  }
                }).name,
                fn: $.fn,
                options: [r, a]
              },
              ea && {
                name: (Y = {
                  name: 'shift',
                  options:
                    (M = L =
                      {
                        mainAxis: !0,
                        crossAxis: !1,
                        limiter:
                          'partial' === es
                            ? {
                                fn: (void 0 === (E = s) && (E = {}),
                                {
                                  options: E,
                                  fn(e) {
                                    let {
                                        x: t,
                                        y: n,
                                        placement: r,
                                        rects: o,
                                        middlewareData: i
                                      } = e,
                                      {
                                        offset: a = 0,
                                        mainAxis: l = !0,
                                        crossAxis: c = !0
                                      } = u(E, e),
                                      s = { x: t, y: n },
                                      d = m(r),
                                      h = p(d),
                                      v = s[h],
                                      g = s[d],
                                      w = u(a, e),
                                      y =
                                        'number' == typeof w
                                          ? { mainAxis: w, crossAxis: 0 }
                                          : { mainAxis: 0, crossAxis: 0, ...w };
                                    if (l) {
                                      let e = 'y' === h ? 'height' : 'width',
                                        t =
                                          o.reference[h] -
                                          o.floating[e] +
                                          y.mainAxis,
                                        n =
                                          o.reference[h] +
                                          o.reference[e] -
                                          y.mainAxis;
                                      v < t ? (v = t) : v > n && (v = n);
                                    }
                                    if (c) {
                                      var C, b;
                                      let e = 'y' === h ? 'width' : 'height',
                                        t = O.has(f(r)),
                                        n =
                                          o.reference[d] -
                                          o.floating[e] +
                                          ((t &&
                                            (null == (C = i.offset)
                                              ? void 0
                                              : C[d])) ||
                                            0) +
                                          (t ? 0 : y.crossAxis),
                                        a =
                                          o.reference[d] +
                                          o.reference[e] +
                                          (t
                                            ? 0
                                            : (null == (b = i.offset)
                                                ? void 0
                                                : b[d]) || 0) -
                                          (t ? y.crossAxis : 0);
                                      g < n ? (g = n) : g > a && (g = a);
                                    }
                                    return { [h]: v, [d]: g };
                                  }
                                }).fn,
                                options: [s, x]
                              }
                            : void 0,
                        ...eY
                      }),
                  async fn(e) {
                    let { x: t, y: n, placement: r, platform: a } = e,
                      {
                        mainAxis: l = !0,
                        crossAxis: c = !1,
                        limiter: s = {
                          fn: (e) => {
                            let { x: t, y: n } = e;
                            return { x: t, y: n };
                          }
                        },
                        ...d
                      } = u(M, e),
                      h = { x: t, y: n },
                      v = await a.detectOverflow(e, d),
                      g = m(f(r)),
                      w = p(g),
                      y = h[w],
                      C = h[g];
                    if (l) {
                      let e = 'y' === w ? 'top' : 'left',
                        t = 'y' === w ? 'bottom' : 'right',
                        n = y + v[e],
                        r = y - v[t];
                      y = i(n, o(y, r));
                    }
                    if (c) {
                      let e = 'y' === g ? 'top' : 'left',
                        t = 'y' === g ? 'bottom' : 'right',
                        n = C + v[e],
                        r = C - v[t];
                      C = i(n, o(C, r));
                    }
                    let b = s.fn({ ...e, [w]: y, [g]: C });
                    return {
                      ...b,
                      data: {
                        x: b.x - t,
                        y: b.y - n,
                        enabled: { [w]: l, [g]: c }
                      }
                    };
                  }
                }).name,
                fn: Y.fn,
                options: [L, R]
              },
              ea && {
                name: (K = {
                  name: 'flip',
                  options: (j = k = { ...eY }),
                  async fn(e) {
                    var t, n, r, o, i, a, l, c;
                    let s,
                      x,
                      E,
                      {
                        placement: L,
                        middlewareData: R,
                        rects: S,
                        initialPlacement: A,
                        platform: P,
                        elements: O
                      } = e,
                      {
                        mainAxis: T = !0,
                        crossAxis: M = !0,
                        fallbackPlacements: k,
                        fallbackStrategy: N = 'bestFit',
                        fallbackAxisSideDirection: D = 'none',
                        flipAlignment: H = !0,
                        ...F
                      } = u(j, e);
                    if (null != (t = R.arrow) && t.alignmentOffset) return {};
                    let W = f(L),
                      I = m(A),
                      B = f(A) === A,
                      Z = await (null == P.isRTL
                        ? void 0
                        : P.isRTL(O.floating)),
                      V =
                        k || (B || !H ? [b(A)] : ((s = b(A)), [v(A), s, v(s)])),
                      _ = 'none' !== D;
                    !k &&
                      _ &&
                      V.push(
                        ...((x = d(A)),
                        (E = (function (e, t, n) {
                          switch (e) {
                            case 'top':
                            case 'bottom':
                              if (n) return t ? w : g;
                              return t ? g : w;
                            case 'left':
                            case 'right':
                              return t ? y : C;
                            default:
                              return [];
                          }
                        })(f(A), 'start' === D, Z)),
                        x &&
                          ((E = E.map((e) => e + '-' + x)),
                          H && (E = E.concat(E.map(v)))),
                        E)
                      );
                    let z = [A, ...V],
                      $ = await P.detectOverflow(e, F),
                      Y = [],
                      K = (null == (n = R.flip) ? void 0 : n.overflows) || [];
                    if ((T && Y.push($[W]), M)) {
                      let e,
                        t,
                        n,
                        r,
                        o =
                          ((a = L),
                          (l = S),
                          void 0 === (c = Z) && (c = !1),
                          (e = d(a)),
                          (n = h((t = p(m(a))))),
                          (r =
                            'x' === t
                              ? e === (c ? 'end' : 'start')
                                ? 'right'
                                : 'left'
                              : 'start' === e
                                ? 'bottom'
                                : 'top'),
                          l.reference[n] > l.floating[n] && (r = b(r)),
                          [r, b(r)]);
                      Y.push($[o[0]], $[o[1]]);
                    }
                    if (
                      ((K = [...K, { placement: L, overflows: Y }]),
                      !Y.every((e) => e <= 0))
                    ) {
                      let e =
                          ((null == (r = R.flip) ? void 0 : r.index) || 0) + 1,
                        t = z[e];
                      if (
                        t &&
                        ('alignment' !== M ||
                          I === m(t) ||
                          K.every(
                            (e) => m(e.placement) !== I || e.overflows[0] > 0
                          ))
                      )
                        return {
                          data: { index: e, overflows: K },
                          reset: { placement: t }
                        };
                      let n =
                        null ==
                        (o = K.filter((e) => e.overflows[0] <= 0).sort(
                          (e, t) => e.overflows[1] - t.overflows[1]
                        )[0])
                          ? void 0
                          : o.placement;
                      if (!n)
                        switch (N) {
                          case 'bestFit': {
                            let e =
                              null ==
                              (i = K.filter((e) => {
                                if (_) {
                                  let t = m(e.placement);
                                  return t === I || 'y' === t;
                                }
                                return !0;
                              })
                                .map((e) => [
                                  e.placement,
                                  e.overflows
                                    .filter((e) => e > 0)
                                    .reduce((e, t) => e + t, 0)
                                ])
                                .sort((e, t) => e[1] - t[1])[0])
                                ? void 0
                                : i[0];
                            e && (n = e);
                            break;
                          }
                          case 'initialPlacement':
                            n = A;
                        }
                      if (L !== n) return { reset: { placement: n } };
                    }
                    return {};
                  }
                }).name,
                fn: K.fn,
                options: [k, N]
              },
              {
                name: (X = {
                  name: 'size',
                  options:
                    (W = H =
                      {
                        ...eY,
                        apply: ({
                          elements: e,
                          rects: t,
                          availableWidth: n,
                          availableHeight: r
                        }) => {
                          let { width: o, height: i } = t.reference,
                            a = e.floating.style;
                          a.setProperty(
                            '--radix-popper-available-width',
                            `${n}px`
                          ),
                            a.setProperty(
                              '--radix-popper-available-height',
                              `${r}px`
                            ),
                            a.setProperty(
                              '--radix-popper-anchor-width',
                              `${o}px`
                            ),
                            a.setProperty(
                              '--radix-popper-anchor-height',
                              `${i}px`
                            );
                        }
                      }),
                  async fn(e) {
                    var t, n;
                    let r,
                      a,
                      { placement: l, rects: c, platform: s, elements: p } = e,
                      { apply: h = () => {}, ...v } = u(W, e),
                      g = await s.detectOverflow(e, v),
                      w = f(l),
                      y = d(l),
                      C = 'y' === m(l),
                      { width: b, height: x } = c.floating;
                    'top' === w || 'bottom' === w
                      ? ((r = w),
                        (a =
                          y ===
                          ((await (null == s.isRTL
                            ? void 0
                            : s.isRTL(p.floating)))
                            ? 'start'
                            : 'end')
                            ? 'left'
                            : 'right'))
                      : ((a = w), (r = 'end' === y ? 'top' : 'bottom'));
                    let E = x - g.top - g.bottom,
                      L = b - g.left - g.right,
                      R = o(x - g[r], E),
                      S = o(b - g[a], L),
                      A = !e.middlewareData.shift,
                      P = R,
                      O = S;
                    if (
                      (null != (t = e.middlewareData.shift) &&
                        t.enabled.x &&
                        (O = L),
                      null != (n = e.middlewareData.shift) &&
                        n.enabled.y &&
                        (P = E),
                      A && !y)
                    ) {
                      let e = i(g.left, 0),
                        t = i(g.right, 0),
                        n = i(g.top, 0),
                        r = i(g.bottom, 0);
                      C
                        ? (O =
                            b -
                            2 *
                              (0 !== e || 0 !== t ? e + t : i(g.left, g.right)))
                        : (P =
                            x -
                            2 *
                              (0 !== n || 0 !== r
                                ? n + r
                                : i(g.top, g.bottom)));
                    }
                    await h({ ...e, availableWidth: O, availableHeight: P });
                    let T = await s.getDimensions(p.floating);
                    return b !== T.width || x !== T.height
                      ? { reset: { rects: !0 } }
                      : {};
                  }
                }).name,
                fn: X.fn,
                options: [H, F]
              },
              eN && {
                name: (U = {
                  name: 'arrow',
                  options: (Z = I = { element: eN, padding: ei }),
                  fn(e) {
                    let { element: t, padding: n } =
                      'function' == typeof Z ? Z(e) : Z;
                    return t && {}.hasOwnProperty.call(t, 'current')
                      ? null != t.current
                        ? ep({ element: t.current, padding: n }).fn(e)
                        : {}
                      : t
                        ? ep({ element: t, padding: n }).fn(e)
                        : {};
                  }
                }).name,
                fn: U.fn,
                options: [I, B]
              },
              e_({ arrowWidth: eW, arrowHeight: eI }),
              eu && {
                name: (G = {
                  name: 'hide',
                  options: (z = V = { strategy: 'referenceHidden', ...eY }),
                  async fn(e) {
                    let { rects: t, platform: n } = e,
                      { strategy: r = 'referenceHidden', ...o } = u(z, e);
                    switch (r) {
                      case 'referenceHidden': {
                        let r = A(
                          await n.detectOverflow(e, {
                            ...o,
                            elementContext: 'reference'
                          }),
                          t.reference
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: r,
                            referenceHidden: P(r)
                          }
                        };
                      }
                      case 'escaped': {
                        let r = A(
                          await n.detectOverflow(e, { ...o, altBoundary: !0 }),
                          t.floating
                        );
                        return { data: { escapedOffsets: r, escaped: P(r) } };
                      }
                      default:
                        return {};
                    }
                  }
                }).name,
                fn: G.fn,
                options: [V, _]
              }
            ]
          }),
          [eJ, eQ] = ez(eU),
          e1 = (0, eR.useCallbackRef)(eL);
        (0, eS.useLayoutEffect)(() => {
          eq && e1?.();
        }, [eq, e1]);
        let e0 = eG.arrow?.x,
          e9 = eG.arrow?.y,
          e8 = eG.arrow?.centerOffset !== 0,
          [e2, e5] = n.useState();
        return (
          (0, eS.useLayoutEffect)(() => {
            eO && e5(window.getComputedStyle(eO).zIndex);
          }, [eO]),
          (0, eb.jsx)('div', {
            ref: eK.setFloating,
            'data-radix-popper-content-wrapper': '',
            style: {
              ...eX,
              transform: eq ? eX.transform : 'translate(0, -200%)',
              minWidth: 'max-content',
              zIndex: e2,
              '--radix-popper-transform-origin': [
                eG.transformOrigin?.x,
                eG.transformOrigin?.y
              ].join(' '),
              ...(eG.hide?.referenceHidden && {
                visibility: 'hidden',
                pointerEvents: 'none'
              })
            },
            dir: e.dir,
            children: (0, eb.jsx)(eH, {
              scope: J,
              placedSide: eJ,
              onArrowChange: eD,
              arrowX: e0,
              arrowY: e9,
              shouldHideArrow: e8,
              children: (0, eb.jsx)(eC.Primitive.div, {
                'data-side': eJ,
                'data-align': eQ,
                ...eA,
                ref: ek,
                style: { ...eA.style, animation: eq ? void 0 : 'none' }
              })
            })
          })
        );
      });
    eW.displayName = ej;
    var eI = 'PopperArrow',
      eB = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
      eZ = n.forwardRef(function (e, t) {
        let { __scopePopper: n, ...r } = e,
          o = eF(eI, n),
          i = eB[o.placedSide];
        return (0, eb.jsx)('span', {
          ref: o.onArrowChange,
          style: {
            position: 'absolute',
            left: o.arrowX,
            top: o.arrowY,
            [i]: 0,
            transformOrigin: {
              top: '',
              right: '0 0',
              bottom: 'center 0',
              left: '100% 0'
            }[o.placedSide],
            transform: {
              top: 'translateY(100%)',
              right: 'translateY(50%) rotate(90deg) translateX(-50%)',
              bottom: 'rotate(180deg)',
              left: 'translateY(50%) rotate(-90deg) translateX(50%)'
            }[o.placedSide],
            visibility: o.shouldHideArrow ? 'hidden' : void 0
          },
          children: (0, eb.jsx)(ex, {
            ...r,
            ref: t,
            style: { ...r.style, display: 'block' }
          })
        });
      });
    function eV(e) {
      return null !== e;
    }
    eZ.displayName = eI;
    var e_ = (e) => ({
      name: 'transformOrigin',
      options: e,
      fn(t) {
        let { placement: n, rects: r, middlewareData: o } = t,
          i = o.arrow?.centerOffset !== 0,
          a = i ? 0 : e.arrowWidth,
          l = i ? 0 : e.arrowHeight,
          [c, s] = ez(n),
          u = { start: '0%', center: '50%', end: '100%' }[s],
          f = (o.arrow?.x ?? 0) + a / 2,
          d = (o.arrow?.y ?? 0) + l / 2,
          p = '',
          h = '';
        return (
          'bottom' === c
            ? ((p = i ? u : `${f}px`), (h = `${-l}px`))
            : 'top' === c
              ? ((p = i ? u : `${f}px`), (h = `${r.floating.height + l}px`))
              : 'right' === c
                ? ((p = `${-l}px`), (h = i ? u : `${d}px`))
                : 'left' === c &&
                  ((p = `${r.floating.width + l}px`), (h = i ? u : `${d}px`)),
          { data: { x: p, y: h } }
        );
      }
    });
    function ez(e) {
      let [t, n = 'center'] = e.split('-');
      return [t, n];
    }
    e.s(
      [
        'Anchor',
        0,
        eD,
        'Arrow',
        0,
        eZ,
        'Content',
        0,
        eW,
        'Root',
        0,
        ek,
        'createPopperScope',
        0,
        eO
      ],
      89407
    );
  },
  52329,
  (e) => {
    'use strict';
    var t = e.i(22034),
      n = e.i(50560),
      r = e.i(20255),
      o = e.i(36628),
      i = e.i(29971),
      a = t.forwardRef((e, a) => {
        let { container: l, ...c } = e,
          [s, u] = t.useState(!1);
        (0, o.useLayoutEffect)(() => u(!0), []);
        let f = l || (s && globalThis?.document?.body);
        return f
          ? n.default.createPortal(
              (0, i.jsx)(r.Primitive.div, { ...c, ref: a }),
              f
            )
          : null;
      });
    (a.displayName = 'Portal'), e.s(['Portal', 0, a]);
  },
  73772,
  (e) => {
    'use strict';
    var t = new WeakMap(),
      n = new WeakMap(),
      r = {},
      o = 0,
      i = function (e) {
        return e && (e.host || i(e.parentNode));
      },
      a = function (e, a, l, c) {
        var s = (Array.isArray(e) ? e : [e])
          .map(function (e) {
            if (a.contains(e)) return e;
            var t = i(e);
            return t && a.contains(t)
              ? t
              : (console.error(
                  'aria-hidden',
                  e,
                  'in not contained inside',
                  a,
                  '. Doing nothing'
                ),
                null);
          })
          .filter(function (e) {
            return !!e;
          });
        r[l] || (r[l] = new WeakMap());
        var u = r[l],
          f = [],
          d = new Set(),
          p = new Set(s),
          h = function (e) {
            !e || d.has(e) || (d.add(e), h(e.parentNode));
          };
        s.forEach(h);
        var m = function (e) {
          !e ||
            p.has(e) ||
            Array.prototype.forEach.call(e.children, function (e) {
              if (d.has(e)) m(e);
              else
                try {
                  var r = e.getAttribute(c),
                    o = null !== r && 'false' !== r,
                    i = (t.get(e) || 0) + 1,
                    a = (u.get(e) || 0) + 1;
                  t.set(e, i),
                    u.set(e, a),
                    f.push(e),
                    1 === i && o && n.set(e, !0),
                    1 === a && e.setAttribute(l, 'true'),
                    o || e.setAttribute(c, 'true');
                } catch (t) {
                  console.error('aria-hidden: cannot operate on ', e, t);
                }
            });
        };
        return (
          m(a),
          d.clear(),
          o++,
          function () {
            f.forEach(function (e) {
              var r = t.get(e) - 1,
                o = u.get(e) - 1;
              t.set(e, r),
                u.set(e, o),
                r || (n.has(e) || e.removeAttribute(c), n.delete(e)),
                o || e.removeAttribute(l);
            }),
              --o ||
                ((t = new WeakMap()),
                (t = new WeakMap()),
                (n = new WeakMap()),
                (r = {}));
          }
        );
      };
    e.s([
      'hideOthers',
      0,
      function (e, t, n) {
        void 0 === n && (n = 'data-aria-hidden');
        var r = Array.from(Array.isArray(e) ? e : [e]),
          o =
            t ||
            ('u' < typeof document
              ? null
              : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
        return o
          ? (r.push.apply(
              r,
              Array.from(o.querySelectorAll('[aria-live], script'))
            ),
            a(r, o, n, 'aria-hidden'))
          : function () {
              return null;
            };
      }
    ]);
  },
  53555,
  (e) => {
    'use strict';
    var t,
      n,
      r,
      o,
      i,
      a,
      l,
      c = function () {
        return (c =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
    function s(e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          0 > t.indexOf(r) &&
          (n[r] = e[r]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          0 > t.indexOf(r[o]) &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    }
    var u =
        ('function' == typeof SuppressedError && SuppressedError, e.i(22034)),
      f = 'right-scroll-bar-position',
      d = 'width-before-scroll-bar';
    function p(e, t) {
      return 'function' == typeof e ? e(t) : e && (e.current = t), e;
    }
    var h = 'u' > typeof window ? u.useLayoutEffect : u.useEffect,
      m = new WeakMap(),
      v =
        (void 0 === t && (t = {}),
        ((void 0 === n &&
          (n = function (e) {
            return e;
          }),
        (r = []),
        (o = !1),
        (i = {
          read: function () {
            if (o)
              throw Error(
                'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
              );
            return r.length ? r[r.length - 1] : null;
          },
          useMedium: function (e) {
            var t = n(e, o);
            return (
              r.push(t),
              function () {
                r = r.filter(function (e) {
                  return e !== t;
                });
              }
            );
          },
          assignSyncMedium: function (e) {
            for (o = !0; r.length; ) {
              var t = r;
              (r = []), t.forEach(e);
            }
            r = {
              push: function (t) {
                return e(t);
              },
              filter: function () {
                return r;
              }
            };
          },
          assignMedium: function (e) {
            o = !0;
            var t = [];
            if (r.length) {
              var n = r;
              (r = []), n.forEach(e), (t = r);
            }
            var i = function () {
                var n = t;
                (t = []), n.forEach(e);
              },
              a = function () {
                return Promise.resolve().then(i);
              };
            a(),
              (r = {
                push: function (e) {
                  t.push(e), a();
                },
                filter: function (e) {
                  return (t = t.filter(e)), r;
                }
              });
          }
        })).options = c({ async: !0, ssr: !1 }, t)),
        i),
      g = function () {},
      w = u.forwardRef(function (e, t) {
        var n,
          r,
          o,
          i,
          a = u.useRef(null),
          l = u.useState({
            onScrollCapture: g,
            onWheelCapture: g,
            onTouchMoveCapture: g
          }),
          f = l[0],
          d = l[1],
          w = e.forwardProps,
          y = e.children,
          C = e.className,
          b = e.removeScrollBar,
          x = e.enabled,
          E = e.shards,
          L = e.sideCar,
          R = e.noRelative,
          S = e.noIsolation,
          A = e.inert,
          P = e.allowPinchZoom,
          O = e.as,
          T = e.gapMode,
          M = s(e, [
            'forwardProps',
            'children',
            'className',
            'removeScrollBar',
            'enabled',
            'shards',
            'sideCar',
            'noRelative',
            'noIsolation',
            'inert',
            'allowPinchZoom',
            'as',
            'gapMode'
          ]),
          k =
            ((n = [a, t]),
            (r = function (e) {
              return n.forEach(function (t) {
                return p(t, e);
              });
            }),
            ((o = (0, u.useState)(function () {
              return {
                value: null,
                callback: r,
                facade: {
                  get current() {
                    return o.value;
                  },
                  set current(value) {
                    var e = o.value;
                    e !== value && ((o.value = value), o.callback(value, e));
                  }
                }
              };
            })[0]).callback = r),
            (i = o.facade),
            h(
              function () {
                var e = m.get(i);
                if (e) {
                  var t = new Set(e),
                    r = new Set(n),
                    o = i.current;
                  t.forEach(function (e) {
                    r.has(e) || p(e, null);
                  }),
                    r.forEach(function (e) {
                      t.has(e) || p(e, o);
                    });
                }
                m.set(i, n);
              },
              [n]
            ),
            i),
          N = c(c({}, M), f);
        return u.createElement(
          u.Fragment,
          null,
          x &&
            u.createElement(L, {
              sideCar: v,
              removeScrollBar: b,
              shards: E,
              noRelative: R,
              noIsolation: S,
              inert: A,
              setCallbacks: d,
              allowPinchZoom: !!P,
              lockRef: a,
              gapMode: T
            }),
          w
            ? u.cloneElement(u.Children.only(y), c(c({}, N), { ref: k }))
            : u.createElement(
                void 0 === O ? 'div' : O,
                c({}, N, { className: C, ref: k }),
                y
              )
        );
      });
    (w.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
      (w.classNames = { fullWidth: d, zeroRight: f });
    var y = function (e) {
      var t = e.sideCar,
        n = s(e, ['sideCar']);
      if (!t)
        throw Error(
          'Sidecar: please provide `sideCar` property to import the right car'
        );
      var r = t.read();
      if (!r) throw Error('Sidecar medium not found');
      return u.createElement(r, c({}, n));
    };
    y.isSideCarExport = !0;
    var C = function () {
        var e = 0,
          t = null;
        return {
          add: function (n) {
            if (
              0 == e &&
              (t = (function () {
                if (!document) return null;
                var e = document.createElement('style');
                e.type = 'text/css';
                var t =
                  l ||
                  ('u' > typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
                return t && e.setAttribute('nonce', t), e;
              })())
            ) {
              var r, o;
              (r = t).styleSheet
                ? (r.styleSheet.cssText = n)
                : r.appendChild(document.createTextNode(n)),
                (o = t),
                (
                  document.head || document.getElementsByTagName('head')[0]
                ).appendChild(o);
            }
            e++;
          },
          remove: function () {
            --e ||
              !t ||
              (t.parentNode && t.parentNode.removeChild(t), (t = null));
          }
        };
      },
      b = function () {
        var e = C();
        return function (t, n) {
          u.useEffect(
            function () {
              return (
                e.add(t),
                function () {
                  e.remove();
                }
              );
            },
            [t && n]
          );
        };
      },
      x = function () {
        var e = b();
        return function (t) {
          return e(t.styles, t.dynamic), null;
        };
      },
      E = { left: 0, top: 0, right: 0, gap: 0 },
      L = function (e) {
        return parseInt(e || '', 10) || 0;
      },
      R = function (e) {
        var t = window.getComputedStyle(document.body),
          n = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
          r = t['padding' === e ? 'paddingTop' : 'marginTop'],
          o = t['padding' === e ? 'paddingRight' : 'marginRight'];
        return [L(n), L(r), L(o)];
      },
      S = function (e) {
        if ((void 0 === e && (e = 'margin'), 'u' < typeof window)) return E;
        var t = R(e),
          n = document.documentElement.clientWidth,
          r = window.innerWidth;
        return {
          left: t[0],
          top: t[1],
          right: t[2],
          gap: Math.max(0, r - n + t[2] - t[0])
        };
      },
      A = x(),
      P = 'data-scroll-locked',
      O = function (e, t, n, r) {
        var o = e.left,
          i = e.top,
          a = e.right,
          l = e.gap;
        return (
          void 0 === n && (n = 'margin'),
          '\n  .'
            .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
            .concat(r, ';\n   padding-right: ')
            .concat(l, 'px ')
            .concat(r, ';\n  }\n  body[')
            .concat(P, '] {\n    overflow: hidden ')
            .concat(r, ';\n    overscroll-behavior: contain;\n    ')
            .concat(
              [
                t && 'position: relative '.concat(r, ';'),
                'margin' === n &&
                  '\n    padding-left: '
                    .concat(o, 'px;\n    padding-top: ')
                    .concat(i, 'px;\n    padding-right: ')
                    .concat(
                      a,
                      'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: '
                    )
                    .concat(l, 'px ')
                    .concat(r, ';\n    '),
                'padding' === n &&
                  'padding-right: '.concat(l, 'px ').concat(r, ';')
              ]
                .filter(Boolean)
                .join(''),
              '\n  }\n  \n  .'
            )
            .concat(f, ' {\n    right: ')
            .concat(l, 'px ')
            .concat(r, ';\n  }\n  \n  .')
            .concat(d, ' {\n    margin-right: ')
            .concat(l, 'px ')
            .concat(r, ';\n  }\n  \n  .')
            .concat(f, ' .')
            .concat(f, ' {\n    right: 0 ')
            .concat(r, ';\n  }\n  \n  .')
            .concat(d, ' .')
            .concat(d, ' {\n    margin-right: 0 ')
            .concat(r, ';\n  }\n  \n  body[')
            .concat(P, '] {\n    ')
            .concat('--removed-body-scroll-bar-size', ': ')
            .concat(l, 'px;\n  }\n')
        );
      },
      T = function () {
        var e = parseInt(document.body.getAttribute(P) || '0', 10);
        return isFinite(e) ? e : 0;
      },
      M = function () {
        u.useEffect(function () {
          return (
            document.body.setAttribute(P, (T() + 1).toString()),
            function () {
              var e = T() - 1;
              e <= 0
                ? document.body.removeAttribute(P)
                : document.body.setAttribute(P, e.toString());
            }
          );
        }, []);
      },
      k = function (e) {
        var t = e.noRelative,
          n = e.noImportant,
          r = e.gapMode,
          o = void 0 === r ? 'margin' : r;
        M();
        var i = u.useMemo(
          function () {
            return S(o);
          },
          [o]
        );
        return u.createElement(A, {
          styles: O(i, !t, o, n ? '' : '!important')
        });
      },
      N = !1;
    if ('u' > typeof window)
      try {
        var D = Object.defineProperty({}, 'passive', {
          get: function () {
            return (N = !0), !0;
          }
        });
        window.addEventListener('test', D, D),
          window.removeEventListener('test', D, D);
      } catch (e) {
        N = !1;
      }
    var j = !!N && { passive: !1 },
      H = function (e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return (
          'hidden' !== n[t] &&
          (n.overflowY !== n.overflowX ||
            'TEXTAREA' === e.tagName ||
            'visible' !== n[t])
        );
      },
      F = function (e, t) {
        var n = t.ownerDocument,
          r = t;
        do {
          if (
            ('u' > typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host),
            W(e, r))
          ) {
            var o = I(e, r);
            if (o[1] > o[2]) return !0;
          }
          r = r.parentNode;
        } while (r && r !== n.body);
        return !1;
      },
      W = function (e, t) {
        return 'v' === e ? H(t, 'overflowY') : H(t, 'overflowX');
      },
      I = function (e, t) {
        return 'v' === e
          ? [t.scrollTop, t.scrollHeight, t.clientHeight]
          : [t.scrollLeft, t.scrollWidth, t.clientWidth];
      },
      B = function (e, t, n, r, o) {
        var i,
          a =
            ((i = window.getComputedStyle(t).direction),
            'h' === e && 'rtl' === i ? -1 : 1),
          l = a * r,
          c = n.target,
          s = t.contains(c),
          u = !1,
          f = l > 0,
          d = 0,
          p = 0;
        do {
          if (!c) break;
          var h = I(e, c),
            m = h[0],
            v = h[1] - h[2] - a * m;
          (m || v) && W(e, c) && ((d += v), (p += m));
          var g = c.parentNode;
          c = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
        } while (
          (!s && c !== document.body) ||
          (s && (t.contains(c) || t === c))
        );
        return (
          f && ((o && 1 > Math.abs(d)) || (!o && l > d))
            ? (u = !0)
            : !f && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (u = !0),
          u
        );
      },
      Z = function (e) {
        return 'changedTouches' in e
          ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
          : [0, 0];
      },
      V = function (e) {
        return [e.deltaX, e.deltaY];
      },
      _ = function (e) {
        return e && 'current' in e ? e.current : e;
      },
      z = 0,
      $ = [];
    let Y =
      ((a = function (e) {
        var t = u.useRef([]),
          n = u.useRef([0, 0]),
          r = u.useRef(),
          o = u.useState(z++)[0],
          i = u.useState(x)[0],
          a = u.useRef(e);
        u.useEffect(
          function () {
            a.current = e;
          },
          [e]
        ),
          u.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add('block-interactivity-'.concat(o));
                var t = (function (e, t, n) {
                  if (n || 2 == arguments.length)
                    for (var r, o = 0, i = t.length; o < i; o++)
                      (!r && o in t) ||
                        (r || (r = Array.prototype.slice.call(t, 0, o)),
                        (r[o] = t[o]));
                  return e.concat(r || Array.prototype.slice.call(t));
                })([e.lockRef.current], (e.shards || []).map(_), !0).filter(
                  Boolean
                );
                return (
                  t.forEach(function (e) {
                    return e.classList.add('allow-interactivity-'.concat(o));
                  }),
                  function () {
                    document.body.classList.remove(
                      'block-interactivity-'.concat(o)
                    ),
                      t.forEach(function (e) {
                        return e.classList.remove(
                          'allow-interactivity-'.concat(o)
                        );
                      });
                  }
                );
              }
            },
            [e.inert, e.lockRef.current, e.shards]
          );
        var l = u.useCallback(function (e, t) {
            if (
              ('touches' in e && 2 === e.touches.length) ||
              ('wheel' === e.type && e.ctrlKey)
            )
              return !a.current.allowPinchZoom;
            var o,
              i = Z(e),
              l = n.current,
              c = 'deltaX' in e ? e.deltaX : l[0] - i[0],
              s = 'deltaY' in e ? e.deltaY : l[1] - i[1],
              u = e.target,
              f = Math.abs(c) > Math.abs(s) ? 'h' : 'v';
            if ('touches' in e && 'h' === f && 'range' === u.type) return !1;
            var d = window.getSelection(),
              p = d && d.anchorNode;
            if (p && (p === u || p.contains(u))) return !1;
            var h = F(f, u);
            if (!h) return !0;
            if (
              (h ? (o = f) : ((o = 'v' === f ? 'h' : 'v'), (h = F(f, u))), !h)
            )
              return !1;
            if (
              (!r.current &&
                'changedTouches' in e &&
                (c || s) &&
                (r.current = o),
              !o)
            )
              return !0;
            var m = r.current || o;
            return B(m, t, e, 'h' === m ? c : s, !0);
          }, []),
          c = u.useCallback(function (e) {
            if ($.length && $[$.length - 1] === i) {
              var n = 'deltaY' in e ? V(e) : Z(e),
                r = t.current.filter(function (t) {
                  var r;
                  return (
                    t.name === e.type &&
                    (t.target === e.target || e.target === t.shadowParent) &&
                    ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                  );
                })[0];
              if (r && r.should) {
                e.cancelable && e.preventDefault();
                return;
              }
              if (!r) {
                var o = (a.current.shards || [])
                  .map(_)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(e.target);
                  });
                (o.length > 0 ? l(e, o[0]) : !a.current.noIsolation) &&
                  e.cancelable &&
                  e.preventDefault();
              }
            }
          }, []),
          s = u.useCallback(function (e, n, r, o) {
            var i = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: (function (e) {
                for (var t = null; null !== e; )
                  e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                    (e = e.parentNode);
                return t;
              })(r)
            };
            t.current.push(i),
              setTimeout(function () {
                t.current = t.current.filter(function (e) {
                  return e !== i;
                });
              }, 1);
          }, []),
          f = u.useCallback(function (e) {
            (n.current = Z(e)), (r.current = void 0);
          }, []),
          d = u.useCallback(function (t) {
            s(t.type, V(t), t.target, l(t, e.lockRef.current));
          }, []),
          p = u.useCallback(function (t) {
            s(t.type, Z(t), t.target, l(t, e.lockRef.current));
          }, []);
        u.useEffect(function () {
          return (
            $.push(i),
            e.setCallbacks({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: p
            }),
            document.addEventListener('wheel', c, j),
            document.addEventListener('touchmove', c, j),
            document.addEventListener('touchstart', f, j),
            function () {
              ($ = $.filter(function (e) {
                return e !== i;
              })),
                document.removeEventListener('wheel', c, j),
                document.removeEventListener('touchmove', c, j),
                document.removeEventListener('touchstart', f, j);
            }
          );
        }, []);
        var h = e.removeScrollBar,
          m = e.inert;
        return u.createElement(
          u.Fragment,
          null,
          m
            ? u.createElement(i, {
                styles: '\n  .block-interactivity-'
                  .concat(
                    o,
                    ' {pointer-events: none;}\n  .allow-interactivity-'
                  )
                  .concat(o, ' {pointer-events: all;}\n')
              })
            : null,
          h
            ? u.createElement(k, {
                noRelative: e.noRelative,
                gapMode: e.gapMode
              })
            : null
        );
      }),
      v.useMedium(a),
      y);
    var K = u.forwardRef(function (e, t) {
      return u.createElement(w, c({}, e, { ref: t, sideCar: Y }));
    });
    (K.classNames = w.classNames), e.s(['RemoveScroll', 0, K], 53555);
  },
  60617,
  (e) => {
    'use strict';
    var t = e.i(22034);
    function n(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
    }
    var r = ['color'],
      o = (0, t.forwardRef)(function (e, o) {
        var i = e.color,
          a = n(e, r);
        return (0, t.createElement)(
          'svg',
          Object.assign(
            {
              width: '15',
              height: '15',
              viewBox: '0 0 15 15',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg'
            },
            a,
            { ref: o }
          ),
          (0, t.createElement)('path', {
            d: 'M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z',
            fill: void 0 === i ? 'currentColor' : i,
            fillRule: 'evenodd',
            clipRule: 'evenodd'
          })
        );
      }),
      i = ['color'],
      a = (0, t.forwardRef)(function (e, r) {
        var o = e.color,
          a = n(e, i);
        return (0, t.createElement)(
          'svg',
          Object.assign(
            {
              width: '15',
              height: '15',
              viewBox: '0 0 15 15',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg'
            },
            a,
            { ref: r }
          ),
          (0, t.createElement)('path', {
            d: 'M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z',
            fill: void 0 === o ? 'currentColor' : o,
            fillRule: 'evenodd',
            clipRule: 'evenodd'
          })
        );
      }),
      l = ['color'],
      c = (0, t.forwardRef)(function (e, r) {
        var o = e.color,
          i = n(e, l);
        return (0, t.createElement)(
          'svg',
          Object.assign(
            {
              width: '15',
              height: '15',
              viewBox: '0 0 15 15',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg'
            },
            i,
            { ref: r }
          ),
          (0, t.createElement)('path', {
            d: 'M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z',
            fill: void 0 === o ? 'currentColor' : o,
            fillRule: 'evenodd',
            clipRule: 'evenodd'
          })
        );
      }),
      s = ['color'],
      u = (0, t.forwardRef)(function (e, r) {
        var o = e.color,
          i = n(e, s);
        return (0, t.createElement)(
          'svg',
          Object.assign(
            {
              width: '15',
              height: '15',
              viewBox: '0 0 15 15',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg'
            },
            i,
            { ref: r }
          ),
          (0, t.createElement)('path', {
            d: 'M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z',
            fill: void 0 === o ? 'currentColor' : o,
            fillRule: 'evenodd',
            clipRule: 'evenodd'
          })
        );
      }),
      f = ['color'],
      d = (0, t.forwardRef)(function (e, r) {
        var o = e.color,
          i = n(e, f);
        return (0, t.createElement)(
          'svg',
          Object.assign(
            {
              width: '15',
              height: '15',
              viewBox: '0 0 15 15',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg'
            },
            i,
            { ref: r }
          ),
          (0, t.createElement)('path', {
            d: 'M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z',
            fill: void 0 === o ? 'currentColor' : o,
            fillRule: 'evenodd',
            clipRule: 'evenodd'
          })
        );
      }),
      p = ['color'],
      h = (0, t.forwardRef)(function (e, r) {
        var o = e.color,
          i = n(e, p);
        return (0, t.createElement)(
          'svg',
          Object.assign(
            {
              width: '15',
              height: '15',
              viewBox: '0 0 15 15',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg'
            },
            i,
            { ref: r }
          ),
          (0, t.createElement)('path', {
            d: 'M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z',
            fill: void 0 === o ? 'currentColor' : o
          })
        );
      }),
      m = ['color'],
      v = (0, t.forwardRef)(function (e, r) {
        var o = e.color,
          i = n(e, m);
        return (0, t.createElement)(
          'svg',
          Object.assign(
            {
              width: '15',
              height: '15',
              viewBox: '0 0 15 15',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg'
            },
            i,
            { ref: r }
          ),
          (0, t.createElement)('path', {
            d: 'M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z',
            fill: void 0 === o ? 'currentColor' : o,
            fillRule: 'evenodd',
            clipRule: 'evenodd'
          })
        );
      }),
      g = ['color'],
      w = (0, t.forwardRef)(function (e, r) {
        var o = e.color,
          i = n(e, g);
        return (0, t.createElement)(
          'svg',
          Object.assign(
            {
              width: '15',
              height: '15',
              viewBox: '0 0 15 15',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg'
            },
            i,
            { ref: r }
          ),
          (0, t.createElement)('path', {
            d: 'M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z',
            fill: void 0 === o ? 'currentColor' : o,
            fillRule: 'evenodd',
            clipRule: 'evenodd'
          })
        );
      }),
      y = ['color'],
      C = (0, t.forwardRef)(function (e, r) {
        var o = e.color,
          i = n(e, y);
        return (0, t.createElement)(
          'svg',
          Object.assign(
            {
              width: '15',
              height: '15',
              viewBox: '0 0 15 15',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg'
            },
            i,
            { ref: r }
          ),
          (0, t.createElement)('path', {
            d: 'M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z',
            fill: void 0 === o ? 'currentColor' : o,
            fillRule: 'evenodd',
            clipRule: 'evenodd'
          })
        );
      });
    e.s([
      'CaretSortIcon',
      0,
      o,
      'CheckIcon',
      0,
      a,
      'ChevronDownIcon',
      0,
      c,
      'ChevronRightIcon',
      0,
      u,
      'Cross2Icon',
      0,
      d,
      'DotFilledIcon',
      0,
      h,
      'DotsHorizontalIcon',
      0,
      v,
      'MoonIcon',
      0,
      w,
      'SunIcon',
      0,
      C
    ]);
  },
  72436,
  (e) => {
    'use strict';
    var t = e.i(29971),
      n = e.i(22034),
      r = e.i(60111),
      o = 'horizontal',
      i = ['horizontal', 'vertical'],
      a = n.forwardRef((e, n) => {
        var a;
        let { decorative: l, orientation: c = o, ...s } = e,
          u = ((a = c), i.includes(a)) ? c : o;
        return (0, t.jsx)(r.Primitive.div, {
          'data-orientation': u,
          ...(l
            ? { role: 'none' }
            : {
                'aria-orientation': 'vertical' === u ? u : void 0,
                role: 'separator'
              }),
          ...s,
          ref: n
        });
      });
    a.displayName = 'Separator';
    var l = e.i(75157);
    let c = n.forwardRef(
      (
        {
          className: e,
          orientation: n = 'horizontal',
          decorative: r = !0,
          ...o
        },
        i
      ) =>
        (0, t.jsx)(a, {
          ref: i,
          decorative: r,
          orientation: n,
          className: (0, l.cn)(
            'shrink-0 bg-border',
            'horizontal' === n ? 'h-[1px] w-full' : 'h-full w-[1px]',
            e
          ),
          ...o
        })
    );
    (c.displayName = a.displayName), e.s(['Separator', 0, c], 72436);
  },
  92321,
  (e) => {
    'use strict';
    var t = e.i(22034),
      n = e.i(20255),
      r = e.i(29971),
      o = Object.freeze({
        position: 'absolute',
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal'
      }),
      i = t.forwardRef((e, t) =>
        (0, r.jsx)(n.Primitive.span, {
          ...e,
          ref: t,
          style: { ...o, ...e.style }
        })
      );
    (i.displayName = 'VisuallyHidden'),
      e.s(['Root', 0, i, 'VISUALLY_HIDDEN_STYLES', 0, o]);
  }
]);
