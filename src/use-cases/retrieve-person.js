export default function makeRetrievePerson({ peopleDB }) {
	return async function retrievePerson(personInfo) {
		// Attempts to fetch from storage
		const person = peopleDB.findPerson(personInfo.id);
		if (!person) {
			throw new Error('Person not found');
		}
		return person;
	};
}
