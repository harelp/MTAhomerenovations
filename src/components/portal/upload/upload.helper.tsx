import app from '../../../firebase.config';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
const storage = getStorage(app);

const uplImg = async (file: any, name: any) => {
  //const Ref = ref(storage, 'mountains.jpg');
  const imagesRef = ref(storage, `images/${name}`);
  try {
    const uploadTask: any = await uploadBytes(imagesRef, file);
    return {
      code: true,
      data: uploadTask.metadata.name
    };
  } catch (error) {
    return {
      code: false,
      data: error
    };
  }

  //   await uploadBytes(imagesRef, file).then(() => {
  //     console.log('Uploaded a blob or file!');
  //   });
};

export default uplImg;

/* 
1. go to upload page
2. create project
3. upload photos and create image object
4. update database


*/
