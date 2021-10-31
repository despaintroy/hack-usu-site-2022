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
		location: 'Courtyard',
		details:
			'Check-in will be available from 3:00 to midnight. Come pick-up your HackUSU event swag!',
	},
	{
		time: '4:00 - 5:00 pm',
		title: 'Opening Ceremonies',
		location: 'Auditorium (EBB 225)',
		details: 'Hang out afterward if you still need to find a team.',
	},
	{
		time: '5:00 pm',
		title: 'Start coding!',
	},
	{
		time: '6:00 - 7:00 pm',
		title: 'Dinner',
		location: 'Courtyard',
	},
	{
		time: 'Midnight',
		title: 'Aggie Ice Cream',
		location: '1st floor lobby',
	},
]

export const satSchedule: ScheduleData[] = [
	{
		time: '8:00 am',
		title: 'Breakfast',
		location: 'Courtyard',
	},
	{
		time: 'Noon',
		title: 'Lunch',
		location: 'Courtyard',
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
		time: '4:00 - 5:00 pm',
		title: 'Dinner',
		location: 'Courtyard',
	},
	{
		time: '5:00 - 6:00 pm',
		title: 'Judging for finalists',
		details: 'Finalists for each category are invited to present for judges',
	},
	{
		time: '6:15 - 7:00 pm',
		title: 'Award Ceremony',
		location: 'Auditorium (EBB 225)',
	},
]
