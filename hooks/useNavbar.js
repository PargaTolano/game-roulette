import { useEffect, useState }  from 'react';
import { auth }                 from '../firebase/clientApp';

const useNavbar = (threshold = 768)=>{
    const [isShown, setIsShown]         = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        const cb = ()=>{
            if( window.innerWidth > threshold ){
                setIsShown(false);
            }
        };

        const unsubAuth = auth.onAuthStateChanged(user=> {
            setCurrentUser(user);
        });

        window.addEventListener('resize',cb);
        return ()=>{
            window.removeEventListener('resize', cb);
            unsubAuth();
        }
    },[]);

    return {
        isShown, 
        setIsShown, 
        user: currentUser
    };
};

export default useNavbar;