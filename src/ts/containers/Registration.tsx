import React, { FC, useEffect } from 'react'

import { Container } from 'react-bootstrap'
import { getDuration } from 'ts/utils/countdown'

const Registration: FC = () => {
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
				</Container>
			</div>
		</>
	)
}

export default Registration
