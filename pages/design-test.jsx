import React      from 'react';

import BannerLogo from '../components/BannerLogo';
import Navbar from '../components/Navbar';

import styles     from '../styles/Test.module.scss';

const DesignTest = () => {
  return (
    <div style={{
      minHeight:        '100vh',
      backgroundColor:  '#101010'
    }}>
      <Navbar/>
      <BannerLogo/>
      <div className={styles.overlappingContainer}>
        <div className={styles.ocElement}>
          <div className={styles.ocElementContent}></div>
        </div>
        <div className={styles.ocElement}>
          <div className={styles.ocElementContent}></div>
        </div>
        <div className={styles.ocElement}>
          <div className={styles.ocElementContent}></div>
        </div>
        <div className={styles.ocElement}>
          <div className={styles.ocElementContent}></div>
        </div>
      </div>
    </div>
  );
};

export default DesignTest;