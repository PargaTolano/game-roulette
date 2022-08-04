import Link from 'next/link';
import React, { useState } from 'react';
import {
    MdMenu,
    MdOutlineClose
} from 'react-icons/md';

import styles from '../styles/AccountNavbarMobile.module.scss';

const AccountNavbarMobile=()=>{
    const [open, setOpen]=useState(false);
    const onClickMenuIcon= ()=>void setOpen(x=>!x);
    const IconComponent= open ? MdOutlineClose: MdMenu;
    
    return (
        <div className={styles.container}>
            <div 
                className={styles.navbarLimiter} 
                open={open}
            >
                <div className={styles.menuBackground}></div>
                <div className={styles.menuContainer}>
                    <h2 className={styles.title}>Settings</h2>
                    <ul className={styles.linkList}>
                        <li className={styles.menuLink}>
                            <Link href='/account/profile'>Profile</Link>
                        </li>
                        <li className={styles.menuLink}>
                            <Link href='/account/security'>Security</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.iconContainer}>
                <IconComponent
                    className={styles.icon} 
                    onClick={onClickMenuIcon}
                />
            </div>
        </div>
    );
};

export default AccountNavbarMobile;