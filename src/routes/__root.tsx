import { TanStackRouterDevtools } from '@/components/tanstack-router-devtools';
import { Badge } from '@/components/ui/badge';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Suspense } from 'react';

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <main className='flex-1 flex'>
      <section className='flex flex-col items-center'>
        <Badge variant='outline'>404</Badge>
        <h2>Not Found</h2>
      </section>
    </main>
  );
}

function RootComponent() {
  return (
    <>
      <div className='min-h-screen flex flex-col px-2 lg:px-4 2xl:px-10 gap-y-4 lg:gap-y-10'>
        <header className='w-full'>
          <h1 className='text-3xl text-center pt-2 lg:pt-6'>
            Animation Playground
          </h1>
        </header>
        <Outlet />
      </div>
      <Suspense>
        <TanStackRouterDevtools position='bottom-right' />
      </Suspense>
    </>
  );
}
