import makeAddPerson from './add-person.js';
import peopleDB from '../data-access/index.js';

describe('use-case - add-person', () => {
	it('adds people into the database', async () => {
		const addPerson = makeAddPerson({ peopleDB });
		const personToAdd = {
			id: 'Test ID',
			name: 'Test name',
			DOB: 'Test DOB',
			phoneNumber: 'Test phone number',
			address: 'Test address',
		};
		const addedPerson = await addPerson(personToAdd);
		expect(addedPerson).toMatchObject(personToAdd);
	});

	it('fails to add a duplicate person', async () => {
		const addPerson = makeAddPerson({ peopleDB });
		const personToAdd = {
			id: 'Duplicate ID',
			name: 'Test name',
			DOB: 'Test DOB',
			phoneNumber: 'Test phone number',
			address: 'Test address',
		};
		await addPerson(personToAdd);
		await expect(addPerson(personToAdd)).rejects.toThrow('Person with that ID already exists');
	});
});
