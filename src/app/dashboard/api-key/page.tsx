import { SearchParams } from 'nuqs/server';
import AccountKeys from '@/features/api-key/components/account-keys';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : API Key'
};

export default async function Page({ searchParams }: pageProps) {
  return (
    <div className='p-8'>
      <AccountKeys />
    </div>
  );
}
