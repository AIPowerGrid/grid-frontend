import { SearchParams } from 'nuqs/server';
import WorkersListView from '@/features/workers/components/workers-list-view';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : Workers'
};

export default async function Page({ searchParams }: pageProps) {
  return (
    <div className='p-8'>
      <WorkersListView />
    </div>
  );
}
