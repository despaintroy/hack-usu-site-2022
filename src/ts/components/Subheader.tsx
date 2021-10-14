import React from 'react'

interface SubheaderProps {
	text: string
	subtext?: string
	light?: boolean
}

function Subheader(props: SubheaderProps): React.ReactElement {
	const { text, subtext, light } = props

	return (
		<div className={`subheader ${light && 'light'}`}>
			<h2>{text}</h2>
			<p>{subtext}</p>
			<hr />
		</div>
	)
}

export default Subheader
