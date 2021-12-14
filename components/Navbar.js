import Link     from 'next/link';
import React, { useEffect, useState }    from 'react';

import {
    MdMenu,
    MdMenuOpen
} from 'react-icons/md';

import styles from '../styles/Navbar.module.scss';

const Navbar = () => {

    const[isShown, setIsShown] = useState(false);

    useEffect(()=>{
        const cb = ()=>{
            if( window.innerWidth > 768 ){
                setIsShown(false);
            }
        };

        window.addEventListener('resize',cb);
        return ()=> window.removeEventListener('resize', cb);
    },[]);

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
                    <Link href="#">
                        <li className={styles.link}>
                            My Lists
                        </li>
                    </Link>
                    <Link href="#">
                        <li className={styles.link}>
                            About
                        </li>
                    </Link>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar;
