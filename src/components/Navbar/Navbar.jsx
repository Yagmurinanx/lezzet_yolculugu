import React from 'react'
import "./Navbar.css";
import Instagram from '../../assets/instagram.svg';
import Pinterest from '../../assets/pinterest-p.svg';
import User from '../../assets/user-regular.svg';
import Heart from '../../assets/heart-regular.svg';
import SearchIcon from '../../assets/magnifying-glass-solid.svg'
import Logo from '../../assets/Logo.png'
import Oven from '../../assets/oven_gen_FILL0_wght400_GRAD0_opsz24.svg'




const Navbar = () => {
  return (
    <nav> 
      <div className='logo'><img src={Oven} alt="Logo"  className='Logo'/>Lezzet Yolculuğu</div>
      <div className='icons'>
      <img src={User} alt="User" />
      <img src={Heart} alt="Heart"  />
      <img src={Instagram} alt="Instagram Logo" />
      <img src={Pinterest} alt="Pinterest Logo.s" />
      <button type="button"><img src={SearchIcon} alt="SearchIcon"/></button>
      </div>
    </nav>
  )
}

export default Navbar