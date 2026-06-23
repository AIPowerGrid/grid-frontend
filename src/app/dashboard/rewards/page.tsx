import { SearchParams } from 'nuqs/server';
import PageContainer from '@/components/layout/page-container';
import RewardsView from '@/features/rewards/components/rewards-view';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Rewards'
};

export default async function Page({ searchParams }: pageProps) {
  return (
    <PageContainer>
      <RewardsView />
    </PageContainer>
  );
}
