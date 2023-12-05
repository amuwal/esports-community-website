import express from "express";
const router = express.Router();
import Blog from "../db/models/Blog.js";

// Get all blogs with brief details
router.get("/get-all-blogs", async (req, res) => {
  try {
    const blogs = await Blog.find({}, "title author timestamp image"); 
    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get featured blogs for homepage
router.get("/get-featured", async (req, res) => {
  try {
    const featuredBlogs = await Blog.find(
      { featured: true },
      "title author timestamp image"
    ); 
    res.json(featuredBlogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Get blog by ID with full details
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
