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

export const updateCurrentUser = async (req: Request, res: Response) => {
  const { name, addressLine1, country, city } = req.body;

  const user = await User.findById(req.userId);

  if (!user)
    return res.status(404).send({ success: false, message: "User not found!" });

  user.name = name;
  user.addressLine1 = addressLine1;
  user.country = country;
  user.city = city;

  await user.save();

  try {
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error updating the user!" });
  }
};
