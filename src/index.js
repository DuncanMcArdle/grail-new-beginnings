import express from 'express';

const app = express();
app.use(express.json());

app.post('/api/people', () => {
	console.log('Request received');
});

app.listen(3000, () => {
	console.log('Listening on port 3000...');
});
