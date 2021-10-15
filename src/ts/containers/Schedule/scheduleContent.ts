export interface ScheduleData {
	time: string
	title: string
	location: string
}

export const friSchedule: ScheduleData[] = [
	{
		time: '3:00 - 4:00 pm',
		title: 'Registration and check-in',
		location: 'Courtyard',
	},
	{
		time: '4:00 - 5:00 pm',
		title: 'Opening',
		location: 'Auditorium (EBB 225)',
	},
	{
		time: '6:00 - 7:00 pm',
		title: 'Dinner',
		location: 'Courtyard',
	},
	{
		time: '8:00 - 9:00 pm',
		title: 'Workshop',
		location: 'HH 122',
	},
	{
		time: '...',
		title: '...',
		location: '...',
	},
]

export const satSchedule: ScheduleData[] = [
	{
		time: '12:00 am',
		title: 'Midnight snacks',
		location: 'HH first floor lobby',
	},
	{
		time: '8:00 - 9:00 pm',
		title: 'Workshop',
		location: 'HH 122',
	},
	{
		time: '...',
		title: '...',
		location: '...',
	},
]
