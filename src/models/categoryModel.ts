import mongoose from "mongoose";
import { ICategory } from "../types";

const categorySchema: mongoose.Schema<ICategory> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const CategoryModel = mongoose.model<ICategory>("category", categorySchema);

export { CategoryModel };
