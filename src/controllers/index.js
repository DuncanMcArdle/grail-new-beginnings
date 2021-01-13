import { addPerson } from '../use-cases/index.js';

import makePostPerson from './post-person.js';

const postPerson = makePostPerson({ addPerson });

const personController = {
	postPerson,
};

export default personController;
export { postPerson };
