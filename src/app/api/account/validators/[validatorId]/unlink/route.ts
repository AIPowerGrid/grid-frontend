// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import { NextRequest } from 'next/server';
import { z } from 'zod';
import {
  callPairing,
  pairingError,
  pairingForm
} from '@/app/api/validator-pairings/_shared';
import {
  unlinkValidatorSchema,
  validatorIdSchema
} from '@/lib/validator-pairing';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ validatorId: string }> }
) {
  const { validatorId } = await params;
  if (!validatorIdSchema.safeParse(validatorId).success)
    return pairingError(404);
  const form = await pairingForm(req, unlinkValidatorSchema);
  if ('error' in form) return form.error;
  return callPairing(
    req,
    `/v1/account/validators/${validatorId}/unlink`,
    z.object({ status: z.literal('unlinked') }),
    form.data
  );
}
