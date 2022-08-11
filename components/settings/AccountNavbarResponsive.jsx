import Link from 'next/link';
import React from 'react';

import useAuth from '../../hooks/auth';

import styles from '../../styles/AccountNavbarResponsive.module.scss';

const AccountNavbarResponsive=()=>{

    const {logout}=useAuth();

    return (
        <nav className={styles.container}>
            <ul className={styles.links}>
                <li 
                    className={styles.link} 
                    draggable={false}
                >
                    <Link href='/account/profile'>Profile</Link>
                </li>
                <li 
                    className={styles.link} 
                    draggable={false}
                >
                    <Link href='/account/security'>Security</Link>
                </li>
                <li 
                    className={styles.link} 
                    draggable={false}
                >
                    <Link href='/'>Exit</Link>
                </li>
                <li 
                    className={styles.link} 
                    onClick={logout}
                >
                    Logout
                </li>
            </ul>
        </nav>
    );
};

export default AccountNavbarResponsive;
