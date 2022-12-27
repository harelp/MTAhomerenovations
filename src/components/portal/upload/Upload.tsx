import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify';

// custom imports
import uplImg from './upload.helper';
import { saveData } from './saveData.helper';
import { toastInt } from '../../user/toast.helper';
import { UserContext } from '../../context/UserContext';

const Upload = () => {
  // state's
  const [loading, setLoading] = useState(false);
  const [img, setimg] = useState<any>(null);
  const [name, setName] = useState<string>('');
  const [imgArr, setImgArr] = useState<Array<any>>([]);
  const { user } = useContext(UserContext);

  // Functions
  const navigate = useNavigate();

  const selectImg = (evt: any) => {
    const ext = evt.target.files[0].type;
    if (ext === 'image/png' || ext === 'image/jpeg') {
      setimg(evt.target.files[0]);
    } else {
      toastInt('Please select a different File', 'error');
      return;
    }
  };

  const uploadImg = async (evt: any) => {
    setLoading(true);
    evt.preventDefault();
    if (img === null) {
      setLoading(false);
      toastInt('Please Select an Image', 'error');
      return;
    }
    const imgName = await uplImg(img, img.name);
    if (imgName?.code === true) {
      toastInt('Image Uploaded', 'ok');
      const stateImgArr = [...imgArr, imgName.data];
      const newArr: any = new Set<any>(stateImgArr);
      setImgArr(() => [...newArr]);
      setLoading(false);
    } else {
      console.log(imgName?.data);
      setLoading(false);
    }
  };

  const handleSubmit = async (evt: any) => {
    setLoading(true);
    evt.preventDefault();

    if (name.length <= 0) toastInt('Project Name is Empty', 'error');
    if (name.length > 0) {
      if (imgArr.length <= 0) {
        setLoading(false);
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
      setLoading(false);
      !loading && navigate('/portal');
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, []);

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
            disabled={loading}
          />
          <button
            className="btn_submit"
            disabled={loading}
            style={{ marginTop: '15px', backgroundColor: 'black', borderRadius: '0' }}
            onClick={uploadImg}>
            Upload Image
          </button>
        </div>

        <button
          className="btn_submit"
          type="submit"
          style={{ marginTop: '15px' }}
          disabled={loading}>
          Save Project
        </button>
      </form>
      <div className="renderImages">
        <h4 style={{ marginTop: '15px' }}>Uploads:</h4>
        {imgArr.map((key, i) => {
          return (
            <img
              key={i}
              src={imgArr[i]}
              style={{ width: '300px', height: '300px', padding: '5px' }}></img>
          );
        })}
      </div>
      <ToastContainer position="top-center" transition={Bounce} />
    </div>
  );
};

export default Upload;
