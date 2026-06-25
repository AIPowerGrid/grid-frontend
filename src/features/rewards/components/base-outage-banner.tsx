'use client';

import { useEffect, useState } from 'react';

// Public, CORS-enabled, read-only — used ONLY to read block height for a
// liveness check. No API key (never embed a keyed endpoint in client code).
const BASE_RPC = 'https://mainnet.base.org';

async function baseBlock(): Promise<number | null> {
  try {
    const r = await fetch(BASE_RPC, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_blockNumber',
        params: []
      }),
      cache: 'no-store'
    });
    const j = await r.json();
    return j?.result ? parseInt(j.result, 16) : null;
  } catch {
    return null;
  }
}

/**
 * Self-clearing Base-outage notice. Polls block height; if Base isn't advancing
 * (chain stall), shows the banner. The moment blocks resume it hides itself —
 * no redeploy needed to remove. Renders nothing while Base is healthy.
 */
export default function BaseOutageBanner() {
  const [stalled, setStalled] = useState(false);

  useEffect(() => {
    let alive = true;
    async function check() {
      const a = await baseBlock();
      await new Promise((r) => setTimeout(r, 4000)); // Base ~2s blocks → 4s spans ≥1
      const b = await baseBlock();
      if (!alive) return;
      // Two equal heights = not advancing = stalled. Null reads are inconclusive
      // (don't toggle on a flaky request).
      if (a !== null && b !== null) setStalled(a === b);
    }
    check();
    const id = setInterval(check, 30000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  if (!stalled) return null;

  return (
    <div className='rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm'>
      ⚠️{' '}
      <strong className='text-amber-500'>
        Base network outage — payouts temporarily paused.
      </strong>{' '}
      Base mainnet is experiencing a chain stall, so on-chain AIPG payouts are
      paused.{' '}
      <strong>Your earnings are recorded and safe — nothing is lost</strong>;
      pending payouts settle automatically once Base resumes. Live status →{' '}
      <a
        href='https://status.base.org'
        target='_blank'
        rel='noopener noreferrer'
        className='font-medium underline underline-offset-2'
      >
        status.base.org
      </a>
    </div>
  );
}
