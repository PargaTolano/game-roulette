import { collection, getDocs, getFirestore } from 'firebase/firestore';
import firebase from '../firebase/clientApp';

const getLists = async (id) => {
    const db = getFirestore(firebase);

    const listCollection = collection(db, `users/${id}/lists`);
    const listsSnapshot  = await getDocs(listCollection);
    const lists = listsSnapshot.docs.map(doc=>doc.data());

    return lists;
};

export default getLists;