import NextLink from 'next/link'

import { Avatar, Card, Chip } from '@heroui/react'

import { cn } from '@/shared/lib/cn'

const FEATURES = [
	{
		icon: 'iconify-color noto--high-voltage',
		title: 'Instant Testing',
		description: 'Fire requests and inspect responses in seconds. No setup, no friction.'
	},
	{
		icon: 'iconify-color noto--bar-chart',
		title: 'Live Request Logs',
		description: 'Track every response, header, and timing — as it happens.'
	},
	{
		icon: 'iconify-color noto--gear',
		title: 'API-First Workflow',
		description: 'Fits right into your existing tools, scripts, and pipelines.'
	},
	{
		icon: 'iconify-color noto--locked',
		title: 'Secure by Default',
		description: 'End-to-end encryption and SOC 2 compliance, out of the box.'
	},
	{
		icon: 'iconify-color noto--rocket',
		title: 'Blazing Performance',
		description: 'Sub-100ms handling on global edge — your requests, at full speed.'
	},
	{
		icon: 'iconify-color noto--handshake',
		title: 'Always-On Support',
		description: 'Real experts, real answers — whenever you get stuck.'
	}
] as const

const users = [
	{
		id: 1,
		image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg',
		name: 'John Doe'
	},
	{
		id: 2,
		image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg',
		name: 'Kate Wilson'
	},
	{
		id: 3,
		image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg',
		name: 'Emily Chen'
	},
	{
		id: 4,
		image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg',
		name: 'Michael Brown'
	},
	{
		id: 5,
		image: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg',
		name: 'Olivia Davis'
	}
]

export default async function LandingPage() {
	return (
		<section className='relative isolate rounded-2xl bg-neutral-950 py-20 text-center ring ring-border'>
			<Chip
				size='lg'
				className='mb-8 gap-2 rounded-full bg-linear-to-r from-blue-800/30 to-fuchsia-800/30 text-blue-400'
			>
				<span className='iconify-color noto--sparkles' />
				Your new API workflow
			</Chip>

			<h1 className='fl-text-5xl/7xl mb-8 font-bold'>
				Test APIs.{' '}
				<span className='bg-linear-to-r from-blue-600 via-fuchsia-500 to-blue-600 bg-clip-text text-transparent'>
					Ship faster.
				</span>
			</h1>

			<p className='mx-auto mb-12 max-w-3xl text-gray-600 text-xl dark:text-gray-400'>
				A clean, focused REST client built for developers who value clarity. Send requests, track history, manage
				variables — no noise, no bloat.
			</p>

			<NextLink
				href='/'
				className='button button--lg mb-20 transform bg-linear-to-r from-blue-600 to-fuchsia-500 px-10 py-6 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-purple-700'
			>
				Get Started Free
			</NextLink>

			<ul className='mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-5 text-left md:grid-cols-2 lg:grid-cols-3'>
				{FEATURES.map(({ title, icon, description }) => (
					<li key={title}>
						<Card className='h-full rounded-2xl'>
							<span className={cn('text-2xl', icon)} />
							<Card.Header className='gap-2'>
								<Card.Title className='text-lg'>{title}</Card.Title>
								<Card.Description className='text-base'>{description}</Card.Description>
							</Card.Header>
						</Card>
					</li>
				))}
			</ul>

			<div className='inline-flex items-center gap-3 rounded-full bg-green-900/20 px-6 py-3 text-green-400'>
				<div className='inline-flex items-center -space-x-2'>
					{users.slice(0, 3).map((user) => (
						<Avatar key={user.id} color='success' className='ring-2 ring-background'>
							<Avatar.Image alt={user.name} src={user.image} />
							<Avatar.Fallback>
								{user.name
									.split(' ')
									.map((n) => n[0])
									.join('')}
							</Avatar.Fallback>
						</Avatar>
					))}

					<Avatar className='ring-2 ring-background'>
						<Avatar.Fallback className='text-xs'>+{users.length - 3}</Avatar.Fallback>
					</Avatar>
				</div>

				<p className='text-sm'>Trusted by 100,000+ developers worldwide</p>
			</div>

			<div className='pointer-events-none absolute top-1/4 left-10 h-24 w-24 animate-pulse rounded-full bg-blue-500 opacity-20 blur-2xl' />
			<div className='pointer-events-none absolute right-10 bottom-1/4 h-32 w-32 animate-pulse rounded-full bg-purple-500 opacity-20 blur-2xl' />
			<div className='pointer-events-none absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-pink-500 opacity-10 blur-3xl' />
		</section>
	)
}
