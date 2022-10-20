import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: 'cursoncsm.appspot.com',
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
  };

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);
