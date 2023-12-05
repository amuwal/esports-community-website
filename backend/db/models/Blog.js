import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const blogSchema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(12),
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Blog = model("Blog", blogSchema);
export default Blog;
