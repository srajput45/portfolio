import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <nav
        class="navbar navbar-expand-lg navbar-light "
        style={{ height: 50, padding: 30, margin: 20, fontSize: 25 }}
      >
        <Link class="navbar-brand" style={{ fontSize: 30 }} to="/home">
          Shubham Rajput
        </Link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/project">
                Project
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
