import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/typing-animations')({
  component: TypingAnimations,
});

function TypingAnimations() {
  return (
    <main className='flex-1'>
      <section className='w-full'>
        <div className='bg-muted rounded-lg p-2 lg:p-10'>
          <h2 className='text-center'>Typing Animations</h2>
        </div>
      </section>
    </main>
  );
}
