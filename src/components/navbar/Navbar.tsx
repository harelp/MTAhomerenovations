import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToref } from '../../App.helper';

interface scrollTo {
  scrollTo: string | any;
}

const Navbar = ({ scrollTo }: scrollTo) => {
  const { pathname } = useLocation();
  const history = useNavigate();

  const clickHandler = () => {
    const path = pathname === '/';

    path && scrollToref(scrollTo[0]);
    !path && history('/');
  };

  return (
    <div className="appBar" ref={scrollTo[0]}>
      <div className="appContainer">
        <div className="appLogo" onClick={clickHandler}>
          mta<span>.</span>
        </div>
        <ul className="appList">
          <li onClick={() => scrollToref(scrollTo[1])}>Services</li>
          <li onClick={() => scrollToref(scrollTo[2])}>Projects</li>
          <li className="appContact" onClick={() => scrollToref(scrollTo[3])}>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
