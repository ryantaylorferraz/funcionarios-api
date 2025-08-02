import { NextFunction, Request, Response } from "express";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const status = typeof err.statusCode === "number" ? err.statusCode : 500;
  const message = err.message || "Erro inesperado.";

  res.status(status).json({ error: message });
};
