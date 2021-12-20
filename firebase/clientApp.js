import { getAuth }      from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from '@firebase/app';
import * as firebase from 'firebase/app';

const clientCredentials = {
    apiKey:             process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain:         process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId:          process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket:      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:  process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId:              process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app;
if( firebase.getApps().length === 0 )
    app = initializeApp(clientCredentials);

export default app;

export const auth = getAuth();

export const db = getFirestore();