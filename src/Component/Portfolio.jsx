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
import GitHubCalendar from "react-github-calendar";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: jm1,
    },
    {
      id: 2,
      src: kfc1,
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full pt-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-screen text-white pt-10">
          <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
            <div>
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                GitHub Statistics
              </p>
            </div>
            <div className="m-auto">
              <div className="pt-8">
                <GitHubCalendar username="sankarshandev98" />
              </div>
              <div className="m-auto w-full pt-8 flex flex-col lg:flex lg:flex-row md:flex md:flex-col gap-5 justify-between sm:flex sm:flex-col">
                <img
                  src="https://camo.githubusercontent.com/4cd88415a16c5b90cc86bab400cc59afd8dacad1448f63790a2d4d565385f304/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d73616e6b61727368616e646576393826"
                  alt=""
                />
                <img
                  src="https://camo.githubusercontent.com/21a630e6dc5debdf5b0c337fe5a5e6529160fdc6dc879c86ca3f42c8019cd469/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d73616e6b61727368616e64657639382673686f775f69636f6e733d74727565266c6f63616c653d656e"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
