const Badge = ({ color, text }) => {
  return (
    <h4
      style={{ backgroundColor: color }}
      className="text-nowrap text-white font-roboto px-[7px] py-[1.6px] md:px-2 md:py-1 m-1 mr-2 ml-0 md:mr-3 rounded-[50px] text-[75%] font-normal"
    >
      {text}
    </h4>
  );
};

export default Badge;
