'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { BrowserProvider, Contract, ethers } from 'ethers';
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Coins,
  ExternalLink,
  Loader2,
  RefreshCw,
  Wallet
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ERC20_ABI = [
  'function transfer(address to, uint256 amount) returns (bool)'
];
const BASE_CHAIN_HEX = '0x2105';
const BASESCAN = 'https://basescan.org';

interface FundingAsset {
  asset: 'USDC' | 'AIPG' | 'ETH';
  enabled: boolean;
  treasury: string | null;
  token_address: string | null;
  decimals: number;
  price_micro?: number | null;
  price_epoch?: string | null;
  price_valid_until?: string | null;
  haircut_bps?: number;
  minimum_credit_micro?: number;
  maximum_credit_micro?: number;
  status: string;
}

interface FundingConfig {
  chain: { id: number; name: string };
  linked_wallet: string | null;
  terms: {
    unit: string;
    credits_transferable: boolean;
    credits_withdrawable: boolean;
    refund_policy: string;
  };
  assets: FundingAsset[];
}

interface DepositReceipt {
  deposit_id: number;
  asset: string;
  amount: string;
  credited_usd: number;
  tx_hash: string;
  block_number: number;
  status: string;
  price_source: string;
  created: string | null;
}

interface CreditsResponse {
  paid?: { balance_usd?: number };
  charging_enabled?: boolean;
}

function errorMessage(value: unknown, fallback: string) {
  if (value instanceof Error) return value.message;
  return fallback;
}

function shortAddress(value: string) {
  return `${value.slice(0, 6)}…${value.slice(-4)}`;
}

function formatUsd(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 4
  }).format(value);
}

function ethereumProvider() {
  const provider = (window as Window & { ethereum?: any }).ethereum;
  if (!provider?.request) {
    throw new Error('Install or open an Ethereum wallet to continue.');
  }
  return provider;
}

async function switchToBase(provider: any) {
  try {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: BASE_CHAIN_HEX }]
    });
  } catch (reason: any) {
    if (reason?.code !== 4902) throw reason;
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: BASE_CHAIN_HEX,
          chainName: 'Base',
          nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
          rpcUrls: ['https://mainnet.base.org'],
          blockExplorerUrls: [BASESCAN]
        }
      ]
    });
  }
}

