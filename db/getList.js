import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import firebase from '../firebase/clientApp';

const getList = async (listId) => {
    const db = getFirestore(firebase);

    const userlistDoc   = doc(db, `lists/${listId}`);
    const docSnapshot   = await getDoc(userlistDoc);
    const list          = docSnapshot.data();

    return list;
};

export default getList;