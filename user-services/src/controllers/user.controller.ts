import { Request, Response } from "express";
// import { createUser } from "../services/user.service";

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  //   const user = await createUser(name, email, password);
  //   if (!user) return res.status(400).json({ message: "User already exists" });

  res.status(201).json({ message: "User  successfully" });
};
