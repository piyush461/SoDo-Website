import React from "react";
import Heading from "../Components/Heading";
import { Link } from "react-router-dom";

function OurFounder() {
  return (
    <div className="mt-24 font-poppins">
      <center>
        <Heading head="Meet Our Founder" />
        <div>
          <img
            className="h-64 mt-5 rounded-full"
            src="/Images/Founder.jpg"
            alt=""
          />
        </div>
        <h1 className="font-semibold text-3xl mt-5">Gaurav Sood</h1>
        <h1 className="text-gray-400 text-md">Founder & CEO</h1>
        <Link to="https://www.linkedin.com/in/gauravsood21/" target="_blank">
          <img className="h-10 mt-4" src="/Images/linkedIn.svg" alt="" />
        </Link>
      </center>
    </div>
  );
}

export default OurFounder;
