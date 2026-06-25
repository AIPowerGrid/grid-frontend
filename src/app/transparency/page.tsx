import TransparencyView from './transparency-view';

export const metadata = {
  title: 'Payout Transparency — AI Power Grid',
  description:
    'Every AIPG paid to workers, on-chain and verifiable. Public ledger of grid worker payouts on Base.'
};

export default function Page() {
  return (
    <main className='min-h-screen bg-background px-4 py-10 sm:px-6'>
      <TransparencyView />
    </main>
  );
}
