import React,{useState} from 'react';

import {
    MdEdit,
    MdCheck,
    MdClose,
} from 'react-icons/md'

import styles from '../../styles/EditableInput.module.scss';

const defaultPromise = 
    new Promise((res)=>{
        res();
    });

const EditableInput = ({name='', type='text', initialValue='', onConfirm, ...rest}) => {

    const [originalValue, setOriginalValue] = useState(initialValue);
    const [enabled, setEnabled] = useState(false);
    const [value, setValue] = useState(initialValue);

    const onChange= e=>void setValue(e.target.value);

    const onClickToggleEnable=()=>{
        if(enabled)
            setValue(originalValue);
        setEnabled(x=>!x);
    };

    const onClickConfirm=()=>{
        onConfirm(value).then(()=>{
            setOriginalValue(value);
            setEnabled(false);
        });
    };

    const Icon=enabled?MdClose:MdEdit;
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={name}>{name}</label>
            <input 
                className={styles.input}
                type={type} 
                name={name} 
                value={value} 
                onChange={onChange}
                disabled={!enabled}
            />
            <div className={styles.buttonContainer}>
                {
                    enabled && 
                    <button 
                        className={styles.button}
                        onClick={onClickConfirm}    
                    >
                        <MdCheck className={styles.icon}/>
                    </button>
                }
                <button 
                    className={styles.button} 
                    onClick={onClickToggleEnable}
                >
                    <Icon className={styles.icon}/>
                </button>
            </div>
        </div>
    );
};

export default EditableInput;