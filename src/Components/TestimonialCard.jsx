const TestimonialCard = ({ id, desc, imgUrl, name, company }) => {
  return (
    <div className="testimonialCard bg-white p-4 rounded-[13px] before:rounded-2xl w-[25vw] h-[255px] flex flex-col justify-between pb-4 max-md:w-full max-md:h-72">
      <div className="-mt-4 ">
        <img src="Images/quote.svg" alt="Quote" className="w-8 h-8" />
      </div>
      <h2 className="text-[1.2vw] content-center min-h-36 max-md:text-sm">{desc}</h2>
      <div className="flex items-center">
        <img src={imgUrl} alt={name} className="w-10 h-10 rounded-full" />
        <div className="ml-4">
          <h1 className="font-poppins font-semibold">{name}</h1>
          <h3 className="text-xs text-[#464454]">{company}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
