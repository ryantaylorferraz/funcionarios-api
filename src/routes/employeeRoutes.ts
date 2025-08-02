import { Router } from "express";
import { getEmployee } from "../controller/getEmployee";
import { getEmployeeById } from "../controller/getEmployeeById";
import { isEmployeeIdMiddleware } from "../middleware/isEmployeeId.middleware";

export const employeeRoutes = Router();

employeeRoutes.get("/", getEmployee)
employeeRoutes.get("/:id", isEmployeeIdMiddleware, getEmployeeById)