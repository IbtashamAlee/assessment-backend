import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { AuthRouter } from "./routes/authenticate";

dotenv.config();

const app: Express = express();
app.use(express.json());

const port = process.env.PORT;
const db = process.env.DATABASE_URL ? process.env.DATABASE_URL : "";

mongoose
  .connect(db)
  .then(() => {
    console.log("Datebase Connected!");
  })
  .catch(e => {
    console.log("Unable to Connect to database : Error => ", e);
  });

app.use("/api/v1/auth", AuthRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
