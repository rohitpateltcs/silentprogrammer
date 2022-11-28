import React from "react";

import { MdOutlineWork } from "react-icons/md";

const Work = ({ logo, name, duration }) => {
  return (
    <div>
      <div className="flex items-center space-x-5">
        <MdOutlineWork />
        <h2>Work</h2>
      </div>
      <div className="flex space-x-6 pt-8">
        <img src={logo} alt="" className="h-6 w-10" />
        <h3>{name}</h3>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default Work;
