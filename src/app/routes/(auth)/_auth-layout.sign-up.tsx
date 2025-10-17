import { createFileRoute } from '@tanstack/react-router'

import { SignUpPage } from '#/pages/auth'

export const Route = createFileRoute('/(auth)/_auth-layout/sign-up')({
	component: SignUpPage
})
