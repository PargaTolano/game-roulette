import Head     from 'next/head';
import React, { useRef, useState }    from 'react';
import AccountNavbar from '../../components/AccountNavbar';

import {
    MdEdit
} from 'react-icons/md'
// import { auth } from '../firebase/clientApp';

import styles from '../../styles/SettingsSecurity.module.scss';
import styles2 from '../../styles/SettingsProfile.module.scss';
import Link from 'next/link';

const Account = () => {

    const [img, setImg] = useState('/profile-pic.svg');
    const ref = useRef();

    const onSubmit = (e)=>{
        e.preventDefault();
        const fd = new FormData(e.target);
    };

    const onClickEdit=()=>void ref.current?.click();

    const onChangeImage=e=>{
        const [file]=e.target.files;
        const url=URL.createObjectURL(file);
        setImg(url);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title> User Settings </title>
            </Head>
            <AccountNavbar/>
            <h1 className={styles.title}>Profile</h1>
            <div className={styles2.profileImageContainer}>
                <input
                    className={styles2.fileInput} 
                    type='file' 
                    name='imagefile'
                    ref={ref}
                    onChange={onChangeImage}
                />
                <img 
                    src={img} 
                    className={styles2.profileImage} 
                />
                <button 
                    className={styles2.editButton} 
                    onClick={onClickEdit}
                >
                    <MdEdit/>
                </button>
            </div>
            <section className={styles.passwordSection}>
                <div className={styles.textInputContainer}>
                    <label htmlFor="username" className={styles.textInputLabel}>
                        username
                    </label>
                    <input 
                        type="text" 
                        name="username" 
                        className={styles.textInput}
                        value='parga.tolano'
                        disabled
                    />
                </div>
                <div className={styles.textInputContainer}>
                    <label htmlFor="email" className={styles.textInputLabel}>
                        Email
                    </label>
                    <input 
                        type="text" 
                        name="email" 
                        className={styles.textInput}
                        value='parga.jose@outlook.com'
                        disabled
                    />
                </div>
            </section>
        </div>
    )
}

export default Account;
