import { getEvents } from "../api.js";
import { useEffect, useState } from "react";
import Event from "../../../shared/components/Event/index.js";

export default function PastEventsSection() {
  const [events, setEvents] = useState([]);

  const populateEvents = async () => {
    setEvents(await getEvents());
  };

  useEffect(() => {
    populateEvents();
  }, []);

  return (
    <>
      <div className="text-white font-extrabold uppercase text-[40px] my-[100px] mx-[30px] text-center">
        Past Tournaments
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-[30px] px-[10px] mx-[20px] lg:mx-[50px] mb-[20px] gap-[20px]">
        {events.slice(3, 7).map((event) => {
          return <Event key={event.eventName} event={event} />;
        })}
      </div>
    </>
  );
}
