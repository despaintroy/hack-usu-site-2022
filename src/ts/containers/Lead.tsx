import React from 'react'

import { Button, Container } from 'react-bootstrap'

function Lead(): React.ReactElement {
	return (
		<div className='bg-primary full-height lead'>
			<Container>
				<div>
					<h1>Hack USU</h1>
					<div className='date'>
						March 25–26
						<br />
						2022
					</div>
					<Button
						variant='success cta'
						size='lg'
						className='mt-5 px-5'
						onClick={(): void => alert('Registration not yet open')}
					>
						Register
					</Button>
					<br />
					<Button
						variant='outline-light cta'
						className='mt-5'
						onClick={(): void => alert('Registration not yet open')}
					>
						Join Slack
					</Button>
				</div>
			</Container>
		</div>
	)
}

export default Lead
