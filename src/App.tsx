import React, { FC } from 'react'

import Navigation from 'Navigation'
import About from 'ts/containers/About'
import Categories from 'ts/containers/Categories'
import Contact from 'ts/containers/Contact'
import Faq from 'ts/containers/Faq'
import Footer from 'ts/containers/Footer'
import Lead from 'ts/containers/Lead'
import Location from 'ts/containers/Location'
import Schedule from 'ts/containers/Schedule'
import Sponsors from 'ts/containers/Sponsors'

const App: FC = () => {
	return (
		<div className='app'>
			<Navigation />
			<Lead />
			{/* <Registration /> */}
			<About />
			<Categories />
			<Location />
			<Faq />
			<Schedule />
			<Contact />
			<Sponsors />
			<Footer />
		</div>
	)
}

export default App
