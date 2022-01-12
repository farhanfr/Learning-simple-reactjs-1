import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link,useLocation, withRouter } from 'react-router-dom'

const NavbarComponent = (props) => {
  let path = useLocation()
  // console.log(pathName.pathname)
  return (
    <Navbar bg="light" expand="lg">

      <Navbar.Brand href="#home">Simple React Web</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <li className={`nav-item ${path.pathname === "/" ? "active" : null}`}>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className={`nav-item ${path.pathname === "/about" ? "active" : null}`}>
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default withRouter(NavbarComponent) ;
