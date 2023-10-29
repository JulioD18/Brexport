import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { sequelize } from "./datasource.js";

import { putTeamsFromAPI } from "./controllers/teams.js";
import { putLeaguesFromAPI } from "./controllers/leagues.js";

const app: Express = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

(async () => {
  await sequelize.authenticate();
  await sequelize.sync({ alter: { drop: false } });
})();

app.put("/api/teams", putTeamsFromAPI);
app.put("/api/leagues", putLeaguesFromAPI);

app.listen(3001, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${3001}`);
});
