import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./NavBar.scss";
import burgerIcon from "../../assets/icons/burger.svg";
import { Link } from "react-router-dom";
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

  return (
    <>
      {/*Mobile*/}
      <nav className="navbar navbar--mobile">
        <img
          src={burgerIcon}
          alt="burger menu"
          className="navbar__burger"
          onClick={toggleMenu}
        />
        <h1 className="navbar__logo">Hobby Hopper</h1>
        <Menu isOpen={menuOpen} onStateChange={handleStateChange} right>
          <a onClick={closeMenu} className="menu-item" href="/">
            Home
          </a>
          <a onClick={closeMenu} className="menu-item" href="/about">
            About
          </a>
          <a onClick={closeMenu} className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
      </nav>

      {/*Desktop & Tablet*/}
      <nav className="navbar navbar--desktoptablet">
        <h1 className="navbar__logo">Hobby Hopper</h1>
        <ul className="navbar__list">
          <Link to="/" className="navbar__link">
            <li className="navbar__item">Home</li>
          </Link>
          <li className="navbar__item navbar__item--disabled">About</li>
          <li className="navbar__item navbar__item--disabled">Contact</li>
          <Link to="/signup" className="navbar__link">
            <li className="navbar__item">SignUp</li>
          </Link>
          <Link to="/login" className="navbar__link">
            <li className="navbar__item">Login</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
