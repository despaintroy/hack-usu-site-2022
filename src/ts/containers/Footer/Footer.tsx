import React from 'react'

import { Button, Container } from 'react-bootstrap'
import { registrationLink } from 'ts/utils/constants'

function Footer(): React.ReactElement {
	return (
		<div className='footer py-5'>
			<Container className='text-center'>
				<Button
					variant='success fw-bold text-uppercase'
					className='mx-2'
					href={registrationLink}
					target='_blank'
					onClick={(): void =>
						gtag('event', 'sign_up', {
							method: 'Google',
						})
					}
				>
					Register for Free
				</Button>
				<Button
					className='mx-2'
					variant='success fw-bold text-uppercase'
					href='https://discord.gg/mDUKePRGx7'
					target='_blank'
				>
					Join Discord
				</Button>
			</Container>
		</div>
	)
}

export default Footer
