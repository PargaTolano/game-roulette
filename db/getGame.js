import axios from 'axios';
import imageSizes from '../constants/image-sizes';
import auth from './auth';

const getGame = async (id)=>{

    const { access_token } = await auth(); 

    const query = `fields name, cover.url, summary, screenshots.url, platforms.name, platforms.url; where id = ${id};`;

    const config = {
        headers:{
            'Accept':           'application/json',
            'Client-ID':        process.env.IGDB_CLIENT_ID,
            'Authorization':    `Bearer ${access_token}`
        }
    };

    const { data } = await axios.post('https://api.igdb.com/v4/games',query, config);
    data.forEach(element => {
        element.cover.url = element.cover.url.replace(imageSizes.thumb, imageSizes._720);
        element.screenshots.forEach(screenshot=>{
            screenshot.url = screenshot.url.replace(imageSizes.thumb, imageSizes._1080)
        });
    });
    return data;
};

export default getGame;