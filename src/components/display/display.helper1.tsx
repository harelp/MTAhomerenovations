import React, { useState } from 'react';
import { SpinnerCircular } from 'spinners-react';

<SpinnerCircular
  size={50}
  thickness={100}
  speed={100}
  color="#36ad47"
  secondaryColor="rgba(0, 0, 0, 0.44)"
/>;

const renderImages = (project: Array<any>) => {
  const [loaded, setLoaded] = useState(false);
  console.log(project.length + ' ' + 'from helper');

  let images = [];
  for (let i = 0; i < project.length; i++) {
    images.push(
      <figure className={`gallery__item gallery__item--${i + 1}`}>
        <img src={project[i]} className="gallery__img" alt="Project image" />
      </figure>
    );
  }
  return images;
};

export default renderImages;
