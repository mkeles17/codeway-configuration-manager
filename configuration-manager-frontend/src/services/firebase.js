import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDxGraxDAApTF9-cxqiOSj_U6Y0P8P8ouM',
    authDomain: 'configuration-manager-4a193.firebaseapp.com',
    projectId: 'configuration-manager-4a193',
    storageBucket: 'configuration-manager-4a193.appspot.com',
    messagingSenderId: '672568935448',
    appId: '1:672568935448:web:b52e3f22a73f8d52b5ef6d',
    measurementId: 'G-0FKKMQBW56'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
