import PayoutsView from './payouts-view';

export const metadata = {
  title: 'Payouts — AI Power Grid',
  description:
    'Every AIPG paid to workers, on-chain and verifiable. Public ledger of grid worker payouts on Base.'
};

export default function Page() {
  return (
    <main className='h-dvh overflow-y-auto bg-background px-4 py-10 sm:px-6'>
      <PayoutsView />
    </main>
  );
}
