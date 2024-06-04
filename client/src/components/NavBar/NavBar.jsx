import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./NavBar.scss";
import burgerIcon from "../../assets/icons/burger.svg";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const currentloc = useLocation().pathname;

  return (
    <>
      {/* Mobile */}
      <nav className="navbar navbar--mobile">
        <img
          src={burgerIcon}
          alt="burger menu"
          className="navbar__burger"
          onClick={toggleMenu}
        />
        <Link to="/" className="navbar__link navbar__link--mobile">
          <h1 className="navbar__logo">Hobby Hopper</h1>
        </Link>
        <Menu
          isOpen={menuOpen}
          onStateChange={handleStateChange}
          customBurgerIcon={false} // Disable default burger icon
          customCrossIcon={false} // Disable default cross icon
          right
          outerContainerId={"outer-container"} // Ensure correct container id
          pageWrapId={"page-wrap"} // Ensure correct page wrap id
        >
          <Link
            onClick={closeMenu}
            className={
              currentloc === "/"
                ? "navbar__item navbar__item--active"
                : "navbar__item"
            }
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={closeMenu}
            className="navbar__item navbar__item--disabled"
          >
            About
          </Link>
          <Link
            onClick={closeMenu}
            className="navbar__item navbar__item--disabled"
          >
            Contact
          </Link>
          <Link
            onClick={closeMenu}
            className={
              currentloc === "/signup"
                ? "navbar__item navbar__item--active"
                : "navbar__item"
            }
            to="/signup"
          >
            Signup
          </Link>
          <Link
            onClick={closeMenu}
            className={
              currentloc === "/login"
                ? "navbar__item navbar__item--active"
                : "navbar__item"
            }
            to="/login"
          >
            Login
          </Link>
        </Menu>
      </nav>

      {/* Desktop & Tablet */}
      <nav className="navbar navbar--desktoptablet">
        <Link to="/" className="navbar__link">
          <h1 className="navbar__logo">Hobby Hopper</h1>
        </Link>
        <ul className="navbar__list">
          <Link to="/" className="navbar__link">
            <li
              className={
                currentloc === "/"
                  ? "navbar__item navbar__item--active"
                  : "navbar__item"
              }
            >
              Home
            </li>
          </Link>
          <li className="navbar__item navbar__item--disabled">About</li>
          <li className="navbar__item navbar__item--disabled">Contact</li>
          <Link to="/signup" className="navbar__link">
            <li
              className={
                currentloc === "/signup"
                  ? "navbar__item navbar__item--active"
                  : "navbar__item"
              }
            >
              Signup
            </li>
          </Link>
          <Link to="/login" className="navbar__link">
            <li
              className={
                currentloc === "/login"
                  ? "navbar__item navbar__item--active"
                  : "navbar__item"
              }
            >
              Login
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
