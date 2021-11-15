import React from 'react'

import { Container } from 'react-bootstrap'
import Subheader from 'ts/components/Subheader'

function About(): React.ReactElement {
	return (
		<div className='about py-5' id='about'>
			<Container>
				<Subheader
					text='What is Hack USU?'
					subtext='HackUSU is an annual 24-hr team coding competition with workshops, free food, and more!'
				/>
				<div className='feature-container'>
					<div className='feature'>
						<span className='material-icons icon'>schedule</span>
						<h3>24-hr Hackathon</h3>
						<p>
							HackUSU is Utah&apos;s largest student hackathon. All college
							students and high school seniors are invited!
						</p>
					</div>
					<div className='feature'>
						<span className='material-icons icon'>code</span>
						<h3>Workshops</h3>
						<p>
							We&apos;ll have several great workshops on a variety of topics
							Saturday morning! Check back closer to the event for more details.
						</p>
					</div>
					<div className='feature'>
						<span className='material-icons icon'>work_outline</span>
						<h3>Networking</h3>
						<p>
							Meet with our sponsors and potential employers. There will be many
							industry experts to learn from and talk about their companies!
						</p>
					</div>
					<div className='feature'>
						<span className='material-icons icon'>restaurant</span>
						<h3>Free Food</h3>
						<p>
							You&apos;ll get dinner on Friday, and breakfast, lunch, and dinner
							on Saturday. There will also be plenty of snacks available the
							entire event!
						</p>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default About
