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
  } catch (error) {
    return {
      code: false,
      data: error
    };
  }
};

export default uplImg;
