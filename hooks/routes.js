import { useState } from 'react';
import { useRouter } from 'next/router';
import useAuth from './auth';

import PageLoading from '../components/loading/PageLoading';

let timer=null;
export const withPublic = (Component)=>{   
    return function WithPublic(props){

        const auth= useAuth();
        const {user}=auth;
        const router = useRouter();

        function redirection(){
            timer=null;
            router.replace('/');
        }

        if(user!==null){
            if(!timer)
                timer=setTimeout(redirection, 1000);
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
        const {user} = auth;
        const router = useRouter();

        function redirection(){
            timer=null;
            router.replace('/login');
        }

        if(user===null){
            if(!timer)
                timer=setTimeout(redirection, 1000);
            return (
                <PageLoading/>
            );
        }

        if(timer)
            clearTimeout(timer);

        return (
            <Component auth={auth} {...props}/>
        );
    };
};
