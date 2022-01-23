import React, { FC } from 'react'

import { Button, Container } from 'react-bootstrap'
import {
	REGISTRATION_OPEN,
	REGISTRATION_LINK,
	REGISTRATION_CLOSED_MESSAGE,
	DISCORD_LINK,
} from 'ts/utils/constants'

const Lead: FC = () => {
	return (
		<div className='lead'>
			{/* <Particles
				style={{
					position: 'absolute',
					left: '0',
					top: '0',
				}}
				params={{
					particles: {
						number: {
							value: 100,
							density: {
								enable: true,
							},
						},
						line_linked: {
							enable: true,
							opacity: 0.2,
						},
						move: {
							speed: 1.5,
						},
						opacity: {
							value: 0.2,
						},
					},
				}}
			/> */}
			<Container className='content'>
				<img
					className='lead-logo'
					src={`${process.env.PUBLIC_URL}/lead-images/logo-curves.svg`}
				/>
				<div className='date'>
					March <span className='text-nowrap'>18-19</span>, 2022
				</div>

				<div className='cta mx-auto text-center mt-5'>
					<h2>
						<b>
							24hr Coding & hardware competition with workshops, networking, and
							plenty of food
						</b>
					</h2>
					<div className='buttons'>
						{REGISTRATION_OPEN ? (
							<Button
								variant='primary'
								size='lg'
								href={REGISTRATION_LINK}
								target='_blank'
								onClick={(): void =>
									gtag('event', 'sign_up', {
										method: 'Google',
									})
								}
							>
								Register for Free
							</Button>
						) : (
							<p className='mt-5 mb-0 message'>{REGISTRATION_CLOSED_MESSAGE}</p>
						)}
						<Button
							variant='secondary'
							size='lg'
							href={DISCORD_LINK}
							target='_blank'
						>
							Join Discord
						</Button>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Lead
