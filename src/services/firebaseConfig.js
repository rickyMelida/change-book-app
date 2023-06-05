import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// Initialize Firebase
const app = initializeApp({
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: process.env.REACT_APP_AUTHDOMAIN,
	projectId: process.env.REACT_APP_PROJECTID,
	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_APPID,
	measurementId: process.env.REACT_APP_MEASUREMENTID,
});
// Firebase storage reference
const storage = getStorage(app);
export default storage;
