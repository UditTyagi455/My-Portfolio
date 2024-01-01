// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7WJavM6Tb_zEyHicZmcZa_btMBguwIPM",
  authDomain: "portfolio-662e4.firebaseapp.com",
  projectId: "portfolio-662e4",
  storageBucket: "portfolio-662e4.appspot.com",
  messagingSenderId: "205887984488",
  appId: "1:205887984488:web:87b09fb778035246affcdd",
  measurementId: "G-KGHFMZY76Q",
  databaseURL: "https://portfolio-662e4-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export default database;