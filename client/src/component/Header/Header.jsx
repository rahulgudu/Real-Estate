import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuBtnAction = () => {
    setMenuOpen((prev) => !prev);
  };

  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>
        <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
          <NavLink to="/properties">Properties</NavLink>
            <a href="sushantsrk2001@gmail.com">Contacts</a>

            <button className="button">
              Login  
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={handleMenuBtnAction}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
