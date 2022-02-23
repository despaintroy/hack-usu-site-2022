import React, { FC } from 'react'

import { Button, Col, Container, Row } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'

const hhGoogleMapsLink = 'https://goo.gl/maps/sWuht9HKoxj7rqyL9'
const parkingGoogleMapsLink = 'https://goo.gl/maps/VeLNZQtZg2UDcQU99'

const Location: FC = () => {
	return (
		<div className='location pb-5 bg-primary' id='location'>
			<img
				src={process.env.PUBLIC_URL + '/huntsman-hall-entrance.jpg'}
				className='hh-banner'
			/>
			<Container className='medium'>
				<Subheader
					text='Location'
					subtext='HackUSU 2022 will be hosted at Huntsman Hall, Utah State University Campus'
					light
				/>
				<Row>
					<Col sm={true} className='mb-5'>
						<h3>Huntsman Hall</h3>
						<iframe
							style={{ border: 0 }}
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4830.547521433922!2d-111.81186546678465!3d41.74235603063301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87547e7de4d0e4b1%3A0xc88fd9fc64697ebb!2sUSU%20Huntsman%20Hall%20Building%20(HH)!5e0!3m2!1sen!2sus!4v1645585714537!5m2!1sen!2sus'
							width='100%'
							height='200'
							frameBorder='0'
							allowFullScreen={true}
							className='mb-2'
						/>
						<Button
							variant='light'
							href={hhGoogleMapsLink}
							target='_blank'
							className='d-block mx-auto mb-3'
						>
							Open Huntsman Hall in Maps &nbsp;&rarr;
						</Button>
						<p>
							Huntsman Hall is located at the intersection of highway 89 (E 400
							N) and Champ Drive in Logan, UT.
						</p>
						<p>Check in will be at the North entrance.</p>
					</Col>
					<Col sm={true}>
						<h3>Parking</h3>
						<iframe
							style={{ border: 0 }}
							src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2641.1200547573844!2d-111.81472584612727!3d41.74439523203828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3e761654699288c!2sBig%20Blue%20Terrace!5e0!3m2!1sen!2sus!4v1603402971104!5m2!1sen!2sus'
							width='100%'
							height='200'
							frameBorder='0'
							allowFullScreen={true}
							className='mb-2'
						/>
						<Button
							variant='light'
							href={parkingGoogleMapsLink}
							target='_blank'
							className='d-block mx-auto mb-3'
						>
							Open Parking in Maps &nbsp;&rarr;
						</Button>
						<p>
							For students travelling to HackUSU from outside Logan, overnight
							visitor parking is available in the USU Big Blue Terrace. You will
							need to take a ticket to enter the parking garage, but you may
							exit for free after 7:30pm on Friday.
						</p>
						<p>
							For USU Logan students, please park where you normally would on
							campus, or in the Aggie Terrace under the LLC dorms. Aggie Terrace
							gates will lift at 7:30pm on Friday.
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Location
