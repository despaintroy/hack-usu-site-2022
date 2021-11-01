import React from 'react'

import { Container } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'
import { CategoriesData, categoriesList } from './categoriesContent'

function Categories(): React.ReactElement {

	const categoryTile = (category: CategoriesData): React.ReactElement => (
		<div className='category-tile' key={category.title}>
			<div className='title'>{category.title}</div>
			<div className='description'>{category.description}</div>
		</div>
	)

	return (
		<div className='categories py-5' id='prizes'>
			<Container className='narrow'>
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
