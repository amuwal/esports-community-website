import axios from "axios";

export const getStats = async () => {
  return [
    { name: "members", number: 75000 },
    { name: "events organized", number: 20 },
    { name: "teams", number: 9000 },
    { name: "streams", number: 500 },
  ];
};

const events = [
  {
    _id: "1",
    eventLogo: "/event-logo-1.png",
    eventName: "Rising Champions League",
    type: "past",
    date: "Sept 2021",
    teams: 1000,
    prizepool: "₹ 1,00,000",
  },
  {
    _id: "2",
    eventLogo: "/event-logo-2.png",
    eventName: "Omen Chanllenger Series",
    type: "upcoming",
    date: "Sept 2021",
    teams: 1000,
    prizepool: "₹ 1,00,000",
    tags: ["upcoming"],
  },
  {
    _id: "3",
    eventLogo: "/event-logo-3.png",
    eventName: "India Campus Championship",
    type: "past",
    date: "Sept 2022",
    teams: 1000,
    prizepool: "₹ 1,00,000",
  },
  {
    _id: "4",
    eventLogo: "/event-logo-4.png",
    eventName: "PMES",
    type: "ongoing",
    date: "Sept 2021",
    teams: 50000,
    prizepool: "₹ 10,00,000",
    tags: ["ongoing"],
  },
  {
    _id: "5",
    eventLogo: "/event-logo-5.png",
    eventName: "India Korea International",
    type: "past",
    date: "Aug 2022",
    teams: 1000,
    prizepool: "₹ 1,00,000",
  },
  {
    _id: "6",
    eventLogo: "/event-logo-6.png",
    eventName: "Brother In Blood League",
    type: "past",
    date: "Sept 2021",
    teams: 1000,
    prizepool: "₹ 1,00,000",
  },
  {
    _id: "7",
    eventLogo: "/event-logo-7.png",
    eventName: "All Stars Invitational",
    type: "past",
    date: "June 2020",
    teams: 500,
    prizepool: "₹ 40,000",
  },
];

export const getEvents = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/events/homepage-events`
    );
    console.log("response from getEvents:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error; // Propagate the error for handling in the calling component
  }
};
