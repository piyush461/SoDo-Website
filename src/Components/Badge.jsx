const Badge = ({ color, text }) => {
  return (
    <h4
      style={{ backgroundColor: color }}
      className="text-nowrap font-roboto px-[6px] py-[2px] md:px-2 md:py-1 m-1 mr-2 ml-0 md:mr-3 rounded-[50px] text-[50%] md:text-[60%] font-normal"
    >
      {text}
    </h4>
  );
};

export default Badge;
