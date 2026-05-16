import express from "express";
import cors from "cors";
import indexRouter from "./routes/indexRouter.js";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", indexRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
