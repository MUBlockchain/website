import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'gatsby'

const MUBCNavbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" id="navbar">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" id="nav">
                        <Link activeClassName="navbar__selection__active" className="navbar__selection"
                            to="/">Home</Link>
                        <Link activeClassName="navbar__selection__active" className="navbar__selection"
                            to="/leadership-team">Leadership</Link>
                        <NavDropdown title="Events" className="navbar__selection__dropdown">
                            <NavDropdown.Item><Link to="/blockathon-2019" activeClassName="navbar__selection__active" className="navbar__selection">2019 Blockathon</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/conference-2019" activeClassName="navbar__selection__active" className="navbar__selection">2019 Conference</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Link activeClassName="navbar__selection__active" className="navbar__selection"
                            to="/affiliations">Affiliations</Link>
                        <Link activeClassName="navbar__selection__active" className="navbar__selection"
                              to="/blog">Blog</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default MUBCNavbar