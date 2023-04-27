import React from "react";

const About = () => {
  return (
    <div
      id="about"
      name="about me"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white pb-20 about section"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-10">
          <p
            className="text-3xl font-bold inline border-b-4 border-gray-500"
            id="user-detail-name"
          >
            About Me
          </p>
        </div>
        <p className="text-xl mt-20 leading-normal" id="user-detail-intro">
          A motivated Mern Stack Web Developer, experiences working with
          React.JS, Next.Js, Node.js, Express.JS, MongoDB, etc. Curious to learn
          & have capability to adapt the latest web technologies. Also i have
          develop a deep understanding of the start-up ecosystem. Looking
          forward to starting a career as a web developer and making a
          significant contribution to an organization through dedicated effort &
          time.
        </p>
      </div>
    </div>
  );
};

export default About;
