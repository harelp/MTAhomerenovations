import * as React from 'react';
//import { Link } from 'react-router-dom';
import SimpleImageSlider from 'react-simple-image-slider';

import projectImg from '../../images/project.jpg';
import Header from './Hero.header';

const arr = [
  projectImg,
  projectImg,
  projectImg,
  projectImg,
  projectImg,
  projectImg,
  projectImg,
  projectImg,
  projectImg,
  projectImg,
  projectImg,
  projectImg,
  projectImg,
  projectImg
];

const Hero = () => {
  return (
    <div className="hero">
      <SimpleImageSlider
        width={900}
        height={'80vh'}
        images={arr}
        showBullets={false}
        showNavs={false}
        loop={true}
        autoPlay={true}
        slideDuration={3}
      />
      <div className="heroSlogan">
        <Header />
        {/* <Link to="/contact" className="heroBtn">
          Tell us about your project
        </Link> */}
      </div>
    </div>
  );
};

export default Hero;
