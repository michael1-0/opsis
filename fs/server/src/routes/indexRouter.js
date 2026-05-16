import { Router } from "express";
import { getHealth } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/health", getHealth);

export default indexRouter;
