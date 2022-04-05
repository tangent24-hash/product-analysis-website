import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div class="container-fluid">
        <Link to={`/`}>XPS Review</Link>
          <ul class="navbar-nav">
            <li class="nav-item nav-link">
                <Link to={`/reviews`}>Reviews</Link>
            </li>
            <li class="nav-item nav-link">
              <Link to={`/dashboard`}>Dashboard</Link>
            </li>
            <li class="nav-item">
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Header;
