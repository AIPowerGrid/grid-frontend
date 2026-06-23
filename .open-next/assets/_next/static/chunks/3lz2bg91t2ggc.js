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
    let l = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('div', {
        ref: s,
        className: (0, r.cn)('flex flex-col space-y-1.5 p-5', e),
        ...t
      })
    );
    l.displayName = 'CardHeader';
    let n = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('h3', {
        ref: s,
        className: (0, r.cn)('font-semibold leading-none', e),
        ...t
      })
    );
    n.displayName = 'CardTitle';
    let d = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('p', {
        ref: s,
        className: (0, r.cn)('text-sm text-muted-foreground', e),
        ...t
      })
    );
    d.displayName = 'CardDescription';
    let o = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('div', { ref: s, className: (0, r.cn)('p-5 pt-0', e), ...t })
    );
    o.displayName = 'CardContent';
    let i = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('div', {
        ref: s,
        className: (0, r.cn)('flex items-center p-5 pt-0', e),
        ...t
      })
    );
    (i.displayName = 'CardFooter'),
      e.s([
        'Card',
        0,
        s,
        'CardContent',
        0,
        o,
        'CardDescription',
        0,
        d,
        'CardFooter',
        0,
        i,
        'CardHeader',
        0,
        l,
        'CardTitle',
        0,
        n
      ]);
  },
  84774,
  (e) => {
    'use strict';
    var a = e.i(29971),
      t = e.i(22034),
      r = e.i(75157);
    let s = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('div', {
        className: 'w-full overflow-auto',
        children: (0, a.jsx)('table', {
          ref: s,
          className: (0, r.cn)('w-full caption-bottom text-sm', e),
          ...t
        })
      })
    );
    s.displayName = 'Table';
    let l = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('thead', {
        ref: s,
        className: (0, r.cn)('[&_tr]:border-b', e),
        ...t
      })
    );
    l.displayName = 'TableHeader';
    let n = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('tbody', {
        ref: s,
        className: (0, r.cn)('[&_tr:last-child]:border-0', e),
        ...t
      })
    );
    (n.displayName = 'TableBody'),
      (t.forwardRef(({ className: e, ...t }, s) =>
        (0, a.jsx)('tfoot', {
          ref: s,
          className: (0, r.cn)(
            'bg-primary font-medium text-primary-foreground',
            e
          ),
          ...t
        })
      ).displayName = 'TableFooter');
    let d = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('tr', {
        ref: s,
        className: (0, r.cn)(
          'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
          e
        ),
        ...t
      })
    );
    d.displayName = 'TableRow';
    let o = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('th', {
        ref: s,
        className: (0, r.cn)(
          'h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
          e
        ),
        ...t
      })
    );
    o.displayName = 'TableHead';
    let i = t.forwardRef(({ className: e, ...t }, s) =>
      (0, a.jsx)('td', {
        ref: s,
        className: (0, r.cn)(
          'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
          e
        ),
        ...t
      })
    );
    (i.displayName = 'TableCell'),
      (t.forwardRef(({ className: e, ...t }, s) =>
        (0, a.jsx)('caption', {
          ref: s,
          className: (0, r.cn)('mt-4 text-sm text-muted-foreground', e),
          ...t
        })
      ).displayName = 'TableCaption'),
      e.s([
        'Table',
        0,
        s,
        'TableBody',
        0,
        n,
        'TableCell',
        0,
        i,
        'TableHead',
        0,
        o,
        'TableHeader',
        0,
        l,
        'TableRow',
        0,
        d
      ]);
  },
  87486,
  (e) => {
    'use strict';
    var a = e.i(29971),
      t = e.i(94237),
      r = e.i(75157);
    let s = (0, t.cva)(
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
      function ({ className: e, variant: t, ...l }) {
        return (0, a.jsx)('div', {
          className: (0, r.cn)(s({ variant: t }), e),
          ...l
        });
      }
    ]);
  },
  92631,
  (e) => {
    'use strict';
    var a = e.i(29971),
      t = e.i(22034),
      r = e.i(87486),
      s = e.i(19455),
      l = e.i(15288),
      n = e.i(93479),
      d = e.i(84774),
      o = e.i(17913);
    e.s([
      'default',
      0,
      function () {
        let [e, i] = (0, t.useState)(null),
          [c, x] = (0, t.useState)(!1),
          [f, u] = (0, t.useState)(!0),
          [m, h] = (0, t.useState)(''),
          [b, p] = (0, t.useState)(!1),
          [y, g] = (0, t.useState)(null),
          [j, N] = (0, t.useState)(!1),
          [w, v] = (0, t.useState)(''),
          C = (0, t.useCallback)(async () => {
            try {
              let e = await fetch('/api/account');
              if (404 === e.status) return void x(!0);
              if (!e.ok) throw Error('Account fetch failed');
              i(await e.json());
            } catch (e) {
              v(e.message ?? 'Could not load account');
            } finally {
              u(!1);
            }
          }, []);
        async function T(e) {
          e.preventDefault(), p(!0), v('');
          try {
            let e = await fetch('/api/account/keys', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ label: m || 'api' })
            });
            if (!e.ok) throw Error('Key creation failed');
            let a = await e.json();
            g(a.api_key), h(''), await C();
          } catch (e) {
            v(e.message ?? 'Key creation failed');
          } finally {
            p(!1);
          }
        }
        async function k(e) {
          confirm(
            'Revoke this key? Anything using it stops working immediately.'
          ) &&
            (await fetch(`/api/account/keys/${e}`, { method: 'DELETE' }),
            await C());
        }
        async function R() {
          y &&
            (await navigator.clipboard.writeText(y),
            N(!0),
            setTimeout(() => N(!1), 2e3));
        }
        return ((0, t.useEffect)(() => {
          C();
        }, [C]),
        c)
          ? (0, a.jsxs)(l.Card, {
              children: [
                (0, a.jsxs)(l.CardHeader, {
                  children: [
                    (0, a.jsx)(l.CardTitle, {
                      children: 'No Grid account on this session'
                    }),
                    (0, a.jsx)('p', {
                      className: 'text-sm text-muted-foreground',
                      children:
                        'Sign in again so the console can provision a Grid account through the Grid API. The console no longer creates local database keys.'
                    })
                  ]
                }),
                (0, a.jsx)(l.CardContent, {
                  children: (0, a.jsx)(s.Button, {
                    asChild: !0,
                    children: (0, a.jsx)(o.default, {
                      href: '/',
                      children: 'Sign in again'
                    })
                  })
                })
              ]
            })
          : f
            ? (0, a.jsx)('p', {
                className: 'text-muted-foreground',
                children: 'Loading account…'
              })
            : (0, a.jsx)('div', {
                className: 'mx-auto w-full max-w-4xl space-y-6',
                children: (0, a.jsxs)(l.Card, {
                  children: [
                    (0, a.jsxs)(l.CardHeader, {
                      children: [
                        (0, a.jsx)(l.CardTitle, { children: 'API Keys' }),
                        (0, a.jsx)('p', {
                          className: 'text-sm text-muted-foreground',
                          children:
                            'Keys are shown once at creation and stored only as hashes. Create one per app; revoke any of them independently.'
                        })
                      ]
                    }),
                    (0, a.jsxs)(l.CardContent, {
                      className: 'space-y-6',
                      children: [
                        e?.wallet &&
                          (0, a.jsxs)('p', {
                            className: 'text-sm',
                            children: [
                              (0, a.jsx)('span', {
                                className: 'text-muted-foreground',
                                children: 'Linked wallet: '
                              }),
                              (0, a.jsx)('code', {
                                className: 'text-green-500',
                                children: e.wallet
                              })
                            ]
                          }),
                        y &&
                          (0, a.jsxs)('div', {
                            className:
                              'rounded-lg border border-green-600/40 bg-green-950/30 p-4',
                            children: [
                              (0, a.jsx)('p', {
                                className:
                                  'mb-2 text-sm font-medium text-green-400',
                                children:
                                  "New key created — copy it now, it won't be shown again."
                              }),
                              (0, a.jsxs)('div', {
                                className: 'flex items-center gap-2',
                                children: [
                                  (0, a.jsx)(n.Input, {
                                    readOnly: !0,
                                    value: y,
                                    className: 'font-mono'
                                  }),
                                  (0, a.jsx)(s.Button, {
                                    onClick: R,
                                    variant: 'secondary',
                                    children: j ? 'Copied ✓' : 'Copy'
                                  }),
                                  (0, a.jsx)(s.Button, {
                                    onClick: () => g(null),
                                    variant: 'ghost',
                                    children: 'Done'
                                  })
                                ]
                              })
                            ]
                          }),
                        (0, a.jsxs)('form', {
                          onSubmit: T,
                          className: 'flex gap-2',
                          children: [
                            (0, a.jsx)(n.Input, {
                              value: m,
                              onChange: (e) => h(e.target.value),
                              placeholder:
                                'Key label (e.g. my-agent, prod, laptop)',
                              className: 'max-w-xs'
                            }),
                            (0, a.jsx)(s.Button, {
                              type: 'submit',
                              disabled: b,
                              children: b ? 'Creating…' : 'Create key'
                            })
                          ]
                        }),
                        w &&
                          (0, a.jsx)('p', {
                            className: 'text-sm text-red-500',
                            children: w
                          }),
                        (0, a.jsxs)(d.Table, {
                          children: [
                            (0, a.jsx)(d.TableHeader, {
                              children: (0, a.jsxs)(d.TableRow, {
                                children: [
                                  (0, a.jsx)(d.TableHead, { children: 'Key' }),
                                  (0, a.jsx)(d.TableHead, {
                                    children: 'Label'
                                  }),
                                  (0, a.jsx)(d.TableHead, {
                                    children: 'Created'
                                  }),
                                  (0, a.jsx)(d.TableHead, {
                                    children: 'Last used'
                                  }),
                                  (0, a.jsx)(d.TableHead, {
                                    children: 'Status'
                                  }),
                                  (0, a.jsx)(d.TableHead, {})
                                ]
                              })
                            }),
                            (0, a.jsxs)(d.TableBody, {
                              children: [
                                (e?.keys ?? []).map((e) =>
                                  (0, a.jsxs)(
                                    d.TableRow,
                                    {
                                      children: [
                                        (0, a.jsxs)(d.TableCell, {
                                          className: 'font-mono',
                                          children: [e.id, '…']
                                        }),
                                        (0, a.jsx)(d.TableCell, {
                                          children: e.label ?? '—'
                                        }),
                                        (0, a.jsx)(d.TableCell, {
                                          children: e.created
                                            ? new Date(
                                                e.created
                                              ).toLocaleDateString()
                                            : '—'
                                        }),
                                        (0, a.jsx)(d.TableCell, {
                                          children: e.last_used
                                            ? new Date(
                                                e.last_used
                                              ).toLocaleString()
                                            : 'never'
                                        }),
                                        (0, a.jsx)(d.TableCell, {
                                          children: (0, a.jsx)(r.Badge, {
                                            variant: e.revoked
                                              ? 'destructive'
                                              : 'default',
                                            children: e.revoked
                                              ? 'revoked'
                                              : 'active'
                                          })
                                        }),
                                        (0, a.jsx)(d.TableCell, {
                                          children:
                                            !e.revoked &&
                                            'dashboard-session' !== e.label &&
                                            (0, a.jsx)(s.Button, {
                                              variant: 'ghost',
                                              size: 'sm',
                                              onClick: () => k(e.id),
                                              children: 'Revoke'
                                            })
                                        })
                                      ]
                                    },
                                    e.id
                                  )
                                ),
                                0 === (e?.keys ?? []).length &&
                                  (0, a.jsx)(d.TableRow, {
                                    children: (0, a.jsx)(d.TableCell, {
                                      colSpan: 6,
                                      className: 'text-center',
                                      children:
                                        'No keys yet — create your first one above.'
                                    })
                                  })
                              ]
                            })
                          ]
                        }),
                        (0, a.jsxs)('p', {
                          className: 'text-xs text-muted-foreground',
                          children: [
                            'The ',
                            (0, a.jsx)('code', {
                              children: 'dashboard-session'
                            }),
                            ' key powers this console and rotates automatically on every login.'
                          ]
                        })
                      ]
                    })
                  ]
                })
              });
      }
    ]);
  }
]);
