import { Router } from "express";

import { putTeamsFromAPI } from "../controllers/teams";

export const teamRouter = () => {
  const router = Router();

  router.put("/", putTeamsFromAPI);

  return router;
};
