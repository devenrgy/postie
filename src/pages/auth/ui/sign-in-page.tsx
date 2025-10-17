import { Button, Card, CardBody, CardFooter, CardHeader, Form, Input } from '@heroui/react'

export const SignInPage = () => {
	return (
		<Card className='max-w-sm w-full p-3'>
			<CardHeader className='flex-col gap-5'>
				<div className='bg-neutral-800 p-5 grid place-items-center rounded-xl'>
					<span className='iconify lucide--log-in text-2xl' />
				</div>

				<div className='mx-auto text-center'>
					<h1 className='text-xl mb-2'>Sign in with email</h1>
					<p className='text-neutral-400 text-sm'>Enter your email and password to sign in</p>
				</div>
			</CardHeader>
			<CardBody className=''>
				<Form className='flex flex-col gap-4'>
					<Input errorMessage='Please enter a valid email' name='email' placeholder='Email' type='email' />
					<Input errorMessage='Please enter a valid password' name='password' placeholder='Password' type='password' />

					<Button className='font-medium' fullWidth color='primary' type='submit'>
						Get Started
					</Button>
				</Form>
			</CardBody>
			<CardFooter className='flex-col text-xs gap-5'>
				Or sign in with
				<ul className='flex w-full gap-2'>
					<li className='w-full'>
						<Button fullWidth>
							<span className='iconify-color logos--google-icon text-lg' />
						</Button>
					</li>
					<li className='w-full'>
						<Button fullWidth>
							<span className='iconify logos--github-icon text-lg' />
						</Button>
					</li>
				</ul>
			</CardFooter>
		</Card>
	)
}
