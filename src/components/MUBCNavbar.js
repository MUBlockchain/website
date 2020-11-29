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
                        <NavDropdown title="Leadership" className="navbar__selection__dropdown">
                            <NavDropdown.Item>
                                <Link activeClassName="navbar__selection__active" className="navbar__selection"
                                    to="/leadership-team">
                                    Executive Leadership</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link activeClassName="navbar__selection__active" className="navbar__selection"
                                    to="/development-team">Development Team</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link activeClassName="navbar__selection__active" className="navbar__selection"
                                    to="/strategic-advisors">Strategic Advisors</Link>
                            </NavDropdown.Item>
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