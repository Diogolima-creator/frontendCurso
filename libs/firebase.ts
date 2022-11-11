import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: 'AIzaSyCguslA-aD85ccN24YA5gIrZtv_OksUzTQ',
    authDomain: 'cursoncsm.firebaseapp.com',
    projectId: 'cursoncsm',
    storageBucket: 'cursoncsm.appspot.com',
    messagingSenderId: '25495849924',
    appId: '1:25495849924:web:c891e2ac84e010a69eb291'
  };

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);
