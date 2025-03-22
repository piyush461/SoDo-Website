const TransformHiring = () => {
  const desc =
    " Designed for fast-growing companies, our HRaaS platform connects you with India's top IT talent-ready to make an impact from day one. Whether you need a single developer or a specialized team, SoDo offers high-quality hiring 70-80x faster than traditional recruitment and staffing agencies";
  return (
    <div>
      <div className="mt-16 md:mt-24 w-full">
        <div className="flex md:justify-between gap-4 md:gap-8 max-md:flex-col">
          <div className="thHr h-[2px] w-full mt-6"></div>
          <img
            className="md:h-[3.7vw] md:mb-8 mb-4"
            src="Images/transformHiring.svg"
          />
        </div>
        <div className="flex justify-between mt-4">
          <div className="w-[80%]  h-80 outline max-md:hidden"></div>
          <div className="w-[100%]">
            <h2 className="md:text-[14px] font-light text-[#1F2937] font-poppins md:ml-10 text-md">{desc}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformHiring;
