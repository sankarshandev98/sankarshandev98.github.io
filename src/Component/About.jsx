import React from "react";

const About = () => {
  return (
    <div
      name="about me"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white pb-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <p className="text-xl mt-20 lh-20">
          A motivated Full Stack Web Developer from india with 1200 hours+ of
          hands-on coding experience in building websites with React.JS,
          Node.js, Express.JS, MongoDB, etc and various web technologies,
          including HTML5, CSS3, and JavaScript ES6. I have Strong coding and
          design skills also good command over Data Structures & Algorithms. I
          also have the ability to produce bug-free and production-grade code
          also experience working with systems that are asynchronous, RESTful
          and demand concurrency. Curious to learn & adapt to the latest web
          technologies also i have develop a deep understanding of the start-up
          ecosystem. Looking forward to starting a career as a web developer and
          making a significant contribution to an organization through dedicated
          effort & time.
        </p>
      </div>
    </div>
  );
};

export default About;
