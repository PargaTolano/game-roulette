import { signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../firebase/clientApp';

export const AuthService={
    login: async (email, password)=>{
        try{
            const user = await signInWithEmailAndPassword(auth, email, password);
            return {user};
        } catch(e){
            return {error:e.message};
        }
    },
    logout: ()=> auth.signOut(),
    observe: (func)=> auth.onAuthStateChanged(func),
    changephotoURL: photoURL=>{
        const user = auth.currentUser;
        if(user===null)
            return Promise.reject('User must be authenticated');
    
        return updateProfile(user, {photoURL});    
    },
    changeDisplayName: displayName=>{
        const user = auth.currentUser;
        if(user===null)
            return Promise.reject('User must be authenticated');
    
        return updateProfile(user, {displayName});    
    },
    changeEmail: email=>{
        const user = auth.currentUser;
        if(user===null)
            return;
    
        return updateEmail(user, email);    
    },
    changePassword: password=>{
        const user = auth.currentUser;
        if(user===null)
            return Promise.reject('User must be authenticated');
    
        return updatePassword(user, password);
    },
    sendResetPasswordEmail: ()=>{
        const user = auth.currentUser;
        if(user===null)
            return Promise.reject('User must be authenticated');
    
        return auth.sendPasswordResetEmail(user.email)
    }
};
