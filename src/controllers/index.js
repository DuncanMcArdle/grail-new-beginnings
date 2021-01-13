import { addPerson, retrievePerson, removePerson } from '../use-cases/index.js';

import makePostPerson from './post-person.js';
import makeGetPerson from './get-person.js';
import makeDeletePerson from './delete-person.js';

const postPerson = makePostPerson({ addPerson });
const getPerson = makeGetPerson({ retrievePerson });
const deletePerson = makeDeletePerson({ removePerson });

const personController = {
	postPerson,
	getPerson,
	deletePerson,
};

export default personController;
export { postPerson, getPerson, deletePerson };
