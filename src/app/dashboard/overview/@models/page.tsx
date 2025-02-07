import { delay } from '@/constants/mock-api';
import { RecentModels } from '@/features/overview/components/recent-models';

export default async function ModelStatusPage() {
  await delay(3000);
  return <RecentModels />;
}
