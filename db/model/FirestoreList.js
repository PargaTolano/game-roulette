/**
 * @property {string}   id
 * @property {string}   name
 * @property {number[]} games
 * @property {string}   description
 */
class List {

    /**
     * @type {string}
     */
    id;
    /**
     * @type {string}
     */
    name;
    /**
     * @type {number[]}
     */
    games;
    /**
     * @type {string}
     */
    description;
    /**
     * @param {string} id 
     * @param {string} name 
     * @param {number[]} games 
     * @param {string} description 
     */
    constructor(id, name, games, description){
        this.id             = id;
        this.name           = name;
        this.games          = games;
        this.description    = description;
    }
};

const listConverter = {
    /**
     * @param {List} list 
     * @returns {{id: string, name: string, games: number[], description: string}}
     */
    toFirestore: (list) => {
        return {
            id:             list.id,
            name:           list.name,
            games:          list.games,
            description:    list.description
        };
    },
    /**
     * @param {*} snapshot 
     * @param {*} options 
     * @returns {List}
     */
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new List(data.id, data.name, data.games, data.description);
    }
};

export{
    List,
    listConverter
};