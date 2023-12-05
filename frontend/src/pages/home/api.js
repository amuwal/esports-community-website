import axios from "axios";

export const getEvents = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/events/homepage-events`
    );
    console.log("response from getEvents:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};
