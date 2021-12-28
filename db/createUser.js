import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection, doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import firebase from "../firebase/clientApp";

export const createUser = async (email, password)=>{
    const auth = getAuth(firebase);

    let userCredential;
    try{
        
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
    }catch(error){
        console.error(error);
        return null;
    }

    const db                = getFirestore(firebase);
    const userCollection    = collection(db, 'users');
    const userDoc           = doc(userCollection, userCredential.user.uid);

    const data = {
        id: userCredential.user.uid, 
        lists: []
    };

    try {
        await setDoc(userDoc, data);
    } catch (error) {
        console.error(error);
        return null;
    }
    

    return data;
};

export default createUser;