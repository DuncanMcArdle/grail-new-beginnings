import express from 'express';
import { postPerson } from './controllers/index.js';
import makeCallback from './express-callback/index.js';

const app = express();
app.use(express.json());

app.post('/api/people', makeCallback(postPerson));

app.listen(3000, () => {
	console.log('Listening on port 3000...');
});
