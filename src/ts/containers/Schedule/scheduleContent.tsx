import React from 'react'

import { DISCORD_LINK } from 'ts/utils/constants'

export interface Workshop {
	time?: string
	title: string
	location?: string
	presenter?: string
}

export interface ConcurrentWorkshops {
	time: string
	workshops: Omit<Workshop, 'time'>[]
}

export interface ScheduleItem {
	time?: string
	title: string
	location?: string
	details?: string | React.ReactElement
	workshops?: (Workshop | ConcurrentWorkshops)[]
}

export const friSchedule: ScheduleItem[] = [
	{
		time: '4:00 pm',
		title: 'Check-in Opens',
		location: 'Huntsman Hall North Entrance',
		details: (
			<>
				Check-in will be available from 4:00 to midnight. Come pick-up your
				HackUSU swag, and{' '}
				<a href={DISCORD_LINK} target='_blank' rel='noreferrer'>
					join the Discord!
				</a>
			</>
		),
	},
	{
		time: '4:30 pm',
		title: 'Dinner & Team Forming',
		location: '2nd floor',
	},
	{
		time: '6:00 pm',
		title: 'Opening Keynote',
		location: 'USU Eccles Conference Center (Auditorium)',
		details:
			'Jeannie Johnson, founding director of the Center for Anticipatory Intelligence, will deliver the opening keynote. The Eccles Conference Center is located across the sidewalk from the Huntsman Hall North Entrance.',
	},
	{
		time: '6:45 pm',
		title: 'Start coding!',
		details:
			'Groups can work in any study rooms, and 1st and 2nd floor classrooms.',
	},
	{
		title: 'Tech Talks & Workshops',
		workshops: [
			{
				time: '7:00 pm',
				workshops: [
					{
						title: 'Firebase: Cloud Services Simplified',
						location: 'Room 326',
						presenter: 'Joseph Ditton - USU Computer Science',
					},
					{
						title: 'Intro to Kotlin',
						location: 'Room 322',
						presenter: 'Joseph Ivie - Lightning Kite',
					},
					{
						title: 'Robotics Showcase',
						location: 'Room 320',
						presenter:
							'Mario Harper - Robotics and Artificial Intelligence Lab',
					},
				],
			},
			{
				title: 'Khrysalis: Advanced Source-to-Source Transpilation',
				time: '8:00 pm',
				location: 'Room 322',
				presenter: 'Joseph Ivie - Lightning Kite',
			},
			{
				title: 'Khrysalis: Intro Hands-on Workshop',
				time: '9:00 pm',
				location: 'Room 322',
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
				location: 'Room 326',
				presenter: 'USU Career Design Center',
			},
			{
				time: '10:00 am',
				workshops: [
					{
						title: 'How to Build Awesome Web APIs',
						location: 'Room 322',
						presenter: 'Maiden Voyage Software',
					},
					{
						title: 'Effective Interviewing Skills',
						location: 'Room 326',
						presenter: 'USU Career Design Center',
					},
				],
			},
			{
				title: 'Career & Internship Search Strategies',
				time: '11:00 am',
				location: 'Room 326',
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
		title: 'Tech Talks & Workshops',
		workshops: [
			{
				title: 'Kotlin Server',
				time: '1:00 pm',
				location: 'Room 322',
				presenter: 'Joseph Ivie - Lightning Kite',
			},
			{
				title: 'Reactive Programming with RX',
				time: '2:00 pm',
				location: 'Room 322',
				presenter: 'Joseph Ivie - Lightning Kite',
			},
		],
	},
	{
		time: '3:30 pm',
		title: 'Coding ends!',
		details: 'Record and submit a short 2-minute video of what you made!',
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
		title: 'Judging for Finalists',
		location: '3rd floor classrooms',
		details:
			'Finalists for each category are invited to answer questions about their project for the judges. Anyone can come watch!',
	},
	{
		time: '6:30 pm',
		title: 'Award Ceremony',
		location: '4th floor (Perry Pavilion)',
		details:
			'Winners are announced for each category, and there will be a raffle drawing for everyone!',
	},
]
