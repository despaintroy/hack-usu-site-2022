import React, { useEffect } from 'react'

import { Button, Container } from 'react-bootstrap'
import {
	DISCORD_LINK,
	REGISTRATION_CLOSED_MESSAGE,
	REGISTRATION_LINK,
	REGISTRATION_OPEN,
} from 'ts/utils/constants'
import { getDuration } from 'ts/utils/countdown'

function Lead(): React.ReactElement {
	const [duration, setDuration] = React.useState(getDuration())

	useEffect(() => {
		const interval = setInterval(() => setDuration(getDuration()), 1000)
		return (): void => clearInterval(interval)
	}, [])

	return (
		<>
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
				{/* <img className='central-building' src={`${process.env.PUBLIC_URL}/lead-images/central-building.png`} /> */}
				<img
					className='tower'
					src={`${process.env.PUBLIC_URL}/lead-images/tower.png`}
				/>
				<div className='text-container'>
					<div>
						<h1>
							Hack
							<br />
							USU
						</h1>
						<div className='date'>
							March <span className='text-nowrap'>18–19</span>, 2022
						</div>
					</div>
				</div>
			</div>
			<div className='bg-primary py-5'>
				<Container>
					<p className='countdown'>
						{duration.days} d, {duration.hours} h, {duration.minutes} m,{' '}
						{duration.seconds} s
					</p>
					{REGISTRATION_OPEN ? (
						<Button
							variant='success fw-bold text-uppercase'
							size='lg'
							className='mt-4 px-5'
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
						<p className='mt-3 mb-0'>{REGISTRATION_CLOSED_MESSAGE}</p>
					)}
					<br />
					<Button
						variant='light'
						className='mt-3'
						href={DISCORD_LINK}
						target='_blank'
					>
						Join Discord
					</Button>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</Container>
			</div>
		</>
	)
}

export default Lead
