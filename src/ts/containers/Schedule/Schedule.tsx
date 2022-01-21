import React, { FC } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'

import { friSchedule, satSchedule, ScheduleData } from './scheduleContent'

const Schedule: FC = () => {
	const renderTable = (data: ScheduleData[]): React.ReactElement => {
		return (
			<div className='schedule-list'>
				{data.map((s, idx) => (
					<div key={idx} className='schedule-item'>
						<div className='time'>{s.time}</div>
						<div className='title'>{s.title}</div>
						<div className='location'>{s.location}</div>
						<div className='details'>{s.details}</div>
					</div>
				))}
			</div>
		)
	}

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
						{renderTable(friSchedule)}
					</Col>
					<Col md>
						<h3>
							Saturday, March 19<sup>th</sup>
						</h3>
						{renderTable(satSchedule)}
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Schedule
