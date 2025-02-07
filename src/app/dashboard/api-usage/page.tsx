import ApiUsageView from '@/features/api-usage/components/api-usage-view';

// Option 1: Using a public environment variable to derive the base URL.
// In your .env, you can define NEXT_PUBLIC_SITE_URL (e.g., http://localhost:3000)
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata = {
  title: 'Dashboard : API Usage'
};

export default async function Page() {
  // Fetch the swagger file from the public folder.
  const swaggerRes = await fetch(`${baseUrl}/swagger.json`, {
    cache: 'no-store'
  });
  const swaggerData = await swaggerRes.json();

  return (
    <div className='p-8'>
      <ApiUsageView swaggerData={swaggerData} />
    </div>
  );
}
