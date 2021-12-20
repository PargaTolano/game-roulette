import { doc, getFirestore, setDoc } from 'firebase/firestore';
import firebase                      from '../firebase/clientApp';

const createList = async (id, listData) => {
    const db = getFirestore(firebase);

    const document = doc(db, `users/${id}/lists`);
    listData.id = document.id;
    await setDoc(document, listData);

    return listData;
};

export default createList;