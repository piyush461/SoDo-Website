// eslint-disable-next-line react/prop-types
const Button = ({content}) => {
  return (
    <button className="hireTalent w-32 h-12 rounded-xl  text-white bg-black">
      {content}
    </button>
  );
};

export default Button;
