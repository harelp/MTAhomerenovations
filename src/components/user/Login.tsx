import React, { useEffect, useState } from 'react';
import { getProjects } from './login.helper';
import signOutUser from './SignOutUser';

const Login = () => {
  const [project, setProject] = useState<any>({});

  const arr = Object.keys(project).map((projectKey: any) => {
    return (
      <div key={projectKey}>
        <p>name - {project[projectKey].name}</p>
        {project[projectKey].images.map((imgKey: any, i: any) => {
          return <p key={imgKey + ' ' + i}>images = {project[projectKey].images[i]}</p>;
        })}
      </div>
    );
  });
  useEffect(() => {
    const getData = async () => {
      const data = await getProjects();
      setProject(data);
      console.log('i got in');
    };

    getData();
  }, [setProject]);

  return (
    <div>
      {arr}
      <button onClick={signOutUser}>Sign-out</button>
    </div>
  );
};

export default Login;
