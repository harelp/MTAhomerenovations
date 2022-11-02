import * as React from 'react';
import renderProject from './projectBox.helper';
const Project = () => {
  return (
    <div className="project">
      <div className="projectWrapper">
        <div className="projectContainer">{renderProject}</div>
        <h5>Our Works</h5>
      </div>
    </div>
  );
};

export default Project;
