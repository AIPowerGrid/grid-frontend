import { SearchParams } from 'nuqs/server';
import PageContainer from '@/components/layout/page-container';
import WorkersListView from '@/features/workers/components/workers-list-view';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Grid Workers'
};

export default async function Page({ searchParams }: pageProps) {
  return (
    <PageContainer>
      <WorkersListView />
    </PageContainer>
  );
}
