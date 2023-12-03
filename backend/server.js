import express, { json } from "express";
import cors from "cors";

import db from "./db/index.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(json());
app.use(cors());

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.json("DSE backend home");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
