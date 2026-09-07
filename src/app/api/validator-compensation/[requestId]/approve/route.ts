// SPDX-FileCopyrightText: 2026 AI Power Grid
// SPDX-License-Identifier: AGPL-3.0-or-later
import { NextRequest } from 'next/server';
import { compensationProxy } from '../../_shared';
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ requestId: string }> }
) {
  return compensationProxy(req, (await params).requestId, 'approve');
}
