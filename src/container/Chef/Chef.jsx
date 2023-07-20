import React from 'react';
import chef from '../../assets/chef1.jpg'
import sign from '../../assets/sign.png'
import './Chef.css';
import {SubHeading} from '../../components'
import {images} from '../../constants'

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img className='chef' src={chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h4 className='headtext__cormorant'>We beleive in</h4>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="" />
          <p className='p__opensans'>The key to running a successful kitchen is what I call the ‘3 F’s.’ Be Firm, Be Fair, and Be Friendly with your staff, your guests, and yourself</p>        
        </div>
        <p className='p__opensans'> No one who cooks, cooks alone. Even at her most solitary, a cook in the kitchen is surrounded by generations of cooks past, the advice, and menus of cooks present, the wisdom of cookbook writers</p>
      </div>
      <div className="app__chef-sign">
        <p>kavi Lata</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
