import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Instagram from "../../assets/instagram.svg";
import Pinterest from "../../assets/pinterest-p.svg";
import User from "../../assets/user-regular.svg";
import Heart from "../../assets/heart-regular.svg";
import SearchIcon from "../../assets/magnifying-glass-solid.svg";
import Oven from "../../assets/oven_gen_FILL0_wght400_GRAD0_opsz24.svg";

const Navbar = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleButtonClick = () => {
    setIsInputVisible(!isInputVisible);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Oven} alt="Logo" className="Logo" />
        Lezzet Yolculuğu
      </div>

      <div className="search-input">
        {isInputVisible && <input type="text" placeholder="Ara..." />}
        <button type="button" onClick={handleButtonClick}>
          <img src={SearchIcon} alt="SearchIcon" />
        </button>

        <div className="icons">
          <button type="button">
            <img src={User} alt="User" />
          </button>

          <button>
            <img src={Heart} alt="Heart" />
          </button>

          <button>
            <img src={Instagram} alt="Instagram Logo" />
          </button>

          <button>
            <img src={Pinterest} alt="Pinterest Logo.s" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//link ekleee
