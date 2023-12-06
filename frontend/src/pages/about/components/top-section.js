import { Fade } from "react-awesome-reveal";

export default function TopSection() {
  return (
    <>
      <div className="flex justify-center items-center my-[100px]">
        <Fade duration={750} direction="down">
          <div className="flex flex-col items-center">
            <div className="text-[#5d6af2ff] uppercase font-bold">
              Darkside eSports
            </div>
            <div className="text-[35px] uppercase text-white font-extrabold">
              About us
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}
