import Head from 'next/head';
import React, { useRef, useState } from 'react';

import AccountNavbar from '../../components/settings/AccountNavbar';
import EditableInput from '../../components/form/EditableInput';

import { MdEdit } from 'react-icons/md';

import changeDisplayname from '../../auth/changeDisplayname';
import changeEmail from '../../auth/changeEmail';

import styles from '../../styles/SettingsSecurity.module.scss';
import styles2 from '../../styles/SettingsProfile.module.scss';
import { withProtected, withPublic } from '../../hooks/routes';

const Profile = ({auth}) => {
    
    const {user} = auth;
    console.log(user);

    const [img, setImg] = useState('/profile-pic.svg');
    const ref = useRef();

    const onClickEdit=()=>void ref.current?.click();

    const onChangeImage=e=>{
        const [file]=e.target.files;
        const url=URL.createObjectURL(file);
        setImg(url);
    };

    const onChangeDisplayName=name=>changeDisplayname(name);
    const onChangeEmail=email=>changeEmail(email);

    return (
        <div className={styles.container}>
            <Head>
                <title> User Settings </title>
            </Head>
            <AccountNavbar/>
            <section>
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
                    <EditableInput 
                        name='Display Name' 
                        initialValue={user?.displayName ?? 'Anonymous'}
                        onConfirm={onChangeDisplayName}
                    />
                    <EditableInput 
                        name='Email' 
                        initialValue={user?.email ?? 'Anonymous'}
                        onConfirm={onChangeEmail}
                    />
                </section>
            </section>
        </div>
    )
}

export default withProtected(Profile);
