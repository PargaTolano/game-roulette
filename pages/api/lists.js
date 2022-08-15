import getLists from '../../db/getLists';
import { ListService } from '../../service/ListService';

export default async function handler(req, res){
    let lists = await ListService.getMyLists;
    res.status(200).json(lists);
}