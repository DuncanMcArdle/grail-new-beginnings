import makeAddPerson from './add-person.js';
import makeRemovePerson from './remove-person.js';
import peopleDB from '../data-access/index.js';

describe('use-case - remove-person', () => {
	it('removes people from the database', async () => {
		const addPerson = makeAddPerson({ peopleDB });
		const removePerson = makeRemovePerson({ peopleDB });

		const personToAdd = {
			id: 'Test ID',
			name: 'Test name',
			DOB: 'Test DOB',
			phoneNumber: 'Test phone number',
			address: 'Test address',
		};
		await addPerson(personToAdd);

		const removedPerson = await removePerson(personToAdd);
		expect(removedPerson).toMatchObject(personToAdd);
	});
});
