import { useState, useEffect, createContext, useContext } from 'react';
import { AuthService } from '../service/AuthService';

const authContext=createContext();

const useAuth =()=>useContext(authContext);
export default useAuth;

export const AuthProvider=props=>{
    const [user, setUser]=useState(null);
    const [error, setError]=useState('');


    const login= async(email,password)=>{
        const {error, user}= await AuthService.login(email,password);
        setUser(user??null);
        setError(error);
    };
    
    const logout=()=>AuthService.logout();

    useEffect(()=>{
        return AuthService.observe(user=>setUser(user||null));
    },[]);

    const value={
        user,
        error,
        login,
        logout
    };

    return <authContext.Provider value={value} {...props}/>
};
