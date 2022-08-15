import React, { useState } from 'react';

import LoadingModal from '../loading/LoadingModal';
import { ListService } from '../../service/ListService';

import styles from '../../styles/CreateList.module.scss';
import useToast, { toastTypes } from '../../hooks/toast';

import { v4 as uuid } from 'uuid';

const CreateList = ({closeModal}) => {

    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const {addNotification} = useToast();

    const close=()=> closeModal?.call();

    const onSubmit=async e=>{
        e.preventDefault();

        setLoading(true);
        const {error} = await ListService.createList(name);
        setLoading(false);

        if(error){
            addNotification({
                id: uuid(),
                description: error,
                type: toastTypes.error,
                duration: 4
            });
            return;
        }

        addNotification({
            id: uuid(),
            description: `created list ${name} succesfully!`,
            type: toastTypes.success,
            duration: 4
        });
        close();
    };

    return (
        <div className={styles.container}>
            {
                loading===false ?
                    <form 
                        className={styles.form} 
                        onSubmit={onSubmit} 
                    >
                        <h2 className={styles.title} >name your gamelist</h2>
                        <input 
                            type='text' 
                            name='name'
                            placeholder='gamelist'
                            value={name}
                            onChange={e=>setName(e.target.value)}
                            className={styles.input} 
                        />
                        <div className={styles.buttonContainer}>
                            <button 
                                className={styles.button} 
                                type='button'
                                onClick={close}    
                            >
                                cancel
                            </button>
                            <button 
                                className={styles.button} 
                                create='true'
                            >
                                create
                            </button>
                        </div>
                    </form>
                :
                    <LoadingModal text='creating gamelist'/> 
            }
        </div>
    );
};

export default CreateList;