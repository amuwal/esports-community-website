import styled from "styled-components";
import { getEvents } from "../api.js";
import { useEffect, useState } from "react";
import Event from "../../../shared/components/Event/index.js";

export default function FeaturedSection() {
  const [events, setEvents] = useState([]);

  const populateEvents = async () => {
    setEvents(await getEvents());
  };

  useEffect(() => {
    populateEvents();
  }, []);

  return (
    <>
      <div className="text-white text-[36px] font-extrabold uppercase mx-[30px] my-[100px] text-center">
        Featured Events
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-[30px] px-[10px] mx-[20px] lg:mx-[50px] mb-[20px] gap-[20px]">
        {events.slice(0, 3).map((event) => {
          return (
            <Event
              key={event.eventName}
              event={event}
              template={event.template}
            />
          );
        })}
      </div>
    </>
  );
}

const FeaturedEvent = styled.div``;
