import { Avatar, AvatarGroup, Button, Card, CardBody, CardHeader, Chip } from '@heroui/react'
import { Link } from '@tanstack/react-router'

import { AVATARS, FEATURES } from '../config/hero-config'

export const Hero = () => {
	return (
		<section className='relative isolate col-start-2 my-5 mr-12 min-h-dvh rounded-2xl bg-gradient-to-br bg-neutral-900 from-gray-50 to-gray-100 p-5 ring ring-divider dark:from-zinc-900 dark:to-black'>
			<div className='mx-auto mb-20 text-center max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8'>
				<Chip
					size='lg'
					radius='full'
					startContent={<span className='iconify-color noto--sparkles' />}
					classNames={{
						base: 'inline-flex items-center gap-1 bg-gradient-to-r from-blue-100 dark:from-blue-900/30 to-purple-100 dark:to-purple-900/30 mb-8 px-4 py-2 font-medium text-blue-700 dark:text-blue-400 text-sm'
					}}
				>
					The modern API client for teams
				</Chip>

				<h1 className='mb-8 font-bold text-5xl text-gray-900 md:text-7xl dark:text-white'>
					Welcome to{' '}
					<span className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent'>
						Postie
					</span>
				</h1>

				<p className='mx-auto mb-12 max-w-3xl text-gray-600 text-xl dark:text-gray-400'>
					Everything your team needs to test, collaborate on, and scale APIs effortlessly. From quick prototyping to
					production monitoring, Postie has you covered.
				</p>

				<div className='mb-20 flex flex-col justify-center gap-4 sm:flex-row'>
					<Button
						type='button'
						size='lg'
						radius='full'
						className='h-full transform bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-purple-700'
					>
						<Link to='/'>Start Testing Free</Link>
					</Button>
					<Button
						type='button'
						size='lg'
						radius='full'
						className='h-full border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300 dark:hover:bg-zinc-700'
					>
						Schedule a Demo
					</Button>
				</div>

				<ul className='mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{FEATURES.map(({ title, icon, description }) => (
						<li key={title}>
							<Card className='group hover:-translate-y-2 transform rounded-3xl border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300 hover:border-blue-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700'>
								<CardHeader className='text-4xl transition-transform duration-300 group-hover:scale-110'>
									<span className={icon} />
								</CardHeader>
								<CardBody>
									<h3 className='mb-3 font-bold text-gray-900 text-xl dark:text-white'>{title}</h3>
									<p className='text-gray-600 dark:text-gray-400'>{description}</p>
								</CardBody>
							</Card>
						</li>
					))}
				</ul>

				<div className='inline-flex items-center gap-4 rounded-full bg-green-50 px-6 py-3 text-green-700 dark:bg-green-900/20 dark:text-green-400'>
					<AvatarGroup color='success' max={3}>
						{AVATARS.map(({ src, alt }) => (
							<Avatar
								key={alt}
								src={src}
								alt={alt}
								className='h-8 w-8 rounded-full ring-2 ring-white dark:ring-black'
							/>
						))}
					</AvatarGroup>
					<span className='font-medium text-sm'>Join 100,000+ developers mastering APIs</span>
				</div>
			</div>

			<div className='absolute top-1/4 left-10 h-24 w-24 animate-pulse rounded-full bg-blue-500 opacity-20 blur-2xl' />
			<div className='absolute right-10 bottom-1/4 h-32 w-32 animate-pulse rounded-full bg-purple-500 opacity-20 blur-2xl' />
			<div className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-40 w-40 transform animate-pulse rounded-full bg-pink-500 opacity-10 blur-3xl' />
		</section>
	)
}
