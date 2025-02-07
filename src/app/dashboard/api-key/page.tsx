import { SearchParams } from 'nuqs/server';
import ApiKeyViewPage from '@/features/api-key/components/api-key-view-page';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : API Key'
};

export default async function Page({ searchParams }: pageProps) {
  return (
    <div className='p-8'>
      <ApiKeyViewPage />
    </div>
  );
}
