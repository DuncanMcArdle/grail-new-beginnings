import makePerson from '../entities/person/index.js';

export default function makeUpdatePerson({ peopleDB }) {
	return async function updatePerson(personInfo) {
		// Creates and validates
		const person = makePerson(personInfo);

		// Attempt to update existing record in storage
		const updatedPerson = peopleDB.updatePerson(person);
		if (!updatedPerson) {
			throw new Error('Person not found');
		}
		return updatedPerson;
	};
}
