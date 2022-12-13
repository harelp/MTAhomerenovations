import app from '../../../firebase.config';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { getDatabase, ref, set } from 'firebase/database';

export async function saveData(name: string, images: Array<string>) {
  const db = getFirestore(app);
  //   try {
  //     await set(ref(db, 'project/'), {
  //       name: name,
  //       images: images
  //     });

  //     return 'ok';
  //   } catch (error) {
  //     return error;
  //   }

  try {
    const docRef = await addDoc(collection(db, 'project'), {
      name: name,
      images: images
    });
    console.log('Document written with ID: ', docRef.id);
    return 'ok';
  } catch (e) {
    return e;
  }
}
