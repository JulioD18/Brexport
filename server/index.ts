import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import teams from './controllers/teams';

const app: Express = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/teams', )

app.listen(3001, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${3001}`);
});