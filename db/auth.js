import axios from 'axios';

let authData = null;

const auth = async() => {
    try{
        if( authData !== null )
            return authData;

        const url = new URL('https://id.twitch.tv/oauth2/token');
        url.searchParams.append('client_id', process.env.IGDB_CLIENT_ID);
        url.searchParams.append('client_secret', process.env.IGDB_CLIENT_SECRET)
        url.searchParams.append('grant_type','client_credentials');

        const{ data }= await axios.post(url.href);

        authData = data;
        return authData;
    }
    catch(e){
        console.error(e);
    }
};

export default auth;
