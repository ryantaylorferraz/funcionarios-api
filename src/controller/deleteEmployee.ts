import axios from "axios";
import { NextFunction, Request, Response } from "express";

export const deleteEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    await axios.delete(`http://localhost:3000/funcionarios/${id}`);

    return res.status(200).json({
      message: "Funcionário deletado com sucesso.",
    });
  } catch (error) {
    next(error);
  }
};
