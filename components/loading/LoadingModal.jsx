import React from 'react';

import styles from '../../styles/LoadingButton.module.scss';

const LoadingButton = () => {
  return (
    <div className={styles.container}>
        <div className={styles.centered}>
            <img
                className={styles.logo} 
                src='/logo-gradient.svg' 
                alt='roulette-logo'
            />
            <h4 className={styles.text}>Loading</h4>
        </div>
    </div>
  )
};

export default LoadingButton;