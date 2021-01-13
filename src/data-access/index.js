import makePeopleDB from './people-db.js';

// Initialise an empty map for use as data storage
const peopleMap = new Map();

const peopleDB = makePeopleDB({ peopleMap });

export default peopleDB;
