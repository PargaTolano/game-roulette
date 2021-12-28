import { useRouter }    from 'next/router';
import { auth }         from '../firebase/clientApp';

const WithAuth = ({children})=>{
    const user = auth.currentUser;
    const router = useRouter();

    if(!user){
        router.push('/login');
        return (<></>);
    }

    return(
        <>
            {children}
        </>
    );
};

export default WithAuth;