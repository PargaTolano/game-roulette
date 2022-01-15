import React, { useEffect, useState } from 'react';

import Navbar           from '../../components/Navbar';
import GradientInput    from '../../components/GradientInput';

import styles           from '../../styles/CreateList.module.scss';
import SearchBar        from '../../components/SearchBar';

import {
    MdCheck
} from 'react-icons/md';

/*
    gameData: {
        id:                 number,
        name:               string,
        first_release_data: string,
        thumb:              string,
        cover:{
            id:     number,
            url:    string
        }
    }
*/
const SearchCard = ({data})=>{
    return (
        <div className={styles.selectCard}>

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

const SelectedCard = ({data})=>{
    return (
        <div className={styles.selectedCard}>
            <img src={data.thumb} className={styles.thumb} />
            <h4 className={styles.name}>
                {data.name}
            </h4>
        </div>
    );
};

const CreateList = () => {

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
    };

    const onSubmitSearch = async (e)=>{
        e.preventDefault();

        const res = await fetch(`/api/search?query=${state.search}`);
        const data = await res.json();

        setState(x=>({...x, games: data}));
    };

    return (
        <div className={styles.page}>
            <Navbar/>
            <main className={styles.main}>
                <h1 className={styles.h1}>
                    Create New List
                </h1>
                <form 
                    className={styles.form}
                    onSubmit={onSubmit}
                >
                    <GradientInput 
                        label='name'
                        labelFontSize='24px'
                        inputFontSize='16px'
                        name='name'
                        type='text'
                        value={state.name}
                        onChange={onChange}
                    />
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
                            state.games.map(v=><SearchCard key={v.id} data={v}/>)
                        }
                    </div>
                    <div className={styles.selected}>
                        <h4 className={styles.selectedTitle}>Selected Games</h4>
                        <div className={styles.selectedCardContainer}>
                            {
                                state.games.map(v=><SelectedCard key={v.id} data={v}/>)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CreateList;
