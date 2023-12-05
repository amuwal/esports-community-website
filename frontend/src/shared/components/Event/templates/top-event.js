import styled from "styled-components";

const Event = styled.div`
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

export default function TopEvent({ event }) {
  return (
    <>
      <Event key={event._id}>
        <div className="w-full h-[65%]">
          <img
            className="h-full w-full rounded-tr-[16px] rounded-tl-[16px] object-cover"
            src={event.titleImage}
            alt={event.title}
          />
        </div>
        <div className="p-[25px] h-[35%] flex flex-col items-start justify-center font-semibold text-white uppercase">
          <a className="hover:text-blue-400" href={event.discord_channel_link}>
            {event.title}
          </a>
          <div className="text-gray-300 text-sm">{event.frequency}</div>
        </div>
      </Event>
    </>
  );
}
