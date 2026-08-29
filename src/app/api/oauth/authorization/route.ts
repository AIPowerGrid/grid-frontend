// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import { NextRequest } from 'next/server';
import {
  oauthAuthorizationViewSchema,
  oauthDecisionSchema,
  oauthRedirectSchema,
  oauthRequestSchema
} from '@/lib/oauth-authorization';
import { callOAuth, oauthError, oauthForm } from './_shared';

export async function GET(req: NextRequest) {
  const request = oauthRequestSchema.safeParse(
    req.nextUrl.searchParams.get('request')
  );
  if (!request.success) return oauthError(400);
  return callOAuth(
    req,
    '/v1/oauth/authorization/inspect',
    oauthAuthorizationViewSchema,
    { request: request.data }
  );
}

export async function POST(req: NextRequest) {
  const form = await oauthForm(req, oauthDecisionSchema);
  if ('error' in form) return form.error;
  return callOAuth(
    req,
    '/v1/oauth/authorization/decision',
    oauthRedirectSchema,
    form.data
  );
}
