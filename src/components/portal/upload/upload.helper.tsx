import app from '../../../firebase.config';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
const storage = getStorage(app);

const uplImg = async (file: any, name: any) => {
  const imagesRef = ref(storage, `images/${name}`);
  try {
    if (await uploadBytes(imagesRef, file)) {
      const url = await getDownloadURL(ref(storage, `images/${name}`));
      const newUrl = url.replace(/&.*$/, '');
      console.log(newUrl);
      return {
        code: true,
        data: newUrl
      };
    }

    //const uploadTask: any = await uploadBytes(imagesRef, file);
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
