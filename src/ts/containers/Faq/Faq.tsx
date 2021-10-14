import React from 'react'

import { Container } from 'react-bootstrap'
import Disclosure from 'ts/components/Disclosure'
import Subheader from 'ts/components/Subheader'

import { faqList } from './faqContent'

function Faq(): React.ReactElement {
	return (
		<div className='faq py-5'>
			<Container>
				<Subheader text='FAQ' />
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
