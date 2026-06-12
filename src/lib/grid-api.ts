/**
 * Shared client for the Grid v1 API (system-core v2 backend).
 *
 * All dashboard data flows through these endpoints. Stats are aggregated
 * from the on-chain-settled ledger server-side, so what the dashboard shows
 * is exactly what settlement pays.
 */

export const GRID_API_BASE =
  process.env.GRID_API_BASE ?? 'https://api.aipowergrid.io';

export async function gridFetch<T = unknown>(
  path: string,
  init?: RequestInit & { next?: { revalidate?: number } }
): Promise<T> {
  const res = await fetch(`${GRID_API_BASE}${path}`, {
    next: { revalidate: 60 },
    ...init
  });
  if (!res.ok) {
    throw new Error(`Grid API ${path} -> ${res.status}`);
  }
  return res.json() as Promise<T>;
}

// ── Response shapes (v1) ──

export interface GridWorker {
  id: string;
  name: string;
  models: string[];
  job_types: string[];
  online: boolean;
}

export interface GridModelStatus {
  name: string;
  count: number;
  type: string;
}

export interface GridTotals {
  [period: string]: {
    [jobType: string]: { jobs: number; den: number; units: number };
  };
}
