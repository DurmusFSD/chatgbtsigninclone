import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,FacebookAuthProvider,GithubAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC_lc_bRlsutBDW2popyMb0jSTyDy4hba8",
  authDomain: "chatgpt-clone-c100e.firebaseapp.com",
  projectId: "chatgpt-clone-c100e",
  storageBucket: "chatgpt-clone-c100e.appspot.com",
  messagingSenderId: "1085269600615",
  appId: "1:1085269600615:web:4b9ca48e86ee6bc1db27c2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const facebookProvider = new FacebookAuthProvider(app)
export const githubProvider = new GithubAuthProvider(app)