import { Fade } from "react-awesome-reveal";
import Event from "../../../shared/components/Event/index.js";

export default function PastEventsSection({ events }) {
  return (
    <>
      <Fade direction="down" duration={750}>
        <div className="chakra-peth text-white font-extrabold uppercase text-[40px] my-[100px] mx-[30px] text-center">
          Past Tournaments
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
