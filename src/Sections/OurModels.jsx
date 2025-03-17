
import Heading from "../Components/Heading";

const OurModels = () => {

  return (
    <div id="ourModels">
      <div className="text-center text-nowrap">
        <Heading head="Our Models" />
      </div>
      <div className="flex justify-center items-center max-md:w-full max-md:flex-col gap-6 pt-10">
        <div className="gradientBorder md:w-[36%] md:min-w-80 p-[2.8px] rounded-[18px]">
          <div
            className={
              "rounded-[14.6px] bg-black h-full text-white p-6 flex flex-col justify-between gap-10"
            }>
            <div>
              <h1 className="md:text-[2.4vw] text-2xl text-white font-poppins font-[500] pb-3 text-nowrap">
                HRaaS & IT Recruitment
              </h1>
              <h3 className="font-poppins text-[1.2vw] max-md:text-xs text-gray-400">
                Starting Free Range: 8.33% - 12% of the CTC
              </h3>
            </div>
            <div className="md:text-[1.1vw] text-white text-[11px] font-roboto">
              <h4 className="flex gap-1 text-white">
                <img src="Images/tick.svg" alt="" />
                Flexible Options: Full-time or part-time staffing
              </h4>
              <h4 className="flex gap-1 text-white">
                <img src="Images/tick.svg" alt="" />
                Custom Solutions: Tailored for role complexity and seniority.
              </h4>
              <h4 className="flex gap-1 text-white">
                <img src="Images/tick.svg" alt="" />
                Scalable Staffing: Adjust as you business grows.
              </h4>
              <h4 className="flex gap-1 text-white">
                <img src="Images/tick.svg" alt="" />
                Ongoing Support: Help throughout the contract.
              </h4>
              <h4 className="flex gap-1 text-white">
                <img src="Images/tick.svg" alt="" />
                Fast Hiring: Quick and efficient processes.
              </h4>
            </div>
            <div>
              <h1>
                <sub className="text-white" >from</sub>
                <span className="font-poppins text-5xl text-white md:text-[4vw] font-[500] px-1">
                  8.33%
                </span>
                <sub className="text-white">of the CTC</sub>
              </h1>
              {/* <button className="bg-white text-black w-full mt-10 h-12 rounded-xl text-sm font-[500]">
                Try Now
              </button> */}
            </div>
          </div>
        </div>
        <div
          className="gradientBorder md:w-[36%] md:min-w-80  p-[3.4px] rounded-[18px]">
          <div
            className={
              "rounded-[14.6px] bg-white p-6 flex flex-col justify-between gap-[30px]"
            }>
            <div>
              <h1 className="md:text-[2.6vw] text-2xl h-full font-poppins font-[500] pb-3 text-black">
                IT Staffing
              </h1>
              <h3 className="font-poppins text-[1.2vw] max-md:text-xs">
                Flexible IT staffing designed to meet your business&apos;s unique requirements.
              </h3>
            </div>
            <div className="text-[11px] md:text-[1.1vw] font-[400] font-roboto text-[#464454]">
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
              <h1 className="text-black font-poppins text-5xl md:text-[4vw] font-[500] px-1">
                Custom
              </h1>
              {/* <button className=" bg-black text-white w-full mt-10 h-12 rounded-xl text-sm font-[500]">
                Get a Quote
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurModels;
