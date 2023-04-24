import React from "react";
import jm1 from "../assets/portfolio/1.jpeg";
import kfc1 from "../assets/portfolio/2.jpg";
import hd from "../assets/portfolio/3.PNG";
import sk from "../assets/portfolio/4.PNG";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import rct from "../assets/react.png";
import boot from "../assets/b.png";
import chakra from "../assets/chakra.png";
import expre from "../assets/expressjs.png";
import mongo from "../assets/MongoDB.png";
import node from "../assets/node.png";
import nxt from "../assets/nextjs.png";
import GitHubCalendar from "react-github-calendar";

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: jm1,
      title: "ChargeNow",
      des: "Chargenow is a subscription management system which can help you handle all the aspects of the subscription life cycle including recurring billing, invoicing and trial management for your customers.",
      f1: "User Authentication",
      f2: "Email System",
      f3: "Back-end Add service",
      f4: "Mobile Responsive",
      f5: "Web app",
      ts1: nxt,
      ts2: js,
      ts3: chakra,
      ts4: node,
      ts5: mongo,
      demo: "https://abandoned-reaction-8426-dhamisir.vercel.app/",
      git: "https://github.com/sankarshandev98/Chargenow",
    },
    {
      id: 2,
      src: sk,
      title: "Skill-UP",
      des: "Skill-Up is a global destination for teaching and learning online. It is a unique project where a user and admin can both login in different pages and changes made in a admin's page , can be seen in the user's page",
      f1: "User Authentication",
      f2: "Admin dashboard",
      f3: "Dark mode",
      f4: "Cart functionality",
      f5: "Mobile Responsive",
      ts1: rct,
      ts2: node,
      ts3: expre,
      ts4: js,
      ts5: mongo,
      demo: "https://skill-up-habitual-oatmeal.netlify.app/",
      git: "https://github.com/sankarshandev98/SkillUp",
    },
    {
      id: 3,
      src: hd,
      title: "KFC Clone",
      des: "This is a beverages & food website, where user can find and order many type of beverages & soft drinks also find restaurants, so this is all about the website.",
      f1: "User Authentication",
      f2: "Filter Products",
      f3: "Search Functionality",
      f4: "Add to cart",
      f5: "Web app",
      ts1: html,
      ts2: css,
      ts3: js,
      ts4: boot,
      ts5: chakra,
      demo: "https://symphonious-rolypoly-b8a660.netlify.app/index.html",
      git: "https://github.com/sankarshandev98/KFC-clone",
    },
    {
      id: 4,
      src: kfc1,
      title: "HeadphoneZone Clone",
      des: "This is a Ecommerce website, where user can find and purchase many type of audio related products like headphone, earphone, etc.",
      f1: "User Authentication",
      f2: "Filter Products",
      f3: "Search Functionality",
      f4: "Add to cart",
      f5: "Web app",
      ts1: html,
      ts2: css,
      ts3: js,
      ts4: boot,
      ts5: chakra,
      demo: "https://dulcet-entremet-004c13.netlify.app/",
      git: "https://github.com/sankarshandev98/headphonezone-clone",
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

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 px-12 sm:px-0 justify-center">
          {portfolios.map(
            ({
              id,
              src,
              title,
              des,
              f1,
              f2,
              f3,
              f4,
              f5,
              ts1,
              ts2,
              ts3,
              ts4,
              ts5,
              demo,
              git,
            }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <div className="p-2">
                  <h1>{title}</h1>
                </div>
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="p-4">
                  <p>{des}</p>
                </div>
                <div className="pl-8">
                  <ol style={{ listStyleType: "decimal" }}>
                    <li>{f1}</li>
                    <li>{f2}</li>
                    <li>{f3}</li>
                    <li>{f4}</li>
                    <li>{f5}</li>
                  </ol>
                </div>
                <div className="flex items-center justify-around mt-10">
                  <img src={ts1} alt="" className="w-10 h-10" />
                  <img src={ts2} alt="" className="w-10 h-10" />
                  <img src={ts3} alt="" className="w-10 h-10" />
                  <img src={ts4} alt="" className="w-10 h-10" />
                  <img src={ts5} alt="" className="w-10 h-10" />
                </div>
                <div className="flex items-center justify-around pt-5 pb-3">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border rounded-lg"
                  >
                    <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>
                  <a
                    href={git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border rounded-lg"
                  >
                    <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
        <div className="w-full h-full text-white pt-10">
          <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
            <div>
              <p className="text-3xl font-bold inline border-b-4 border-gray-500">
                GitHub Statistics
              </p>
            </div>
            <div>
              <div className="pt-8 flex justify-center">
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
