import { useEffect, useState } from "react";
import { getStats } from "../api";
import styled from "styled-components";

const StatNumber = styled.div`
  font-size: 70px;
  color: white;

  &:hover {
    color: #5d6af2;
  }

  @media (max-width: 1200px) {
    font-size: 60px;
  }

  @media (max-width: 950px) {
    font-size: 50px;
  }

  @media (max-width: 700px) {
    font-size: 40px;
  }

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

const StatName = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: white;
  padding: 4px 16px;
  background-color: #5d6af2;
  border-radius: 3px;
`;

export default function Stats() {
  const [stats, setStats] = useState([]);

  const populateStats = async () => {
    setStats(await getStats());
  };

  useEffect(() => {
    populateStats();
  }, []);

  return (
    <div className="stats grid gap-[20px] grid-cols-1 py-[30px] px-[10px] mx-[30px] my-[20px] justify-evenly items-center sm:grid-cols-2 lg:grid-cols-4 rounded-md border-gray-400 border-[1px]">
      {stats.map((stat) => {
        return (
          <div
            key={stat.name}
            className="stat flex flex-col items-center gap-[10px]"
          >
            <StatNumber>{stat.number}+</StatNumber>
            <StatName>{stat.name}</StatName>
          </div>
        );
      })}
    </div>
  );
}
