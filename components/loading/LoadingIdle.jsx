import React from 'react';

import styles from '../../styles/LoadingIdle.module.scss';
const LoadingIdle = ({active=true}) => {
  return (
    <div 
        className={styles.container} 
        data-active={active}
    >
        <div className={styles.cube} style={{'--idx':0}}></div>
        <div className={styles.cube} style={{'--idx':1}}></div>
    </div>
  );
};

export default LoadingIdle;