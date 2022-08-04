import React from 'react';
import styles from '../styles/BannerLogo.module.scss';

const BannerLogo = () => {
  return (
    <header className={styles.banner}>
        <img src='/logo-white.svg'className={styles.logo} />
    </header>
  );
};

export default BannerLogo;