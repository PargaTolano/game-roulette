import React from 'react';
import useToast from '../../hooks/toast';

import styles from '../../styles/Toast.module.scss';
import Toast from './Toast';

const ToastContainer = () => {
    const {notifs} = useToast();
    return (
        <div className={styles.toastContainer}>
            { 
                notifs.map((v,i)=>
                    <Toast 
                        key={v.id}
                        data={v} 
                        idx={i}
                    />
                ) 
            }
        </div>
    );
};

export default ToastContainer;