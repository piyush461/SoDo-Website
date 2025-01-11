import Button from "./Button";
const HeroSection = () => {
  return (
    <div className="flex justify-between pt-8 w-full relative">
      <div className="absolute top-[25%] left-[30%] -z-10">
        <img
          className="h-[500px] w-[500px]"
          src="Images/yellowEllipse.svg"
          alt=""
        />
      </div>
      <div className="absolute -bottom-[240px] -right-[190px]  -z-10">
        <img
          className="h-[650px] w-[650px]"
          src="Images/blueEllipse.svg"
          alt=""
        />
      </div>
      <div className="mt-9">
        <div>
          {/* <div className="flex gap-2 items-center">
            <div className="relative flex">
              <img className="z-40" src="Images\profile1.svg" alt="" />
              <img
                className="absolute left-[25px] z-30"
                src="Images\profile2.svg"
                alt=""
              />
              <img
                className="absolute left-[50px] z-20"
                src="Images\profile3.svg"
                alt=""
              />
              <img
                className="absolute left-[75px] z-1"
                src="Images\profile4.svg"
                alt=""
              />
            </div>
            <h4 className="font-archivo tracking-tighter pl-20  text-[14px] text-gray-400 font-medium text-nowrap">
              trusted by 120+ companies
            </h4>
          </div> */}
          <div className="poppins-semibold pt-6">
            <h1 className="text-[5.3vw] font-semibold ">Hire Top 1%</h1>
            <span className="heroHead text-[5.3vw]  leading-tight text-nowrap">
              IT & non-IT Talent
            </span>
          </div>
          <h3 className="font-roboto font-light text-[1.6vw] my-10">
          Elevating companies with top quality multi-layer screened <br /> talent and resources for contract roles in 24 hours.
          </h3>
          <a href="#contact">
            <Button content="Hire Talent" />
          </a>
        </div>
        <div className="flex gap-10 mt-16">
          <div>
            <img src="Images\Company1.svg" alt="" />
          </div>
          <div>
            <img src="Images\Company2.svg" alt="" />
          </div>
          <div>
            <img src="Images\Company3.svg" alt="" />
          </div>
          <div>
            <img src="Images\Company4.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="relative">
          <img
            className="h-[88%] rounded-br-[100px] w-auto"
            src="Images\hero.jpg"
            alt=""
          />
          <div className="absolute -left-28 bottom-24">
            <img
              className="h-40 w-auto"
              src="\Images\Applications.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
