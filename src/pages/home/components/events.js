import { useEffect, useState } from "react";
import { getEvents } from "../api";
import styled from "styled-components";

const Event = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 10px;
  aspect-ratio: 1/1.2;
  padding: 10px 20px 10px 20px;

  &:hover {
    border: 1px solid #5d6af2;
  }
`;

const Tag = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  color: ${(props) => (props.tag === "ongoing" ? "#0de40d" : "#ff00ff")};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bolder;
`;

const WatchButton = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  color: white;
  text-transform: uppercase;
  font-size: 15px;
  background-color: #5d6af2;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    scale: 102%;
  }
`;

export default function Events() {
  const [events, setEvents] = useState([]);

  const populateEvents = async () => {
    setEvents(await getEvents());
  };

  useEffect(() => {
    populateEvents();
  }, []);

  return (
    <>
      <div className="mt-[50px] my-[30px] text-center">
        <div className=" events-heading text-[25px] text-center text-white uppercase font-bold">
          Events
        </div>
        <div className="events-heading text-[12px] text-center text-white uppercase">
          Best of the events organized by us
        </div>
      </div>
      <div className="events grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-[30px] px-[10px] mx-[20px] mb-[20px] gap-[20px]">
        {events.slice(0, 6).map((event) => {
          return (
            <Event key={event.eventName}>
              <div className="h-[50%] w-full flex items-center gap-[25px] border-b-[1px]">
                <img
                  className="w-[100px] min-[320px]:w-[100px] min-[400px]:w-[120px]  md:w-[120px] h-[auto] transition-all hover:scale-105"
                  src={event.eventLogo}
                  alt={event.eventName}
                />
                <div className="text-white uppercase min-[320px]:text-[14px] min-[400px]:text-[18px] sm:text-[16px] md:text-[20px] lg:text-[17px] xl:text-[22px] 2xl:text-[24px] font-bold flex justify-center items-center flex-grow">
                  {event.eventName}
                </div>
              </div>

              <div className="h-[50%] flex flex-col items-center justify-evenly">
                <div className="flex w-full justify-evenly">
                  <div className=" text-white text-[24px] font-bold uppercase flex flex-col items-center gap-[20px]">
                    <div className="text-[12px]">
                      <img
                        className="h-[40px] aspect-square"
                        src="https://store-images.s-microsoft.com/image/apps.61549.13695741898563888.a55c84af-2860-4662-8505-864b03df8b0d.88ae2bb4-e5dc-4d8a-8f90-c855ff00754d"
                        alt="time"
                      />
                    </div>
                    <p className="text-[12px]">{event.date}</p>
                  </div>
                  <div className="text-white text-[24px] font-bold uppercase flex flex-col items-center">
                    <p className="text-[12px] h-[40px] aspect-square flex items-center justify-center">
                      Prizepool
                    </p>
                    <p>{event.prizepool}</p>
                  </div>
                  <div className="text-white text-[17px] font-bold uppercase flex flex-col items-center gap-[20px]">
                    <div className=" text-[12px] h-[40px] aspect-square flex items-center justify-center">
                      Slots
                    </div>
                    <div className=" text-[12px]">{event.teams}</div>
                  </div>
                </div>
                <div className="w-full">
                  <WatchButton>watch</WatchButton>
                </div>
                <Tag tag={event.type}>
                  {["ongoing", "upcoming"].includes(event.type)
                    ? event.type
                    : ""}{" "}
                </Tag>
              </div>
            </Event>
          );
        })}
      </div>
    </>
  );
}
