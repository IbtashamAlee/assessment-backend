import mongoose from "mongoose";
import { IUser } from "../types";

const UserSchema: mongoose.Schema<IUser> = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export { UserModel };
