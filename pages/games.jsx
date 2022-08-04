import Head from 'next/head';
import Link from 'next/link';

import React, { 
    useEffect, 
    useRef, 
    useState 
} from 'react';

import { 
    CircularProgressbar, 
    buildStyles
} from 'react-circular-progressbar';

import styles       from '../styles/GameCard.module.scss';
import 'react-circular-progressbar/dist/styles.css';

import getGames     from '../db/getGames';
import Footer       from '../components/Footer';
import Navbar       from '../components/Navbar';

const Banner = ()=>{
    return(
        <header>
            
        </header>
    );
};

const GameCard = ({game})=>{
    const total_rating = game.total_rating.toPrecision(4);
    return (
        <div className={styles.gameCardContainer}>
            <div className={styles.gameCard}>
                <div className={`${styles.gameCardFace} ${styles.gameCardFront}`}>
                    <img className={styles.gameImage} src={`https:${game.cover.url}`}/>
                </div>
                <div className={`${styles.gameCardFace} ${styles.gameCardBack}`}>                    
                    <h3 className={styles.gameTitle}>{game.name}</h3>
                    <CircularProgressbar
                        className  = {styles.gameProgressBar}
                        value      = {total_rating}
                        maxValue   = {100}
                        text       = {total_rating}
                        strokeWidth= {4}
                        styles={buildStyles({
                            textColor:      '#BF55EC',
                            pathColor:      '#BF55EC',
                            trailColor:     'gray',
                            strokeLinecap:  'butt'
                        })}
                    />
                    <Link href={`/game/${game.slug}`} >
                        <p className={styles.gameCardSeeMore}>
                            see more...
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const GameCardHolder = ({games:gamesProp})=>{

    const [{games, offset}, setState] = useState({
        games: gamesProp,
        offset: gamesProp.length
    });

    const ref = useRef();

    useEffect(()=>{
        
        let options = {
            root:           null,
            rootMargin:     '500px',
            threshold:      0.0
        };

        let observer = new IntersectionObserver((entries, observer)=>{
            entries.forEach(async entry=>{
                if(entry.isIntersecting){
                    const res = await fetch('/api/game?offset='+offset);
                    const arr = await res.json();
                    setState( { offset: offset + arr.length, games: [...games, ...arr] } );
                }
            });            
        }, options);

        observer.observe(ref.current);

        return ()=>observer.disconnect();
    },[]);

    return(
        <>
            <div className={styles.container}>
                {
                    games.map(game => <GameCard key={game.id} game={game}/>)
                }  
            </div>
            <span 
                ref={ref} 
                style={{
                    position:   'absolute', 
                    height:     '10px',
                    width:      '100%',
                    left:       0,
                    bottom:     0,
                    zIndex:     -1,
                }}
            ></span>
        </>
    );
};

const Games = ({data}) => {
    return (
        <div  className={styles.page}>
            <Head>
                <title> Browse Games </title>
            </Head>
            <Navbar/>
            <main className={styles.gameCardBk}>
                <h2 className={styles.title}>
                    explore games
                </h2>
                <GameCardHolder games={data}/>
            </main>
            <Footer/>
        </div>
    );
};

export default Games;

export async function getStaticProps () {
    try{
        const data = await getGames();

        return {
            props: { data },
        };
    } catch(err){
        return {
            props: { data: err.message } 
        };
    }
}