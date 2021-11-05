import React from 'react'

import { Button, Container } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'
import { hackUSUEmail } from 'ts/utils/constants'

function Contact(): React.ReactElement {
	return (
		<div className='contact bg-primary py-5' id='contact'>
			<Container>
				<Subheader
					text='Contact'
					subtext='Have a question or want to work with us? Let us know!'
					light
				/>
				<div className='text-center'>
					<Button variant='light' href={`mailto:${hackUSUEmail}`}>
						{hackUSUEmail}
					</Button>
				</div>
			</Container>
		</div>
	)
}

export default Contact
