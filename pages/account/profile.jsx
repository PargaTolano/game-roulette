import Head from 'next/head';
import dynamic from 'next/dynamic';
import React, { useRef, useState } from 'react';

import AccountNavbar from '../../components/settings/AccountNavbar';
import EditableInput from '../../components/form/EditableInput';

import { MdEdit } from 'react-icons/md';

import styles from '../../styles/SettingsSecurity.module.scss';
import styles2 from '../../styles/SettingsProfile.module.scss';
import { withProtected } from '../../hooks/routes';
import { AuthService } from '../../service/AuthService';
import { StorageService } from '../../service/StorageService';

const defaultImage='/profile-pic.svg';

const Profile = ({auth}) => {
    
    const {user} = auth;

    const [img, setImg] = useState(user.photoURL);
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const ref = useRef();

    const onClickEdit=()=>void ref.current?.click();

    const onChangeImage=async e=>{
        const [file]=e.target.files;

        try{
            // if(user.photoURL){
            //     await StorageService.removeFile(`/${user.uid}`)
            // }
            const url = await StorageService.storeFile(file, setUploadPercentage);
            await AuthService.changephotoURL(url);
            setImg(url);
        }
        catch(e){
            alert(e);
        }
    };

    const onImageLoaded=()=>setUploadPercentage(0);

    const onChangeDisplayName=name=>AuthService.changeDisplayname(name);
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

const DynamicProfile = dynamic(()=>withProtected(Profile), {ssr:false});

export default withProtected(Profile);
