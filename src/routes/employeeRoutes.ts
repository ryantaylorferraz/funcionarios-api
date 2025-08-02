import { Router } from "express";
import { getEmployee } from "../controller/getEmployee";
import { getEmployeeById } from "../controller/getEmployeeById";

export const employeeRoutes = Router();

employeeRoutes.get("/", getEmployee)
employeeRoutes.get("/:id", getEmployeeById)