import React, { useState } from 'react';
import Footer               from '../components/Footer';
import GradientInput from '../components/GradientInput';
import GradientShiftButton  from '../components/GradientShiftButton';

import styles from '../styles/Login.module.scss';

const login = () => {

    const[state, setState] = useState({
        username: '',
        password: '',
    });

    const onChange = e=>{
        setState(x=>({...x, [e.target.name]: e.target.value}));
    }

    const onSubmit= e => {
        e.preventDefault();
        alert("SUBMITTED")
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <form 
                    className   ={styles.form} 
                    autocomplete='off'
                    onSubmit    ={onSubmit}
                >
                    <h1 className={styles.title}>
                        Log In
                    </h1>
                    <GradientInput 
                        name='username'
                        type='text'
                        value={state.username}
                        onChange={onChange}
                    />
                    <GradientInput 
                        name    ='password' 
                        type    ='password' 
                        value   ={state.password}
                        onChange={onChange}
                    />
                    <GradientShiftButton content='Sign In To Game Roulette'/>
                </form>
            </main>
            <Footer/>
        </div>
    );
};

export default login;
