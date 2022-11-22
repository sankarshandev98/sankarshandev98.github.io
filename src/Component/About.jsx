import React from "react";

const About = () => {
  return (
    <div
      name="about me"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <p className="text-xl mt-20">
          Aspiring full stack web developer from India with 1200 hours+ of
          hands-on coding experience in building websites with MERN stack and
          various web technologies, including HTML5, CSS3, and JavaScript ES6.
          Curious to learn & adapt to the latest web technologies. Looking
          forward to starting a career as a web developer and making a
          significant contribution to an organization through dedicated effort &
          time.
        </p>
      </div>
    </div>
  );
};

export default About;
