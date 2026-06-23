(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  15288,
  (e) => {
    'use strict';
    var a = e.i(29971),
      t = e.i(22034),
      r = e.i(75157);
    let s = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('div', {
        ref: s,
        className: (0, r.cn)(
          'rounded-lg border border-border/80 bg-card/90 text-card-foreground shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm',
          e
        ),
        ...t
      })
    );
    s.displayName = 'Card';
    let i = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('div', {
        ref: s,
        className: (0, r.cn)('flex flex-col space-y-1.5 p-5', e),
        ...t
      })
    );
    i.displayName = 'CardHeader';
    let n = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('h3', {
        ref: s,
        className: (0, r.cn)('font-semibold leading-none', e),
        ...t
      })
    );
    n.displayName = 'CardTitle';
    let o = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('p', {
        ref: s,
        className: (0, r.cn)('text-sm text-muted-foreground', e),
        ...t
      })
    );
    o.displayName = 'CardDescription';
    let l = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('div', { ref: s, className: (0, r.cn)('p-5 pt-0', e), ...t })
    );
    l.displayName = 'CardContent';
    let d = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('div', {
        ref: s,
        className: (0, r.cn)('flex items-center p-5 pt-0', e),
        ...t
      })
    );
    (d.displayName = 'CardFooter'),
      e.s([
        'Card',
        0,
        s,
        'CardContent',
        0,
        l,
        'CardDescription',
        0,
        o,
        'CardFooter',
        0,
        d,
        'CardHeader',
        0,
        i,
        'CardTitle',
        0,
        n
      ]);
  },
  31847,
  (e) => {
    'use strict';
    var a = e.i(29971),
      t = e.i(22034),
      r = e.i(19455),
      s = e.i(78218);
    let i = (0, e.i(74420).default)('Code', [
      ['polyline', { points: '16 18 22 12 16 6', key: 'z7tu5w' }],
      ['polyline', { points: '8 6 2 12 8 18', key: '1eg1df' }]
    ]);
    var n = e.i(91967),
      o = e.i(2501),
      l = e.i(66227),
      d = e.i(24575),
      c = e.i(20255),
      u = e.i(78873),
      p = e.i(40776),
      m = e.i(93107),
      h = 'Tabs',
      [f, x] = (0, o.createContextScope)(h, [l.createRovingFocusGroupScope]),
      g = (0, l.createRovingFocusGroupScope)(),
      [j, v] = f(h),
      b = t.forwardRef((e, t) => {
        let {
            __scopeTabs: r,
            value: s,
            onValueChange: i,
            defaultValue: n,
            orientation: o = 'horizontal',
            dir: l,
            activationMode: d = 'automatic',
            ...f
          } = e,
          x = (0, u.useDirection)(l),
          [g, v] = (0, p.useControllableState)({
            prop: s,
            onChange: i,
            defaultProp: n ?? '',
            caller: h
          });
        return (0, a.jsx)(j, {
          scope: r,
          baseId: (0, m.useId)(),
          value: g,
          onValueChange: v,
          orientation: o,
          dir: x,
          activationMode: d,
          children: (0, a.jsx)(c.Primitive.div, {
            dir: x,
            'data-orientation': o,
            ...f,
            ref: t
          })
        });
      });
    b.displayName = h;
    var y = 'TabsList',
      w = t.forwardRef((e, t) => {
        let { __scopeTabs: r, loop: s = !0, ...i } = e,
          n = v(y, r),
          o = g(r);
        return (0, a.jsx)(l.Root, {
          asChild: !0,
          ...o,
          orientation: n.orientation,
          dir: n.dir,
          loop: s,
          children: (0, a.jsx)(c.Primitive.div, {
            role: 'tablist',
            'aria-orientation': n.orientation,
            ...i,
            ref: t
          })
        });
      });
    w.displayName = y;
    var C = 'TabsTrigger',
      N = t.forwardRef((e, t) => {
        let { __scopeTabs: r, value: s, disabled: i = !1, ...o } = e,
          d = v(C, r),
          u = g(r),
          p = I(d.baseId, s),
          m = P(d.baseId, s),
          h = s === d.value;
        return (0, a.jsx)(l.Item, {
          asChild: !0,
          ...u,
          focusable: !i,
          active: h,
          children: (0, a.jsx)(c.Primitive.button, {
            type: 'button',
            role: 'tab',
            'aria-selected': h,
            'aria-controls': m,
            'data-state': h ? 'active' : 'inactive',
            'data-disabled': i ? '' : void 0,
            disabled: i,
            id: p,
            ...o,
            ref: t,
            onMouseDown: (0, n.composeEventHandlers)(e.onMouseDown, (e) => {
              i || 0 !== e.button || !1 !== e.ctrlKey
                ? e.preventDefault()
                : d.onValueChange(s);
            }),
            onKeyDown: (0, n.composeEventHandlers)(e.onKeyDown, (e) => {
              [' ', 'Enter'].includes(e.key) && d.onValueChange(s);
            }),
            onFocus: (0, n.composeEventHandlers)(e.onFocus, () => {
              let e = 'manual' !== d.activationMode;
              h || i || !e || d.onValueChange(s);
            })
          })
        });
      });
    N.displayName = C;
    var S = 'TabsContent',
      T = t.forwardRef((e, r) => {
        let { __scopeTabs: s, value: i, forceMount: n, children: o, ...l } = e,
          u = v(S, s),
          p = I(u.baseId, i),
          m = P(u.baseId, i),
          h = i === u.value,
          f = t.useRef(h);
        return (
          t.useEffect(() => {
            let e = requestAnimationFrame(() => (f.current = !1));
            return () => cancelAnimationFrame(e);
          }, []),
          (0, a.jsx)(d.Presence, {
            present: n || h,
            children: ({ present: t }) =>
              (0, a.jsx)(c.Primitive.div, {
                'data-state': h ? 'active' : 'inactive',
                'data-orientation': u.orientation,
                role: 'tabpanel',
                'aria-labelledby': p,
                hidden: !t,
                id: m,
                tabIndex: 0,
                ...l,
                ref: r,
                style: {
                  ...e.style,
                  animationDuration: f.current ? '0s' : void 0
                },
                children: t && o
              })
          })
        );
      });
    function I(e, a) {
      return `${e}-trigger-${a}`;
    }
    function P(e, a) {
      return `${e}-content-${a}`;
    }
    T.displayName = S;
    var R = e.i(75157);
    let D = t.forwardRef(({ className: e, ...t }, r) =>
      (0, a.jsx)(w, {
        ref: r,
        className: (0, R.cn)(
          'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
          e
        ),
        ...t
      })
    );
    D.displayName = w.displayName;
    let A = t.forwardRef(({ className: e, ...t }, r) =>
      (0, a.jsx)(N, {
        ref: r,
        className: (0, R.cn)(
          'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
          e
        ),
        ...t
      })
    );
    A.displayName = N.displayName;
    let E = t.forwardRef(({ className: e, ...t }, r) =>
      (0, a.jsx)(T, {
        ref: r,
        className: (0, R.cn)(
          'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          e
        ),
        ...t
      })
    );
    E.displayName = T.displayName;
    var G = e.i(15288);
    e.s(
      [
        'default',
        0,
        function () {
          let [e, n] = (0, t.useState)(''),
            [o, l] = (0, t.useState)(''),
            [d, c] = (0, t.useState)(''),
            [u, p] = (0, t.useState)(''),
            [m, h] = (0, t.useState)(''),
            [f, x] = (0, t.useState)(''),
            [g, j] = (0, t.useState)(''),
            [v, y] = (0, t.useState)([]),
            [w, C] = (0, t.useState)([]),
            [N, S] = (0, t.useState)(!1),
            [T, I] = (0, t.useState)(!1),
            [P, R] = (0, t.useState)(!1);
          (0, t.useEffect)(() => {
            !(async function () {
              try {
                let [e, a] = await Promise.all([
                    fetch(
                      'https://dashboard.aipowergrid.io/api/models?type=text'
                    ),
                    fetch(
                      'https://dashboard.aipowergrid.io/api/models?type=image'
                    )
                  ]),
                  t = await e.json(),
                  r = await a.json();
                y(t), C(r);
              } catch (e) {
                console.error('Failed to fetch models', e);
              }
            })();
          }, []);
          let H = async (a) => {
              a.preventDefault(), S(!0);
              try {
                let a = await fetch(
                    'https://dashboard.aipowergrid.io/api/generate-text',
                    {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        prompt: e,
                        apiKey: d,
                        uuid: 'test-uuid',
                        model: u
                      })
                    }
                  ),
                  t = await a.json();
                x(t.response);
              } catch (e) {
                console.error('Error generating text:', e);
              } finally {
                S(!1);
              }
            },
            _ = async (e) => {
              e.preventDefault(), I(!0);
              try {
                let e = await fetch(
                    'https://dashboard.aipowergrid.io/api/generate-image',
                    {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        prompt: o,
                        apiKey: d,
                        uuid: 'test-uuid',
                        model: m,
                        customSettings: {
                          nsfw: !1,
                          batchSize: 1,
                          width: 512,
                          height: 512,
                          steps: 30,
                          sampler: 'default',
                          tiling: !1,
                          clipSkip: 0,
                          karras: !1,
                          hiResFix: !1
                        }
                      })
                    }
                  ),
                  a = await e.json();
                j(a.response);
              } catch (e) {
                console.error('Error generating image:', e);
              } finally {
                I(!1);
              }
            },
            k = `
curl -X POST https://api.aipowergrid.io/api/v2/generate/text/async \\
-H "Content-Type: application/json" \\
-H "apikey: YOUR_API_KEY" \\
-d '{
  "prompt": "Your prompt here",
  "models": ["${u}"],
  "params": {
    "max_context_length": 512,
    "max_length": 50,
    "temperature": 0.7,
    "top_p": 0.9
  }
}'
  `,
            F = `
curl -X POST https://api.aipowergrid.io/api/v2/generate/async \\
-H "Content-Type: application/json" \\
-H "apikey: YOUR_API_KEY" \\
-d '{
  "prompt": "Your prompt here",
  "models": ["${m}"],
  "params": {
    "n": 1,
    "width": 512,
    "height": 512,
    "steps": 30,
    "sampler_name": "DDIM",
    "cfg_scale": 7.5
  }
}'
  `;
          return (0, a.jsxs)('div', {
            className: 'space-y-6 p-6',
            children: [
              (0, a.jsxs)('div', {
                className: 'flex items-center justify-between',
                children: [
                  (0, a.jsx)('h1', {
                    className: 'text-2xl font-bold',
                    children: 'AI Power Grid API Usage'
                  }),
                  (0, a.jsxs)(r.Button, {
                    onClick: () => R(!P),
                    variant: 'outline',
                    children: [
                      (0, a.jsx)(i, { className: 'mr-2 h-4 w-4' }),
                      P ? 'Hide Code' : 'Show Code'
                    ]
                  })
                ]
              }),
              P &&
                (0, a.jsxs)(G.Card, {
                  children: [
                    (0, a.jsxs)(G.CardHeader, {
                      children: [
                        (0, a.jsx)(G.CardTitle, {
                          children: 'API Usage Examples'
                        }),
                        (0, a.jsx)(G.CardDescription, {
                          children:
                            'Use these curl commands to interact with the AI Power Grid API'
                        })
                      ]
                    }),
                    (0, a.jsx)(G.CardContent, {
                      children: (0, a.jsxs)(b, {
                        defaultValue: 'text',
                        children: [
                          (0, a.jsxs)(D, {
                            children: [
                              (0, a.jsx)(A, {
                                value: 'text',
                                children: 'Text Generation'
                              }),
                              (0, a.jsx)(A, {
                                value: 'image',
                                children: 'Image Generation'
                              })
                            ]
                          }),
                          (0, a.jsx)(E, {
                            value: 'text',
                            children: (0, a.jsx)('pre', {
                              className:
                                'overflow-x-auto rounded-md bg-muted p-4',
                              children: (0, a.jsx)('code', { children: k })
                            })
                          }),
                          (0, a.jsx)(E, {
                            value: 'image',
                            children: (0, a.jsx)('pre', {
                              className:
                                'overflow-x-auto rounded-md bg-muted p-4',
                              children: (0, a.jsx)('code', { children: F })
                            })
                          })
                        ]
                      })
                    })
                  ]
                }),
              (0, a.jsxs)('div', {
                className: 'grid grid-cols-1 gap-4 md:grid-cols-2',
                children: [
                  (0, a.jsxs)(G.Card, {
                    children: [
                      (0, a.jsxs)(G.CardHeader, {
                        children: [
                          (0, a.jsx)(G.CardTitle, {
                            children: 'Text Generation'
                          }),
                          (0, a.jsx)(G.CardDescription, {
                            children: 'Generate text using AI models'
                          })
                        ]
                      }),
                      (0, a.jsxs)(G.CardContent, {
                        children: [
                          (0, a.jsxs)('form', {
                            onSubmit: H,
                            className: 'space-y-2',
                            children: [
                              (0, a.jsx)('input', {
                                type: 'text',
                                placeholder: 'Enter API Key',
                                value: d,
                                onChange: (e) => c(e.target.value),
                                className: 'w-full rounded border p-2'
                              }),
                              (0, a.jsx)('input', {
                                type: 'text',
                                placeholder: 'Enter Text Prompt',
                                value: e,
                                onChange: (e) => n(e.target.value),
                                className: 'w-full rounded border p-2'
                              }),
                              (0, a.jsxs)('select', {
                                value: u,
                                onChange: (e) => p(e.target.value),
                                className: 'w-full rounded border p-2',
                                children: [
                                  (0, a.jsx)('option', {
                                    value: '',
                                    children: 'Select Text Model'
                                  }),
                                  v.map((e) =>
                                    (0, a.jsx)(
                                      'option',
                                      { value: e.name, children: e.name },
                                      e.name
                                    )
                                  )
                                ]
                              }),
                              (0, a.jsx)(r.Button, {
                                type: 'submit',
                                disabled: N,
                                className: 'w-full',
                                children: N
                                  ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        (0, a.jsx)(s.Loader2, {
                                          className: 'mr-2 h-4 w-4 animate-spin'
                                        }),
                                        'Generating...'
                                      ]
                                    })
                                  : 'Generate Text'
                              })
                            ]
                          }),
                          f &&
                            (0, a.jsxs)('div', {
                              className: 'mt-4 rounded border p-2',
                              children: [
                                (0, a.jsx)('h3', {
                                  className: 'font-semibold',
                                  children: 'Response:'
                                }),
                                (0, a.jsx)('p', { children: f })
                              ]
                            })
                        ]
                      })
                    ]
                  }),
                  (0, a.jsxs)(G.Card, {
                    children: [
                      (0, a.jsxs)(G.CardHeader, {
                        children: [
                          (0, a.jsx)(G.CardTitle, {
                            children: 'Image Generation'
                          }),
                          (0, a.jsx)(G.CardDescription, {
                            children: 'Generate images using AI models'
                          })
                        ]
                      }),
                      (0, a.jsxs)(G.CardContent, {
                        children: [
                          (0, a.jsxs)('form', {
                            onSubmit: _,
                            className: 'space-y-2',
                            children: [
                              (0, a.jsx)('input', {
                                type: 'text',
                                placeholder: 'Enter API Key',
                                value: d,
                                onChange: (e) => c(e.target.value),
                                className: 'w-full rounded border p-2'
                              }),
                              (0, a.jsx)('input', {
                                type: 'text',
                                placeholder: 'Enter Image Prompt',
                                value: o,
                                onChange: (e) => l(e.target.value),
                                className: 'w-full rounded border p-2'
                              }),
                              (0, a.jsxs)('select', {
                                value: m,
                                onChange: (e) => h(e.target.value),
                                className: 'w-full rounded border p-2',
                                children: [
                                  (0, a.jsx)('option', {
                                    value: '',
                                    children: 'Select Image Model'
                                  }),
                                  w.map((e) =>
                                    (0, a.jsx)(
                                      'option',
                                      { value: e.name, children: e.name },
                                      e.name
                                    )
                                  )
                                ]
                              }),
                              (0, a.jsx)(r.Button, {
                                type: 'submit',
                                disabled: T,
                                className: 'w-full',
                                children: T
                                  ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        (0, a.jsx)(s.Loader2, {
                                          className: 'mr-2 h-4 w-4 animate-spin'
                                        }),
                                        'Generating...'
                                      ]
                                    })
                                  : 'Generate Image'
                              })
                            ]
                          }),
                          g &&
                            (0, a.jsxs)('div', {
                              className: 'mt-4 rounded border p-2',
                              children: [
                                (0, a.jsx)('h3', {
                                  className: 'font-semibold',
                                  children: 'Response:'
                                }),
                                (0, a.jsx)('img', {
                                  src: g || '/placeholder.svg',
                                  alt: 'Generated',
                                  className: 'mx-auto w-full max-w-md'
                                })
                              ]
                            })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          });
        }
      ],
      31847
    );
  }
]);
