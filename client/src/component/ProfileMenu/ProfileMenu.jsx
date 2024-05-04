import React, { useState } from "react";
import "./profile.css"
const ProfileMenu = ({ user, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="profile-menu">
      <div className="avatar" onClick={toggleMenu}>
        <img src={user?.picture} alt="user image" />
        {isMenuOpen && (
          <div className="dropdown-menu">
            <button>Favourites</button>
            <button>Bookings</button>
            <button onClick={() => {
                localStorage.clear();
                logout();
            }}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileMenu;
