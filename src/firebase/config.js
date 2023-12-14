import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCzEIAGRKLRv-U1KOWP-v8pvrKgzc3lO0w",
  authDomain: "miniblog-b44ef.firebaseapp.com",
  projectId: "miniblog-b44ef",
  storageBucket: "miniblog-b44ef.appspot.com",
  messagingSenderId: "152128948026",
  appId: "1:152128948026:web:47523c19f1990da82d7203"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize o banco de dados getFirestore e um metodo.
const db = getFirestore(app)

export {db}