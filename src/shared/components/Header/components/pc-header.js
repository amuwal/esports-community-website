import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";

const HeaderLink = styled(Link)`
  padding: 12px 20px;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  line-height: 17px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${(props) => (props.isactive ? "#5d6af2" : "transparent")};

  &:hover {
    background-color: #5d6af2;
  }
`;

const HeaderButton = styled.button`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  color: white;
  background-color: #5d6af2;
  border-radius: 5px;
  transition: all 0.2s ease;
  font-size: 16px;
  line-height: 17px;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    scale: 104%;
  }
`;

export default function PcHeader() {
  return (
    <div className="hidden lg:flex">
      <div className="my-[20px] mx-[80px] h-[80px] w-full flex items-center justify-between">
        <div className="h-full">
          <Link to={"/"}>
            <img className="h-[100%] w-auto" src="/dse-logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="flex gap-[5px]">
          <HeaderLink to={"/"} isactive={useMatch("/")}>
            home
          </HeaderLink>
          <HeaderLink to={"/about"} isactive={useMatch("/about")}>
            about
          </HeaderLink>
          <HeaderLink to={"/events"} isactive={useMatch("/events")}>
            events
          </HeaderLink>
          <HeaderLink to={"/contact"} isactive={useMatch("/contact")}>
            contact
          </HeaderLink>
        </div>
        <div>
          <HeaderButton>JOIN </HeaderButton>
        </div>
      </div>
    </div>
  );
}
