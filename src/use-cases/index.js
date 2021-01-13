import makeAddPerson from './add-person.js';
import makeUpdatePerson from './update-person.js';
import makeRetrievePerson from './retrieve-person.js';
import makeRemovePerson from './remove-person.js';

import peopleDB from '../data-access/index.js';

const addPerson = makeAddPerson({ peopleDB });
const updatePerson = makeUpdatePerson({ peopleDB });
const retrievePerson = makeRetrievePerson({ peopleDB });
const removePerson = makeRemovePerson({ peopleDB });

const peopleService = {
	addPerson,
	updatePerson,
	retrievePerson,
	removePerson,
};

export default peopleService;
export { addPerson, updatePerson, retrievePerson, removePerson };
