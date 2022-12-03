import * as React from 'react';
import imag from '../../images/project.jpg';
import img1 from '../../images/heroImgs/1.jpeg';
import img2 from '../../images/heroImgs/2.jpeg';
import img3 from '../../images/heroImgs/3.jpeg';
import img4 from '../../images/heroImgs/4.jpeg';
const Display = () => {
  return (
    <div className="display">
      <div
        className="displayHero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 144, 0, 0.4), rgba(255, 144, 0, 0.5)), url(${imag})`
        }}>
        <h1>My first Project</h1>
      </div>

      <div className="displayContent">
        <div className="displayGallery">
          <figure className="gallery__item gallery__item--1">
            <img src={img1} className="gallery__img" alt="Gallery image 1" />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img src={img2} className="gallery__img" alt="Gallery image 2" />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img src={img3} className="gallery__img" alt="Gallery image 3" />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img src={img4} className="gallery__img" alt="Gallery image 4" />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img src={imag} className="gallery__img" alt="Gallery image 5" />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img src={img1} className="gallery__img" alt="Gallery image 6" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Display;
