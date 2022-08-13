import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../../hooks/auth';

import AccountNavbar from '../settings/AccountNavbar';
import EditableInput from '../form/EditableInput';

import { MdEdit } from 'react-icons/md';

import styles from '../../styles/SettingsSecurity.module.scss';
import styles2 from '../../styles/SettingsProfile.module.scss';
import { withProtected } from '../../hooks/routes';
import { AuthService } from '../../service/AuthService';
import { StorageService } from '../../service/StorageService';

const defaultImage='/profile-pic.svg';

const Profile = ({auth}) => {
    
    const {user} = auth;

    const [img, setImg] = useState(user?.photoURL || defaultImage);
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const ref = useRef();

    const onClickEdit=()=>void ref.current?.click();

    const onChangeImage=async e=>{
        const [file]=e.target.files;

        try{
            const url = await StorageService.storeFile(file, setUploadPercentage);
            await AuthService.changephotoURL(url);
            setImg(url);
        }
        catch(e){
            alert(e);
        }
    };

    const onImageLoaded=()=>setUploadPercentage(0);

    const onChangeDisplayName=name=>AuthService.changeDisplayName(name);
    const onChangeEmail=email=>AuthService.changeEmail(email);

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
                        onLoad={onImageLoaded}
                        onError={()=>setImg(defaultImage)}
                        onAbort={()=>setImg(defaultImage)}
                    />
                    <div 
                        className={styles2.imgLoading}
                        style={{
                            transform: `scale(${uploadPercentage}%)`
                        }}
                    ></div>
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
                        initialValue={user?.displayName}
                        onConfirm={onChangeDisplayName}
                    />
                    <EditableInput 
                        name='Email' 
                        initialValue={user?.email}
                        onConfirm={onChangeEmail}
                    />
                </section>
            </section>
        </div>
    )
}

export default withProtected(Profile);
