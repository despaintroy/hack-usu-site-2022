import React from 'react'

import { Container } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'

function Sponsors(): React.ReactElement {
	return (
		<div className='sponsors py-5' id='sponsors'>
			<Container>
				<Subheader
					text='Sponsors'
					subtext='Thanks to the amazing companies who sponsor HackUSU!'
				/>
			</Container>
		</div>
	)
}

export default Sponsors
