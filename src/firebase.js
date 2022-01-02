// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,} from 'firebase/firestore';
import { getAuth,  } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";;
// TODO: Add SDKs for Firebase products that you want to use
const provider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: "AIzaSyA4-PoimaJqZb168XLvbexiawNxmFl37D0",
  authDomain: "clonefeatures-46470.firebaseapp.com",
  projectId: "clonefeatures-46470",
  storageBucket: "clonefeatures-46470.appspot.com",
  messagingSenderId: "923189879678",
  appId: "1:923189879678:web:27194b19c5c4019980c92f"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth  =getAuth(app);

export {auth,provider};
export default getFirestore();
