import { AnimatedTextCard } from '@/components/animated-text-card';
import { BlinkingCursorCard } from '@/components/blinking-cursor-card';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/typing-animations')({
  component: TypingAnimations,
});

function TypingAnimations() {
  return (
    <main className='flex-1 flex flex-col gap-y-20'>
      <section className='w-full'>
        <div className='bg-muted rounded-lg p-2 lg:p-10'>
          <h2 className='text-center'>Typing Animations</h2>
        </div>
      </section>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-min grid-flow-dense gap-x-4 gap-y-6'>
        <BlinkingCursorCard />
        <AnimatedTextCard />
      </section>
    </main>
  );
}
