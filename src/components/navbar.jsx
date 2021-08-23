import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand mb-0 h1">
            Navbar{" "}
            <span className="badge badge-pill bg-info">
              {this.props.totalCounters}
            </span>
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
