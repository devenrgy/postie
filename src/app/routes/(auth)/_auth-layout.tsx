import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_auth-layout')({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<div className='flex h-screen flex-col items-center justify-center'>
			<Outlet />
		</div>
	)
}
