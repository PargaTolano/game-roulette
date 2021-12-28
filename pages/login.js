import Link                             from 'next/link';
import { useRouter }                    from 'next/router';
import React, { useState }              from 'react';

import { signInWithEmailAndPassword }   from 'firebase/auth';
import { auth }                         from '../firebase/clientApp';

import Footer                           from '../components/Footer';
import GradientInput                    from '../components/GradientInput';
import GradientShiftButton              from '../components/GradientShiftButton';

import styles                           from '../styles/Login.module.scss';

const Login = () => {

    const router = useRouter();

    const[state, setState] = useState({
        username: '',
        password: '',
    });

    const [show, setShow] = useState(false);

    const onChange = e=>{
        setState(x=>({...x, [e.target.name]: e.target.value}));
    };

    const onClickShow = ()=> void setShow(x=>!x);

    const onSubmit= async e => {
        e.preventDefault();

        try{
            const res = await signInWithEmailAndPassword(auth, state.username, state.password);
            
            if(res.user){
                router.push('/lists');
            }
        } catch(e){
            alert(e)
        }
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <form 
                    className={styles.form} 
                    autoComplete='off'
                    onSubmit={onSubmit}
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
                        name='password' 
                        type={show ? 'text' : 'password'} 
                        value={state.password}
                        onChange={onChange}
                    />
                    <button
                        className={styles.password}
                        onClick={onClickShow}
                        type='button'
                    >  
                        {
                            show ? 'Hide Password' : 'Show Password'
                        }
                    </button>
                    <GradientShiftButton content='Sign In To Game Roulette'/>
                    <p className={styles.signup}>    
                        Don't have an account?&nbsp;
                        <Link href='/signup'>
                            <span className={styles.signupLink}>Sign up!</span>
                        </Link>
                    </p>
                </form>
            </main>
            <Footer/>
        </div>
    );
};

export default Login;
