import Link                     from 'next/link';

import React                    from 'react';

import { 
    MdAdd
} from 'react-icons/md';

import Navbar                   from '../../components/Navbar';

import useAuth                  from '../../hooks/useAuth';

import styles from '../../styles/Lists.module.scss';

const Lists = ({data}) => {

    const user = useAuth();

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
            </div>
        </>
    );
}; 

export default Lists;
