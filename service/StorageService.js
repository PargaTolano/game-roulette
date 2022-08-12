import { auth, storage } from '../firebase/clientApp';
import { 
    deleteObject, 
    getDownloadURL, 
    ref, 
    uploadBytesResumable 
} from 'firebase/storage';
import { v4 as uuid } from 'uuid';

export const StorageService={
    storeFile: async (
            file, 
            onUpdateProgress= _=>{},
        )=>{
        const user=auth.currentUser;
        if(!user)
            return Promise.reject('User must be authenticated');

        const storageRef=ref(storage, `/${user.uid}/${uuid()+file.name}`);

        return new Promise((res,rej)=>{
            const task= uploadBytesResumable(storageRef, file);
            task.on(
                'state_changed',
                snapshot=>{
                    const percent= 
                        Math.round(snapshot.bytesTransferred/snapshot.totalBytes*100);
                    onUpdateProgress(percent);
                },
                err=>rej(err),
                ()=>{
                    getDownloadURL(task.snapshot.ref)
                        .then(res)
                        .catch(rej)
                }
            );
        });
    },
    removeFile: path=>{
        const storageRef=ref(storage, path);
        return deleteObject(storageRef);
    }
};
