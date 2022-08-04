import Head from 'next/head';
import Link from 'next/link';

import HeroFlipper  from '../components/HeroFlipper';
import Footer       from '../components/Footer';

import Navbar from '../components/Navbar';
import Loading from '../components/Loading';

import getHomePageCovers from '../db/getHomePageCovers';

import styles from '../styles/Home.module.scss';
import { useEffect, useState } from 'react';

function Slice({src, rotation}){
  return (
    // <svg width="602" height="719" viewBox="0 0 602 719" fill="none" xmlns="http://www.w3.org/2000/svg">
    //   <path d="M601.316 364.575C600.741 362.783 600.43 360.874 600.43 358.892C600.43 357.032 600.703 355.237 601.212 353.543L114.601 0C42.4439 101.23 0 225.104 0 358.892C0 492.798 42.5196 616.774 114.794 718.054L601.316 364.575Z" 
    //     fill={`url(/coverfire.jpg)`}
    //   />
    // </svg>
    <div className={styles.sliceContainer}>
      <img
        style={{
          transformOrigin: `100% 50%`,
          transform: `rotate(${rotation}deg) translateX(-15px)`
        }} 
        className={styles.slice} 
        src={src}
      ></img>
    </div>
    
  );
};

function Roulette({games=[]}){
  const step = 360 / games.length;
  return(
    <div className={styles.roulette}>
      {
        games.map((x,i)=>
          <Slice 
            key={x.id} 
            src={`https:${x.cover}`} 
            rotation={step*i}
          />
        )
      }
    </div>
  );
};

function Card({data}){
  return (
    <Link href={`/game/${data.slug}`} >
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,1)), url(https://${data.cover})`
        }} 
        className={styles.card}
      >
        <h3>{data.name}</h3>
      </div>
    </Link>
  );
}

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Game Roulette - Welcome</title>
      </Head>
      <Navbar/>
      <header className={styles.cover}>
        <h1 className={styles.h1}>
          <img className={styles.logoCoverC} src="/logo-gradient.svg" alt="logo"/>
          <p>game roulette</p>
        </h1>
        <Roulette games={data?.slice(0,5)}/>
      </header>
      <main className={styles.main}>
        <div className={styles.welcome}>
          <h2>
            <span className={styles.gradient}>Browse</span> Games, <span className={styles.gradient}>Make</span> Playlists, <span className={styles.gradient}>Spin</span> The Wheel
          </h2>
          <div className={styles.cardContainer}>
            {data?.map((x,i)=><Card key={x.id} data={x}/>)}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export async function getServerSideProps(){
  try {
      const data = await getHomePageCovers();

      return {
          props:{ data }
      };

  } catch (error) {
      return {
          props:{ data: error.message }
      }
  }
}