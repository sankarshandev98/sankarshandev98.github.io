import React from "react";
import HeroImage from "../assets/heroImage.png";

const Home = () => {
  const href = "/Sankarshan-Goswami-Resume.pdf";
  const download = true;
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white pb-8">
            Hello, I am Sankarshan Goswami !
          </h2>
          <a
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            href={href}
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
