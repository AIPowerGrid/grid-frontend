import { SearchParams } from 'nuqs/server';
import SettingsViewPage from '@/features/settings/components/settings-view-page';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : Settings'
};

export default async function Page({ searchParams }: pageProps) {
  return (
    <div className='p-8'>
      <SettingsViewPage />
    </div>
  );
}
