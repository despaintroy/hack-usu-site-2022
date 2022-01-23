import React, { FC } from 'react'

import { Container } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'

const About: FC = () => {
	return (
		<div className='about py-5' id='about'>
			<Container>
				<Subheader text='What is Hack USU?' />
				<div className='feature-container'>
					<div className='feature-container'>
						<div className='feature'>
							<span className='material-icons icon'>schedule</span>
							<h3>24-hr Hackathon</h3>
							<p>
								Build a software or hardware project to compete against other
								teams. All college students and high school seniors are invited!
							</p>
						</div>
						<div className='feature'>
							<span className='material-icons icon'>school</span>
							<h3>Workshops</h3>
							<p>
								We&apos;ll have many great workshops and tech talks on a variety
								of topics. Check back closer to the event for a complete list!
							</p>
						</div>
					</div>
					<div className='feature-container'>
						<div className='feature'>
							<span className='material-icons icon'>work_outline</span>
							<h3>Networking</h3>
							<p>
								Come network with our sponsors and potential employers. There
								will be many industry experts to learn from and learn more about
								their companies!
							</p>
						</div>
						<div className='feature'>
							<span className='material-icons icon'>restaurant</span>
							<h3>Free Food</h3>
							<p>
								We&apos;ll provide dinner on Friday, and breakfast, lunch, and
								dinner on Saturday. There will also be plenty of snacks
								available the entire event!
							</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default About
