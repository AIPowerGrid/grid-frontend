import { SearchParams } from 'nuqs/server';
import PageContainer from '@/components/layout/page-container';
import AccountKeys from '@/features/api-key/components/account-keys';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'API Keys'
};

export default async function Page({ searchParams }: pageProps) {
  return (
    <PageContainer>
      <AccountKeys />
    </PageContainer>
  );
}
