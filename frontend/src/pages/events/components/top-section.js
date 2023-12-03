import styled from "styled-components";

export default function TopSection() {
  const scrims = [
    {
      image: "https://i.ytimg.com/vi/wn8SYTRP_Sk/maxresdefault.jpg",
      title: "Paid and Practice Scrims",
      frequency: "daily",
      channelLink: "",
    },
    {
      image: "https://i.ytimg.com/vi/DyidozjKpbM/maxresdefault.jpg",
      title: "Weekly Warfare",
      frequency: "weekly",
      channelLink: "",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center px-[20px]">
      <div className="text-white flex flex-col gap-[5px] font-extrabold uppercase text-[40px] mt-[100px] mb-[90px] text-center">
        <div>Scrims and Tournaments</div>
        <div className="text-sm font-normal text-gray-300">
          Practice and Participate in Tournaments
        </div>
      </div>
      <div className="flex flex-col items-center sm:flex-row justify-center w-full gap-[30px]">
        {scrims.map((scrim) => {
          return (
            <Scrim key={scrim.title}>
              <div className="w-full h-[65%]">
                <img
                  className="h-full w-full rounded-tr-[16px] rounded-tl-[16px] object-cover"
                  src={scrim.image}
                  alt={scrim.title}
                />
              </div>
              <div className="p-[25px] h-[35%] flex flex-col items-start justify-center font-semibold text-white uppercase">
                <a className="hover:text-blue-400" href={scrim.channelLink}>
                  {scrim.title}
                </a>
                <div className="text-gray-300 text-sm">{scrim.frequency}</div>
              </div>
            </Scrim>
          );
        })}
      </div>
    </div>
  );
}

const Scrim = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 16px;
  width: 350px;
  max-width: 85vw;
  aspect-ratio: 1.3/1;
  background-color: #282828;
`;
