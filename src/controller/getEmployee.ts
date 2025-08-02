import { Response } from "./../../node_modules/@types/express-serve-static-core/index.d";
import axios from "axios";
import { NextFunction, Request } from "express";
import { IEmployee } from "../types/employee";

export const getEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data } = await axios.get<IEmployee[]>("http://localhost:3000/funcionarios");

    return res.status(200).json({
      message: "Funcionários listados com sucesso",
      json: data,
    });
  } catch (error) {
    next(error);
  }
};
