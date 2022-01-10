import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">

      <Navbar.Brand href="#home">Simple React Web</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default NavbarComponent
