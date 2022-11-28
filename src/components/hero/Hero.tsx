import React, { useState, useEffect } from 'react';
import { scrollToref } from '../../App.helper';
import { Link } from 'react-router-dom';
import SimpleImageSlider from 'react-simple-image-slider';
import arr from './Hero.helper';
import Header from './Hero.header';

interface scrollTo {
  scrollTo: string | any;
}

const Hero = ({ scrollTo }: scrollTo) => {
  const [width, setWidth] = useState<string | number>(750);

  const [height, setHeight] = useState<string | number>('90vh');

  function checkWidth() {
    const width = screen.width;
    if (width <= 600) {
      setWidth('100vw');
      setHeight('300px');
      return;
    }
  }

  useEffect(() => {
    checkWidth();
    window.addEventListener('resize', checkWidth);
  }, []);

  return (
    <div className="hero">
      <SimpleImageSlider
        width={width}
        height={height}
        images={arr}
        showBullets={false}
        showNavs={false}
        loop={true}
        autoPlay={true}
        slideDuration={3}
      />
      <div className="heroSlogan">
        <Header />
        <Link to="#" className="heroBtn animateSlideIn" onClick={() => scrollToref(scrollTo)}>
          Tell us about your project
        </Link>
      </div>
    </div>
  );
};

export default Hero;
