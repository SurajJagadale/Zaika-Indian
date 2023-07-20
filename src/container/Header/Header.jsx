import React from 'react';
import { SubHeading } from '../../components';
import './Header.css';
import {images} from '../../constants'
const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info' >
      <SubHeading title="Chase the New Falvour"/>
      <h1 className='app__header-h1'>The key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0 '}}>The soul of India is its food</p>
      <button type='button' className='custom__button'>Explore More</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
