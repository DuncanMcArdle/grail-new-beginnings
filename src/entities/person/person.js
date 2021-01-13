export default function buildMakePerson() {
	return function makePerson({ id, name, DOB, phoneNumber, address }) {
		if (!id || id.length < 3) {
			throw new Error('Invalid ID');
		}

		if (!name || name.length < 3) {
			throw new Error('Invalid name');
		}

		if (!DOB || DOB.length < 3) {
			throw new Error('Invalid DOB');
		}

		if (!phoneNumber || phoneNumber.length < 3) {
			throw new Error('Invalid phone number');
		}

		if (!address || address.length < 3) {
			throw new Error('Invalid address');
		}

		return {
			id,
			name,
			DOB,
			phoneNumber,
			address,
		};
	};
}
