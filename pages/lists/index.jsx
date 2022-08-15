import Head                     from 'next/head';
import Link                     from 'next/link';
import React, { 
    useEffect, 
    useState 
} from 'react';
import useAuth                  from '../../hooks/auth';


import Navbar                   from '../../components/Navbar';
import CreateList               from '../../components/modal/CreateList';

import { 
    MdAdd
} from 'react-icons/md';


import { ListService } from '../../service/ListService';

import styles                   from '../../styles/Lists.module.scss';

const List = ({data})=>{
    return (
        <Link href={`/lists/${data.id}`}>
            <div 
                className={styles.list}
                style={{
                    // backgroundImage: `url(https:${data.games[0].cover.url})`,
                    backgroundSize:  'cover'
                }}
            >
                <div className={styles.listContent}>
                    <h3 className={styles.listName}>
                        {data.name}
                    </h3>
                </div>
            </div>
        </Link>
    );
};

const Lists = ({data}) => {

    const {user} = useAuth();
    const [modalOpen, setModalOpen]= useState(false);
    const [lists, setLists] = useState([]);

    useEffect(()=>{
        if( user )
            ListService.getMyLists()
                .then(x=>{
                    console.log(x);
                    return x
                })
                .then(setLists);

    },[user]);

    const closeModal=()=>setModalOpen(x=>!x);

    return(
        <>
            <Head>
                <title> My Lists </title>
            </Head>
            <Navbar/>
            <h1>Lists</h1>
            { 
                modalOpen && 
                <CreateList closeModal={closeModal}/>
            } 
            <div className={styles.cardContainer}>
                <div className={styles.addList}>
                    <div 
                        className={styles.listContent}
                        onClick={closeModal}                    
                    >
                        <MdAdd/>
                    </div>
                </div>
                {
                    lists.map( (v,i) =><List key={i} data={v}/>)
                }
            </div>
        </>
    );
};

export default Lists;
