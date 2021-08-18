import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { Google } from 'react-bootstrap-icons'

function Navigation() {
    return (
        <Navbar style={{fontSize: 22}} className="py-4" collapseOnSelect expand='sm' bg='dark' variant='dark' sticky="top">
            <Container className="mx-auto">
                <Navbar.Brand style={{fontSize: 26}} href="/">June</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/login'><Google className="mx-2"></Google>Login with Google</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
