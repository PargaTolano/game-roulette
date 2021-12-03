import React from 'react';
import axios from 'axios';

import Link from 'next/link';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import mockData from '../mock/games.json'

import styles from '../styles/GameCard.module.css';
import 'react-circular-progressbar/dist/styles.css';

const GameCard = ({game})=>{
    game.rating = game.rating > game.rating_top ? game.rating_top : game.rating;
    return (
        <div className={styles.gameCardContainer}>
            <div className={styles.gameCard}>
                <div className={`${styles.gameCardFace} ${styles.gameCardFront}`}>
                    <img className={styles.gameImage} src={game.background_image}/>
                    <h3 className={styles.gameTitle}>{game.name}</h3>
                </div>
                <div 
                    className={`${styles.gameCardFace} ${styles.gameCardBack}`}
                    style={{
                        color: 'white',
                        backgroundColor: '#'+game.dominant_color
                    }}    
                >
                    <CircularProgressbar
                        className={styles.gameProgressBar}
                        value   ={game.rating}
                        maxValue={game.rating_top}
                        text    ={`${game.rating}/${game.rating_top}`}
                        strokeWidth={4}
                        styles={buildStyles({
                            textColor:      '#BF55EC',
                            pathColor:      '#BF55EC',
                            trailColor:     'gray',
                            strokeLinecap:  'butt'
                        })}
                    />
                    <Link href={`/game/${game.id}`} className={styles.gameCardSeeMore}>
                        SEE MORE...
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Game = ({data}) => {
    return (
        <main className={styles.gameCardBk}>
            <h2 className={styles.title}>
                Random Games
            </h2>
            <div className={styles.container}>
                {
                    data.results.map((el, i) =>
                        <GameCard key={el.id} game={el}/>
                    )
                }  
            </div>
            
        </main>
    )
};

export default Game;

export async function getStaticProps (context) {
    try{

        let data = mockData;
        if( process.env.NODE_ENV === 'production' ){
            const url = new URL('https://rawg-video-games-database.p.rapidapi.com/games');
            url.searchParams.append('key', '847717b6d5eb4fe1a333cc055e5982cc');
            
            const options = {
                method: 'GET',
                url: url.href,
                headers: {
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
                'x-rapidapi-key': '6dbb228c76mshcbdc9145a9d4c47p14899cjsn05a3ea0860bf'
                }
            };
            
            const res = await axios.request(options);

            data = res.data;
        }

        return {
          props: { data }, // will be passed to the page component as props
        };
    } catch(err){
        return {
            props: { data: err.message } 
        };
    }
  }