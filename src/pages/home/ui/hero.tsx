import { Avatar, AvatarGroup, Button, Card, CardBody, CardHeader, Chip } from '@heroui/react'
import { Link } from '@tanstack/react-router'

import { AVATARS, FEATURES } from '../config/hero-config'

export const Hero = () => {
	return (
		<section className='isolate relative col-start-2 bg-neutral-900 bg-gradient-to-br from-gray-50 dark:from-zinc-900 to-gray-100 dark:to-black my-5 mr-12 p-5 rounded-2xl ring ring-divider min-h-dvh'>
			<div className='mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 max-w-7xl'>
				<div className='mb-20 text-center'>
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

					<h1 className='mb-8 font-bold text-gray-900 dark:text-white text-5xl md:text-7xl'>
						Welcome to
						<br />
						<span className='bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent'>
							Postie
						</span>
					</h1>

					<p className='mx-auto mb-12 max-w-3xl text-gray-600 dark:text-gray-400 text-xl'>
						Everything your team needs to test, collaborate on, and scale APIs effortlessly. From quick prototyping to
						production monitoring, Postie has you covered.
					</p>

					<div className='flex sm:flex-row flex-col justify-center gap-4 mb-20'>
						<Button
							type='button'
							size='lg'
							radius='full'
							className='bg-gradient-to-r from-blue-600 hover:from-blue-700 to-purple-600 hover:to-purple-700 shadow-lg px-8 py-4 h-full font-semibold text-white hover:scale-105 transition-all duration-200 transform'
						>
							<Link to='/'>Start Testing Free</Link>
						</Button>
						<Button
							type='button'
							size='lg'
							radius='full'
							className='bg-white hover:bg-gray-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 px-8 py-4 border border-gray-300 dark:border-zinc-700 h-full font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-200'
						>
							Schedule a Demo
						</Button>
					</div>
				</div>

				<ul className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16'>
					{FEATURES.map(({ title, icon, description }) => (
						<li key={title}>
							<Card className='group bg-white dark:bg-zinc-900 shadow-lg hover:shadow-xl p-4 border border-gray-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 rounded-3xl transition-all hover:-translate-y-2 duration-300 transform'>
								<CardHeader className='text-4xl group-hover:scale-110 transition-transform duration-300'>
									<span className={icon} />
								</CardHeader>
								<CardBody>
									<h3 className='mb-3 font-bold text-gray-900 dark:text-white text-xl'>{title}</h3>
									<p className='text-gray-600 dark:text-gray-400'>{description}</p>
								</CardBody>
							</Card>
						</li>
					))}
				</ul>

				<div className='text-center'>
					<div className='inline-flex items-center gap-4 bg-green-50 dark:bg-green-900/20 px-6 py-3 rounded-full text-green-700 dark:text-green-400'>
						<AvatarGroup color='success' max={3}>
							{AVATARS.map(({ src, alt }) => (
								<Avatar
									key={alt}
									src={src}
									alt={alt}
									className='rounded-full ring-2 ring-white dark:ring-black w-8 h-8'
								/>
							))}
						</AvatarGroup>
						<span className='font-medium text-sm'>Join 100,000+ developers mastering APIs</span>
					</div>
				</div>
			</div>

			<div className='top-1/4 left-10 absolute bg-blue-500 opacity-20 blur-2xl rounded-full w-24 h-24 animate-pulse' />
			<div className='right-10 bottom-1/4 absolute bg-purple-500 opacity-20 blur-2xl rounded-full w-32 h-32 animate-pulse' />
			<div className='top-1/2 left-1/2 absolute bg-pink-500 opacity-10 blur-3xl rounded-full w-40 h-40 -translate-x-1/2 -translate-y-1/2 animate-pulse transform' />
		</section>
	)
}
