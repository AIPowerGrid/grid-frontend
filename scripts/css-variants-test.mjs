// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import assert from 'node:assert/strict';
import test from 'node:test';
import postcss from 'postcss';
import tailwind from 'tailwindcss';

test('Tailwind preserves interactive group, peer and data variants', async () => {
  const classes = [
    'group-hover:bg-red-500',
    'peer-hover/menu-button:text-red-500',
    'group-data-[state=open]/collapsible:rotate-90',
    'group-data-[collapsible=icon]:overflow-hidden'
  ];
  const result = await postcss([
    tailwind({ content: [{ raw: `<div class="${classes.join(' ')}"></div>` }] })
  ]).process('@tailwind utilities;', { from: undefined });
  const rules = [];
  result.root.walkRules((rule) => rules.push(rule));
  assert.equal(
    rules.length,
    4,
    'A successful build must not silently drop variants'
  );
  for (const [selector, property, value] of [
    [
      '.group:hover ',
      'background-color',
      'rgb(239 68 68 / var(--tw-bg-opacity, 1))'
    ],
    [
      '.peer\\/menu-button:hover ~ ',
      'color',
      'rgb(239 68 68 / var(--tw-text-opacity, 1))'
    ],
    ['.group\\/collapsible[data-state="open"] ', '--tw-rotate', '90deg'],
    ['.group[data-collapsible="icon"] ', 'overflow', 'hidden']
  ]) {
    const rule = rules.find((entry) => entry.selector.startsWith(selector));
    assert.ok(rule, `Missing selector ${selector}`);
    assert.ok(
      rule.nodes.some(
        (entry) => entry.prop === property && entry.value === value
      )
    );
  }
});
