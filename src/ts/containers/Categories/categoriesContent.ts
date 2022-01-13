export interface CategoriesData {
	materialIcon: string
	title: string
	description: string
	ideas: string[]
}

export const categoriesList: CategoriesData[] = [
	{
		title: 'Data Analytics & Visualization',
		materialIcon: 'insights',
		description:
			'Demonstrate ways of gaining insights or displaying data in a creative way',
		ideas: [
			'Create an interactive visualization of one of the datasets on www.data.gov',
			'Show a real-time stock market tracker',
		],
	},
	{
		title: 'Game Development',
		materialIcon: 'sports_esports',
		description: 'Any game. Any technology.',
		ideas: [
			'Rewrite a simple classic game to have multi-player web functionality',
		],
	},
	{
		title: 'Privacy & Security',
		materialIcon: 'lock',
		description:
			'Demonstrate improvements to user privacy, authentication methods, or system security.',
		ideas: [
			'Design a more secure user authentication system',
			"Create a tool to help users test their passwords' strength",
			"Write a program that tests people's ability to avoid phishing emails",
		],
	},
	{
		title: 'Hardware',
		materialIcon: 'precision_manufacturing',
		description: 'All projects focused on physical hardware.',
		ideas: [],
	},
	{
		title: 'AI & Machine Learning',
		materialIcon: 'lightbulb',
		description: 'Show us how your program learns to solve a problem!',
		ideas: [],
	},
	{
		title: 'Health & Fitness',
		materialIcon: 'fitness_center',
		description: 'All projects related to healthcare or personal fitness',
		ideas: [],
	},
	{
		title: 'General',
		materialIcon: 'code',
		description: "Projects that don't fit the other categories!",
		ideas: [
			'Weather app that displays weather info from a free API',
			'Budgeting app for planning and tracking spending',
		],
	},
]
