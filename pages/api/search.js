import searchGames from '../../db/searchGames';

export default async function handler(req, res){
    let games = await searchGames(req.query.query, req.query.offset);
    res.status(200).json(games);
}