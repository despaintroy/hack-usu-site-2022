import React from 'react'

interface SubheaderProps {
	text: string
	subtext?: string
}

function Subheader(props: SubheaderProps): React.ReactElement {
	const { text, subtext } = props

	return (
		<div className='subheader'>
			<h2>{text}</h2>
			<p>{subtext}</p>
			<hr />
		</div>
	)
}

export default Subheader
