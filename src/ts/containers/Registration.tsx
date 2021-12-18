import React, { useEffect } from 'react'

import { Button, Container } from 'react-bootstrap'
import {
	DISCORD_LINK,
	REGISTRATION_CLOSED_MESSAGE,
	REGISTRATION_LINK,
	REGISTRATION_OPEN,
} from 'ts/utils/constants'
import { getDuration } from 'ts/utils/countdown'

function Registration(): React.ReactElement {
	const [duration, setDuration] = React.useState(getDuration())

	useEffect(() => {
		const interval = setInterval(() => setDuration(getDuration()), 1000)
		return (): void => clearInterval(interval)
	}, [])

	return (
		<>
			<div className='registration bg-primary py-5' id='registration'>
				<Container>
					<p className='countdown'>
						<span>– Starting –</span>
						<br />
						{duration.days} d. {duration.hours} h. {duration.minutes} m.{' '}
						{duration.seconds} s.
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
						<p className='mt-5 mb-0 message'>{REGISTRATION_CLOSED_MESSAGE}</p>
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
				</Container>
			</div>
		</>
	)
}

export default Registration
