export interface Eip1193Provider {
  request(args: { method: string; params?: unknown[] | object }): Promise<any>;
}

export interface WalletProviderOption {
  id: string;
  name: string;
  provider: Eip1193Provider;
}

interface Eip6963Announcement {
  info: {
    uuid: string;
    name: string;
  };
  provider: Eip1193Provider;
}

function legacyProviderName(provider: any, index: number) {
  if (provider?.isRabby) return 'Rabby';
  if (provider?.isCoinbaseWallet) return 'Coinbase Wallet';
  if (provider?.isMetaMask) return 'MetaMask';
  return index === 0 ? 'Browser wallet' : `Browser wallet ${index + 1}`;
}

export function watchWalletProviders(
  onChange: (providers: WalletProviderOption[]) => void
) {
  const found = new Map<string, WalletProviderOption>();
  const publish = () => onChange(Array.from(found.values()));
  const add = (option: WalletProviderOption) => {
    if (
      Array.from(found.values()).some(
        (candidate) => candidate.provider === option.provider
      )
    ) {
      return;
    }
    found.set(option.id, option);
    publish();
  };
  const announce = (event: Event) => {
    const detail = (event as CustomEvent<Eip6963Announcement>).detail;
    if (!detail?.provider?.request || !detail.info?.uuid) return;
    add({
      id: detail.info.uuid,
      name: detail.info.name || 'Browser wallet',
      provider: detail.provider
    });
  };

  window.addEventListener('eip6963:announceProvider', announce);
  window.dispatchEvent(new Event('eip6963:requestProvider'));

  const injected = (window as Window & { ethereum?: any }).ethereum;
  const legacy = Array.isArray(injected?.providers)
    ? injected.providers
    : injected?.request
      ? [injected]
      : [];
  legacy.forEach((provider: Eip1193Provider, index: number) =>
    add({
      id: `injected-${index}`,
      name: legacyProviderName(provider, index),
      provider
    })
  );

  return () => window.removeEventListener('eip6963:announceProvider', announce);
}
