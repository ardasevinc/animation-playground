import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/number-animations')({
  component: NumberAnimations,
});

function NumberAnimations() {
  return <section className='flex-1'></section>;
}
