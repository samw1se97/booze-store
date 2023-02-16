import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDabcIJN6RTqHbyfRiA1fMYqdDa6k6zV3Y',
  authDomain: 'wine-store-b5d88.firebaseapp.com',
  projectId: 'wine-store-b5d88',
  storageBucket: 'wine-store-b5d88.appspot.com',
  messagingSenderId: '119576765796',
  appId: '1:119576765796:web:0daec425999a42f1650671',
  measurementId: 'G-YD89FDSKZR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const docRef = collection(db, 'booze');
