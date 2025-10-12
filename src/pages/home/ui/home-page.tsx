import { Hero } from '#/pages/home/ui/hero'

export const HomePage = () => {
	return (
		<main className='grid grid-cols-[48px_1fr] has-[aside:hover]:grid-cols-[200px_1fr] duration-500 ease-in-out'>
			<aside className='fixed flex flex-col justify-end px-3 py-10 min-h-dvh font-medium text-sm whitespace-nowrap'>
				<p>Hi</p>
			</aside>

			<Hero />
		</main>
	)
}
