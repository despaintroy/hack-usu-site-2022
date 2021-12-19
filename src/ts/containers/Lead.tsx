import React from 'react'

import { Container } from 'react-bootstrap'

function Lead(): React.ReactElement {
	return (
		<div className='lead'>
			{/* <Particles
				style={{
					position: 'absolute',
					left: '0',
					top: '0',
				}}
				params={{
					particles: {
						number: {
							value: 100,
							density: {
								enable: true,
							},
						},
						line_linked: {
							enable: true,
							opacity: 0.2,
						},
						move: {
							speed: 1.5,
						},
						opacity: {
							value: 0.2,
						},
					},
				}}
			/> */}
			<Container className='content'>
				<img
					className='lead-logo'
					src={`${process.env.PUBLIC_URL}/lead-images/logo-curves.svg`}
				/>
				<div className='date'>
					March <span className='text-nowrap'>18-19</span>, 2022
				</div>
			</Container>
		</div>
	)
}

export default Lead
