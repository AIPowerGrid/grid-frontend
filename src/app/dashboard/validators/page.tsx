import PageContainer from '@/components/layout/page-container';
import ValidatorScorecardsView from '@/features/validators/components/validator-scorecards-view';

export const metadata = {
  title: 'Validator Evidence'
};

export default async function Page() {
  return (
    <PageContainer>
      <ValidatorScorecardsView />
    </PageContainer>
  );
}
