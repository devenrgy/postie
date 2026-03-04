import type { Metadata } from 'next'

import './styles/globals.css'

export const metadata: Metadata = {
	title: {
		template: '%s | Postie',
		default: 'Welcome | Postie'
	},
	description: 'The modern REST client for developers. Test, debug, and collaborate on APIs — fast.'
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang='en' className='dark'>
			<body>{children}</body>
		</html>
	)
}
