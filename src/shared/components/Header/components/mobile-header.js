import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = styled.div`
  position: fixed;
  right: ${(props) => (props.sidebaractive ? "0" : "-100%")};
  width: 380px;
  height: 100%;
  background-color: #333;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  gap: 40px;

  @media (max-width: 550px) {
    width: 340px;
  }

  @media (max-width: 450px) {
    width: 85vw;
  }
`;

const SidebarCloseButton = styled.button`
  position: absolute;
  top: 50px;
  right: 20px;
  color: white;
`;

const SidebarLink = styled(Link)`
  padding: 20px 16px;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  line-height: 17px;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.15s ease;

  &:hover {
    color: #5d6af2;
  }
`;

const SidebarButton = styled.button`
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

export default function MobileHeader() {
  const [sidebarActive, setSidebarActive] = useState(false);
  return (
    <>
      <div className="flex lg:hidden">
        <div className="my-[20px] mx-[30px] h-[80px] w-full flex items-center justify-between sm:mx-[80px]">
          <div className="h-full">
            <Link to={"/"}>
              <img className="h-[100%] w-auto" src="/dse-logo.png" alt="Logo" />
            </Link>
          </div>
          <div
            onClick={() => {
              setSidebarActive(!sidebarActive);
            }}
            className="text-white cursor-pointer"
          >
            open
          </div>
        </div>
        <Sidebar sidebaractive={sidebarActive ? "true" : undefined}>
          <SidebarCloseButton
            onClick={() => {
              setSidebarActive(!sidebarActive);
            }}
          >
            close
          </SidebarCloseButton>

          <div className="h-[70px]">
            <Link to={"/"}>
              <img className="h-[100%] w-auto" src="/dse-logo.png" alt="Logo" />
            </Link>
          </div>

          <div className="w-full pl-[5px] flex flex-col">
            <SidebarLink to={"/"}>home</SidebarLink>
            <SidebarLink to={"/about"}>about</SidebarLink>
            <SidebarLink to={"/events"}>events</SidebarLink>
            <SidebarLink to={"/contact"}>contact</SidebarLink>
          </div>

          <div className="w-full pl-[21px]">
            <SidebarButton>join</SidebarButton>
          </div>
        </Sidebar>
      </div>
    </>
  );
}
