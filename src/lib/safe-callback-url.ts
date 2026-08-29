/** Keep post-auth navigation on this Console origin. */
export function safeCallbackUrl(value: string | null | undefined): string {
  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return '/dashboard';
  }
  try {
    const parsed = new URL(value, 'https://console.aipowergrid.io');
    if (parsed.origin !== 'https://console.aipowergrid.io') return '/dashboard';
    if (
      parsed.pathname !== '/dashboard' &&
      !parsed.pathname.startsWith('/dashboard/') &&
      !(
        parsed.pathname === '/oauth/authorize' &&
        parsed.hash === '' &&
        parsed.searchParams.getAll('request').length === 1 &&
        Array.from(parsed.searchParams.keys()).every(
          (key) => key === 'request'
        ) &&
        /^oauth_req_[A-Za-z0-9_-]{43}$/.test(
          parsed.searchParams.get('request') ?? ''
        )
      )
    ) {
      return '/dashboard';
    }
    return `${parsed.pathname}${parsed.search}${parsed.hash}`;
  } catch {
    return '/dashboard';
  }
}
