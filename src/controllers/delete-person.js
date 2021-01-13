export default function makeDeletePerson({ removePerson }) {
	return async function deletePerson(httpRequest) {
		try {
			const removedPerson = await removePerson(httpRequest.body);
			return {
				headers: {
					'Content-Type': 'application/json',
				},
				statusCode: 200,
				body: {
					removedPerson,
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
