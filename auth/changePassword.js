import { updatePassword} from 'firebase/auth';
import { auth } from '../firebase/clientApp';

const changePassword = (password)=>{
    const user = auth.currentUser;
    if(user===null)
        return;

    return updatePassword(user, password);    
};

export default changePassword;
