import React from 'react'

import { Container } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'
import { CategoriesData, categoriesList } from './categoriesContent'

function Categories(): React.ReactElement {
	const categoryTile = (category: CategoriesData): React.ReactElement => (
		<div className='category-tile' key={category.title}>
			<div className='title'>{category.title}</div>
			<div className='description'>{category.description}</div>
			{category.ideas.length > 0 && (
				<details className='ideas'>
					<summary>Project Ideas</summary>
					<ul>
						{category.ideas.map((suggestion: string, index: number) => (
							<li key={index}>{suggestion}</li>
						))}
					</ul>
				</details>
			)}
		</div>
	)

	return (
		<div className='categories py-5' id='prizes'>
			<Container>
				<Subheader text='Prze Categories' />
				<p className='fs-5'>
					You can start thinking of project ideas before the event, or
					brainstorm with a team after arriving. We&apos;ll ask you to choose
					one category to enter your project in.
				</p>
				<div className='tile-container'>
					{categoriesList.map(c => categoryTile(c))}
				</div>
			</Container>
		</div>
	)
}

export default Categories
