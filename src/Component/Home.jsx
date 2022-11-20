import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
            I am a MERN Stack Developer
          </h2>
          <p className="py-4 max-w-md">
            1200 hours plus hands-on coding experience, working with
            technologies like ReactJS, node.JS, express.JS, MongoDB etc.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
