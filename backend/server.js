import express, { json } from "express";
import cors from "cors";

import db from "./db/index.js";
import adminRouter from "./admin.js";

import eventsRoutes from "./Events/index.js";
import commonRoutes from "./Common/index.js";
import blogRoutes from "./Blogs/index.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(json());
app.use(cors());
app.use(express.static("public"));

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.json("DSE backend home");
});

app.use("/admin", adminRouter);
app.use("/events", eventsRoutes);
app.use("/common", commonRoutes);
app.use("/blogs", blogRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
