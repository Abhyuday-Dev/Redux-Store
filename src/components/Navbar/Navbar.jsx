import React, { useState } from "react";
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const items=useSelector(state=>state.cart);
  const [isActive, setIsActive] = useState(false);

  const navToggle = () => {
    setIsActive(!isActive);
  };

  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        Redux Store
      </Link>
      <ul className={`nav__menu ${isActive ? "nav_active" : ""}`}>
        <Link to="/">
          <li className="nav__item">
            <a href="#" className="nav__link" onClick={handleClick}>
              Home
            </a>
          </li>
        </Link>
        <Link to="/cart">
          <li className="nav__item">
            <a href="#" className="nav__link" onClick={handleClick}>
              Cart
            </a>
          </li>
        </Link>
        <li className="nav__item">
            <a href="#" className="nav__link" onClick={handleClick}>
              CartItems:{items.length}
            </a>
          </li>
        

      </ul>
      <div className="nav_toggler" onClick={navToggle}>
        {!isActive ? <GiHamburgerMenu /> : <GiCrossedBones />}
      </div>
    </nav>
  );
};

export default Navbar;
