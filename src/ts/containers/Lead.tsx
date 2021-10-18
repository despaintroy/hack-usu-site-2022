import React, { useEffect, useRef, useState } from 'react'

import { Button, Container } from 'react-bootstrap'
import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min'

function Lead(): React.ReactElement {
	const [vantaEffect, setVantaEffect] = useState(0)
	const vantaBackground = useRef(null)
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				WAVES({
					el: vantaBackground.current,
					THREE,
					mouseControls: false,
					touchControls: false,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					color: '#0f2439',
					shininess: 20,
					waveHeight: 10,
					waveSpeed: 1.05,
					zoom: 1.1,
				})
			)
		}
		return (): void => {
			if (vantaEffect) (vantaEffect as unknown as any).destroy()
		}
	}, [vantaEffect])

	return (
		<div
			id='vanta-bg'
			className='bg-primary full-height lead'
			ref={vantaBackground}
		>
			<Container>
				<div>
					<h1>Hack USU</h1>
					<div className='date'>
						March 25–26
						<br />
						2022
					</div>
					<Button
						variant='success fw-bold text-uppercase'
						size='lg'
						className='mt-5 px-5'
						onClick={(): void => alert('Registration not yet open')}
					>
						Register
					</Button>
					<br />
					<Button
						variant='outline-light'
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
