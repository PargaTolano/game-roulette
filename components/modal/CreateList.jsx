import React, { useState } from 'react';

import styles from '../../styles/CreateList.module.scss';

const CreateList = ({closeModal}) => {

    const [name, setName] = useState('');

    const onSubmit=()=>{
        
    };

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h2 className={styles.title} >create new list</h2>
                <input 
                    type='text' 
                    name='name'
                    placeholder='name'
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    className={styles.input} 
                />
                <button className={styles.button}>Button</button>
            </form>
        </div>
    );
};

export default CreateList;