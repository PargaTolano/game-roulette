import Head             from 'next/head';
import React, { useEffect, useState } from 'react';

import Navbar           from '../../../components/Navbar';

import SearchBar        from '../../../components/SearchBar';

import {
    MdCheck,
    MdCancel
} from 'react-icons/md';
import createList from '../../../db/createList';
import { List } from '../../../db/model/FirestoreList';
import { auth } from '../../../firebase/clientApp';

import styles           from '../../../styles/CreateList.module.scss';

const SearchCard = ({data, onClick})=>{
    return (
        <div 
            className={styles.selectCard}  
            onClick={()=>onClick(data)}
        >

            <div className={styles.selectCardActive}>
                <MdCheck/>
            </div>

            <img
                className={styles.selectCardImage}
                src={ data.cover ? `https:${data.cover.url}` : 'https://cdn.wallpapersafari.com/44/35/UAOXC9.jpg'}
            /> 

            <div className={styles.selectCardContent}>
                <p className={styles.selectCardText}>
                    {data.name}
                </p>
            </div>
        </div>
    );
};

const SelectedCard = ({data, onClose})=>{
    return (
        <div className={styles.selectedCard}>
            <img src={data.thumb} className={styles.thumb} />
            <h4 className={styles.name}>
                {data.name}
            </h4>
            <button className={styles.close}>
                <MdCancel onClick={()=>onClose(data)}/>
            </button>
        </div>
    );
};

const UpdateList = () => {
    const [state, setState] = useState({
        name:           '',
        description:    '',
        selectedGames:  [],
        games:          [],
        search:         '',
    });

    useEffect(()=>{
        //fetch('')
    },[]);

    const onChange = (e)=>{
        setState(x=>({...x, [e.target.name]: e.target.value}));
    };

    const onSubmit = async (e)=>{
        e.preventDefault();
        await createList( 
            auth.currentUser.uid, 
            new List('', state.name, state.selectedGames, state.description)
        );
    };

    const onSubmitSearch = async (e)=>{
        e.preventDefault();
        const res = await fetch(`/api/search?query=${state.search}`);
        const data = await res.json();
        setState(x=>({...x, games: data}));
    };

    const onClickGame = (game)=>{
        let selectedGames = [...state.selectedGames, game];
        selectedGames = [...new Set(selectedGames)];
        setState(x=>({...x, selectedGames}));
    };

    const onClickClose = (game)=>{
        state.selectedGames.splice( state.selectedGames.indexOf(game), 1);
        const selectedGames = state.selectedGames;
        setState(x=>({...x, selectedGames}));
    };

    return (
        <div className={styles.page}>
            <Head>
                <title> Create List </title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
                <div style={{
                    background: '#232323',
                    width:      700,
                    height:     700,
                    position:   'fixed',
                    transform:  'translate(12.5vw, 0vh) rotate(-12deg)',
                    zIndex:     -1,
                }}>
                </div>
                <h1 className={styles.h1}>
                    Edit List
                </h1>
                <form 
                    className={styles.form}
                    onSubmit={onSubmit}
                >
                    <label>
                        <p className={styles.labelText}>
                            name
                        </p>
                        <input
                            type='text' 
                            className={styles.nameInput}
                            name='name'
                            value={state.name}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        <p className={styles.labelText}>
                            description
                        </p>
                        <textarea 
                            className={styles.description}
                            name='description'
                            value={state.description}
                            onChange={onChange}
                        >
                        </textarea>
                    </label>
                    <button className={styles.submit}> 
                        <p>submit</p> 
                    </button>
                </form>
                <form onSubmit={onSubmitSearch}>
                    <SearchBar 
                        placeholder='Search...'
                        name='search'
                        value={state.search}
                        onChange={onChange}
                    />
                </form>
                <div className={styles.container}>
                    <div className={styles.candidates}>
                        {
                            state.games.map(v=>
                                <SearchCard 
                                    key={v.id} 
                                    data={v}
                                    onClick={onClickGame}
                                />
                            )
                        }
                    </div>
                    <div className={styles.selected}>
                        <h4 className={styles.selectedTitle}>Selected Games</h4>
                        <div className={styles.selectedCardContainer}>
                            {
                                state.selectedGames.map(v=>
                                    <SelectedCard 
                                        key={v.id} 
                                        data={v}
                                        onClose={onClickClose}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default UpdateList;
