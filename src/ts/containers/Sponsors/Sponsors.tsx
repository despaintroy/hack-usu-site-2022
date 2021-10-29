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
					subtext='Thanks to the amazing companies who sponsor HackUSU!'
				/>
				<p>
					<Alert variant='primary'>
						<Alert.Heading>Want to sponsor us?</Alert.Heading>
						To discuss sponsorship options, please contact us at{' '}
						<a href={hackUSUEmail}>{hackUSUEmail}</a>. Thank you for your
						interest!
					</Alert>
				</p>
			</Container>
		</div>
	)
}

export default Sponsors
