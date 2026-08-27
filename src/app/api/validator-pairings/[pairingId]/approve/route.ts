// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import { NextRequest } from 'next/server';
import { z } from 'zod';
import { pairingIdSchema, pairingViewSchema } from '@/lib/validator-pairing';
import { callPairing, pairingError, pairingForm } from '../../_shared';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ pairingId: string }> }
) {
  const { pairingId } = await params;
  if (!pairingIdSchema.safeParse(pairingId).success) return pairingError(404);
  const form = await pairingForm(req, z.object({}).strict());
  if ('error' in form) return form.error;
  return callPairing(
    req,
    `/v1/account/validator-pairings/${pairingId}/approve`,
    pairingViewSchema.refine((view) => view.pairing_id === pairingId),
    form.data
  );
}
