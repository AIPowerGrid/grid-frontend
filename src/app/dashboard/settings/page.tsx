import { SearchParams } from 'nuqs/server';
import SettingsViewPage from '@/features/settings/components/settings-view-page';
import PageContainer from '@/components/layout/page-container';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : Settings'
};

export default async function Page({ searchParams }: pageProps) {
  return (
    <PageContainer>
      <SettingsViewPage />
    </PageContainer>
  );
}
