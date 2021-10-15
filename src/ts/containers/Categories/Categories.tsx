import React from 'react'

import { Container } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'

function Categories(): React.ReactElement {
	const categories = [
		'General',
		'Game Development',
		'Hardware',
		'AI & Machine Learning',
		'Security',
	]

	const categoryTile = (title: string): React.ReactElement => (
		<div className='category-tile'>{title}</div>
	)

	return (
		<div className='categories py-5'>
			<Container className='narrow'>
				<Subheader text='Prze Categories' />
				<p className='fs-5'>
					You can start thinking of project ideas before the event, or
					brainstorm with a team after arriving. We&apos;ll ask you to choose
					one category to enter your project in.
				</p>
				<div className='tile-container'>
					{categories.map(c => categoryTile(c))}
				</div>
			</Container>
		</div>
	)
}

export default Categories
