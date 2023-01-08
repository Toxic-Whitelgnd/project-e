import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css"


const NavBar = () => {
  const [HamShow, setHamShow] = useState(false);

  return (
    <>
      <section className="navbar-bg sticky-top navbar-light bg-light NavBarSection">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <Link to="/">
              <i>
                <img
                  src=""
                  alt="company-logo"
                  height="65px"
                  className="navbar-brand"
                />
              </i>
            </Link>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                setHamShow(!HamShow);
              }}
            >
              <i className="hamburger">
                <FontAwesomeIcon icon={faBars} />
              </i>
            </button>
            <div
              className={`collapse navbar-collapse ${HamShow ? "show" : ""}   `}
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    exact
                    className="nav-link pe-4"
                    aria-current="page"
                    activeClassName="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/topecommerse"
                    className="nav-link pe-4 "
                    aria-current="page"
                    activeClassName="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Top Ecommerce 
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Blog"
                    className="nav-link pe-4"
                    aria-current="page"
                    activeClassName="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/reviews"
                    className="nav-link pe-4"
                    aria-current="page"
                    activeClassName="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Reviews
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/resource"
                    className="nav-link pe-4"
                    aria-current="page"
                    activeClassName="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                    Resource
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/deals"
                    className="nav-link pe-4"
                    aria-current="page"
                    activeClassName="active"
                    onClick={() => {
                      setHamShow(!HamShow);
                    }}
                  >
                   Deals
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
