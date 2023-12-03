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
    eventLogo:
      "https://1.bp.blogspot.com/-OnqZ9O7FnQo/YO0BzTAb0EI/AAAAAAAAA8w/8r6h_NwNnlM_oy7FbPZsfPwj8VR6ih5XgCLcBGAsYHQ/s1280/Pubg%2Bthumbnail%2Bby%2Bsorif%2B%252820%2529.png",
    eventName: "Tier-2 Scrims",
    type: "past",
    date: "Sept 2021",
    teams: 1000,
    prizepool: "₹ 1,00,000",
    template: "2",
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
    type: "ongoing",
    date: "Sept 2022",
    teams: 1000,
    prizepool: "₹ 20,000",
    tags: ["ongoing"],
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
  return events;
};

export const getEventById = async (event_id) => {
  const index = events.findIndex((event) => event._id === event_id);
  console.log(events[index], index);
  return events[index];
};
