import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./NavBarMobile.scss";
import burgerIcon from "../../assets/icons/burger.svg";

export default function NavBarMobile() {
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
    <nav className="navbar navbar--mobile">
      <img src={burgerIcon} alt="burger menu" className="navbar__burger" onClick={toggleMenu}/>
      <h1 className="navbar__logo">Hobby Hopper</h1>
      <Menu 
        isOpen={menuOpen} 
        onStateChange={handleStateChange}
        right // This can be removed if you want the menu to open from the left

      >
        <a onClick={closeMenu} className="menu-item" href="/">Home</a>
        <a onClick={closeMenu} className="menu-item" href="/about">About</a>
        <a onClick={closeMenu} className="menu-item" href="/contact">Contact</a>
      </Menu>
    </nav>
  );
}