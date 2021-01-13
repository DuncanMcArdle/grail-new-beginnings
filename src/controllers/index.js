import { addPerson, removePerson } from '../use-cases/index.js';

import makePostPerson from './post-person.js';
import makeDeletePerson from './delete-person.js';

const postPerson = makePostPerson({ addPerson });
const deletePerson = makeDeletePerson({ removePerson });

const personController = {
	postPerson,
	deletePerson,
};

export default personController;
export { postPerson, deletePerson };
