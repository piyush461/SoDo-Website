import Button from "../Components/Button";
import Heading from "../Components/Heading";

const OurServices = () => {
  const recruitmentDesc =
    "Our IT recruitment team woks fast to match you with engineers, designers, and developers who&apos;ve been vetted for skills, culture, and speed. Get the right fit for your tech team - minus the long hiring process.";
  const staffingDesc =
    "Need to scale? Whether for a sprint or a marathon resource augmentation solution flexes with you. All top talent to your team for as long as you need - no long-term contracts required";
  return (
    <div id="ourServices" className="mt-24">
      <Heading head="Our Services" />
      <div className="mt-10">
        <div className="serviceCard w-full rounded-[40px] before:rounded-[40px] flex justify-between items-center p-16">
          <div className=" w-[45%] flex flex-col justify-between gap-6 ">
            <h3 className="font-poppins font-semibold text-3xl">Recruitment</h3>
            <p className="font-roboto text-lg">{recruitmentDesc}</p>
            {/* <Button content="Learn more" /> */}
          </div>
          <div>
            <img src="Images/recruitment.jpg" alt="" />
          </div>
        </div>
        <div className="serviceCard before:rounded-[40px] w-full rounded-[40px] flex justify-between items-center p-16 mt-8">
          <div>
            <img src="Images/staffing.jpg" alt="" />
          </div>
          <div className=" w-[45%] flex flex-col justify-between gap-8">
            <h3 className="font-poppins font-semibold text-3xl">Staffing</h3>
            <p className="font-roboto text-lg">{staffingDesc}</p>
            {/* <button className="buttonAnimation w-32 h-12 rounded-xl text-white bg-black">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
