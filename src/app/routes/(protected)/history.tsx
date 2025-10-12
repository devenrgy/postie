import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/history')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(protected)/history"!</div>
}
