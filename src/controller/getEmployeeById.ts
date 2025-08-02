import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { IEmployee } from "../types/employee";

export const getEmployeeById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const {data} = await axios.get<IEmployee>(`http://localhost:3000/funcionarios/${id}`)

        return res.status(200).json({
            message: "Funcionário encontrado com sucesso.",
            json: data
        })

    } catch (error) {
        next(error)
    }
}