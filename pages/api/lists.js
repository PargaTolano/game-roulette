import getLists from '../../db/getLists';

export default async function handler(req, res){
    let lists = await getLists(req.query.id);
    res.status(200).json(lists);
}