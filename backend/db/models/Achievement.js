import mongoose from "mongoose";
import { nanoid } from "nanoid";

const achievementSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(12),
  },
  sub_heading: {
    type: String,
  },
  heading: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
});

const Achievement = mongoose.model("Achievement", achievementSchema);

export default Achievement;
