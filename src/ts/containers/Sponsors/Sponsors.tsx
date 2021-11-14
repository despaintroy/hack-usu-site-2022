import React from 'react'

import { Alert, Container } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'
import { hackUSUEmail } from 'ts/utils/constants'

function Sponsors(): React.ReactElement {
	return (
		<div className='sponsors py-5' id='sponsors'>
			<Container>
				<Subheader
					text='Sponsors'
					subtext='Thanks to the amazing companies and organizations who sponsor HackUSU!'
				/>
				<Alert variant='primary' className='mb-5'>
					<Alert.Heading>Want to sponsor us?</Alert.Heading>
					To discuss sponsorship options, please contact us at{' '}
					<a href={`mailto:${hackUSUEmail}`}>{hackUSUEmail}</a>. Thank you for
					your interest!
				</Alert>
				<div className='sponsors-list'>
					<div>
						<img
							src={process.env.PUBLIC_URL + '/sponsors/college-of-science.png'}
						/>
					</div>
					<div>
						<img
							src={process.env.PUBLIC_URL + '/sponsors/huntsman-school.jpg'}
						/>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Sponsors
