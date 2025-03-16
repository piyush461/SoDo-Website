const TransformHiring = () => {
  const desc =
    " Designed for fast-growing companies, our HRaaS platform connects you with India's top IT talent-ready to make an impact from day one. Whether you need a single developer or a specialized team, SoDo offers high-quality hiring 70-80x faster than traditional recruitment and staffing agencies";
  return (
    <div>
      <div className="mt-10 w-full">
        <div className="flex justify-between gap-8 max-md:justify-center">
          <div className="thHr h-[1px] w-full mt-6 max-md:hidden"></div>
          <img
            className="md:h-[3.7vw] mb-8"
            src="Images/transformHiring.svg"
            alt=""
          />
        </div>
        <div className="flex justify-between">
          <div className="w-[100%] h-80 max-md:hidden"></div>
          <div className="w-[100%]">
            <h2 className="font-roboto md:text-[2vw] text-md">{desc}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformHiring;
