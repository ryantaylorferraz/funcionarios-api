import express, { json } from "express";
import helmet from "helmet";
import { employeeRoutes } from "./routes/employeeRoutes";
import { errorHandler } from "./middleware/errorHandler";
export const app = express();

app.use(json());

app.use(helmet());

app.use("/funcionarios", employeeRoutes);

app.use(errorHandler);
