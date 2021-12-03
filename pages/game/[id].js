import {useRouter} from 'next/router';

import React from 'react';
import axios from "axios";

const GameDetail = ({data}) => {

    const router = useRouter();
    console.log(data);
    return (
        <div style={{ 
            display:            'inline-block',
            width:              '100%',
            height:             '100%',
            backgroundPosition: 'center',
            backgroundImage:    `url(${data.background_image})`,
            overflow:           'hidden',
            }}
        >
             
        </div>
    )
};

export default GameDetail;

export async function getServerSideProps(context){
    try {
        let data;
        const { params } = context;

        const url = new URL(`https://rawg-video-games-database.p.rapidapi.com/games/${params.id}`);
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

        return {
            props:{ data }
        };

    } catch (error) {
        return {
            props:{ data: error.message }
        }
    }
}