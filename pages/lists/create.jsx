import React, { useState } from 'react';

import Navbar from '../../components/Navbar';
import GradientInput from '../../components/GradientInput';

import {
    MdSearch
} from 'react-icons/md';

import styles from '../../styles/CreateList.module.scss';
import SearchBar from '../../components/SearchBar';

const CreateList = () => {

    const [state, setState] = useState({
        name:           '',
        description:    '',
        ids:            [],
        search:         '',
    });

    const onChange = (e)=>{
        setState(x=>({...x, [e.target.name]: e.target.state}));
    };

    const onSubmit = (e)=>{
        e.preventDefault();
    };

    return (
        <div className={styles.page}>
            <Navbar/>
            <main className={styles.main}>
                <h1 className={styles.h1}>
                    Create New List
                </h1>
                <form 
                    className={styles.form}
                    onSubmit={onSubmit}
                >
                    <GradientInput 
                        name='name'
                        type='text'
                        value={state.name}
                        onChange={onChange} 
                    />
                    <label>
                        description
                        <textarea 
                            className={styles.description}
                            name='description'
                            value={state.description}
                            onChange={onChange}
                        >
                        </textarea>
                    </label>
                </form>
            <SearchBar 
                placeholder='Search...'
                name='search'
                value={state.search}
                onChange={onChange}
            />

            </main>
        </div>
    )
}

export default CreateList;
