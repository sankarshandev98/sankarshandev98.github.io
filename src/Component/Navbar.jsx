import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const href =
    "https://drive.google.com/file/d/1Z8I0_ZJFcuqakPRvCgIrs4DpNVSuBT3A/view?usp=share_link";
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about me",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "project",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-10 text-white px-4 bg-blue-400 fixed">
      <div>
        <h1 className="text-2xl text-black font-signature ml-2 font-semibold">
          SG's Portfolio
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-semibold text-black hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <a
          className="text-black font-semibold ml-4"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-blue-500 text-black font-semibold">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 ">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <a
            className="text-black font-semibold mt-5"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </ul>
      )}
    </div>
  );
}
