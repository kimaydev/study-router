import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none btn btn-warning rounded-pill"
          >
            Logo
          </Link>
          <ul className="nav col-12 col-lg-auto justify-content-center mb-md-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive
                    ? "nav-link px-2 text-warning"
                    : "nav-link px-2 text-white";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive
                    ? "nav-link px-2 text-warning"
                    : "nav-link px-2 text-white";
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/members"
                className={({ isActive }) => {
                  return isActive
                    ? "nav-link px-2 text-warning"
                    : "nav-link px-2 text-white";
                }}
              >
                Members
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/songs"
                className={({ isActive }) => {
                  return isActive
                    ? "nav-link px-2 text-warning"
                    : "nav-link px-2 text-white";
                }}
              >
                SongList
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
