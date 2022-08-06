import Head     from 'next/head';
import React, { useState }    from 'react';
import AccountNavbar from '../../components/AccountNavbar';
import changeEmail from '../../auth/changeEmail';
// import { auth } from '../firebase/clientApp';

import styles from '../../styles/SettingsSecurity.module.scss';
import commonStyles from '../../styles/Common.module.scss';
import { emailregex } from '../../constants/regex';

const Account = () => {

    const [errorList, setErrorList]=useState([]);

    const [{email, email2}, setState]=useState({
        email:'',
        email2:''
    });

    const onChange = e =>{
            setErrorList([]);
            setState(x=>({...x,[e.target.name]:e.target.value}));
        };

    const onSubmit = (e)=>{
        e.preventDefault();
        
        const errors=[];

        if(email.length==0){
            errors.push('email cannot be empty');
        }

        if(String(email).toLowerCase().match(emailregex)===null){
            errors.push('enter a proper email format');
        }

        if(email!==email2){
            errors.push('email confirmation must match new email');
        }

        if(errors.length!==0){
            setErrorList(errors);
            return;
        }

        // changeEmail(email);
        setState(x=>{
            const t={};
            Object.keys(x).forEach(key=>t[key]='');
            return t;
        });
    };

    return (
        <div className={styles.container}>
            <Head>
                <title> User Settings </title>
            </Head>
            <AccountNavbar/>
            <section>
                <h1 className={styles.title}>Security</h1>
                <form
                        className={styles.unstyledForm}
                        onSubmit={onSubmit} 
                >
                    <section className={styles.passwordSection}>
                        <h3 className={styles.sectionTitle}>Change Email</h3>
                        <div className={styles.textInputContainer}>
                            <label htmlFor='email' className={styles.textInputLabel}>
                                New Email
                            </label>
                            <input 
                                type='email'
                                name='email'
                                value={email}
                                className={styles.textInput}
                                onChange={onChange}
                            />
                        </div>
                        <div className={styles.textInputContainer}>
                            <label htmlFor='email2' className={styles.textInputLabel}>
                                Confirm Email
                            </label>
                            <input 
                                type='email'
                                name='email2'
                                value={email2}
                                className={styles.textInput}
                                onChange={onChange}
                            />
                        </div>
                        {
                            errorList.length===0?
                                <button className={styles.acceptButton}>Accept Changes</button>
                            :
                            <ul className={commonStyles.formErrorList}>
                                {
                                    errorList.map(x=>
                                        <li key={x} className={commonStyles.formError}>{x}</li>
                                    )
                                }
                            </ul>
                        }
                    </section>
                </form>
            </section>
        </div>
    )
}

export default Account;
