import {initializeApp, firestore} from 'firebase/app';
import 'firebase/firestore';

const app = initializeApp(
{
  apiKey: "AIzaSyBpXEH_WPWhdyUsRx9L59WzJk41fkxDx_w",
  authDomain: "wooden-maceteros.firebaseapp.com",
  projectId: "wooden-maceteros",
  storageBucket: "wooden-maceteros.appspot.com",
  messagingSenderId: "155998617179",
  appId: "1:155998617179:web:41183cd21dd18da3ce897e"
});

export default function getFirebaseApp() {
  return app;
}

export  function getFirestore() {
  return firestore(app);
}
