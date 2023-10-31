import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { sequelize } from "./datasource.js";

import { teamRouter } from "./routes/team-routes.js";
import { leagueRouter } from "./routes/league-routes.js";

const app: Express = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

(async () => {
  await sequelize.authenticate();
  await sequelize.sync({ alter: { drop: false } });
})();

app.use("/api/teams", teamRouter());
app.use("/api/leagues", leagueRouter());

app.listen(3001, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${3001}`);
});
