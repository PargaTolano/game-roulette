import getGames from '../../db/getGames';

export default async function handler(req, res){
    let games = await getGames(req.query.offset);
    res.status(200).json(games);
}