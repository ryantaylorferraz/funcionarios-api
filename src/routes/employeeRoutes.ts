import { Router } from "express";
import { getEmployee } from "../controller/getEmployee";
import { getEmployeeById } from "../controller/getEmployeeById";
import { isEmployeeIdMiddleware } from "../middleware/isEmployeeId.middleware";
import { postEmployee } from "../controller/postEmployee";
import { validateEmployeeBody } from "../middleware/validateEmployeeBody";

export const employeeRoutes = Router();

employeeRoutes.post("/", validateEmployeeBody, postEmployee)
employeeRoutes.get("/", getEmployee)
employeeRoutes.get("/:id", isEmployeeIdMiddleware, getEmployeeById)