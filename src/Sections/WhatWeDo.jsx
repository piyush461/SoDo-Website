import Heading from "../Components/Heading";

const WhatWeDo = () => {
  const cardCaption1 =
    "Forget weeks of searching. SoDo delivers vetted, reliable talent within a day, so you stay agile and meet your goals faster.";
  const cardCaption2 = "We get it—quality matters. So every professional, agency, and freelancer in our network has been rigorously assessed to ensure they meet our standards for skill, reliability, and work ethic.";
  const cardCaption3 =
    "SoDo is designed with fast-moving companies in mind. From on-demand hires to ongoing support, our goal is simple: to help you grow without the usual hiring headaches.";
  return (
    <div className="relative md:mt-10 mt-16">
      {/* <img
        className="absolute -left-40 top-20 scale-125 w-[50vw] -z-10"
        src="Images/yellowEllipse.svg"
        alt=""
      />
      <img
        className="absolute -right-40 top-40 h-[650px] w-[650px] -z-10"
        src="Images/blueEllipse.svg"
        alt=""
      />
      <img
        className="absolute rotate-90 opacity-50 left-40 top-80 scale-125 w-[50vw] -z-10"
        src="Images/blueEllipse.svg"
        alt=""
      /> */}
      <center><Heading head="Our USP" /></center>
      <div className="flex flex-shrink-0 justify-between gap-4 mt-8 max-md:flex-col">
        <div className="thCard h-[300px] flex-1 flex flex-col justify-between max-md:gap-14 rounded-[24px] p-6 pt-8 font-poppins">
          <h3 className="text-lg font-semibold text-center">Built Differently</h3>
          <h3 className="text-[1.14rem] font-light font-roboto">{cardCaption3}</h3>
        </div>
        <div className="thCard h-[300px] flex-1 flex flex-col justify-between max-md:gap-14 rounded-[24px] p-5 pt-8 font-poppins">
          <h3 className="text-lg font-semibold text-center">Multi-layer Screen</h3>
          <h3 className="text-[1.14rem] font-light font-roboto">{cardCaption2}</h3>
        </div>
        <div className="thCard h-[300px] flex-1 flex flex-col justify-between max-md:gap-14 rounded-[24px] p-6 pt-8 font-poppins">
          <h3 className="text-lg font-semibold text-center">70x Faster</h3>
          <h3 className="text-[1.14rem] font-light font-roboto">{cardCaption1}</h3>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
