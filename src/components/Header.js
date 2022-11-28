import React from "react";
import profile from "../Assets/profile.jpg";
import { CiDark } from "react-icons/ci";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      {" "}
      <header className="flex px-5 max-w-6xl mx-auto justify-between pt-4 bg-white text-black font-semibold text-sm">
        <div className="flex">
          <img src={profile} alt="" className="h-12 w-12 rounded-full" />
        </div>
        <div className="flex sm:hidden space-x-7">
          <select>
            <option>
              <h4>About</h4>
            </option>
            <option>
              <h4>Article</h4>
            </option>

            <option>
              <h4>Speaking</h4>
            </option>
            <option>
              <h4>Projects</h4>
            </option>
            <option>
              <h4>Users</h4>
            </option>
          </select>
        </div>

        <div className="hidden sm:flex space-x-7 bg-gray-200 items-center px-4 rounded-md">
          <h4>About</h4>
          <h4>Article</h4>
          <h4>Speaking</h4>
          <h4>Projects</h4>
          <h4>Users</h4>
        </div>
        <div>
          <CiDark className="h-8 w-8" />
        </div>
      </header>
      <div className="px-2 bg-gray-50">
        <h1 className="text-2xl pt-5 font-bold text-gray-600">
          Software designer, founder, and amateur astronaut.
        </h1>

        <p className="pt-2">
          I’m Rohit, a software designer and entrepreneur based in India
          Varanasi City. I’m the founder and CEO of silentprogrammer.com , where
          we develop technologies that empower regular people to explore space
          on their own terms.
        </p>
      </div>
      <div className="flex pt-6 space-x-6 items-center pl-12">
        <BsTwitter className="h-8 w-8" />
        <AiOutlineInstagram className="h-6 w-6" />
        <AiFillGithub className="h-6 w-6" />
        <BsFacebook className="h-6 w-6" />
      </div>
    </div>
  );
};

export default Header;
