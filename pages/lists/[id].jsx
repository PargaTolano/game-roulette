import { NextPageContext } from 'next';

import Head          from 'next/head';
import Link          from 'next/link';

import { useRouter } from 'next/router';

import React         from 'react';
import getList       from '../../db/getList';

import Navbar        from '../../components/Navbar';

import styles        from '../../styles/ListDetail.module.scss';

const Game = ({data})=>{
    return (
        <Link href={`/game/${data.slug}`}>
            <div className={styles.game}>
                <img className={styles.gamePic} src={`https:${data.cover.url}`}/>
                <h3 className={styles.gameTitle}>
                    {data.name}
                </h3>
            </div>
        </Link>
    );
};

const ListDetail = ({data = null, error = null}) => {
    const router = useRouter();
    if( error ){
        router.push('/');
        return (<></>);
    }
    return (
        <div className={styles.page}>
            <Head>
                <title> List - {data.name} </title>
            </Head>
            <Navbar/>
            <h1 className={styles.title}>
                {data.name}
            </h1>
            <div className={styles.descContainer}>
                <p className={styles.description}>
                    {data.description}
                </p>
                <div className={styles.gameContainer}>
                    {data.games.map(game=> <Game key={game.id} data={game}/>)}
                </div>
            </div>
        </div>
    )
};

/**
 * @param {NextPageContext} context 
 * @returns 
 */
export async function getServerSideProps(context){
    try {
        const { params } = context;

        const data = await getList(params.slug);

        return {
            props:{ data }
        };

    } catch (error) {
        return {
            props:{ error: error.message }
        }
    }
};


export default ListDetail;