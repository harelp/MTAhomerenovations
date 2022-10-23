import * as React from 'react';
import { Link } from 'react-router-dom';

const List = (props: any) => {
  return (
    <li>
      <Link to={props.list}>{props.list}</Link>
    </li>
  );
};

export default List;
