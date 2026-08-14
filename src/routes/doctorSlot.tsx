import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/doctorSlot')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/doctorSlot"!</div>
}
