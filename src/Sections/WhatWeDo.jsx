import Heading from "../Components/Heading";

const WhatWeDo = () => {
  const cardCaption1 = "Access top professionals vetted through a rigorous process.";
  const cardCaption2 = "Get guidance from onboarding to project completion.";
  const cardCaption3 =
    "Connect with verified candidates and speed up recruitment.";
  return (
    <div className="relative">
      <img className="absolute -left-40 top-20 scale-125 w-[50vw] -z-10" src="Images/yellowEllipse.svg" alt="" />
      <img className="absolute -right-40 top-40 h-[650px] w-[650px] -z-10" src="Images/blueEllipse.svg" alt="" />
      <img className="absolute rotate-90 opacity-50 left-40 top-80 scale-125 w-[50vw] -z-10" src="Images/blueEllipse.svg" alt="" />
      <Heading head="What we do differently" />
      <div className="flex justify-between gap-4 mt-8">
        <div className="thCard h-[325px] w-1/3 flex flex-col justify-between rounded-2xl p-6 pt-8 font-poppins">
          <h3>
            <sub className="text-[14px]">top</sub>
            <span className="text-6xl font-semibold"> 1% </span>
          </h3>
          <h3 className="text-[1.14rem]  font-roboto">{cardCaption1}</h3>
        </div>
        <div className="thCard h-[325px] w-1/3 flex flex-col justify-between rounded-2xl p-6 pt-8 font-poppins">
          <h3>
            {" "}
            <span className="text-6xl font-semibold">
              360<sup>o</sup>
            </span>{" "}
            <sub className="text-[14px]">support</sub>
          </h3>
          <h3 className="text-lg font-roboto">{cardCaption2}</h3>
        </div>
        <div className="thCard h-[325px] w-1/3 flex flex-col justify-between rounded-2xl p-6 pt-8 font-poppins">
          <h3>
            {" "}
            <span className="text-6xl font-semibold">2x</span>{" "}
            <sub className="text-[14px]">faster</sub>
          </h3>
          <h3 className="text-lg font-roboto">{cardCaption3}</h3>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
