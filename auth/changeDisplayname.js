import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/clientApp';

const changeDisplayname = (displayName)=>{
    const user = auth.currentUser;
    if(user===null)
        return;

    return updateProfile(user, {displayName});    
};

export default changeDisplayname;
