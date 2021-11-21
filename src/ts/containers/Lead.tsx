import React from 'react'

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
			<img
				className='central-building'
				src={`${process.env.PUBLIC_URL}/lead-images/central-building.png`}
			/>
			<img
				className='tower'
				src={`${process.env.PUBLIC_URL}/lead-images/tower.png`}
			/>
			<div className='text-container'>
				<div>
					<h1>
						Hack
						<br />
						USU
					</h1>
					<div className='date'>
						March <span className='text-nowrap'>18–19</span>, 2022
					</div>
				</div>
			</div>
		</div>
	)
}

export default Lead
