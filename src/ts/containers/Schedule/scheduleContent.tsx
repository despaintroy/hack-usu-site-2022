import React from 'react'

import { DISCORD_LINK } from 'ts/utils/constants'

export interface ScheduleData {
	time: string
	title: string
	location?: string
	details?: string | React.ReactElement
}

export const friSchedule: ScheduleData[] = [
	{
		time: '3:00 pm',
		title: 'Check-in Opens',
		location: 'North entrance',
		details: (
			<>
				Check-in will be available from 3:00 to midnight. Come pick-up your
				HackUSU swag, and{' '}
				<a href={DISCORD_LINK} target='_blank' rel='noreferrer'>
					join the Discord!
				</a>
			</>
		),
	},
	{
		time: '4:00 - 5:00 pm',
		title: 'Opening Keynote',
		location: '4th floor (Perry Pavilion)',
		details:
			'The keynote and opening ceremonies will also be broadcast to overflow rooms on the 3rd floor. Hang out afterward if you still need to find a team!',
	},
	{
		time: '5:00 pm',
		title: 'Start coding!',
		details:
			'Groups can work in any study rooms, and 1st and 2nd floor classrooms.',
	},
	{
		time: '6:00 pm',
		title: 'Dinner',
		location: '2nd floor',
	},
	{
		time: '8:00 - 10:00 pm',
		title: 'Tech Talks & Workshops',
		location: '3rd floor classrooms',
		details: 'Topics to be announced.',
	},
	{
		time: 'Midnight',
		title: 'Aggie Ice Cream',
		location: '2nd floor',
	},
]

export const satSchedule: ScheduleData[] = [
	{
		time: '8:00 am',
		title: 'Breakfast',
		location: '2nd floor',
	},
	{
		time: '9:00 am - Noon',
		title: 'Tech Talks & Workshops',
		location: '3rd floor classrooms',
		details: 'Topics to be announced.',
	},
	{
		time: 'Noon',
		title: 'Lunch',
		location: '2nd floor',
	},
	{
		time: '3:30 pm',
		title: 'Coding ends!',
		details:
			'Submit your final code before 3:30, and your video demo before 4:00.',
	},
	{
		time: '4:00 - 6:00 pm',
		title: 'Dinner and Networking',
		location: '1st & 2nd floors',
		details:
			'Grab pizza on the 1st floor, then head upstairs to network with our sponsor companies. Bring your resume!',
	},
	{
		time: '5:00 - 6:00 pm',
		title: 'Judging for finalists',
		location: '3rd floor classrooms',
		details:
			'Finalists for each category are invited to present for judges. Anyone can come watch!',
	},
	{
		time: '6:30 pm',
		title: 'Award Ceremony',
		location: '4th floor (Perry Pavilion)',
		details:
			'Winners are announced for each category, and there will be a raffle drawing for everyone!',
	},
]
