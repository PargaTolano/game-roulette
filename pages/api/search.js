import searchGames from '../../db/searchGames';

export default async function handler(req, res){
    try {
        let games = await searchGames(req.query.query, req.query.offset);
        res.status(200).json(games);
    }catch(e){
        res.status(500).json({"text":e.message});
    }
}