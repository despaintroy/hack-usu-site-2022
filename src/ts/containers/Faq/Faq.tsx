import React from 'react'

import { Container } from 'react-bootstrap'
import Disclosure from 'ts/components/Disclosure'
import Subheader from 'ts/components/Subheader'
import { discordLink, hackUSUEmail } from 'ts/utils/constants'

import { faqList } from './faqContent'

function Faq(): React.ReactElement {
	return (
		<div className='faq py-5' id='faq'>
			<Container className='narrow'>
				<Subheader text='FAQ' />
				{faqList.map((faq, idx) => (
					<Disclosure title={faq.question} key={idx}>
						{faq.answer}
					</Disclosure>
				))}
				<p className='mt-4 text-center'>
					Have another question?{' '}
					<a href={discordLink} target='_blank' rel='noreferrer'>
						Ask us on discord
					</a>
					, or email us at <a href={`mailto:${hackUSUEmail}`}>{hackUSUEmail}</a>
					.
				</p>
			</Container>
		</div>
	)
}

export default Faq
