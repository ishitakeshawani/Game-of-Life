import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
       <Link className="nav-logo" to="/">
        Conway's Game of Life
      </Link>
    </nav>
  );
}

export default Header;
