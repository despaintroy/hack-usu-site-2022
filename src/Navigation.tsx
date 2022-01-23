import React, { FC } from 'react'

import { Container, Nav, Navbar } from 'react-bootstrap'
import { REGISTRATION_LINK, REGISTRATION_OPEN } from 'ts/utils/constants'

const Navigation: FC = () => {
	return (
		<>
			{REGISTRATION_OPEN && (
				<div
					className='registration-banner'
					onClick={(): void => {
						window.open(REGISTRATION_LINK, '_blank')
					}}
				>
					<Container>Register for Free</Container>
				</div>
			)}
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
							<Nav.Link href='#about'>About</Nav.Link>
							<Nav.Link href='#categories'>Categories</Nav.Link>
							<Nav.Link href='#location'>Location</Nav.Link>
							<Nav.Link href='#faq'>FAQ</Nav.Link>
							<Nav.Link href='#schedule'>Schedule</Nav.Link>
							<Nav.Link href='#contact'>Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Navigation
