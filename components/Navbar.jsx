import Link     from 'next/link';
import React, { useEffect, useState }    from 'react';

import {
    MdMenu,
    MdMenuOpen
} from 'react-icons/md';
import useAuth from '../hooks/auth';
import useNavbar from '../hooks/useNavbar';

import styles from '../styles/Navbar.module.scss';

const defaultImage='/profile-pic.svg';

const Navbar = () => {

    const {
        isShown,
        setIsShown
    }=useNavbar();

    const auth = useAuth();

    const {user} = auth;

    const [img, setImg]= useState(defaultImage);

    useEffect(()=>{
        setImg(user?.photoURL ?? defaultImage);
        console.log('yser data',user);
    },[auth]);


    const onClickMenuButton= ()=> void setIsShown(x=>!x);

    return (
        <nav className={styles.nav}>
            <div className={styles.navContent}>
                <MdMenu className={styles.menuIcon} onClick={onClickMenuButton}/>
                <Link href='/'>
                    <img className={styles.logo} src="/logo-gradient.svg" alt="logo"/>
                </Link>
                <ul className={`${styles.links} ${isShown && styles.active}`}> 
                    <section className={styles.menuIconHeader}>
                        <MdMenuOpen className={styles.menuIconList} onClick={onClickMenuButton} >
                        </MdMenuOpen>
                        <p>Game Roulette</p>
                    </section>
                    <Link href="/">
                        <li className={styles.link}>
                            Home
                        </li>
                    </Link>
                    <Link href="/games">
                        <li className={styles.link}>
                            Explore
                        </li>
                    </Link>
                    {
                        user!==null && 
                        <Link href="/lists">
                            <li className={styles.link}>
                                My Lists
                            </li>
                        </Link>
                    }
                    <Link href="/about">
                        <li className={styles.link}>
                            About
                        </li>
                    </Link>
                </ul>
                <div className={styles.loginContainer}>
                    {
                        user!==null
                        ?
                            <Link href='/account/profile'>
                                <img
                                    className={styles.pfp}
                                    src={img}
                                    onError={()=>setImg(defaultImage)}
                                />
                            </Link>
                        :
                            <Link href='/login'>
                                <button className={styles.loginButton}>
                                    <p>Log In</p>
                                </button>
                            </Link>                    
                    }
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;
