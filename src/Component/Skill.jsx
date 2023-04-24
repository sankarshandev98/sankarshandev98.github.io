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
import chakra from "../assets/chakra.png";
import gitt from "../assets/git.png";
import post from "../assets/postman.png";
import type from "../assets/typescript.png";
import ex from "../assets/expressjs.png";
import nxt from "../assets/nextjs.png";
import redis from "../assets/redis.png";
import redux from "../assets/redux.png";
import rest from "../assets/restapi.png";

const Experience = () => {
  const fs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 3,
      src: tail,
      title: "Tailwind",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 4,
      src: chakra,
      title: "Chakra UI",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 5,
      src: boot,
      title: "BootStrap",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 6,
      src: trello,
      title: "Trello",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 7,
      src: js,
      title: "JavaScript",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 8,
      src: rct,
      title: "React",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 9,
      src: nxt,
      title: "Next.js",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 10,
      src: redux,
      title: "Redux",
      style: "shadow-md shadow-gray-700",
    },
  ];
  const bs = [
    {
      id: 1,
      src: js,
      title: "JavaScript",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 2,
      src: type,
      title: "TypeScript",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 4,
      src: node,
      title: "Node JS",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 5,
      src: ex,
      title: "express JS",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 6,
      src: rest,
      title: "RESTful Api",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 7,
      src: mongo,
      title: "MongoDB",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 8,
      src: redis,
      title: "Redis",
      style: "shadow-md shadow-gray-700",
    },
  ];
  const tools = [
    {
      id: 1,
      src: post,
      title: "Postman",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 2,
      src: gitt,
      title: "git",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 3,
      src: git,
      title: "GitHub",
      style: "shadow-md shadow-gray-700",
    },
    {
      id: 4,
      src: vs,
      title: "Vs Code",
      style: "shadow-md shadow-gray-700",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-8"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-3xl font-bold border-b-4 border-gray-500 p-2 inline">
            Front-End Skills
          </p>
          <p className="py-6">
            These are the frontend technologies that i use in my project & know
            well.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {fs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 h-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-3xl font-bold border-b-4 border-gray-500 p-2 inline">
            Back-End Skills
          </p>
          <p className="py-6">
            These are some backend technologies that i am familiar & I've worked
            with in my project.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {bs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 h-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-3xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tools
          </p>
          <p className="py-6">
            These are some of the tools that I've worked with.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tools.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 h-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
