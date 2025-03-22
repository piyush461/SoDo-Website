import Button from "./Button";
const HeroSection = () => {
  return (
    <div className="flex justify-between pt-8 w-full relative">
      {/* <div className="absolute top-[25%] left-[30%] -z-10">
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
      </div> */}
      <div className="md:mt-9 ">
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
          <div className="font-poppins">
            <h1 className="text-[5vw] max-md:text-[8vw] font-semibold ">Hire Top 1%</h1>
            <span className="heroHead text-black text-[5vw] block mt-1 max-md:text-[8vw] text-nowrap">
              IT & Non-IT Talent
            </span>
          </div>
          <h3 className="font-poppins font-light text-gray-800 text-[1.18vw] max-md:text-[14px]  md:mt-7 mb-14 my-5">
          We elevate MNCs, enterprises and companies recruit top-tier <br /> talent across IT, Non-IT, Executive and Leadership roles all within 24 hours.
          </h3>
          <a href="#contact"  className="max-md:hidden">
            <Button content="Hire Talent" />
          </a>
        </div>
        <div className="flex relative max-md:relative justify-end md:pr-7 md:hidden">
          <div>
            <img
              className="w-[70vw] rounded-br-[100px]"
              src="Images\hero.jpg"
              alt=""
            />
            <div className="absolute left-0 bottom-[3vw]">
              <img
                className="h-24 rounded-[20px] drop-shadow-md w-auto"
                src="\Images\numberCard.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end max-md:hidden">
        <div className="relative">
          <img
            className="h-[441px] rounded-br-[100px] w-auto"
            src="Images\hero.jpg"
            alt=""
          />
          <div className="absolute -left-36 bottom-[2vw]">
            <img
              className="h-[13vw] w-auto rounded-[20px] drop-shadow-lg"
              src="\Images\numberCard.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
