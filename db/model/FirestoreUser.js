import { List, listConverter} from './FirestoreList';

/**
 * @property {string} id
 * @property {List[]} lists
 */
class User{
    /**
     * @type {string}
     */
    id;
    /**
     * @type {List[]}
     */
    lists;

    /**
     * @param {string} id 
     * @param {List[]} lists 
     */
    constructor(id, lists){
        this.id     = id;
        this.lists  = lists;
    };
};

const userConverter = {
    /**
     * @param {User} user 
     * @returns {{id: string, name: string, games: number[], description: string}}
     */
    toFirestore: (user) => {
        return {
            id:             user.id,
            lists:          user.lists.map(data=>listConverter.toFirestore(listConverter))
        };
    },
    /**
     * @param {*} snapshot 
     * @param {*} options 
     * @returns {User}
     */
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new User(data.id, data.lists);
    }
};

export{
    User,
    userConverter
};