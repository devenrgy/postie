import { Hero } from '#/pages/home/ui/hero'

export const HomePage = () => {
	return (
		<main className='grid grid-cols-[48px_1fr] duration-500 ease-in-out has-[aside:hover]:grid-cols-[200px_1fr]'>
			<aside className='fixed flex min-h-dvh flex-col justify-end whitespace-nowrap px-3 py-10 font-medium text-sm'>
				<p>Hi</p>
			</aside>

			<Hero />
		</main>
	)
}
