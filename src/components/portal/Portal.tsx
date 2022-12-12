import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

// custom imports
import { getProjects } from './portal.helper';
import { UserContext } from '../context/UserContext';
const Portal = () => {
  const [project, setProject] = useState<any>({});
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const arr = Object.keys(project).map((projKey: any) => {
    return (
      <div key={project[projKey].docId} className="portalProjectBox">
        <h5>{project[projKey].docData.name}</h5>
      </div>
    );
  });
  useEffect(() => {
    const getData = async () => {
      const data = await getProjects();
      setProject(data);
    };

    if (user) {
      getData();
    } else {
      navigate('/login');
    }
  }, [setProject]);

  return (
    <div className="portalContainer">
      <h3>Projects</h3>
      <div className="portalWrapper">
        <div className="portalProjectBox" onClick={() => navigate('/upload')}>
          <FontAwesomeIcon icon={faSquarePlus} className="projectIcon" />
        </div>
        {arr}
      </div>
    </div>
  );
};

export default Portal;
