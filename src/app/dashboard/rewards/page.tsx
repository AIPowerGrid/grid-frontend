import { SearchParams } from 'nuqs/server';
import RewardsView from '@/features/rewards/components/rewards-view';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : Rewards'
};

export default async function Page({ searchParams }: pageProps) {
  return (
    <div className='p-8'>
      <RewardsView />
    </div>
  );
}
