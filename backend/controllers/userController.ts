import { Request, Response } from "express";
import UserModel, { UserInterface } from "../models/userModel";

export const getUsers = async (req: Request, res: Response) => {
  const { limit = 10, skip = 0, q = "" } = req.query;

  try {
    const users: UserInterface[] = await UserModel.find({ name: new RegExp("^" + q, "i") })
      .limit(Number(limit))
      .skip(Number(skip));
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user: UserInterface | null = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req: Request<unknown, unknown, UserInterface, unknown>, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const newUser: UserInterface = await UserModel.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};
