import React,{useState,useEffect}   from 'react';

import styles   from '../styles/HeroFlipper.module.css';

const HeroFlipper = ({images=[]})=>{

    const [flip, setFlip]               = useState(false);
    const [buffer, setBuffer]           = useState(true);
    const [cur, setCur]                 = useState(0);

    useEffect(()=>{

        const interval = setInterval(()=>{
            setFlip(x=>!x);
            setTimeout(()=>{
                setCur(x=>(x+1)%images.length);
                setBuffer(x=>!x);
            },800);
        }, 3000);

        return ()=> clearInterval(interval);
    },[]);

    const frontBuffer = cur;
    const backBuffer  = ( cur + 1 ) % images.length;

    return (
        <>
            <img className={styles.backgroundImage} src={images[frontBuffer].url}/>
            <div className={styles.coverCard}
                style={{
                    transform: `rotateX(${(+flip)*180}deg)`,
                }}
            >
                <div className={styles.coverCardFace}
                    style={{
                        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https:${images[buffer ? frontBuffer : backBuffer].url})`,
                    }}
                >
                </div>
                <div className={`${styles.coverCardFace} ${styles.coverCardBackFace}`}
                    style={{
                        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https:${images[buffer ? backBuffer : frontBuffer].url})`,
                    }}
                >
                </div>
            </div>
        </>
    );
};

export default HeroFlipper;