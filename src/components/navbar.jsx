import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand mb-0 h1">
          Navbar{" "}
          <span className="badge badge-pill bg-info">{totalCounters}</span>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
