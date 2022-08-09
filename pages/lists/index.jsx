import Head                     from 'next/head';
import Link                     from 'next/link';

import React, { 
    useEffect, 
    useState 
} from 'react';

import { 
    MdAdd
} from 'react-icons/md';

import Navbar                   from '../../components/Navbar';

import useAuth                  from '../../hooks/useAuth';

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

    const user = useAuth();

    const [lists, setLists] = useState([]);

    useEffect(()=>{
        if( user )
            fetch(`/api/lists?id=${user.uid}`)
                .then(res=>res.json())
                .then(setLists);
    },[user]);

    return(
        <>
            <Head>
                <title> My Lists </title>
            </Head>
            <Navbar/>
            <h1>Lists</h1>
            <div className={styles.cardContainer}>
                <Link href='/lists/create'>
                    <div className={styles.addList}>
                        <div className={styles.listContent}>
                            <MdAdd/>
                        </div>
                    </div>
                </Link>
                {
                    lists.map( (v,i) =><List key={i} data={v}/>)
                }
            </div>
        </>
    );
};
export default Lists;
