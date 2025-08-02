import axios from "axios";
import { NextFunction, Request, Response } from "express";

export const updateEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { nome, cargo, salario } = req.body;
    const { id } = req.params;
    
    const response = await axios.patch(`http://localhost:3000/funcionarios/${id}`, { nome, cargo, salario });

    res.status(200).json({
      message: "Funcionário atualizado com sucesso.",
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
};''
