// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later

import { NextRequest } from 'next/server';
import { callPairing } from '@/app/api/validator-pairings/_shared';
import { linkedValidatorsSchema } from '@/lib/validator-pairing';

export async function GET(req: NextRequest) {
  return callPairing(req, '/v1/account/validators', linkedValidatorsSchema);
}
