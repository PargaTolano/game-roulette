import Head     from 'next/head';
import React, { useState } from 'react';
import AccountNavbar from '../../components/AccountNavbar';
import useAuth from '../../hooks/useAuth';

import changePassword from '../../auth/changePassword';

import styles from '../../styles/SettingsSecurity.module.scss';
import commonStyles from '../../styles/Common.module.scss';

const Account = () => {

    const user = useAuth();

    const [errorList, setErrorList]=useState([]);

    const [{pass, pass2}, setState]=useState({
        pass:'',
        pass2:''
    });

    const onChange = e =>{
            setErrorList([]);
            setState(x=>({...x,[e.target.name]:e.target.value}));
        };

    const onSubmit = (e)=>{
        e.preventDefault();
        
        const errors=[];

        if(pass.length==0){
            errors.push('password cannot be empty');
        }

        if(pass!==pass2){
            errors.push('password confirmation must match new password');
        }

        if(errors.length!==0){
            setErrorList(errors);
            return;
        }

        changePassword(pass)
            .then(()=>alert("Password Updated Successfuly"))
            .finally(()=>
                setState(x=>{
                    const t={};
                    Object.keys(x).forEach(key=>t[key]='');
                    return t;
                })
            );
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
                            <label htmlFor='pass' className={styles.textInputLabel}>
                                New Password
                            </label>
                            <input 
                                type='password'
                                name='pass'
                                value={pass}
                                className={styles.textInput}
                                onChange={onChange}
                            />
                        </div>
                        <div className={styles.textInputContainer}>
                            <label htmlFor='pass2' className={styles.textInputLabel}>
                                Confirm Password
                            </label>
                            <input 
                                type='password'
                                name='pass2'
                                value={pass2}
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
