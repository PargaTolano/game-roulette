import React, { useState } from 'react';
import Footer               from '../components/Footer';
import GradientInput from '../components/GradientInput';
import GradientShiftButton  from '../components/GradientShiftButton';

import styles from '../styles/Login.module.scss';

const Signup = () => {

    const[state, setState] = useState({
        username: '',
        password: '',
    });

    const onChange = e=>{
        setState(x=>({...x, [e.target.name]: e.target.value}));
    }

    const onSubmit= e => {
        e.preventDefault();
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <form 
                    className   ={styles.form} 
                    autoComplete='off'
                    onSubmit    ={onSubmit}
                >
                    <h1 className={styles.title}>
                        Sign up
                    </h1>
                    <GradientInput 
                        name='email'
                        type='email'
                        value={state.username}
                        onChange={onChange}
                    />
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
                    <GradientShiftButton content='Join To Game Roulette!'/>
                </form>
            </main>
            <Footer/>
        </div>
    );
};

export default Signup;
