import { useState } from 'react';
import { useRouter } from 'next/router';
import useAuth from './auth';

import PageLoading from '../components/loading/PageLoading';

export const withPublic = (Component)=>{   
    return function WithPublic(props){

        const auth= useAuth();
        const user=auth;
        const router = useRouter();

        const [timer, setTimer] = useState(null);

        function redirection(){
            router.replace('/');
        }

        useState(()=>{
            if(user===null && timer===null){
                setTimer(setTimeout(redirection, 500));
            } else {
                if(timer!==null)
                    clearTimeout(timer);
                setTimer(null);
            }
        }, [user]);

        if(auth.user){
            return (
                <PageLoading/>
            );
        }

        return (
            <Component auth={auth} {...props}/>
        );
    };
};

export const withProtected = (Component)=>{   
    return function WithProtected(props){
        const auth= useAuth();
        const user = {auth};
        const router = useRouter();

        const [timer, setTimer] = useState(null);

        function redirection(){
            router.replace('/login');
        }

        useState(()=>{
            if(user===null && timer===null){
                setTimer(setTimeout( redirection, 500));
            } else {
                if(timer!==null)
                    clearTimeout(timer);
                setTimer(null);
            }
        }, [user]);


        if(!auth.user){
            return (
                <PageLoading/>
            );
        }

        return (
            <Component auth={auth} {...props}/>
        );
    };
};
