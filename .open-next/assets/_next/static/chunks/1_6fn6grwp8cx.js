(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  29592,
  88721,
  (e) => {
    'use strict';
    var t = e.i(29971),
      r = e.i(22034),
      l = e.i(94237),
      i = e.i(75157);
    let s = (0, l.cva)(
        'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
        {
          variants: {
            variant: {
              default: 'bg-background text-foreground',
              destructive:
                'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive'
            }
          },
          defaultVariants: { variant: 'default' }
        }
      ),
      a = r.forwardRef(({ className: e, variant: r, ...l }, a) =>
        (0, t.jsx)('div', {
          ref: a,
          role: 'alert',
          className: (0, i.cn)(s({ variant: r }), e),
          ...l
        })
      );
    a.displayName = 'Alert';
    let d = r.forwardRef(({ className: e, ...r }, l) =>
      (0, t.jsx)('h5', {
        ref: l,
        className: (0, i.cn)('mb-1 font-medium leading-none tracking-tight', e),
        ...r
      })
    );
    d.displayName = 'AlertTitle';
    let c = r.forwardRef(({ className: e, ...r }, l) =>
      (0, t.jsx)('div', {
        ref: l,
        className: (0, i.cn)('text-sm [&_p]:leading-relaxed', e),
        ...r
      })
    );
    (c.displayName = 'AlertDescription'),
      e.s(['Alert', 0, a, 'AlertDescription', 0, c, 'AlertTitle', 0, d], 29592);
    let n = (0, e.i(74420).default)('CircleAlert', [
      ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
      ['line', { x1: '12', x2: '12', y1: '8', y2: '12', key: '1pkeuh' }],
      ['line', { x1: '12', x2: '12.01', y1: '16', y2: '16', key: '4dfq90' }]
    ]);
    e.s(['AlertCircle', 0, n], 88721);
  },
  16904,
  (e) => {
    'use strict';
    var t = e.i(29971),
      r = e.i(29592),
      l = e.i(88721);
    e.s([
      'default',
      0,
      function ({ error: e }) {
        return (0, t.jsxs)(r.Alert, {
          variant: 'destructive',
          children: [
            (0, t.jsx)(l.AlertCircle, { className: 'h-4 w-4' }),
            (0, t.jsx)(r.AlertTitle, { children: 'Error' }),
            (0, t.jsxs)(r.AlertDescription, {
              children: ['Failed to load statistics: ', e.message]
            })
          ]
        });
      }
    ]);
  }
]);
