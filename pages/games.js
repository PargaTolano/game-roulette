import React from 'react';
import axios from 'axios';

import Link from 'next/link';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import styles from '../styles/GameCard.module.css';
import 'react-circular-progressbar/dist/styles.css';
import getGames from '../db/getGames';
import Footer from '../components/Footer';

const GameCard = ({game})=>{
    const total_rating = game.total_rating.toPrecision(4);
    return (
        <div className={styles.gameCardContainer}>
            <div className={styles.gameCard}>
                <div className={`${styles.gameCardFace} ${styles.gameCardFront}`}>
                    <img className={styles.gameImage} src={`https:${game.cover.url}`}/>
                </div>
                <div 
                    className={`${styles.gameCardFace} ${styles.gameCardBack}`}
                    style={{
                        color: 'white',
                        backgroundColor: '#131313'
                    }}    
                >                    
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
                    <Link href={`/game/${game.id}`} >
                        <p className={styles.gameCardSeeMore}>
                            SEE MORE...
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Game = ({data}) => {
    return (
        <>
            <main className={styles.gameCardBk}>
                <h2 className={styles.title}>
                    Random Games
                </h2>
                <div className={styles.container}>
                    {
                        data.map((el, i) =>
                            <GameCard key={el.id} game={el}/>
                        )
                    }  
                </div>
                
            </main>
            <Footer/>
        </>
    )
};

export default Game;

export async function getStaticProps (context) {
    try{
        const data = await getGames();

        return {
          props: { data }, // will be passed to the page component as props
        };
    } catch(err){
        return {
            props: { data: err.message } 
        };
    }
  }