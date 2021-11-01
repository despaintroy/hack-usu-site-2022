export interface CategoriesData {
	title: string
	description: string
	ideas: string[]
}

export const categoriesList: CategoriesData[] = [
	{
		title: 'General',
		description: "Projects that don't fit the other categories!",
		ideas: [],
	},
	{
		title: 'Data Analytics & Visualization',
		description:
			'Demonstrate ways of gaining insights or displaying data in a creative way.',
		ideas: [],
	},
	{
		title: 'Game Development',
		description: 'Any game. Any technology.',
		ideas: [
			'Rewrite a simple classic game to have multi-player web functionality',
		],
	},
	{
		title: 'Privacy & Security',
		description:
			'Show us your great ideas related to user privacy, improved authentication methods, or system security.',
		ideas: [
			'Design a more secure user authentication system',
			"Create a tool to help users test their passwords' strength",
			"Write a program that tests people's ability to avoid phishing emails",
		],
	},
	{
		title: 'Hardware',
		description: 'All projects focused on physical hardware.',
		ideas: [],
	},
	{
		title: 'AI & Machine Learning',
		description: 'Show us how your program learns to solve a problem!',
		ideas: [],
	},
]
