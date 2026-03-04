import { Button, Card, Checkbox, Input, Label } from '@heroui/react'
import { Chrome, Github, Lock, LogIn, Mail, Rocket } from 'lucide-react'

export default async function LoginPage() {
	return (
		<section className='min-h-dvh bg-background text-foreground'>
			<div className='mx-auto flex min-h-dvh max-w-6xl flex-col items-center justify-center gap-8 px-6 py-10 md:flex-row md:justify-between'>
				<div className='w-full max-w-xl space-y-6'>
					<div className='inline-flex items-center gap-3 text-sm font-medium text-foreground/70'>
						<span className='inline-block size-2 rounded-full bg-foreground/70' />
						<span className='inline-flex items-center gap-2'>
							<Rocket className='size-4' />
							Postie
						</span>
					</div>

					<h1 className='text-4xl font-semibold tracking-tight sm:text-5xl'>
						Ship APIs faster.
						<br />
						Test, trace, and share.
					</h1>

					<p className='text-lg text-foreground/70'>
						Sign in to manage requests, environments, and history in your Postie REST workspace.
					</p>

					<div className='flex flex-wrap items-center gap-3 text-sm text-foreground/60'>
						<span>New to Postie?</span>
						<a className='font-medium text-foreground underline-offset-4 hover:underline' href='/register'>
							Create account
						</a>
					</div>
				</div>

				<Card className='w-full max-w-md border border-border/60 bg-content1 p-6 shadow-lg'>
					<Card.Header className='flex flex-col items-start gap-2 pb-2'>
						<p className='text-sm text-foreground/60'>Welcome back to Postie</p>
						<h2 className='text-2xl font-semibold'>Sign in to your workspace</h2>
					</Card.Header>

					<Card.Content className='flex flex-col gap-5 pt-2'>
						<div className='flex flex-col gap-3'>
							<Button className='w-full justify-center gap-2' variant='tertiary'>
								<Chrome className='size-4' />
								<span>Continue with Google</span>
							</Button>
							<Button className='w-full justify-center gap-2' variant='tertiary'>
								<Github className='size-4' />
								<span>Continue with GitHub</span>
							</Button>
						</div>

						<div className='flex items-center gap-3 text-xs text-foreground/50'>
							<span className='h-px flex-1 bg-border' />
							<span>or</span>
							<span className='h-px flex-1 bg-border' />
						</div>

						<form className='flex flex-col gap-4'>
							<div className='flex flex-col gap-2'>
								<Label className='inline-flex items-center gap-2' htmlFor='login-email'>
									<Mail className='size-4' />
									Email
								</Label>
								<Input
									id='login-email'
									placeholder='name@company.com'
									type='email'
									autoComplete='email'
									variant='secondary'
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<Label className='inline-flex items-center gap-2' htmlFor='login-password'>
									<Lock className='size-4' />
									Password
								</Label>
								<Input
									id='login-password'
									placeholder='Enter your password'
									type='password'
									autoComplete='current-password'
									variant='secondary'
								/>
							</div>

							<div className='flex items-center justify-between text-sm'>
								<Checkbox id='remember-me'>
									<Checkbox.Control>
										<Checkbox.Indicator />
									</Checkbox.Control>
									<Checkbox.Content>
										<Label htmlFor='remember-me'>Remember me</Label>
									</Checkbox.Content>
								</Checkbox>
								<a className='text-foreground/70 underline-offset-4 hover:underline' href='/forgot'>
									Forgot password?
								</a>
							</div>

							<Button variant='primary' className='w-full justify-center gap-2' type='submit'>
								<LogIn className='size-4' />
								<span>Sign in</span>
							</Button>
						</form>
					</Card.Content>

					<Card.Footer className='flex flex-col gap-4 pt-2 text-center text-xs text-foreground/50'>
						<p>
							By continuing, you agree to the{' '}
							<a className='underline-offset-4 hover:underline' href='/terms'>
								terms of service
							</a>{' '}
							and{' '}
							<a className='underline-offset-4 hover:underline' href='/privacy'>
								privacy policy
							</a>
							.
						</p>
						<p>
							Need help?{' '}
							<a className='underline-offset-4 hover:underline' href='/support'>
								Contact support
							</a>
						</p>
					</Card.Footer>
				</Card>
			</div>
		</section>
	)
}
