import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_auth-layout')({
	component: RouteComponent
})

function RouteComponent() {
	return (
		<div className='flex flex-col justify-center items-center h-screen'>
			<Outlet />
		</div>
	)
}
