import React from 'react'

import { Button, Container } from 'react-bootstrap'
import {
	DISCORD_LINK,
	REGISTRATION_CLOSED_MESSAGE,
	REGISTRATION_LINK,
	REGISTRATION_OPEN,
} from 'ts/utils/constants'

function Footer(): React.ReactElement {
	return (
		<div className='footer py-5'>
			<Container className='text-center'>
				{REGISTRATION_OPEN ? (
					<Button
						variant='success fw-bold text-uppercase'
						className='m-2'
						href={REGISTRATION_LINK}
						target='_blank'
						onClick={(): void =>
							gtag('event', 'sign_up', {
								method: 'Google',
							})
						}
					>
						Register for Free
					</Button>
				) : (
					<p className='text-light'>{REGISTRATION_CLOSED_MESSAGE}</p>
				)}
				<Button
					className='m-2'
					variant='success fw-bold text-uppercase'
					href={DISCORD_LINK}
					target='_blank'
				>
					Join Discord
				</Button>
			</Container>
		</div>
	)
}

export default Footer
