import * as React from 'react';
import { Link } from 'react-router-dom';

const Box = (props: any) => {
  const { name, num } = props;
  return (
    <div className="projectContent">
      <Link to="/display" className="title">
        {name}
      </Link>
      <h6 className="projectNum">{num}</h6>
    </div>
  );
};

export default Box;
