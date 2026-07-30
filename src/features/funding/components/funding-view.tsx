'use client';

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Eip1193Provider, WalletProviderOption } from './wallet-providers';
import { watchWalletProviders } from './wallet-providers';

const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function transfer(address to, uint256 amount) returns (bool)'
];
const BASE_CHAIN_HEX = '0x2105';
const BASESCAN = 'https://basescan.org';
const PENDING_DEPOSIT_KEY = 'aipg.pendingDeposit.v1';

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
  account_daily_micro?: number;
  account_daily_used_micro?: number;
  account_daily_remaining_micro?: number;
  network_daily_remaining_micro?: number;
  status: string;
}

interface FundingConfig {
  chain: { id: number; name: string };
  linked_wallet: string | null;
  linked_wallets?: string[];
  terms: {
    unit: string;
    credits_transferable: boolean;
    credits_withdrawable: boolean;
    refund_policy: string;
  };
  assets: FundingAsset[];
}

interface PaymentWalletStatus {
  chainId: number;
  nativeBalance: bigint;
  assetBalance: bigint | null;
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

interface PendingDeposit {
  asset: FundingAsset['asset'];
  txHash: string;
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

function isPendingDeposit(value: unknown): value is PendingDeposit {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Record<string, unknown>;
  return (
    (candidate.asset === 'USDC' ||
      candidate.asset === 'AIPG' ||
      candidate.asset === 'ETH') &&
    typeof candidate.txHash === 'string' &&
    /^0x[0-9a-fA-F]{64}$/.test(candidate.txHash)
  );
}

async function switchToBase(provider: Eip1193Provider) {
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
  const [pendingAsset, setPendingAsset] = useState<
    FundingAsset['asset'] | null
  >(null);
  const [walletDialogOpen, setWalletDialogOpen] = useState(false);
  const [walletProviders, setWalletProviders] = useState<
    WalletProviderOption[]
  >([]);
  const [paymentProvider, setPaymentProvider] =
    useState<WalletProviderOption | null>(null);
  const [paymentWallet, setPaymentWallet] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] =
    useState<PaymentWalletStatus | null>(null);
  const [connectingWallet, setConnectingWallet] = useState<string | null>(null);
  const [checkingWallet, setCheckingWallet] = useState(false);

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

