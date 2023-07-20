import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import image from '../../assets/logo1.png'
import './Navbar.css';

const Navbar = () => {
  const [toggleState, SetToggleState]=useState(false);
  return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={image} alt="app-logo" />
    </div>
    <ul className="app__navbar-link">
      <li className="p__opensans" onClick={()=>{
        window.scrollBy({top:90,behavior:'smooth'});
      }}><a href="#Home">Home</a></li>
      <li className="p__opensans" onClick={()=>{
        window.scrollBy({top:830,behavior:'smooth'});
      }}><a href="#About">About</a></li>
      <li className="p__opensans" onClick={()=>{
        window.scrollBy({top:2000,behavior:'smooth'});
      }}><a href="#Menu">Menu</a></li>
      <li className="p__opensans" onClick={()=>{
        window.scrollBy({top:3850,behavior:'smooth'});
      }}><a href="#Award">Award</a></li>
      <li className="p__opensans" onClick={()=>{
        window.scrollBy({top:5090,behavior:'smooth'});
      }}><a href="#Contact">Contact</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className='p__opensans'>Log In / Register</a>
      <div/>
      <a href="/" className='p__opensans'>Book Table</a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="white" className='menu' fontsize={30} onClick={()=>{SetToggleState(true)}}/>
      {(toggleState===true) &&(
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontsize={27} className='overlay__close' onClick={()=>{SetToggleState(false)}}/>
        <ul className="app__navbar-smallscreen_link">
        <li className="p__opensans"><a href="#Home">Home</a></li>
        <li className="p__opensans"><a href="#About">About</a></li>
        <li className="p__opensans"><a href="#Menu">Menu</a></li>
        <li className="p__opensans"><a href="#Award">Award</a></li>
        <li className="p__opensans"><a href="#Contact">Contact</a></li>
        </ul>
      </div>
      )}
    </div>
  </nav>
  )
};

export default Navbar;
