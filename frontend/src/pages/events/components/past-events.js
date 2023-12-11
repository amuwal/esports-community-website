import { Fade } from "react-awesome-reveal";
import Event from "../../../shared/components/Event/index.js";

export default function PastEventsSection({ events }) {
  return (
    <>
      <Fade direction="down" duration={750}>
        <div className="flex justify-center items-center">
          <div className="chakra-peth text-white text-[36px] font-extrabold uppercase mx-[30px] my-[100px] text-center border-b-[3px] border-b-[#1defe9ff]">
            Past Events
          </div>
        </div>
      </Fade>
      <div className="chakra-peth grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-[30px] px-[10px] mx-[20px] lg:mx-[80px] mb-[20px] gap-[20px]">
        {events.map((event) => {
          return <Event key={event._id} event={event} />;
        })}
      </div>
    </>
  );
}
