import { Router } from "express";
import { chat } from "../controllers/chat";

export const chatRouter = () => {
  const router = Router();

  router.put("/", chat);

  return router;
};
