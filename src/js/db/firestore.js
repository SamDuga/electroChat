import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBvtHzPnpcIqlgu5M4fNKsc-wfyFYFokbM',
	authDomain: 'electro-chat-da1b3.firebaseapp.com',
	projectId: 'electro-chat-da1b3',
	storageBucket: 'electro-chat-da1b3.appspot.com',
	messagingSenderId: '1042169780687',
	appId: '1:1042169780687:web:402058a4957ffb716c5aba',
	measurementId: 'G-VZE63HZMG6',
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig).firestore();
db.settings({ experimentalForceLongPolling: true });
export default db;
