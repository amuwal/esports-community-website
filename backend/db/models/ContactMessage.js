import mongoose from "mongoose";
import { nanoid } from "nanoid";

const contactMessageSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(12),
  },
  name: String,
  email: String,
  phone: String,
  message: String,
  time: {
    type: Date,
    default: Date.now,
  },
});

const ContactMessage = mongoose.model("ContactMessage", contactMessageSchema);

export default ContactMessage;
