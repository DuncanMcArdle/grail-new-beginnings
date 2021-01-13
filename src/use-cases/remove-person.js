export default function makeRemovePerson({ peopleDB }) {
	return async function removePerson(personInfo) {
		// Attempts to remove from storage
		const person = peopleDB.deletePerson(personInfo.id);
		if (!person) {
			throw new Error('Person not found');
		}
		return person;
	};
}
