import './styles/globals.css'

import type { Metadata } from 'next'

import { cn } from '@/shared/lib/cn'

import { Providers } from './providers'
import { fontSans } from './styles/fonts'

export const metadata: Metadata = {
	title: 'Postie',
	description: ''
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang='en' className={cn('dark antialiased', fontSans.variable)}>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
