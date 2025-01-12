import { useEffect } from "react";
import Heading from "../Components/Heading";
import TestimonialCard from "../Components/TestimonialCard";
import testimonialsData from "../data/testimonials.json";

const Testimonials = () => {
  useEffect(() => {
    const testimonialsContainer = document.querySelector(
      ".testimonialsContainer"
    );
    const borderGradients = document.querySelectorAll(".bordergradient");
  
    const initialStyles = [
      { top: "-140px", left: "-28.4vw", transform: "rotate(0deg)" },
      { top: "-120px", left: "0", transform: "rotate(0deg)" },
      { top: "-141px", left: "28.4vw", transform: "rotate(0deg)" },
      { top: "150px", left: "-28.4vw", transform: "rotate(0deg)" },
      { top: "150px", left: "0", transform: "rotate(0deg)" },
      { top: "150px", left: "28.4vw", transform: "rotate(0deg)" },
    ];
  
    const finalStyles = [
      { top: "-70px", left: "-22.8vw", transform: "rotateZ(-3deg)" },
      {
        top: "-13.4vw",
        left: "-3.1vw",
        transform: "rotateZ(-8deg)",
        zIndex: "80",
      },
      { top: "-110px", left: "21.8vw", transform: "rotateZ(19deg)" },
      { top: "60px", left: "-14.8vw", zIndex: "60" },
      { top: "70px", left: "8.5vw", transform: "rotateZ(11deg)", zIndex: "70" },
      { top: "110px", left: "17.9vw", transform: "rotateZ(2deg)", zIndex: "50" },
    ];
  
    function applyInitialStyles() {
      borderGradients.forEach((element, index) => {
        const style = initialStyles[index];
        for (const prop in style) {
          element.style[prop] = style[prop];
        }
      });
    }
  
    function applyFinalStyles() {
      borderGradients.forEach((element, index) => {
        const style = finalStyles[index];
        for (const prop in style) {
          element.style[prop] = style[prop];
        }
      });
    }
  
    applyInitialStyles();
  
    window.addEventListener("scroll", () => {
      const containerRect = testimonialsContainer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
  
      if (
        containerRect.top < viewportHeight * 0.5 &&
        containerRect.bottom > viewportHeight * 0.5
      ) {
        applyInitialStyles();
      } else {
        applyFinalStyles();
      }
    });
  }, [])
  
  return (
    <div className="text-center mt-20">
      <Heading head="What they say about us" />
      <div className="testimonialsContainer hoverDiv text-left  min-h-[680px] flex justify-center items-center">
        <div className="relative h-[24vw] w-[24vw]">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bordergradient gradientBorder w-fit p-[2px] rounded-2xl">
              <TestimonialCard
                desc={testimonial.desc}
                imgUrl={testimonial.imgUrl}
                name={testimonial.name}
                company={testimonial.company}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
