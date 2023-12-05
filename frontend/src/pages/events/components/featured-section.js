import Event from "../../../shared/components/Event/index.js";

export default function FeaturedSection({ events }) {
  return (
    <>
      <div className="text-white text-[36px] font-extrabold uppercase mx-[30px] my-[100px] text-center">
        Featured Events
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-[30px] px-[10px] mx-[20px] lg:mx-[50px] mb-[20px] gap-[20px]">
        {events.map((event) => {
          return (
            <Event key={event._id} event={event} template={event.template} />
          );
        })}
      </div>
    </>
  );
}