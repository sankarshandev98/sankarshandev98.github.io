import React from "react";

export default function About() {
  return (
    <div name="about me" className="w-full h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-20">
          <p className="inline ml-5 text-xl sm:text-2xl md:text-4xl font-semibold border-b-4 border-blue-500">
            About Me
          </p>
        </div>
        <p className="text-xl">
          An Aspiring full stack web developer with 1200 hours+ of hands-on
          coding experience in building websites with MERN stack and various web
          technologies, including HTML5, CSS3, and JavaScript ES6.
        </p>
      </div>
    </div>
  );
}
