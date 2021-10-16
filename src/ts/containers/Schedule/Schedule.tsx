import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'

import { friSchedule, satSchedule, ScheduleData } from './scheduleContent'

function Schedule(): React.ReactElement {
	const renderTable = (data: ScheduleData[]): React.ReactElement => {
		return (
			<div className='schedule-table'>
				{data.map((s, idx) => (
					<div key={idx} className='schedule-row'>
						<div className='time'>{s.time}</div>
						<div>
							<div className='title'>{s.title}</div>
							<div className='location'>{s.location}</div>
						</div>
					</div>
				))}
			</div>
		)
	}

	return (
		<div className='schedule py-5'>
			<Container>
				<Subheader
					text='Schedule'
					subtext='Tenative schedule for the 2022 HackUSU is subject to change'
				/>
				<Row>
					<Col md className='mb-5'>
						<h3>
							Friday, March 25<sup>th</sup>
						</h3>
						{renderTable(friSchedule)}
					</Col>
					<Col md>
						<h3>
							Saturday, March 26<sup>th</sup>
						</h3>
						{renderTable(satSchedule)}
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Schedule
