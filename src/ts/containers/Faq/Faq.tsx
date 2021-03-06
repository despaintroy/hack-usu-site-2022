import React, { FC } from 'react'

import { Container } from 'react-bootstrap'
import Disclosure from 'ts/components/Disclosure'
import Subheader from 'ts/components/Subheader'
import { CONTACT_EMAIL, DISCORD_LINK } from 'ts/utils/constants'

import { faqList } from './faqContent'

const Faq: FC = () => {
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
					<a href={DISCORD_LINK} target='_blank' rel='noreferrer'>
						Ask us on discord
					</a>
					, or email us at{' '}
					<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
				</p>
			</Container>
		</div>
	)
}

export default Faq
