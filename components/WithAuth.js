import { auth }     from '../firebase/clientApp';

import Login        from '../pages/login';

const WithAuth = (Component)=>{
    const user = auth.currentUser;

    const AuthedComponent = (props)=>{

        if(!user){
            return (
                <Login/>
            );
        }

        return(
            <Component {...props}/>
        );
    };

    return AuthedComponent;
};

export default WithAuth;