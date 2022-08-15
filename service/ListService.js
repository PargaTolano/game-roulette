import { auth, db } from '../firebase/clientApp';
import { 
    addDoc, 
    arrayRemove, 
    arrayUnion, 
    collection, 
    doc, 
    getDocs, 
    setDoc, 
    updateDoc
} from 'firebase/firestore';
import { List, listConverter } from '../db/model/FirestoreList';

export const ListService={
    createList: async (name)=>{
        const user=auth.currentUser;
        if(user===null)
            return Promise.reject('User must be authenticated');

        const list = new List('', name, [], '');
        
        try{
            const coll=collection(db, `users/${user.uid}/lists`);
            const newDoc= await addDoc(coll, listConverter.toFirestore(list))

            const docref= newDoc.withConverter(listConverter);

            list.id=docref.id;
            await setDoc(docref, list);

            const listColl= collection(db, 'lists');
            const listDoc= doc(listColl, docref.id).withConverter(listConverter);
            await setDoc( listDoc, list);

            return {list}
        }
        catch(e){
            return {error: e.message}
        }
    },
    changeDescription: async description=>{
        const user=auth.currentUser;
        if(user===null)
            return Promise.reject('User must be authenticated');
        
        const coll= collection(db, `users/${user.uid}/lists`);
        const listDoc = doc(coll, id).withConverter(listConverter);

        await updateDoc(listDoc, { description });
    },
    addGameToList: async ( id, game)=>{
        const user=auth.currentUser;
        if(user===null)
            return Promise.reject('User must be authenticated');
        
        const coll=collection(db, `users/${user.uid}/lists`);
        const listDoc = doc(coll, id).withConverter(listConverter);

        await updateDoc(listDoc, { games: arrayUnion(game) });
    },
    removeGameFromList: async ( id, game)=>{
        const user=auth.currentUser;
        if(user===null)
            return Promise.reject('User must be authenticated');
        
        const coll=collection(db, `users/${user.uid}/lists`);
        const listDoc = doc(coll, id).withConverter(listConverter);

        await updateDoc(listDoc, {games: arrayRemove(game)});
    },
    getMyLists: async()=>{
        const user=auth.currentUser;
        if(user===null)
            return Promise.reject('User must be authenticated');

        const coll=collection(db, `users/${user.uid}/lists`).withConverter(listConverter);
        const snap= await getDocs(coll);

        return snap.docs.map(x=>x.data());
    },
    searchLists: async()=>{
    }
};
