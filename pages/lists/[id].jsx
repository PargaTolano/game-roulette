import { NextPageContext } from 'next';

import Link     from 'next/link';

import React    from 'react';
import getList  from '../../db/getList';

import Navbar   from '../../components/Navbar';

import styles   from '../../styles/ListDetail.module.scss';

const Game = ({data})=>{
    return (
        <Link href={`/game/${data.id}`}>
            <div className={styles.game}>
                <img className={styles.gamePic} src={`https:${data.cover.url}`}/>
                <h3 className={styles.gameTitle}>
                    {data.name}
                </h3>
            </div>
        </Link>
    );
};

const ListDetail = ({data}) => {
    return (
        <div className={styles.page}>
            <Navbar/>
            <h1 className={styles.title}>
                {data.name}
            </h1>
            <div className={styles.descContainer}>
                <p className={styles.description}>
                    {data.description}
                </p>
                <div className={styles.gameContainer}>
                    {
                        data.games.map(game=> <Game data={game}/>)
                    }
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

        const data = await getList(params.id);

        return {
            props:{ data: data }
        };

    } catch (error) {
        return {
            props:{ data: error.message }
        }
    }
};


export default ListDetail;