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
      class: "nav-link home",
    },
    {
      id: 2,
      link: "about me",
      class: "nav-link about",
    },
    {
      id: 3,
      link: "skills",
      class: "nav-link skills",
    },
    {
      id: 4,
      link: "project",
      class: "nav-link projects",
    },
    {
      id: 5,
      link: "contact",
      class: "nav-link contact",
    },
  ];
  return (
    <div
      className="flex justify-between items-center w-full h-10 text-white px-4 bg-blue-400 fixed"
      id="nav-menu"
    >
      <div>
        <h1 className="text-2xl text-black font-signature ml-2 font-semibold">
          SG's Portfolio
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, class: className }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-semibold text-black hover:scale-105 duration-200 ${className}`}
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <a
          className="text-black font-semibold ml-4 nav-link resume"
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
          {links.map(({ id, link, class: className }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 ${className}`}
            >
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
            className="text-black font-semibold mt-5 resume-link-1"
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
