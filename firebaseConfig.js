import { initializeApp } from 'firebase/app';
import { getFirestore ,doc,setDoc,getDocs ,query, where,collection } from "firebase/firestore";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDqogb8sSqgPgUNz_-xvpdbMAGU2T6LXwg",
  authDomain: "whatsapp-56124.firebaseapp.com",
  projectId: "whatsapp-56124",
  storageBucket: "whatsapp-56124.appspot.com",
  messagingSenderId: "1048702271070",
  appId: "1:1048702271070:web:298afff62185baa250becf",
  measurementId: "G-3NSJNS3DTV"
};

// Initialize Firebase only if not already initialized
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Auth with AsyncStorage for persistence

const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { firestore, setDoc, getDocs, doc, collection,storage,getStorage,ref,uploadBytes,getDownloadURL};