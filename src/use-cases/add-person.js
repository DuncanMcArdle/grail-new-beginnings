import makePerson from '../entities/person/index.js';

export default function makeAddPerson({ peopleDB }) {
	return async function addPerson(personInfo) {
		// Creates and validates
		const person = makePerson(personInfo);

		// Attempt to insert into storage
		const addedPerson = peopleDB.addPerson(person);
		if (!addedPerson) {
			throw new Error('Person with that ID already exists');
		}
		return addedPerson;
	};
}
