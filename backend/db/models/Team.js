import mongoose from "mongoose";
import { nanoid } from "nanoid";

const teamSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(12),
  },
  name: String,
  role: String,
  discord_id_link: String,
  instagram_link: String,
  image: String,
});

const Team = mongoose.model("Team", teamSchema);

export default Team;
