import app from '../../firebase.config';
import { getFirestore, collection, getDocs, doc, deleteDoc } from 'firebase/firestore/lite';

const db = getFirestore(app);

export const getProjects = async () => {
  const projectCol = collection(db, 'projects');
  const projectSnapshot = await getDocs(projectCol);
  let dataArr: Array<Object> = [];
  projectSnapshot.docs.map((doc) => {
    dataArr.push({ docId: doc.id, docData: doc.data() });
  });
  return dataArr;
};

export const deleteDocFunc = async (docId: string) => {
  try {
    await deleteDoc(doc(db, 'projects', docId));
    const dataArr = await getProjects();
    return { code: 'ok', msg: dataArr };
  } catch (error) {
    return {
      code: 'error',
      msg: error
    };
  }
};
