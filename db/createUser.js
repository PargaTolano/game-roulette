import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection, doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import firebase from "../firebase/clientApp";

export const createUser = async (email, password)=>{
    const auth = getAuth(firebase);

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    const db                = getFirestore(firebase);
    const userCollection    = collection(db, 'users');
    const userDoc           = doc(userCollection, userCredential.user.uid);

    const data = {
        id: userCredential.user.uid, 
        lists: []
    };
    
    await setDoc(userDoc, data);

    return data;
};

export default createUser;