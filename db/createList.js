import { 
    collection, 
    getFirestore, 
    setDoc, 
    addDoc,
    doc
} from 'firebase/firestore';

import firebase             from '../firebase/clientApp';

import { listConverter }    from './model/FirestoreList';

const createList = async (id, list) => {
    const db = getFirestore(firebase);

    const userlistCollection = collection( db, `users/${id}/lists`);
    const newDoc = await addDoc( userlistCollection ,listConverter.toFirestore(list));

    const docref = newDoc.withConverter(listConverter);

    list.id = docref.id;
    await setDoc(docref, list);

    const coll = collection(db, 'lists');
    const document = doc(coll, docref.id).withConverter(listConverter);
    await setDoc( document, list);

    return list;
};

export default createList;