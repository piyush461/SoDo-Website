import "../../public/Fonts/Font.css";
import Button from "./Button";
const HeroSection = () => {
  return (
    <div className="flex justify-between pt-8 w-full relative">
      <div className="absolute top-[25%] left-[30%] -z-10">
          <img className="h-[500px] w-[500px]" src="Images/yellowEllipse.svg" alt="" />
      </div>
      <div className="absolute -bottom-[240px] -right-[190px]  -z-10">
          <img className="h-[650px] w-[650px]" src="Images/blueEllipse.svg" alt="" />
      </div>
      <div className="mt-16">
        <div>
          <div className="flex gap-2 items-center">
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
            <h4 className="font-archivo tracking-tighter pl-20  text-[14px] text-gray-400 font-medium ">
              trusted by 120+ companies
            </h4>
          </div>
          <div className="poppins-semibold pt-6">
            <h1 className="text-6xl font-semibold ">Unlock the Top</h1>
            <span className="heroHead text-6xl leading-relaxed ">
              1% of IT Talent
            </span>
          </div>
          <h3 className="font-roboto font-light text-2xl mb-10">
            We connect businesses with <br /> multi-layered vetted and <br /> screened
            talent and <br /> resources
          </h3>
          <Button content="Hire Talent" />
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
      <div className="flex">
        <div className="relative">
          <img
            className="w-[86px] z-20 absolute bottom-16 -right-[40px]"
            src="Images\star.svg"
            alt=""
          />
          <img className="h-[95vh] w-auto" src="Images\hero.svg" alt="" />
          <div className="absolute -left-28 bottom-24">
            <img
              className="h-40 w-auto"
              src="\Images\Applications.svg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <img className="h-[40%] w-14" src="Images\rightText.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
