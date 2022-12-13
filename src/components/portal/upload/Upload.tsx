import React, { useState } from 'react';
import uplImg from './upload.helper';
import { saveData } from './saveData.helper';
import { toastInt } from '../../user/toast.helper';
import { ToastContainer, Bounce } from 'react-toastify';
const Upload = () => {
  const [img, setimg] = useState<any>(null);
  const [name, setName] = useState<string>('');
  const [imgArr, setImgArr] = useState<Array<any>>([]);

  const selectImg = (evt: any) => {
    setimg(evt.target.files[0]);
  };

  const uploadImg = async (evt: any) => {
    evt.preventDefault();
    if (img === null) {
      toastInt('Please Select an Image', 'error');
      return;
    }
    const imgName = await uplImg(img, img.name);
    if (imgName.code === true) {
      setImgArr(() => [...imgArr, imgName.data]);
    } else {
      console.log(imgName.data);
    }

    // https://www.youtube.com/watch?v=YOAeBSCkArA&ab_channel=PedroTech
  };

  const handleSubmit = async (evt: any) => {
    evt.preventDefault();

    if (name.length <= 0) toastInt('Project Name is Empty', 'error');
    if (name.length > 0) {
      if (imgArr.length <= 0) {
        toastInt('Please upload atleast 1 image', 'error');
        return;
      }
      const isDataSaved = await saveData(name, imgArr);
      if (isDataSaved === 'ok') {
        toastInt('Project Uploaded Successfully', 'ok');
        setName('');
      } else {
        toastInt('Problem Uploading Project', 'error');
        console.log(isDataSaved);
      }
    }
  };

  return (
    <div className="uploadContainer">
      <form className="uploadForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="uploadInput"
          placeholder="Project Name"
          value={name}
          onChange={(evt: any) => setName(evt.target.value)}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center'
          }}>
          <input
            type="file"
            style={{ marginTop: '15px' }}
            className="uploadInput"
            onChange={selectImg}
          />
          <button className="btn_submit" onClick={uploadImg}>
            Upload Image
          </button>
        </div>

        <button className="btn_submit" type="submit" style={{ marginTop: '15px' }}>
          Save Project
        </button>
      </form>
      <div>
        <h4>Uploads:</h4>
        {imgArr.map((key, i) => {
          return <h5 key={i}>{imgArr[i]}</h5>;
        })}
      </div>
      <ToastContainer position="top-center" transition={Bounce} />
    </div>
  );
};

export default Upload;
