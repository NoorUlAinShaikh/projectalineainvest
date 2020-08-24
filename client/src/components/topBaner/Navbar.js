import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../helpers/constants";

const NavBar = ({ drawer = false, toggleBurgerClick }) => {
  return (
    <nav className={drawer ? "navBar__SIDE" : "navbar"}>
      {navItems.map((navItem, index) => {
        return (
          <Link
            onClick={toggleBurgerClick}
            to={`/${navItem.toLowerCase()}`}
            key={index}
            className={drawer ? "navItem__SIDE" : "navItem "}
          >
            {navItem}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
