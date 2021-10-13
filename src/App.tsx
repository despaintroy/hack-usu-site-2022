import 'sass/_app.scss'

import React from 'react'

import logo from './logo.svg'

function App(): React.ReactElement {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
			</header>
		</div>
	)
}

export default App
