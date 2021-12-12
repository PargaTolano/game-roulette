import React from 'react';

import styles from '../styles/GradientShiftButton.module.scss';

const GradientShiftButton = ({content, ...rest}) => {
    return (
        <button 
            className={styles.button}
            {...rest}
        >
            {content}
            <p className={styles.default}>
                {content}
            </p>
            <p className={styles.hovered}>
                {content}
            </p>
        </button>
    );
};

export default GradientShiftButton;
