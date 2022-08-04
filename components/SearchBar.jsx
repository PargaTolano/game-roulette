import React from 'react';

import {
    MdSearch
} from 'react-icons/md';

import styles from '../styles/SearchInput.module.scss';

const SearchBar = ({...rest}) => {
    return (
        <div className={styles.searchContainer}>
            <input 
                className={styles.searchInput}
                type     ='text'
                {...rest}
            />
            <MdSearch className={styles.searchIcon}/>
        </div>
    );
};

export default SearchBar;
