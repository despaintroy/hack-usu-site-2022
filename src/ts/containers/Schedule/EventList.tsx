import React, { FC } from 'react'
import { ScheduleItem } from './scheduleContent'
import WorkshopList from './SubEventList'

interface EventListProps {
	schedule: ScheduleItem[]
}

const EventList: FC<EventListProps> = props => {
	const { schedule } = props

	return (
		<div className='schedule-list'>
			{schedule.map((s, idx) => (
				<div key={idx} className='schedule-item'>
					<div className='time' hidden={!s.time}>
						{s.time}
					</div>
					<div className='title'>{s.title}</div>
					<div className='location' hidden={!s.location}>
						{s.location}
					</div>
					<div className='details' hidden={!s.details}>
						{s.details}
					</div>
					<WorkshopList hidden={!s.workshops} subEvents={s.workshops} />
				</div>
			))}
		</div>
	)
}

export default EventList
