import axios        from 'axios';
import imageSizes   from '../constants/image-sizes';
import auth         from './auth';

import getGames     from './getGames';

const searchGames = async (searchQuery = '', offset = 0)=>{

    if(searchQuery === '') return getGames(offset);

    const { access_token } = await auth(); 

    const query = `search "${searchQuery}"; 
        fields name, first_release_date, cover.url;
        where name != null & cover != null;`;
    
    const config = {
        headers:{
            'Accept':           'application/json',
            'Client-ID':        process.env.IGDB_CLIENT_ID,
            'Authorization':    `Bearer ${access_token}`
        }
    };

    const { data } = await axios.post( 'https://api.igdb.com/v4/games/', query, config);
    
    data.forEach(element => {
        element.thumb = element.cover.url;
        element.cover.url = element.cover.url.replace(imageSizes.thumb, imageSizes._720);
    });
    
    return data;
};

export default searchGames;