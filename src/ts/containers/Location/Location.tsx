import React, { FC } from 'react'

import { Button, Col, Container, Row } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'

const googleMapsLink =
	'https://www.google.com/maps/place/USU+Huntsman+Hall+Building+(HH)/@41.7404617,-111.8104557,18.3z/data=!4m5!3m4!1s0x87547e7de4d0e4b1:0xc88fd9fc64697ebb!8m2!3d41.7406755!4d-111.8099186'

const Location: FC = () => {
	return (
		<div className='location pb-5 mt-5 bg-primary' id='location'>
			<img
				src={process.env.PUBLIC_URL + '/huntsman-hall-entrance.jpg'}
				className='hh-banner'
			/>
			<Container>
				<Subheader
					text='Location'
					subtext='HackUSU 2022 will be hosted at Huntsman Hall, Utah State University Campus'
					light
				/>
				<Row>
					<Col sm={true} className='mb-5'>
						<h3>Huntsman Hall</h3>
						<p>
							Huntsman Hall is located at the intersection of highway 89 (E 400
							N) and Champ Drive in Logan, UT.
						</p>
						<p>Check in will be at the North entrance.</p>
						<Button variant='light' href={googleMapsLink} target='_blank'>
							Open in Google Maps &nbsp;&rarr;
						</Button>
					</Col>
					<Col sm={true}>
						<h3>Parking</h3>
						<p>
							Overnight parking for individual vehicles and busses will be
							available at HackUSU. We will provide additional details closer to
							the event.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Location
