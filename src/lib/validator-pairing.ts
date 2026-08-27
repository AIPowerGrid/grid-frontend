// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import { z } from 'zod';

export const pairingIdSchema = z.string().regex(/^vpa_[0-9a-f]{64}$/);
export const validatorIdSchema = z.string().regex(/^val_[0-9a-f]{32}$/);
const walletSchema = z.string().regex(/^0x[0-9a-fA-F]{40}$/);

// Strip the node-only signing payload and any future credentials at the BFF.
export const pairingViewSchema = z
  .object({
    pairing_id: pairingIdSchema,
    validator_id: validatorIdSchema,
    signing_wallet: walletSchema,
    status: z.enum(['pending', 'approved', 'linked', 'expired', 'cancelled']),
    expires_at: z.number().int().positive(),
    economic_effect: z.literal('none'),
    comparison_code: z
      .string()
      .regex(/^[0-9A-F]{8}$/)
      .optional()
  })
  .refine(
    (view) =>
      !['approved', 'linked'].includes(view.status) || !!view.comparison_code,
    'Approved pairing requires a comparison code'
  );

export const linkedValidatorsSchema = z.object({
  economic_effect: z.literal('none'),
  nodes: z
    .array(
      z.object({
        validator_id: validatorIdSchema,
        pairing_id: pairingIdSchema,
        signing_wallet: walletSchema,
        status: z.string().min(1).max(64),
        software_version: z.string().max(128).nullable(),
        last_heartbeat: z.string().datetime({ offset: true }).nullable(),
        linked_at: z.string().datetime({ offset: true })
      })
    )
    .max(100)
});

export const unlinkValidatorSchema = z
  .object({ pairing_id: pairingIdSchema })
  .strict();
export type PairingView = z.infer<typeof pairingViewSchema>;
export type LinkedValidator = z.infer<
  typeof linkedValidatorsSchema
>['nodes'][number];

export class PairingRequestError extends Error {
  constructor(public readonly status: number) {
    super(pairingErrorMessage(status));
    this.name = 'PairingRequestError';
  }
}

export function pairingErrorMessage(status: number): string {
  switch (status) {
    case 401:
    case 403:
      return 'Confirm your account with Google or a wallet, then retry.';
    case 404:
      return 'This association request was not found. Check your linked nodes or start again in the local app.';
    case 409:
      return 'This request expired, changed, or was approved by another account. Check your linked nodes before starting again.';
    case 429:
      return 'Too many requests. Wait a minute, then retry.';
    case 503:
      return 'Account linking is unavailable. Your validator can keep running without it.';
    default:
      return 'Could not reach account linking. Retry without creating a new node.';
  }
}

export async function readPairingResponse<T>(
  response: Response,
  schema: z.ZodType<T>
): Promise<T> {
  if (!response.ok) throw new PairingRequestError(response.status);
  const parsed = schema.safeParse(await response.json());
  if (!parsed.success) throw new PairingRequestError(502);
  return parsed.data;
}
