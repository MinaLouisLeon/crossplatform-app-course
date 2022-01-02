// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0cnUeiwGQpoG137isusYofeKTWBzLNiE",
  authDomain: "project-plus-app.firebaseapp.com",
  projectId: "project-plus-app",
  storageBucket: "project-plus-app.appspot.com",
  messagingSenderId: "701867346259",
  appId: "1:701867346259:web:0dcc2895d35b2a8d40b9a6",
  measurementId: "G-WZPXR59Q9Z"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);