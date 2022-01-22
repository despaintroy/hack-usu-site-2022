import React, { FC } from 'react'
import { Workshop } from './scheduleContent'

interface WorkshopListProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	subEvents?: Workshop[]
}

const WorkshopList: FC<WorkshopListProps> = props => {
	const { subEvents } = props

	return (
		<div className='workshop-list'>
			{subEvents?.map((s, idx) => (
				<div key={idx} className='workshop-item'>
					<div className='workshop-time'>{s.time}</div>
					<div className='workshop-title'>{s.title}</div>
					<div className='workshop-location'>{s.location}</div>
					<div className='workshop-presenter'>{s.presenter}</div>
				</div>
			))}
		</div>
	)
}

export default WorkshopList
