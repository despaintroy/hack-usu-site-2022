import React from 'react'

import { Container } from 'react-bootstrap'
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
