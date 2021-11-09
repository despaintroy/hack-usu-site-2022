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
		location: 'Huntsman Hall - North entrance',
		details:
			'Check-in will be available from 3:00 to midnight. Come pick-up your HackUSU swag and join the Discord!',
	},
	{
		time: '4:00 - 5:00 pm',
		title: 'Keynote Speaker',
		location: '4th floor (Perry Pavilion)',
		details: 'Hang out afterward if you still need to find a team',
	},
	{
		time: '5:00 pm',
		title: 'Start coding!',
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
		details: 'Workshop details to be announced closer to the event',
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
		time: '4:00 - 5:30 pm',
		title: 'Dinner with Employers',
		location: '2nd floor',
		details:
			'Come have dinner while meeting with our sponsors. Bring your resume!',
	},
	{
		time: '5:00 - 6:00 pm',
		title: 'Judging for finalists',
		details:
			"Finalists for each category are invited to present for judges. Check Discord for each category's room numbers.",
	},
	{
		time: '6:15 - 7:00 pm',
		title: 'Award Ceremony',
		location: '4th floor (Perry Pavilion)',
	},
]
