import Link from 'next/link';
import React, { useEffect, useState } from 'react'; 
import getGame from '../../db/getGame';

import styles from '../../styles/Game.module.css';

const Hero = ({screenshots=[], cover})=>{

    const [flip, setFlip]               = useState(false);
    const [buffer, setBuffer]           = useState(true);
    const [cur, setCur]                 = useState(0);

    useEffect(()=>{

        const interval = setInterval(()=>{
            setFlip(x=>!x);
            setTimeout(()=>{
                setCur(x=>(x+1)%screenshots.length);
                setBuffer(x=>!x);
            },800);
        }, 3000);

        return ()=> clearInterval(interval);
    },[]);

    const frontBuffer = cur;
    const backBuffer  = ( cur + 1 ) % screenshots.length;

    return (
        <header className={styles.cover}>
            <img className={styles.backgroundImage} src={screenshots[frontBuffer].url}/>
            <div className={styles.coverCard}
                style={{
                    transform: `rotateX(${(+flip)*180}deg)`,
                }}
            >
                <div className={styles.coverCardFace}
                    style={{
                        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https:${screenshots[buffer ? frontBuffer : backBuffer].url})`,
                    }}
                >
                </div>
                <div className={`${styles.coverCardFace} ${styles.coverCardBackFace}`}
                    style={{
                        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https:${screenshots[buffer ? backBuffer : frontBuffer].url})`,
                    }}
                >
                </div>
            </div>
        </header>
    );
};

const PlatformButton = ({platform})=>{
    return(
        <Link href={platform.url}>
            <button className={styles.platformButton}>
                {platform.name}
            </button>
        </Link>
    );
};

const GameDetail = ({data}) => {
    return (
        <div className={styles.page}>
            <Hero screenshots={data.screenshots} cover={data.cover}/>
            <main className={styles.main}>
                <div className={styles.titleArtContainer}>
                    <div 
                        className={styles.gameBoxArt}
                        style={{
                            backgroundImage: `url(https:${data.cover.url})`,
                        }}    
                    >
                    </div>
                    <div className={styles.titleAndButtonContainer}>
                        <h1 className={styles.title}>
                            {data.name}
                        </h1>
                        <div className={styles.buttonContainer}>
                            {data.platforms.map(platform=><PlatformButton key={platform.id} platform={platform}/>)}
                        </div>
                        <p className={styles.summary}>
                            {data.summary}
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default GameDetail;

export async function getServerSideProps(context){
    try {
        const { params } = context;

        const data = await getGame(params.id);

        return {
            props:{ data: data[0] }
        };

    } catch (error) {
        return {
            props:{ data: error.message }
        }
    }
}