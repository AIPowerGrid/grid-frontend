// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import { NextRequest } from 'next/server';
import { pairingIdSchema, pairingViewSchema } from '@/lib/validator-pairing';
import { callPairing, pairingError } from '../_shared';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ pairingId: string }> }
) {
  const { pairingId } = await params;
  if (!pairingIdSchema.safeParse(pairingId).success) return pairingError(404);
  return callPairing(
    req,
    `/v1/account/validator-pairings/${pairingId}`,
    pairingViewSchema.refine((view) => view.pairing_id === pairingId)
  );
}
