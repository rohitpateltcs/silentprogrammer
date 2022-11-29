import React from "react";
import DevoloperContact from "./DevoloperContact";

const Footer = () => {
  return (
    <div className="pt-8 bg-black text-white">
      <div className="flex text-sm justify-evenly">
        <h4>FAQ</h4>
        <h4>Review</h4>
        <h4>Others</h4>
      </div>
      <DevoloperContact />
      {/* devoloper image */}
    </div>
  );
};

export default Footer;
