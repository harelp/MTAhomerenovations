import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, Bounce } from 'react-toastify';
// custom imports
import { getProjects, deleteDocFunc } from './portal.helper';
import { UserContext } from '../context/UserContext';
import { toastInt } from './../user/toast.helper';
import Loader from '../loader/Loader';

const Portal = () => {
  const [project, setProject] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleDelete = async (evt: string) => {
    const data = await deleteDocFunc(evt);
    if (data.code === 'ok') {
      toastInt('Project Deleted', 'ok');
      setProject(data.msg);
    } else {
      console.log(data.msg);
    }
  };

  const arr = Object.keys(project).map((projKey: any) => {
    return (
      <div key={project[projKey].docId} className="portalProjectBox">
        <h5>{project[projKey].docData.name}</h5>
        <button
          key={project[projKey].docId}
          className="btn_submit"
          style={{ borderRadius: 0, marginTop: '15px', backgroundColor: 'black' }}
          onClick={() => handleDelete(project[projKey].docId)}>
          Delete
        </button>
      </div>
    );
  });
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const data = await getProjects();
      setProject(data);
      setLoading(false);
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
      <ToastContainer position="top-center" transition={Bounce} />
      {loading && <Loader />}
    </div>
  );
};

export default Portal;
