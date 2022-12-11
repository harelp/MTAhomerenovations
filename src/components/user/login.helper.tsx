import app from '../../firebase.config';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const db = getFirestore(app);
const auth = getAuth();

export async function getProjects() {
  const projectCol = collection(db, 'project');
  const projectSnapshot = await getDocs(projectCol);
  const projectList = projectSnapshot.docs.map((doc) => doc.data());
  return projectList;
}

export async function signInHandler(user: any) {
  const { email, password } = user;
  try {
    const User = await signInWithEmailAndPassword(auth, email, password);
    console.log(User.user?.uid);
    return User.user?.uid;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode, errorMessage);
  }
}
