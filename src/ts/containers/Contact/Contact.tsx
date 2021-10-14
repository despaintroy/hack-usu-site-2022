import React from 'react'

import { Container } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'

function Contact(): React.ReactElement {
	return (
		<div className='contact py-5'>
			<Container>
				<Subheader
					text='Contact'
					subtext='Have a question? Send us a message!'
				/>
			</Container>
		</div>
	)
}

export default Contact
