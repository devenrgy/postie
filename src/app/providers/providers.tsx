import { ClerkProvider } from '@clerk/clerk-react'
import { ConvexQueryClient } from '@convex-dev/react-query'
import { HeroUIProvider } from '@heroui/react'
import { ConvexProvider } from 'convex/react'

import { env } from '#/shared/config/env'

const convexQueryClient = new ConvexQueryClient(env.VITE_CONVEX_URL)

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ClerkProvider publishableKey={env.VITE_CLERK_PUBLISHABLE_KEY} afterSignOutUrl='/'>
			<ConvexProvider client={convexQueryClient.convexClient}>
				<HeroUIProvider>{children}</HeroUIProvider>
			</ConvexProvider>
		</ClerkProvider>
	)
}
