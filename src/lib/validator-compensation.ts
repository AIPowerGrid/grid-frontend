// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import { sha256, toUtf8Bytes } from 'ethers';
import { z } from 'zod';

export const compensationIdSchema = z.string().regex(/^vpc_[a-f0-9]{64}$/);
const hash = z.string().regex(/^[a-f0-9]{64}$/);
export const recipientSchema = z
  .string()
  .regex(/^0x[a-f0-9]{40}$/)
  .refine((value) => BigInt(value) !== BigInt(0));
const time = z.string().max(40).datetime({ offset: true });
const atomic = z
  .string()
  .regex(/^[1-9][0-9]{0,77}$/)
  .refine((value) => BigInt(value) < BigInt('0x1' + '0'.repeat(64)));

export const compensationConsentSchema = z
  .object({
    schema: z.literal('aipg.validator.compensation.recipient.v1'),
    audience: z.literal('https://api.aipowergrid.io'),
    campaign_id: z.string().regex(/^[a-z0-9][a-z0-9_-]{2,63}$/),
    contract_hash: hash,
    allocation_hash: hash,
    operator_group_id: z.string().regex(/^opg_[A-Za-z0-9_-]{8,88}$/),
    account_id: z.string().uuid(),
    validator_id: z.string().regex(/^val_[a-f0-9]{32}$/),
    signing_wallet: recipientSchema,
    chain_id: z.literal(8453),
    token_address: z.literal('0xa1c0decafe3e9bf06a5f29b7015cd373a9854608'),
    asset: z.literal('AIPG'),
    decimals: z.literal(18),
    amount_atomic: atomic,
    recipient: recipientSchema,
    issued_at: time,
    expires_at: time
  })
  .strict()
  .refine((p) => {
    const duration = Date.parse(p.expires_at) - Date.parse(p.issued_at);
    return (
      duration > 0 &&
      duration <= 86_400_000 &&
      p.recipient !== p.signing_wallet &&
      p.recipient !== p.token_address
    );
  });
export type CompensationConsent = z.infer<typeof compensationConsentSchema>;

export function compensationAmount(value: string): string {
  const units = BigInt(value),
    scale = BigInt('1000000000000000000');
  return `${units / scale}.${(units % scale).toString().padStart(18, '0')}`
    .replace(/0+$/, '')
    .replace(/\.$/, '');
}

// All v1 strings are ASCII and fields scalar, matching Core's sorted Python JSON.
export function compensationMessage(proof: CompensationConsent) {
  const sorted = Object.fromEntries(
    Object.entries(proof).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
  );
  return {
    review_hash: sha256(toUtf8Bytes(JSON.stringify(sorted))).slice(2),
    message:
      'AI Power Grid validator compensation payout consent\n' +
      `Reward: ${compensationAmount(proof.amount_atomic)} AIPG on Base (chain 8453)\n` +
      `Destination: ${proof.recipient}\n` +
      'Authorize only the exact earned allocation below to this Base recipient.\n' +
      'This is not a token approval, login, or authorization for other rewards.\n\n' +
      JSON.stringify(sorted, null, 2)
  };
}

export const compensationViewSchema = z
  .object({
    schema: z.literal('aipg.validator.compensation.operator.v1'),
    request_id: compensationIdSchema,
    allocation_hash: hash,
    status: z.enum([
      'awaiting_wallet',
      'awaiting_node',
      'review_required',
      'cancelled',
      'expired',
      'recipient_bound'
    ]),
    payment_authorized: z.literal(false),
    expires_at: time.optional(),
    approval_url: z.string().max(200).optional(),
    recipient: recipientSchema.optional(),
    consent: compensationConsentSchema.optional(),
    message: z.string().max(5000).optional(),
    review_hash: hash.optional()
  })
  .superRefine((view, ctx) => {
    const invalid = () =>
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid compensation contract'
      });
    if (view.status === 'recipient_bound') {
      if (!view.recipient || view.consent || view.message || view.review_hash)
        invalid();
      return;
    }
    if (
      !view.expires_at ||
      view.approval_url !==
        `https://console.aipowergrid.io/dashboard/validator-payout/${view.request_id}`
    )
      invalid();
    if (view.consent) {
      const rebuilt = compensationMessage(view.consent);
      if (
        view.consent.allocation_hash !== view.allocation_hash ||
        Date.parse(view.consent.expires_at) !==
          Date.parse(view.expires_at ?? '') ||
        view.message !== rebuilt.message ||
        view.review_hash !== rebuilt.review_hash
      )
        invalid();
    } else if (
      view.message ||
      view.review_hash ||
      ['awaiting_node', 'review_required'].includes(view.status)
    )
      invalid();
  });
export type CompensationView = z.infer<typeof compensationViewSchema>;
export const compensationPrepareSchema = z
  .object({ recipient: recipientSchema })
  .strict();
export const compensationApproveSchema = z
  .object({
    review_hash: hash,
    signature: z
      .string()
      .min(4)
      .max(16386)
      .regex(/^0x(?:[a-fA-F0-9]{2})+$/)
  })
  .strict();

export class CompensationError extends Error {
  constructor(public readonly status: number) {
    super(compensationErrorMessage(status));
  }
}
export function compensationErrorMessage(status: number) {
  if (status === 401 || status === 403)
    return 'Confirm the linked AIPG account with Google or your login wallet, then retry.';
  if (status === 404)
    return 'Payout request not found for this account. Open the request from your validator app.';
  if (status === 409)
    return 'This request changed or expired. Refresh before approving anything.';
  if (status === 429) return 'Too many requests. Wait a minute, then retry.';
  if (status === 503)
    return 'Validator compensation is currently unavailable. Your node can keep running.';
  return 'Could not verify this payout request. Refresh to check its status; no payment is sent by this page.';
}
export async function readCompensation(response: Response, requestId: string) {
  if (!response.ok) throw new CompensationError(response.status);
  const parsed = compensationViewSchema.safeParse(await response.json());
  if (!parsed.success || parsed.data.request_id !== requestId)
    throw new CompensationError(502);
  return parsed.data;
}
