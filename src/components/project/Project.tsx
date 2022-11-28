import * as React from 'react';
import renderProject from './projectBox.helper';

interface scrollTo {
  scrollTo: string | any;
}

const Project = ({ scrollTo }: scrollTo) => {
  return (
    <div className="project" ref={scrollTo}>
      <div className="projectWrapper">
        <div className="projectContainer">{renderProject}</div>
        <h5>Our Works</h5>
      </div>
    </div>
  );
};

export default Project;
