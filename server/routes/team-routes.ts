import { Router } from "express";

import { getTeams, putTeamsFromAPI } from "../controllers/teams";

export const teamRouter = () => {
  const router = Router();

  router.get("/", getTeams);

  return router;
};
