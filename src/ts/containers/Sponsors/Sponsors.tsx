import React, { FC } from 'react'

import { Alert, Container } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'
import { CONTACT_EMAIL } from 'ts/utils/constants'
import { sponsorData } from './sponsorData'

const Sponsors: FC = () => {
	return (
		<div className='sponsors py-5' id='sponsors'>
			<Container>
				<Subheader
					text='Sponsors'
					subtext='Thanks to the amazing companies and organizations who sponsor HackUSU!'
				/>
				<div className='sponsors-list'>
					{sponsorData.map((sponsor, index) => (
						<a key={index} href={sponsor.url} target='_blank' rel='noreferrer'>
							<img
								src={process.env.PUBLIC_URL + '/sponsors/' + sponsor.fileName}
							/>
						</a>
					))}
				</div>
				<Alert variant='primary' className='mb-5'>
					<Alert.Heading>Want to sponsor us?</Alert.Heading>
					To discuss sponsorship options, please contact us at{' '}
					<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Thank you for
					your interest!
				</Alert>
			</Container>
		</div>
	)
}

export default Sponsors
