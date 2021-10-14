export interface ScheduleData {
	time: string
	event: string
	location: string
}

export const friSchedule: ScheduleData[] = [
	{
		time: '3:00 - 4:00 pm',
		event: 'Registration and check-in',
		location: 'HH courtyard',
	},
	{
		time: '4:00 - 5:00 pm',
		event: 'Opening',
		location: 'EBB 225 Auditorium',
	},
	{
		time: '6:00 - 7:00 pm',
		event: 'Dinner',
		location: 'HH Courtyard',
	},
	{
		time: '8:00 - 9:00 pm',
		event: 'Workshop',
		location: 'HH 122',
	},
	{
		time: '...',
		event: '...',
		location: '...',
	},
]

export const satSchedule: ScheduleData[] = [
	{
		time: '12:00 am',
		event: 'Midnight snacks',
		location: 'HH first floor lobby',
	},
	{
		time: '8:00 - 9:00 pm',
		event: 'Workshop',
		location: 'HH 122',
	},
	{
		time: '...',
		event: '...',
		location: '...',
	},
]
