import axios from "axios";

// Function to fetch the team dynamically
export const getTeam = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/common/get-team`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching the team:", error);
    return [];
  }
};
