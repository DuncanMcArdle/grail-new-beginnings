import makeAddPerson from './add-person.js';
import makeUpdatePerson from './update-person.js';
import peopleDB from '../data-access/index.js';

describe('use-case - update-person', () => {
	it('updates people in the database', async () => {
		const addPerson = makeAddPerson({ peopleDB });
		const updatePerson = makeUpdatePerson({ peopleDB });

		const personToAdd = {
			id: 'Test ID',
			name: 'Test name',
			DOB: 'Test DOB',
			phoneNumber: 'Test phone number',
			address: 'Test address',
		};
		await addPerson(personToAdd);

		const personToUpdate = {
			id: 'Test ID',
			name: 'New name',
			DOB: 'New DOB',
			phoneNumber: 'New phone number',
			address: 'New address',
		};
		const updatedPerson = await updatePerson(personToUpdate);
		expect(updatedPerson).toMatchObject(personToUpdate);
	});

	it('fails to update a non-existant person', async () => {
		const updatePerson = makeUpdatePerson({ peopleDB });
		await expect(
			updatePerson({
				id: 'Invalid ID',
				name: 'New name',
				DOB: 'New DOB',
				phoneNumber: 'New phone number',
				address: 'New address',
			})
		).rejects.toThrow('Person not found');
	});
});
