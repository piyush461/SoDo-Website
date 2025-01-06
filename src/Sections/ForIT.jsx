import { useRef } from 'react';

const ForIT = () => {
  const itRef = useRef(null);
  const startupRef = useRef(null);
  const mncsRef = useRef(null);
  const gradball1Ref = useRef(null);
  const gradball2Ref = useRef(null);
  const gradball3Ref = useRef(null);

  const handleMouseEnter = (targetRef, gradballRef, changeItColor = false) => {
    targetRef.current.style.color = 'black';
    gradball1Ref.current.style.opacity = '0';
    gradball2Ref.current.style.opacity = '0';
    gradball3Ref.current.style.opacity = '0';
    gradballRef.current.style.opacity = '1';

    if (changeItColor) {
      itRef.current.style.color = '#464454';
    }
  };

  const handleMouseLeave = () => {
    startupRef.current.style.color = '#464454';
    mncsRef.current.style.color = '#464454';
    itRef.current.style.color = 'black';
    gradball1Ref.current.style.opacity = '0';
    gradball2Ref.current.style.opacity = '0';
    gradball3Ref.current.style.opacity = '0';
    gradball1Ref.current.style.opacity = '1';
  };

  return (
    <div id='forIT' className="flex justify-between w-full mt-10">
      <div className="flex flex-col justify-between">
        <div>
          <h3
            ref={itRef}
            className="cursor-pointer font-poppins text-[2.8rem] font-semibold flex items-center relative text-black"
            onMouseEnter={() => handleMouseEnter(itRef, gradball1Ref)}
            onMouseLeave={handleMouseLeave}
          >
            For IT Companies
            <div className="pl-4 pt-2">
              <img
                ref={gradball1Ref}
                className='rotateBall'
                src="Images/graBall.svg"
                alt=""
                style={{ opacity: 1 }}
              />
            </div>
          </h3>
          <h3
            ref={startupRef}
            className="cursor-pointer font-poppins text-[#464454] text-[2.8rem] font-semibold flex items-center"
            onMouseEnter={() => handleMouseEnter(startupRef, gradball2Ref, true)}
            onMouseLeave={handleMouseLeave}
          >
            For Startups
            <div className="pl-4 pt-2">
              <img
                ref={gradball2Ref}
                className="rotateBall"
                src="Images/graBall.svg"
                alt=""
                style={{ opacity: 0 }}
              />
            </div>
          </h3>
          <h3
            ref={mncsRef}
            className="cursor-pointer font-poppins text-[#464454] text-[2.8rem] font-semibold flex items-center"
            onMouseEnter={() => handleMouseEnter(mncsRef, gradball3Ref, true)}
            onMouseLeave={handleMouseLeave}
          >
            For MNCs
            <div className="pl-4 pt">
              <img
                ref={gradball3Ref}
                className="rotateBall"
                src="Images/graBall.svg"
                alt=""
                style={{ opacity: 0 }}
              />
            </div>
          </h3>
        </div>
        <div>
          <button className="learnMore flex items-center border mb-6 font-semibold px-6 py-3 rounded-2xl hover:text-black">
            Learn More
            <img src="Images/rightArrow.svg" alt=""/>
          </button>
        </div>
      </div>
      <div className="h-[98vh]">
        <img className="h-[100%] w-auto" src="Images/forIT.jpg" alt="" />
      </div>
    </div>
  );
};

export default ForIT;
