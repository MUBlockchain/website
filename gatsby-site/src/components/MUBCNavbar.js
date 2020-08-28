import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'gatsby'

const MUBCNavbar = () => {
  return(
    <div>
    <Navbar bg="light" expand="lg" id="navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" id="nav">
          <Nav.Link><Link activeClassName="navbar__selection__active" className="navbar__selection" to="/">Home</Link></Nav.Link>
          <Nav.Link><Link activeClassName="navbar__selection__active" className="navbar__selection" to="/leadership-team">Leadership</Link></Nav.Link>
          <Nav.Link><Link activeClassName="navbar__selection__active" className="navbar__selection" to="/affiliations">Affiliations</Link></Nav.Link>
          <Nav.Link><Link activeClassName="navbar__selection__active" className="navbar__selection" to="/member-portal">Member Portal</Link></Nav.Link>
          <Nav.Link><Link activeClassName="navbar__selection__active" className="navbar__selection" to="/fall2020">Fall Events</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}
export default MUBCNavbar