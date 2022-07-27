import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ4lgrDWnvUMPe24TaGiT7oTKpArP6yzw",
  authDomain: "modern-react-app-71b37.firebaseapp.com",
  projectId: "modern-react-app-71b37",
  storageBucket: "modern-react-app-71b37.appspot.com",
  messagingSenderId: "53407443486",
  appId: "1:53407443486:web:c8c3119497cf149e199c0f",
};
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
