import React, { useEffect, useState } from 'react';
import { SpinnerDiamond } from 'spinners-react';
import { getProjects } from '../portal/portal.helper';
import renderProject from './projectBox.helper';

interface scrollTo {
  scrollTo: string | any;
}

const Project = ({ scrollTo }: scrollTo) => {
  const [project, setProject] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const data = await getProjects();
    setProject(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return (
    <div className="project" ref={scrollTo} id="Project">
      <div className="projectWrapper">
        <div className="projectContainer">
          {loading ? (
            <SpinnerDiamond color="#ff6422" thickness={200} size={70} speed={150} />
          ) : (
            renderProject(project)
          )}
        </div>
        <h5>Our Work</h5>
      </div>
    </div>
  );
};

export default Project;
