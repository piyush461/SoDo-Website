import Button from "../Components/Button";
import Heading from "../Components/Heading";

const OurServices = () => {
  const recruitmentDesc =
    "Our IT recruitment team woks fast to match you with engineers, designers, and developers who have been vetted for skills, culture, and speed. Get the right fit for your tech team - minus the long hiring process.";
  const staffingDesc =
    "Need to scale? Whether for a sprint or a marathon resource augmentation solution flexes with you. All top talent to your team for as long as you need - no long-term contracts required.";
  return (
    <div id="ourServices" className="md:mt-24 mt-16">
      <center><Heading head="Consulting Services" /></center>
      
      <div className="md:mt-10 mt-6">
        <div className="serviceCard w-full rounded-[24px] before:rounded-[24px] flex justify-between items-center max-md:flex-col max-md:gap-6 max-md:p-6 p-16">
          <div className="md:w-[45%] w-full flex flex-col justify-between gap-6 ">
            <h3 className="font-poppins font-semibold text-[4.9vw] md:text-3xl">HRaaS & Recruitment</h3>
            <p className="font-roboto max-md:text-sm text-lg">{recruitmentDesc}</p>
            {/* <Button content="Learn more" /> */}
          </div>
          <div>
            <img src="Images/recruitment.jpg" alt="" />
          </div>
        </div>
        <div className="serviceCard before:rounded-2xl w-full rounded-2xl flex justify-between items-center max-md:flex-col-reverse max-md:gap-6 md:p-16 mt-8 p-6">
          <div>
            <img src="Images/staffing.jpg" alt="" />
          </div>
          <div className="md:w-[45%] flex flex-col justify-between gap-8">
            <h3 className="font-poppins font-semibold text-[4.9vw] md:text-3xl">IT Resource Augmentation</h3>
            <p className="font-roboto text-lg max-md:text-sm">{staffingDesc}</p>
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
