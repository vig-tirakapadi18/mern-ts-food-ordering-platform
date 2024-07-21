import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const handleValidateErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty)
    return res
      .status(400)
      .send({ success: false, message: validationErrors.array() });

  next();
};

export const validateUserRequest = [
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Name must be a string and should not be empty!"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("AddressLine1 must be a string and should not be empty!"),
  body("city")
    .isString()
    .notEmpty()
    .withMessage("City must be a string and should not be empty!"),
  body("country")
    .isString()
    .notEmpty()
    .withMessage("Country must be a string and should not be empty!"),
  handleValidateErrors,
];
