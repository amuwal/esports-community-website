import { useEffect, useState } from "react";
import Event from "../../../shared/components/Event";
import { getEvents } from "../api.js";

export default function Events() {
  const [events, setEvents] = useState([]);

  const populateEvents = async () => {
    setEvents(await getEvents());
  };

  useEffect(() => {
    populateEvents();
  }, []);

  return (
    <>
      <div className="mt-[50px] my-[30px] text-center">
        <div className=" events-heading text-[25px] text-center text-white uppercase font-bold">
          Events
        </div>
        <div className="events-heading text-[12px] text-center text-white uppercase">
          Best of the events organized by us
        </div>
      </div>
      <div className="events grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-[30px] px-[10px] mx-[20px] mb-[20px] gap-[20px]">
        {events.slice(0, 6).map((event) => {
          return <Event key={event.eventName} event={event} />;
        })}
      </div>
    </>
  );
}
