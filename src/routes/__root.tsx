import { BouncyNotFound } from '@/components/bouncy-not-found';
import { TanStackRouterDevtools } from '@/components/tanstack-router-devtools';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Suspense } from 'react';

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <main className='flex-1 flex'>
      <BouncyNotFound />
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
