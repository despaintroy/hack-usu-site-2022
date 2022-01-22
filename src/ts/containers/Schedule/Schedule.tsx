import React, { FC } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'
import EventList from './EventList'

import { friSchedule, satSchedule } from './scheduleContent'

const Schedule: FC = () => {
	return (
		<div className='schedule py-5' id='schedule'>
			<Container className='medium'>
				<Subheader
					text='Schedule'
					subtext='Tenative schedule is subject to change. Check back closer to the event for details on tech talks and workshops!'
				/>
				<Row>
					<Col md className='mb-5'>
						<h3>
							Friday, March 18<sup>th</sup>
						</h3>
						<EventList schedule={friSchedule} />
					</Col>
					<Col md>
						<h3>
							Saturday, March 19<sup>th</sup>
						</h3>
						<EventList schedule={satSchedule} />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Schedule
