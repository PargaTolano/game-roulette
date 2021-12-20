import axios from 'axios';
import imageSizes from '../constants/image-sizes';
import shuffle from '../utils/shuffle';
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

    const to_return = data.map(game=>game.screenshots[0]);
    shuffle(to_return);    

    return  to_return;
};

export default getPopularGamesCovers;