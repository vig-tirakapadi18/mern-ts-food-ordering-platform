import { Request, Response } from "express";
import User from "../models/user.model";

export const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) return res.status(200).send("User already exists!");

    const newUser = new User(req.body);
    await newUser.save();

    res.status(200).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating the user!");
  }
};
