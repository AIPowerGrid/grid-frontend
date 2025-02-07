import { delay } from '@/constants/mock-api';
import { QuickStart } from '@/features/overview/components/quick-start';

export default async function BarStats() {
  await await delay(1000);

  return <QuickStart />;
}
