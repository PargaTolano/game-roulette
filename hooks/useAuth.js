import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { auth } from '../firebase/clientApp';

const useAuth = ()=>{
    const router                        = useRouter();
    const [currentUser, setCurrentUser] = useState(auth.currentUser); 

    useEffect(()=>{
        const unsub = auth.onAuthStateChanged((user)=>{
            if(!user){
                router.replace('/login');
            }
            setCurrentUser(user);
        });
        return unsub;
    },[]);

    return currentUser;
};

export default useAuth;