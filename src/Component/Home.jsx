import React from "react";
import HeroImage from "../assets/heroImage.png";
import { FaFileDownload } from "react-icons/fa";
const Home = () => {
  const href = "Sankarshan_Goswami_Resume.pdf";
  const download = true;
  return (
    <div
      id="home"
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:gap-3">
        <div className="pt-3">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full sm:w-200px sm:h-200px mx-auto w-1/2 md:w-full md:gap-2 home-img"
          />
        </div>
        <div className="flex flex-col justify-center h-auto items-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white pb-1 text-center md:pb-5 pt-16">
            Hello, I am Sankarshan Goswami
          </h2>
          <a
            className="group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer gap-2 resume-link-2"
            href={href}
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            Resume <FaFileDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
