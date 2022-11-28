import * as React from 'react';
import service from './Card.helper';

interface scrollTo {
  scrollTo: string | any;
}

const Service = ({ scrollTo }: scrollTo) => {
  return (
    <div className="service" ref={scrollTo}>
      <div className="serviceContainer">
        <div className="serviceHero">
          <h5>What we offer</h5>
          <h1>From concept to creation</h1>
          <p>
            With MTA you and your family will be creating memories in your transformed dream space
            for years and years.
          </p>
        </div>

        <div className="serviceList">{service}</div>
      </div>
    </div>
  );
};

export default Service;
