import styled from "styled-components";

export default function TopSection() {
  return (
    <>
      <div className="h-[90vh] relative">
        <div class="absolute inset-0 bg-gradient-to-t from-[#05152f] via-transparent to-[#05152f]"></div>
        <img
          src="https://wallpapercave.com/wp/wp4390615.jpg"
          alt="Main"
          class="w-full h-full object-cover "
        />

        <div className="absolute inset-0 flex justify-center items-center  left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2  max-w-[85vw] lg:w-[70%]">
          <div className="text-white text-[40px] lg:text-[60px] text-center font-extrabold uppercase">
            Become part of amazing Esport community
          </div>
        </div>
      </div>
    </>
  );
}

const Wrapper = styled.div`
  background-image: url("https://themes10.win/wp-content/uploads/2020/02/cool-pubg-wallpapers.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
