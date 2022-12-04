import * as React from 'react';
import renderProject from './projectBox.helper';

interface scrollTo {
  scrollTo: string | any;
}

const Project = ({ scrollTo }: scrollTo) => {
  return (
    <div className="project" ref={scrollTo} id="Project">
      <div className="projectWrapper">
        <div className="projectContainer">{renderProject}</div>
        <h5>Our Work</h5>
      </div>
    </div>
  );
};

export default Project;
