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
    let n = r.forwardRef(({ className: e, ...r }, s) =>
      (0, a.jsx)('div', {
        ref: s,
        className: (0, l.cn)('flex items-center p-5 pt-0', e),
        ...r
      })
    );
    (n.displayName = 'CardFooter'),
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
        n,
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
    let n = r.forwardRef(({ className: e, ...r }, s) =>
      (0, a.jsx)('td', {
        ref: s,
        className: (0, l.cn)(
          'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
          e
        ),
        ...r
      })
    );
    (n.displayName = 'TableCell'),
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
        n,
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
  45383,
  (e) => {
    'use strict';
    var a = e.i(29971),
      r = e.i(22034),
      l = e.i(19455),
      s = e.i(15288),
      t = e.i(93479),
      d = e.i(84774);
    e.s([
      'default',
      0,
      function () {
        let [e, o] = (0, r.useState)(''),
          [i, n] = (0, r.useState)(null),
          [c, x] = (0, r.useState)(!1),
          [m, f] = (0, r.useState)('');
        async function h(a) {
          if (
            (a.preventDefault(),
            f(''),
            n(null),
            !/^0x[a-fA-F0-9]{40}$/.test(e.trim()))
          )
            return void f('Enter a valid wallet address (0x…, 40 hex chars).');
          x(!0);
          try {
            let a = await fetch(`/api/sentry/workerRewards/${e.trim()}`);
            if (!a.ok) throw Error('Earnings lookup failed');
            n(await a.json());
          } catch (e) {
            f(e.message || 'Error fetching earnings');
          } finally {
            x(!1);
          }
        }
        return (0, a.jsxs)(s.Card, {
          className: 'mx-auto w-full max-w-4xl',
          children: [
            (0, a.jsxs)(s.CardHeader, {
              children: [
                (0, a.jsx)(s.CardTitle, { children: 'Worker Earnings' }),
                (0, a.jsx)('p', {
                  className: 'text-sm text-muted-foreground',
                  children:
                    'den earned per completed job, straight from the settlement ledger. AIPG payouts settle on Base per epoch, pro-rata to den.'
                })
              ]
            }),
            (0, a.jsxs)(s.CardContent, {
              children: [
                (0, a.jsxs)('form', {
                  onSubmit: h,
                  className: 'mb-6 flex space-x-2',
                  children: [
                    (0, a.jsx)(t.Input, {
                      value: e,
                      onChange: (e) => o(e.target.value),
                      placeholder: 'Worker wallet address (0x…)',
                      className: 'flex-1'
                    }),
                    (0, a.jsx)(l.Button, {
                      type: 'submit',
                      disabled: c,
                      children: c ? 'Loading…' : 'Look up'
                    })
                  ]
                }),
                m &&
                  (0, a.jsx)('p', {
                    className: 'mb-4 text-red-500',
                    children: m
                  }),
                i &&
                  (0, a.jsxs)('div', {
                    className: 'space-y-6',
                    children: [
                      (0, a.jsxs)('div', {
                        className: 'grid grid-cols-2 gap-4 md:grid-cols-4',
                        children: [
                          (0, a.jsxs)('div', {
                            className: 'rounded-lg border p-4',
                            children: [
                              (0, a.jsx)('div', {
                                className: 'text-xs text-muted-foreground',
                                children: 'den (lifetime)'
                              }),
                              (0, a.jsx)('div', {
                                className: 'text-2xl font-bold',
                                children: i.total.den.toLocaleString()
                              })
                            ]
                          }),
                          (0, a.jsxs)('div', {
                            className: 'rounded-lg border p-4',
                            children: [
                              (0, a.jsx)('div', {
                                className: 'text-xs text-muted-foreground',
                                children: 'Jobs (lifetime)'
                              }),
                              (0, a.jsx)('div', {
                                className: 'text-2xl font-bold',
                                children: i.total.jobs.toLocaleString()
                              })
                            ]
                          }),
                          (0, a.jsxs)('div', {
                            className: 'rounded-lg border p-4',
                            children: [
                              (0, a.jsx)('div', {
                                className: 'text-xs text-muted-foreground',
                                children: 'den (24h)'
                              }),
                              (0, a.jsx)('div', {
                                className: 'text-2xl font-bold',
                                children: i.last_24h.den.toLocaleString()
                              })
                            ]
                          }),
                          (0, a.jsxs)('div', {
                            className: 'rounded-lg border p-4',
                            children: [
                              (0, a.jsx)('div', {
                                className: 'text-xs text-muted-foreground',
                                children: 'Jobs (24h)'
                              }),
                              (0, a.jsx)('div', {
                                className: 'text-2xl font-bold',
                                children: i.last_24h.jobs.toLocaleString()
                              })
                            ]
                          })
                        ]
                      }),
                      (0, a.jsxs)('div', {
                        className:
                          'rounded-lg border border-dashed p-4 text-sm text-muted-foreground',
                        children: [
                          (0, a.jsx)('strong', {
                            className: 'text-foreground',
                            children: 'On-chain claims:'
                          }),
                          ' ',
                          'epoch settlement publishes a Merkle root on Base; claimable AIPG and a one-click claim will appear here once the first epoch settles.'
                        ]
                      }),
                      (0, a.jsxs)('div', {
                        children: [
                          (0, a.jsxs)('h3', {
                            className: 'mb-2 text-lg font-semibold',
                            children: [
                              'Recent Work (last ',
                              i.recent.length,
                              ')'
                            ]
                          }),
                          (0, a.jsxs)(d.Table, {
                            children: [
                              (0, a.jsx)(d.TableHeader, {
                                children: (0, a.jsxs)(d.TableRow, {
                                  children: [
                                    (0, a.jsx)(d.TableHead, {
                                      children: 'When'
                                    }),
                                    (0, a.jsx)(d.TableHead, {
                                      children: 'Type'
                                    }),
                                    (0, a.jsx)(d.TableHead, {
                                      children: 'Model'
                                    }),
                                    (0, a.jsx)(d.TableHead, {
                                      className: 'text-right',
                                      children: 'den'
                                    })
                                  ]
                                })
                              }),
                              (0, a.jsxs)(d.TableBody, {
                                children: [
                                  i.recent.map((e, r) =>
                                    (0, a.jsxs)(
                                      d.TableRow,
                                      {
                                        children: [
                                          (0, a.jsx)(d.TableCell, {
                                            children: e.at
                                              ? new Date(e.at).toLocaleString()
                                              : '—'
                                          }),
                                          (0, a.jsx)(d.TableCell, {
                                            className: 'capitalize',
                                            children: e.type
                                          }),
                                          (0, a.jsx)(d.TableCell, {
                                            children: e.model
                                          }),
                                          (0, a.jsx)(d.TableCell, {
                                            className: 'text-right',
                                            children: e.den.toLocaleString()
                                          })
                                        ]
                                      },
                                      r
                                    )
                                  ),
                                  0 === i.recent.length &&
                                    (0, a.jsx)(d.TableRow, {
                                      children: (0, a.jsx)(d.TableCell, {
                                        colSpan: 4,
                                        className: 'text-center',
                                        children:
                                          'No work recorded for this wallet yet.'
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
              ]
            })
          ]
        });
      }
    ]);
  }
]);
