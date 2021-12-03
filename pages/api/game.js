import axios from 'axios';

export default function handler(req, res){
    const options = {
        method: 'GET',
        url: 'https://rawg-video-games-database.p.rapidapi.com/games',
        headers: {
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
          'x-rapidapi-key': '6dbb228c76mshcbdc9145a9d4c47p14899cjsn05a3ea0860bf'
        }
    };
      
    axios.request(options).then(function (response) {
        res.json(response);
    }).catch(function (error) {
        res.json(error);
    });
}