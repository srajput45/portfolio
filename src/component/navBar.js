import React, { Component } from "react";

import {Navbar,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
class NavBar extends Component {
  render() {
    return (
        <Navbar
          collapseOnSelect
          bg="navbar navbar-light navbar-expand-sm shadow-sm p-2 bg-white rounded"
          expand="lg"
          sticky="top"
        >
          <NavLink to="/" className="navbar-brand text-dark">
            Shubham Rajput
          </NavLink>{" "}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/home" className="navbar-brand text-dark">
                <Navbar.Text>Home</Navbar.Text>
              </NavLink>
              <NavLink to="/project" className="navbar-brand text-dark">
                <Navbar.Text>Projects</Navbar.Text>
              </NavLink>
              <NavLink to="/about" className="navbar-brand text-dark">
                <Navbar.Text>About</Navbar.Text>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}
export default NavBar;
