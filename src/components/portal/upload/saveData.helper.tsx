import app from '../../../firebase.config';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { getDatabase, ref, set } from 'firebase/database';

export async function saveData(name: string, images: Array<string>) {
  const db = getFirestore(app);
  try {
    await addDoc(collection(db, 'projects'), {
      name: name,
      images: images
    });
    return 'ok';
  } catch (e) {
    return e;
  }
}
