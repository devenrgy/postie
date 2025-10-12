import * as Sentry from '@sentry/tanstackstart-react'
import { createMiddleware, createStart } from '@tanstack/react-start'

export const startInstance = createStart(() => {
	return {
		requestMiddleware: [createMiddleware().server(Sentry.sentryGlobalServerMiddlewareHandler())]
	}
})
