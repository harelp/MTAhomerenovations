import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();
const signOutUser = () => {
  signOut(auth)
    .then(() => {
      console.log('Sign-out successful');
    })
    .catch((error) => {
      console.log(error);
    });
};

export default signOutUser;
