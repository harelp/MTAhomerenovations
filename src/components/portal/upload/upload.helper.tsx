import app from '../../../firebase.config';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
const storage = getStorage(app);

const createRef = (file: any) => {
  //const Ref = ref(storage, 'mountains.jpg');
  const imagesRef = ref(storage, 'images/mountains.jpg');

  uploadBytes(imagesRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
};

export default createRef;
