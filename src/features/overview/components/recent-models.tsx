import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card';

interface Model {
  performance: number;
  queued: number;
  jobs: number;
  eta: number;
  type: string;
  name: string;
  count: number;
}

export async function RecentModels() {
  // Fetch models using the absolute URL.
  const res = await fetch(`https://dashboard.aipowergrid.io/api/models`, {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Active Models</CardTitle>
          <CardDescription>Error fetching models</CardDescription>
        </CardHeader>
        <CardContent>Unable to load models.</CardContent>
      </Card>
    );
  }

  const models: Model[] = await res.json();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Models</CardTitle>
        <CardDescription>Models currently running on The Grid</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          {models.map((model) => (
            <div className='flex items-center' key={model.name}>
              <Avatar className='h-9 w-9'>
                <AvatarImage
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(model.name)}`}
                  alt={model.name}
                />
                <AvatarFallback>
                  {model.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none'>{model.name}</p>
                <p className='text-sm text-muted-foreground'>{model.type}</p>
              </div>
              <div className='ml-auto font-medium'>{model.count} workers</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
