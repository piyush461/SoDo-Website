const Badge = ({ color, text }) => {
  return (
    <h4
      style={{ backgroundColor: color }}
      className="text-nowrap font-roboto px-2 py-1 m-1 mr-2 ml-0 md:mr-3 rounded-[50px] text-xs md:text-[85%] font-normal"
    >
      {text}
    </h4>
  );
};

export default Badge;
