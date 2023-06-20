import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBFH_z6XnIrvgudUm7RvnlTGiYUvqQOE7E",
  authDomain: "tik-tok---jornada-d7003.firebaseapp.com",
  projectId: "tik-tok---jornada-d7003",
  storageBucket: "tik-tok---jornada-d7003.appspot.com",
  messagingSenderId: "63246881311",
  appId: "1:63246881311:web:44f225dbd5e3e04629bb2a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;