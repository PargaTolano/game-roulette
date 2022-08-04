import axios from 'axios';
import imageSizes from '../constants/image-sizes';
import shuffle from '../utils/shuffle';
import auth from './auth';

const getHomePageCovers = async ()=>{

    const { access_token } = await auth(); 

    const query = `fields name, slug, artworks.url, cover.url;
                    where platforms = (48,49,130,6)
                    & total_rating_count > 5
                    & cover != null
                    & artworks != null;
                    sort total_rating_count desc;
                    limit 8;`;

    const config = {
        headers:{
            'Accept':           'application/json',
            'Client-ID':        process.env.IGDB_CLIENT_ID,
            'Authorization':    `Bearer ${access_token}`
        }
    };

    const { data } = await axios.post('https://api.igdb.com/v4/games',query, config);
    const to_return = data.map(game=>{
        const {id, name, slug} = game;
        const artwork = game.artworks[0].url.replace(imageSizes.thumb, imageSizes._1080);    
        const cover = game.cover.url.replace(imageSizes.thumb, imageSizes._1080);
        return {
            id,
            name,
            slug,
            artwork, 
            cover
        };
    });
    shuffle(to_return);
    return to_return;
};

export default getHomePageCovers;