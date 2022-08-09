import Link from 'next/link';
import React, { useState } from 'react';

import styles from '../styles/AccountNavbarResponsive.module.scss';

const AccountNavbarResponsive=()=>{
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
            </ul>
        </nav>
    );
};

export default AccountNavbarResponsive;