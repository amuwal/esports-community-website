import styled from "styled-components";
import Event from "../../../shared/components/Event";

export default function TopSection({ events }) {
  return (
    <div className="w-full flex flex-col items-center px-[20px]">
      <div className="text-white flex flex-col gap-[5px] font-extrabold uppercase text-[40px] mt-[100px] mb-[90px] text-center">
        <div>Scrims and Tournaments</div>
        <div className="text-sm font-normal text-gray-300">
          Practice and Participate in Tournaments
        </div>
      </div>
      <div className="flex flex-col items-center sm:flex-row justify-center w-full gap-[30px]">
        {events.map((event) => {
          return <Event key={event._id} event={event} template="top" />;
        })}
      </div>
    </div>
  );
}
