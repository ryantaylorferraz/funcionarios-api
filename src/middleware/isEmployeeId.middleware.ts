import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { IEmployee } from "../types/employee";
import { createAppError } from "../errors/appError";

export const isEmployeeIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const { data: employees } = await axios.get<IEmployee[]>("http://localhost:3000/funcionarios");

    const exists = employees.some((e) => e.id.toString() === id);

    if (!exists) {
      return next(createAppError(404, "Funcionário não encontrado."));
    }
    return next();
  } catch (error) {
    return next(createAppError(500, "Erro ao verificar funcionário."));
  }
};
