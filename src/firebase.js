// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv1V2OG_TvI-Uj6go8SJ9IjEer4VLkVHY",
  authDomain: "portfolio-c5ace.firebaseapp.com",
  projectId: "portfolio-c5ace",
  storageBucket: "portfolio-c5ace.appspot.com",
  messagingSenderId: "883259370198",
  appId: "1:883259370198:web:b61b7babc7ee32f7fc3777",
  measurementId: "G-TF0XKLNYQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;