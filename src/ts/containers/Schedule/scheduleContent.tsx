import React from 'react'

import { DISCORD_LINK } from 'ts/utils/constants'

export interface Workshop {
	time?: string
	title: string
	location?: string
	presenter?: string
}

export interface ScheduleItem {
	time?: string
	title: string
	location?: string
	details?: string | React.ReactElement
	workshops?: Workshop[]
}

export const friSchedule: ScheduleItem[] = [
	{
		time: '3:00 pm',
		title: 'Check-in Opens',
		location: 'Huntsman Hall North Entrance',
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
		location: 'USU Conference Center',
		details:
			'The keynote and opening ceremonies will also be broadcast to overflow rooms in Huntsman Hall. Hang out afterward if you still need to find a team!',
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
		title: 'Tech Talks & Workshops',
		workshops: [
			{
				title: 'Firebase: Cloud Services Simplified',
				time: '7:00 pm',
				location: 'Room 326',
				presenter: 'Joseph Ditton - USU Computer Science',
			},
			{
				title: 'Robotics Showcase',
				time: '7:00 pm',
				location: 'EBB 215 Auditorium',
				presenter: 'Mario Harper - USU Computer Science',
			},
			{
				title: 'Khrysalis: Clean Source-to-Source Transpilation',
				time: '8:00 pm',
				location: 'Room 470 (Perry Pavillion)',
				presenter: 'Joseph Ivie - Lightning Kite',
			},
			{
				title: 'Khrysalis: Hands-on Workshop',
				time: '9:00 pm',
				location: 'Room 470 (Perry Pavillion)',
				presenter: 'Joseph Ivie - Lightning Kite',
			},
			{
				title: 'Collaborative Software Development',
				time: '10:00 pm',
				location: 'Room 326',
				presenter: 'Hunter Henrichsen',
			},
		],
	},
	{
		time: 'Midnight',
		title: 'Aggie Ice Cream',
		location: '2nd floor',
	},
]

export const satSchedule: ScheduleItem[] = [
	{
		time: '8:00 am',
		title: 'Breakfast',
		location: '2nd floor',
	},
	{
		title: 'Tech Talks & Workshops',
		workshops: [
			{
				title: 'Resumes and Cover Letters that Work!',
				time: '9:00 am',
				location: 'Room 470 (Perry Pavillion)',
				presenter: 'USU Career Design Center',
			},
			{
				title: 'Effective Interviewing Skills',
				time: '10:00 am',
				location: 'Room 470 (Perry Pavillion)',
				presenter: 'USU Career Design Center',
			},
			{
				title: 'Career & Internship Search Strategies',
				time: '11:00 am',
				location: 'Room 470 (Perry Pavillion)',
				presenter: 'USU Career Design Center',
			},
		],
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
