import * as React from 'react';
import service from './Card.helper';
const Service = () => {
  return (
    <div className="service">
      <div className="serviceHero">
        <div className="content">
          <h2>Our Services</h2>
          <p>
            With MTA you and your family will be creating memories in your transformed dream space
            for years and years.
          </p>
        </div>
      </div>
      <div className="serviceWrapper">
        <div className="serviceContainer">{service}</div>
      </div>
    </div>
  );
};

export default Service;
