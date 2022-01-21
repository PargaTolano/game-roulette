import axios        from 'axios';
import imageSizes   from '../constants/image-sizes';
import auth         from './auth';

const getGames = async (offset = 0)=>{
    const { access_token } = await auth(); 

    const query = ` fields name, first_release_date, platforms.abbreviation, cover.url, total_rating;
                    where rating > 30 &
                    aggregated_rating_count > 0 &
                    total_rating_count > 1 &
                    version_parent = null;
                    sort first_release_date desc;
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