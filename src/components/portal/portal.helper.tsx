import app from '../../firebase.config';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const db = getFirestore(app);

export async function getProjects() {
  const projectCol = collection(db, 'project');
  const projectSnapshot = await getDocs(projectCol);
  let dataArr: Array<Object> = [];
  projectSnapshot.docs.map((doc) => {
    dataArr.push({ docId: doc.id, docData: doc.data() });
  });
  return dataArr;
}
