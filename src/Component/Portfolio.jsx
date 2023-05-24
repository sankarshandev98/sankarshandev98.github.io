import React from "react";
import charge from "../assets/portfolio/1.jpeg";
import kfc1 from "../assets/portfolio/2.jpg";
import hd from "../assets/portfolio/3.PNG";
import sk from "../assets/portfolio/4.PNG";
import ecom from "../assets/portfolio/5.png";
import note from "../assets/portfolio/note.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import rct from "../assets/react.png";
import router from "../assets/router.png";
import tail from "../assets/tailwind.png";
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
      src: ecom,
      title: "Ecom (flipkart clone)",
      des: "This is a Ecommerce website, where user can find and purchase many type of garments products etc.",
      f1: "Production Grade Responsive (upto 320px)",
      f2: "Sorting, Flitering, Pagination",
      f3: "User Authentication",
      f4: "Web app",
      f5: "Upto the mark UI & UX",
      ts1: rct,
      ts2: router,
      ts3: js,
      ts4: tail,
      ts5: chakra,
      demo: "https://ecom-k94m.onrender.com",
      git: "https://github.com/sankarshandev98/Ecom-WebApp",
    },
    {
      id: 2,
      src: charge,
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
      id: 3,
      src: sk,
      title: "Skill-UP",
      des: "Skill-Up is a global destination for teaching and learning online. It is a unique project where a user and admin can both login in different pages and changes made in a admin's page , can be seen in the user's page.",
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
      id: 4,
      src: note,
      title: "Note Taking Web-App",
      des: "This is a note assign & taking app. Admin can assign, add, remove and edit note & role.",
      f1: "User Authentication",
      f2: "Admin dashboard",
      f3: "Mobile Responsive",
      f4: "MERN stack",
      f5: "Good UI & UX",
      ts1: rct,
      ts2: router,
      ts3: expre,
      ts4: js,
      ts5: mongo,
      demo: "https://mern-note.onrender.com/",
      git: "https://github.com/sankarshandev98/MERN-NOTE",
    },
    {
      id: 5,
      src: kfc1,
      title: "KFC Clone",
      des: "This is a beverages & food website, where user can find and order many type of beverages & soft drinks also find restaurants, so this is all about the website.",
      f1: "User Authentication",
      f2: "Sorting & Filter Products",
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
      id: 6,
      src: hd,
      title: "HeadphoneZone Clone",
      des: "This is a Ecommerce website, where user can find and purchase many type of audio related products like headphone, earphone, etc.",
      f1: "User Authentication",
      f2: "Sorting & Filter Products",
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
      id="projects"
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
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg project-card"
              >
                <div className="p-2">
                  <h1 className="project-title">{title}</h1>
                </div>
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 w-full h-64 object-fill"
                />
                <div className="p-4 w-full md:h-32 sm:h-32">
                  <p className="project-description">{des}</p>
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
                <div className="flex items-center justify-around mt-10 project-tech-stack">
                  <img src={ts1} alt="" className="w-10 h-10 object-fill" />
                  <img src={ts2} alt="" className="w-10 h-10 object-fill" />
                  <img src={ts3} alt="" className="w-10 h-10 object-fill" />
                  <img src={ts4} alt="" className="w-10 h-10 object-fill" />
                  <img src={ts5} alt="" className="w-10 h-10 object-fill" />
                </div>
                <div className="flex items-center justify-around pt-5 pb-3">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border rounded-lg project-deployed-link"
                  >
                    <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>
                  <a
                    href={git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border rounded-lg project-github-link"
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
              <div className="pt-8 flex justify-center react-activity-calendar">
                <GitHubCalendar username="sankarshandev98" />
              </div>
              <div className="m-auto w-full pt-8 flex flex-col gap-5 justify-between">
                <img
                  src="https://github-readme-streak-stats.herokuapp.com?user=sankarshandev98"
                  alt=""
                  id="github-streak-stats"
                  className="m-auto"
                />
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=sankarshandev98"
                  alt=""
                  id="github-top-langs"
                  className="m-auto"
                />
                <img
                  src="https://github-readme-stats.vercel.app/api?username=sankarshandev98"
                  alt=""
                  id="github-stats-card"
                  className="m-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