export default function FundingView() {
  const [config, setConfig] = useState<FundingConfig | null>(null);
  const [credits, setCredits] = useState<CreditsResponse | null>(null);
  const [deposits, setDeposits] = useState<DepositReceipt[]>([]);
  const [assetName, setAssetName] = useState<FundingAsset['asset']>('USDC');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [pendingHash, setPendingHash] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    const [configResponse, creditsResponse, historyResponse] =
      await Promise.all([
        fetch('/api/account/deposits/config', { cache: 'no-store' }),
        fetch('/api/account/credits', { cache: 'no-store' }),
        fetch('/api/account/deposits', { cache: 'no-store' })
      ]);
    if (!configResponse.ok) {
      const body = await configResponse.json().catch(() => ({}));
      throw new Error(body.detail ?? body.error ?? 'Could not load funding');
    }
    setConfig(await configResponse.json());
    setCredits(creditsResponse.ok ? await creditsResponse.json() : null);
    if (historyResponse.ok) {
      const history = await historyResponse.json();
      setDeposits(history.deposits ?? []);
    }
  }, []);

  useEffect(() => {
    void refresh()
      .catch((reason) =>
        setError(errorMessage(reason, 'Could not load funding'))
      )
      .finally(() => setLoading(false));
  }, [refresh]);

  const assets = config?.assets ?? [];
  const selected =
    assets.find((candidate) => candidate.asset === assetName) ?? null;

  const estimatedCredit = useMemo(() => {
    if (!selected || !amount || !selected.price_micro) return null;
    try {
      const raw = ethers.parseUnits(amount, selected.decimals);
      const scale = ethers.parseUnits('1', selected.decimals);
      const market = (raw * BigInt(selected.price_micro)) / scale;
      const haircut = BigInt(10_000 - (selected.haircut_bps ?? 0));
      return Number((market * haircut) / BigInt(10_000)) / 1_000_000;
    } catch {
      return null;
    }
  }, [amount, selected]);

  async function claim(asset: string, txHash: string) {
    for (let attempt = 0; attempt < 20; attempt += 1) {
      const response = await fetch('/api/account/deposits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ asset, tx_hash: txHash })
      });
      const body = await response.json().catch(() => ({}));
      if (response.ok) return body;
      if (response.status !== 425) {
        throw new Error(
          body.detail ?? body.error ?? 'The deposit could not be credited.'
        );
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
    throw new Error(
      'The transaction is still confirming. Use refresh to claim it shortly.'
    );
  }

  async function fund() {
    if (!selected?.enabled || !selected.treasury) return;
    if (!config?.linked_wallet) {
      setError('Link a wallet to this Grid account before funding it.');
      return;
    }
    setSubmitting(true);
    setError(null);
    setSuccess(null);
    setPendingHash(null);
    try {
      const injected = ethereumProvider();
      await injected.request({ method: 'eth_requestAccounts' });
      await switchToBase(injected);
      const provider = new BrowserProvider(injected);
      const signer = await provider.getSigner();
      const signerAddress = (await signer.getAddress()).toLowerCase();
      if (signerAddress !== config.linked_wallet.toLowerCase()) {
        throw new Error(
          `Use the linked wallet ${shortAddress(config.linked_wallet)} to fund this account.`
        );
      }
      const raw = ethers.parseUnits(amount, selected.decimals);
      if (raw <= BigInt(0))
        throw new Error('Enter an amount greater than zero.');
      if (selected.price_micro) {
        const scale = ethers.parseUnits('1', selected.decimals);
        const market = (raw * BigInt(selected.price_micro)) / scale;
        const creditMicro =
          (market * BigInt(10_000 - (selected.haircut_bps ?? 0))) /
          BigInt(10_000);
        if (
          selected.minimum_credit_micro &&
          creditMicro < BigInt(selected.minimum_credit_micro)
        ) {
          throw new Error(
            `The minimum credited amount is ${formatUsd(selected.minimum_credit_micro / 1_000_000)}.`
          );
        }
        if (
          selected.maximum_credit_micro &&
          creditMicro > BigInt(selected.maximum_credit_micro)
        ) {
          throw new Error(
            `The maximum credited amount per transaction is ${formatUsd(selected.maximum_credit_micro / 1_000_000)}.`
          );
        }
      }

      const transaction =
        selected.asset === 'ETH'
          ? await signer.sendTransaction({
              to: selected.treasury,
              value: raw
            })
          : await new Contract(
              selected.token_address!,
              ERC20_ABI,
              signer
            ).transfer(selected.treasury, raw);
      setPendingHash(transaction.hash);
      await transaction.wait(1);
      const receipt = await claim(selected.asset, transaction.hash);
      setSuccess(
        `${receipt.amount} ${selected.asset} added ${formatUsd(receipt.amount_usd)} to your balance.`
      );
      setAmount('');
      await refresh();
    } catch (reason) {
      setError(errorMessage(reason, 'Funding failed.'));
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className='flex min-h-[18rem] items-center justify-center'>
        <Loader2 className='h-5 w-5 animate-spin text-muted-foreground' />
      </div>
    );
  }

  return (
    <div className='mx-auto w-full max-w-5xl space-y-6'>
      <header className='flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>Credits & Funding</h1>
          <p className='mt-2 text-muted-foreground'>
            Fund one balance for text, image, video, audio, and API usage.
          </p>
        </div>
        <div className='text-left sm:text-right'>
          <p className='text-xs uppercase text-muted-foreground'>
            Paid balance
          </p>
          <p className='text-3xl font-semibold tabular-nums'>
            {formatUsd(Number(credits?.paid?.balance_usd ?? 0))}
          </p>
        </div>
      </header>

      {!config?.linked_wallet && (
        <Alert>
          <Wallet className='h-4 w-4' />
          <AlertTitle>Link a Base wallet</AlertTitle>
          <AlertDescription className='flex flex-wrap items-center gap-3'>
            Funding transactions must come from the wallet linked to this
            account.
            <Button asChild size='sm' variant='outline'>
              <Link href='/dashboard/settings'>Open settings</Link>
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant='destructive'>
          <AlertCircle className='h-4 w-4' />
          <AlertTitle>Funding not completed</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert>
          <CheckCircle2 className='h-4 w-4' />
          <AlertTitle>Credits added</AlertTitle>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

      <div className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]'>
        <Card>
          <CardHeader className='space-y-4'>
            <CardTitle className='flex items-center gap-2 text-lg'>
              <CircleDollarSign className='h-5 w-5' />
              Add credits
            </CardTitle>
            <Tabs
              value={assetName}
              onValueChange={(value) => {
                setAssetName(value as FundingAsset['asset']);
                setAmount('');
                setError(null);
              }}
            >
              <TabsList className='grid h-auto w-full grid-cols-3'>
                {assets.map((asset) => (
                  <TabsTrigger
                    key={asset.asset}
                    value={asset.asset}
                    className='gap-2'
                  >
                    {asset.asset === 'USDC' ? (
                      <CircleDollarSign className='h-4 w-4' />
                    ) : asset.asset === 'AIPG' ? (
                      <Coins className='h-4 w-4' />
                    ) : (
                      <ArrowUpRight className='h-4 w-4' />
                    )}
                    {asset.asset}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className='space-y-5'>
            {selected?.enabled ? (
              <>
                <div className='space-y-2'>
                  <Label htmlFor='funding-amount'>Amount</Label>
                  <div className='relative'>
                    <Input
                      id='funding-amount'
                      inputMode='decimal'
                      autoComplete='off'
                      placeholder='0.00'
                      value={amount}
                      onChange={(event) => setAmount(event.target.value)}
                      className='pr-20 text-lg tabular-nums'
                    />
                    <span className='absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium'>
                      {selected.asset}
                    </span>
                  </div>
                </div>

                <div className='grid gap-3 border-y py-4 text-sm sm:grid-cols-2'>
                  <div>
                    <p className='text-muted-foreground'>Estimated credit</p>
                    <p className='font-medium tabular-nums'>
                      {estimatedCredit === null
                        ? '—'
                        : formatUsd(estimatedCredit)}
                    </p>
                  </div>
                  <div>
                    <p className='text-muted-foreground'>Destination</p>
                    <a
                      href={`${BASESCAN}/address/${selected.treasury}`}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center gap-1 font-mono text-xs hover:underline'
                    >
                      {shortAddress(selected.treasury!)}
                      <ExternalLink className='h-3 w-3' />
                    </a>
                  </div>
                  {selected.asset === 'AIPG' && (
                    <>
                      <div>
                        <p className='text-muted-foreground'>Price epoch</p>
                        <p className='font-medium'>
                          {selected.price_epoch ?? 'Unavailable'}
                        </p>
                      </div>
                      <div>
                        <p className='text-muted-foreground'>
                          Safety adjustment
                        </p>
                        <p className='font-medium'>
                          {((selected.haircut_bps ?? 0) / 100).toFixed(2)}%
                        </p>
                      </div>
                    </>
                  )}
                  {selected.minimum_credit_micro && (
                    <div>
                      <p className='text-muted-foreground'>Minimum credit</p>
                      <p className='font-medium tabular-nums'>
                        {formatUsd(selected.minimum_credit_micro / 1_000_000)}
                      </p>
                    </div>
                  )}
                  {selected.maximum_credit_micro && (
                    <div>
                      <p className='text-muted-foreground'>Per-transfer cap</p>
                      <p className='font-medium tabular-nums'>
                        {formatUsd(selected.maximum_credit_micro / 1_000_000)}
                      </p>
                    </div>
                  )}
                </div>

                <Button
                  type='button'
                  className='w-full gap-2'
                  disabled={submitting || !amount || !config?.linked_wallet}
                  onClick={fund}
                >
                  {submitting ? (
                    <Loader2 className='h-4 w-4 animate-spin' />
                  ) : (
                    <Wallet className='h-4 w-4' />
                  )}
                  {submitting
                    ? pendingHash
                      ? 'Confirming on Base'
                      : 'Open wallet'
                    : `Pay with ${selected.asset}`}
                </Button>
                {pendingHash && (
                  <a
                    href={`${BASESCAN}/tx/${pendingHash}`}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center justify-center gap-1 text-xs text-muted-foreground hover:underline'
                  >
                    View transaction <ExternalLink className='h-3 w-3' />
                  </a>
                )}
              </>
            ) : (
              <div className='flex min-h-48 flex-col items-center justify-center gap-3 text-center'>
                <Clock3 className='h-7 w-7 text-muted-foreground' />
                <div>
                  <p className='font-medium'>
                    {selected?.asset === 'ETH'
                      ? 'ETH conversion is not live'
                      : `${selected?.asset ?? 'This asset'} funding is unavailable`}
                  </p>
                  <p className='mt-1 max-w-sm text-sm text-muted-foreground'>
                    {selected?.asset === 'ETH'
                      ? 'The production rail will convert ETH to USDC before crediting your account.'
                      : 'This funding option will return when a fresh bounded price is available.'}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <aside className='space-y-4 border-l-0 lg:border-l lg:pl-6'>
          <div>
            <p className='text-sm font-medium'>Linked wallet</p>
            {config?.linked_wallet ? (
              <a
                href={`${BASESCAN}/address/${config.linked_wallet}`}
                target='_blank'
                rel='noreferrer'
                className='mt-1 inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground hover:underline'
              >
                {shortAddress(config.linked_wallet)}
                <ExternalLink className='h-3 w-3' />
              </a>
            ) : (
              <p className='mt-1 text-xs text-muted-foreground'>Not linked</p>
            )}
          </div>
          <div>
            <p className='text-sm font-medium'>Network</p>
            <p className='mt-1 text-sm text-muted-foreground'>
              Base · Chain {config?.chain.id ?? 8453}
            </p>
          </div>
          <div>
            <p className='text-sm font-medium'>Credit terms</p>
            <p className='mt-1 text-sm text-muted-foreground'>
              Service credits do not expire, transfer, or withdraw. Reviewed
              refunds return to the source wallet.
            </p>
          </div>
          {!credits?.charging_enabled && (
            <Badge variant='secondary'>Metering preview</Badge>
          )}
        </aside>
      </div>

      <section className='space-y-3'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-lg font-semibold'>Funding history</h2>
            <p className='text-sm text-muted-foreground'>
              Credited receipts recorded against Base transactions.
            </p>
          </div>
          <Button
            type='button'
            variant='ghost'
            size='icon'
            title='Refresh funding history'
            onClick={() => void refresh()}
          >
            <RefreshCw className='h-4 w-4' />
          </Button>
        </div>

        <div className='overflow-hidden rounded-md border'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Credit</TableHead>
                <TableHead>When</TableHead>
                <TableHead className='text-right'>Transaction</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deposits.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className='h-24 text-center text-muted-foreground'
                  >
                    No funded credits yet.
                  </TableCell>
                </TableRow>
              ) : (
                deposits.map((deposit) => (
                  <TableRow key={deposit.deposit_id}>
                    <TableCell>
                      <Badge variant='outline'>{deposit.asset}</Badge>
                    </TableCell>
                    <TableCell className='font-mono text-xs'>
                      {deposit.amount}
                    </TableCell>
                    <TableCell className='tabular-nums'>
                      {formatUsd(deposit.credited_usd)}
                    </TableCell>
                    <TableCell className='text-muted-foreground'>
                      {deposit.created
                        ? new Date(deposit.created).toLocaleString()
                        : '—'}
                    </TableCell>
                    <TableCell className='text-right'>
                      <Button asChild variant='ghost' size='icon'>
                        <a
                          href={`${BASESCAN}/tx/${deposit.tx_hash}`}
                          target='_blank'
                          rel='noreferrer'
                          title='View transaction on BaseScan'
                        >
                          <ExternalLink className='h-4 w-4' />
                        </a>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}
