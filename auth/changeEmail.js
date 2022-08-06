import {auth} from '../firebase/clientApp';

const changeEmail = (email)=>{
    const user = auth.currentUser;
    if(user===null)
        return;

    return auth.updateEmail(email);
};

export default changeEmail;
