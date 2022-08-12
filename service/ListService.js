import { auth, storage } from '../firebase/clientApp';
import { 
    deleteObject, 
    ref, 
    uploadBytes 
} from 'firebase/storage';
import { v4 as uuid } from 'uuid';

export const ListService={
    storeFile: async (file)=>{
        const user=auth.currentUser;
        if(!user)
            return Promise.reject('User must be authenticated');

        const storageRef=ref(storage, `/${user.uid}/${uuid()}`);
        return uploadBytes(storageRef, file);
    },
    removeFile: path=>{
        const storageRef=ref(storage, path);
        return deleteObject(storageRef);
    }
};
