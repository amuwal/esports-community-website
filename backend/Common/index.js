import express from "express";
import Team from "../db/models/Team.js";
import Achievement from "../db/models/Achievement.js";

const router = express.Router();

// API route to get all teams
router.get("/get-team", async (req, res) => {
  try {
    // Fetch all team
    const allTeams = await Team.find();

    res.status(200).json(allTeams);
  } catch (error) {
    console.error("Error fetching the team", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/get-achievements", async (req, res) => {
  try {
    // Fetch all achievements
    const allAchievements = await Achievement.find();

    res.status(200).json(allAchievements);
  } catch (error) {
    console.error("Error fetching achievements:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
