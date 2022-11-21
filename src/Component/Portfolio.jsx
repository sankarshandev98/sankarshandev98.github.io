import React from "react";
import jm1 from "../assets/portfolio/1.PNG";
import kfc1 from "../assets/portfolio/3.PNG";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import rct from "../assets/react.png";
import node from "../assets/node.png";
import git from "../assets/github.png";
import live from "../assets/web.png";

export default function Portfolio() {
  const project = [
    {
      id: 1,
      img: jm1,
      ic: git,
      ic2: live,
      title: "JioMart Website Clone",
      f1: "Signup & Login With Google, Facebook",
      f2: "Product Search & Filter",
      f3: "Responsive UI",
      git: "https://github.com/sankarshandev98/expensive-activity-2774/tree/main/jio-mart",
      live: "https://strong-truffle-00aad0.netlify.app/",
    },
    {
      id: 2,
      img: kfc1,
      ic: git,
      ic2: live,
      title: "KFC Website Clone",
      f1: "User authentication",
      f2: "Product Search & Filter",
      f3: "Impressive UI",
      git: "https://github.com/sankarshandev98/for-stick-2556",
      live: "https://symphonious-rolypoly-b8a660.netlify.app/index.html",
    },
  ];
  const techs = [
    {
      id: 1,
      src: html,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: rct,
      style: "shadow-slate-500",
    },
    {
      id: 5,
      src: node,
      style: "shadow-yellow-200",
    },
  ];
  return (
    <div name="project" className="w-full md:h-screen">
      <div className="max-w-screen-lg px-4 mx-auto w-full h-full">
        <div className="mb-20">
          <p className="text-4xl mx-5 font-bold inline border-b-4 border-blue-500">
            Project
          </p>
        </div>
        {project.map(({ id, img, title, f1, f2, f3, ic, ic2, git, live }) => (
          <div
            key={id}
            name="project-div"
            className="mb-5 shadow-blue-400 shadow-md rounded-lg p-5 flex flex-row justify-between space-x-4"
          >
            <div name="lft-sec" className="flex flex-col w-3/4">
              <h1 className="text-2xl pb-2 font-semibold">{title}</h1>
              <div className="mb-5 inline">
                <img
                  src={img}
                  alt=""
                  className="rounded-md hover:scale-105 duration-500"
                />
              </div>
              <p className="text-center mb-2 text-lg font-semibold">
                Tech Stack Used
              </p>
              <div className="flex flex-row justify-evenly items-center">
                {techs.map(({ id, src, style }) => (
                  <img
                    key={id}
                    src={src}
                    className={`shadow-md hover:scale-105 duration-500 p-1 rounded-lg w-14 h-14 ${style}`}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div name="rght-sec" className="flex flex-col w-1/4">
              <h1 className="text-center font-semibold mb-4">Key Features</h1>
              <div className="shadow-red-400 shadow-md rounded-md mx-2 h-10 text-sm flex items-center justify-center text-center mb-5 hover:scale-105 duration-500">
                {f1}
              </div>
              <div className="shadow-green-400 shadow-md rounded-md mx-2 h-10 text-sm flex items-center justify-center text-center mb-5 hover:scale-105 duration-500">
                {f2}
              </div>
              <div className="shadow-blue-400 shadow-md rounded-md mx-2 h-10 text-sm flex items-center justify-center text-center mb-5 hover:scale-105 duration-500">
                {f3}
              </div>
              <div className="shadow-orange-400 shadow-md rounded-md mx-2 h-10 text-sm flex items-center justify-center text-center mb-5 hover:scale-105 duration-500">
                {f2}
              </div>
              <div className="shadow-yellow-300 shadow-md rounded-md mx-2 h-10 text-sm flex items-center justify-center text-center mb-5 hover:scale-105 duration-500">
                {f2}
              </div>
              <div className="shadow-slate-500 shadow-md rounded-md mx-2 h-10 text-sm flex items-center justify-center text-center mb-5 hover:scale-105 duration-500">
                {f2}
              </div>
              <div className="flex flex-row h-14 mt-4 items-center justify-around">
                <button className="bg-blue-400 w-28 rounded-3xl h-8 flex flex-row items-center justify-evenly">
                  <a
                    className="flex flex-row items-center justify-between space-x-4"
                    href={git}
                    target="_blank"
                  >
                    <p>Code</p>
                    <span>
                      <img src={ic} alt="" className="w-5 h-5" />
                    </span>
                  </a>
                </button>
                <button className="bg-blue-400 w-28 rounded-3xl h-8 flex flex-row items-center justify-evenly">
                  <a
                    className="flex flex-row items-center justify-between space-x-4"
                    href={live}
                    target="_blank"
                  >
                    <p>Live</p>
                    <span>
                      <img src={ic2} alt="" className="w-5 h-5" />
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
