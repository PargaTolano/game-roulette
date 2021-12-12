import React, { useEffect, useState } from 'react';

import styles from '../styles/GradientInput.module.scss';

const GradientInput = ({name, value, ...rest}) => {
    //ltcc = label text container class
    const [ltcc, setLtcc] = useState(styles.labelTextContainer);
    useEffect(()=>{
            setLtcc(/\S/.test(value) ? styles.labelTextContainerNotEmpty : styles.labelTextContainer );
    }, [value]);

    return (
        <label className={styles.label}>
            <div className={ltcc}>
                <p className={styles.labelText}>
                    {name}
                </p>
            </div>
            <input
                className={styles.input}
                name={name}
                {...rest}
            />
        </label>
    );
};

export default GradientInput;
