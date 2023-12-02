import { useEffect, useState } from "react";
import { getAchievements } from "./api";

export default function Achievements() {
  const [achievements, setAchievements] = useState([]);

  const populateAchievements = async () => {
    setAchievements(await getAchievements());
  };

  useEffect(() => {
    populateAchievements();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-[1120px]:grid-cols-4 rounded-2xl bg-gray-800 mx-[35px] lg:mx-[100px] my-[100px]">
        {achievements.map((achievement) => {
          return (
            <div
              key={achievement.number}
              className="flex flex-col border-r-[3px] border-b-[3px] border-b-[#05152f] border-r-[#05152f] p-[15px] px-[40px] h-[180px]"
            >
              <div className="h-[60%]">
                <div className="text-[36px] font-extrabold text-white">
                  {achievement.number}
                </div>
              </div>
              <div className="h-[40%] flex justify-between items-center">
                <div>
                  <img
                    className="h-[30px] w-auto"
                    src={achievement.logo}
                    alt={achievement.heading}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-[#1defe9] uppercase text-[11px] font-bold">
                    {achievement.sub_heading}
                  </div>
                  <div className="text-white text-[20px] uppercase font-extrabold">
                    {achievement.heading}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
