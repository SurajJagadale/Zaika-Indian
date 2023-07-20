import React from 'react';
import {images} from '../../constants'
import logo from '../../assets/logo1.png'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='aboutus'>
    <div className="app__aboutus-overlay " >
      <img src={logo} alt="logo" />
    </div>
    <div className="app__aboutus-content flex__center ">
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant '>About Us</h1>
        <img src={images.spoon} className="spoon__img" alt="about_spoon" />
        <p className='p__opensans'>The "Zaika Indian" offers a classical yet modern dishes. With the twist of contemporary and unique foods and drinks served at the most gorgeus resturant in Pune. 
      </p>
        <button type='button' className='custom__button'>Read More</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant '>Our History</h1>
        <img src={images.spoon} className="spoon__img" alt="about_spoon" />
        <p className='p__opensans'>Zaika Indian was started on 1970 as street-stall by a single Man, Now it is 53 years, there are +100 branchs in all over Maharashtra having 1000+ members in team   </p>
        <button type='button' className='custom__button'>Read More</button>
      </div>
    </div>

  </div>
);

export default AboutUs;
