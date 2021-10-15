import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'

import { friSchedule, satSchedule, ScheduleData } from './scheduleContent'

function Schedule(): React.ReactElement {
	const renderTable = (data: ScheduleData[]): React.ReactElement => {
		return (
			<div className='schedule-table'>
				{data.map((s, idx) => (
					<Row key={idx}>
						<Col xs={3}>{s.time}</Col>
						<Col>{s.event}</Col>
						<Col>{s.location}</Col>
					</Row>
				))}
			</div>
		)
	}

	return (
		<div className='schedule py-5'>
			<Container className='narrow'>
				<Subheader
					text='Schedule'
					subtext='Tenative schedule for the 2022 HackUSU is subject to change'
				/>
				<h3>
					Friday, March 25<sup>th</sup>
				</h3>
				{renderTable(friSchedule)}

				<h3 className='mt-5'>
					Saturday, March 26<sup>th</sup>
				</h3>
				{renderTable(satSchedule)}
			</Container>
		</div>
	)
}

export default Schedule
