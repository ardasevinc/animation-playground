import { Counter } from '@/components/counter';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/number-animations')({
  component: NumberAnimations,
});

function NumberAnimations() {
  return (
    <main className='flex-1 flex flex-col gap-y-20'>
      <section className='w-full'>
        <div className='bg-muted rounded-lg p-2 lg:p-10'>
          <h2 className='text-center text-2xl'>Number Animations</h2>
        </div>
      </section>
      <section className='flex items-center justify-center'>
        <Counter start={0} end={100} duration={10} className='text-xl' />
      </section>
    </main>
  );
}
