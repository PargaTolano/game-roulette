import axios        from 'axios';
import imageSizes   from '../constants/image-sizes';
import auth         from './auth';

const getGames = async (offset = 0)=>{
    const { access_token } = await auth(); 

    const query = ` fields name, cover.url, first_release_date, total_rating_count, platforms.abbreviation, rating, total_rating, slug;
                    where platforms = (48,49,130,6)
                    & total_rating_count > 5;
                    sort total_rating_count desc;
                    limit 12;
                    offset ${offset};`;
    
    const config = {
        headers:{
            'Accept':           'application/json',
            'Client-ID':        process.env.IGDB_CLIENT_ID,
            'Authorization':    `Bearer ${access_token}`
        }
    };

    const { data } = await axios.post( 'https://api.igdb.com/v4/games', query, config);
    
    data.forEach(element => {
        element.thumb  = element.cover.url;
        element.cover.url = element.cover.url.replace(imageSizes.thumb, imageSizes._720);
    });
    
    return data;
};

export default getGames;