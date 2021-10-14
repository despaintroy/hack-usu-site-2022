import React, { useState } from 'react'

interface DisclosureProps {
	title: string
	children: React.ReactChildren | string
}

function Disclosure(props: DisclosureProps): React.ReactElement {
	const { title, children } = props
	const [open, setOpen] = useState(false)

	return (
		<div className='disclosure'>
			<div className='title' onClick={(): void => setOpen(open => !open)}>
				{title}
			</div>
			{open && <div className='content'>{children}</div>}
		</div>
	)
}

export default Disclosure
