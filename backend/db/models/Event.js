import mongoose from "mongoose";
import { nanoid } from "nanoid";

const eventSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(12),
  },
  type: {
    type: String,
    enum: ["REGULAR", "ONETIME"],
    default: ["ONETIME"],
  },
  status: {
    type: String,
    enum: ["UPCOMING", "OPEN", "ONGOING", "ENDED"],
    default: "UPCOMING",
  },
  displaySections: {
    type: [String],
    default: ["home"],
  },
  template: String,
  image: String,
  title: String,
  time: String,
  entry: Number,
  prizepool: Number,
  teams: Number,
  stages: Number,
  matches: Number,
  start_date: Date,
  end_date: Date,
  discord_channel_link: String,
  frequency: String,
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
