import React from 'react'

import { Button, Container } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'
import { CONTACT_EMAIL, DISCORD_LINK } from 'ts/utils/constants'

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
					<Button variant='light' href={`mailto:${CONTACT_EMAIL}`}>
						{CONTACT_EMAIL}
					</Button>
					<p className='mt-3 mb-2'>– or –</p>
					<a
						href={DISCORD_LINK}
						target='_blank'
						rel='noreferrer'
						className='text-light'
					>
						Ask us on Discord
					</a>
				</div>
			</Container>
		</div>
	)
}

export default Contact
