(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  15288,
  (e) => {
    'use strict';
    var a = e.i(29971),
      r = e.i(22034),
      l = e.i(75157);
    let s = r.forwardRef(({ className: e, ...r }, s) =>
      (0, a.jsx)('div', {
        ref: s,
        className: (0, l.cn)(
          'rounded-lg border border-border/80 bg-card/90 text-card-foreground shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm',
          e
        ),
        ...r
      })
    );
    s.displayName = 'Card';
    let t = r.forwardRef(({ className: e, ...r }, s) =>
      (0, a.jsx)('div', {
        ref: s,
        className: (0, l.cn)('flex flex-col space-y-1.5 p-5', e),
        ...r
      })
    );
    t.displayName = 'CardHeader';
    let d = r.forwardRef(({ className: e, ...r }, s) =>
      (0, a.jsx)('h3', {
        ref: s,
        className: (0, l.cn)('font-semibold leading-none', e),
        ...r
      })
    );
    d.displayName = 'CardTitle';
    let o = r.forwardRef(({ className: e, ...r }, s) =>
      (0, a.jsx)('p', {
        ref: s,
        className: (0, l.cn)('text-sm text-muted-foreground', e),
        ...r
      })
    );
    o.displayName = 'CardDescription';
    let i = r.forwardRef(({ className: e, ...r }, s) =>
      (0, a.jsx)('div', { ref: s, className: (0, l.cn)('p-5 pt-0', e), ...r })
    );
    i.displayName = 'CardContent';
    let c = r.forwardRef(({ className: e, ...r }, s) =>
      (0, a.jsx)('div', {
        ref: s,
        className: (0, l.cn)('flex items-center p-5 pt-0', e),
        ...r
      })
    );
    (c.displayName = 'CardFooter'),
      e.s([
        'Card',
        0,
        s,
        'CardContent',
        0,
        i,
        'CardDescription',
        0,
        o,
        'CardFooter',
        0,
        c,
        'CardHeader',
        0,
        t,
        'CardTitle',
        0,
        d
      ]);
  },
  84774,
  (e) => {
    'use strict';
    var a = e.i(29971),
      r = e.i(22034),
      l = e.i(75157);
    let s = r.forwardRef(({ className: e, ...r }, s) =>
      (0, a.jsx)('div', {
        className: 'w-full overflow-auto',
        children: (0, a.jsx)('table', {
          ref: s,
          className: (0, l.cn)('w-full caption-bottom text-sm', e),
          ...r
        })
      })
    );
    s.displayName = 'Table';
    let t = r.forwardRef(({ className: e, ...r }, s) =>
      (0, a.jsx)('thead', {
        ref: s,
        className: (0, l.cn)('[&_tr]:border-b', e),
        ...r
      })
    );
    t.displayName = 'TableHeader';
    let d = r.forwardRef(({ className: e, ...r }, s) =>
      (0, a.jsx)('tbody', {
        ref: s,
        className: (0, l.cn)('[&_tr:last-child]:border-0', e),
        ...r
      })
    );
    (d.displayName = 'TableBody'),
      (r.forwardRef(({ className: e, ...r }, s) =>
        (0, a.jsx)('tfoot', {
          ref: s,
          className: (0, l.cn)(
            'bg-primary font-medium text-primary-foreground',
            e
          ),
          ...r
        })
      ).displayName = 'TableFooter');
    let o = r.forwardRef(({ className: e, ...r }, s) =>
      (0, a.jsx)('tr', {
        ref: s,
        className: (0, l.cn)(
          'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
          e
        ),
        ...r
      })
    );
    o.displayName = 'TableRow';
    let i = r.forwardRef(({ className: e, ...r }, s) =>
      (0, a.jsx)('th', {
        ref: s,
        className: (0, l.cn)(
          'h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
          e
        ),
        ...r
      })
    );
    i.displayName = 'TableHead';
    let c = r.forwardRef(({ className: e, ...r }, s) =>
      (0, a.jsx)('td', {
        ref: s,
        className: (0, l.cn)(
          'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
          e
        ),
        ...r
      })
    );
    (c.displayName = 'TableCell'),
      (r.forwardRef(({ className: e, ...r }, s) =>
        (0, a.jsx)('caption', {
          ref: s,
          className: (0, l.cn)('mt-4 text-sm text-muted-foreground', e),
          ...r
        })
      ).displayName = 'TableCaption'),
      e.s([
        'Table',
        0,
        s,
        'TableBody',
        0,
        d,
        'TableCell',
        0,
        c,
        'TableHead',
        0,
        i,
        'TableHeader',
        0,
        t,
        'TableRow',
        0,
        o
      ]);
  },
  87486,
  (e) => {
    'use strict';
    var a = e.i(29971),
      r = e.i(94237),
      l = e.i(75157);
    let s = (0, r.cva)(
      'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      {
        variants: {
          variant: {
            default:
              'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
            secondary:
              'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
            destructive:
              'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
            outline: 'text-foreground'
          }
        },
        defaultVariants: { variant: 'default' }
      }
    );
    e.s([
      'Badge',
      0,
      function ({ className: e, variant: r, ...t }) {
        return (0, a.jsx)('div', {
          className: (0, l.cn)(s({ variant: r }), e),
          ...t
        });
      }
    ]);
  },
  25785,
  (e) => {
    'use strict';
    var a = e.i(29971),
      r = e.i(22034),
      l = e.i(15288),
      s = e.i(84774),
      t = e.i(87486),
      d = e.i(2747),
      o = e.i(47812),
      i = e.i(93479);
    function c() {
      return (0, a.jsx)('div', {
        className: 'space-y-2',
        children: [void 0, void 0, void 0, void 0, void 0].map((e, r) =>
          (0, a.jsx)(
            'div',
            {
              className: 'flex space-x-2',
              children: [...Array(8)].map((e, r) =>
                (0, a.jsx)(d.Skeleton, { className: 'h-4 w-[80px]' }, r)
              )
            },
            r
          )
        )
      });
    }
    e.s([
      'default',
      0,
      function () {
        let [e, d] = (0, r.useState)([]),
          [n, f] = (0, r.useState)(!0),
          [m, x] = (0, r.useState)(''),
          [p, u] = (0, r.useState)('');
        (0, r.useEffect)(() => {
          !(async function () {
            try {
              let e = await fetch('/api/workers', { next: { revalidate: 60 } });
              if (!e.ok) throw Error(`Error: ${e.statusText}`);
              let a = await e.json();
              d(a);
            } catch (e) {
              console.error('Error fetching workers', e),
                x('Failed to fetch workers data');
            } finally {
              f(!1);
            }
          })();
        }, []);
        let b = e.filter((e) => e.name.toLowerCase().includes(p.toLowerCase()));
        return (0, a.jsxs)(l.Card, {
          className: 'w-full',
          children: [
            (0, a.jsxs)(l.CardHeader, {
              children: [
                (0, a.jsx)(l.CardTitle, {
                  className: 'text-2xl font-bold',
                  children: 'Workers Overview'
                }),
                (0, a.jsxs)('div', {
                  className: 'relative',
                  children: [
                    (0, a.jsx)(o.Search, {
                      className:
                        'absolute left-2 top-2.5 h-4 w-4 text-muted-foreground'
                    }),
                    (0, a.jsx)(i.Input, {
                      placeholder: 'Search workers...',
                      className: 'pl-8',
                      value: p,
                      onChange: (e) => u(e.target.value)
                    })
                  ]
                })
              ]
            }),
            (0, a.jsx)(l.CardContent, {
              children: n
                ? (0, a.jsx)(c, {})
                : m
                  ? (0, a.jsx)('div', {
                      className: 'p-4 text-red-500',
                      children: m
                    })
                  : (0, a.jsx)('div', {
                      className: 'overflow-x-auto',
                      children: (0, a.jsxs)(s.Table, {
                        children: [
                          (0, a.jsx)(s.TableHeader, {
                            children: (0, a.jsxs)(s.TableRow, {
                              children: [
                                (0, a.jsx)(s.TableHead, {
                                  className: 'p-1',
                                  children: 'Address'
                                }),
                                (0, a.jsx)(s.TableHead, {
                                  className: 'p-1',
                                  children: 'Type'
                                }),
                                (0, a.jsx)(s.TableHead, {
                                  className: 'p-1',
                                  children: 'Status'
                                }),
                                (0, a.jsx)(s.TableHead, {
                                  className: 'p-1',
                                  children: 'Performance'
                                }),
                                (0, a.jsx)(s.TableHead, {
                                  className: 'p-1',
                                  children: 'Req Fulfilled'
                                }),
                                (0, a.jsx)(s.TableHead, {
                                  className: 'p-1',
                                  children: 'Uptime'
                                }),
                                (0, a.jsx)(s.TableHead, {
                                  className: 'p-1',
                                  children: 'Agent'
                                }),
                                (0, a.jsx)(s.TableHead, {
                                  className: 'p-1',
                                  children: 'Models'
                                })
                              ]
                            })
                          }),
                          (0, a.jsx)(s.TableBody, {
                            children: b.map((e) => {
                              var r, l;
                              let d, o, i;
                              return (0, a.jsxs)(
                                s.TableRow,
                                {
                                  children: [
                                    (0, a.jsx)(s.TableCell, {
                                      className: 'p-1 font-medium',
                                      children: e.name
                                    }),
                                    (0, a.jsx)(s.TableCell, {
                                      className: 'p-1',
                                      children: e.type
                                    }),
                                    (0, a.jsx)(s.TableCell, {
                                      className: 'p-1',
                                      children: (0, a.jsx)(t.Badge, {
                                        variant: e.online
                                          ? 'default'
                                          : 'destructive',
                                        children: e.online
                                          ? 'Online'
                                          : 'Offline'
                                      })
                                    }),
                                    (0, a.jsx)(s.TableCell, {
                                      className: 'p-1',
                                      children: e.performance
                                        ? e.performance
                                        : 'N/A'
                                    }),
                                    (0, a.jsx)(s.TableCell, {
                                      className: 'p-1',
                                      children:
                                        e.requests_fulfilled.toLocaleString()
                                    }),
                                    (0, a.jsx)(s.TableCell, {
                                      className: 'p-1',
                                      children:
                                        ((d = Math.floor(
                                          (r = e.uptime) / 86400
                                        )),
                                        (o = Math.floor((r % 86400) / 3600)),
                                        (i = Math.floor((r % 3600) / 60)),
                                        `${d}d ${o}h ${i}m`)
                                    }),
                                    (0, a.jsx)(s.TableCell, {
                                      className: 'p-1',
                                      children: (l = e.bridge_agent)
                                        ? l.split(':')[0]
                                        : 'N/A'
                                    }),
                                    (0, a.jsx)(s.TableCell, {
                                      className: 'p-1',
                                      children: e.models.map((e) =>
                                        (0, a.jsx)(
                                          t.Badge,
                                          {
                                            variant: 'outline',
                                            className: 'mr-1',
                                            children: e
                                          },
                                          e
                                        )
                                      )
                                    })
                                  ]
                                },
                                e.id
                              );
                            })
                          })
                        ]
                      })
                    })
            })
          ]
        });
      }
    ]);
  }
]);
