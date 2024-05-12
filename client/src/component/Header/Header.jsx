import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import useAuthCheck from "../../hooks/useAuthCheck";
import AddPropertyModel from "../AddPropertyModel/AddPropertyModel";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const handleMenuBtnAction = () => {
    setMenuOpen((prev) => !prev);
  };

  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };

  const { validateLogin } = useAuthCheck();

  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
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

            {/* add property */}
            <div onClick={handleAddPropertyClick}>Add Property</div>
            <AddPropertyModel
              opened={modalOpened}
              setOpened={setModalOpened}
            />

            {/* Login Button */}
            {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <div>
                <ProfileMenu user={user} logout={logout} />
              </div>
            )}
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
