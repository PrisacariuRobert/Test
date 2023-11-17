
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDa6VgOje9VXVSbMDMGqH5hAqfpbxcjk4U",
    authDomain: "projecttest-a7988.firebaseapp.com",
    projectId: "projecttest-a7988",
    storageBucket: "projecttest-a7988.appspot.com",
    messagingSenderId: "137976515808",
    appId: "1:137976515808:web:489033530e9f87a9265485",
    measurementId: "G-5Q8ZX34751"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  export async function loginUser(email: string, password: string) {
    
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        console.log(res);
       return true
    } catch (error) {
        console.error(error);
        return false
    }
}