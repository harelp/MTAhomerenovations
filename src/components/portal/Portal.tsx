import React, { useContext } from 'react';
// import React from 'react';
import { UserContext } from '../context/UserContext';

const Portal = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return <div>Portal</div>;
};

export default Portal;
