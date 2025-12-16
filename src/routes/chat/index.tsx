import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/chat/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="chatPage">
            <h3 className="shopHeadline">What would you like to know?</h3>
          </div>
}
