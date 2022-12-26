import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import renderImages from './display.helper';
const Display = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // const imgsArr = location.state.docData.images;
  const [imgsArr, setImgsArr] = useState<any>([]);
  const [projName, setProjName] = useState<string>('');

  useEffect(() => {
    if (location.state === null || undefined) {
      navigate('/');
    } else {
      setImgsArr(location.state.docData.images);
      setProjName(location.state.docData.name);
    }
  }, []);

  return (
    <div className="display">
      <div
        className="displayHero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 144, 0, 0.4), rgba(255, 144, 0, 0.5)), url(${
            imgsArr && imgsArr[Math.floor(Math.random() * 5)]
          })`
        }}>
        <h1>{projName}</h1>
      </div>

      <div className="displayContent">{renderImages(imgsArr)}</div>
    </div>
  );
};

export default Display;
