import * as React from 'react';
import { Link } from 'react-router-dom';

import List from './List';
export const listArr: Array<string> = ['services', 'about'];
const list = listArr.map((i) => {
  return <List list={i} key={i} />;
});

const Navbar = () => {
  return (
    <div className="appBar">
      <div className="appContainer">
        <div className="appLogo">
          <Link to="/">
            mta<span>.</span>
          </Link>
        </div>
        <ul className="appList">
          {list}
          <li className="appContact">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
