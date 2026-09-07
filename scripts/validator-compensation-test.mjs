// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import ts from 'typescript';

const source = await readFile(
  new URL('../src/lib/validator-compensation.ts', import.meta.url),
  'utf8'
);
const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.CommonJS
  }
});
const exports = {};
new Function('exports', 'require', outputText)(
  exports,
  createRequire(import.meta.url)
);
const {
  compensationViewSchema,
  compensationConsentSchema,
  compensationMessage,
  compensationAmount,
  compensationApproveSchema
} = exports;
const proof = {
  schema: 'aipg.validator.compensation.recipient.v1',
  audience: 'https://api.aipowergrid.io',
  campaign_id: 'pilot-test',
  contract_hash: 'a'.repeat(64),
  allocation_hash: 'b'.repeat(64),
  operator_group_id: 'opg_testoperator',
  account_id: '00000000-0000-4000-8000-000000000123',
  validator_id: `val_${'1'.repeat(32)}`,
  signing_wallet: `0x${'2'.repeat(40)}`,
  chain_id: 8453,
  token_address: '0xa1c0decafe3e9bf06a5f29b7015cd373a9854608',
  asset: 'AIPG',
  decimals: 18,
  amount_atomic: '100000000000000000001',
  recipient: `0x${'3'.repeat(40)}`,
  issued_at: '2026-09-07T12:00:00+00:00',
  expires_at: '2026-09-08T12:00:00+00:00'
};
const id = `vpc_${'c'.repeat(64)}`;
function view(p = proof) {
  return {
    schema: 'aipg.validator.compensation.operator.v1',
    request_id: id,
    allocation_hash: proof.allocation_hash,
    status: 'awaiting_wallet',
    payment_authorized: false,
    expires_at: proof.expires_at,
    approval_url: `https://console.aipowergrid.io/dashboard/validator-payout/${id}`,
    consent: p,
    ...compensationMessage(p)
  };
}
test('exact Python-compatible consent and base-unit precision', () => {
  assert.equal(
    compensationAmount(proof.amount_atomic),
    '100.000000000000000001'
  );
  assert.equal(compensationAmount('1'), '0.000000000000000001');
  assert.equal(compensationAmount('1000000000000000000'), '1');
  const python = spawnSync(
    process.env.TEST_PYTHON || 'python3',
    [
      '-c',
      'import sys,json,hashlib; p=json.load(sys.stdin); print(json.dumps({"compact":json.dumps(p,sort_keys=True,separators=(",",":"),allow_nan=False),"pretty":json.dumps(p,sort_keys=True,indent=2,allow_nan=False)}))'
    ],
    { input: JSON.stringify(proof), encoding: 'utf8' }
  );
  assert.equal(python.status, 0, python.stderr);
  const canonical = JSON.parse(python.stdout),
    built = compensationMessage(proof);
  assert.equal(
    built.review_hash,
    createHash('sha256').update(canonical.compact).digest('hex')
  );
  assert.ok(built.message.endsWith('\n\n' + canonical.pretty));
  assert.ok(compensationViewSchema.safeParse(view()).success);
});
test('wrong authority, asset, recipient, shape and expiry contract rejected', () => {
  for (const [key, value] of [
    ['chain_id', 1],
    ['decimals', 6],
    ['asset', 'USDC'],
    ['audience', 'https://evil.test'],
    ['token_address', proof.recipient],
    ['recipient', proof.signing_wallet],
    ['recipient', proof.token_address],
    ['recipient', '0x' + '0'.repeat(40)],
    ['amount_atomic', '0'],
    ['amount_atomic', '01'],
    ['amount_atomic', (BigInt(1) << BigInt(256)).toString()],
    ['issued_at', proof.expires_at],
    ['expires_at', '2026-09-09T12:00:00+00:00'],
    ['operator_group_id', '秘密'],
    ['extra', 'hidden']
  ]) {
    assert.equal(
      compensationConsentSchema.safeParse({ ...proof, [key]: value }).success,
      false,
      key
    );
  }
});
test('response binding and signing-text substitution fail closed; credentials stripped', () => {
  for (const patch of [
    { message: 'sign me' },
    { review_hash: 'd'.repeat(64) },
    { allocation_hash: 'd'.repeat(64) },
    { approval_url: 'https://evil.test' },
    { expires_at: '2026-09-08T11:00:00+00:00' },
    { payment_authorized: true }
  ]) {
    assert.equal(
      compensationViewSchema.safeParse({ ...view(), ...patch }).success,
      false
    );
  }
  const result = compensationViewSchema.parse({
    ...view(),
    api_key: 'never expose',
    signature: 'never expose'
  });
  assert.equal('api_key' in result, false);
  assert.equal('signature' in result, false);
  const pending = view();
  delete pending.consent;
  delete pending.message;
  delete pending.review_hash;
  assert.ok(compensationViewSchema.safeParse(pending).success);
  assert.equal(
    compensationViewSchema.safeParse({ ...pending, status: 'awaiting_node' })
      .success,
    false
  );
  assert.ok(
    compensationViewSchema.safeParse({
      schema: pending.schema,
      request_id: id,
      allocation_hash: proof.allocation_hash,
      status: 'recipient_bound',
      recipient: proof.recipient,
      payment_authorized: false
    }).success
  );
});
test('approval accepts bounded contract-wallet signatures, never arbitrary messages', () => {
  const value = {
    review_hash: 'a'.repeat(64),
    signature: '0x' + 'ab'.repeat(8192)
  };
  assert.ok(compensationApproveSchema.safeParse(value).success);
  for (const patch of [
    { signature: value.signature + 'ab' },
    { signature: '0xabx' },
    { message: 'sign me' }
  ])
    assert.equal(
      compensationApproveSchema.safeParse({ ...value, ...patch }).success,
      false
    );
});
