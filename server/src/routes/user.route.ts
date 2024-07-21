import express from "express";
import {
  createCurrentUser,
  updateCurrentUser,
} from "../controllers/user.controller";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateUserRequest } from "../middlewares/validation";

const router = express.Router();

router.post("/", jwtCheck, createCurrentUser);

router.put("/", jwtCheck, jwtParse, validateUserRequest, updateCurrentUser);

export default router;
