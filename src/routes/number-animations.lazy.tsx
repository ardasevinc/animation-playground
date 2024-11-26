import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/number-animations')({
  component: NumberAnimations,
})

function NumberAnimations() {
  return (
    <main className="flex-1">
      <section className="w-full">
        <div className="bg-muted rounded-lg p-2 lg:p-10">
          <h2 className="text-center">Number Animations</h2>
        </div>
      </section>
    </main>
  )
}
