import React, { FC, useState } from 'react'

interface DisclosureProps {
	title: string
	children: React.ReactChildren | string
}

const Disclosure: FC<DisclosureProps> = props => {
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
