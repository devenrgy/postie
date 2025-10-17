import { createFileRoute } from '@tanstack/react-router'

import { SignInPage } from '#/pages/auth'

export const Route = createFileRoute('/(auth)/_auth-layout/sign-in')({
	component: SignInPage
})
