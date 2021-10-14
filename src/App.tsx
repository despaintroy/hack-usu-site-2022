import 'sass/_app.scss'

import React from 'react'

import Faq from 'ts/containers/Faq'
import Footer from 'ts/containers/Footer'
import Lead from 'ts/containers/Lead'
import Location from 'ts/containers/Location'
import Schedule from 'ts/containers/Schedule'

function App(): React.ReactElement {
	return (
		<div className='app'>
			<Lead />
			<Schedule />
			<Location />
			<Faq />
			{/* <Contact /> */}
			<Footer />
			{/* <img src={logo} className='App-logo' alt='logo' /> */}
		</div>
	)
}

export default App
