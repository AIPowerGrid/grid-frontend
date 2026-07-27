import PageContainer from '@/components/layout/page-container';
import FundingView from '@/features/funding/components/funding-view';

export const metadata = {
  title: 'Credits & Funding'
};

export default function Page() {
  return (
    <PageContainer>
      <FundingView />
    </PageContainer>
  );
}
