import makeAddPerson from './add-person.js';
import makeRetrievePerson from './retrieve-person.js';
import makeRemovePerson from './remove-person.js';

import peopleDB from '../data-access/index.js';

const addPerson = makeAddPerson({ peopleDB });
const retrievePerson = makeRetrievePerson({ peopleDB });
const removePerson = makeRemovePerson({ peopleDB });

const peopleService = {
	addPerson,
	retrievePerson,
	removePerson,
};

export default peopleService;
export { addPerson, retrievePerson, removePerson };
