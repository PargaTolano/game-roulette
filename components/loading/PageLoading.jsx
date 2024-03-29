import React from 'react';

import styles from '../../styles/PageLoading.module.scss';

const PageLoading = ({text}) => {
  return (
    <div className={styles.container}>
        <div className={styles.centered}>
            <img
                className={styles.logo} 
                src='/logo-gradient.svg' 
                alt='roulette-logo'
            />
            <h4 className={styles.text}>{text}</h4>
        </div>
    </div>
  );
};

export default PageLoading;