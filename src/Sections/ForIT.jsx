import { useRef, useEffect } from "react";

const ForIT = () => {
  const itRef = useRef(null);
  const startupRef = useRef(null);
  const mncsRef = useRef(null);
  const gradball1Ref = useRef(null);
  const gradball2Ref = useRef(null);
  const gradball3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const itPositionBottom = itRef.current.getBoundingClientRect().bottom;
      const startupPositionTop = startupRef.current.getBoundingClientRect().top;
      const startupPositionBottom =
        startupRef.current.getBoundingClientRect().bottom;
      const mncsPositionTop = mncsRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight / 2;

      gradball1Ref.current.style.opacity = "0";
      gradball2Ref.current.style.opacity = "0";
      gradball3Ref.current.style.opacity = "0";
      itRef.current.style.color = "#464454";
      startupRef.current.style.color = "#464454";
      mncsRef.current.style.color = "#464454";

      if (itPositionBottom - 60 > viewportHeight) {
        gradball1Ref.current.style.opacity = "1";
        itRef.current.style.color = "black";
      } else if (
        startupPositionTop - 100 < viewportHeight &&
        startupPositionBottom + 60 > viewportHeight
      ) {
        gradball2Ref.current.style.opacity = "1";
        startupRef.current.style.color = "black";
      } else if (mncsPositionTop - 100 < viewportHeight) {
        gradball3Ref.current.style.opacity = "1";
        mncsRef.current.style.color = "black";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="forIT"
      className="flex justify-between gap-4 w-full items-center max-md:flex-col mt-20">
      <div className="flex md:flex-col md:justify-center max-md:w-full justify-between md:gap-24 max-md:items-center">
        <div className="flex flex-col gap-1 md:gap-6 flex-1">
          <h3
            ref={itRef}
            className="font-poppins md:text-[2.7vw] text-[15px] font-semibold flex items-center text-nowrap relative text-[#464454]">
            For MNCs
            <div className="pl-3 pt-2">
              <img
                ref={gradball1Ref}
                className="rotateBall"
                src="Images/graBall.svg"
                alt=""
                style={{ opacity: 0 }}
              />
            </div>
          </h3>
          <h3
            ref={startupRef}
            className="font-poppins md:text-[2.7vw] text-[15px] font-semibold flex items-center text-[#464454]">
            For Enterprises
            <div className="pl-3 pt-2">
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
            className="font-poppins md:text-[2.7vw] text-[15px] font-semibold flex items-center text-[#464454]">
            For Companies & Startups
            <div className="pl-3 pt">
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
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="md:learnMore flex-1 flex items-center border mb-6 font-semibold px-6 py-3 rounded-2xl max-md:px-3 max-md:py-1 max-md:text-xs text-nowrap hover:text-black">
            Learn More
            <img src="Images/rightArrow.svg" alt="" />
          </button>
        </div>
      </div>
      <div>
        <img className="md:h-[38vw] w-auto" src="Images/forIT.jpg" alt="" />
      </div>
    </div>
  );
};

export default ForIT;
