import express from "express";
import Team from "./path-to-your-team-model"; // Update the path accordingly

const router = express.Router();

// API route to get all teams
router.get("/all-teams", async (req, res) => {
  try {
    // Fetch all teams
    const allTeams = await Team.find();

    res.status(200).json(allTeams);
  } catch (error) {
    console.error("Error fetching all teams:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
