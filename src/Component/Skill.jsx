import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import rct from "../assets/react.png";
import tail from "../assets/tailwind.png";
import node from "../assets/node.png";
import git from "../assets/github.png";
import mongo from "../assets/MongoDB.png";
import trello from "../assets/trl.png";
import vs from "../assets/vs.png";
import boot from "../assets/b.png";

export default function Skill() {
  const bskills = [
    {
      id: 1,
      b: rct,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      b: node,
      style: "shadow-orange-500",
    },
    {
      id: 3,
      b: mongo,
      style: "shadow-orange-500",
    },
  ];
  const fskills = [
    {
      id: 1,
      f: html,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      f: css,
      style: "shadow-orange-500",
    },
    {
      id: 3,
      f: tail,
      style: "shadow-orange-500",
    },
    {
      id: 4,
      f: boot,
      style: "shadow-orange-500",
    },
    {
      id: 5,
      f: js,
      style: "shadow-orange-500",
    },
    {
      id: 6,
      f: rct,
      style: "shadow-orange-500",
    },
  ];
  const tools = [
    {
      id: 1,
      t: vs,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      t: git,
      style: "shadow-orange-500",
    },
    {
      id: 3,
      t: trello,
      style: "shadow-orange-500",
    },
  ];
  return (
    <div name="skills" className="w-full my-20 px-4">
      <p className="mx-5 inline text-xl sm:text-2xl md:text-4xl font-semibold border-b-4 border-blue-500">
        Skills
      </p>
      <div className="h-80 sm:h-96 md:h-screen">
        <p className="text-xl text-center md:my-10 sm:text-2xl md:text-4xl">
          Fronted
        </p>
        <div className="grid grid-rows-3 grid-cols-3 justify-items-center items-center gap-3 gap-y-10 m-4">
          {fskills.map(({ id, f, style }) => (
            <div key={id}>
              <img
                src={f}
                alt=""
                className={`w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 object-contain ${style} shadow-md hover:scale-105 duration-500 p-1 rounded-lg`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="h-40 sm:h-56 md:h-80">
        <p className="text-xl text-center md:mb-10 sm:text-2xl md:text-4xl">
          Backend
        </p>
        <div className="grid grid-rows-1 grid-cols-3 justify-items-center items-center gap-3 gap-y-10 m-4">
          {bskills.map(({ id, b, style }) => (
            <div key={id}>
              <img
                src={b}
                alt=""
                className={`w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 object-contain ${style} shadow-md hover:scale-105 duration-500 p-1 rounded-lg`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="h-40 sm:h-56 md:h-80">
        <p className="text-xl text-center md:mb-10 sm:text-2xl md:text-4xl">
          Tools that i use
        </p>
        <div className="grid grid-rows-1 grid-cols-3 justify-items-center items-center gap-3 gap-y-10 m-4">
          {tools.map(({ id, t, style }) => (
            <div key={id}>
              <img
                src={t}
                alt=""
                className={`w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 object-contain ${style} shadow-md hover:scale-105 duration-500 p-1 rounded-lg`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
