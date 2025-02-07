import { delay } from '@/constants/mock-api';
import { AboutGrid } from '@/features/overview/components/about-grid';

export default async function AreaStats() {
  await await delay(2000);
  return <AboutGrid />;
}
