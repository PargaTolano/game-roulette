import { updateEmail } from 'firebase/auth';
import { auth } from '../firebase/clientApp';

const changeEmail = (email)=>{
    const user = auth.currentUser;
    if(user===null)
        return;

    return updateEmail(user, email);    
};

export default changeEmail;
