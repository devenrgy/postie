import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/variables')({
	component: RouteComponent
})

function RouteComponent() {
	return <div>Hello "/(protected)/variables"!</div>
}
