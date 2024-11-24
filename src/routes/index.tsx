import { AnimationsList } from '@/components/animations-list';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: Index });

function Index() {
  return (
    <section className='w-full flex-1 flex flex-col items-center'>
      <AnimationsList />
    </section>
  );
}
