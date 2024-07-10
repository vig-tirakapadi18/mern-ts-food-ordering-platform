import { Request, Response } from "express";
import mongoose from "mongoose";

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_CONN_STR as string)
  .then(() => console.log("Connection established with MongoDB!"))
  .catch((err) => console.log(err));

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "Working!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
