import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import tcslogo from "../Assets/tcslogo.jpg";
import Work from "./Work";

const Description = () => {
  return (
    <div className="sm:flex max-w-6xl mx-auto border text-gray-500 border-gray-400 rounded-sm p-8  mt-12">
      <div className=" ">
        <div className="flex space-x-5 items-center">
          <HiOutlineMail className="h-5 w-5 " />
          <h1 className="text-sm">Stay Up to date</h1>
        </div>
        <div className="pt-2 text-sm">
          <p>
            Get notified when I publish something new, and unsubscribe at any
            time.
          </p>
        </div>
        <div className="flex space-x-10 items-center pt-4 justify-start">
          <div className="text-sm ">
            <input
              type="text"
              className="outline-none pl-2"
              placeholder="Email Address"
            />
          </div>
          <div className="w-14 h-10 bg-black text-white flex items-center justify-center rounded-md">
            <button>JOIN</button>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="sm:pl-20 mt-6 sm:mt-0">
        <Work
          logo={tcslogo}
          name="Tata Consultancy Services"
          duration="Duration : 2020 to Present"
        />
      </div>
    </div>
  );
};

export default Description;
