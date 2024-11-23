import { TanStackRouterDevtools } from '@/components/tanstack-router-devtools';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Suspense } from 'react';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className='min-h-screen flex'>
        <Outlet />
      </div>
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
}
