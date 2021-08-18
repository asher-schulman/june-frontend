import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Github } from 'react-bootstrap-icons'

function Footer() {
    return (
        <Navbar className="py-2" bg='dark' variant='dark' fixed="bottom">
            <Container>
                    <a href="https://www.github.com/asher-schulman"><Github color="white" size="32"></Github></a>
                    <Navbar.Brand>&copy; 2021 Asher Schulman &nbsp;</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer