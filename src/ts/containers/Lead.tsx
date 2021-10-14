import React from 'react'

import { Button, Container } from 'react-bootstrap'

function Lead(): React.ReactElement {
	return (
		<div className='bg-primary full-height lead'>
			<Container>
				<div>
					<h1>Hack USU</h1>
					<div className='date'>March 25–26, 2022</div>
					<Button
						variant='light cta'
						size='lg'
						className='mt-5'
						onClick={(): void => alert('Registration not yet open')}
					>
						Register
					</Button>
				</div>
			</Container>
		</div>
	)
}

export default Lead
