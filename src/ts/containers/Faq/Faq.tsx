import React from 'react'

import { Container } from 'react-bootstrap'
import Disclosure from 'ts/components/Disclosure'

import { faqList } from './faqContent'

function Faq(): React.ReactElement {
	return (
		<div className='faq py-5'>
			<Container>
				<h2>FAQ</h2>
				{faqList.map((faq, idx) => (
					<Disclosure title={faq.question} key={idx}>
						{faq.answer}
					</Disclosure>
				))}
			</Container>
		</div>
	)
}

export default Faq
