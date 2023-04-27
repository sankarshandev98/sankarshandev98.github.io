import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdCall } from "react-icons/md";

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
          sankarshandev98
        </>
      ),
      href: "https://www.linkedin.com/in/sankarshandev98/",
      style: "rounded-tr-md",
      contactId: "contact-linkedin",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
          sankarshandev98
        </>
      ),
      href: "https://github.com/sankarshandev98",
      contactId: "contact-github",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
          gsankar164@gmail.com
        </>
      ),
      href: "mailto:gsankar164@gmail.com",
      contactId: "contact-email",
    },
    {
      id: 4,
      child: (
        <>
          <MdCall size={30} />
          8250163607
        </>
      ),
      contactId: "contact-phone",
    },
  ];

  return (
    <div
      id="contact"
      name="contact"
      className="w-full pt-8 bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="md:flex md:justify-between md:pb-5 pb-5">
          {links.map(({ id, child, href, download, contactId }) => (
            <a
              key={id}
              href={href}
              className="flex justify-between md:justify-center w-full text-white p-4 md:gap-2"
              download={download}
              target="_blank"
              rel="noreferrer"
              id={contactId}
            >
              {child}
            </a>
          ))}
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/585082e9-31ac-4211-bbd4-8c57410fabe1"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
