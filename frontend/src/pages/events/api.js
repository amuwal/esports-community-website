import axios from "axios";

// Function to fetch events for the events page
export const getEvents = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/events/eventpage-events`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching events for events page:", error);
    return [];
  }
};

export const getEventById = async (eventId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/events/${eventId}`
    );
    console.log("Data in getEventById:", response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching event by _id (${eventId}):`, error);
    return {};
  }
};
