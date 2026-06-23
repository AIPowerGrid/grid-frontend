import ApiUsageView from '@/features/api-usage/components/api-usage-view';
import PageContainer from '@/components/layout/page-container';

export default async function Page() {
  return (
    <PageContainer>
      <ApiUsageView />
    </PageContainer>
  );
}
