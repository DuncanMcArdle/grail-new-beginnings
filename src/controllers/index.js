import { addPerson, updatePerson, retrievePerson, removePerson } from '../use-cases/index.js';

import makePostPerson from './post-person.js';
import makePutPerson from './put-person.js';
import makeGetPerson from './get-person.js';
import makeDeletePerson from './delete-person.js';

const postPerson = makePostPerson({ addPerson });
const putPerson = makePutPerson({ updatePerson });
const getPerson = makeGetPerson({ retrievePerson });
const deletePerson = makeDeletePerson({ removePerson });

const personController = {
	postPerson,
	putPerson,
	getPerson,
	deletePerson,
};

export default personController;
export { postPerson, putPerson, getPerson, deletePerson };
