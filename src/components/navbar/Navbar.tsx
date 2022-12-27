import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToref } from '../../App.helper';
import logo from '../../images/logo.png';

interface scrollTo {
  scrollTo: string | any;
}

const Navbar = ({ scrollTo }: scrollTo) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const clickHandler = () => {
    const path = pathname === '/';

    path && scrollToref(scrollTo[0]);
    !path && navigate('/');
  };

  const renderLinks = () => {
    if (pathname === '/') {
      return (
        <ul className="appList">
          <li onClick={() => scrollToref(scrollTo[1])}>Services</li>
          <li onClick={() => scrollToref(scrollTo[2])}>Projects</li>
          <li className="appContact" onClick={() => scrollToref(scrollTo[3])}>
            Contact
          </li>
        </ul>
      );
    }
  };

  return (
    <div className="appBar" ref={scrollTo[0]}>
      <div className="appContainer">
        <img src={logo} alt="MTA Logo" className="logo" onClick={clickHandler} />
        {renderLinks()}
      </div>
    </div>
  );
};

export default Navbar;
