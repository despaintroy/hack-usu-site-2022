import React from 'react'

import { Container } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'

function Contact(): React.ReactElement {
	return (
		<div className='contact bg-primary py-5' id='contact'>
			<Container>
				<Subheader
					text='Contact'
					subtext='Have a question? Send us a message!'
					light
				/>
			</Container>
		</div>
	)
}

export default Contact
