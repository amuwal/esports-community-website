import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
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
