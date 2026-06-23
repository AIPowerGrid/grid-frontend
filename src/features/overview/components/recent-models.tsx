import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { gridFetch, GridModelStatus } from '@/lib/grid-api';

type Model = GridModelStatus;

export async function RecentModels() {
  // Server component: read the grid API directly (no self-HTTP hop).
  let models: Model[] = [];
  try {
    models = await gridFetch<Model[]>('/v1/status/models');
  } catch (e) {
    console.error('RecentModels:', e);
    return (
      <Card className='h-full'>
        <CardHeader>
          <CardTitle>Active Models</CardTitle>
          <CardDescription>Error fetching models</CardDescription>
        </CardHeader>
        <CardContent>Unable to load models.</CardContent>
      </Card>
    );
  }

  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Active Models</CardTitle>
        <CardDescription>Models currently running on The Grid</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='max-h-[420px] space-y-4 overflow-y-auto pr-1'>
          {models.map((model) => (
            <div className='flex items-center' key={model.name}>
              <Avatar className='h-9 w-9'>
                <AvatarFallback className='bg-primary/10 text-xs font-medium text-primary'>
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
