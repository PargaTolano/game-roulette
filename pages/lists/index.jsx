import React                    from 'react';
import useAuth                  from '../../hooks/useAuth';

import Navbar                   from '../../components/Navbar';

//TODO authentication in server side
const Lists = ({data}) => {

    const user = useAuth();

    return(
        <>
            <Navbar/>
            <h1>Lists</h1>
        </>
    );
}; 

export default Lists;

// export async function getStaticProps() {
//     try{
//         const lists = await getLists(user.uid);

//         return {
//             props:{
//                 data: lists
//             }
//         };
//     }catch(e){
//         return {
//             props: {
//                 data: e.message
//             }
//         };
//     }
// };