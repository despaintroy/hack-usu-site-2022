import React from 'react'

import { Button, Container } from 'react-bootstrap'
import { registrationLink } from 'ts/utils/constants'

function Footer(): React.ReactElement {
	return (
		<div className='footer py-5'>
			<Container className='text-center'>
				<Button
					variant='success fw-bold text-uppercase'
					size='lg'
					className='px-5'
					href={registrationLink}
					target='_blank'
				>
					Register Now
				</Button>
			</Container>
		</div>
	)
}

export default Footer
