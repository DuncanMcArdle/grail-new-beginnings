import express from 'express';
import { postPerson, getPerson, deletePerson } from './controllers/index.js';
import makeCallback from './express-callback/index.js';

const app = express();
app.use(express.json());

app.post('/api/people', makeCallback(postPerson));
app.get('/api/people', makeCallback(getPerson));
app.delete('/api/people', makeCallback(deletePerson));

app.listen(3000, () => {
	console.log('Listening on port 3000...');
});
