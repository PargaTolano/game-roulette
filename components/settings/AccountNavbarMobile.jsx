import React, { useState } from 'react';
import useAuth from '../../hooks/auth';

import ActiveLink from './ActiveLink';

import {
    MdMenu,
    MdOutlineClose
} from 'react-icons/md';

import styles from '../../styles/AccountNavbarMobile.module.scss';

const AccountNavbarMobile=()=>{
    const {logout}=useAuth();

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
                        <ActiveLink href='/account/profile'>Profile</ActiveLink>
                        <ActiveLink href='/account/security'>Security</ActiveLink>
                        <ActiveLink href='/'>Exit</ActiveLink>
                    </ul>
                    <button 
                        className={styles.logout}
                        onClick={logout}
                    >
                        Logout
                    </button>
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