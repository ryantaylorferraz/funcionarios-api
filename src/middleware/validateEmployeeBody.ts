//.. Validação do corpo da requisição

import { NextFunction, Request, Response } from "express";
import { createAppError } from "../errors/appError";

export const validateEmployeeBody = (req: Request, res: Response, next: NextFunction) => {
  const allowedFields = ["nome", "cargo", "salario"];

  const bodyKeys = Object.keys(req.body);
  const invalidKeys = bodyKeys.filter((key) => !allowedFields.includes(key));

  if (invalidKeys.length > 0) {
    return next(createAppError(400, `Campos inválidos: ${invalidKeys.join(", ")}`));
  }

  const { nome, cargo, salario } = req.body;

  if (nome !== undefined && typeof nome !== "string") {
    return next(createAppError(400, "Nome deve ser string."));
  }

  if (cargo !== undefined && typeof cargo !== "string") {
    return next(createAppError(400, "Cargo deve ser string."));
  }

  if (salario !== undefined && (typeof salario !== "number" || isNaN(salario))) {
    return next(createAppError(400, "Salário deve ser um número válido."));
  }

  return next();
};
