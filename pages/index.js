import Head from 'next/head';
import Link from 'next/link';

import HeroFlipper  from '../components/HeroFlipper';
import Footer       from '../components/Footer';

import getPopularGamesCovers from '../db/getPopularGameCovers';

import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <header className={styles.cover}>
        <HeroFlipper images={data}/>
        <h1 className={styles.h1}>
          Game Roulette
        </h1>
      </header>
      <main className={styles.main}>
        <div className={styles.welcome}>
          <h2>
            Welcome to Game Roulette, a user-friendly platform where you can discover new games daily, choose the game for your next gaming session or purchase, just log in and create a collection to spin the roulette ;)
          </h2>
          <Link href={'games'}>
            <div className={styles.explore}>
              <a className={styles.exploreLink}>
                Explore Games! &rarr;
              </a>
            </div>
          </Link>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export async function getServerSideProps(context){
  try {
      const data = await getPopularGamesCovers();

      return {
          props:{ data }
      };

  } catch (error) {
      return {
          props:{ data: error.message }
      }
  }
}