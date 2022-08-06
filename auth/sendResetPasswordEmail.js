import {auth} from '../firebase/clientApp';

const sendResetPasswordEmail = ()=>{
    const user = auth.currentUser;
    if(user===null)
        return;

    return auth.sendPasswordResetEmail(user.email)
};

export default sendResetPasswordEmail;
