(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  15288,
  (e) => {
    'use strict';
    var r = e.i(29971),
      a = e.i(22034),
      d = e.i(75157);
    let s = a.forwardRef(({ className: e, ...a }, s) =>
      (0, r.jsx)('div', {
        ref: s,
        className: (0, d.cn)(
          'rounded-lg border border-border/80 bg-card/90 text-card-foreground shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm',
          e
        ),
        ...a
      })
    );
    s.displayName = 'Card';
    let t = a.forwardRef(({ className: e, ...a }, s) =>
      (0, r.jsx)('div', {
        ref: s,
        className: (0, d.cn)('flex flex-col space-y-1.5 p-5', e),
        ...a
      })
    );
    t.displayName = 'CardHeader';
    let o = a.forwardRef(({ className: e, ...a }, s) =>
      (0, r.jsx)('h3', {
        ref: s,
        className: (0, d.cn)('font-semibold leading-none', e),
        ...a
      })
    );
    o.displayName = 'CardTitle';
    let l = a.forwardRef(({ className: e, ...a }, s) =>
      (0, r.jsx)('p', {
        ref: s,
        className: (0, d.cn)('text-sm text-muted-foreground', e),
        ...a
      })
    );
    l.displayName = 'CardDescription';
    let i = a.forwardRef(({ className: e, ...a }, s) =>
      (0, r.jsx)('div', { ref: s, className: (0, d.cn)('p-5 pt-0', e), ...a })
    );
    i.displayName = 'CardContent';
    let c = a.forwardRef(({ className: e, ...a }, s) =>
      (0, r.jsx)('div', {
        ref: s,
        className: (0, d.cn)('flex items-center p-5 pt-0', e),
        ...a
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
        l,
        'CardFooter',
        0,
        c,
        'CardHeader',
        0,
        t,
        'CardTitle',
        0,
        o
      ]);
  }
]);
