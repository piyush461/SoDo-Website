const Badge = ({ color, text }) => {
  return (
    <h4
      style={{ backgroundColor: color }}
      className="text-nowrap font-roboto px-2 py-1 m-1 ml-0 rounded-[50px] text-sm font-normal"
    >
      {text}
    </h4>
  );
};

export default Badge;
