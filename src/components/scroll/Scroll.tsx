import * as React from 'react';
import scroll from '../../images/scroll.png';
const Scroll = () => {
  return (
    <div className="scroll">
      <div className="scrollContainer">
        <img className="animateBounce" src={scroll} alt="Scroll" />
      </div>
    </div>
  );
};

export default Scroll;
