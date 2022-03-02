import React, { FC } from 'react'
import { Workshop, ConcurrentWorkshops } from './scheduleContent'

interface WorkshopListProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	subEvents?: (Workshop | ConcurrentWorkshops)[]
}

const WorkshopList: FC<WorkshopListProps> = props => {
	const { subEvents } = props

	return (
		<div className='workshop-list'>
			{subEvents?.map((s, idx) => {
				// If concurrent workshops, render them as a list
				if ('workshops' in s) {
					const { workshops } = s
					return (
						<div key={idx} className='workshop-item'>
							<div className='workshop-time'>{s.time}</div>
							{workshops.map((w, idx) => (
								<div key={idx} className='concurrent-workshop-item'>
									<div className='workshop-title'>{w.title}</div>
									<div className='workshop-location'>{w.location}</div>
									<div className='workshop-presenter'>{w.presenter}</div>
								</div>
							))}
						</div>
					)
				}
				// Else, it is a singel workshop
				return (
					<div key={idx} className='workshop-item'>
						<div className='workshop-time'>{s.time}</div>
						<div className='workshop-title'>{s.title}</div>
						<div className='workshop-location'>{s.location}</div>
						<div className='workshop-presenter'>{s.presenter}</div>
					</div>
				)
			})}
		</div>
	)
}

export default WorkshopList
