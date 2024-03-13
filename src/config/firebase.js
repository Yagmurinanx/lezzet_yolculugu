import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "lezzetyolculugu-fcd3f.firebaseapp.com",
  projectId: "lezzetyolculugu-fcd3f",
  storageBucket: "lezzetyolculugu-fcd3f.appspot.com",
  messagingSenderId: "749598282394",
  appId: "1:749598282394:web:681fb72de57031f02dc523",
  measurementId: "G-JEHJ6SP2L0"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app)