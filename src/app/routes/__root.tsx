import { TanstackDevtools } from '@tanstack/react-devtools'
import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'
import { createRootRouteWithContext, HeadContent, Scripts } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import { Providers } from '#/app/providers'
import indexCss from '#/app/styles/index.css?url'

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient
}>()({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				title: 'Postie'
			}
		],
		links: [
			{
				rel: 'stylesheet',
				href: indexCss
			}
		]
	}),

	shellComponent: RootDocument
})

function RootDocument({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' className='dark'>
			<head>
				<HeadContent />
			</head>
			<body>
				<Providers>{children}</Providers>

				<TanstackDevtools
					config={{
						position: 'bottom-right'
					}}
					plugins={[
						{
							name: 'Tanstack Router',
							render: <TanStackRouterDevtoolsPanel />
						},
						{
							name: 'Tanstack Query',
							render: <ReactQueryDevtoolsPanel />
						}
					]}
				/>
				<Scripts />
			</body>
		</html>
	)
}
