import { signInWithEmailAndPassword } from 'firebase/auth';
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
    observe: (func)=> auth.onAuthStateChanged(func)
};