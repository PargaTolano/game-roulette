import React, { useEffect, useState } from 'react';
import useToast from '../../hooks/toast';

import { MdClose } from 'react-icons/md';

import styles from '../../styles/Toast.module.scss';

const Toast = ({data, idx}) => {

    const [timer, setTimer] = useState(null);
    const { removeNotification } = useToast();
    const onClick=()=>{ 
        clearTimeout(timer);
        removeNotification(idx);
    };

    useEffect(()=>{
        setTimer(
            setTimeout(onClick, data.duration*1000)
        );
    },[]);

    return (
        <div className={styles[data.type]}>
            <p className={styles.toastContent}>{data.description}</p>
            <button className={styles.toastClose} onClick={onClick}><MdClose/></button>
            <div 
                className={styles.timebar}
                style={{
                    animationDuration: `${data.duration}s`
                }}
            ></div>
        </div>
    );
};

export default Toast;
