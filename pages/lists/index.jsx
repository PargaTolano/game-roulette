import Link                     from 'next/link';

import React, { useEffect, useState }                    from 'react';

import { 
    MdAdd
} from 'react-icons/md';

import Navbar                   from '../../components/Navbar';
import getLists from '../../db/getLists';
import { auth } from '../../firebase/clientApp';

import useAuth                  from '../../hooks/useAuth';

import styles from '../../styles/Lists.module.scss';

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
            <Navbar/>
            <h1>Lists</h1>
            <div className={styles.cardContainer}>
                <Link href='/lists/create'>
                    <div className={styles.addList}>
                        <MdAdd/>
                    </div>
                </Link>
                {
                    lists.map( (v,i) =>
                        <div 
                            className={styles.list} 
                            key={i}
                            style={{
                                backgroundImage: `url(https:${v.games[0].cover.url})`,
                                backgroundSize:  'cover'
                            }}
                        >
                            <h3 className={styles.listName}>
                                {v.name}
                            </h3>
                        </div> )
                }
            </div>
        </>
    );
};
export default Lists;
