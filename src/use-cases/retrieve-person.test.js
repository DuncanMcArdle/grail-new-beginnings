import makeAddPerson from './add-person.js';
import makeRetrievePerson from './retrieve-person.js';
import peopleDB from '../data-access/index.js';

describe('use-case - retrieve-person', () => {
	it('retrieves people from the database', async () => {
		const addPerson = makeAddPerson({ peopleDB });
		const retrievePerson = makeRetrievePerson({ peopleDB });

		const personToAdd = {
			id: 'Test ID',
			name: 'Test name',
			DOB: 'Test DOB',
			phoneNumber: 'Test phone number',
			address: 'Test address',
		};
		await addPerson(personToAdd);

		const retrievedPerson = await retrievePerson(personToAdd);
		expect(retrievedPerson).toMatchObject(personToAdd);
	});

	it('fails to retrieve a non-existant person', async () => {
		const retrievePerson = makeRetrievePerson({ peopleDB });
		await expect(retrievePerson({ id: 'Invalid ID' })).rejects.toThrow('Person not found');
	});
});
