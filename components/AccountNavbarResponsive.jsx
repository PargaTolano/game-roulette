import React, { useState } from 'react';
import {
    MdMenu,
    MdOutlineClose
} from 'react-icons/md';

import styles from '../styles/AccountNavbar.module.scss';

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