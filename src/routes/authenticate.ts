import express, { Router } from "express";
import { signupController } from "../controllers/authenticationController";

const app: Router = express.Router();

app.post("/signup", signupController);

export { app as AuthRouter };
