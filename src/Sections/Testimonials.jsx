import Heading from "../Components/Heading";
import TestimonialCard from "../Components/TestimonialCard";
import testimonialsData from "../data/testimonials.json";

const Testimonials = () => {
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
