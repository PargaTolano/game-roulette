import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
 
import styles from '../../styles/AccountNavbarMobile.module.scss';

const ActiveLink = ({ href, children, ...rest}) => {
    const router=useRouter();
    return (
        <li className={styles.menuLink} active={(router.asPath===href).toString()}>
            <Link href={href} {...rest}>{children}</Link>
        </li>
    );
};

export default ActiveLink;
