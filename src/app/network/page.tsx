import NetworkStatusView from './network-status-view';

export const metadata = {
  title: 'Network Status — AI Power Grid',
  description:
    'Live worker, model, validator, charging, payout, and incident status for AI Power Grid.'
};

export default function Page() {
  return (
    <main className='h-dvh overflow-y-auto bg-background px-4 py-8 sm:px-6'>
      <NetworkStatusView />
    </main>
  );
}
