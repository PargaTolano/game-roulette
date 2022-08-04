import React from 'react';

import styles from '../styles/Lists.module.scss';

const ListCard = ({list}) => {
    return (
        <article className={styles.card}>
            <h3 className={styles.title}>{list.title}</h3>
            <p className={styles.description}>{list.description}</p>
        </article>
    );
};

export default ListCard;
