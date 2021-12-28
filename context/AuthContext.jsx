import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import app from '../firebase/clientApp';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser]       = useState(null);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({
        userProviderId: '',
        userId:         '',
        userName:       '',
        userEmail:      '',
        userPhotoLink:  '',
    });

    useEffect(()=>{
        onAuthStateChanged(app,(user)=>{
            if( user ){
                const requiredData = {
                    userProviderId:     user.providerData[0].providerId,
                    userId:             user.uid,
                    userName:           user.displayName,
                    userEmail:          user.email,
                    userPhotoLink:      user.photoURL
                };
                setUserData(requiredData);
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
        });
    },[]);

    if( loading ){
        return <>Loading...</>;
    }

    return (
        <AuthContext.Provider
            value={{currentUser, userData}}
        >
            {children}
        </AuthContext.Provider>
    );
};