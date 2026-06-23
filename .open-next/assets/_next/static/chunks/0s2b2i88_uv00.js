(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  33296,
  (e) => {
    'use strict';
    e.s([
      'navItems',
      0,
      [
        {
          title: 'Console',
          url: '/dashboard/overview',
          icon: 'dashboard',
          isActive: !1,
          shortcut: ['d', 'd'],
          items: []
        },
        {
          title: 'Workers',
          url: '/dashboard/workers',
          icon: 'user2',
          shortcut: ['w', 'w'],
          isActive: !1,
          items: []
        },
        {
          title: 'Rewards',
          url: '/dashboard/rewards',
          icon: 'billing',
          shortcut: ['w', 'w'],
          isActive: !1,
          items: []
        },
        {
          title: 'Playground',
          url: '/dashboard/api-usage',
          icon: 'flask',
          shortcut: ['p', 'p'],
          isActive: !1,
          items: []
        },
        {
          title: 'API Docs',
          url: '/api-doc',
          icon: 'network',
          shortcut: ['r', 'r'],
          isActive: !1,
          items: []
        },
        {
          title: 'Settings',
          url: '/dashboard/settings',
          icon: 'settings',
          isActive: !0,
          shortcut: ['s', 's'],
          items: []
        }
      ]
    ]);
  },
  51380,
  (e, t, r) => {
    'use strict';
    var n =
        (e.e && e.e.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
      a =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  }
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      o =
        (e.e && e.e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (e.e && e.e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              'default' !== r &&
                Object.prototype.hasOwnProperty.call(e, r) &&
                a(t, e, r);
          return o(t, e), t;
        },
      s =
        (e.e && e.e.__spreadArray) ||
        function (e, t, r) {
          if (r || 2 == arguments.length)
            for (var n, a = 0, o = t.length; a < o; a++)
              (!n && a in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, a)), (n[a] = t[a]));
          return e.concat(n || Array.prototype.slice.call(t));
        };
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.Priority =
        r.isModKey =
        r.shouldRejectKeystrokes =
        r.useThrottledValue =
        r.getScrollbarWidth =
        r.useIsomorphicLayout =
        r.noop =
        r.createAction =
        r.randomId =
        r.usePointerMovedSinceMount =
        r.useOuterClick =
        r.swallowEvent =
          void 0);
    var l = i(e.r(22034));
    function u() {
      return Math.random().toString(36).substring(2, 9);
    }
    function c() {}
    (r.swallowEvent = function (e) {
      e.stopPropagation(), e.preventDefault();
    }),
      (r.useOuterClick = function (e, t) {
        var r = l.useRef(t);
        (r.current = t),
          l.useEffect(
            function () {
              function t(t) {
                var n, a;
                (null != (n = e.current) && n.contains(t.target)) ||
                  t.target ===
                    (null == (a = e.current) ? void 0 : a.getRootNode().host) ||
                  (t.preventDefault(), t.stopPropagation(), r.current());
              }
              return (
                window.addEventListener('pointerdown', t, !0),
                function () {
                  return window.removeEventListener('pointerdown', t, !0);
                }
              );
            },
            [e]
          );
      }),
      (r.usePointerMovedSinceMount = function () {
        var e = l.useState(!1),
          t = e[0],
          r = e[1];
        return (
          l.useEffect(
            function () {
              function e() {
                r(!0);
              }
              if (!t)
                return (
                  window.addEventListener('pointermove', e),
                  function () {
                    return window.removeEventListener('pointermove', e);
                  }
                );
            },
            [t]
          ),
          t
        );
      }),
      (r.randomId = u),
      (r.createAction = function (e) {
        return n({ id: u() }, e);
      }),
      (r.noop = c),
      (r.useIsomorphicLayout = 'u' < typeof window ? c : l.useLayoutEffect),
      (r.getScrollbarWidth = function () {
        var e = document.createElement('div');
        (e.style.visibility = 'hidden'),
          (e.style.overflow = 'scroll'),
          document.body.appendChild(e);
        var t = document.createElement('div');
        e.appendChild(t);
        var r = e.offsetWidth - t.offsetWidth;
        return e.parentNode.removeChild(e), r;
      }),
      (r.useThrottledValue = function (e, t) {
        void 0 === t && (t = 100);
        var r = l.useState(e),
          n = r[0],
          a = r[1],
          o = l.useRef(Date.now());
        return (
          l.useEffect(
            function () {
              if (0 !== t) {
                var r = setTimeout(
                  function () {
                    a(e), (o.current = Date.now());
                  },
                  o.current - (Date.now() - t)
                );
                return function () {
                  clearTimeout(r);
                };
              }
            },
            [t, e]
          ),
          0 === t ? e : n
        );
      }),
      (r.shouldRejectKeystrokes = function (e) {
        var t,
          r,
          n,
          a = s(
            ['input', 'textarea'],
            (void 0 === e ? { ignoreWhenFocused: [] } : e).ignoreWhenFocused,
            !0
          ).map(function (e) {
            return e.toLowerCase();
          }),
          o = document.activeElement;
        return (
          o &&
          (-1 !== a.indexOf(o.tagName.toLowerCase()) ||
            (null == (t = o.attributes.getNamedItem('role'))
              ? void 0
              : t.value) === 'textbox' ||
            (null == (r = o.attributes.getNamedItem('contenteditable'))
              ? void 0
              : r.value) === 'true' ||
            (null == (n = o.attributes.getNamedItem('contenteditable'))
              ? void 0
              : n.value) === 'plaintext-only')
        );
      });
    var d = !('u' < typeof window) && 'MacIntel' === window.navigator.platform;
    (r.isModKey = function (e) {
      return d ? e.metaKey : e.ctrlKey;
    }),
      (r.Priority = { HIGH: 1, NORMAL: 0, LOW: -1 });
  },
  19261,
  (e, t, r) => {
    e.e,
      (function (e) {
        'use strict';
        var t = Object.keys;
        function r(e, t) {
          return e === t || (e != e && t != t);
        }
        function n(e) {
          return e.constructor === Object || null == e.constructor;
        }
        function a(e) {
          return !!e && 'function' == typeof e.then;
        }
        function o(e) {
          return !!(e && e.$$typeof);
        }
        var i =
          'function' == typeof WeakSet
            ? function () {
                return new WeakSet();
              }
            : function () {
                var e = [];
                return {
                  add: function (t) {
                    e.push(t);
                  },
                  has: function (t) {
                    return -1 !== e.indexOf(t);
                  }
                };
              };
        function s(e) {
          return function (t) {
            var r = e || t;
            return function (e, t, n) {
              void 0 === n && (n = i());
              var a = !!e && 'object' == typeof e,
                o = !!t && 'object' == typeof t;
              if (a || o) {
                var s = a && n.has(e),
                  l = o && n.has(t);
                if (s || l) return s && l;
                a && n.add(e), o && n.add(t);
              }
              return r(e, t, n);
            };
          };
        }
        var l = Function.prototype.bind.call(
          Function.prototype.call,
          Object.prototype.hasOwnProperty
        );
        function u(e, r, n, a) {
          var i = t(e),
            s = i.length;
          if (t(r).length !== s) return !1;
          if (s)
            for (var u = void 0; s-- > 0; ) {
              if ('_owner' === (u = i[s])) {
                var c = o(e),
                  d = o(r);
                if ((c || d) && c !== d) return !1;
              }
              if (!l(r, u) || !n(e[u], r[u], a)) return !1;
            }
          return !0;
        }
        var c = 'function' == typeof Map,
          d = 'function' == typeof Set;
        function f(e) {
          var t = 'function' == typeof e ? e(o) : o;
          function o(e, o, i) {
            if (e === o) return !0;
            if (e && o && 'object' == typeof e && 'object' == typeof o) {
              if (n(e) && n(o)) return u(e, o, t, i);
              var s = Array.isArray(e),
                l = Array.isArray(o);
              return s || l
                ? s === l &&
                    (function (e, t, r, n) {
                      var a = e.length;
                      if (t.length !== a) return !1;
                      for (; a-- > 0; ) if (!r(e[a], t[a], n)) return !1;
                      return !0;
                    })(e, o, t, i)
                : ((s = e instanceof Date), (l = o instanceof Date), s || l)
                  ? s === l && r(e.getTime(), o.getTime())
                  : ((s = e instanceof RegExp),
                      (l = o instanceof RegExp),
                      s || l)
                    ? s === l &&
                      e.source === o.source &&
                      e.global === o.global &&
                      e.ignoreCase === o.ignoreCase &&
                      e.multiline === o.multiline &&
                      e.unicode === o.unicode &&
                      e.sticky === o.sticky &&
                      e.lastIndex === o.lastIndex
                    : a(e) || a(o)
                      ? e === o
                      : c &&
                          ((s = e instanceof Map),
                          (l = o instanceof Map),
                          s || l)
                        ? s === l &&
                          (function (e, t, r, n) {
                            var a = e.size === t.size;
                            if (a && e.size) {
                              var o = {};
                              e.forEach(function (e, i) {
                                if (a) {
                                  var s = !1,
                                    l = 0;
                                  t.forEach(function (t, a) {
                                    !s &&
                                      !o[l] &&
                                      (s = r(i, a, n) && r(e, t, n)) &&
                                      (o[l] = !0),
                                      l++;
                                  }),
                                    (a = s);
                                }
                              });
                            }
                            return a;
                          })(e, o, t, i)
                        : d &&
                            ((s = e instanceof Set),
                            (l = o instanceof Set),
                            s || l)
                          ? s === l &&
                            (function (e, t, r, n) {
                              var a = e.size === t.size;
                              if (a && e.size) {
                                var o = {};
                                e.forEach(function (e) {
                                  if (a) {
                                    var i = !1,
                                      s = 0;
                                    t.forEach(function (t) {
                                      !i &&
                                        !o[s] &&
                                        (i = r(e, t, n)) &&
                                        (o[s] = !0),
                                        s++;
                                    }),
                                      (a = i);
                                  }
                                });
                              }
                              return a;
                            })(e, o, t, i)
                          : u(e, o, t, i);
            }
            return e != e && o != o;
          }
          return o;
        }
        var p = f(),
          h = f(function () {
            return r;
          }),
          m = f(s()),
          v = f(s(r));
        (e.circularDeepEqual = m),
          (e.circularShallowEqual = v),
          (e.createCustomEqual = f),
          (e.deepEqual = p),
          (e.sameValueZeroEqual = r),
          (e.shallowEqual = h),
          Object.defineProperty(e, '__esModule', { value: !0 });
      })(r);
  },
  41678,
  (e, t, r) => {
    'use strict';
    t.exports = function (e, t) {
      if (!e) throw Error('Invariant failed');
    };
  },
  47665,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.Command = void 0),
      (r.Command = function (e, t) {
        var r = this;
        void 0 === t && (t = {}),
          (this.perform = function () {
            var n = e.perform();
            if ('function' == typeof n) {
              var a = t.history;
              a &&
                (r.historyItem && a.remove(r.historyItem),
                (r.historyItem = a.add({ perform: e.perform, negate: n })),
                (r.history = {
                  undo: function () {
                    return a.undo(r.historyItem);
                  },
                  redo: function () {
                    return a.redo(r.historyItem);
                  }
                }));
            }
          });
      });
  },
  70120,
  (e, t, r) => {
    'use strict';
    var n =
      (e.e && e.e.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.ActionImpl = void 0);
    var a = n(e.r(41678)),
      o = e.r(47665),
      i = e.r(51380),
      s = function (e) {
        var t = e.keywords,
          r = e.section,
          n = void 0 === r ? '' : r;
        return (
          (void 0 === t ? '' : t) +
          ' ' +
          ('string' == typeof n ? n : n.name)
        ).trim();
      };
    r.ActionImpl = (function () {
      function e(e, t) {
        var r,
          n = this;
        (this.priority = i.Priority.NORMAL),
          (this.ancestors = []),
          (this.children = []),
          Object.assign(this, e),
          (this.id = e.id),
          (this.name = e.name),
          (this.keywords = s(e));
        var l = e.perform;
        if (
          ((this.command =
            l &&
            new o.Command(
              {
                perform: function () {
                  return l(n);
                }
              },
              { history: t.history }
            )),
          (this.perform = null == (r = this.command) ? void 0 : r.perform),
          e.parent)
        ) {
          var u = t.store[e.parent];
          (0, a.default)(
            u,
            'attempted to create an action whos parent: ' +
              e.parent +
              ' does not exist in the store.'
          ),
            u.addChild(this);
        }
      }
      return (
        (e.prototype.addChild = function (e) {
          e.ancestors.unshift(this);
          for (var t = this.parentActionImpl; t; )
            e.ancestors.unshift(t), (t = t.parentActionImpl);
          this.children.push(e);
        }),
        (e.prototype.removeChild = function (e) {
          var t = this,
            r = this.children.indexOf(e);
          -1 !== r && this.children.splice(r, 1),
            e.children &&
              e.children.forEach(function (e) {
                t.removeChild(e);
              });
        }),
        Object.defineProperty(e.prototype, 'parentActionImpl', {
          get: function () {
            return this.ancestors[this.ancestors.length - 1];
          },
          enumerable: !1,
          configurable: !0
        }),
        (e.create = function (t, r) {
          return new e(t, r);
        }),
        e
      );
    })();
  },
  52588,
  (e, t, r) => {
    'use strict';
    var n =
        (e.e && e.e.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
      a =
        (e.e && e.e.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.ActionInterface = void 0);
    var o = a(e.r(41678)),
      i = e.r(70120);
    r.ActionInterface = (function () {
      function e(e, t) {
        void 0 === e && (e = []),
          void 0 === t && (t = {}),
          (this.actions = {}),
          (this.options = t),
          this.add(e);
      }
      return (
        (e.prototype.add = function (e) {
          for (var t = 0; t < e.length; t++) {
            var r = e[t];
            r.parent &&
              (0, o.default)(
                this.actions[r.parent],
                'Attempted to create action "' +
                  r.name +
                  '" without registering its parent "' +
                  r.parent +
                  '" first.'
              ),
              (this.actions[r.id] = i.ActionImpl.create(r, {
                history: this.options.historyManager,
                store: this.actions
              }));
          }
          return n({}, this.actions);
        }),
        (e.prototype.remove = function (e) {
          var t = this;
          return (
            e.forEach(function (e) {
              var r = t.actions[e.id];
              if (r) {
                for (var n = r.children; n.length; ) {
                  var a = n.pop();
                  if (!a) return;
                  delete t.actions[a.id],
                    a.parentActionImpl && a.parentActionImpl.removeChild(a),
                    a.children && n.push.apply(n, a.children);
                }
                r.parentActionImpl && r.parentActionImpl.removeChild(r),
                  delete t.actions[e.id];
              }
            }),
            n({}, this.actions)
          );
        }),
        e
      );
    })();
  },
  86194,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.history = r.HistoryItemImpl = void 0);
    var n = e.r(51380),
      a = (function () {
        function e(e) {
          (this.perform = e.perform), (this.negate = e.negate);
        }
        return (
          (e.create = function (t) {
            return new e(t);
          }),
          e
        );
      })();
    r.HistoryItemImpl = a;
    var o = new ((function () {
      function e() {
        return (
          (this.undoStack = []),
          (this.redoStack = []),
          e.instance || ((e.instance = this), this.init()),
          e.instance
        );
      }
      return (
        (e.prototype.init = function () {
          var e = this;
          'u' > typeof window &&
            window.addEventListener('keydown', function (t) {
              if (
                !(
                  (!e.redoStack.length && !e.undoStack.length) ||
                  (0, n.shouldRejectKeystrokes)()
                )
              ) {
                var r,
                  a = null == (r = t.key) ? void 0 : r.toLowerCase();
                t.metaKey && 'z' === a && t.shiftKey
                  ? e.redo()
                  : t.metaKey && 'z' === a && e.undo();
              }
            });
        }),
        (e.prototype.add = function (e) {
          var t = a.create(e);
          return this.undoStack.push(t), t;
        }),
        (e.prototype.remove = function (e) {
          var t = this.undoStack.findIndex(function (t) {
            return t === e;
          });
          if (-1 !== t) return void this.undoStack.splice(t, 1);
          var r = this.redoStack.findIndex(function (t) {
            return t === e;
          });
          -1 !== r && this.redoStack.splice(r, 1);
        }),
        (e.prototype.undo = function (e) {
          if (!e) {
            var t = this.undoStack.pop();
            if (!t) return;
            return null == t || t.negate(), this.redoStack.push(t), t;
          }
          var r = this.undoStack.findIndex(function (t) {
            return t === e;
          });
          if (-1 !== r)
            return (
              this.undoStack.splice(r, 1), e.negate(), this.redoStack.push(e), e
            );
        }),
        (e.prototype.redo = function (e) {
          if (!e) {
            var t = this.redoStack.pop();
            if (!t) return;
            return null == t || t.perform(), this.undoStack.push(t), t;
          }
          var r = this.redoStack.findIndex(function (t) {
            return t === e;
          });
          if (-1 !== r)
            return (
              this.redoStack.splice(r, 1),
              e.perform(),
              this.undoStack.push(e),
              e
            );
        }),
        (e.prototype.reset = function () {
          this.undoStack.splice(0), this.redoStack.splice(0);
        }),
        e
      );
    })())();
    (r.history = o), Object.freeze(o);
  },
  98605,
  (e, t, r) => {
    'use strict';
    var n;
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.VisualState = void 0),
      ((n = r.VisualState || (r.VisualState = {})).animatingIn =
        'animating-in'),
      (n.showing = 'showing'),
      (n.animatingOut = 'animating-out'),
      (n.hidden = 'hidden');
  },
  55263,
  (e, t, r) => {
    'use strict';
    var n =
        (e.e && e.e.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
      a =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  }
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      o =
        (e.e && e.e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (e.e && e.e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              'default' !== r &&
                Object.prototype.hasOwnProperty.call(e, r) &&
                a(t, e, r);
          return o(t, e), t;
        },
      s =
        (e.e && e.e.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.useStore = void 0);
    var l = e.r(19261),
      u = i(e.r(22034)),
      c = s(e.r(41678)),
      d = e.r(52588),
      f = e.r(86194),
      p = e.r(98605);
    r.useStore = function (e) {
      var t = u.useRef(
          n({ animations: { enterMs: 200, exitMs: 100 } }, e.options)
        ),
        r = u.useMemo(function () {
          return new d.ActionInterface(e.actions || [], {
            historyManager: t.current.enableHistory ? f.history : void 0
          });
        }, []),
        a = u.useState({
          searchQuery: '',
          currentRootActionId: null,
          visualState: p.VisualState.hidden,
          actions: n({}, r.actions),
          activeIndex: 0,
          disabled: !1
        }),
        o = a[0],
        i = a[1],
        s = u.useRef(o);
      s.current = o;
      var l = u.useCallback(function () {
          return s.current;
        }, []),
        m = u.useMemo(
          function () {
            return new h(l);
          },
          [l]
        );
      u.useEffect(
        function () {
          (s.current = o), m.notify();
        },
        [o, m]
      );
      var v = u.useCallback(
          function (e) {
            return (
              i(function (t) {
                return n(n({}, t), { actions: r.add(e) });
              }),
              function () {
                i(function (t) {
                  return n(n({}, t), { actions: r.remove(e) });
                });
              }
            );
          },
          [r]
        ),
        g = u.useRef(null);
      return u.useMemo(
        function () {
          return {
            getState: l,
            query: {
              setCurrentRootAction: function (e) {
                i(function (t) {
                  return n(n({}, t), { currentRootActionId: e });
                });
              },
              setVisualState: function (e) {
                i(function (t) {
                  return n(n({}, t), {
                    visualState: 'function' == typeof e ? e(t.visualState) : e
                  });
                });
              },
              setSearch: function (e) {
                return i(function (t) {
                  return n(n({}, t), { searchQuery: e });
                });
              },
              registerActions: v,
              toggle: function () {
                return i(function (e) {
                  return n(n({}, e), {
                    visualState: [
                      p.VisualState.animatingOut,
                      p.VisualState.hidden
                    ].includes(e.visualState)
                      ? p.VisualState.animatingIn
                      : p.VisualState.animatingOut
                  });
                });
              },
              setActiveIndex: function (e) {
                return i(function (t) {
                  return n(n({}, t), {
                    activeIndex: 'number' == typeof e ? e : e(t.activeIndex)
                  });
                });
              },
              inputRefSetter: function (e) {
                g.current = e;
              },
              getInput: function () {
                return (
                  (0, c.default)(
                    g.current,
                    'Input ref is undefined, make sure you attach `query.inputRefSetter` to your search input.'
                  ),
                  g.current
                );
              },
              disable: function (e) {
                i(function (t) {
                  return n(n({}, t), { disabled: e });
                });
              }
            },
            options: t.current,
            subscribe: function (e, t) {
              return m.subscribe(e, t);
            }
          };
        },
        [l, m, v]
      );
    };
    var h = (function () {
        function e(e) {
          (this.subscribers = []), (this.getState = e);
        }
        return (
          (e.prototype.subscribe = function (e, t) {
            var r = this,
              n = new m(function () {
                return e(r.getState());
              }, t);
            return this.subscribers.push(n), this.unsubscribe.bind(this, n);
          }),
          (e.prototype.unsubscribe = function (e) {
            if (this.subscribers.length) {
              var t = this.subscribers.indexOf(e);
              if (t > -1) return this.subscribers.splice(t, 1);
            }
          }),
          (e.prototype.notify = function () {
            this.subscribers.forEach(function (e) {
              return e.collect();
            });
          }),
          e
        );
      })(),
      m = (function () {
        function e(e, t) {
          (this.collector = e), (this.onChange = t);
        }
        return (
          (e.prototype.collect = function () {
            try {
              var e = this.collector();
              !(0, l.deepEqual)(e, this.collected) &&
                ((this.collected = e),
                this.onChange && this.onChange(this.collected));
            } catch (e) {
              console.warn(e);
            }
          }),
          e
        );
      })();
  },
  74082,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = ['Shift', 'Meta', 'Alt', 'Control'],
      a =
        'object' == typeof navigator &&
        /Mac|iPod|iPhone|iPad/.test(navigator.platform)
          ? 'Meta'
          : 'Control';
    function o(e, t) {
      return 'function' == typeof e.getModifierState && e.getModifierState(t);
    }
    r.default = function (e, t, r) {
      void 0 === r && (r = {});
      var i,
        s,
        l = null != (i = r.timeout) ? i : 1e3,
        u = null != (s = r.event) ? s : 'keydown',
        c = Object.keys(t).map(function (e) {
          return [
            e
              .trim()
              .split(' ')
              .map(function (e) {
                var t = e.split(/\b\+/),
                  r = t.pop();
                return [
                  (t = t.map(function (e) {
                    return '$mod' === e ? a : e;
                  })),
                  r
                ];
              }),
            t[e]
          ];
        }),
        d = new Map(),
        f = null,
        p = function (e) {
          e instanceof KeyboardEvent &&
            (c.forEach(function (t) {
              var r = t[0],
                a = t[1],
                i = d.get(r) || r,
                s = i[0];
              (/^[^A-Za-z0-9]$/.test(e.key) && s[1] === e.key) ||
              !(
                (s[1].toUpperCase() !== e.key.toUpperCase() &&
                  s[1] !== e.code) ||
                s[0].find(function (t) {
                  return !o(e, t);
                }) ||
                n.find(function (t) {
                  return !s[0].includes(t) && s[1] !== t && o(e, t);
                })
              )
                ? i.length > 1
                  ? d.set(r, i.slice(1))
                  : (d.delete(r), a(e))
                : o(e, e.key) || d.delete(r);
            }),
            f && clearTimeout(f),
            (f = setTimeout(d.clear.bind(d), l)));
        };
      return (
        e.addEventListener(u, p),
        function () {
          e.removeEventListener(u, p);
        }
      );
    };
  },
  76232,
  (e, t, r) => {
    'use strict';
    var n =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  }
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      a =
        (e.e && e.e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      o =
        (e.e && e.e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              'default' !== r &&
                Object.prototype.hasOwnProperty.call(e, r) &&
                n(t, e, r);
          return a(t, e), t;
        },
      i =
        (e.e && e.e.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.InternalEvents = void 0);
    var s = o(e.r(22034)),
      l = i(e.r(74082)),
      u = e.r(98605),
      c = e.r(85940),
      d = e.r(51380);
    r.InternalEvents = function () {
      var e,
        t,
        r,
        n,
        a,
        o,
        i,
        p,
        h,
        m,
        v,
        g,
        b,
        y,
        x,
        w,
        j,
        S,
        _,
        O,
        M,
        k,
        C,
        R;
      return (
        (n = (r = (0, c.useKBar)(function (e) {
          return {
            visualState: e.visualState,
            showing: e.visualState !== u.VisualState.hidden,
            disabled: e.disabled
          };
        })).query),
        (a = r.options),
        (o = r.visualState),
        (i = r.showing),
        (p = r.disabled),
        s.useEffect(
          function () {
            var e,
              t = function () {
                n.setVisualState(function (e) {
                  return e === u.VisualState.hidden ||
                    e === u.VisualState.animatingOut
                    ? e
                    : u.VisualState.animatingOut;
                });
              };
            if (p) return void t();
            var r = a.toggleShortcut || '$mod+k',
              o = (0, l.default)(
                window,
                (((e = {})[r] = function (e) {
                  var t, r, o, s;
                  e.defaultPrevented ||
                    (e.preventDefault(),
                    n.toggle(),
                    i
                      ? null ==
                          (r =
                            null == (t = a.callbacks) ? void 0 : t.onClose) ||
                        r.call(t)
                      : null ==
                          (s = null == (o = a.callbacks) ? void 0 : o.onOpen) ||
                        s.call(o));
                }),
                (e.Escape = function (e) {
                  var r, n;
                  i &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    null ==
                      (n = null == (r = a.callbacks) ? void 0 : r.onClose) ||
                      n.call(r)),
                    t();
                }),
                e)
              );
            return function () {
              o();
            };
          },
          [a.callbacks, a.toggleShortcut, n, i, p]
        ),
        (h = s.useRef()),
        (m = s.useCallback(
          function (e) {
            var t,
              r,
              o = 0;
            e === u.VisualState.animatingIn &&
              (o = (null == (t = a.animations) ? void 0 : t.enterMs) || 0),
              e === u.VisualState.animatingOut &&
                (o = (null == (r = a.animations) ? void 0 : r.exitMs) || 0),
              clearTimeout(h.current),
              (h.current = setTimeout(function () {
                var t = !1;
                n.setVisualState(function () {
                  var r =
                    e === u.VisualState.animatingIn
                      ? u.VisualState.showing
                      : u.VisualState.hidden;
                  return r === u.VisualState.hidden && (t = !0), r;
                }),
                  t && n.setCurrentRootAction(null);
              }, o));
          },
          [
            null == (e = a.animations) ? void 0 : e.enterMs,
            null == (t = a.animations) ? void 0 : t.exitMs,
            n
          ]
        )),
        s.useEffect(
          function () {
            switch (o) {
              case u.VisualState.animatingIn:
              case u.VisualState.animatingOut:
                m(o);
            }
          },
          [m, o]
        ),
        (g = (v = (0, c.useKBar)(function (e) {
          return { visualState: e.visualState };
        })).visualState),
        (b = v.options),
        s.useEffect(
          function () {
            if (!b.disableDocumentLock)
              if (g === u.VisualState.animatingIn) {
                if (
                  ((document.body.style.overflow = 'hidden'),
                  !b.disableScrollbarManagement)
                ) {
                  var e = (0, d.getScrollbarWidth)(),
                    t = getComputedStyle(document.body)['margin-right'];
                  t && (e += Number(t.replace(/\D/g, ''))),
                    (document.body.style.marginRight = e + 'px');
                }
              } else
                g === u.VisualState.hidden &&
                  (document.body.style.removeProperty('overflow'),
                  b.disableScrollbarManagement ||
                    document.body.style.removeProperty('margin-right'));
          },
          [b.disableDocumentLock, b.disableScrollbarManagement, g]
        ),
        (x = (y = (0, c.useKBar)(function (e) {
          return {
            actions: e.actions,
            open: e.visualState === u.VisualState.showing,
            disabled: e.disabled
          };
        })).actions),
        (w = y.query),
        (j = y.open),
        (S = y.options),
        (_ = y.disabled),
        s.useEffect(
          function () {
            if (!j && !_) {
              for (
                var e,
                  t = Object.keys(x).map(function (e) {
                    return x[e];
                  }),
                  r = [],
                  n = 0;
                n < t.length;
                n++
              ) {
                var a = t[n];
                (null == (e = a.shortcut) ? void 0 : e.length) && r.push(a);
              }
              r = r.sort(function (e, t) {
                return (
                  t.shortcut.join(' ').length - e.shortcut.join(' ').length
                );
              });
              for (
                var o = {},
                  i = function (e) {
                    var t;
                    o[e.shortcut.join(' ')] =
                      ((t = function (t) {
                        var r, n, a, o, i, s;
                        (0, d.shouldRejectKeystrokes)() ||
                          (t.preventDefault(),
                          (null == (r = e.children) ? void 0 : r.length)
                            ? (w.setCurrentRootAction(e.id),
                              w.toggle(),
                              null ==
                                (a =
                                  null == (n = S.callbacks)
                                    ? void 0
                                    : n.onOpen) || a.call(n))
                            : (null == (o = e.command) || o.perform(),
                              null ==
                                (s =
                                  null == (i = S.callbacks)
                                    ? void 0
                                    : i.onSelectAction) || s.call(i, e)));
                      }),
                      function (e) {
                        f.has(e) || (t(e), f.add(e));
                      });
                  },
                  s = 0,
                  u = r;
                s < u.length;
                s++
              ) {
                var a = u[s];
                i(a);
              }
              var c = (0, l.default)(window, o, { timeout: 400 });
              return function () {
                c();
              };
            }
          },
          [x, j, S.callbacks, w, _]
        ),
        (O = s.useRef(!0)),
        (k = (M = (0, c.useKBar)(function (e) {
          return {
            isShowing:
              e.visualState === u.VisualState.showing ||
              e.visualState === u.VisualState.animatingIn
          };
        })).isShowing),
        (C = M.query),
        (R = s.useRef(null)),
        s.useEffect(
          function () {
            if (O.current) {
              O.current = !1;
              return;
            }
            if (k) {
              R.current = document.activeElement;
              return;
            }
            var e = document.activeElement;
            (null == e ? void 0 : e.tagName.toLowerCase()) === 'input' &&
              e.blur();
            var t = R.current;
            t && t !== e && t.focus();
          },
          [k]
        ),
        s.useEffect(
          function () {
            function e(e) {
              var t = C.getInput();
              e.target !== t && t.focus();
            }
            if (k)
              return (
                window.addEventListener('keydown', e),
                function () {
                  window.removeEventListener('keydown', e);
                }
              );
          },
          [k, C]
        ),
        null
      );
    };
    var f = new WeakSet();
  },
  29818,
  (e, t, r) => {
    'use strict';
    var n =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  }
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      a =
        (e.e && e.e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      o =
        (e.e && e.e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              'default' !== r &&
                Object.prototype.hasOwnProperty.call(e, r) &&
                n(t, e, r);
          return a(t, e), t;
        };
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.KBarProvider = r.KBarContext = void 0);
    var i = e.r(55263),
      s = o(e.r(22034)),
      l = e.r(76232);
    (r.KBarContext = s.createContext({})),
      (r.KBarProvider = function (e) {
        var t = (0, i.useStore)(e);
        return s.createElement(
          r.KBarContext.Provider,
          { value: t },
          s.createElement(l.InternalEvents, null),
          e.children
        );
      });
  },
  85940,
  (e, t, r) => {
    'use strict';
    var n =
        (e.e && e.e.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
      a =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  }
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      o =
        (e.e && e.e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (e.e && e.e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              'default' !== r &&
                Object.prototype.hasOwnProperty.call(e, r) &&
                a(t, e, r);
          return o(t, e), t;
        };
    Object.defineProperty(r, '__esModule', { value: !0 }), (r.useKBar = void 0);
    var s = i(e.r(22034)),
      l = e.r(29818);
    r.useKBar = function (e) {
      var t = s.useContext(l.KBarContext),
        r = t.query,
        a = t.getState,
        o = t.subscribe,
        i = t.options,
        u = s.useRef(null == e ? void 0 : e(a())),
        c = s.useRef(e),
        d = s.useCallback(
          function (e) {
            return n(n({}, e), { query: r, options: i });
          },
          [r, i]
        ),
        f = s.useState(d(u.current)),
        p = f[0],
        h = f[1];
      return (
        s.useEffect(
          function () {
            var e;
            return (
              c.current &&
                (e = o(
                  function (e) {
                    return c.current(e);
                  },
                  function (e) {
                    return h(d(e));
                  }
                )),
              function () {
                e && e();
              }
            );
          },
          [d, o]
        ),
        p
      );
    };
  },
  66243,
  (e) => {
    'use strict';
    function t(e) {
      return Array.isArray ? Array.isArray(e) : '[object Array]' === l(e);
    }
    let r = 1 / 0;
    function n(e) {
      return 'string' == typeof e;
    }
    function a(e) {
      return 'number' == typeof e;
    }
    function o(e) {
      return 'object' == typeof e;
    }
    function i(e) {
      return null != e;
    }
    function s(e) {
      return !e.trim().length;
    }
    function l(e) {
      return null == e
        ? void 0 === e
          ? '[object Undefined]'
          : '[object Null]'
        : Object.prototype.toString.call(e);
    }
    let u = Object.prototype.hasOwnProperty;
    class c {
      constructor(e) {
        (this._keys = []), (this._keyMap = {});
        let t = 0;
        e.forEach((e) => {
          let r = d(e);
          (t += r.weight),
            this._keys.push(r),
            (this._keyMap[r.id] = r),
            (t += r.weight);
        }),
          this._keys.forEach((e) => {
            e.weight /= t;
          });
      }
      get(e) {
        return this._keyMap[e];
      }
      keys() {
        return this._keys;
      }
      toJSON() {
        return JSON.stringify(this._keys);
      }
    }
    function d(e) {
      let r = null,
        a = null,
        o = null,
        i = 1,
        s = null;
      if (n(e) || t(e)) (o = e), (r = f(e)), (a = p(e));
      else {
        if (!u.call(e, 'name')) throw Error('Missing name property in key');
        let t = e.name;
        if (((o = t), u.call(e, 'weight') && (i = e.weight) <= 0))
          throw Error(
            `Property 'weight' in key '${t}' must be a positive integer`
          );
        (r = f(t)), (a = p(t)), (s = e.getFn);
      }
      return { path: r, id: a, weight: i, src: o, getFn: s };
    }
    function f(e) {
      return t(e) ? e : e.split('.');
    }
    function p(e) {
      return t(e) ? e.join('.') : e;
    }
    var h = {
      isCaseSensitive: !1,
      includeScore: !1,
      keys: [],
      shouldSort: !0,
      sortFn: (e, t) =>
        e.score === t.score
          ? e.idx < t.idx
            ? -1
            : 1
          : e.score < t.score
            ? -1
            : 1,
      includeMatches: !1,
      findAllMatches: !1,
      minMatchCharLength: 1,
      location: 0,
      threshold: 0.6,
      distance: 100,
      useExtendedSearch: !1,
      getFn: function (e, s) {
        let u = [],
          c = !1,
          d = (e, s, f) => {
            if (i(e))
              if (s[f]) {
                var p, h;
                let m = e[s[f]];
                if (!i(m)) return;
                if (
                  f === s.length - 1 &&
                  (n(m) ||
                    a(m) ||
                    !0 === (p = m) ||
                    !1 === p ||
                    (o((h = p)) && null !== h && '[object Boolean]' == l(p)))
                )
                  u.push(
                    null == m
                      ? ''
                      : (function (e) {
                          if ('string' == typeof e) return e;
                          let t = e + '';
                          return '0' == t && 1 / e == -r ? '-0' : t;
                        })(m)
                  );
                else if (t(m)) {
                  c = !0;
                  for (let e = 0, t = m.length; e < t; e += 1)
                    d(m[e], s, f + 1);
                } else s.length && d(m, s, f + 1);
              } else u.push(e);
          };
        return d(e, n(s) ? s.split('.') : s, 0), c ? u : u[0];
      },
      ignoreLocation: !1,
      ignoreFieldNorm: !1,
      fieldNormWeight: 1
    };
    let m = /[^ ]+/g;
    class v {
      constructor({
        getFn: e = h.getFn,
        fieldNormWeight: t = h.fieldNormWeight
      } = {}) {
        (this.norm = (function (e = 1, t = 3) {
          let r = new Map(),
            n = Math.pow(10, t);
          return {
            get(t) {
              let a = t.match(m).length;
              if (r.has(a)) return r.get(a);
              let o = parseFloat(
                Math.round((1 / Math.pow(a, 0.5 * e)) * n) / n
              );
              return r.set(a, o), o;
            },
            clear() {
              r.clear();
            }
          };
        })(t, 3)),
          (this.getFn = e),
          (this.isCreated = !1),
          this.setIndexRecords();
      }
      setSources(e = []) {
        this.docs = e;
      }
      setIndexRecords(e = []) {
        this.records = e;
      }
      setKeys(e = []) {
        (this.keys = e),
          (this._keysMap = {}),
          e.forEach((e, t) => {
            this._keysMap[e.id] = t;
          });
      }
      create() {
        !this.isCreated &&
          this.docs.length &&
          ((this.isCreated = !0),
          n(this.docs[0])
            ? this.docs.forEach((e, t) => {
                this._addString(e, t);
              })
            : this.docs.forEach((e, t) => {
                this._addObject(e, t);
              }),
          this.norm.clear());
      }
      add(e) {
        let t = this.size();
        n(e) ? this._addString(e, t) : this._addObject(e, t);
      }
      removeAt(e) {
        this.records.splice(e, 1);
        for (let t = e, r = this.size(); t < r; t += 1) this.records[t].i -= 1;
      }
      getValueForItemAtKeyId(e, t) {
        return e[this._keysMap[t]];
      }
      size() {
        return this.records.length;
      }
      _addString(e, t) {
        if (!i(e) || s(e)) return;
        let r = { v: e, i: t, n: this.norm.get(e) };
        this.records.push(r);
      }
      _addObject(e, r) {
        let a = { i: r, $: {} };
        this.keys.forEach((r, o) => {
          let l = r.getFn ? r.getFn(e) : this.getFn(e, r.path);
          if (i(l)) {
            if (t(l)) {
              let e = [],
                r = [{ nestedArrIndex: -1, value: l }];
              for (; r.length; ) {
                let { nestedArrIndex: a, value: o } = r.pop();
                if (i(o))
                  if (n(o) && !s(o)) {
                    let t = { v: o, i: a, n: this.norm.get(o) };
                    e.push(t);
                  } else
                    t(o) &&
                      o.forEach((e, t) => {
                        r.push({ nestedArrIndex: t, value: e });
                      });
              }
              a.$[o] = e;
            } else if (n(l) && !s(l)) {
              let e = { v: l, n: this.norm.get(l) };
              a.$[o] = e;
            }
          }
        }),
          this.records.push(a);
      }
      toJSON() {
        return { keys: this.keys, records: this.records };
      }
    }
    function g(
      e,
      t,
      { getFn: r = h.getFn, fieldNormWeight: n = h.fieldNormWeight } = {}
    ) {
      let a = new v({ getFn: r, fieldNormWeight: n });
      return a.setKeys(e.map(d)), a.setSources(t), a.create(), a;
    }
    function b(
      e,
      {
        errors: t = 0,
        currentLocation: r = 0,
        expectedLocation: n = 0,
        distance: a = h.distance,
        ignoreLocation: o = h.ignoreLocation
      } = {}
    ) {
      let i = t / e.length;
      if (o) return i;
      let s = Math.abs(n - r);
      return a ? i + s / a : s ? 1 : i;
    }
    class y {
      constructor(
        e,
        {
          location: t = h.location,
          threshold: r = h.threshold,
          distance: n = h.distance,
          includeMatches: a = h.includeMatches,
          findAllMatches: o = h.findAllMatches,
          minMatchCharLength: i = h.minMatchCharLength,
          isCaseSensitive: s = h.isCaseSensitive,
          ignoreLocation: l = h.ignoreLocation
        } = {}
      ) {
        if (
          ((this.options = {
            location: t,
            threshold: r,
            distance: n,
            includeMatches: a,
            findAllMatches: o,
            minMatchCharLength: i,
            isCaseSensitive: s,
            ignoreLocation: l
          }),
          (this.pattern = s ? e : e.toLowerCase()),
          (this.chunks = []),
          !this.pattern.length)
        )
          return;
        const u = (e, t) => {
            this.chunks.push({
              pattern: e,
              alphabet: (function (e) {
                let t = {};
                for (let r = 0, n = e.length; r < n; r += 1) {
                  let a = e.charAt(r);
                  t[a] = (t[a] || 0) | (1 << (n - r - 1));
                }
                return t;
              })(e),
              startIndex: t
            });
          },
          c = this.pattern.length;
        if (c > 32) {
          let e = 0;
          const t = c % 32,
            r = c - t;
          for (; e < r; ) u(this.pattern.substr(e, 32), e), (e += 32);
          if (t) {
            const e = c - 32;
            u(this.pattern.substr(e), e);
          }
        } else u(this.pattern, 0);
      }
      searchIn(e) {
        let { isCaseSensitive: t, includeMatches: r } = this.options;
        if ((t || (e = e.toLowerCase()), this.pattern === e)) {
          let t = { isMatch: !0, score: 0 };
          return r && (t.indices = [[0, e.length - 1]]), t;
        }
        let {
            location: n,
            distance: a,
            threshold: o,
            findAllMatches: i,
            minMatchCharLength: s,
            ignoreLocation: l
          } = this.options,
          u = [],
          c = 0,
          d = !1;
        this.chunks.forEach(({ pattern: t, alphabet: f, startIndex: p }) => {
          let {
            isMatch: m,
            score: v,
            indices: g
          } = (function (
            e,
            t,
            r,
            {
              location: n = h.location,
              distance: a = h.distance,
              threshold: o = h.threshold,
              findAllMatches: i = h.findAllMatches,
              minMatchCharLength: s = h.minMatchCharLength,
              includeMatches: l = h.includeMatches,
              ignoreLocation: u = h.ignoreLocation
            } = {}
          ) {
            let c;
            if (t.length > 32) throw Error('Pattern length exceeds max of 32.');
            let d = t.length,
              f = e.length,
              p = Math.max(0, Math.min(n, f)),
              m = o,
              v = p,
              g = s > 1 || l,
              y = g ? Array(f) : [];
            for (; (c = e.indexOf(t, v)) > -1; )
              if (
                ((m = Math.min(
                  b(t, {
                    currentLocation: c,
                    expectedLocation: p,
                    distance: a,
                    ignoreLocation: u
                  }),
                  m
                )),
                (v = c + d),
                g)
              ) {
                let e = 0;
                for (; e < d; ) (y[c + e] = 1), (e += 1);
              }
            v = -1;
            let x = [],
              w = 1,
              j = d + f,
              S = 1 << (d - 1);
            for (let n = 0; n < d; n += 1) {
              let o = 0,
                s = j;
              for (; o < s; )
                b(t, {
                  errors: n,
                  currentLocation: p + s,
                  expectedLocation: p,
                  distance: a,
                  ignoreLocation: u
                }) <= m
                  ? (o = s)
                  : (j = s),
                  (s = Math.floor((j - o) / 2 + o));
              j = s;
              let l = Math.max(1, p - s + 1),
                c = i ? f : Math.min(p + s, f) + d,
                h = Array(c + 2);
              h[c + 1] = (1 << n) - 1;
              for (let o = c; o >= l; o -= 1) {
                let i = o - 1,
                  s = r[e.charAt(i)];
                if (
                  (g && (y[i] = +!!s),
                  (h[o] = ((h[o + 1] << 1) | 1) & s),
                  n && (h[o] |= ((x[o + 1] | x[o]) << 1) | 1 | x[o + 1]),
                  h[o] & S &&
                    (w = b(t, {
                      errors: n,
                      currentLocation: i,
                      expectedLocation: p,
                      distance: a,
                      ignoreLocation: u
                    })) <= m)
                ) {
                  if (((m = w), (v = i) <= p)) break;
                  l = Math.max(1, 2 * p - v);
                }
              }
              if (
                b(t, {
                  errors: n + 1,
                  currentLocation: p,
                  expectedLocation: p,
                  distance: a,
                  ignoreLocation: u
                }) > m
              )
                break;
              x = h;
            }
            let _ = { isMatch: v >= 0, score: Math.max(0.001, w) };
            if (g) {
              let e = (function (e = [], t = h.minMatchCharLength) {
                let r = [],
                  n = -1,
                  a = -1,
                  o = 0;
                for (let i = e.length; o < i; o += 1) {
                  let i = e[o];
                  i && -1 === n
                    ? (n = o)
                    : i ||
                      -1 === n ||
                      ((a = o - 1) - n + 1 >= t && r.push([n, a]), (n = -1));
                }
                return e[o - 1] && o - n >= t && r.push([n, o - 1]), r;
              })(y, s);
              e.length ? l && (_.indices = e) : (_.isMatch = !1);
            }
            return _;
          })(e, t, f, {
            location: n + p,
            distance: a,
            threshold: o,
            findAllMatches: i,
            minMatchCharLength: s,
            includeMatches: r,
            ignoreLocation: l
          });
          m && (d = !0), (c += v), m && g && (u = [...u, ...g]);
        });
        let f = { isMatch: d, score: d ? c / this.chunks.length : 1 };
        return d && r && (f.indices = u), f;
      }
    }
    class x {
      constructor(e) {
        this.pattern = e;
      }
      static isMultiMatch(e) {
        return w(e, this.multiRegex);
      }
      static isSingleMatch(e) {
        return w(e, this.singleRegex);
      }
      search() {}
    }
    function w(e, t) {
      let r = e.match(t);
      return r ? r[1] : null;
    }
    class j extends x {
      constructor(
        e,
        {
          location: t = h.location,
          threshold: r = h.threshold,
          distance: n = h.distance,
          includeMatches: a = h.includeMatches,
          findAllMatches: o = h.findAllMatches,
          minMatchCharLength: i = h.minMatchCharLength,
          isCaseSensitive: s = h.isCaseSensitive,
          ignoreLocation: l = h.ignoreLocation
        } = {}
      ) {
        super(e),
          (this._bitapSearch = new y(e, {
            location: t,
            threshold: r,
            distance: n,
            includeMatches: a,
            findAllMatches: o,
            minMatchCharLength: i,
            isCaseSensitive: s,
            ignoreLocation: l
          }));
      }
      static get type() {
        return 'fuzzy';
      }
      static get multiRegex() {
        return /^"(.*)"$/;
      }
      static get singleRegex() {
        return /^(.*)$/;
      }
      search(e) {
        return this._bitapSearch.searchIn(e);
      }
    }
    class S extends x {
      constructor(e) {
        super(e);
      }
      static get type() {
        return 'include';
      }
      static get multiRegex() {
        return /^'"(.*)"$/;
      }
      static get singleRegex() {
        return /^'(.*)$/;
      }
      search(e) {
        let t,
          r = 0,
          n = [],
          a = this.pattern.length;
        for (; (t = e.indexOf(this.pattern, r)) > -1; )
          (r = t + a), n.push([t, r - 1]);
        let o = !!n.length;
        return { isMatch: o, score: +!o, indices: n };
      }
    }
    let _ = [
        class extends x {
          constructor(e) {
            super(e);
          }
          static get type() {
            return 'exact';
          }
          static get multiRegex() {
            return /^="(.*)"$/;
          }
          static get singleRegex() {
            return /^=(.*)$/;
          }
          search(e) {
            let t = e === this.pattern;
            return {
              isMatch: t,
              score: +!t,
              indices: [0, this.pattern.length - 1]
            };
          }
        },
        S,
        class extends x {
          constructor(e) {
            super(e);
          }
          static get type() {
            return 'prefix-exact';
          }
          static get multiRegex() {
            return /^\^"(.*)"$/;
          }
          static get singleRegex() {
            return /^\^(.*)$/;
          }
          search(e) {
            let t = e.startsWith(this.pattern);
            return {
              isMatch: t,
              score: +!t,
              indices: [0, this.pattern.length - 1]
            };
          }
        },
        class extends x {
          constructor(e) {
            super(e);
          }
          static get type() {
            return 'inverse-prefix-exact';
          }
          static get multiRegex() {
            return /^!\^"(.*)"$/;
          }
          static get singleRegex() {
            return /^!\^(.*)$/;
          }
          search(e) {
            let t = !e.startsWith(this.pattern);
            return { isMatch: t, score: +!t, indices: [0, e.length - 1] };
          }
        },
        class extends x {
          constructor(e) {
            super(e);
          }
          static get type() {
            return 'inverse-suffix-exact';
          }
          static get multiRegex() {
            return /^!"(.*)"\$$/;
          }
          static get singleRegex() {
            return /^!(.*)\$$/;
          }
          search(e) {
            let t = !e.endsWith(this.pattern);
            return { isMatch: t, score: +!t, indices: [0, e.length - 1] };
          }
        },
        class extends x {
          constructor(e) {
            super(e);
          }
          static get type() {
            return 'suffix-exact';
          }
          static get multiRegex() {
            return /^"(.*)"\$$/;
          }
          static get singleRegex() {
            return /^(.*)\$$/;
          }
          search(e) {
            let t = e.endsWith(this.pattern);
            return {
              isMatch: t,
              score: +!t,
              indices: [e.length - this.pattern.length, e.length - 1]
            };
          }
        },
        class extends x {
          constructor(e) {
            super(e);
          }
          static get type() {
            return 'inverse-exact';
          }
          static get multiRegex() {
            return /^!"(.*)"$/;
          }
          static get singleRegex() {
            return /^!(.*)$/;
          }
          search(e) {
            let t = -1 === e.indexOf(this.pattern);
            return { isMatch: t, score: +!t, indices: [0, e.length - 1] };
          }
        },
        j
      ],
      O = _.length,
      M = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
      k = new Set([j.type, S.type]),
      C = [];
    function R(e, t) {
      for (let r = 0, n = C.length; r < n; r += 1) {
        let n = C[r];
        if (n.condition(e, t)) return new n(e, t);
      }
      return new y(e, t);
    }
    let N = '$and',
      P = '$path',
      E = (e) => !!(e[N] || e.$or),
      I = (e) => ({ [N]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
    function D(e, r, { auto: a = !0 } = {}) {
      let i = (e) => {
        let s = Object.keys(e),
          l = !!e[P];
        if (!l && s.length > 1 && !E(e)) return i(I(e));
        if (!t(e) && o(e) && !E(e)) {
          let t = l ? e[P] : s[0],
            o = l ? e.$val : e[t];
          if (!n(o)) throw Error(`Invalid value for key ${t}`);
          let i = { keyId: p(t), pattern: o };
          return a && (i.searcher = R(o, r)), i;
        }
        let u = { children: [], operator: s[0] };
        return (
          s.forEach((r) => {
            let n = e[r];
            t(n) &&
              n.forEach((e) => {
                u.children.push(i(e));
              });
          }),
          u
        );
      };
      return E(e) || (e = I(e)), i(e);
    }
    function A(e, t) {
      let r = e.matches;
      (t.matches = []),
        i(r) &&
          r.forEach((e) => {
            if (!i(e.indices) || !e.indices.length) return;
            let { indices: r, value: n } = e,
              a = { indices: r, value: n };
            e.key && (a.key = e.key.src),
              e.idx > -1 && (a.refIndex = e.idx),
              t.matches.push(a);
          });
    }
    function L(e, t) {
      t.score = e.score;
    }
    class T {
      constructor(e, t = {}, r) {
        (this.options = { ...h, ...t }),
          this.options.useExtendedSearch,
          (this._keyStore = new c(this.options.keys)),
          this.setCollection(e, r);
      }
      setCollection(e, t) {
        if (((this._docs = e), t && !(t instanceof v)))
          throw Error("Incorrect 'index' type");
        this._myIndex =
          t ||
          g(this.options.keys, this._docs, {
            getFn: this.options.getFn,
            fieldNormWeight: this.options.fieldNormWeight
          });
      }
      add(e) {
        i(e) && (this._docs.push(e), this._myIndex.add(e));
      }
      remove(e = () => !1) {
        let t = [];
        for (let r = 0, n = this._docs.length; r < n; r += 1) {
          let a = this._docs[r];
          e(a, r) && (this.removeAt(r), (r -= 1), (n -= 1), t.push(a));
        }
        return t;
      }
      removeAt(e) {
        this._docs.splice(e, 1), this._myIndex.removeAt(e);
      }
      getIndex() {
        return this._myIndex;
      }
      search(e, { limit: t = -1 } = {}) {
        let {
            includeMatches: r,
            includeScore: o,
            shouldSort: i,
            sortFn: s,
            ignoreFieldNorm: l
          } = this.options,
          u = n(e)
            ? n(this._docs[0])
              ? this._searchStringList(e)
              : this._searchObjectList(e)
            : this._searchLogical(e);
        return (
          !(function (e, { ignoreFieldNorm: t = h.ignoreFieldNorm }) {
            e.forEach((e) => {
              let r = 1;
              e.matches.forEach(({ key: e, norm: n, score: a }) => {
                let o = e ? e.weight : null;
                r *= Math.pow(
                  0 === a && o ? Number.EPSILON : a,
                  (o || 1) * (t ? 1 : n)
                );
              }),
                (e.score = r);
            });
          })(u, { ignoreFieldNorm: l }),
          i && u.sort(s),
          a(t) && t > -1 && (u = u.slice(0, t)),
          (function (
            e,
            t,
            {
              includeMatches: r = h.includeMatches,
              includeScore: n = h.includeScore
            } = {}
          ) {
            let a = [];
            return (
              r && a.push(A),
              n && a.push(L),
              e.map((e) => {
                let { idx: r } = e,
                  n = { item: t[r], refIndex: r };
                return (
                  a.length &&
                    a.forEach((t) => {
                      t(e, n);
                    }),
                  n
                );
              })
            );
          })(u, this._docs, { includeMatches: r, includeScore: o })
        );
      }
      _searchStringList(e) {
        let t = R(e, this.options),
          { records: r } = this._myIndex,
          n = [];
        return (
          r.forEach(({ v: e, i: r, n: a }) => {
            if (!i(e)) return;
            let { isMatch: o, score: s, indices: l } = t.searchIn(e);
            o &&
              n.push({
                item: e,
                idx: r,
                matches: [{ score: s, value: e, norm: a, indices: l }]
              });
          }),
          n
        );
      }
      _searchLogical(e) {
        let t = D(e, this.options),
          r = (e, t, n) => {
            if (!e.children) {
              let { keyId: r, searcher: a } = e,
                o = this._findMatches({
                  key: this._keyStore.get(r),
                  value: this._myIndex.getValueForItemAtKeyId(t, r),
                  searcher: a
                });
              return o && o.length ? [{ idx: n, item: t, matches: o }] : [];
            }
            let a = [];
            for (let o = 0, i = e.children.length; o < i; o += 1) {
              let i = r(e.children[o], t, n);
              if (i.length) a.push(...i);
              else if (e.operator === N) return [];
            }
            return a;
          },
          n = this._myIndex.records,
          a = {},
          o = [];
        return (
          n.forEach(({ $: e, i: n }) => {
            if (i(e)) {
              let i = r(t, e, n);
              i.length &&
                (a[n] ||
                  ((a[n] = { idx: n, item: e, matches: [] }), o.push(a[n])),
                i.forEach(({ matches: e }) => {
                  a[n].matches.push(...e);
                }));
            }
          }),
          o
        );
      }
      _searchObjectList(e) {
        let t = R(e, this.options),
          { keys: r, records: n } = this._myIndex,
          a = [];
        return (
          n.forEach(({ $: e, i: n }) => {
            if (!i(e)) return;
            let o = [];
            r.forEach((r, n) => {
              o.push(
                ...this._findMatches({ key: r, value: e[n], searcher: t })
              );
            }),
              o.length && a.push({ idx: n, item: e, matches: o });
          }),
          a
        );
      }
      _findMatches({ key: e, value: r, searcher: n }) {
        if (!i(r)) return [];
        let a = [];
        if (t(r))
          r.forEach(({ v: t, i: r, n: o }) => {
            if (!i(t)) return;
            let { isMatch: s, score: l, indices: u } = n.searchIn(t);
            s &&
              a.push({
                score: l,
                key: e,
                value: t,
                idx: r,
                norm: o,
                indices: u
              });
          });
        else {
          let { v: t, n: o } = r,
            { isMatch: i, score: s, indices: l } = n.searchIn(t);
          i && a.push({ score: s, key: e, value: t, norm: o, indices: l });
        }
        return a;
      }
    }
    (T.version = '6.6.2'),
      (T.createIndex = g),
      (T.parseIndex = function (
        e,
        { getFn: t = h.getFn, fieldNormWeight: r = h.fieldNormWeight } = {}
      ) {
        let { keys: n, records: a } = e,
          o = new v({ getFn: t, fieldNormWeight: r });
        return o.setKeys(n), o.setIndexRecords(a), o;
      }),
      (T.config = h),
      (T.parseQuery = D),
      (function (...e) {
        C.push(...e);
      })(
        class {
          constructor(
            e,
            {
              isCaseSensitive: t = h.isCaseSensitive,
              includeMatches: r = h.includeMatches,
              minMatchCharLength: n = h.minMatchCharLength,
              ignoreLocation: a = h.ignoreLocation,
              findAllMatches: o = h.findAllMatches,
              location: i = h.location,
              threshold: s = h.threshold,
              distance: l = h.distance
            } = {}
          ) {
            (this.query = null),
              (this.options = {
                isCaseSensitive: t,
                includeMatches: r,
                minMatchCharLength: n,
                findAllMatches: o,
                ignoreLocation: a,
                location: i,
                threshold: s,
                distance: l
              }),
              (this.pattern = t ? e : e.toLowerCase()),
              (this.query = (function (e, t = {}) {
                return e.split('|').map((e) => {
                  let r = e
                      .trim()
                      .split(M)
                      .filter((e) => e && !!e.trim()),
                    n = [];
                  for (let e = 0, a = r.length; e < a; e += 1) {
                    let a = r[e],
                      o = !1,
                      i = -1;
                    for (; !o && ++i < O; ) {
                      let e = _[i],
                        r = e.isMultiMatch(a);
                      r && (n.push(new e(r, t)), (o = !0));
                    }
                    if (!o)
                      for (i = -1; ++i < O; ) {
                        let e = _[i],
                          r = e.isSingleMatch(a);
                        if (r) {
                          n.push(new e(r, t));
                          break;
                        }
                      }
                  }
                  return n;
                });
              })(this.pattern, this.options));
          }
          static condition(e, t) {
            return t.useExtendedSearch;
          }
          searchIn(e) {
            let t = this.query;
            if (!t) return { isMatch: !1, score: 1 };
            let { includeMatches: r, isCaseSensitive: n } = this.options;
            e = n ? e : e.toLowerCase();
            let a = 0,
              o = [],
              i = 0;
            for (let n = 0, s = t.length; n < s; n += 1) {
              let s = t[n];
              (o.length = 0), (a = 0);
              for (let t = 0, n = s.length; t < n; t += 1) {
                let n = s[t],
                  { isMatch: l, indices: u, score: c } = n.search(e);
                if (l) {
                  if (((a += 1), (i += c), r)) {
                    let e = n.constructor.type;
                    k.has(e) ? (o = [...o, ...u]) : o.push(u);
                  }
                } else {
                  (i = 0), (a = 0), (o.length = 0);
                  break;
                }
              }
              if (a) {
                let e = { isMatch: !0, score: i / a };
                return r && (e.indices = o), e;
              }
            }
            return { isMatch: !1, score: 1 };
          }
        }
      ),
      e.s(['default', 0, T]);
  },
  85702,
  (e, t, r) => {
    'use strict';
    var n =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  }
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      a =
        (e.e && e.e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      o =
        (e.e && e.e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              'default' !== r &&
                Object.prototype.hasOwnProperty.call(e, r) &&
                n(t, e, r);
          return a(t, e), t;
        },
      i =
        (e.e && e.e.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.useDeepMatches = r.useMatches = r.NO_GROUP = void 0);
    var s = o(e.r(22034)),
      l = e.r(85940),
      u = e.r(51380),
      c = i(e.r(66243));
    r.NO_GROUP = { name: 'none', priority: u.Priority.NORMAL };
    var d = {
      keys: [
        { name: 'name', weight: 0.5 },
        {
          name: 'keywords',
          getFn: function (e) {
            var t;
            return (null != (t = e.keywords) ? t : '').split(',');
          },
          weight: 0.5
        },
        'subtitle'
      ],
      ignoreLocation: !0,
      includeScore: !0,
      includeMatches: !0,
      threshold: 0.2,
      minMatchCharLength: 1
    };
    function f(e, t) {
      return t.priority - e.priority;
    }
    function p() {
      var e,
        t,
        n,
        a,
        o,
        i,
        p,
        h = (0, l.useKBar)(function (e) {
          return {
            search: e.searchQuery,
            actions: e.actions,
            rootActionId: e.currentRootActionId
          };
        }),
        m = h.search,
        v = h.actions,
        g = h.rootActionId,
        b = s.useMemo(
          function () {
            return Object.keys(v)
              .reduce(function (e, t) {
                var r = v[t];
                if ((r.parent || g || e.push(r), r.id === g))
                  for (var n = 0; n < r.children.length; n++)
                    e.push(r.children[n]);
                return e;
              }, [])
              .sort(f);
          },
          [v, g]
        ),
        y = s.useCallback(function (e) {
          for (var t = [], r = 0; r < e.length; r++) t.push(e[r]);
          return (function e(r, n) {
            void 0 === n && (n = t);
            for (var a = 0; a < r.length; a++)
              if (r[a].children.length > 0) {
                for (var o = r[a].children, i = 0; i < o.length; i++)
                  n.push(o[i]);
                e(r[a].children, n);
              }
            return n;
          })(e);
        }, []),
        x = !m,
        w = s.useMemo(
          function () {
            return x ? b : y(b);
          },
          [y, b, x]
        ),
        j = s.useMemo(
          function () {
            return new c.default(w, d);
          },
          [w]
        ),
        S =
          ((e = w),
          (t = m),
          (n = j),
          (a = s.useMemo(
            function () {
              return { filtered: e, search: t };
            },
            [e, t]
          )),
          (i = (o = (0, u.useThrottledValue)(a)).filtered),
          (p = o.search),
          s.useMemo(
            function () {
              if ('' === p.trim())
                return i.map(function (e) {
                  return { score: 0, action: e };
                });
              return n.search(p).map(function (e) {
                var t = e.item,
                  r = e.score;
                return { score: 1 / ((null != r ? r : 0) + 1), action: t };
              });
            },
            [i, p, n]
          )),
        _ = s.useMemo(
          function () {
            for (var e, t, n = {}, a = [], o = [], i = 0; i < S.length; i++) {
              var s = S[i],
                l = s.action,
                c = s.score || u.Priority.NORMAL,
                d = {
                  name:
                    'string' == typeof l.section
                      ? l.section
                      : (null == (e = l.section) ? void 0 : e.name) ||
                        r.NO_GROUP.name,
                  priority:
                    'string' == typeof l.section
                      ? c
                      : (null == (t = l.section) ? void 0 : t.priority) || 0 + c
                };
              n[d.name] || ((n[d.name] = []), a.push(d)),
                n[d.name].push({ priority: l.priority + c, action: l });
            }
            o = a.sort(f).map(function (e) {
              return {
                name: e.name,
                actions: n[e.name].sort(f).map(function (e) {
                  return e.action;
                })
              };
            });
            for (var p = [], i = 0; i < o.length; i++) {
              var h = o[i];
              h.name !== r.NO_GROUP.name && p.push(h.name);
              for (var m = 0; m < h.actions.length; m++) p.push(h.actions[m]);
            }
            return p;
          },
          [S]
        ),
        O = s.useMemo(
          function () {
            return g;
          },
          [_]
        );
      return s.useMemo(
        function () {
          return { results: _, rootActionId: O };
        },
        [O, _]
      );
    }
    (r.useMatches = p), (r.useDeepMatches = p);
  },
  89129,
  (e, t, r) => {
    'use strict';
    let n, a, o;
    var i = Object.create,
      s = Object.defineProperty,
      l = Object.getOwnPropertyDescriptor,
      u = Object.getOwnPropertyNames,
      c = Object.getPrototypeOf,
      d = Object.prototype.hasOwnProperty,
      f = (e, t, r, n) => {
        if ((t && 'object' == typeof t) || 'function' == typeof t)
          for (let a of u(t))
            d.call(e, a) ||
              a === r ||
              s(e, a, {
                get: () => t[a],
                enumerable: !(n = l(t, a)) || n.enumerable
              });
        return e;
      },
      p = {},
      h = { composeRefs: () => b, useComposedRefs: () => y };
    for (var m in h) s(p, m, { get: h[m], enumerable: !0 });
    t.exports = f(s({}, '__esModule', { value: !0 }), p);
    var v =
      ((o = null != (n = e.r(22034)) ? i(c(n)) : {}),
      f(
        !a && n && n.__esModule
          ? o
          : s(o, 'default', { value: n, enumerable: !0 }),
        n
      ));
    function g(e, t) {
      if ('function' == typeof e) return e(t);
      null != e && (e.current = t);
    }
    function b(...e) {
      return (t) => {
        let r = !1,
          n = e.map((e) => {
            let n = g(e, t);
            return r || 'function' != typeof n || (r = !0), n;
          });
        if (r)
          return () => {
            for (let t = 0; t < n.length; t++) {
              let r = n[t];
              'function' == typeof r ? r() : g(e[t], null);
            }
          };
      };
    }
    function y(...e) {
      return v.useCallback(b(...e), e);
    }
  },
  62166,
  (e, t, r) => {
    'use strict';
    let n, a, o;
    var i = Object.create,
      s = Object.defineProperty,
      l = Object.getOwnPropertyDescriptor,
      u = Object.getOwnPropertyNames,
      c = Object.getPrototypeOf,
      d = Object.prototype.hasOwnProperty,
      f = (e, t, r, n) => {
        if ((t && 'object' == typeof t) || 'function' == typeof t)
          for (let a of u(t))
            d.call(e, a) ||
              a === r ||
              s(e, a, {
                get: () => t[a],
                enumerable: !(n = l(t, a)) || n.enumerable
              });
        return e;
      },
      p = {},
      h = {
        Root: () => S,
        Slot: () => S,
        Slottable: () => M,
        createSlot: () => j,
        createSlottable: () => O
      };
    for (var m in h) s(p, m, { get: h[m], enumerable: !0 });
    t.exports = f(s({}, '__esModule', { value: !0 }), p);
    var v =
        ((o = null != (n = e.r(22034)) ? i(c(n)) : {}),
        f(
          !a && n && n.__esModule
            ? o
            : s(o, 'default', { value: n, enumerable: !0 }),
          n
        )),
      g = e.r(89129),
      b = e.r(29971),
      y = Symbol.for('react.lazy'),
      x = v[' use '.trim().toString()];
    function w(e) {
      var t;
      return (
        null != e &&
        'object' == typeof e &&
        '$$typeof' in e &&
        e.$$typeof === y &&
        '_payload' in e &&
        'object' == typeof (t = e._payload) &&
        null !== t &&
        'then' in t
      );
    }
    function j(e) {
      var t;
      let r,
        n =
          ((t = e),
          ((r = v.forwardRef((e, t) => {
            let { children: r, ...n } = e;
            if (
              (w(r) && 'function' == typeof x && (r = x(r._payload)),
              v.isValidElement(r))
            ) {
              var a;
              let e,
                o,
                i =
                  ((a = r),
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
                s = (function (e, t) {
                  let r = { ...t };
                  for (let n in t) {
                    let a = e[n],
                      o = t[n];
                    /^on[A-Z]/.test(n)
                      ? a && o
                        ? (r[n] = (...e) => {
                            let t = o(...e);
                            return a(...e), t;
                          })
                        : a && (r[n] = a)
                      : 'style' === n
                        ? (r[n] = { ...a, ...o })
                        : 'className' === n &&
                          (r[n] = [a, o].filter(Boolean).join(' '));
                  }
                  return { ...e, ...r };
                })(n, r.props);
              return (
                r.type !== v.Fragment &&
                  (s.ref = t ? (0, g.composeRefs)(t, i) : i),
                v.cloneElement(r, s)
              );
            }
            return v.Children.count(r) > 1 ? v.Children.only(null) : null;
          })).displayName = `${t}.SlotClone`),
          r),
        a = v.forwardRef((e, t) => {
          let { children: r, ...a } = e;
          w(r) && 'function' == typeof x && (r = x(r._payload));
          let o = v.Children.toArray(r),
            i = o.find(k);
          if (i) {
            let e = i.props.children,
              r = o.map((t) =>
                t !== i
                  ? t
                  : v.Children.count(e) > 1
                    ? v.Children.only(null)
                    : v.isValidElement(e)
                      ? e.props.children
                      : null
              );
            return (0, b.jsx)(n, {
              ...a,
              ref: t,
              children: v.isValidElement(e)
                ? v.cloneElement(e, void 0, r)
                : null
            });
          }
          return (0, b.jsx)(n, { ...a, ref: t, children: r });
        });
      return (a.displayName = `${e}.Slot`), a;
    }
    var S = j('Slot'),
      _ = Symbol('radix.slottable');
    function O(e) {
      let t = ({ children: e }) => (0, b.jsx)(b.Fragment, { children: e });
      return (t.displayName = `${e}.Slottable`), (t.__radixId = _), t;
    }
    var M = O('Slottable');
    function k(e) {
      return (
        v.isValidElement(e) &&
        'function' == typeof e.type &&
        '__radixId' in e.type &&
        e.type.__radixId === _
      );
    }
  },
  65438,
  (e, t, r) => {
    'use strict';
    var n = Object.create,
      a = Object.defineProperty,
      o = Object.getOwnPropertyDescriptor,
      i = Object.getOwnPropertyNames,
      s = Object.getPrototypeOf,
      l = Object.prototype.hasOwnProperty,
      u = (e, t, r, n) => {
        if ((t && 'object' == typeof t) || 'function' == typeof t)
          for (let s of i(t))
            l.call(e, s) ||
              s === r ||
              a(e, s, {
                get: () => t[s],
                enumerable: !(n = o(t, s)) || n.enumerable
              });
        return e;
      },
      c = (e, t, r) => (
        (r = null != e ? n(s(e)) : {}),
        u(
          !t && e && e.__esModule
            ? r
            : a(r, 'default', { value: e, enumerable: !0 }),
          e
        )
      ),
      d = {},
      f = {
        Primitive: () => b,
        Root: () => x,
        dispatchDiscreteCustomEvent: () => y
      };
    for (var p in f) a(d, p, { get: f[p], enumerable: !0 });
    t.exports = u(a({}, '__esModule', { value: !0 }), d);
    var h = c(e.r(22034)),
      m = c(e.r(50560)),
      v = e.r(62166),
      g = e.r(29971),
      b = [
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
      ].reduce((e, t) => {
        let r = (0, v.createSlot)(`Primitive.${t}`),
          n = h.forwardRef((e, n) => {
            let { asChild: a, ...o } = e;
            return (
              'u' > typeof window && (window[Symbol.for('radix-ui')] = !0),
              (0, g.jsx)(a ? r : t, { ...o, ref: n })
            );
          });
        return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
      }, {});
    function y(e, t) {
      e && m.flushSync(() => e.dispatchEvent(t));
    }
    var x = b;
  },
  47733,
  (e, t, r) => {
    'use strict';
    let n, a, o;
    var i = Object.create,
      s = Object.defineProperty,
      l = Object.getOwnPropertyDescriptor,
      u = Object.getOwnPropertyNames,
      c = Object.getPrototypeOf,
      d = Object.prototype.hasOwnProperty,
      f = (e, t, r, n) => {
        if ((t && 'object' == typeof t) || 'function' == typeof t)
          for (let a of u(t))
            d.call(e, a) ||
              a === r ||
              s(e, a, {
                get: () => t[a],
                enumerable: !(n = l(t, a)) || n.enumerable
              });
        return e;
      },
      p = {},
      h = { useLayoutEffect: () => g };
    for (var m in h) s(p, m, { get: h[m], enumerable: !0 });
    t.exports = f(s({}, '__esModule', { value: !0 }), p);
    var v =
        ((o = null != (n = e.r(22034)) ? i(c(n)) : {}),
        f(
          !a && n && n.__esModule
            ? o
            : s(o, 'default', { value: n, enumerable: !0 }),
          n
        )),
      g = globalThis?.document ? v.useLayoutEffect : () => {};
  },
  11162,
  (e, t, r) => {
    'use strict';
    var n = Object.create,
      a = Object.defineProperty,
      o = Object.getOwnPropertyDescriptor,
      i = Object.getOwnPropertyNames,
      s = Object.getPrototypeOf,
      l = Object.prototype.hasOwnProperty,
      u = (e, t, r, n) => {
        if ((t && 'object' == typeof t) || 'function' == typeof t)
          for (let s of i(t))
            l.call(e, s) ||
              s === r ||
              a(e, s, {
                get: () => t[s],
                enumerable: !(n = o(t, s)) || n.enumerable
              });
        return e;
      },
      c = (e, t, r) => (
        (r = null != e ? n(s(e)) : {}),
        u(
          !t && e && e.__esModule
            ? r
            : a(r, 'default', { value: e, enumerable: !0 }),
          e
        )
      ),
      d = {},
      f = { Portal: () => y, Root: () => x };
    for (var p in f) a(d, p, { get: f[p], enumerable: !0 });
    t.exports = u(a({}, '__esModule', { value: !0 }), d);
    var h = c(e.r(22034)),
      m = c(e.r(50560)),
      v = e.r(65438),
      g = e.r(47733),
      b = e.r(29971),
      y = h.forwardRef((e, t) => {
        let { container: r, ...n } = e,
          [a, o] = h.useState(!1);
        (0, g.useLayoutEffect)(() => o(!0), []);
        let i = r || (a && globalThis?.document?.body);
        return i
          ? m.default.createPortal(
              (0, b.jsx)(v.Primitive.div, { ...n, ref: t }),
              i
            )
          : null;
      });
    y.displayName = 'Portal';
    var x = y;
  },
  21415,
  (e, t, r) => {
    'use strict';
    var n =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  }
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      a =
        (e.e && e.e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      o =
        (e.e && e.e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              'default' !== r &&
                Object.prototype.hasOwnProperty.call(e, r) &&
                n(t, e, r);
          return a(t, e), t;
        };
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.KBarPortal = void 0);
    var i = e.r(11162),
      s = o(e.r(22034)),
      l = e.r(98605),
      u = e.r(85940);
    r.KBarPortal = function (e) {
      var t = e.children,
        r = e.container;
      return (0, u.useKBar)(function (e) {
        return { showing: e.visualState !== l.VisualState.hidden };
      }).showing
        ? s.createElement(i.Portal, { container: r }, t)
        : null;
    };
  },
  78983,
  (e, t, r) => {
    'use strict';
    var n =
        (e.e && e.e.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
      a =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  }
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      o =
        (e.e && e.e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (e.e && e.e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              'default' !== r &&
                Object.prototype.hasOwnProperty.call(e, r) &&
                a(t, e, r);
          return o(t, e), t;
        },
      s =
        (e.e && e.e.__rest) ||
        function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (r[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
            for (
              var a = 0, n = Object.getOwnPropertySymbols(e);
              a < n.length;
              a++
            )
              0 > t.indexOf(n[a]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
                (r[n[a]] = e[n[a]]);
          return r;
        };
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.KBarPositioner = void 0);
    var l = i(e.r(22034)),
      u = {
        position: 'fixed',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        inset: '0px',
        padding: '14vh 16px 16px'
      };
    r.KBarPositioner = l.forwardRef(function (e, t) {
      var r = e.style,
        a = e.children,
        o = s(e, ['style', 'children']);
      return l.createElement(
        'div',
        n({ ref: t, style: r ? n(n({}, u), r) : u }, o),
        a
      );
    });
  },
  52644,
  (e, t, r) => {
    'use strict';
    var n =
        (e.e && e.e.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
      a =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  }
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      o =
        (e.e && e.e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (e.e && e.e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              'default' !== r &&
                Object.prototype.hasOwnProperty.call(e, r) &&
                a(t, e, r);
          return o(t, e), t;
        },
      s =
        (e.e && e.e.__rest) ||
        function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (r[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
            for (
              var a = 0, n = Object.getOwnPropertySymbols(e);
              a < n.length;
              a++
            )
              0 > t.indexOf(n[a]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
                (r[n[a]] = e[n[a]]);
          return r;
        };
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.KBarSearch = r.getListboxItemId = r.KBAR_LISTBOX = void 0);
    var l = i(e.r(22034)),
      u = e.r(98605),
      c = e.r(85940);
    (r.KBAR_LISTBOX = 'kbar-listbox'),
      (r.getListboxItemId = function (e) {
        return 'kbar-listbox-item-' + e;
      }),
      (r.KBarSearch = function (e) {
        var t = (0, c.useKBar)(function (e) {
            return {
              search: e.searchQuery,
              currentRootActionId: e.currentRootActionId,
              actions: e.actions,
              activeIndex: e.activeIndex,
              showing: e.visualState === u.VisualState.showing
            };
          }),
          a = t.query,
          o = t.search,
          i = t.actions,
          d = t.currentRootActionId,
          f = t.activeIndex,
          p = t.showing,
          h = t.options,
          m = l.useState(o),
          v = m[0],
          g = m[1];
        l.useEffect(
          function () {
            a.setSearch(v);
          },
          [v, a]
        );
        var b = e.defaultPlaceholder,
          y = s(e, ['defaultPlaceholder']);
        l.useEffect(
          function () {
            return (
              a.setSearch(''),
              a.getInput().focus(),
              function () {
                return a.setSearch('');
              }
            );
          },
          [d, a]
        );
        var x = l.useMemo(
          function () {
            var e = null != b ? b : 'Type a command or search…';
            return d && i[d] ? i[d].name : e;
          },
          [i, d, b]
        );
        return l.createElement(
          'input',
          n({}, y, {
            ref: a.inputRefSetter,
            autoFocus: !0,
            autoComplete: 'off',
            role: 'combobox',
            spellCheck: 'false',
            'aria-expanded': p,
            'aria-controls': r.KBAR_LISTBOX,
            'aria-activedescendant': (0, r.getListboxItemId)(f),
            value: v,
            placeholder: x,
            onChange: function (t) {
              var r, n, a;
              null == (r = e.onChange) || r.call(e, t),
                g(t.target.value),
                null ==
                  (a =
                    null == (n = null == h ? void 0 : h.callbacks)
                      ? void 0
                      : n.onQueryChange) || a.call(n, t.target.value);
            },
            onKeyDown: function (t) {
              var r;
              if (
                (null == (r = e.onKeyDown) || r.call(e, t),
                d && !o && 'Backspace' === t.key)
              ) {
                var n = i[d].parent;
                a.setCurrentRootAction(n);
              }
            }
          })
        );
      });
  },
  34766,
  (e) => {
    'use strict';
    var t,
      r = e.i(22034);
    function n() {
      return (n =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    var a = ['bottom', 'height', 'left', 'right', 'top', 'width'],
      o = new Map(),
      i = function e() {
        var r = [];
        o.forEach(function (e, t) {
          var n,
            o,
            i = t.getBoundingClientRect();
          (n = i),
            (o = e.rect),
            void 0 === n && (n = {}),
            void 0 === o && (o = {}),
            a.some(function (e) {
              return n[e] !== o[e];
            }) && ((e.rect = i), r.push(e));
        }),
          r.forEach(function (e) {
            e.callbacks.forEach(function (t) {
              return t(e.rect);
            });
          }),
          (t = window.requestAnimationFrame(e));
      },
      s = 'u' > typeof window ? r.default.useLayoutEffect : r.default.useEffect;
    function l(e, t) {
      var r = t.rect;
      return e.height !== r.height || e.width !== r.width ? r : e;
    }
    var u = function () {
        return 50;
      },
      c = function (e) {
        return e;
      },
      d = function (e, t) {
        return e[t ? 'offsetWidth' : 'offsetHeight'];
      },
      f = function (e) {
        for (
          var t = Math.max(e.start - e.overscan, 0),
            r = Math.min(e.end + e.overscan, e.size - 1),
            n = [],
            a = t;
          a <= r;
          a++
        )
          n.push(a);
        return n;
      },
      p = function (e, t, r, n) {
        for (; e <= t; ) {
          var a = ((e + t) / 2) | 0,
            o = r(a);
          if (o < n) e = a + 1;
          else {
            if (!(o > n)) return a;
            t = a - 1;
          }
        }
        return e > 0 ? e - 1 : 0;
      };
    e.s([
      'defaultRangeExtractor',
      0,
      f,
      'useVirtual',
      0,
      function (e) {
        var a,
          h = e.size,
          m = void 0 === h ? 0 : h,
          v = e.estimateSize,
          g = void 0 === v ? u : v,
          b = e.overscan,
          y = void 0 === b ? 1 : b,
          x = e.paddingStart,
          w = void 0 === x ? 0 : x,
          j = e.paddingEnd,
          S = e.parentRef,
          _ = e.horizontal,
          O = e.scrollToFn,
          M = e.useObserver,
          k = e.initialRect,
          C = e.onScrollElement,
          R = e.scrollOffsetFn,
          N = e.keyExtractor,
          P = void 0 === N ? c : N,
          E = e.measureSize,
          I = void 0 === E ? d : E,
          D = e.rangeExtractor,
          A = void 0 === D ? f : D,
          L = _ ? 'width' : 'height',
          T = _ ? 'scrollLeft' : 'scrollTop',
          B = r.default.useRef({ scrollOffset: 0, measurements: [] }),
          z = r.default.useState(0),
          K = z[0],
          F = z[1];
        B.current.scrollOffset = K;
        var $ = (
          M ||
          function (e, n) {
            void 0 === n && (n = { width: 0, height: 0 });
            var a = r.default.useState(e.current),
              u = a[0],
              c = a[1],
              d = r.default.useReducer(l, n),
              f = d[0],
              p = d[1],
              h = r.default.useRef(!1);
            return (
              s(function () {
                e.current !== u && c(e.current);
              }),
              s(
                function () {
                  u &&
                    !h.current &&
                    ((h.current = !0), p({ rect: u.getBoundingClientRect() }));
                },
                [u]
              ),
              r.default.useEffect(
                function () {
                  if (u) {
                    var e,
                      r =
                        ((e = function (e) {
                          p({ rect: e });
                        }),
                        {
                          observe: function () {
                            var t = 0 === o.size;
                            o.has(u)
                              ? o.get(u).callbacks.push(e)
                              : o.set(u, {
                                  rect: void 0,
                                  hasRectChanged: !1,
                                  callbacks: [e]
                                }),
                              t && i();
                          },
                          unobserve: function () {
                            var r = o.get(u);
                            if (r) {
                              var n = r.callbacks.indexOf(e);
                              n >= 0 && r.callbacks.splice(n, 1),
                                r.callbacks.length || o.delete(u),
                                o.size || cancelAnimationFrame(t);
                            }
                          }
                        });
                    return (
                      r.observe(),
                      function () {
                        r.unobserve();
                      }
                    );
                  }
                },
                [u]
              ),
              f
            );
          }
        )(S, k)[L];
        B.current.outerSize = $;
        var V = r.default.useCallback(
            function (e) {
              S.current && (S.current[T] = e);
            },
            [S, T]
          ),
          H = O || V;
        O = r.default.useCallback(
          function (e) {
            H(e, V);
          },
          [V, H]
        );
        var G = r.default.useState({}),
          W = G[0],
          q = G[1],
          U = r.default.useCallback(function () {
            return q({});
          }, []),
          X = r.default.useRef([]),
          Q = r.default.useMemo(
            function () {
              var e =
                X.current.length > 0 ? Math.min.apply(Math, X.current) : 0;
              X.current = [];
              for (
                var t = B.current.measurements.slice(0, e), r = e;
                r < m;
                r++
              ) {
                var n = P(r),
                  a = W[n],
                  o = t[r - 1] ? t[r - 1].end : w,
                  i = 'number' == typeof a ? a : g(r),
                  s = o + i;
                t[r] = { index: r, start: o, size: i, end: s, key: n };
              }
              return t;
            },
            [g, W, w, m, P]
          ),
          Y =
            ((null == (a = Q[m - 1]) ? void 0 : a.end) || w) +
            (void 0 === j ? 0 : j);
        (B.current.measurements = Q), (B.current.totalSize = Y);
        var Z = C ? C.current : S.current,
          J = r.default.useRef(R);
        (J.current = R),
          s(
            function () {
              if (!Z) return void F(0);
              var e = function (e) {
                F(J.current ? J.current(e) : Z[T]);
              };
              return (
                e(),
                Z.addEventListener('scroll', e, { capture: !1, passive: !0 }),
                function () {
                  Z.removeEventListener('scroll', e);
                }
              );
            },
            [Z, T]
          );
        var ee = (function (e) {
            for (
              var t = e.measurements,
                r = e.outerSize,
                n = e.scrollOffset,
                a = t.length - 1,
                o = p(
                  0,
                  a,
                  function (e) {
                    return t[e].start;
                  },
                  n
                ),
                i = o;
              i < a && t[i].end < n + r;

            )
              i++;
            return { start: o, end: i };
          })(B.current),
          et = ee.start,
          er = ee.end,
          en = r.default.useMemo(
            function () {
              return A({ start: et, end: er, overscan: y, size: Q.length });
            },
            [et, er, y, Q.length, A]
          ),
          ea = r.default.useRef(I);
        ea.current = I;
        var eo = r.default.useMemo(
            function () {
              for (var e = [], t = 0, r = en.length; t < r; t++)
                !(function (t) {
                  var r = en[t],
                    a = Q[r],
                    o = n(
                      n({}, a),
                      {},
                      {
                        measureRef: function (e) {
                          if (e) {
                            var t = ea.current(e, _);
                            if (t !== o.size) {
                              var a = B.current.scrollOffset;
                              o.start < a && V(a + (t - o.size)),
                                X.current.push(r),
                                q(function (e) {
                                  var r;
                                  return n(
                                    n({}, e),
                                    {},
                                    (((r = {})[o.key] = t), r)
                                  );
                                });
                            }
                          }
                        }
                      }
                    );
                  e.push(o);
                })(t);
              return e;
            },
            [en, V, _, Q]
          ),
          ei = r.default.useRef(!1);
        s(
          function () {
            ei.current && q({}), (ei.current = !0);
          },
          [g]
        );
        var es = r.default.useCallback(
            function (e, t) {
              var r = (void 0 === t ? {} : t).align,
                n = void 0 === r ? 'start' : r,
                a = B.current,
                o = a.scrollOffset,
                i = a.outerSize;
              'auto' === n &&
                (n = e <= o ? 'start' : e >= o + i ? 'end' : 'start'),
                'start' === n
                  ? O(e)
                  : 'end' === n
                    ? O(e - i)
                    : 'center' === n && O(e - i / 2);
            },
            [O]
          ),
          el = r.default.useCallback(
            function (e, t) {
              var r = void 0 === t ? {} : t,
                a = r.align,
                o = void 0 === a ? 'auto' : a,
                i = (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    a = {},
                    o = Object.keys(e);
                  for (n = 0; n < o.length; n++)
                    t.indexOf((r = o[n])) >= 0 || (a[r] = e[r]);
                  return a;
                })(r, ['align']),
                s = B.current,
                l = s.measurements,
                u = s.scrollOffset,
                c = s.outerSize,
                d = l[Math.max(0, Math.min(e, m - 1))];
              if (d) {
                if ('auto' === o)
                  if (d.end >= u + c) o = 'end';
                  else {
                    if (!(d.start <= u)) return;
                    o = 'start';
                  }
                es(
                  'center' === o
                    ? d.start + d.size / 2
                    : 'end' === o
                      ? d.end
                      : d.start,
                  n({ align: o }, i)
                );
              }
            },
            [es, m]
          );
        return {
          virtualItems: eo,
          totalSize: Y,
          scrollToOffset: es,
          scrollToIndex: r.default.useCallback(
            function () {
              for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
              el.apply(void 0, t),
                requestAnimationFrame(function () {
                  el.apply(void 0, t);
                });
            },
            [el]
          ),
          measure: U
        };
      }
    ]);
  },
  93737,
  (e, t, r) => {
    'use strict';
    var n =
        (e.e && e.e.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
      a =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  }
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      o =
        (e.e && e.e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (e.e && e.e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              'default' !== r &&
                Object.prototype.hasOwnProperty.call(e, r) &&
                a(t, e, r);
          return o(t, e), t;
        };
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.KBarResults = void 0);
    var s = i(e.r(22034)),
      l = e.r(34766),
      u = e.r(52644),
      c = e.r(85940),
      d = e.r(51380);
    r.KBarResults = function (e) {
      var t = s.useRef(null),
        r = s.useRef(null),
        a = s.useRef(e.items);
      a.current = e.items;
      var o = (0, l.useVirtual)({ size: a.current.length, parentRef: r }),
        i = (0, c.useKBar)(function (e) {
          return {
            search: e.searchQuery,
            currentRootActionId: e.currentRootActionId,
            activeIndex: e.activeIndex
          };
        }),
        f = i.query,
        p = i.search,
        h = i.currentRootActionId,
        m = i.activeIndex,
        v = i.options;
      s.useEffect(
        function () {
          var e = function (e) {
            var r;
            e.isComposing ||
              ('ArrowUp' === e.key || (e.ctrlKey && 'p' === e.key)
                ? (e.preventDefault(),
                  e.stopPropagation(),
                  f.setActiveIndex(function (e) {
                    var t = e > 0 ? e - 1 : e;
                    if ('string' == typeof a.current[t]) {
                      if (0 === t) return e;
                      t -= 1;
                    }
                    return t;
                  }))
                : 'ArrowDown' === e.key || (e.ctrlKey && 'n' === e.key)
                  ? (e.preventDefault(),
                    e.stopPropagation(),
                    f.setActiveIndex(function (e) {
                      var t = e < a.current.length - 1 ? e + 1 : e;
                      if ('string' == typeof a.current[t]) {
                        if (t === a.current.length - 1) return e;
                        t += 1;
                      }
                      return t;
                    }))
                  : 'Enter' === e.key &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    null == (r = t.current) || r.click()));
          };
          return (
            window.addEventListener('keydown', e, { capture: !0 }),
            function () {
              return window.removeEventListener('keydown', e, { capture: !0 });
            }
          );
        },
        [f]
      );
      var g = o.scrollToIndex;
      s.useEffect(
        function () {
          g(m, { align: m <= 1 ? 'end' : 'auto' });
        },
        [m, g]
      ),
        s.useEffect(
          function () {
            f.setActiveIndex(+('string' == typeof e.items[0]));
          },
          [p, h, e.items, f]
        );
      var b = s.useCallback(
          function (e) {
            var t, r;
            'string' != typeof e &&
              (e.command
                ? (e.command.perform(e), f.toggle())
                : (f.setSearch(''), f.setCurrentRootAction(e.id)),
              null ==
                (r = null == (t = v.callbacks) ? void 0 : t.onSelectAction) ||
                r.call(t, e));
          },
          [f, v]
        ),
        y = (0, d.usePointerMovedSinceMount)();
      return s.createElement(
        'div',
        {
          ref: r,
          style: {
            maxHeight: e.maxHeight || 400,
            position: 'relative',
            overflow: 'auto'
          }
        },
        s.createElement(
          'div',
          {
            role: 'listbox',
            id: u.KBAR_LISTBOX,
            style: { height: o.totalSize + 'px', width: '100%' }
          },
          o.virtualItems.map(function (r) {
            var o = a.current[r.index],
              i = 'string' != typeof o && {
                onPointerMove: function () {
                  return y && m !== r.index && f.setActiveIndex(r.index);
                },
                onPointerDown: function () {
                  return f.setActiveIndex(r.index);
                },
                onClick: function () {
                  return b(o);
                }
              },
              l = r.index === m;
            return s.createElement(
              'div',
              n(
                {
                  ref: l ? t : null,
                  id: (0, u.getListboxItemId)(r.index),
                  role: 'option',
                  'aria-selected': l,
                  key: r.index,
                  style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    transform: 'translateY(' + r.start + 'px)'
                  }
                },
                i
              ),
              s.cloneElement(e.onRender({ item: o, active: l }), {
                ref: r.measureRef
              })
            );
          })
        )
      );
    };
  },
  62174,
  (e, t, r) => {
    'use strict';
    var n =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  }
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      a =
        (e.e && e.e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      o =
        (e.e && e.e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              'default' !== r &&
                Object.prototype.hasOwnProperty.call(e, r) &&
                n(t, e, r);
          return a(t, e), t;
        };
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.useRegisterActions = void 0);
    var i = o(e.r(22034)),
      s = e.r(85940);
    r.useRegisterActions = function (e, t) {
      void 0 === t && (t = []);
      var r = (0, s.useKBar)().query,
        n = i.useMemo(function () {
          return e;
        }, t);
      i.useEffect(
        function () {
          if (n.length) {
            var e = r.registerActions(n);
            return function () {
              e();
            };
          }
        },
        [r, n]
      );
    };
  },
  53064,
  (e, t, r) => {
    'use strict';
    var n =
        (e.e && e.e.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
      a =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  }
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      o =
        (e.e && e.e.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (e.e && e.e.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e)
              'default' !== r &&
                Object.prototype.hasOwnProperty.call(e, r) &&
                a(t, e, r);
          return o(t, e), t;
        };
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.KBarAnimator = void 0);
    var s = i(e.r(22034)),
      l = e.r(98605),
      u = e.r(85940),
      c = e.r(51380),
      d = [
        { opacity: 0, transform: 'scale(.99)' },
        { opacity: 1, transform: 'scale(1.01)' },
        { opacity: 1, transform: 'scale(1)' }
      ],
      f = [
        { transform: 'scale(1)' },
        { transform: 'scale(.98)' },
        { transform: 'scale(1)' }
      ];
    r.KBarAnimator = function (e) {
      var t,
        r,
        a = e.children,
        o = e.style,
        i = e.className,
        p = e.disableCloseOnOuterClick,
        h = (0, u.useKBar)(function (e) {
          return {
            visualState: e.visualState,
            currentRootActionId: e.currentRootActionId
          };
        }),
        m = h.visualState,
        v = h.currentRootActionId,
        g = h.query,
        b = h.options,
        y = s.useRef(null),
        x = s.useRef(null),
        w =
          (null == (t = null == b ? void 0 : b.animations)
            ? void 0
            : t.enterMs) || 0,
        j =
          (null == (r = null == b ? void 0 : b.animations)
            ? void 0
            : r.exitMs) || 0;
      s.useEffect(
        function () {
          if (m !== l.VisualState.showing) {
            var e = m === l.VisualState.animatingIn ? w : j,
              t = y.current;
            null == t ||
              t.animate(d, {
                duration: e,
                easing:
                  m === l.VisualState.animatingOut ? 'ease-in' : 'ease-out',
                direction:
                  m === l.VisualState.animatingOut ? 'reverse' : 'normal',
                fill: 'forwards'
              });
          }
        },
        [b, m, w, j]
      );
      var S = s.useRef();
      s.useEffect(
        function () {
          if (m === l.VisualState.showing) {
            var e = y.current,
              t = x.current;
            if (e && t) {
              var r = new ResizeObserver(function (t) {
                for (var r = 0; r < t.length; r++) {
                  var n = t[r].contentRect;
                  S.current || (S.current = n.height),
                    e.animate(
                      [
                        { height: S.current + 'px' },
                        { height: n.height + 'px' }
                      ],
                      { duration: w / 2, easing: 'ease-out', fill: 'forwards' }
                    ),
                    (S.current = n.height);
                }
              });
              return (
                r.observe(t),
                function () {
                  r.unobserve(t);
                }
              );
            }
          }
        },
        [m, b, w, j]
      );
      var _ = s.useRef(!0);
      return (
        s.useEffect(
          function () {
            if (_.current) {
              _.current = !1;
              return;
            }
            var e = y.current;
            e && e.animate(f, { duration: w, easing: 'ease-out' });
          },
          [v, w]
        ),
        (0, c.useOuterClick)(y, function () {
          var e, t;
          p ||
            (g.setVisualState(l.VisualState.animatingOut),
            null == (t = null == (e = b.callbacks) ? void 0 : e.onClose) ||
              t.call(e));
        }),
        s.createElement(
          'div',
          {
            ref: y,
            style: n(n(n({}, d[0]), o), { pointerEvents: 'auto' }),
            className: i
          },
          s.createElement('div', { ref: x }, a)
        )
      );
    };
  },
  56461,
  (e, t, r) => {
    'use strict';
    var n =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  }
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      a =
        (e.e && e.e.__exportStar) ||
        function (e, t) {
          for (var r in e)
            'default' === r ||
              Object.prototype.hasOwnProperty.call(t, r) ||
              n(t, e, r);
        };
    Object.defineProperty(r, '__esModule', { value: !0 }),
      a(e.r(52588), r),
      a(e.r(70120), r);
  },
  50638,
  (e, t, r) => {
    'use strict';
    var n =
        (e.e && e.e.__createBinding) ||
        (Object.create
          ? function (e, t, r, n) {
              void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[r];
                  }
                });
            }
          : function (e, t, r, n) {
              void 0 === n && (n = r), (e[n] = t[r]);
            }),
      a =
        (e.e && e.e.__exportStar) ||
        function (e, t) {
          for (var r in e)
            'default' === r ||
              Object.prototype.hasOwnProperty.call(t, r) ||
              n(t, e, r);
        };
    Object.defineProperty(r, '__esModule', { value: !0 }),
      (r.Priority = r.createAction = void 0);
    var o = e.r(51380);
    Object.defineProperty(r, 'createAction', {
      enumerable: !0,
      get: function () {
        return o.createAction;
      }
    }),
      Object.defineProperty(r, 'Priority', {
        enumerable: !0,
        get: function () {
          return o.Priority;
        }
      }),
      a(e.r(85702), r),
      a(e.r(21415), r),
      a(e.r(78983), r),
      a(e.r(52644), r),
      a(e.r(93737), r),
      a(e.r(85940), r),
      a(e.r(62174), r),
      a(e.r(29818), r),
      a(e.r(53064), r),
      a(e.r(98605), r),
      a(e.r(56461), r);
  },
  26035,
  (e) => {
    'use strict';
    var t = e.i(29971),
      r = e.i(33296),
      n = e.i(50638),
      a = e.i(7561),
      o = e.i(22034);
    let i = o.forwardRef(
      ({ action: e, active: r, currentRootActionId: n }, a) => {
        let i = o.useMemo(() => {
          if (!n) return e.ancestors;
          let t = e.ancestors.findIndex((e) => e.id === n);
          return e.ancestors.slice(t + 1);
        }, [e.ancestors, n]);
        return (0, t.jsxs)('div', {
          ref: a,
          className:
            'relative z-10 flex cursor-pointer items-center justify-between px-4 py-3',
          children: [
            r &&
              (0, t.jsx)('div', {
                id: 'kbar-result-item',
                className:
                  'absolute inset-0 !z-[-1] border-l-4 border-sidebar-primary bg-sidebar-accent'
              }),
            (0, t.jsxs)('div', {
              className: 'relative z-10 flex items-center gap-2',
              children: [
                e.icon && e.icon,
                (0, t.jsxs)('div', {
                  className: 'flex flex-col',
                  children: [
                    (0, t.jsxs)('div', {
                      children: [
                        i.length > 0 &&
                          i.map((e) =>
                            (0, t.jsxs)(
                              o.Fragment,
                              {
                                children: [
                                  (0, t.jsx)('span', {
                                    className: 'mr-2 opacity-50',
                                    children: e.name
                                  }),
                                  (0, t.jsx)('span', {
                                    className: 'mr-2',
                                    children: '›'
                                  })
                                ]
                              },
                              e.id
                            )
                          ),
                        (0, t.jsx)('span', { children: e.name })
                      ]
                    }),
                    e.subtitle &&
                      (0, t.jsx)('span', {
                        className: 'text-sm text-muted-foreground',
                        children: e.subtitle
                      })
                  ]
                })
              ]
            }),
            e.shortcut?.length
              ? (0, t.jsx)('div', {
                  className: 'relative z-10 grid grid-flow-col gap-1',
                  children: e.shortcut.map((e, r) =>
                    (0, t.jsx)(
                      'kbd',
                      {
                        className:
                          'flex items-center gap-1 rounded-md border px-1.5 py-1 text-xs font-medium shadow',
                        children: e
                      },
                      e + r
                    )
                  )
                })
              : null
          ]
        });
      }
    );
    function s() {
      let { results: e, rootActionId: r } = (0, n.useMatches)();
      return (0, t.jsx)(n.KBarResults, {
        items: e,
        onRender: ({ item: e, active: n }) =>
          'string' == typeof e
            ? (0, t.jsx)('div', {
                className:
                  'px-4 py-2 text-sm uppercase text-primary-foreground opacity-50',
                children: e
              })
            : (0, t.jsx)(i, {
                action: e,
                active: n,
                currentRootActionId: r ?? ''
              })
      });
    }
    i.displayName = 'KBarResultItem';
    var l = e.i(34220);
    let u = ({ children: e }) => (
      (() => {
        let { theme: e, setTheme: t } = (0, l.useTheme)();
        (0, n.useRegisterActions)(
          [
            {
              id: 'toggleTheme',
              name: 'Toggle Theme',
              shortcut: ['t', 't'],
              section: 'Theme',
              perform: () => {
                t('dark' === e ? 'dark' : 'light');
              }
            },
            {
              id: 'setLightTheme',
              name: 'Set Light Theme',
              section: 'Theme',
              perform: () => t('light')
            },
            {
              id: 'setDarkTheme',
              name: 'Set Dark Theme',
              section: 'Theme',
              perform: () => t('dark')
            }
          ],
          [e]
        );
      })(),
      (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsx)(n.KBarPortal, {
            children: (0, t.jsx)(n.KBarPositioner, {
              className:
                'scrollbar-hide fixed inset-0 z-[99999] bg-black/80 !p-0 backdrop-blur-sm',
              children: (0, t.jsx)(n.KBarAnimator, {
                className:
                  'relative !mt-64 w-full max-w-[600px] !-translate-y-12 overflow-hidden rounded-lg border bg-background text-foreground shadow-lg',
                children: (0, t.jsxs)('div', {
                  className: 'bg-background',
                  children: [
                    (0, t.jsx)('div', {
                      className: 'border-x-0 border-b-2',
                      children: (0, t.jsx)(n.KBarSearch, {
                        className:
                          'w-full border-none bg-background px-6 py-4 text-lg outline-none focus:outline-none focus:ring-0 focus:ring-offset-0'
                      })
                    }),
                    (0, t.jsx)(s, {})
                  ]
                })
              })
            })
          }),
          e
        ]
      })
    );
    e.s(
      [
        'default',
        0,
        function ({ children: e }) {
          let i = (0, a.useRouter)(),
            s = (e) => {
              i.push(e);
            },
            l = (0, o.useMemo)(
              () =>
                r.navItems.flatMap((e) => {
                  let t =
                      '#' !== e.url
                        ? {
                            id: `${e.title.toLowerCase()}Action`,
                            name: e.title,
                            shortcut: e.shortcut,
                            keywords: e.title.toLowerCase(),
                            section: 'Navigation',
                            subtitle: `Go to ${e.title}`,
                            perform: () => s(e.url)
                          }
                        : null,
                    r =
                      e.items?.map((t) => ({
                        id: `${t.title.toLowerCase()}Action`,
                        name: t.title,
                        shortcut: t.shortcut,
                        keywords: t.title.toLowerCase(),
                        section: e.title,
                        subtitle: `Go to ${t.title}`,
                        perform: () => s(t.url)
                      })) ?? [];
                  return t ? [t, ...r] : r;
                }),
              []
            );
          return (0, t.jsx)(n.KBarProvider, {
            actions: l,
            children: (0, t.jsx)(u, { children: e })
          });
        }
      ],
      26035
    );
  },
  34180,
  (e, t, r) => {
    'use strict';
    var n = e.r(22034),
      a =
        'function' == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      o = n.useState,
      i = n.useEffect,
      s = n.useLayoutEffect,
      l = n.useDebugValue;
    function u(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !a(e, r);
      } catch (e) {
        return !0;
      }
    }
    var c =
      'u' < typeof window ||
      void 0 === window.document ||
      void 0 === window.document.createElement
        ? function (e, t) {
            return t();
          }
        : function (e, t) {
            var r = t(),
              n = o({ inst: { value: r, getSnapshot: t } }),
              a = n[0].inst,
              c = n[1];
            return (
              s(
                function () {
                  (a.value = r), (a.getSnapshot = t), u(a) && c({ inst: a });
                },
                [e, r, t]
              ),
              i(
                function () {
                  return (
                    u(a) && c({ inst: a }),
                    e(function () {
                      u(a) && c({ inst: a });
                    })
                  );
                },
                [e]
              ),
              l(r),
              r
            );
          };
    r.useSyncExternalStore =
      void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
  },
  7998,
  (e, t, r) => {
    'use strict';
    t.exports = e.r(34180);
  },
  99676,
  (e) => {
    'use strict';
    var t = e.i(29971),
      r = e.i(22034),
      n = e.i(50312),
      a = e.i(36628),
      o = e.i(60111),
      i = e.i(7998);
    function s() {
      return () => {};
    }
    var l = 'Avatar',
      [u, c] = (function (e, n = []) {
        let a = [],
          o = () => {
            let t = a.map((e) => r.createContext(e));
            return function (n) {
              let a = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: a } }),
                [n, a]
              );
            };
          };
        return (
          (o.scopeName = e),
          [
            function (n, o) {
              let i = r.createContext(o);
              i.displayName = n + 'Context';
              let s = a.length;
              a = [...a, o];
              let l = (n) => {
                let { scope: a, children: o, ...l } = n,
                  u = a?.[e]?.[s] || i,
                  c = r.useMemo(() => l, Object.values(l));
                return (0, t.jsx)(u.Provider, { value: c, children: o });
              };
              return (
                (l.displayName = n + 'Provider'),
                [
                  l,
                  function (t, a) {
                    let l = a?.[e]?.[s] || i,
                      u = r.useContext(l);
                    if (u) return u;
                    if (void 0 !== o) return o;
                    throw Error(`\`${t}\` must be used within \`${n}\``);
                  }
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName
                }));
                return function (e) {
                  let a = n.reduce((t, { useScope: r, scopeName: n }) => {
                    let a = r(e)[`__scope${n}`];
                    return { ...t, ...a };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: a }),
                    [a]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(o, ...n)
          ]
        );
      })(l),
      [d, f] = u(l),
      p = r.forwardRef((e, n) => {
        let { __scopeAvatar: a, ...i } = e,
          [s, l] = r.useState('idle');
        return (0, t.jsx)(d, {
          scope: a,
          imageLoadingStatus: s,
          onImageLoadingStatusChange: l,
          children: (0, t.jsx)(o.Primitive.span, { ...i, ref: n })
        });
      });
    p.displayName = l;
    var h = 'AvatarImage',
      m = r.forwardRef((e, l) => {
        let {
            __scopeAvatar: u,
            src: c,
            onLoadingStatusChange: d = () => {},
            ...p
          } = e,
          m = f(h, u),
          v = (function (e, { referrerPolicy: t, crossOrigin: n }) {
            let o = (0, i.useSyncExternalStore)(
                s,
                () => !0,
                () => !1
              ),
              l = r.useRef(null),
              u = o
                ? (l.current || (l.current = new window.Image()), l.current)
                : null,
              [c, d] = r.useState(() => b(u, e));
            return (
              (0, a.useLayoutEffect)(() => {
                d(b(u, e));
              }, [u, e]),
              (0, a.useLayoutEffect)(() => {
                let e = (e) => () => {
                  d(e);
                };
                if (!u) return;
                let r = e('loaded'),
                  a = e('error');
                return (
                  u.addEventListener('load', r),
                  u.addEventListener('error', a),
                  t && (u.referrerPolicy = t),
                  'string' == typeof n && (u.crossOrigin = n),
                  () => {
                    u.removeEventListener('load', r),
                      u.removeEventListener('error', a);
                  }
                );
              }, [u, n, t]),
              c
            );
          })(c, p),
          g = (0, n.useCallbackRef)((e) => {
            d(e), m.onImageLoadingStatusChange(e);
          });
        return (
          (0, a.useLayoutEffect)(() => {
            'idle' !== v && g(v);
          }, [v, g]),
          'loaded' === v
            ? (0, t.jsx)(o.Primitive.img, { ...p, ref: l, src: c })
            : null
        );
      });
    m.displayName = h;
    var v = 'AvatarFallback',
      g = r.forwardRef((e, n) => {
        let { __scopeAvatar: a, delayMs: i, ...s } = e,
          l = f(v, a),
          [u, c] = r.useState(void 0 === i);
        return (
          r.useEffect(() => {
            if (void 0 !== i) {
              let e = window.setTimeout(() => c(!0), i);
              return () => window.clearTimeout(e);
            }
          }, [i]),
          u && 'loaded' !== l.imageLoadingStatus
            ? (0, t.jsx)(o.Primitive.span, { ...s, ref: n })
            : null
        );
      });
    function b(e, t) {
      return e
        ? t
          ? (e.src !== t && (e.src = t),
            e.complete && e.naturalWidth > 0 ? 'loaded' : 'loading')
          : 'error'
        : 'idle';
    }
    g.displayName = v;
    var y = e.i(75157);
    let x = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)(p, {
        ref: n,
        className: (0, y.cn)(
          'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
          e
        ),
        ...r
      })
    );
    x.displayName = p.displayName;
    let w = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)(m, {
        ref: n,
        className: (0, y.cn)('aspect-square h-full w-full', e),
        ...r
      })
    );
    w.displayName = m.displayName;
    let j = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)(g, {
        ref: n,
        className: (0, y.cn)(
          'flex h-full w-full items-center justify-center rounded-full bg-muted',
          e
        ),
        ...r
      })
    );
    (j.displayName = g.displayName),
      e.s(['Avatar', 0, x, 'AvatarFallback', 0, j, 'AvatarImage', 0, w], 99676);
  },
  55146,
  (e) => {
    'use strict';
    var t = e.i(29971),
      r = e.i(22034),
      n = e.i(91967),
      a = e.i(6633),
      o = e.i(2501),
      i = e.i(40776),
      s = e.i(20255),
      l = e.i(37909),
      u = e.i(78873),
      c = e.i(42174),
      d = e.i(41681),
      f = e.i(54881),
      p = e.i(93107),
      h = e.i(89407),
      m = e.i(52329),
      v = e.i(24575),
      g = e.i(66227),
      b = e.i(63422),
      y = e.i(50312),
      x = e.i(73772),
      w = e.i(53555),
      j = ['Enter', ' '],
      S = ['ArrowUp', 'PageDown', 'End'],
      _ = ['ArrowDown', 'PageUp', 'Home', ...S],
      O = { ltr: [...j, 'ArrowRight'], rtl: [...j, 'ArrowLeft'] },
      M = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
      k = 'Menu',
      [C, R, N] = (0, l.createCollection)(k),
      [P, E] = (0, o.createContextScope)(k, [
        N,
        h.createPopperScope,
        g.createRovingFocusGroupScope
      ]),
      I = (0, h.createPopperScope)(),
      D = (0, g.createRovingFocusGroupScope)(),
      [A, L] = P(k),
      [T, B] = P(k),
      z = (e) => {
        let {
            __scopeMenu: n,
            open: a = !1,
            children: o,
            dir: i,
            onOpenChange: s,
            modal: l = !0
          } = e,
          c = I(n),
          [d, f] = r.useState(null),
          p = r.useRef(!1),
          m = (0, y.useCallbackRef)(s),
          v = (0, u.useDirection)(i);
        return (
          r.useEffect(() => {
            let e = () => {
                (p.current = !0),
                  document.addEventListener('pointerdown', t, {
                    capture: !0,
                    once: !0
                  }),
                  document.addEventListener('pointermove', t, {
                    capture: !0,
                    once: !0
                  });
              },
              t = () => (p.current = !1);
            return (
              document.addEventListener('keydown', e, { capture: !0 }),
              () => {
                document.removeEventListener('keydown', e, { capture: !0 }),
                  document.removeEventListener('pointerdown', t, {
                    capture: !0
                  }),
                  document.removeEventListener('pointermove', t, {
                    capture: !0
                  });
              }
            );
          }, []),
          (0, t.jsx)(h.Root, {
            ...c,
            children: (0, t.jsx)(A, {
              scope: n,
              open: a,
              onOpenChange: m,
              content: d,
              onContentChange: f,
              children: (0, t.jsx)(T, {
                scope: n,
                onClose: r.useCallback(() => m(!1), [m]),
                isUsingKeyboardRef: p,
                dir: v,
                modal: l,
                children: o
              })
            })
          })
        );
      };
    z.displayName = k;
    var K = r.forwardRef((e, r) => {
      let { __scopeMenu: n, ...a } = e,
        o = I(n);
      return (0, t.jsx)(h.Anchor, { ...o, ...a, ref: r });
    });
    K.displayName = 'MenuAnchor';
    var F = 'MenuPortal',
      [$, V] = P(F, { forceMount: void 0 }),
      H = (e) => {
        let { __scopeMenu: r, forceMount: n, children: a, container: o } = e,
          i = L(F, r);
        return (0, t.jsx)($, {
          scope: r,
          forceMount: n,
          children: (0, t.jsx)(v.Presence, {
            present: n || i.open,
            children: (0, t.jsx)(m.Portal, {
              asChild: !0,
              container: o,
              children: a
            })
          })
        });
      };
    H.displayName = F;
    var G = 'MenuContent',
      [W, q] = P(G),
      U = r.forwardRef((e, r) => {
        let n = V(G, e.__scopeMenu),
          { forceMount: a = n.forceMount, ...o } = e,
          i = L(G, e.__scopeMenu),
          s = B(G, e.__scopeMenu);
        return (0, t.jsx)(C.Provider, {
          scope: e.__scopeMenu,
          children: (0, t.jsx)(v.Presence, {
            present: a || i.open,
            children: (0, t.jsx)(C.Slot, {
              scope: e.__scopeMenu,
              children: s.modal
                ? (0, t.jsx)(X, { ...o, ref: r })
                : (0, t.jsx)(Q, { ...o, ref: r })
            })
          })
        });
      }),
      X = r.forwardRef((e, o) => {
        let i = L(G, e.__scopeMenu),
          s = r.useRef(null),
          l = (0, a.useComposedRefs)(o, s);
        return (
          r.useEffect(() => {
            let e = s.current;
            if (e) return (0, x.hideOthers)(e);
          }, []),
          (0, t.jsx)(Z, {
            ...e,
            ref: l,
            trapFocus: i.open,
            disableOutsidePointerEvents: i.open,
            disableOutsideScroll: !0,
            onFocusOutside: (0, n.composeEventHandlers)(
              e.onFocusOutside,
              (e) => e.preventDefault(),
              { checkForDefaultPrevented: !1 }
            ),
            onDismiss: () => i.onOpenChange(!1)
          })
        );
      }),
      Q = r.forwardRef((e, r) => {
        let n = L(G, e.__scopeMenu);
        return (0, t.jsx)(Z, {
          ...e,
          ref: r,
          trapFocus: !1,
          disableOutsidePointerEvents: !1,
          disableOutsideScroll: !1,
          onDismiss: () => n.onOpenChange(!1)
        });
      }),
      Y = (0, b.createSlot)('MenuContent.ScrollLock'),
      Z = r.forwardRef((e, o) => {
        let {
            __scopeMenu: i,
            loop: s = !1,
            trapFocus: l,
            onOpenAutoFocus: u,
            onCloseAutoFocus: p,
            disableOutsidePointerEvents: m,
            onEntryFocus: v,
            onEscapeKeyDown: b,
            onPointerDownOutside: y,
            onFocusOutside: x,
            onInteractOutside: j,
            onDismiss: O,
            disableOutsideScroll: M,
            ...k
          } = e,
          C = L(G, i),
          N = B(G, i),
          P = I(i),
          E = D(i),
          A = R(i),
          [T, z] = r.useState(null),
          K = r.useRef(null),
          F = (0, a.useComposedRefs)(o, K, C.onContentChange),
          $ = r.useRef(0),
          V = r.useRef(''),
          H = r.useRef(0),
          q = r.useRef(null),
          U = r.useRef('right'),
          X = r.useRef(0),
          Q = M ? w.RemoveScroll : r.Fragment;
        r.useEffect(() => () => window.clearTimeout($.current), []),
          (0, d.useFocusGuards)();
        let Z = r.useCallback((e) => {
          var t, r;
          return (
            U.current === q.current?.side &&
            ((t = e),
            !!(r = q.current?.area) &&
              (function (e, t) {
                let { x: r, y: n } = e,
                  a = !1;
                for (let e = 0, o = t.length - 1; e < t.length; o = e++) {
                  let i = t[e],
                    s = t[o],
                    l = i.x,
                    u = i.y,
                    c = s.x,
                    d = s.y;
                  u > n != d > n &&
                    r < ((c - l) * (n - u)) / (d - u) + l &&
                    (a = !a);
                }
                return a;
              })({ x: t.clientX, y: t.clientY }, r))
          );
        }, []);
        return (0, t.jsx)(W, {
          scope: i,
          searchRef: V,
          onItemEnter: r.useCallback(
            (e) => {
              Z(e) && e.preventDefault();
            },
            [Z]
          ),
          onItemLeave: r.useCallback(
            (e) => {
              Z(e) || (K.current?.focus(), z(null));
            },
            [Z]
          ),
          onTriggerLeave: r.useCallback(
            (e) => {
              Z(e) && e.preventDefault();
            },
            [Z]
          ),
          pointerGraceTimerRef: H,
          onPointerGraceIntentChange: r.useCallback((e) => {
            q.current = e;
          }, []),
          children: (0, t.jsx)(Q, {
            ...(M ? { as: Y, allowPinchZoom: !0 } : void 0),
            children: (0, t.jsx)(f.FocusScope, {
              asChild: !0,
              trapped: l,
              onMountAutoFocus: (0, n.composeEventHandlers)(u, (e) => {
                e.preventDefault(), K.current?.focus({ preventScroll: !0 });
              }),
              onUnmountAutoFocus: p,
              children: (0, t.jsx)(c.DismissableLayer, {
                asChild: !0,
                disableOutsidePointerEvents: m,
                onEscapeKeyDown: b,
                onPointerDownOutside: y,
                onFocusOutside: x,
                onInteractOutside: j,
                onDismiss: O,
                children: (0, t.jsx)(g.Root, {
                  asChild: !0,
                  ...E,
                  dir: N.dir,
                  orientation: 'vertical',
                  loop: s,
                  currentTabStopId: T,
                  onCurrentTabStopIdChange: z,
                  onEntryFocus: (0, n.composeEventHandlers)(v, (e) => {
                    N.isUsingKeyboardRef.current || e.preventDefault();
                  }),
                  preventScrollOnEntryFocus: !0,
                  children: (0, t.jsx)(h.Content, {
                    role: 'menu',
                    'aria-orientation': 'vertical',
                    'data-state': e_(C.open),
                    'data-radix-menu-content': '',
                    dir: N.dir,
                    ...P,
                    ...k,
                    ref: F,
                    style: { outline: 'none', ...k.style },
                    onKeyDown: (0, n.composeEventHandlers)(k.onKeyDown, (e) => {
                      let t =
                          e.target.closest('[data-radix-menu-content]') ===
                          e.currentTarget,
                        r = e.ctrlKey || e.altKey || e.metaKey,
                        n = 1 === e.key.length;
                      if (t) {
                        var a;
                        let t, o, i, s, l, u;
                        'Tab' === e.key && e.preventDefault(),
                          !r &&
                            n &&
                            ((a = e.key),
                            (t = V.current + a),
                            (o = A().filter((e) => !e.disabled)),
                            (i = document.activeElement),
                            (s = o.find((e) => e.ref.current === i)?.textValue),
                            (l = (function (e, t, r) {
                              var n;
                              let a =
                                  t.length > 1 &&
                                  Array.from(t).every((e) => e === t[0])
                                    ? t[0]
                                    : t,
                                o = r ? e.indexOf(r) : -1,
                                i =
                                  ((n = Math.max(o, 0)),
                                  e.map((t, r) => e[(n + r) % e.length]));
                              1 === a.length && (i = i.filter((e) => e !== r));
                              let s = i.find((e) =>
                                e.toLowerCase().startsWith(a.toLowerCase())
                              );
                              return s !== r ? s : void 0;
                            })(
                              o.map((e) => e.textValue),
                              t,
                              s
                            )),
                            (u = o.find((e) => e.textValue === l)?.ref.current),
                            (function e(t) {
                              (V.current = t),
                                window.clearTimeout($.current),
                                '' !== t &&
                                  ($.current = window.setTimeout(
                                    () => e(''),
                                    1e3
                                  ));
                            })(t),
                            u && setTimeout(() => u.focus()));
                      }
                      let o = K.current;
                      if (e.target !== o || !_.includes(e.key)) return;
                      e.preventDefault();
                      let i = A()
                        .filter((e) => !e.disabled)
                        .map((e) => e.ref.current);
                      S.includes(e.key) && i.reverse(),
                        (function (e) {
                          let t = document.activeElement;
                          for (let r of e)
                            if (
                              r === t ||
                              (r.focus(), document.activeElement !== t)
                            )
                              return;
                        })(i);
                    }),
                    onBlur: (0, n.composeEventHandlers)(e.onBlur, (e) => {
                      e.currentTarget.contains(e.target) ||
                        (window.clearTimeout($.current), (V.current = ''));
                    }),
                    onPointerMove: (0, n.composeEventHandlers)(
                      e.onPointerMove,
                      ek((e) => {
                        let t = e.target,
                          r = X.current !== e.clientX;
                        e.currentTarget.contains(t) &&
                          r &&
                          ((U.current =
                            e.clientX > X.current ? 'right' : 'left'),
                          (X.current = e.clientX));
                      })
                    )
                  })
                })
              })
            })
          })
        });
      });
    U.displayName = G;
    var J = r.forwardRef((e, r) => {
      let { __scopeMenu: n, ...a } = e;
      return (0, t.jsx)(s.Primitive.div, { role: 'group', ...a, ref: r });
    });
    J.displayName = 'MenuGroup';
    var ee = r.forwardRef((e, r) => {
      let { __scopeMenu: n, ...a } = e;
      return (0, t.jsx)(s.Primitive.div, { ...a, ref: r });
    });
    ee.displayName = 'MenuLabel';
    var et = 'MenuItem',
      er = 'menu.itemSelect',
      en = r.forwardRef((e, o) => {
        let { disabled: i = !1, onSelect: l, ...u } = e,
          c = r.useRef(null),
          d = B(et, e.__scopeMenu),
          f = q(et, e.__scopeMenu),
          p = (0, a.useComposedRefs)(o, c),
          h = r.useRef(!1);
        return (0, t.jsx)(ea, {
          ...u,
          ref: p,
          disabled: i,
          onClick: (0, n.composeEventHandlers)(e.onClick, () => {
            let e = c.current;
            if (!i && e) {
              let t = new CustomEvent(er, { bubbles: !0, cancelable: !0 });
              e.addEventListener(er, (e) => l?.(e), { once: !0 }),
                (0, s.dispatchDiscreteCustomEvent)(e, t),
                t.defaultPrevented ? (h.current = !1) : d.onClose();
            }
          }),
          onPointerDown: (t) => {
            e.onPointerDown?.(t), (h.current = !0);
          },
          onPointerUp: (0, n.composeEventHandlers)(e.onPointerUp, (e) => {
            h.current || e.currentTarget?.click();
          }),
          onKeyDown: (0, n.composeEventHandlers)(e.onKeyDown, (e) => {
            let t = '' !== f.searchRef.current;
            i ||
              (t && ' ' === e.key) ||
              (j.includes(e.key) &&
                (e.currentTarget.click(), e.preventDefault()));
          })
        });
      });
    en.displayName = et;
    var ea = r.forwardRef((e, o) => {
        let { __scopeMenu: i, disabled: l = !1, textValue: u, ...c } = e,
          d = q(et, i),
          f = D(i),
          p = r.useRef(null),
          h = (0, a.useComposedRefs)(o, p),
          [m, v] = r.useState(!1),
          [b, y] = r.useState('');
        return (
          r.useEffect(() => {
            let e = p.current;
            e && y((e.textContent ?? '').trim());
          }, [c.children]),
          (0, t.jsx)(C.ItemSlot, {
            scope: i,
            disabled: l,
            textValue: u ?? b,
            children: (0, t.jsx)(g.Item, {
              asChild: !0,
              ...f,
              focusable: !l,
              children: (0, t.jsx)(s.Primitive.div, {
                role: 'menuitem',
                'data-highlighted': m ? '' : void 0,
                'aria-disabled': l || void 0,
                'data-disabled': l ? '' : void 0,
                ...c,
                ref: h,
                onPointerMove: (0, n.composeEventHandlers)(
                  e.onPointerMove,
                  ek((e) => {
                    l
                      ? d.onItemLeave(e)
                      : (d.onItemEnter(e),
                        e.defaultPrevented ||
                          e.currentTarget.focus({ preventScroll: !0 }));
                  })
                ),
                onPointerLeave: (0, n.composeEventHandlers)(
                  e.onPointerLeave,
                  ek((e) => d.onItemLeave(e))
                ),
                onFocus: (0, n.composeEventHandlers)(e.onFocus, () => v(!0)),
                onBlur: (0, n.composeEventHandlers)(e.onBlur, () => v(!1))
              })
            })
          })
        );
      }),
      eo = r.forwardRef((e, r) => {
        let { checked: a = !1, onCheckedChange: o, ...i } = e;
        return (0, t.jsx)(ep, {
          scope: e.__scopeMenu,
          checked: a,
          children: (0, t.jsx)(en, {
            role: 'menuitemcheckbox',
            'aria-checked': eO(a) ? 'mixed' : a,
            ...i,
            ref: r,
            'data-state': eM(a),
            onSelect: (0, n.composeEventHandlers)(
              i.onSelect,
              () => o?.(!!eO(a) || !a),
              { checkForDefaultPrevented: !1 }
            )
          })
        });
      });
    eo.displayName = 'MenuCheckboxItem';
    var ei = 'MenuRadioGroup',
      [es, el] = P(ei, { value: void 0, onValueChange: () => {} }),
      eu = r.forwardRef((e, r) => {
        let { value: n, onValueChange: a, ...o } = e,
          i = (0, y.useCallbackRef)(a);
        return (0, t.jsx)(es, {
          scope: e.__scopeMenu,
          value: n,
          onValueChange: i,
          children: (0, t.jsx)(J, { ...o, ref: r })
        });
      });
    eu.displayName = ei;
    var ec = 'MenuRadioItem',
      ed = r.forwardRef((e, r) => {
        let { value: a, ...o } = e,
          i = el(ec, e.__scopeMenu),
          s = a === i.value;
        return (0, t.jsx)(ep, {
          scope: e.__scopeMenu,
          checked: s,
          children: (0, t.jsx)(en, {
            role: 'menuitemradio',
            'aria-checked': s,
            ...o,
            ref: r,
            'data-state': eM(s),
            onSelect: (0, n.composeEventHandlers)(
              o.onSelect,
              () => i.onValueChange?.(a),
              { checkForDefaultPrevented: !1 }
            )
          })
        });
      });
    ed.displayName = ec;
    var ef = 'MenuItemIndicator',
      [ep, eh] = P(ef, { checked: !1 }),
      em = r.forwardRef((e, r) => {
        let { __scopeMenu: n, forceMount: a, ...o } = e,
          i = eh(ef, n);
        return (0, t.jsx)(v.Presence, {
          present: a || eO(i.checked) || !0 === i.checked,
          children: (0, t.jsx)(s.Primitive.span, {
            ...o,
            ref: r,
            'data-state': eM(i.checked)
          })
        });
      });
    em.displayName = ef;
    var ev = r.forwardRef((e, r) => {
      let { __scopeMenu: n, ...a } = e;
      return (0, t.jsx)(s.Primitive.div, {
        role: 'separator',
        'aria-orientation': 'horizontal',
        ...a,
        ref: r
      });
    });
    ev.displayName = 'MenuSeparator';
    var eg = r.forwardRef((e, r) => {
      let { __scopeMenu: n, ...a } = e,
        o = I(n);
      return (0, t.jsx)(h.Arrow, { ...o, ...a, ref: r });
    });
    eg.displayName = 'MenuArrow';
    var [eb, ey] = P('MenuSub'),
      ex = 'MenuSubTrigger',
      ew = r.forwardRef((e, o) => {
        let i = L(ex, e.__scopeMenu),
          s = B(ex, e.__scopeMenu),
          l = ey(ex, e.__scopeMenu),
          u = q(ex, e.__scopeMenu),
          c = r.useRef(null),
          { pointerGraceTimerRef: d, onPointerGraceIntentChange: f } = u,
          p = { __scopeMenu: e.__scopeMenu },
          h = r.useCallback(() => {
            c.current && window.clearTimeout(c.current), (c.current = null);
          }, []);
        return (
          r.useEffect(() => h, [h]),
          r.useEffect(() => {
            let e = d.current;
            return () => {
              window.clearTimeout(e), f(null);
            };
          }, [d, f]),
          (0, t.jsx)(K, {
            asChild: !0,
            ...p,
            children: (0, t.jsx)(ea, {
              id: l.triggerId,
              'aria-haspopup': 'menu',
              'aria-expanded': i.open,
              'aria-controls': l.contentId,
              'data-state': e_(i.open),
              ...e,
              ref: (0, a.composeRefs)(o, l.onTriggerChange),
              onClick: (t) => {
                e.onClick?.(t),
                  e.disabled ||
                    t.defaultPrevented ||
                    (t.currentTarget.focus(), i.open || i.onOpenChange(!0));
              },
              onPointerMove: (0, n.composeEventHandlers)(
                e.onPointerMove,
                ek((t) => {
                  u.onItemEnter(t),
                    !t.defaultPrevented &&
                      (e.disabled ||
                        i.open ||
                        c.current ||
                        (u.onPointerGraceIntentChange(null),
                        (c.current = window.setTimeout(() => {
                          i.onOpenChange(!0), h();
                        }, 100))));
                })
              ),
              onPointerLeave: (0, n.composeEventHandlers)(
                e.onPointerLeave,
                ek((e) => {
                  h();
                  let t = i.content?.getBoundingClientRect();
                  if (t) {
                    let r = i.content?.dataset.side,
                      n = 'right' === r,
                      a = t[n ? 'left' : 'right'],
                      o = t[n ? 'right' : 'left'];
                    u.onPointerGraceIntentChange({
                      area: [
                        { x: e.clientX + (n ? -5 : 5), y: e.clientY },
                        { x: a, y: t.top },
                        { x: o, y: t.top },
                        { x: o, y: t.bottom },
                        { x: a, y: t.bottom }
                      ],
                      side: r
                    }),
                      window.clearTimeout(d.current),
                      (d.current = window.setTimeout(
                        () => u.onPointerGraceIntentChange(null),
                        300
                      ));
                  } else {
                    if ((u.onTriggerLeave(e), e.defaultPrevented)) return;
                    u.onPointerGraceIntentChange(null);
                  }
                })
              ),
              onKeyDown: (0, n.composeEventHandlers)(e.onKeyDown, (t) => {
                let r = '' !== u.searchRef.current;
                e.disabled ||
                  (r && ' ' === t.key) ||
                  (O[s.dir].includes(t.key) &&
                    (i.onOpenChange(!0),
                    i.content?.focus(),
                    t.preventDefault()));
              })
            })
          })
        );
      });
    ew.displayName = ex;
    var ej = 'MenuSubContent',
      eS = r.forwardRef((e, o) => {
        let i = V(G, e.__scopeMenu),
          { forceMount: s = i.forceMount, ...l } = e,
          u = L(G, e.__scopeMenu),
          c = B(G, e.__scopeMenu),
          d = ey(ej, e.__scopeMenu),
          f = r.useRef(null),
          p = (0, a.useComposedRefs)(o, f);
        return (0, t.jsx)(C.Provider, {
          scope: e.__scopeMenu,
          children: (0, t.jsx)(v.Presence, {
            present: s || u.open,
            children: (0, t.jsx)(C.Slot, {
              scope: e.__scopeMenu,
              children: (0, t.jsx)(Z, {
                id: d.contentId,
                'aria-labelledby': d.triggerId,
                ...l,
                ref: p,
                align: 'start',
                side: 'rtl' === c.dir ? 'left' : 'right',
                disableOutsidePointerEvents: !1,
                disableOutsideScroll: !1,
                trapFocus: !1,
                onOpenAutoFocus: (e) => {
                  c.isUsingKeyboardRef.current && f.current?.focus(),
                    e.preventDefault();
                },
                onCloseAutoFocus: (e) => e.preventDefault(),
                onFocusOutside: (0, n.composeEventHandlers)(
                  e.onFocusOutside,
                  (e) => {
                    e.target !== d.trigger && u.onOpenChange(!1);
                  }
                ),
                onEscapeKeyDown: (0, n.composeEventHandlers)(
                  e.onEscapeKeyDown,
                  (e) => {
                    c.onClose(), e.preventDefault();
                  }
                ),
                onKeyDown: (0, n.composeEventHandlers)(e.onKeyDown, (e) => {
                  let t = e.currentTarget.contains(e.target),
                    r = M[c.dir].includes(e.key);
                  t &&
                    r &&
                    (u.onOpenChange(!1),
                    d.trigger?.focus(),
                    e.preventDefault());
                })
              })
            })
          })
        });
      });
    function e_(e) {
      return e ? 'open' : 'closed';
    }
    function eO(e) {
      return 'indeterminate' === e;
    }
    function eM(e) {
      return eO(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
    }
    function ek(e) {
      return (t) => ('mouse' === t.pointerType ? e(t) : void 0);
    }
    eS.displayName = ej;
    var eC = 'DropdownMenu',
      [eR, eN] = (0, o.createContextScope)(eC, [E]),
      eP = E(),
      [eE, eI] = eR(eC),
      eD = (e) => {
        let {
            __scopeDropdownMenu: n,
            children: a,
            dir: o,
            open: s,
            defaultOpen: l,
            onOpenChange: u,
            modal: c = !0
          } = e,
          d = eP(n),
          f = r.useRef(null),
          [h, m] = (0, i.useControllableState)({
            prop: s,
            defaultProp: l ?? !1,
            onChange: u,
            caller: eC
          });
        return (0, t.jsx)(eE, {
          scope: n,
          triggerId: (0, p.useId)(),
          triggerRef: f,
          contentId: (0, p.useId)(),
          open: h,
          onOpenChange: m,
          onOpenToggle: r.useCallback(() => m((e) => !e), [m]),
          modal: c,
          children: (0, t.jsx)(z, {
            ...d,
            open: h,
            onOpenChange: m,
            dir: o,
            modal: c,
            children: a
          })
        });
      };
    eD.displayName = eC;
    var eA = 'DropdownMenuTrigger',
      eL = r.forwardRef((e, r) => {
        let { __scopeDropdownMenu: o, disabled: i = !1, ...l } = e,
          u = eI(eA, o),
          c = eP(o);
        return (0, t.jsx)(K, {
          asChild: !0,
          ...c,
          children: (0, t.jsx)(s.Primitive.button, {
            type: 'button',
            id: u.triggerId,
            'aria-haspopup': 'menu',
            'aria-expanded': u.open,
            'aria-controls': u.open ? u.contentId : void 0,
            'data-state': u.open ? 'open' : 'closed',
            'data-disabled': i ? '' : void 0,
            disabled: i,
            ...l,
            ref: (0, a.composeRefs)(r, u.triggerRef),
            onPointerDown: (0, n.composeEventHandlers)(e.onPointerDown, (e) => {
              !i &&
                0 === e.button &&
                !1 === e.ctrlKey &&
                (u.onOpenToggle(), u.open || e.preventDefault());
            }),
            onKeyDown: (0, n.composeEventHandlers)(e.onKeyDown, (e) => {
              !i &&
                (['Enter', ' '].includes(e.key) && u.onOpenToggle(),
                'ArrowDown' === e.key && u.onOpenChange(!0),
                ['Enter', ' ', 'ArrowDown'].includes(e.key) &&
                  e.preventDefault());
            })
          })
        });
      });
    eL.displayName = eA;
    var eT = (e) => {
      let { __scopeDropdownMenu: r, ...n } = e,
        a = eP(r);
      return (0, t.jsx)(H, { ...a, ...n });
    };
    eT.displayName = 'DropdownMenuPortal';
    var eB = 'DropdownMenuContent',
      ez = r.forwardRef((e, a) => {
        let { __scopeDropdownMenu: o, ...i } = e,
          s = eI(eB, o),
          l = eP(o),
          u = r.useRef(!1);
        return (0, t.jsx)(U, {
          id: s.contentId,
          'aria-labelledby': s.triggerId,
          ...l,
          ...i,
          ref: a,
          onCloseAutoFocus: (0, n.composeEventHandlers)(
            e.onCloseAutoFocus,
            (e) => {
              u.current || s.triggerRef.current?.focus(),
                (u.current = !1),
                e.preventDefault();
            }
          ),
          onInteractOutside: (0, n.composeEventHandlers)(
            e.onInteractOutside,
            (e) => {
              let t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey,
                n = 2 === t.button || r;
              (!s.modal || n) && (u.current = !0);
            }
          ),
          style: {
            ...e.style,
            '--radix-dropdown-menu-content-transform-origin':
              'var(--radix-popper-transform-origin)',
            '--radix-dropdown-menu-content-available-width':
              'var(--radix-popper-available-width)',
            '--radix-dropdown-menu-content-available-height':
              'var(--radix-popper-available-height)',
            '--radix-dropdown-menu-trigger-width':
              'var(--radix-popper-anchor-width)',
            '--radix-dropdown-menu-trigger-height':
              'var(--radix-popper-anchor-height)'
          }
        });
      });
    ez.displayName = eB;
    var eK = r.forwardRef((e, r) => {
      let { __scopeDropdownMenu: n, ...a } = e,
        o = eP(n);
      return (0, t.jsx)(J, { ...o, ...a, ref: r });
    });
    eK.displayName = 'DropdownMenuGroup';
    var eF = r.forwardRef((e, r) => {
      let { __scopeDropdownMenu: n, ...a } = e,
        o = eP(n);
      return (0, t.jsx)(ee, { ...o, ...a, ref: r });
    });
    eF.displayName = 'DropdownMenuLabel';
    var e$ = r.forwardRef((e, r) => {
      let { __scopeDropdownMenu: n, ...a } = e,
        o = eP(n);
      return (0, t.jsx)(en, { ...o, ...a, ref: r });
    });
    e$.displayName = 'DropdownMenuItem';
    var eV = r.forwardRef((e, r) => {
      let { __scopeDropdownMenu: n, ...a } = e,
        o = eP(n);
      return (0, t.jsx)(eo, { ...o, ...a, ref: r });
    });
    (eV.displayName = 'DropdownMenuCheckboxItem'),
      (r.forwardRef((e, r) => {
        let { __scopeDropdownMenu: n, ...a } = e,
          o = eP(n);
        return (0, t.jsx)(eu, { ...o, ...a, ref: r });
      }).displayName = 'DropdownMenuRadioGroup');
    var eH = r.forwardRef((e, r) => {
      let { __scopeDropdownMenu: n, ...a } = e,
        o = eP(n);
      return (0, t.jsx)(ed, { ...o, ...a, ref: r });
    });
    eH.displayName = 'DropdownMenuRadioItem';
    var eG = r.forwardRef((e, r) => {
      let { __scopeDropdownMenu: n, ...a } = e,
        o = eP(n);
      return (0, t.jsx)(em, { ...o, ...a, ref: r });
    });
    eG.displayName = 'DropdownMenuItemIndicator';
    var eW = r.forwardRef((e, r) => {
      let { __scopeDropdownMenu: n, ...a } = e,
        o = eP(n);
      return (0, t.jsx)(ev, { ...o, ...a, ref: r });
    });
    (eW.displayName = 'DropdownMenuSeparator'),
      (r.forwardRef((e, r) => {
        let { __scopeDropdownMenu: n, ...a } = e,
          o = eP(n);
        return (0, t.jsx)(eg, { ...o, ...a, ref: r });
      }).displayName = 'DropdownMenuArrow');
    var eq = r.forwardRef((e, r) => {
      let { __scopeDropdownMenu: n, ...a } = e,
        o = eP(n);
      return (0, t.jsx)(ew, { ...o, ...a, ref: r });
    });
    eq.displayName = 'DropdownMenuSubTrigger';
    var eU = r.forwardRef((e, r) => {
      let { __scopeDropdownMenu: n, ...a } = e,
        o = eP(n);
      return (0, t.jsx)(eS, {
        ...o,
        ...a,
        ref: r,
        style: {
          ...e.style,
          '--radix-dropdown-menu-content-transform-origin':
            'var(--radix-popper-transform-origin)',
          '--radix-dropdown-menu-content-available-width':
            'var(--radix-popper-available-width)',
          '--radix-dropdown-menu-content-available-height':
            'var(--radix-popper-available-height)',
          '--radix-dropdown-menu-trigger-width':
            'var(--radix-popper-anchor-width)',
          '--radix-dropdown-menu-trigger-height':
            'var(--radix-popper-anchor-height)'
        }
      });
    });
    eU.displayName = 'DropdownMenuSubContent';
    var eX = e.i(60617),
      eQ = e.i(75157);
    (r.forwardRef(({ className: e, inset: r, children: n, ...a }, o) =>
      (0, t.jsxs)(eq, {
        ref: o,
        className: (0, eQ.cn)(
          'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
          r && 'pl-8',
          e
        ),
        ...a,
        children: [
          n,
          (0, t.jsx)(eX.ChevronRightIcon, { className: 'ml-auto h-4 w-4' })
        ]
      })
    ).displayName = eq.displayName),
      (r.forwardRef(({ className: e, ...r }, n) =>
        (0, t.jsx)(eU, {
          ref: n,
          className: (0, eQ.cn)(
            'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            e
          ),
          ...r
        })
      ).displayName = eU.displayName);
    let eY = r.forwardRef(({ className: e, sideOffset: r = 4, ...n }, a) =>
      (0, t.jsx)(eT, {
        children: (0, t.jsx)(ez, {
          ref: a,
          sideOffset: r,
          className: (0, eQ.cn)(
            'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            e
          ),
          ...n
        })
      })
    );
    eY.displayName = ez.displayName;
    let eZ = r.forwardRef(({ className: e, inset: r, ...n }, a) =>
      (0, t.jsx)(e$, {
        ref: a,
        className: (0, eQ.cn)(
          'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          r && 'pl-8',
          e
        ),
        ...n
      })
    );
    (eZ.displayName = e$.displayName),
      (r.forwardRef(({ className: e, children: r, checked: n, ...a }, o) =>
        (0, t.jsxs)(eV, {
          ref: o,
          className: (0, eQ.cn)(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            e
          ),
          checked: n,
          ...a,
          children: [
            (0, t.jsx)('span', {
              className:
                'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
              children: (0, t.jsx)(eG, {
                children: (0, t.jsx)(eX.CheckIcon, { className: 'h-4 w-4' })
              })
            }),
            r
          ]
        })
      ).displayName = eV.displayName),
      (r.forwardRef(({ className: e, children: r, ...n }, a) =>
        (0, t.jsxs)(eH, {
          ref: a,
          className: (0, eQ.cn)(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            e
          ),
          ...n,
          children: [
            (0, t.jsx)('span', {
              className:
                'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
              children: (0, t.jsx)(eG, {
                children: (0, t.jsx)(eX.DotFilledIcon, {
                  className: 'h-4 w-4 fill-current'
                })
              })
            }),
            r
          ]
        })
      ).displayName = eH.displayName);
    let eJ = r.forwardRef(({ className: e, inset: r, ...n }, a) =>
      (0, t.jsx)(eF, {
        ref: a,
        className: (0, eQ.cn)(
          'px-2 py-1.5 text-sm font-semibold',
          r && 'pl-8',
          e
        ),
        ...n
      })
    );
    eJ.displayName = eF.displayName;
    let e0 = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)(eW, {
        ref: n,
        className: (0, eQ.cn)('-mx-1 my-1 h-px bg-muted', e),
        ...r
      })
    );
    e0.displayName = eW.displayName;
    let e1 = ({ className: e, ...r }) =>
      (0, t.jsx)('span', {
        className: (0, eQ.cn)('ml-auto text-xs tracking-widest opacity-60', e),
        ...r
      });
    (e1.displayName = 'DropdownMenuShortcut'),
      e.s(
        [
          'DropdownMenu',
          0,
          eD,
          'DropdownMenuContent',
          0,
          eY,
          'DropdownMenuGroup',
          0,
          eK,
          'DropdownMenuItem',
          0,
          eZ,
          'DropdownMenuLabel',
          0,
          eJ,
          'DropdownMenuSeparator',
          0,
          e0,
          'DropdownMenuShortcut',
          0,
          e1,
          'DropdownMenuTrigger',
          0,
          eL
        ],
        55146
      );
  },
  30909,
  (e) => {
    'use strict';
    var t = e.i(29971),
      r = e.i(22034),
      n = e.i(23824),
      a = e.i(94237);
    let o = (0, e.i(74420).default)('PanelLeft', [
      [
        'rect',
        { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }
      ],
      ['path', { d: 'M9 3v18', key: 'fh3hqa' }]
    ]);
    var i = e.i(75157),
      s = e.i(19455),
      l = e.i(93479),
      u = e.i(72436),
      c = e.i(91967),
      d = e.i(6633),
      f = e.i(2501),
      p = e.i(93107),
      h = e.i(40776),
      m = e.i(42174),
      v = e.i(54881),
      g = e.i(52329),
      b = e.i(24575),
      y = e.i(20255),
      x = e.i(41681),
      w = e.i(53555),
      j = e.i(73772),
      S = e.i(63422),
      _ = 'Dialog',
      [O, M] = (0, f.createContextScope)(_),
      [k, C] = O(_),
      R = (e) => {
        let {
            __scopeDialog: n,
            children: a,
            open: o,
            defaultOpen: i,
            onOpenChange: s,
            modal: l = !0
          } = e,
          u = r.useRef(null),
          c = r.useRef(null),
          [d, f] = (0, h.useControllableState)({
            prop: o,
            defaultProp: i ?? !1,
            onChange: s,
            caller: _
          });
        return (0, t.jsx)(k, {
          scope: n,
          triggerRef: u,
          contentRef: c,
          contentId: (0, p.useId)(),
          titleId: (0, p.useId)(),
          descriptionId: (0, p.useId)(),
          open: d,
          onOpenChange: f,
          onOpenToggle: r.useCallback(() => f((e) => !e), [f]),
          modal: l,
          children: a
        });
      };
    R.displayName = _;
    var N = 'DialogTrigger';
    r.forwardRef((e, r) => {
      let { __scopeDialog: n, ...a } = e,
        o = C(N, n),
        i = (0, d.useComposedRefs)(r, o.triggerRef);
      return (0, t.jsx)(y.Primitive.button, {
        type: 'button',
        'aria-haspopup': 'dialog',
        'aria-expanded': o.open,
        'aria-controls': o.contentId,
        'data-state': Q(o.open),
        ...a,
        ref: i,
        onClick: (0, c.composeEventHandlers)(e.onClick, o.onOpenToggle)
      });
    }).displayName = N;
    var P = 'DialogPortal',
      [E, I] = O(P, { forceMount: void 0 }),
      D = (e) => {
        let { __scopeDialog: n, forceMount: a, children: o, container: i } = e,
          s = C(P, n);
        return (0, t.jsx)(E, {
          scope: n,
          forceMount: a,
          children: r.Children.map(o, (e) =>
            (0, t.jsx)(b.Presence, {
              present: a || s.open,
              children: (0, t.jsx)(g.Portal, {
                asChild: !0,
                container: i,
                children: e
              })
            })
          )
        });
      };
    D.displayName = P;
    var A = 'DialogOverlay',
      L = r.forwardRef((e, r) => {
        let n = I(A, e.__scopeDialog),
          { forceMount: a = n.forceMount, ...o } = e,
          i = C(A, e.__scopeDialog);
        return i.modal
          ? (0, t.jsx)(b.Presence, {
              present: a || i.open,
              children: (0, t.jsx)(B, { ...o, ref: r })
            })
          : null;
      });
    L.displayName = A;
    var T = (0, S.createSlot)('DialogOverlay.RemoveScroll'),
      B = r.forwardRef((e, r) => {
        let { __scopeDialog: n, ...a } = e,
          o = C(A, n);
        return (0, t.jsx)(w.RemoveScroll, {
          as: T,
          allowPinchZoom: !0,
          shards: [o.contentRef],
          children: (0, t.jsx)(y.Primitive.div, {
            'data-state': Q(o.open),
            ...a,
            ref: r,
            style: { pointerEvents: 'auto', ...a.style }
          })
        });
      }),
      z = 'DialogContent',
      K = r.forwardRef((e, r) => {
        let n = I(z, e.__scopeDialog),
          { forceMount: a = n.forceMount, ...o } = e,
          i = C(z, e.__scopeDialog);
        return (0, t.jsx)(b.Presence, {
          present: a || i.open,
          children: i.modal
            ? (0, t.jsx)(F, { ...o, ref: r })
            : (0, t.jsx)($, { ...o, ref: r })
        });
      });
    K.displayName = z;
    var F = r.forwardRef((e, n) => {
        let a = C(z, e.__scopeDialog),
          o = r.useRef(null),
          i = (0, d.useComposedRefs)(n, a.contentRef, o);
        return (
          r.useEffect(() => {
            let e = o.current;
            if (e) return (0, j.hideOthers)(e);
          }, []),
          (0, t.jsx)(V, {
            ...e,
            ref: i,
            trapFocus: a.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, c.composeEventHandlers)(
              e.onCloseAutoFocus,
              (e) => {
                e.preventDefault(), a.triggerRef.current?.focus();
              }
            ),
            onPointerDownOutside: (0, c.composeEventHandlers)(
              e.onPointerDownOutside,
              (e) => {
                let t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || r) && e.preventDefault();
              }
            ),
            onFocusOutside: (0, c.composeEventHandlers)(e.onFocusOutside, (e) =>
              e.preventDefault()
            )
          })
        );
      }),
      $ = r.forwardRef((e, n) => {
        let a = C(z, e.__scopeDialog),
          o = r.useRef(!1),
          i = r.useRef(!1);
        return (0, t.jsx)(V, {
          ...e,
          ref: n,
          trapFocus: !1,
          disableOutsidePointerEvents: !1,
          onCloseAutoFocus: (t) => {
            e.onCloseAutoFocus?.(t),
              t.defaultPrevented ||
                (o.current || a.triggerRef.current?.focus(),
                t.preventDefault()),
              (o.current = !1),
              (i.current = !1);
          },
          onInteractOutside: (t) => {
            e.onInteractOutside?.(t),
              t.defaultPrevented ||
                ((o.current = !0),
                'pointerdown' === t.detail.originalEvent.type &&
                  (i.current = !0));
            let r = t.target;
            a.triggerRef.current?.contains(r) && t.preventDefault(),
              'focusin' === t.detail.originalEvent.type &&
                i.current &&
                t.preventDefault();
          }
        });
      }),
      V = r.forwardRef((e, n) => {
        let {
            __scopeDialog: a,
            trapFocus: o,
            onOpenAutoFocus: i,
            onCloseAutoFocus: s,
            ...l
          } = e,
          u = C(z, a),
          c = r.useRef(null),
          f = (0, d.useComposedRefs)(n, c);
        return (
          (0, x.useFocusGuards)(),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(v.FocusScope, {
                asChild: !0,
                loop: !0,
                trapped: o,
                onMountAutoFocus: i,
                onUnmountAutoFocus: s,
                children: (0, t.jsx)(m.DismissableLayer, {
                  role: 'dialog',
                  id: u.contentId,
                  'aria-describedby': u.descriptionId,
                  'aria-labelledby': u.titleId,
                  'data-state': Q(u.open),
                  ...l,
                  ref: f,
                  onDismiss: () => u.onOpenChange(!1)
                })
              }),
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(ee, { titleId: u.titleId }),
                  (0, t.jsx)(et, {
                    contentRef: c,
                    descriptionId: u.descriptionId
                  })
                ]
              })
            ]
          })
        );
      }),
      H = 'DialogTitle',
      G = r.forwardRef((e, r) => {
        let { __scopeDialog: n, ...a } = e,
          o = C(H, n);
        return (0, t.jsx)(y.Primitive.h2, { id: o.titleId, ...a, ref: r });
      });
    G.displayName = H;
    var W = 'DialogDescription',
      q = r.forwardRef((e, r) => {
        let { __scopeDialog: n, ...a } = e,
          o = C(W, n);
        return (0, t.jsx)(y.Primitive.p, { id: o.descriptionId, ...a, ref: r });
      });
    q.displayName = W;
    var U = 'DialogClose',
      X = r.forwardRef((e, r) => {
        let { __scopeDialog: n, ...a } = e,
          o = C(U, n);
        return (0, t.jsx)(y.Primitive.button, {
          type: 'button',
          ...a,
          ref: r,
          onClick: (0, c.composeEventHandlers)(e.onClick, () =>
            o.onOpenChange(!1)
          )
        });
      });
    function Q(e) {
      return e ? 'open' : 'closed';
    }
    X.displayName = U;
    var Y = 'DialogTitleWarning',
      [Z, J] = (0, f.createContext)(Y, {
        contentName: z,
        titleName: H,
        docsSlug: 'dialog'
      }),
      ee = ({ titleId: e }) => {
        let t = J(Y),
          n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return (
          r.useEffect(() => {
            e && (document.getElementById(e) || console.error(n));
          }, [n, e]),
          null
        );
      },
      et = ({ contentRef: e, descriptionId: t }) => {
        let n = J('DialogDescriptionWarning'),
          a = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
        return (
          r.useEffect(() => {
            let r = e.current?.getAttribute('aria-describedby');
            t && r && (document.getElementById(t) || console.warn(a));
          }, [a, e, t]),
          null
        );
      },
      er = e.i(60617);
    let en = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)(L, {
        className: (0, i.cn)(
          'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          e
        ),
        ...r,
        ref: n
      })
    );
    en.displayName = L.displayName;
    let ea = (0, a.cva)(
        'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
        {
          variants: {
            side: {
              top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
              bottom:
                'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
              left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
              right:
                'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm'
            }
          },
          defaultVariants: { side: 'right' }
        }
      ),
      eo = r.forwardRef(
        ({ side: e = 'right', className: r, children: n, ...a }, o) =>
          (0, t.jsxs)(D, {
            children: [
              (0, t.jsx)(en, {}),
              (0, t.jsxs)(K, {
                ref: o,
                className: (0, i.cn)(ea({ side: e }), r),
                ...a,
                children: [
                  n,
                  (0, t.jsxs)(X, {
                    className:
                      'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
                    children: [
                      (0, t.jsx)(er.Cross2Icon, { className: 'h-4 w-4' }),
                      (0, t.jsx)('span', {
                        className: 'sr-only',
                        children: 'Close'
                      })
                    ]
                  })
                ]
              })
            ]
          })
      );
    (eo.displayName = K.displayName),
      (r.forwardRef(({ className: e, ...r }, n) =>
        (0, t.jsx)(G, {
          ref: n,
          className: (0, i.cn)('text-lg font-semibold text-foreground', e),
          ...r
        })
      ).displayName = G.displayName),
      (r.forwardRef(({ className: e, ...r }, n) =>
        (0, t.jsx)(q, {
          ref: n,
          className: (0, i.cn)('text-sm text-muted-foreground', e),
          ...r
        })
      ).displayName = q.displayName);
    var ei = e.i(2747),
      es = e.i(89407),
      el = e.i(92321),
      [eu, ec] = (0, f.createContextScope)('Tooltip', [es.createPopperScope]),
      ed = (0, es.createPopperScope)(),
      ef = 'TooltipProvider',
      ep = 'tooltip.open',
      [eh, em] = eu(ef),
      ev = (e) => {
        let {
            __scopeTooltip: n,
            delayDuration: a = 700,
            skipDelayDuration: o = 300,
            disableHoverableContent: i = !1,
            children: s
          } = e,
          l = r.useRef(!0),
          u = r.useRef(!1),
          c = r.useRef(0);
        return (
          r.useEffect(() => {
            let e = c.current;
            return () => window.clearTimeout(e);
          }, []),
          (0, t.jsx)(eh, {
            scope: n,
            isOpenDelayedRef: l,
            delayDuration: a,
            onOpen: r.useCallback(() => {
              window.clearTimeout(c.current), (l.current = !1);
            }, []),
            onClose: r.useCallback(() => {
              window.clearTimeout(c.current),
                (c.current = window.setTimeout(() => (l.current = !0), o));
            }, [o]),
            isPointerInTransitRef: u,
            onPointerInTransitChange: r.useCallback((e) => {
              u.current = e;
            }, []),
            disableHoverableContent: i,
            children: s
          })
        );
      };
    ev.displayName = ef;
    var eg = 'Tooltip',
      [eb, ey] = eu(eg),
      ex = (e) => {
        let {
            __scopeTooltip: n,
            children: a,
            open: o,
            defaultOpen: i,
            onOpenChange: s,
            disableHoverableContent: l,
            delayDuration: u
          } = e,
          c = em(eg, e.__scopeTooltip),
          d = ed(n),
          [f, m] = r.useState(null),
          v = (0, p.useId)(),
          g = r.useRef(0),
          b = l ?? c.disableHoverableContent,
          y = u ?? c.delayDuration,
          x = r.useRef(!1),
          [w, j] = (0, h.useControllableState)({
            prop: o,
            defaultProp: i ?? !1,
            onChange: (e) => {
              e
                ? (c.onOpen(), document.dispatchEvent(new CustomEvent(ep)))
                : c.onClose(),
                s?.(e);
            },
            caller: eg
          }),
          S = r.useMemo(
            () =>
              w ? (x.current ? 'delayed-open' : 'instant-open') : 'closed',
            [w]
          ),
          _ = r.useCallback(() => {
            window.clearTimeout(g.current),
              (g.current = 0),
              (x.current = !1),
              j(!0);
          }, [j]),
          O = r.useCallback(() => {
            window.clearTimeout(g.current), (g.current = 0), j(!1);
          }, [j]),
          M = r.useCallback(() => {
            window.clearTimeout(g.current),
              (g.current = window.setTimeout(() => {
                (x.current = !0), j(!0), (g.current = 0);
              }, y));
          }, [y, j]);
        return (
          r.useEffect(
            () => () => {
              g.current && (window.clearTimeout(g.current), (g.current = 0));
            },
            []
          ),
          (0, t.jsx)(es.Root, {
            ...d,
            children: (0, t.jsx)(eb, {
              scope: n,
              contentId: v,
              open: w,
              stateAttribute: S,
              trigger: f,
              onTriggerChange: m,
              onTriggerEnter: r.useCallback(() => {
                c.isOpenDelayedRef.current ? M() : _();
              }, [c.isOpenDelayedRef, M, _]),
              onTriggerLeave: r.useCallback(() => {
                b ? O() : (window.clearTimeout(g.current), (g.current = 0));
              }, [O, b]),
              onOpen: _,
              onClose: O,
              disableHoverableContent: b,
              children: a
            })
          })
        );
      };
    ex.displayName = eg;
    var ew = 'TooltipTrigger',
      ej = r.forwardRef((e, n) => {
        let { __scopeTooltip: a, ...o } = e,
          i = ey(ew, a),
          s = em(ew, a),
          l = ed(a),
          u = r.useRef(null),
          f = (0, d.useComposedRefs)(n, u, i.onTriggerChange),
          p = r.useRef(!1),
          h = r.useRef(!1),
          m = r.useCallback(() => (p.current = !1), []);
        return (
          r.useEffect(
            () => () => document.removeEventListener('pointerup', m),
            [m]
          ),
          (0, t.jsx)(es.Anchor, {
            asChild: !0,
            ...l,
            children: (0, t.jsx)(y.Primitive.button, {
              'aria-describedby': i.open ? i.contentId : void 0,
              'data-state': i.stateAttribute,
              ...o,
              ref: f,
              onPointerMove: (0, c.composeEventHandlers)(
                e.onPointerMove,
                (e) => {
                  'touch' !== e.pointerType &&
                    (h.current ||
                      s.isPointerInTransitRef.current ||
                      (i.onTriggerEnter(), (h.current = !0)));
                }
              ),
              onPointerLeave: (0, c.composeEventHandlers)(
                e.onPointerLeave,
                () => {
                  i.onTriggerLeave(), (h.current = !1);
                }
              ),
              onPointerDown: (0, c.composeEventHandlers)(
                e.onPointerDown,
                () => {
                  i.open && i.onClose(),
                    (p.current = !0),
                    document.addEventListener('pointerup', m, { once: !0 });
                }
              ),
              onFocus: (0, c.composeEventHandlers)(e.onFocus, () => {
                p.current || i.onOpen();
              }),
              onBlur: (0, c.composeEventHandlers)(e.onBlur, i.onClose),
              onClick: (0, c.composeEventHandlers)(e.onClick, i.onClose)
            })
          })
        );
      });
    ej.displayName = ew;
    var [eS, e_] = eu('TooltipPortal', { forceMount: void 0 }),
      eO = 'TooltipContent',
      eM = r.forwardRef((e, r) => {
        let n = e_(eO, e.__scopeTooltip),
          { forceMount: a = n.forceMount, side: o = 'top', ...i } = e,
          s = ey(eO, e.__scopeTooltip);
        return (0, t.jsx)(b.Presence, {
          present: a || s.open,
          children: s.disableHoverableContent
            ? (0, t.jsx)(eP, { side: o, ...i, ref: r })
            : (0, t.jsx)(ek, { side: o, ...i, ref: r })
        });
      }),
      ek = r.forwardRef((e, n) => {
        let a = ey(eO, e.__scopeTooltip),
          o = em(eO, e.__scopeTooltip),
          i = r.useRef(null),
          s = (0, d.useComposedRefs)(n, i),
          [l, u] = r.useState(null),
          { trigger: c, onClose: f } = a,
          p = i.current,
          { onPointerInTransitChange: h } = o,
          m = r.useCallback(() => {
            u(null), h(!1);
          }, [h]),
          v = r.useCallback(
            (e, t) => {
              let r,
                n = e.currentTarget,
                a = { x: e.clientX, y: e.clientY },
                o = (function (e, t) {
                  let r = Math.abs(t.top - e.y),
                    n = Math.abs(t.bottom - e.y),
                    a = Math.abs(t.right - e.x),
                    o = Math.abs(t.left - e.x);
                  switch (Math.min(r, n, a, o)) {
                    case o:
                      return 'left';
                    case a:
                      return 'right';
                    case r:
                      return 'top';
                    case n:
                      return 'bottom';
                    default:
                      throw Error('unreachable');
                  }
                })(a, n.getBoundingClientRect());
              u(
                ((r = [
                  ...(function (e, t, r = 5) {
                    let n = [];
                    switch (t) {
                      case 'top':
                        n.push(
                          { x: e.x - r, y: e.y + r },
                          { x: e.x + r, y: e.y + r }
                        );
                        break;
                      case 'bottom':
                        n.push(
                          { x: e.x - r, y: e.y - r },
                          { x: e.x + r, y: e.y - r }
                        );
                        break;
                      case 'left':
                        n.push(
                          { x: e.x + r, y: e.y - r },
                          { x: e.x + r, y: e.y + r }
                        );
                        break;
                      case 'right':
                        n.push(
                          { x: e.x - r, y: e.y - r },
                          { x: e.x - r, y: e.y + r }
                        );
                    }
                    return n;
                  })(a, o),
                  ...(function (e) {
                    let { top: t, right: r, bottom: n, left: a } = e;
                    return [
                      { x: a, y: t },
                      { x: r, y: t },
                      { x: r, y: n },
                      { x: a, y: n }
                    ];
                  })(t.getBoundingClientRect())
                ].slice()).sort((e, t) =>
                  e.x < t.x
                    ? -1
                    : e.x > t.x
                      ? 1
                      : e.y < t.y
                        ? -1
                        : 1 * !!(e.y > t.y)
                ),
                (function (e) {
                  if (e.length <= 1) return e.slice();
                  let t = [];
                  for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    for (; t.length >= 2; ) {
                      let e = t[t.length - 1],
                        r = t[t.length - 2];
                      if (
                        (e.x - r.x) * (n.y - r.y) >=
                        (e.y - r.y) * (n.x - r.x)
                      )
                        t.pop();
                      else break;
                    }
                    t.push(n);
                  }
                  t.pop();
                  let r = [];
                  for (let t = e.length - 1; t >= 0; t--) {
                    let n = e[t];
                    for (; r.length >= 2; ) {
                      let e = r[r.length - 1],
                        t = r[r.length - 2];
                      if (
                        (e.x - t.x) * (n.y - t.y) >=
                        (e.y - t.y) * (n.x - t.x)
                      )
                        r.pop();
                      else break;
                    }
                    r.push(n);
                  }
                  return (r.pop(),
                  1 === t.length &&
                    1 === r.length &&
                    t[0].x === r[0].x &&
                    t[0].y === r[0].y)
                    ? t
                    : t.concat(r);
                })(r))
              ),
                h(!0);
            },
            [h]
          );
        return (
          r.useEffect(() => () => m(), [m]),
          r.useEffect(() => {
            if (c && p) {
              let e = (e) => v(e, p),
                t = (e) => v(e, c);
              return (
                c.addEventListener('pointerleave', e),
                p.addEventListener('pointerleave', t),
                () => {
                  c.removeEventListener('pointerleave', e),
                    p.removeEventListener('pointerleave', t);
                }
              );
            }
          }, [c, p, v, m]),
          r.useEffect(() => {
            if (l) {
              let e = (e) => {
                let t = e.target,
                  r = { x: e.clientX, y: e.clientY },
                  n = c?.contains(t) || p?.contains(t),
                  a = !(function (e, t) {
                    let { x: r, y: n } = e,
                      a = !1;
                    for (let e = 0, o = t.length - 1; e < t.length; o = e++) {
                      let i = t[e],
                        s = t[o],
                        l = i.x,
                        u = i.y,
                        c = s.x,
                        d = s.y;
                      u > n != d > n &&
                        r < ((c - l) * (n - u)) / (d - u) + l &&
                        (a = !a);
                    }
                    return a;
                  })(r, l);
                n ? m() : a && (m(), f());
              };
              return (
                document.addEventListener('pointermove', e),
                () => document.removeEventListener('pointermove', e)
              );
            }
          }, [c, p, l, f, m]),
          (0, t.jsx)(eP, { ...e, ref: s })
        );
      }),
      [eC, eR] = eu(eg, { isInside: !1 }),
      eN = (0, S.createSlottable)('TooltipContent'),
      eP = r.forwardRef((e, n) => {
        let {
            __scopeTooltip: a,
            children: o,
            'aria-label': i,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            ...u
          } = e,
          c = ey(eO, a),
          d = ed(a),
          { onClose: f } = c;
        return (
          r.useEffect(
            () => (
              document.addEventListener(ep, f),
              () => document.removeEventListener(ep, f)
            ),
            [f]
          ),
          r.useEffect(() => {
            if (c.trigger) {
              let e = (e) => {
                let t = e.target;
                t?.contains(c.trigger) && f();
              };
              return (
                window.addEventListener('scroll', e, { capture: !0 }),
                () => window.removeEventListener('scroll', e, { capture: !0 })
              );
            }
          }, [c.trigger, f]),
          (0, t.jsx)(m.DismissableLayer, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            onFocusOutside: (e) => e.preventDefault(),
            onDismiss: f,
            children: (0, t.jsxs)(es.Content, {
              'data-state': c.stateAttribute,
              ...d,
              ...u,
              ref: n,
              style: {
                ...u.style,
                '--radix-tooltip-content-transform-origin':
                  'var(--radix-popper-transform-origin)',
                '--radix-tooltip-content-available-width':
                  'var(--radix-popper-available-width)',
                '--radix-tooltip-content-available-height':
                  'var(--radix-popper-available-height)',
                '--radix-tooltip-trigger-width':
                  'var(--radix-popper-anchor-width)',
                '--radix-tooltip-trigger-height':
                  'var(--radix-popper-anchor-height)'
              },
              children: [
                (0, t.jsx)(eN, { children: o }),
                (0, t.jsx)(eC, {
                  scope: a,
                  isInside: !0,
                  children: (0, t.jsx)(el.Root, {
                    id: c.contentId,
                    role: 'tooltip',
                    children: i || o
                  })
                })
              ]
            })
          })
        );
      });
    eM.displayName = eO;
    var eE = 'TooltipArrow';
    r.forwardRef((e, r) => {
      let { __scopeTooltip: n, ...a } = e,
        o = ed(n);
      return eR(eE, n).isInside
        ? null
        : (0, t.jsx)(es.Arrow, { ...o, ...a, ref: r });
    }).displayName = eE;
    let eI = r.forwardRef(({ className: e, sideOffset: r = 4, ...n }, a) =>
      (0, t.jsx)(eM, {
        ref: a,
        sideOffset: r,
        className: (0, i.cn)(
          'z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          e
        ),
        ...n
      })
    );
    eI.displayName = eM.displayName;
    let eD = r.createContext(null);
    function eA() {
      let e = r.useContext(eD);
      if (!e) throw Error('useSidebar must be used within a Sidebar.');
      return e;
    }
    let eL = r.forwardRef(
      (
        {
          defaultOpen: e = !0,
          open: n,
          onOpenChange: a,
          className: o,
          style: s,
          children: l,
          ...u
        },
        c
      ) => {
        let d = r.useSyncExternalStore(
            (e) => {
              let t = window.matchMedia('(max-width: 767px)');
              return (
                t.addEventListener('change', e),
                () => t.removeEventListener('change', e)
              );
            },
            () => window.innerWidth < 768,
            () => !1
          ),
          [f, p] = r.useState(!1),
          [h, m] = r.useState(e),
          v = n ?? h,
          g = r.useCallback(
            (e) => {
              let t = 'function' == typeof e ? e(v) : e;
              a ? a(t) : m(t),
                (document.cookie = `sidebar:state=${t}; path=/; max-age=604800`);
            },
            [a, v]
          ),
          b = r.useCallback(() => (d ? p((e) => !e) : g((e) => !e)), [d, g, p]);
        r.useEffect(() => {
          let e = (e) => {
            'b' === e.key &&
              (e.metaKey || e.ctrlKey) &&
              (e.preventDefault(), b());
          };
          return (
            window.addEventListener('keydown', e),
            () => window.removeEventListener('keydown', e)
          );
        }, [b]);
        let y = v ? 'expanded' : 'collapsed',
          x = r.useMemo(
            () => ({
              state: y,
              open: v,
              setOpen: g,
              isMobile: d,
              openMobile: f,
              setOpenMobile: p,
              toggleSidebar: b
            }),
            [y, v, g, d, f, p, b]
          );
        return (0, t.jsx)(eD.Provider, {
          value: x,
          children: (0, t.jsx)(ev, {
            delayDuration: 0,
            children: (0, t.jsx)('div', {
              style: {
                '--sidebar-width': '16rem',
                '--sidebar-width-icon': '3rem',
                ...s
              },
              className: (0, i.cn)(
                'group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar',
                o
              ),
              ref: c,
              ...u,
              children: l
            })
          })
        });
      }
    );
    eL.displayName = 'SidebarProvider';
    let eT = r.forwardRef(
      (
        {
          side: e = 'left',
          variant: r = 'sidebar',
          collapsible: n = 'offcanvas',
          className: a,
          children: o,
          ...s
        },
        l
      ) => {
        let { isMobile: u, state: c, openMobile: d, setOpenMobile: f } = eA();
        return 'none' === n
          ? (0, t.jsx)('div', {
              className: (0, i.cn)(
                'flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground',
                a
              ),
              ref: l,
              ...s,
              children: o
            })
          : u
            ? (0, t.jsx)(R, {
                open: d,
                onOpenChange: f,
                ...s,
                children: (0, t.jsx)(eo, {
                  'data-sidebar': 'sidebar',
                  'data-mobile': 'true',
                  className:
                    'w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden',
                  style: { '--sidebar-width': '18rem' },
                  side: e,
                  children: (0, t.jsx)('div', {
                    className: 'flex h-full w-full flex-col',
                    children: o
                  })
                })
              })
            : (0, t.jsxs)('div', {
                ref: l,
                className: 'group peer hidden md:block',
                'data-state': c,
                'data-collapsible': 'collapsed' === c ? n : '',
                'data-variant': r,
                'data-side': e,
                children: [
                  (0, t.jsx)('div', {
                    className: (0, i.cn)(
                      'relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear',
                      'group-data-[collapsible=offcanvas]:w-0',
                      'group-data-[side=right]:rotate-180',
                      'floating' === r || 'inset' === r
                        ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
                        : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]'
                    )
                  }),
                  (0, t.jsx)('div', {
                    className: (0, i.cn)(
                      'fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex',
                      'left' === e
                        ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
                        : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
                      'floating' === r || 'inset' === r
                        ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
                        : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
                      a
                    ),
                    ...s,
                    children: (0, t.jsx)('div', {
                      'data-sidebar': 'sidebar',
                      className:
                        'flex h-full w-full flex-col border-r border-sidebar-border/80 bg-sidebar/95 backdrop-blur-xl group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow',
                      children: o
                    })
                  })
                ]
              });
      }
    );
    eT.displayName = 'Sidebar';
    let eB = r.forwardRef(({ className: e, onClick: r, ...n }, a) => {
      let { toggleSidebar: l } = eA();
      return (0, t.jsxs)(s.Button, {
        ref: a,
        'data-sidebar': 'trigger',
        variant: 'ghost',
        size: 'icon',
        className: (0, i.cn)('h-7 w-7', e),
        onClick: (e) => {
          r?.(e), l();
        },
        ...n,
        children: [
          (0, t.jsx)(o, {}),
          (0, t.jsx)('span', {
            className: 'sr-only',
            children: 'Toggle Sidebar'
          })
        ]
      });
    });
    eB.displayName = 'SidebarTrigger';
    let ez = r.forwardRef(({ className: e, ...r }, n) => {
      let { toggleSidebar: a } = eA();
      return (0, t.jsx)('button', {
        ref: n,
        'data-sidebar': 'rail',
        'aria-label': 'Toggle Sidebar',
        tabIndex: -1,
        onClick: a,
        title: 'Toggle Sidebar',
        className: (0, i.cn)(
          'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex',
          '[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize',
          '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
          'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar',
          '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
          '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
          e
        ),
        ...r
      });
    });
    ez.displayName = 'SidebarRail';
    let eK = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)('main', {
        ref: n,
        className: (0, i.cn)(
          'aipg-grid-subtle relative flex min-h-svh flex-1 flex-col bg-background',
          'peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow',
          e
        ),
        ...r
      })
    );
    eK.displayName = 'SidebarInset';
    let eF = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)(l.Input, {
        ref: n,
        'data-sidebar': 'input',
        className: (0, i.cn)(
          'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
          e
        ),
        ...r
      })
    );
    eF.displayName = 'SidebarInput';
    let e$ = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)('div', {
        ref: n,
        'data-sidebar': 'header',
        className: (0, i.cn)('flex flex-col gap-2 p-2', e),
        ...r
      })
    );
    e$.displayName = 'SidebarHeader';
    let eV = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)('div', {
        ref: n,
        'data-sidebar': 'footer',
        className: (0, i.cn)('flex flex-col gap-2 p-2', e),
        ...r
      })
    );
    eV.displayName = 'SidebarFooter';
    let eH = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)(u.Separator, {
        ref: n,
        'data-sidebar': 'separator',
        className: (0, i.cn)('mx-2 w-auto bg-sidebar-border', e),
        ...r
      })
    );
    eH.displayName = 'SidebarSeparator';
    let eG = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)('div', {
        ref: n,
        'data-sidebar': 'content',
        className: (0, i.cn)(
          'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
          e
        ),
        ...r
      })
    );
    eG.displayName = 'SidebarContent';
    let eW = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)('div', {
        ref: n,
        'data-sidebar': 'group',
        className: (0, i.cn)('relative flex w-full min-w-0 flex-col p-2', e),
        ...r
      })
    );
    eW.displayName = 'SidebarGroup';
    let eq = r.forwardRef(({ className: e, asChild: r = !1, ...a }, o) => {
      let s = r ? n.Slot : 'div';
      return (0, t.jsx)(s, {
        ref: o,
        'data-sidebar': 'group-label',
        className: (0, i.cn)(
          'flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
          'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
          e
        ),
        ...a
      });
    });
    eq.displayName = 'SidebarGroupLabel';
    let eU = r.forwardRef(({ className: e, asChild: r = !1, ...a }, o) => {
      let s = r ? n.Slot : 'button';
      return (0, t.jsx)(s, {
        ref: o,
        'data-sidebar': 'group-action',
        className: (0, i.cn)(
          'absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
          'after:absolute after:-inset-2 after:md:hidden',
          'group-data-[collapsible=icon]:hidden',
          e
        ),
        ...a
      });
    });
    eU.displayName = 'SidebarGroupAction';
    let eX = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)('div', {
        ref: n,
        'data-sidebar': 'group-content',
        className: (0, i.cn)('w-full text-sm', e),
        ...r
      })
    );
    eX.displayName = 'SidebarGroupContent';
    let eQ = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)('ul', {
        ref: n,
        'data-sidebar': 'menu',
        className: (0, i.cn)('flex w-full min-w-0 flex-col gap-1', e),
        ...r
      })
    );
    eQ.displayName = 'SidebarMenu';
    let eY = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)('li', {
        ref: n,
        'data-sidebar': 'menu-item',
        className: (0, i.cn)('group/menu-item relative', e),
        ...r
      })
    );
    eY.displayName = 'SidebarMenuItem';
    let eZ = (0, a.cva)(
        'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[active=true]:shadow-[inset_3px_0_0_hsl(var(--sidebar-primary))] data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
        {
          variants: {
            variant: {
              default:
                'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
              outline:
                'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]'
            },
            size: {
              default: 'h-8 text-sm',
              sm: 'h-7 text-xs',
              lg: 'h-12 text-sm group-data-[collapsible=icon]:!p-0'
            }
          },
          defaultVariants: { variant: 'default', size: 'default' }
        }
      ),
      eJ = r.forwardRef(
        (
          {
            asChild: e = !1,
            isActive: r = !1,
            variant: a = 'default',
            size: o = 'default',
            tooltip: s,
            className: l,
            ...u
          },
          c
        ) => {
          let d = e ? n.Slot : 'button',
            { isMobile: f, state: p } = eA(),
            h = (0, t.jsx)(d, {
              ref: c,
              'data-sidebar': 'menu-button',
              'data-size': o,
              'data-active': r,
              className: (0, i.cn)(eZ({ variant: a, size: o }), l),
              ...u
            });
          return s
            ? ('string' == typeof s && (s = { children: s }),
              (0, t.jsxs)(ex, {
                children: [
                  (0, t.jsx)(ej, { asChild: !0, children: h }),
                  (0, t.jsx)(eI, {
                    side: 'right',
                    align: 'center',
                    hidden: 'collapsed' !== p || f,
                    ...s
                  })
                ]
              }))
            : h;
        }
      );
    eJ.displayName = 'SidebarMenuButton';
    let e0 = r.forwardRef(
      ({ className: e, asChild: r = !1, showOnHover: a = !1, ...o }, s) => {
        let l = r ? n.Slot : 'button';
        return (0, t.jsx)(l, {
          ref: s,
          'data-sidebar': 'menu-action',
          className: (0, i.cn)(
            'absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0',
            'after:absolute after:-inset-2 after:md:hidden',
            'peer-data-[size=sm]/menu-button:top-1',
            'peer-data-[size=default]/menu-button:top-1.5',
            'peer-data-[size=lg]/menu-button:top-2.5',
            'group-data-[collapsible=icon]:hidden',
            a &&
              'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0',
            e
          ),
          ...o
        });
      }
    );
    e0.displayName = 'SidebarMenuAction';
    let e1 = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)('div', {
        ref: n,
        'data-sidebar': 'menu-badge',
        className: (0, i.cn)(
          'pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground',
          'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
          'peer-data-[size=sm]/menu-button:top-1',
          'peer-data-[size=default]/menu-button:top-1.5',
          'peer-data-[size=lg]/menu-button:top-2.5',
          'group-data-[collapsible=icon]:hidden',
          e
        ),
        ...r
      })
    );
    e1.displayName = 'SidebarMenuBadge';
    let e2 = r.forwardRef(({ className: e, showIcon: r = !1, ...n }, a) =>
      (0, t.jsxs)('div', {
        ref: a,
        'data-sidebar': 'menu-skeleton',
        className: (0, i.cn)('flex h-8 items-center gap-2 rounded-md px-2', e),
        ...n,
        children: [
          r &&
            (0, t.jsx)(ei.Skeleton, {
              className: 'size-4 rounded-md',
              'data-sidebar': 'menu-skeleton-icon'
            }),
          (0, t.jsx)(ei.Skeleton, {
            className: 'h-4 max-w-[--skeleton-width] flex-1',
            'data-sidebar': 'menu-skeleton-text',
            style: { '--skeleton-width': '72%' }
          })
        ]
      })
    );
    e2.displayName = 'SidebarMenuSkeleton';
    let e5 = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)('ul', {
        ref: n,
        'data-sidebar': 'menu-sub',
        className: (0, i.cn)(
          'mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5',
          'group-data-[collapsible=icon]:hidden',
          e
        ),
        ...r
      })
    );
    e5.displayName = 'SidebarMenuSub';
    let e4 = r.forwardRef(({ ...e }, r) => (0, t.jsx)('li', { ref: r, ...e }));
    e4.displayName = 'SidebarMenuSubItem';
    let e3 = r.forwardRef(
      (
        { asChild: e = !1, size: r = 'md', isActive: a, className: o, ...s },
        l
      ) => {
        let u = e ? n.Slot : 'a';
        return (0, t.jsx)(u, {
          ref: l,
          'data-sidebar': 'menu-sub-button',
          'data-size': r,
          'data-active': a,
          className: (0, i.cn)(
            'flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
            'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
            'sm' === r && 'text-xs',
            'md' === r && 'text-sm',
            'group-data-[collapsible=icon]:hidden',
            o
          ),
          ...s
        });
      }
    );
    (e3.displayName = 'SidebarMenuSubButton'),
      e.s(
        [
          'Sidebar',
          0,
          eT,
          'SidebarContent',
          0,
          eG,
          'SidebarFooter',
          0,
          eV,
          'SidebarGroup',
          0,
          eW,
          'SidebarGroupAction',
          0,
          eU,
          'SidebarGroupContent',
          0,
          eX,
          'SidebarGroupLabel',
          0,
          eq,
          'SidebarHeader',
          0,
          e$,
          'SidebarInput',
          0,
          eF,
          'SidebarInset',
          0,
          eK,
          'SidebarMenu',
          0,
          eQ,
          'SidebarMenuAction',
          0,
          e0,
          'SidebarMenuBadge',
          0,
          e1,
          'SidebarMenuButton',
          0,
          eJ,
          'SidebarMenuItem',
          0,
          eY,
          'SidebarMenuSkeleton',
          0,
          e2,
          'SidebarMenuSub',
          0,
          e5,
          'SidebarMenuSubButton',
          0,
          e3,
          'SidebarMenuSubItem',
          0,
          e4,
          'SidebarProvider',
          0,
          eL,
          'SidebarRail',
          0,
          ez,
          'SidebarSeparator',
          0,
          eH,
          'SidebarTrigger',
          0,
          eB,
          'useSidebar',
          0,
          eA
        ],
        30909
      );
  },
  89945,
  (e, t, r) => {
    'use strict';
    Object.defineProperty(r, '__esModule', { value: !0 });
    var n = {
      default: function () {
        return c;
      },
      getImageProps: function () {
        return u;
      }
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let o = e.r(81258),
      i = e.r(63077),
      s = e.r(68857),
      l = o._(e.r(79293));
    function u(e) {
      let { props: t } = (0, i.getImgProps)(e, {
        defaultLoader: l.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: '/_next/image',
          loader: 'default',
          dangerouslyAllowSVG: !1,
          unoptimized: !0
        }
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let c = s.Image;
  },
  9479,
  (e, t, r) => {
    t.exports = e.r(89945);
  },
  2294,
  (e) => {
    'use strict';
    var t = e.i(29971),
      r = e.i(99676),
      n = e.i(30396);
    let a = n.Root,
      o = n.CollapsibleTrigger,
      i = n.CollapsibleContent;
    var s = e.i(55146),
      l = e.i(30909),
      u = e.i(33296),
      c = e.i(15049);
    let d = (0, e.i(74420).default)('ChevronsUpDown', [
      ['path', { d: 'm7 15 5 5 5-5', key: '1hf1tw' }],
      ['path', { d: 'm7 9 5-5 5 5', key: 'sgt6xg' }]
    ]);
    var f = e.i(35974),
      p = e.i(9479),
      h = e.i(17913),
      m = e.i(7561),
      v = e.i(8164);
    e.s(
      [
        'default',
        0,
        function () {
          let { data: e } = (0, f.useSession)(),
            n = (0, m.usePathname)(),
            { state: g } = (0, l.useSidebar)();
          return (0, t.jsxs)(l.Sidebar, {
            collapsible: 'icon',
            className: 'border-sidebar-border/80',
            children: [
              (0, t.jsx)(l.SidebarHeader, {
                className: 'border-b border-sidebar-border/70 p-3',
                children: (0, t.jsxs)('div', {
                  className: 'flex min-h-11 items-center gap-3',
                  children: [
                    (0, t.jsx)('div', {
                      className:
                        'flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]',
                      children: (0, t.jsx)(p.default, {
                        src: '/aipg-worker-logo.png',
                        alt: 'AI Power Grid',
                        width: 32,
                        height: 32,
                        className: 'size-8 object-contain'
                      })
                    }),
                    'expanded' === g &&
                      (0, t.jsxs)('div', {
                        className: 'min-w-0 leading-tight',
                        children: [
                          (0, t.jsx)('div', {
                            className:
                              'truncate text-sm font-semibold text-sidebar-foreground',
                            children: 'AIPG Console'
                          }),
                          (0, t.jsx)('div', {
                            className:
                              'truncate text-xs text-sidebar-foreground/55',
                            children: 'Grid operations'
                          })
                        ]
                      })
                  ]
                })
              }),
              (0, t.jsx)(l.SidebarContent, {
                className: 'overflow-x-hidden',
                children: (0, t.jsxs)(l.SidebarGroup, {
                  children: [
                    (0, t.jsx)(l.SidebarGroupLabel, { children: 'Overview' }),
                    (0, t.jsx)(l.SidebarMenu, {
                      children: u.navItems.map((e) => {
                        let r = e.icon ? v.Icons[e.icon] : v.Icons.logo;
                        return e?.items && e?.items?.length > 0
                          ? (0, t.jsx)(
                              a,
                              {
                                asChild: !0,
                                defaultOpen: e.isActive,
                                className: 'group/collapsible',
                                children: (0, t.jsxs)(l.SidebarMenuItem, {
                                  children: [
                                    (0, t.jsx)(o, {
                                      asChild: !0,
                                      children: (0, t.jsxs)(
                                        l.SidebarMenuButton,
                                        {
                                          tooltip: e.title,
                                          isActive: n === e.url,
                                          children: [
                                            e.icon && (0, t.jsx)(r, {}),
                                            (0, t.jsx)('span', {
                                              children: e.title
                                            }),
                                            (0, t.jsx)(c.ChevronRight, {
                                              className:
                                                'ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90'
                                            })
                                          ]
                                        }
                                      )
                                    }),
                                    (0, t.jsx)(i, {
                                      children: (0, t.jsx)(l.SidebarMenuSub, {
                                        children: e.items?.map((e) =>
                                          (0, t.jsx)(
                                            l.SidebarMenuSubItem,
                                            {
                                              children: (0, t.jsx)(
                                                l.SidebarMenuSubButton,
                                                {
                                                  asChild: !0,
                                                  isActive: n === e.url,
                                                  children: (0, t.jsx)(
                                                    h.default,
                                                    {
                                                      href: e.url,
                                                      children: (0, t.jsx)(
                                                        'span',
                                                        { children: e.title }
                                                      )
                                                    }
                                                  )
                                                }
                                              )
                                            },
                                            e.title
                                          )
                                        )
                                      })
                                    })
                                  ]
                                })
                              },
                              e.title
                            )
                          : (0, t.jsx)(
                              l.SidebarMenuItem,
                              {
                                children: (0, t.jsx)(l.SidebarMenuButton, {
                                  asChild: !0,
                                  tooltip: e.title,
                                  isActive: n === e.url,
                                  children: (0, t.jsxs)(h.default, {
                                    href: e.url,
                                    children: [
                                      (0, t.jsx)(r, {}),
                                      (0, t.jsx)('span', { children: e.title })
                                    ]
                                  })
                                })
                              },
                              e.title
                            );
                      })
                    })
                  ]
                })
              }),
              (0, t.jsx)(l.SidebarFooter, {
                children: (0, t.jsx)(l.SidebarMenu, {
                  children: (0, t.jsx)(l.SidebarMenuItem, {
                    children: (0, t.jsxs)(s.DropdownMenu, {
                      children: [
                        (0, t.jsx)(s.DropdownMenuTrigger, {
                          asChild: !0,
                          children: (0, t.jsxs)(l.SidebarMenuButton, {
                            size: 'lg',
                            className:
                              'data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground',
                            children: [
                              (0, t.jsxs)(r.Avatar, {
                                className: 'h-8 w-8 rounded-lg',
                                children: [
                                  (0, t.jsx)(r.AvatarImage, {
                                    src: e?.user?.image || '',
                                    alt: e?.user?.name || ''
                                  }),
                                  (0, t.jsx)(r.AvatarFallback, {
                                    className: 'rounded-lg',
                                    children:
                                      e?.user?.name
                                        ?.slice(0, 2)
                                        ?.toUpperCase() || 'CN'
                                  })
                                ]
                              }),
                              (0, t.jsxs)('div', {
                                className:
                                  'grid flex-1 text-left text-sm leading-tight',
                                children: [
                                  (0, t.jsx)('span', {
                                    className: 'truncate font-semibold',
                                    children: e?.user?.name || ''
                                  }),
                                  (0, t.jsx)('span', {
                                    className: 'truncate text-xs',
                                    children: e?.user?.email || ''
                                  })
                                ]
                              }),
                              (0, t.jsx)(d, { className: 'ml-auto size-4' })
                            ]
                          })
                        }),
                        (0, t.jsxs)(s.DropdownMenuContent, {
                          className:
                            'w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg',
                          side: 'bottom',
                          align: 'end',
                          sideOffset: 4,
                          children: [
                            (0, t.jsx)(s.DropdownMenuLabel, {
                              className: 'p-0 font-normal',
                              children: (0, t.jsxs)('div', {
                                className:
                                  'flex items-center gap-2 px-1 py-1.5 text-left text-sm',
                                children: [
                                  (0, t.jsxs)(r.Avatar, {
                                    className: 'h-8 w-8 rounded-lg',
                                    children: [
                                      (0, t.jsx)(r.AvatarImage, {
                                        src: e?.user?.image || '',
                                        alt: e?.user?.name || ''
                                      }),
                                      (0, t.jsx)(r.AvatarFallback, {
                                        className: 'rounded-lg',
                                        children:
                                          e?.user?.name
                                            ?.slice(0, 2)
                                            ?.toUpperCase() || 'CN'
                                      })
                                    ]
                                  }),
                                  (0, t.jsxs)('div', {
                                    className:
                                      'grid flex-1 text-left text-sm leading-tight',
                                    children: [
                                      (0, t.jsx)('span', {
                                        className: 'truncate font-semibold',
                                        children: e?.user?.name || ''
                                      }),
                                      (0, t.jsx)('span', {
                                        className: 'truncate text-xs',
                                        children: e?.user?.email || ''
                                      })
                                    ]
                                  })
                                ]
                              })
                            }),
                            (0, t.jsx)(s.DropdownMenuSeparator, {}),
                            (0, t.jsx)(s.DropdownMenuGroup, {
                              children: (0, t.jsx)(s.DropdownMenuItem, {
                                children: 'Account'
                              })
                            }),
                            (0, t.jsx)(s.DropdownMenuSeparator, {}),
                            (0, t.jsx)(s.DropdownMenuItem, {
                              onClick: () => (0, f.signOut)(),
                              children: 'Log out'
                            })
                          ]
                        })
                      ]
                    })
                  })
                })
              }),
              (0, t.jsx)(l.SidebarRail, {})
            ]
          });
        }
      ],
      2294
    );
  },
  79718,
  (e) => {
    'use strict';
    var t = e.i(29971),
      r = e.i(22034),
      n = e.i(60617),
      a = e.i(23824),
      o = e.i(75157);
    let i = r.forwardRef(({ ...e }, r) =>
      (0, t.jsx)('nav', { ref: r, 'aria-label': 'breadcrumb', ...e })
    );
    i.displayName = 'Breadcrumb';
    let s = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)('ol', {
        ref: n,
        className: (0, o.cn)(
          'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
          e
        ),
        ...r
      })
    );
    s.displayName = 'BreadcrumbList';
    let l = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)('li', {
        ref: n,
        className: (0, o.cn)('inline-flex items-center gap-1.5', e),
        ...r
      })
    );
    l.displayName = 'BreadcrumbItem';
    let u = r.forwardRef(({ asChild: e, className: r, ...n }, i) => {
      let s = e ? a.Slot : 'a';
      return (0, t.jsx)(s, {
        ref: i,
        className: (0, o.cn)('transition-colors hover:text-foreground', r),
        ...n
      });
    });
    u.displayName = 'BreadcrumbLink';
    let c = r.forwardRef(({ className: e, ...r }, n) =>
      (0, t.jsx)('span', {
        ref: n,
        role: 'link',
        'aria-disabled': 'true',
        'aria-current': 'page',
        className: (0, o.cn)('font-normal text-foreground', e),
        ...r
      })
    );
    c.displayName = 'BreadcrumbPage';
    let d = ({ children: e, className: r, ...a }) =>
      (0, t.jsx)('li', {
        role: 'presentation',
        'aria-hidden': 'true',
        className: (0, o.cn)('[&>svg]:size-3.5', r),
        ...a,
        children: e ?? (0, t.jsx)(n.ChevronRightIcon, {})
      });
    d.displayName = 'BreadcrumbSeparator';
    var f = e.i(7561);
    let p = {
        '/dashboard': [{ title: 'Console', link: '/dashboard' }],
        '/dashboard/overview': [
          { title: 'Console', link: '/dashboard' },
          { title: 'Overview', link: '/dashboard/overview' }
        ],
        '/dashboard/workers': [
          { title: 'Console', link: '/dashboard' },
          { title: 'Workers', link: '/dashboard/workers' }
        ],
        '/dashboard/rewards': [
          { title: 'Console', link: '/dashboard' },
          { title: 'Rewards', link: '/dashboard/rewards' }
        ],
        '/dashboard/api-usage': [
          { title: 'Console', link: '/dashboard' },
          { title: 'Playground', link: '/dashboard/api-usage' }
        ],
        '/dashboard/api-key': [
          { title: 'Console', link: '/dashboard' },
          { title: 'API Keys', link: '/dashboard/api-key' }
        ],
        '/dashboard/settings': [
          { title: 'Console', link: '/dashboard' },
          { title: 'Settings', link: '/dashboard/settings' }
        ],
        '/dashboard/profile': [
          { title: 'Console', link: '/dashboard' },
          { title: 'Profile', link: '/dashboard/profile' }
        ]
      },
      h = (0, e.i(74420).default)('Slash', [
        ['path', { d: 'M22 2 2 22', key: 'y4kqgn' }]
      ]);
    e.s(
      [
        'Breadcrumbs',
        0,
        function () {
          let e,
            n =
              ((e = (0, f.usePathname)()),
              (0, r.useMemo)(() => {
                if (p[e]) return p[e];
                let t = e.split('/').filter(Boolean);
                return t.map((e, r) => {
                  let n = `/${t.slice(0, r + 1).join('/')}`;
                  return {
                    title: e.charAt(0).toUpperCase() + e.slice(1),
                    link: n
                  };
                });
              }, [e]));
          return 0 === n.length
            ? null
            : (0, t.jsx)(i, {
                children: (0, t.jsx)(s, {
                  children: n.map((e, a) =>
                    (0, t.jsxs)(
                      r.Fragment,
                      {
                        children: [
                          a !== n.length - 1 &&
                            (0, t.jsx)(l, {
                              className: 'hidden md:block',
                              children: (0, t.jsx)(u, {
                                href: e.link,
                                children: e.title
                              })
                            }),
                          a < n.length - 1 &&
                            (0, t.jsx)(d, {
                              className: 'hidden md:block',
                              children: (0, t.jsx)(h, {})
                            }),
                          a === n.length - 1 &&
                            (0, t.jsx)(c, { children: e.title })
                        ]
                      },
                      e.title
                    )
                  )
                })
              });
        }
      ],
      79718
    );
  },
  31888,
  (e) => {
    'use strict';
    var t = e.i(29971),
      r = e.i(50638),
      n = e.i(47812),
      a = e.i(19455);
    e.s([
      'default',
      0,
      function () {
        let { query: e } = (0, r.useKBar)();
        return (0, t.jsx)('div', {
          className: 'w-full space-y-2',
          children: (0, t.jsxs)(a.Button, {
            variant: 'outline',
            className:
              'relative h-9 w-full justify-start bg-background/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64',
            onClick: e.toggle,
            children: [
              (0, t.jsx)(n.Search, { className: 'mr-2 h-4 w-4' }),
              'Search...',
              (0, t.jsxs)('kbd', {
                className:
                  'pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex',
                children: [
                  (0, t.jsx)('span', { className: 'text-xs', children: '⌘' }),
                  'K'
                ]
              })
            ]
          })
        });
      }
    ]);
  },
  97911,
  (e) => {
    'use strict';
    var t = e.i(29971),
      r = e.i(99676),
      n = e.i(19455),
      a = e.i(55146),
      o = e.i(35974);
    e.s([
      'UserNav',
      0,
      function () {
        let { data: e } = (0, o.useSession)();
        if (e)
          return (0, t.jsxs)(a.DropdownMenu, {
            children: [
              (0, t.jsx)(a.DropdownMenuTrigger, {
                asChild: !0,
                children: (0, t.jsx)(n.Button, {
                  variant: 'ghost',
                  className: 'relative h-8 w-8 rounded-full',
                  children: (0, t.jsxs)(r.Avatar, {
                    className: 'h-8 w-8',
                    children: [
                      (0, t.jsx)(r.AvatarImage, {
                        src: e.user?.image ?? '',
                        alt: e.user?.name ?? ''
                      }),
                      (0, t.jsx)(r.AvatarFallback, {
                        children: e.user?.name?.[0]
                      })
                    ]
                  })
                })
              }),
              (0, t.jsxs)(a.DropdownMenuContent, {
                className: 'w-56',
                align: 'end',
                forceMount: !0,
                children: [
                  (0, t.jsx)(a.DropdownMenuLabel, {
                    className: 'font-normal',
                    children: (0, t.jsxs)('div', {
                      className: 'flex flex-col space-y-1',
                      children: [
                        (0, t.jsx)('p', {
                          className: 'text-sm font-medium leading-none',
                          children: e.user?.name
                        }),
                        (0, t.jsx)('p', {
                          className:
                            'text-xs leading-none text-muted-foreground',
                          children: e.user?.email
                        })
                      ]
                    })
                  }),
                  (0, t.jsxs)(a.DropdownMenuItem, {
                    onClick: () => (0, o.signOut)(),
                    children: [
                      'Log out',
                      (0, t.jsx)(a.DropdownMenuShortcut, { children: '⇧⌘Q' })
                    ]
                  })
                ]
              })
            ]
          });
      }
    ]);
  },
  65796,
  (e) => {
    'use strict';
    var t = e.i(29971),
      r = e.i(60617),
      n = e.i(34220),
      a = e.i(19455),
      o = e.i(55146);
    e.s([
      'default',
      0,
      function ({}) {
        let { setTheme: e } = (0, n.useTheme)();
        return (0, t.jsxs)(o.DropdownMenu, {
          children: [
            (0, t.jsx)(o.DropdownMenuTrigger, {
              asChild: !0,
              children: (0, t.jsxs)(a.Button, {
                variant: 'outline',
                size: 'icon',
                children: [
                  (0, t.jsx)(r.SunIcon, {
                    className:
                      'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
                  }),
                  (0, t.jsx)(r.MoonIcon, {
                    className:
                      'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
                  }),
                  (0, t.jsx)('span', {
                    className: 'sr-only',
                    children: 'Toggle theme'
                  })
                ]
              })
            }),
            (0, t.jsxs)(o.DropdownMenuContent, {
              align: 'end',
              children: [
                (0, t.jsx)(o.DropdownMenuItem, {
                  onClick: () => e('light'),
                  children: 'Light'
                }),
                (0, t.jsx)(o.DropdownMenuItem, {
                  onClick: () => e('dark'),
                  children: 'Dark'
                }),
                (0, t.jsx)(o.DropdownMenuItem, {
                  onClick: () => e('system'),
                  children: 'System'
                })
              ]
            })
          ]
        });
      }
    ]);
  }
]);