  useEffect(() => watchWalletProviders(setWalletProviders), []);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(PENDING_DEPOSIT_KEY);
      if (!stored) return;
      const pending = JSON.parse(stored);
      if (!isPendingDeposit(pending)) {
        window.localStorage.removeItem(PENDING_DEPOSIT_KEY);
        return;
      }
      setPendingAsset(pending.asset);
      setPendingHash(pending.txHash);
    } catch {
      window.localStorage.removeItem(PENDING_DEPOSIT_KEY);
    }
  }, []);

  const assets = useMemo(
    () => (config?.assets ?? []).filter((asset) => asset.enabled),
    [config]
  );

  useEffect(() => {
    if (
      assets.length > 0 &&
      !assets.some((asset) => asset.asset === assetName)
    ) {
      setAssetName(assets[0].asset);
      setAmount('');
      setError(null);
    }
  }, [assetName, assets]);

  const selected =
    assets.find((candidate) => candidate.asset === assetName) ?? null;

  const estimatedCreditMicro = useMemo(() => {
    if (!selected || !amount || !selected.price_micro) return null;
    try {
      const raw = ethers.parseUnits(amount, selected.decimals);
      const scale = ethers.parseUnits('1', selected.decimals);
      const market = (raw * BigInt(selected.price_micro)) / scale;
      const haircut = BigInt(10_000 - (selected.haircut_bps ?? 0));
      return (market * haircut) / BigInt(10_000);
    } catch {
      return null;
    }
  }, [amount, selected]);

  const estimatedCredit =
    estimatedCreditMicro === null
      ? null
      : Number(estimatedCreditMicro) / 1_000_000;

  const availableTodayMicro = useMemo(() => {
    if (!selected) return null;
    const remaining = [
      selected.account_daily_remaining_micro,
      selected.network_daily_remaining_micro
    ].filter((value): value is number => value !== undefined);
    return remaining.length ? Math.min(...remaining) : null;
  }, [selected]);

  const verifiedWallets = useMemo(() => {
    const values = config?.linked_wallets?.length
      ? config.linked_wallets
      : config?.linked_wallet
        ? [config.linked_wallet]
        : [];
    return values.map((wallet) => wallet.toLowerCase());
  }, [config]);

  const parsedAmount = useMemo(() => {
    if (!selected || !amount) return null;
    try {
      const raw = ethers.parseUnits(amount, selected.decimals);
      return raw > BigInt(0) ? raw : null;
    } catch {
      return null;
    }
  }, [amount, selected]);

  const walletProblem = useMemo(() => {
    if (!paymentWallet || !paymentProvider) return 'Connect a payment wallet.';
    if (!verifiedWallets.includes(paymentWallet.toLowerCase())) {
      return 'Verify this wallet before funding the account.';
    }
    if (!paymentStatus) return 'Checking wallet balances.';
    if (paymentStatus.chainId !== (config?.chain.id ?? 8453)) {
      return 'Switch the payment wallet to Base.';
    }
    if (!parsedAmount) return 'Enter a valid amount.';
    if (
      estimatedCreditMicro !== null &&
      selected?.minimum_credit_micro !== undefined &&
      estimatedCreditMicro < BigInt(selected.minimum_credit_micro)
    ) {
      return `Minimum credit is ${formatUsd(selected.minimum_credit_micro / 1_000_000)}.`;
    }
    if (
      estimatedCreditMicro !== null &&
      selected?.maximum_credit_micro !== undefined &&
      estimatedCreditMicro > BigInt(selected.maximum_credit_micro)
    ) {
      return `Per-transfer cap is ${formatUsd(selected.maximum_credit_micro / 1_000_000)}.`;
    }
    if (
      estimatedCreditMicro !== null &&
      availableTodayMicro !== null &&
      estimatedCreditMicro > BigInt(availableTodayMicro)
    ) {
      return `Only ${formatUsd(availableTodayMicro / 1_000_000)} of funding capacity remains today.`;
    }
    if (
      selected?.asset !== 'ETH' &&
      paymentStatus.assetBalance !== null &&
      paymentStatus.assetBalance < parsedAmount
    ) {
      return `Not enough ${selected?.asset ?? 'tokens'} in this wallet.`;
    }
    if (paymentStatus.nativeBalance <= BigInt(0)) {
      return 'This wallet needs ETH on Base for gas.';
    }
    return null;
  }, [
    availableTodayMicro,
    config?.chain.id,
    estimatedCreditMicro,
    parsedAmount,
    paymentProvider,
    paymentStatus,
    paymentWallet,
    selected,
    verifiedWallets
  ]);

  const readPaymentWallet = useCallback(
    async (
      option: WalletProviderOption,
      address: string,
      asset: FundingAsset | null
    ) => {
      setCheckingWallet(true);
      try {
        const provider = new BrowserProvider(option.provider);
        const [network, nativeBalance] = await Promise.all([
          provider.getNetwork(),
          provider.getBalance(address)
        ]);
        let assetBalance: bigint | null = null;
        if (asset?.asset !== 'ETH' && asset?.token_address) {
          assetBalance = await new Contract(
            asset.token_address,
            ERC20_ABI,
            provider
          ).balanceOf(address);
        }
        setPaymentStatus({
          chainId: Number(network.chainId),
          nativeBalance,
          assetBalance
        });
      } finally {
        setCheckingWallet(false);
      }
    },
    []
  );

  useEffect(() => {
    if (!paymentProvider || !paymentWallet) {
      setPaymentStatus(null);
      return;
    }
    void readPaymentWallet(paymentProvider, paymentWallet, selected).catch(
      (reason) => {
        setPaymentStatus(null);
        setError(errorMessage(reason, 'Could not read wallet balances.'));
      }
    );
  }, [paymentProvider, paymentWallet, readPaymentWallet, selected]);

  async function verifyWallet(
    option: WalletProviderOption,
    signer: ethers.Signer,
    address: string
  ) {
    if (verifiedWallets.includes(address.toLowerCase())) return;
    const nonceResponse = await fetch('/api/account/identities/wallet/nonce', {
      method: 'POST'
    });
    if (!nonceResponse.ok) throw new Error('Could not create wallet proof.');
    const challenge = await nonceResponse.json();
    const message = `Link wallet to AIPG Grid account ${challenge.account_id}\n\nNonce: ${challenge.nonce}`;
    const signature = await signer.signMessage(message);
    const response = await fetch('/api/account/identities/wallet/link', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, signature, address })
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(
        result.detail ?? result.error ?? 'Wallet verification failed.'
      );
    }
    await refresh();
    setPaymentProvider(option);
  }

  async function connectPaymentWallet(option: WalletProviderOption) {
    setConnectingWallet(option.id);
    setError(null);
    try {
      await option.provider.request({ method: 'eth_requestAccounts' });
      await switchToBase(option.provider);
      const provider = new BrowserProvider(option.provider);
      const signer = await provider.getSigner();
      const address = (await signer.getAddress()).toLowerCase();
      await verifyWallet(option, signer, address);
      setPaymentProvider(option);
      setPaymentWallet(address);
      setWalletDialogOpen(false);
      await readPaymentWallet(option, address, selected);
    } catch (reason) {
      setError(errorMessage(reason, 'Could not connect the payment wallet.'));
    } finally {
      setConnectingWallet(null);
    }
  }

  function rememberPendingDeposit(
    asset: FundingAsset['asset'],
    txHash: string
  ) {
    setPendingAsset(asset);
    setPendingHash(txHash);
    window.localStorage.setItem(
      PENDING_DEPOSIT_KEY,
      JSON.stringify({ asset, txHash })
    );
  }

  function clearPendingDeposit() {
    setPendingAsset(null);
    setPendingHash(null);
    window.localStorage.removeItem(PENDING_DEPOSIT_KEY);
  }

  async function claim(asset: FundingAsset['asset'], txHash: string) {
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
      'The transaction is still confirming. Use Retry credit shortly; do not send another payment.'
    );
  }

  async function finishCredit(asset: FundingAsset['asset'], txHash: string) {
    const receipt = await claim(asset, txHash);
    clearPendingDeposit();
    setSuccess(
      `${receipt.amount} ${asset} added ${formatUsd(receipt.amount_usd)} to your balance.`
    );
    setAmount('');
    await refresh();
    if (paymentProvider && paymentWallet) {
      await readPaymentWallet(paymentProvider, paymentWallet, selected);
    }
  }

  async function retryPendingClaim() {
    if (!pendingAsset || !pendingHash) return;
    setSubmitting(true);
    setError(null);
    setSuccess(null);
    try {
      await finishCredit(pendingAsset, pendingHash);
    } catch (reason) {
      setError(errorMessage(reason, 'The payment could not be credited yet.'));
    } finally {
      setSubmitting(false);
    }
  }

  async function fund() {
    if (!selected?.enabled || !selected.treasury) return;
    if (pendingHash) {
      setError(
        'Resolve the pending payment with Retry credit before sending another.'
      );
      return;
    }
    if (!paymentProvider || !paymentWallet) {
      setError('Connect a payment wallet before funding this account.');
      return;
    }
    setSubmitting(true);
    setError(null);
    setSuccess(null);
    try {
      await switchToBase(paymentProvider.provider);
      const provider = new BrowserProvider(paymentProvider.provider);
      const signer = await provider.getSigner();
      const signerAddress = (await signer.getAddress()).toLowerCase();
      if (signerAddress !== paymentWallet.toLowerCase()) {
        throw new Error('The active wallet account changed. Select it again.');
      }
      if (!verifiedWallets.includes(signerAddress)) {
        throw new Error('Verify this payment wallet before funding.');
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

      let transaction;
      if (selected.asset === 'ETH') {
        const balance = await provider.getBalance(signerAddress);
        if (balance <= raw) {
          throw new Error('Not enough ETH for this payment plus gas.');
        }
        transaction = await signer.sendTransaction({
          to: selected.treasury,
          value: raw
        });
      } else {
        const token = new Contract(selected.token_address!, ERC20_ABI, signer);
        const [tokenBalance, nativeBalance] = await Promise.all([
          token.balanceOf(signerAddress) as Promise<bigint>,
          provider.getBalance(signerAddress)
        ]);
        if (tokenBalance < raw) {
          throw new Error(
            `This wallet has ${ethers.formatUnits(tokenBalance, selected.decimals)} ${selected.asset}; ${amount} is required.`
          );
        }
        const gas = await token.transfer.estimateGas(selected.treasury, raw);
        const fees = await provider.getFeeData();
        const gasPrice = fees.maxFeePerGas ?? fees.gasPrice;
        if (gasPrice && nativeBalance < gas * gasPrice) {
          throw new Error('Not enough ETH on Base to pay the network fee.');
        }
        transaction = await token.transfer(selected.treasury, raw);
      }
      rememberPendingDeposit(selected.asset, transaction.hash);
      await transaction.wait(1);
      await finishCredit(selected.asset, transaction.hash);
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
            Verify a wallet before funding this account.
            <Button
              type='button'
              size='sm'
              variant='outline'
              onClick={() => setWalletDialogOpen(true)}
            >
              Connect wallet
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

      {pendingHash && pendingAsset && (
        <Alert>
          <Clock3 className='h-4 w-4' />
          <AlertTitle>Payment sent, credit pending</AlertTitle>
          <AlertDescription className='space-y-3'>
            <p>
              Retry this transaction hash to finish crediting. This does not
              send another payment.
            </p>
            <div className='flex flex-wrap gap-2'>
              <Button
                type='button'
                size='sm'
                className='gap-2'
                disabled={submitting}
                onClick={() => void retryPendingClaim()}
              >
                {submitting ? (
                  <Loader2 className='h-4 w-4 animate-spin' />
                ) : (
                  <RefreshCw className='h-4 w-4' />
                )}
                Retry credit
              </Button>
              <Button asChild type='button' size='sm' variant='outline'>
                <a
                  href={`${BASESCAN}/tx/${pendingHash}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  View on BaseScan
                  <ExternalLink className='ml-2 h-3 w-3' />
                </a>
              </Button>
              <Button
                type='button'
                size='sm'
                variant='ghost'
                disabled={submitting}
                onClick={clearPendingDeposit}
              >
                Dismiss
              </Button>
            </div>
          </AlertDescription>
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
              <TabsList
                className='grid h-auto w-full'
                style={{
                  gridTemplateColumns: `repeat(${Math.max(assets.length, 1)}, minmax(0, 1fr))`
                }}
              >
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
                <div className='flex flex-col gap-3 border-b pb-5 sm:flex-row sm:items-center sm:justify-between'>
                  <div>
                    <p className='text-sm font-medium'>Pay from</p>
                    {paymentWallet ? (
                      <div className='mt-1 space-y-1'>
                        <p className='font-mono text-xs text-muted-foreground'>
                          {shortAddress(paymentWallet)}
                        </p>
                        {paymentStatus && selected && (
                          <p className='text-xs text-muted-foreground'>
                            {selected.asset === 'ETH'
                              ? `${Number(ethers.formatEther(paymentStatus.nativeBalance)).toLocaleString(undefined, { maximumFractionDigits: 6 })} ETH`
                              : `${Number(ethers.formatUnits(paymentStatus.assetBalance ?? BigInt(0), selected.decimals)).toLocaleString(undefined, { maximumFractionDigits: 6 })} ${selected.asset}`}
                            {' · '}
                            {Number(
                              ethers.formatEther(paymentStatus.nativeBalance)
                            ).toLocaleString(undefined, {
                              maximumFractionDigits: 6
                            })}{' '}
                            ETH for gas
                          </p>
                        )}
                      </div>
                    ) : (
                      <p className='mt-1 text-xs text-muted-foreground'>
                        No payment wallet connected
                      </p>
                    )}
                  </div>
                  <Button
                    type='button'
                    variant='outline'
                    className='gap-2'
                    onClick={() => setWalletDialogOpen(true)}
                  >
                    <Wallet className='h-4 w-4' />
                    {paymentWallet ? 'Change wallet' : 'Connect wallet'}
                  </Button>
                </div>

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
                  {availableTodayMicro !== null && (
                    <div>
                      <p className='text-muted-foreground'>Available today</p>
                      <p className='font-medium tabular-nums'>
                        {formatUsd(availableTodayMicro / 1_000_000)}
                      </p>
                    </div>
                  )}
                </div>

                <Button
                  type='button'
                  className='w-full gap-2'
                  disabled={
                    submitting ||
                    checkingWallet ||
                    pendingHash !== null ||
                    !amount ||
                    walletProblem !== null
                  }
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
                {!submitting && walletProblem && (
                  <p className='text-center text-xs text-muted-foreground'>
                    {walletProblem}
                  </p>
                )}
                {!submitting && pendingHash && (
                  <p className='text-center text-xs text-muted-foreground'>
                    Resolve the pending payment above before sending another.
                  </p>
                )}
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
            <p className='text-sm font-medium'>Verified wallets</p>
            {verifiedWallets.length ? (
              <p className='mt-1 text-xs text-muted-foreground'>
                {verifiedWallets.length}{' '}
                {verifiedWallets.length === 1 ? 'wallet' : 'wallets'} available
              </p>
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

      <Dialog open={walletDialogOpen} onOpenChange={setWalletDialogOpen}>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>Select payment wallet</DialogTitle>
            <DialogDescription>
              The wallet signs once to join this Grid account, then pays
              directly on Base.
            </DialogDescription>
          </DialogHeader>
          <div className='space-y-2'>
            {walletProviders.length ? (
              walletProviders.map((option) => (
                <Button
                  key={option.id}
                  type='button'
                  variant='outline'
                  className='h-12 w-full justify-start gap-3'
                  disabled={connectingWallet !== null}
                  onClick={() => void connectPaymentWallet(option)}
                >
                  {connectingWallet === option.id ? (
                    <Loader2 className='h-4 w-4 animate-spin' />
                  ) : (
                    <Wallet className='h-4 w-4' />
                  )}
                  {option.name}
                </Button>
              ))
            ) : (
              <p className='py-6 text-center text-sm text-muted-foreground'>
                No browser wallet detected.
              </p>
            )}
          </div>
          <p className='text-xs text-muted-foreground'>
            A wallet already attached to another Grid account is merged only
            after this session and the wallet signature are both verified.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
