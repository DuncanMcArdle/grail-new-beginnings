export default function makePutPerson({ updatePerson }) {
	return async function putPerson(httpRequest) {
		try {
			const updatedPerson = await updatePerson(httpRequest.body);
			return {
				headers: {
					'Content-Type': 'application/json',
				},
				statusCode: 200,
				body: {
					updatedPerson,
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
