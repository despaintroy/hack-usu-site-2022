import React, { FC } from 'react'

import { Container, Nav, Navbar } from 'react-bootstrap'

const Navigation: FC = () => {
	return (
		<Navbar
			bg='primary'
			variant='dark'
			className='navigation'
			fixed='top'
			collapseOnSelect
			expand='md'
		>
			<Container>
				<Navbar.Brand href='#top'>HackUSU 2022</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav>
						<Nav.Link href='#registration'>Register</Nav.Link>
						<Nav.Link href='#about'>About</Nav.Link>
						<Nav.Link href='#prizes'>Prizes</Nav.Link>
						<Nav.Link href='#location'>Location</Nav.Link>
						<Nav.Link href='#faq'>FAQ</Nav.Link>
						<Nav.Link href='#schedule'>Schedule</Nav.Link>
						<Nav.Link href='#contact'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
