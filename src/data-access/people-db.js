export default function makePeopleDB({ peopleMap }) {
	function findPerson(id) {
		const person = peopleMap.get(id);
		if (!person) {
			return false;
		}
		return person;
	}

	function addPerson(person) {
		if (peopleMap.has(person.id)) {
			return false;
		}
		peopleMap.set(person.id, person);
		return person;
	}

	function updatePerson(person) {
		if (!peopleMap.has(person.id)) {
			return false;
		}
		peopleMap.set(person.id, person);
		return person;
	}

	function deletePerson(id) {
		const personToDelete = peopleMap.get(id);
		if (!personToDelete) {
			return false;
		}
		peopleMap.delete(id);
		return personToDelete;
	}

	return {
		findPerson,
		addPerson,
		updatePerson,
		deletePerson,
	};
}
