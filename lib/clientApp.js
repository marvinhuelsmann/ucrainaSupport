import firebase from "firebase/compat/app";
import  'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBAg3OM-L-DMvx4vwPk14ywUGjexMOuVrQ',
    authDomain: 'ucrainewar-d782d.firebaseapp.com',
    projectId: 'ucrainewar-d782d'
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

