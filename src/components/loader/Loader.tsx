import * as React from 'react';
import { SpinnerDiamond } from 'spinners-react';
const Loader = () => {
  return (
    <div className="loaderContainer">
      <SpinnerDiamond color="#ff6422" thickness={200} size={70} speed={150} />
    </div>
  );
};

export default Loader;
