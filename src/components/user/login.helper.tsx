import app from '../../firebase.config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(app);

export async function signInHandler(user: any) {
  const { email, password } = user;
  try {
    const User = await signInWithEmailAndPassword(auth, email, password);
    return User.user?.uid;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { null: 'null', errorCode, errorMessage };
  }
}
