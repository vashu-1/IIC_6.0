import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <div className="px-8 h-16 navbar xl:w-full max-w-7xl m-auto">
      <div>
        <img src="./iicbitsindri_logo.jpeg" alt="" />
        <span className="font-oblique w-24 text-blue-700 text-xl">IIC 6.0</span>
      </div>

      <OutsideClickHandler onOutsideClick={() => [setMenuOpened(false)]}>
        <ul className="navigation" style={getMenuStyles(menuOpened)}>
          <li>
            <Link to="#home">Home</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#events">Event</Link>
          </li>
          <li>
            <Link to="#team">Team</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </OutsideClickHandler>
      <div
        className="menu-icon"
        onClick={() => {
          setMenuOpened((prev) => !prev);
        }}
      >
        <FaBars />
      </div>
    </div>
  );
};

export default Navbar;
