import React from 'react';

const renderImages = (project: Array<any>) => {
  const imgsCont = () => {
    let images = [];
    for (let i = 0; i < 6; i++) {
      images.push(
        <figure key={i} className={`gallery__item gallery__item--${i + 1}`}>
          <img src={project[i]} className="gallery__img" alt="Project image" />
        </figure>
      );
    }
    return images;
  };

  return <div className="displayGallery">{imgsCont()}</div>;
};

export default renderImages;
