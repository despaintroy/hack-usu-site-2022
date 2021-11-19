export interface ScheduleData {
	time: string
	title: string
	location?: string
	details?: string
}

export const friSchedule: ScheduleData[] = [
	{
		time: '3:00 - 4:00 pm',
		title: 'Registration and check-in',
		location: 'North entrance',
		details:
			'Check-in will be available from 3:00 to midnight. Come pick-up your HackUSU swag, and join the Discord!',
	},
	{
		time: '4:00 - 5:00 pm',
		title: 'Keynote Speaker',
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
		time: '6:00 - 7:00 pm',
		title: 'Dinner',
		location: '2nd floor',
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
		title: 'Workshops',
		location: '3rd floor classrooms',
		details: 'Workshop details to be announced.',
	},
	{
		time: 'Noon',
		title: 'Lunch',
		location: '2nd floor',
	},
	{
		time: '3:30 pm',
		title: 'Coding ends!',
		details: 'Be sure to submit your final code',
	},
	{
		time: '3:30 - 4:00 pm',
		title: 'Submit project video demos',
	},
	{
		time: '4:00 - 6:00 pm',
		title: 'Dinner with Employers',
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
		time: '6:30 - 7:00 pm',
		title: 'Award Ceremony',
		location: '4th floor (Perry Pavilion)',
		details:
			'Winners are announced for each category, and there will be a raffle drawing for everyone!',
	},
]
