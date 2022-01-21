import React from 'react';

import styles from '../styles/LoadingScreen.module.scss';

const Loading = () => {
    return (
        <div className={styles.screen}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.cube}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
