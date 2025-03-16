import Heading from "./Heading";

const Step = (props) => {
  return (
    <>
      <div className="h-auto max-md:hidden">
        <h4 className="font-roboto text-xs tracking-tighter ">
          {props.stepno}
        </h4>
        <Heading head={props.head} />
        <h3 className="font-roboto md:text-lg text-sm">{props.desc}</h3>
      </div>
      <div className="h-auto md:hidden">
        <h4 className="font-roboto text-xs tracking-tighter mt-2 mb-8">
          {props.stepno}
        </h4>
        <h1 className="font-poppins text-xl font-semibold">{props.head}</h1>
        <h3 className="font-roboto md:text-lg text-sm">{props.desc}</h3>
      </div>
    </>
  );
};

export default Step;
