import React from 'react'

import { Button, Col, Container, Row } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'

const googleMapsLink =
	'https://www.google.com/maps/place/USU+Huntsman+Hall+Building+(HH)/@41.7404617,-111.8104557,18.3z/data=!4m5!3m4!1s0x87547e7de4d0e4b1:0xc88fd9fc64697ebb!8m2!3d41.7406755!4d-111.8099186'

function Location(): React.ReactElement {
	return (
		<div className='location py-5 bg-primary'>
			<Container>
				<Subheader
					text='Location'
					subtext='HackUSU 2022 will be hosted at Huntsman Hall, Utah State University Campus'
					light
				/>
				<img
					src={process.env.PUBLIC_URL + '/huntsman-hall.jpg'}
					className='hh-banner'
				/>
				<Row>
					<Col sm={true} className='mb-4'>
						<div className='placeholder map w-100'>
							Campus map around Huntsman Hall with marked parking areas
						</div>
					</Col>
					<Col sm={true}>
						<h3>Huntsman Hall</h3>
						<Button variant='light' href={googleMapsLink} target='_blank'>
							Open in Google Maps &nbsp;&rarr;
						</Button>
						<h3 className='mt-5'>Parking</h3>
						<p>
							Parking is available after 5:00pm in any of the areas marked on
							the map.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Location
