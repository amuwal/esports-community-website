import axios from "axios";

// Function to fetch achievements
export const getAchievements = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/common/get-achievements`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching achievements:", error);
    return [];
  }
};
