import 'sass/_app.scss'

import React from 'react'

import Faq from 'ts/containers/Faq'
import Lead from 'ts/containers/Lead'
import Schedule from 'ts/containers/Schedule'

function App(): React.ReactElement {
	return (
		<div className='app'>
			<Lead />
			<Schedule />
			<Faq />
			{/* <img src={logo} className='App-logo' alt='logo' /> */}
		</div>
	)
}

export default App
