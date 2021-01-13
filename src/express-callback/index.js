export default function makeExpressCallback(controller) {
	return (req, res) => {
		const httpRequest = {
			body: req.body,
			query: req.query,
			params: req.params,
			ip: req.ip,
			method: req.method,
			path: req.path,
			headers: {
				Referer: req.get('referer'),
				'Content-Type': req.get('Content-Type'),
				'User-Agent': req.get('User-Agent'),
			},
		};
		controller(httpRequest)
			.then((httpResponse) => {
				if (httpResponse.headers) {
					res.set(httpResponse.headers);
				}
				res.type('json');
				res.status(httpResponse.statusCode).send(httpResponse.body);
			})
			.catch((exception) => res.status(500).send({ error: `Unknown error occurred: ${exception.message}` }));
	};
}
