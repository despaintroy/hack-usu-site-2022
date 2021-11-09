import React from 'react'

import { Button } from 'react-bootstrap'
import Particles from 'react-particles-js'
import { registrationLink } from 'ts/utils/constants'

function Lead(): React.ReactElement {
	return (
		<div className='bg-primary full-height lead'>
			<Particles />
			<div className='lead-container'>
				<div>
					<h1>Hack USU</h1>
					<div className='date'>
						March 18–19
						<br />
						2022
					</div>
					<Button
						variant='success fw-bold text-uppercase'
						size='lg'
						className='mt-5 px-5'
						href={registrationLink}
						target='_blank'
					>
						Register Now
					</Button>
					<br />
					{/* <Button variant='outline-light' className='mt-5' href={discordLink}>
						Join Discord
					</Button> */}
				</div>
			</div>
		</div>
	)
}

export default Lead
