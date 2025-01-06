import { useState } from "react";
import Heading from "../Components/Heading";

const OurModels = () => {
  const [hoveredSecond, setHoveredSecond] = useState(false);

  return (
    <div className="h-[100vh]">
      <div className="text-center text-nowrap">
        <Heading head="Our Models" />
      </div>
      <div className="flex justify-center gap-6 pt-10">
        <div className="gradientBorder w-fit p-[3px] rounded-2xl">
          <div
            className={`${
              hoveredSecond ? "ourModelsWhite" : "ourModelsBlack"
            } rounded-2xl text-white p-6 flex flex-col justify-between gap-10`}
          >
            <div>
              <h1 className="text-3xl font-poppins font-[500] pb-3 text-nowrap">
                HRaaS & IT Recruitment
              </h1>
              <h3
                className={`${
                  hoveredSecond ? "text-black" : "text-white"
                } font-[300] text-sm`}
              >
                Starting Free Range: 8.33% - 12% of the CTC
              </h3>
            </div>
            <div className="text-xs font-roboto">
              <h4 className="flex gap-1">
                <img src="Images/tick.svg" alt="" />
                Flexible Options: Full-time or part-time staffing
              </h4>
              <h4 className="flex gap-1">
                <img src="Images/tick.svg" alt="" />
                Custom Solutions: Tailored for role complexity and seniority.
              </h4>
              <h4 className="flex gap-1">
                <img src="Images/tick.svg" alt="" />
                Scalable Staffing: Adjust as you business grows.
              </h4>
              <h4 className="flex gap-1">
                <img src="Images/tick.svg" alt="" />
                Ongoing Support: Help throughout the contract.
              </h4>
              <h4 className="flex gap-1">
                <img src="Images/tick.svg" alt="" />
                Fast Hiring: Quick and efficient processes.
              </h4>
            </div>
            <div>
              <h1>
                <sub>from</sub>
                <span className="font-poppins text-5xl font-[500] px-1">
                  8.33%
                </span>
                <sub>of the CTC</sub>
              </h1>
              <button className="bg-white text-black w-full mt-10 h-12 rounded-xl text-sm font-[500]">
                Try Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="gradientBorder w-fit p-[3px] rounded-2xl h-[100%]"
          onMouseEnter={() => setHoveredSecond(true)}
          onMouseLeave={() => setHoveredSecond(false)}
        >
          <div
            className={`${
              hoveredSecond ? "ourModelsBlack" : "ourModelsWhite"
            } rounded-2xl text-white p-6 flex flex-col justify-between gap-[30px]`}
          >
            <div>
              <h1 className="text-3xl font-poppins font-[500] pb-3 text-black">
                IT Staffing
              </h1>
              <h3
                className={`${
                  hoveredSecond ? "text-white" : "text-black text-nowrap"
                } font-[400] text-sm text-wrap`}
              >
                Flexible IT staffing designed to meet your business&apos;s <br /> unique requirements.
              </h3>
            </div>
            <div className="text-xs font-roboto text-[#464454] text-nowrap">
              <h4 className="flex gap-1">
                <img src="Images/tick.svg" alt="" />
                Flexible Options: Full-time or part-time staffing
              </h4>
              <h4 className="flex gap-1">
                <img src="Images/tick.svg" alt="" />
                Custom Solutions: Tailored for role complexity and seniority.
              </h4>
              <h4 className="flex gap-1">
                <img src="Images/tick.svg" alt="" />
                Scalable Staffing: Adjust as you business grows.
              </h4>
              <h4 className="flex gap-1">
                <img src="Images/tick.svg" alt="" />
                Ongoing Support: Help throughout the contract.
              </h4>
              <h4 className="flex gap-1">
                <img src="Images/tick.svg" alt="" />
                Fast Hiring: Quick and efficient processes.
              </h4>
            </div>
            <div>
              <h1 className="text-black font-poppins text-5xl font-[500] px-1">
                Custom
              </h1>
              <button className=" bg-black text-white w-full mt-10 h-12 rounded-xl text-sm font-[500]">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurModels;
