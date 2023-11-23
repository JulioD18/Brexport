import { Router } from "express";
import { getLeagues } from "../controllers/leagues";

export const leagueRouter = () => {
  const router = Router();

  router.get("/", getLeagues);

  return router;
};
