import { useEffect, useState } from "react";
import Footer from "../../shared/components/Footer/index.js";
import Header from "../../shared/components/Header/index.js";
import FeaturedSection from "./components/featured-section.js";
import PastEventsSection from "./components/past-events.js";
import TopSection from "./components/top-section.js";
import { getEvents } from "./api.js";

export default function Events() {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [topEvents, setTopEvents] = useState([]);

  const populateEvents = async () => {
    try {
      // Fetch all events
      const allEvents = await getEvents();

      // Filter events for featured section
      const featuredEvents = allEvents
        .filter((event) => event.displaySections.includes("featured"))
        .sort((a, b) => {
          // Sort by type: 'REGULAR' comes first
          if (a.type === "REGULAR" && b.type !== "REGULAR") return -1;
          if (a.type !== "REGULAR" && b.type === "REGULAR") return 1;
          return 0;
        });
      setFeaturedEvents(featuredEvents);

      // Filter events for past section
      const pastEvents = allEvents.filter((event) =>
        event.displaySections.includes("past")
      );
      setPastEvents(pastEvents);

      // Filter events for top section
      const topEvents = allEvents.filter((event) =>
        event.displaySections.includes("top")
      );

      // Show template 2 events before default template events
      setTopEvents(topEvents);
    } catch (error) {
      console.error("Error populating events:", error);
    }
  };

  useEffect(() => {
    populateEvents();
  }, []);

  return (
    <>
      <Header />
      <TopSection events={topEvents} />
      <FeaturedSection events={featuredEvents} />
      <PastEventsSection events={pastEvents} />
      <Footer />
    </>
  );
}
