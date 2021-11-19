import { START_TIME } from './constants'

export type Duration = {
	days: number
	hours: number
	minutes: number
	seconds: number
}

export const getDuration = (): Duration => {
	const second = 1000
	const minute = second * 60
	const hour = minute * 60
	const day = hour * 24

	const difference = Math.max(0, START_TIME.getTime() - new Date().getTime())

	return {
		days: Math.floor(difference / day),
		hours: Math.floor((difference % day) / hour),
		minutes: Math.floor((difference % hour) / minute),
		seconds: Math.floor((difference % minute) / second),
	}
}
