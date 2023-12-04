export default function TopSection({ event }) {
  return (
    <>
      <div className="flex flex-col gap-[20px] items-center justify-center my-[60px] uppercase">
        <div className="text-white text-center text-[40px] md:text-[50px] lg:text-[70px] font-extrabold">
          {event.title}
        </div>
        <div className="flex items-center justify-between w-[90vw] md:w-[500px] lg:w-[40%]">
          <div>
            <div className="text-[24px] font-extrabold text-white">
              {event.startDate || "15 Sept 2023"}
            </div>
            <div className="text-white">Start Date</div>
          </div>
          <div>
            <div className="text-[24px] font-extrabold text-white">
              {event.endDate || "24 Sept 2023"}
            </div>
            <div className="text-white">End Date</div>
          </div>
        </div>
      </div>
    </>
  );
}
