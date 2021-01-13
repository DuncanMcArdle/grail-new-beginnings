export default function makeGetPerson({ retrievePerson }) {
	return async function getPerson(httpRequest) {
		try {
			const retrievedPerson = await retrievePerson(httpRequest.body);
			return {
				headers: {
					'Content-Type': 'application/json',
				},
				statusCode: 200,
				body: {
					retrievedPerson,
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
