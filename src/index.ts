import 'dotenv/config';
import express from 'express';

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 8080;

app.get('/', async (request, response) => {
    response.json({ hello: 'world' });
});

app.listen(SERVER_PORT, () => console.log(`Server ready at *:${SERVER_PORT}`));
