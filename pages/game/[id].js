import Link             from 'next/link';
import React            from 'react'; 
import Footer from '../../components/Footer';
import HeroFlipper      from '../../components/HeroFlipper';
import Navbar from '../../components/Navbar';
import getGame          from '../../db/getGame';

import styles           from '../../styles/Game.module.scss';

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
            <Navbar/>
            <header className={styles.cover}>
                <HeroFlipper images={data.screenshots}/>
            </header>
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
                            {data.platforms?.map(platform=><PlatformButton key={platform.id} platform={platform}/>)}
                        </div>
                        <p className={styles.summary}>
                            {data.summary}
                        </p>
                        <p className={styles.storyline}>
                            {data.storyline}
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
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