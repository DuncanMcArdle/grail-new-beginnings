import makeAddPerson from './add-person.js';
import makeRemovePerson from './remove-person.js';

import peopleDB from '../data-access/index.js';

const addPerson = makeAddPerson({ peopleDB });
const removePerson = makeRemovePerson({ peopleDB });

const peopleService = {
	addPerson,
	removePerson,
};

export default peopleService;
export { addPerson, removePerson };
