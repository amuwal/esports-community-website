export default function TopSection({ event }) {
  return (
    <>
      <div className="flex flex-col gap-[20px] items-center justify-center my-[60px] uppercase">
        <div className="text-white text-center text-[40px] md:text-[50px] lg:text-[70px] font-extrabold">
          {event.title}
        </div>
        <div className="flex items-center justify-center w-[90vw] md:w-[500px] lg:w-[40%]">
          <div>
            <div className="text-[24px] font-extrabold text-white">
              {event.dailyMatchesCount || 3} matches everyday
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
