import { getAuth } from 'firebase/auth';
import React    from 'react';
import WithAuth from '../../components/WithAuth';
import getLists from '../../db/getLists';
import { auth } from '../../firebase/clientApp';


const Lists = () => {
    return (
        <div>
            
        </div>
    );
};

export default Lists;

export const getServerSideProps = async (context)=>{
    try{
        const user = auth.currentUser;

        if( !user ){
            return {
                redirect:{
                    permanent: false,
                    destination: '/login'
                }
            }
        }

        const lists = await getLists(user.uid);

        return {
            props:{
                data: lists
            }
        };
    }catch(e){
        return {
            props: {
                data: e.message
            }
        };
    }
};