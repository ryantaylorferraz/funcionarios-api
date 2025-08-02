import express, { json } from "express"
import helmet from "helmet"
import { employeeRoutes } from "./routes/employeeRoutes";
export const app = express();

app.use(json())

app.use(helmet())

app.use("/funcionarios", employeeRoutes)