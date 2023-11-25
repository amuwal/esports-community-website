export const getStats = async () => {
  return [
    { name: "members", number: 75000 },
    { name: "events organized", number: 20 },
    { name: "teams", number: 9000 },
    { name: "streams", number: 500 },
  ];
};

export const getEvents = async () => {
  return [
    {
      eventLogo: "/event-logo-1.png",
      eventName: "Rising Champions League",
      type: "past",
      date: "Sept 2021",
      teams: 1000,
      prizepool: "₹ 1,00,000",
    },
    {
      eventLogo: "/event-logo-2.png",
      eventName: "Omen Chanllenger Series",
      type: "upcoming",
      date: "Sept 2021",
      teams: 1000,
      prizepool: "₹ 1,00,000",
      tags: ["upcoming"],
    },
    {
      eventLogo: "/event-logo-3.png",
      eventName: "India Campus Championship",
      type: "past",
      date: "Sept 2022",
      teams: 1000,
      prizepool: "₹ 1,00,000",
    },
    {
      eventLogo: "/event-logo-4.png",
      eventName: "PMES",
      type: "ongoing",
      date: "Sept 2021",
      teams: 50000,
      prizepool: "₹ 10,00,000",
      tags: ["ongoing"],
    },
    {
      eventLogo: "/event-logo-5.png",
      eventName: "India Korea International",
      type: "past",
      date: "Aug 2022",
      teams: 1000,
      prizepool: "₹ 1,00,000",
    },
    {
      eventLogo: "/event-logo-6.png",
      eventName: "Brother In Blood League",
      type: "past",
      date: "Sept 2021",
      teams: 1000,
      prizepool: "₹ 1,00,000",
    },
    {
      eventLogo: "/event-logo-7.png",
      eventName: "All Stars Invitational",
      type: "past",
      date: "June 2020",
      teams: 500,
      prizepool: "₹ 40,000",
    },
  ];
};
