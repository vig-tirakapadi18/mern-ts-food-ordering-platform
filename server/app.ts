import mongoose from "mongoose";
import userRoute from "./src/routes/user.route";

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_CONN_STR as string)
  .then(() => console.log("Connection established with MongoDB!"))
  .catch((err) => console.log(err));

app.use("/api/my/user", userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
