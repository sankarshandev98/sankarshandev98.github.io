import React from "react";
import HeroImage from "../assets/heroImage.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <div name="home" className="h-screen w-full ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <div>
            <img
              src={HeroImage}
              alt="hero"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
          <h2 className="inline ml-5 text-xl sm:text-2xl md:text-4xl font-semibold">
            Sankarshan Goswami, An Aspiring MERN STACK Developer
          </h2>
        </div>
      </div>
    </div>
  );
}
