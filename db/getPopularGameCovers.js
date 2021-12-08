import axios from 'axios';
import imageSizes from '../constants/image-sizes';
import auth from './auth';

const getPopularGamesCovers = async ()=>{

    const { access_token } = await auth(); 

    const query = `fields screenshots.url; where screenshots != null & total_rating_count > 500; sort rating desc; limit 10;`;

    const config = {
        headers:{
            'Accept':           'application/json',
            'Client-ID':        process.env.IGDB_CLIENT_ID,
            'Authorization':    `Bearer ${access_token}`
        }
    };

    const { data } = await axios.post('https://api.igdb.com/v4/games',query, config);
    data.forEach(game=>{
        game.screenshots[0].url = game.screenshots[0].url.replace(imageSizes.thumb, imageSizes._1080);    
    });
    return  data.map(game=>game.screenshots[0]);
};

export default getPopularGamesCovers;