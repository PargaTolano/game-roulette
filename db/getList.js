import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import firebase from '../firebase/clientApp';

const getList = async (userId, listId) => {
    const db = getFirestore(firebase);

    const listDoc = doc(db, `users/${userId}/lists/${listId}`);
    const docSnapshot  = await getDoc(listDoc);
    const lists = docSnapshot.data();

    return lists;
};

export default getList;