import { QueryClient } from '@tanstack/react-query'
import { createRouter } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'

import { routeTree } from './route-tree.gen'

export const getRouter = () => {
	const queryClient = new QueryClient()

	const router = createRouter({
		routeTree,
		context: { queryClient },
		defaultPreload: 'intent',
		defaultViewTransition: true
	})

	setupRouterSsrQueryIntegration({
		router,
		queryClient
	})

	return router
}
