import makeAddPerson from './add-person.js';

import peopleDB from '../data-access/index.js';

const addPerson = makeAddPerson({ peopleDB });

const peopleService = {
	addPerson,
};

export default peopleService;
export { addPerson };
