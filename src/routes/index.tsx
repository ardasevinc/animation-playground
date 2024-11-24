import { AnimationsList } from '@/components/animations-list';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: Index });

function Index() {
  return (
    <section className='w-full flex-1'>
      <h1 className='text-3xl text-center'>Animation Playground</h1>
      <AnimationsList />
    </section>
  );
}
