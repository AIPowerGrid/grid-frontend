// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import { z } from 'zod';

export const oauthRequestSchema = z
  .string()
  .regex(/^oauth_req_[A-Za-z0-9_-]{43}$/);

export const oauthScopeSchema = z.enum(['account.read', 'inference.submit']);

export const oauthAuthorizationViewSchema = z.object({
  client_id: z.string().min(1).max(96),
  client_name: z.string().min(1).max(120),
  redirect_host: z.string().min(1).max(253),
  resource: z.string().url().max(512),
  scopes: z.array(oauthScopeSchema).min(1).max(2),
  expires_in: z.number().int().min(0).max(600)
});

export const oauthDecisionSchema = z
  .object({
    request: oauthRequestSchema,
    approve: z.boolean()
  })
  .strict();

export const oauthRedirectSchema = z.object({
  redirect_to: z
    .string()
    .url()
    .max(4096)
    .refine((value) => {
      const url = new URL(value);
      if (url.username || url.password || url.hash) return false;
      if (url.protocol === 'https:') return true;
      return (
        url.protocol === 'http:' &&
        ['127.0.0.1', '[::1]', 'localhost'].includes(url.hostname)
      );
    })
});

export type OAuthAuthorizationView = z.infer<
  typeof oauthAuthorizationViewSchema
>;

const messages: Record<number, string> = {
  400: 'This authorization request is malformed.',
  401: 'Sign in to review this authorization request.',
  403: 'Confirm your account with Google or a linked wallet to continue.',
  404: 'This authorization request was not found.',
  409: 'This authorization request is already closed.',
  410: 'This authorization request has expired.',
  413: 'This authorization request is too large.',
  415: 'This authorization request has an unsupported format.',
  429: 'Too many authorization attempts. Wait a moment and retry.',
  503: 'Agent authorization is not available yet.'
};

export function oauthErrorMessage(status: number): string {
  return messages[status] ?? 'The Grid could not complete this authorization.';
}

export class OAuthRequestError extends Error {
  constructor(public readonly status: number) {
    super(oauthErrorMessage(status));
  }
}

export async function readOAuthResponse<T>(
  response: Response,
  schema: z.ZodType<T>
): Promise<T> {
  if (!response.ok) throw new OAuthRequestError(response.status);
  const parsed = schema.safeParse(await response.json());
  if (!parsed.success) throw new OAuthRequestError(502);
  return parsed.data;
}
