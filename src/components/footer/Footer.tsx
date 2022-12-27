import * as React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <p>Copyright © 2022 MTA Home Renovations</p>
        <a
          style={{ cursor: 'pointer' }}
          href="https://github.com/harelp"
          target="_blank"
          rel="noreferrer">
          Harel Peri
        </a>
      </div>
    </div>
  );
};

export default Footer;
