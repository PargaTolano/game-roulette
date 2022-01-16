import { 
    collection, 
    getFirestore, 
    setDoc, 
    addDoc 
} from 'firebase/firestore';

import firebase             from '../firebase/clientApp';

import { listConverter }    from './model/FirestoreList';

const createList = async (id, list) => {
    const db = getFirestore(firebase);

    const listCollection = collection( db, `users/${id}/lists`);
    const newDoc = await addDoc( listCollection ,listConverter.toFirestore(list));

    const docref = newDoc.withConverter(listConverter);

    list.id = docref.id;
    await setDoc(docref, list);

    return list;
};

export default createList;