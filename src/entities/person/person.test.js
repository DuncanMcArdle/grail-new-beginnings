import makePerson from './index.js';

let validPerson;

beforeEach(() => {
	validPerson = {
		id: 'Test ID',
		name: 'Test name',
		DOB: 'Test DOB',
		phoneNumber: 'Test phone number',
		address: 'Test address',
	};
});

describe('entity - person', () => {
	it('rejects an invalid ID', async () => {
		const invalidPerson = { ...validPerson, id: '' };
		expect(() => makePerson(invalidPerson)).toThrow('Invalid ID');
	});

	it('rejects an invalid name', async () => {
		const invalidPerson = { ...validPerson, name: '' };
		expect(() => makePerson(invalidPerson)).toThrow('Invalid name');
	});

	it('rejects an invalid DOB', async () => {
		const invalidPerson = { ...validPerson, DOB: '' };
		expect(() => makePerson(invalidPerson)).toThrow('Invalid DOB');
	});

	it('rejects an invalid phone number', async () => {
		const invalidPerson = { ...validPerson, phoneNumber: '' };
		expect(() => makePerson(invalidPerson)).toThrow('Invalid phone number');
	});

	it('rejects an invalid address', async () => {
		const invalidPerson = { ...validPerson, address: '' };
		expect(() => makePerson(invalidPerson)).toThrow('Invalid address');
	});
});
