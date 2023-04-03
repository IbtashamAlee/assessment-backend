import mongoose from "mongoose";

export interface ICategory extends mongoose.Document {
  name: string;
}

export interface ICar extends mongoose.Document {
  name: string;
  color: string;
  make: string;
  registrationNo: string;
  category: ICategory;
}

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
}
