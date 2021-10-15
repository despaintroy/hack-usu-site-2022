export interface FaqData {
	question: string
	answer: string
}

export const faqList: FaqData[] = [
	{
		question: 'Can I start now?',
		answer:
			"You can't use any code that was written before the start of the hackathon. However, we encourage you to begin thinking of ideas now!",
	},
	{
		question: 'Who can attend HackUSU?',
		answer:
			'Students from all schools are welcome! You must currently be a university or college student, or have graduated in the last 12 months. There is no restriction on major.',
	},
	{
		question: 'Does it cost anything to attend?',
		answer:
			"HackUSU is completely free! There's no entry fee, and we'll provide enough food and snacks for the entire 24 hours. How neat is that?",
	},
]
