import React from "react";

export default function About() {
  return (
    <div name="about" className="w-full h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-20">
          <p className="inline ml-5 text-xl sm:text-2xl md:text-4xl font-semibold border-b-4 border-blue-500">
            About Me
          </p>
        </div>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          quibusdam molestias maiores repellendus saepe placeat. Aliquid eaque
          voluptate maxime doloremque natus mollitia incidunt temporibus
          exercitationem dolore, animi illo dignissimos at.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          repellendus. Ad sapiente et sunt nam obcaecati ipsum odit praesentium
          fugit accusamus temporibus consequatur, cum nihil itaque at
          repellendus excepturi fuga.
        </p>
      </div>
    </div>
  );
}
