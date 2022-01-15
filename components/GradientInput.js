import React, { useEffect, useState } from 'react';

import styles from '../styles/GradientInput.module.scss';

const GradientInput = ({label, value, labelFontSize = '16px', inputFontSize = '12px', ...rest}) => {
    //ltcc = label text container class
    const [ltcc, setLtcc] = useState(styles.labelTextContainer);
    useEffect(()=>{
            setLtcc(/\S/.test(value) ? styles.labelTextContainerNotEmpty : styles.labelTextContainer );
    }, [value]);

    return (
        <label className={styles.label}>
            <div className={ltcc}>
                <p 
                    className={styles.labelText}
                    style={{fontSize: labelFontSize}}
                >
                    {label}
                </p>
            </div>
            <p 
                className={styles.textPlaceholder}
                style={{fontSize: labelFontSize}}
            >
                {label}
            </p>
            <input
                className={styles.input}
                value={value}
                style={{
                    fontSize: inputFontSize
                }}
                {...rest}
            />
        </label>
    );
};

export default GradientInput;
