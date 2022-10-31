import * as React from 'react';
// import home from '../../images/home.png';
// import store from '../../images/store.png';
// import kitchen from '../../images/kitchen.png';
// import bathroom from '../../images/bathroom.png';
// import kitchens from '../../images/kitchens.jpg';
// import storeBg from '../../images/store.jpg';
// import bathroomBg from '../../images/bathroombg.png';
// import basementBg from '../../images/basement.jpg';

import service from './Card.helper';
const Service = () => {
  return (
    <div className="service">
      <div className="serviceContainer">
        <div className="serviceHero">
          <h5>What we offer</h5>
          <h1>From concept to creation</h1>
          <p>
            With MTA you and your family will be creating memories in your transformed dream space
            for years and years.
          </p>
        </div>

        <div className="serviceList">
          {service}
          {/* <div className="serviceCard">
            <img className="cardBg" src={basementBg} alt="basement background image" />
            <img className="cardIcon" src={home} alt="Basement or Home icon" />
            <h5>Basements</h5>
          </div>
          <div className="serviceCard">
            <img className="cardBg" src={kitchens} alt="kitchen background image" />
            <img className="cardIcon" src={kitchen} alt="Kitchen icon" />

            <h5>Kitchens</h5>
          </div>
          <div className="serviceCard">
            <img className="cardBg" src={bathroomBg} alt="bathroom background image" />
            <img className="cardIcon" src={bathroom} alt="Bathroom icon" />

            <h5>Bathrooms</h5>
          </div>
          <div className="serviceCard">
            <img className="cardBg" src={storeBg} alt="business background image" />
            <img className="cardIcon" src={store} alt="business or store icon" />

            <h5>Businesses</h5>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Service;
