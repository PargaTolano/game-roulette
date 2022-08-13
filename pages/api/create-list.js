import { getFirestore } from 'firebase/firestore';
import firebase from '../../firebase/clientApp';
// import { listConverter }    from './model/FirestoreList';

export default async function handler(req, res){
    // const { name, description }=req.body;
    
    // const db=getFirestore(firebase);
    // const userlistCollection = collection( db, `users/${id}/lists`);

    // const list=

    // const newDoc = await addDoc( userlistCollection ,listConverter.toFirestore(list));

    res.status(200).json(games);
}
