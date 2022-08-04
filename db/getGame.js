import axios from 'axios';
import imageSizes from '../constants/image-sizes';
import auth from './auth';

const getGame = async (slug)=>{
    const { access_token } = await auth(); 

    const query = `
        fields name, cover.url, storyline, summary, screenshots.url, platforms.name, platforms.url; 
        where slug = "${slug}";`;

    const config = {
        headers:{
            'Accept':           'application/json',
            'Client-ID':        process.env.IGDB_CLIENT_ID,
            'Authorization':    `Bearer ${access_token}`
        }
    };

    const { data } = await axios.post('https://api.igdb.com/v4/games',query, config);
    console.log(data);
    const to_return=data.map(element => {
        const cover =  element.cover.url.replace(imageSizes.thumb, imageSizes._720);
        const screenshots = element.screenshots.map(screenshot=>screenshot.url.replace(imageSizes.thumb, imageSizes._1080));
    
        return {
            ...element,
            cover,
            screenshots
        }
    });
    return to_return;
};

export default getGame;