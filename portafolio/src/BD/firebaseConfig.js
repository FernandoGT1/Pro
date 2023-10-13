// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCwHfmMeWKF6kQrJuIlPOT8lz-2RAT0BJE",
  authDomain: "proyectofernando-22299.firebaseapp.com",
  projectId: "proyectofernando-22299",
  storageBucket: "proyectofernando-22299.appspot.com",
  messagingSenderId: "713501123078",
  appId: "1:713501123078:web:87c947b82bba9a01f9d987"
};

//--force
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase=getFirestore(app);

