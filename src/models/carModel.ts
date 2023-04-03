import mongoose from "mongoose";
import { ICar } from "../types";

const carSchema: mongoose.Schema<ICar> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  registrationNo: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const CarModel = mongoose.model<ICar>("car", carSchema);

export { CarModel };
