import Head     from 'next/head';
import React    from 'react';
import AccountNavbar from '../../components/AccountNavbar';
// import { auth } from '../firebase/clientApp';

import styles from '../../styles/SettingsSecurity.module.scss';

const Account = () => {

    const onSubmit = (e)=>{
        e.preventDefault();
        const fd = new FormData(e.target);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title> User Settings </title>
            </Head>
            <AccountNavbar/>
            <h1 className={styles.title}>Security</h1>
            <section className={styles.passwordSection}>
                <h3 className={styles.sectionTitle}>Password</h3>
                <div className={styles.textInputContainer}>
                    <label htmlFor="pass" className={styles.textInputLabel}>
                        Password
                    </label>
                    <input 
                        type="text" 
                        name="pass" 
                        className={styles.textInput}
                    />
                </div>
                <div className={styles.textInputContainer}>
                    <label htmlFor="pass2" className={styles.textInputLabel}>
                        Confirm Password
                    </label>
                    <input 
                        type="text" 
                        name="pass2" 
                        className={styles.textInput}
                    />
                </div>
                <button className={styles.acceptButton}>Accept Changes</button>
            </section>
        </div>
    )
}

export default Account;
