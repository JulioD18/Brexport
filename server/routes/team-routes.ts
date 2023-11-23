import { Router } from "express";

import { getTeams, getTeamStats } from "../controllers/teams";

export const teamRouter = () => {
  const router = Router();

  router.get("/", getTeams);
  router.get("/stats", getTeamStats);

  return router;
};
