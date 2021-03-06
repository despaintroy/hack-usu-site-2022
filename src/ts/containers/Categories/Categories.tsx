import React, { FC } from 'react'

import { Container } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'

import { CategoriesData, categoriesList } from './categoriesContent'

const Categories: FC = () => {
	const categoryTile = (category: CategoriesData): React.ReactElement => (
		<div className='category-tile rounded shadow-sm' key={category.title}>
			<div className='material-icons icon'>{category.materialIcon}</div>
			<div className='title'>{category.title}</div>
			<div className='description'>{category.description}</div>
			{/* {category.ideas.length > 0 && (
				<details className='ideas'>
					<summary>Project Ideas</summary>
					<ul>
						{category.ideas.map((suggestion: string, index: number) => (
							<li key={index}>{suggestion}</li>
						))}
					</ul>
				</details>
			)} */}
		</div>
	)

	return (
		<div className='categories py-5' id='categories'>
			<Container>
				<Subheader
					text='Prize Categories'
					subtext='You can start thinking of project ideas before the event, or brainstorm with a team after arriving!'
				/>
				<div className='tile-container'>
					{categoriesList.map(c => categoryTile(c))}
				</div>
			</Container>
		</div>
	)
}

export default Categories
