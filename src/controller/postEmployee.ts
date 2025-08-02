import axios from "axios";
import { NextFunction, Request, Response } from "express";

export const postEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = req.body;
    const { data } = await axios.post("http://localhost:3000/funcionarios", payload);

    return res.status(201).json({ message: "Funcionário criado com sucesso.", response: data });
  } catch (error) {
    next(error);
  }
};
