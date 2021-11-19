import React, { useEffect } from 'react'

import { Button } from 'react-bootstrap'
import Particles from 'react-particles-js'
import { discordLink, registrationLink } from 'ts/utils/constants'
import { getDuration } from 'ts/utils/countdown'

function Lead(): React.ReactElement {
	const [duration, setDuration] = React.useState(getDuration())

	useEffect(() => {
		const interval = setInterval(() => setDuration(getDuration()), 1000)
		return (): void => clearInterval(interval)
	}, [])

	return (
		<div className='bg-primary lead'>
			<Particles
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
			/>
			<div className='lead-container'>
				<div>
					<h1>Hack USU</h1>
					<div className='date'>
						March 18–19
						<br />
						2022
					</div>
					<p className='countdown'>
						{duration.days} d, {duration.hours} h, {duration.minutes} m,{' '}
						{duration.seconds} s
					</p>
					<Button
						variant='success fw-bold text-uppercase'
						size='lg'
						className='mt-4 px-5'
						href={registrationLink}
						target='_blank'
						onClick={(): void =>
							gtag('event', 'sign_up', {
								method: 'Google',
							})
						}
					>
						Register for Free
					</Button>
					<br />
					<Button
						variant='light'
						className='mt-3'
						href={discordLink}
						target='_blank'
					>
						Join Discord
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Lead
