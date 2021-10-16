import React from 'react'

import { Container } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'

function About(): React.ReactElement {
	return (
		<div className='about py-5' id='about'>
			<Container>
				<Subheader
					text='About Hack USU'
					subtext='HackUSU is an annual event with a 24-hr team coding competition, guest speakers, free food, and more!'
				/>
			</Container>
		</div>
	)
}

export default About
