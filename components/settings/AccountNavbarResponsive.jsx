import Link from 'next/link';
import React from 'react';

import ActiveLink from './ActiveLink';

import useAuth from '../../hooks/auth';

import styles from '../../styles/AccountNavbarResponsive.module.scss';

const AccountNavbarResponsive=()=>{

    const {logout}=useAuth();

    return (
        <nav className={styles.container}>
            <ul className={styles.links}>
                <ActiveLink href='/account/profile'>Profile</ActiveLink>
                <ActiveLink href='/account/security'>Security</ActiveLink>
                <ActiveLink href='/'>Exit</ActiveLink>
                <li 
                    className={styles.logout} 
                    onClick={logout}
                >
                    Logout
                </li>
            </ul>
        </nav>
    );
};

export default AccountNavbarResponsive;
