export default function makePostPerson({ addPerson }) {
	return async function postPerson(httpRequest) {
		try {
			const addedPerson = await addPerson(httpRequest.body);
			return {
				headers: {
					'Content-Type': 'application/json',
				},
				statusCode: 200,
				body: {
					addedPerson,
				},
			};
		} catch (exception) {
			return {
				headers: {
					'Content-Type': 'application/json',
				},
				statusCode: 400,
				body: exception.message,
			};
		}
	};
}
