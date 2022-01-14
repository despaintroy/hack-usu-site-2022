export interface FaqData {
	question: string
	answer: string
}

export const faqList: FaqData[] = [
	{
		question: 'Can I start now?',
		answer:
			"You can't use any code that was written before the start of the hackathon. However, you can begin thinking of ideas and forming teams now!",
	},
	{
		question: 'What is the max team size?',
		answer: 'You may have up to 4 students on your team',
	},
	{
		question: 'Who can attend HackUSU?',
		answer:
			'All university or college students and high school seniors are welcome! Participants must be current students or have graduated in the last 12 months. There is no restriction on major.',
	},
	{
		question: 'How does judging work?',
		answer:
			'All teams will submit a short video of their project on completion. The top teams from each category will present their project in front of judges before final selections are made. Winners will be announced at the award ceremony following the event.',
	},
	{
		question: 'Does it cost anything to attend?',
		answer:
			"HackUSU is completely free! There's no entry fee, and we'll provide enough food and snacks for the entire 24 hours. How neat is that?",
	},
]
