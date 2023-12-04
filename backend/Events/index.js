import express from "express";
import Event from "../db/models/Event.js";

const router = express.Router();

// API route to get events for the homepage
router.get("/homepage-events", async (req, res) => {
  try {
    // Fetch events with 'home' in displaySections
    const homepageEvents = await Event.find({
      displaySections: { $in: ["home"] },
    });
    res.status(200).json(homepageEvents);
  } catch (error) {
    console.error("Error fetching homepage events:", error);
    res.status(500).send("Internal Server Error");
  }
});

// API route to get events for the event page
router.get("/eventpage-events", async (req, res) => {
  try {
    // Fetch events with 'featured', 'top', or 'past' in displaySections
    const eventpageEvents = await Event.find({
      displaySections: { $in: ["featured", "top", "past"] },
    });

    res.status(200).json(eventpageEvents);
  } catch (error) {
    console.error("Error fetching event page events:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to get an event by _id
router.get("/:eventId", async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    return res.status(200).json(event);
  } catch (error) {
    console.error("Error fetching event by _id:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
