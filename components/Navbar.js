import Link     from 'next/link';
import React    from 'react';

import {
    MdMenu,
    MdMenuOpen
} from 'react-icons/md';
import useNavbar from '../hooks/useNavbar';

import styles from '../styles/Navbar.module.scss';

const Navbar = () => {

    const {
        isShown,
        setIsShown, 
        user
    }   = useNavbar();

    const onClickMenuButton = ()=>{
        setIsShown(x=>!x);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.navContent}>
                <MdMenu className={styles.menuIcon} onClick={onClickMenuButton}/>
                <Link href='/'>
                    <h2 className={styles.h2}>Game Roulette</h2>
                </Link>
                <ul className={`${styles.links} ${isShown && styles.active}`}> 
                    <section className={styles.menuIconHeader}>
                        <MdMenuOpen className={styles.menuIconList} onClick={onClickMenuButton} >
                        </MdMenuOpen>
                        Game Roulette
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
                        user && 
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
                        user
                        ?
                            <img
                                className={styles.pfp}
                                src={ user.photoURL || '/profile-pic.svg'}
                            />
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
