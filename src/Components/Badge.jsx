const Badge = ({ color, text }) => {
  return (
    <h4
      style={{ backgroundColor: color }}
      className="text-nowrap font-roboto px-2 py-1 m-1 mr-3 ml-0 rounded-[50px] text-[85%] font-normal"
    >
      {text}
    </h4>
  );
};

export default Badge;
