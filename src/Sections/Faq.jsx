import { useState } from "react";
import FaqCard from "../Components/FaqCard";
import Heading from "../Components/Heading";
import faqData from "../data/faqData.json"; 

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div id="faqs" className="mt-20 h-auto">
      <div className="text-center">
        <Heading head="FAQs" />
      </div>
      <div className="mt-10 flex gap-8 w-full">
        <div className="flex flex-col gap-3 md:hidden">
        {faqData.faqs.map((faq, index) => (
              <FaqCard
                key={index}
                isOpen={openIndex === index}
                toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
        </div>
        <div className="flex flex-col gap-4 max-md:hidden">
          {faqData.faqs
            .filter((_, index) => index % 2 === 0)
            .map((faq, index) => (
              <FaqCard
                key={index}
                isOpen={openIndex === index}
                toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
        </div>
        <div className="flex flex-col gap-4 max-md:hidden">
          {faqData.faqs
            .filter((_, index) => index % 2 !== 0)
            .map((faq, index) => (
              <FaqCard
                key={index + faqData.faqs.length}
                isOpen={openIndex === index + faqData.faqs.length}
                toggleOpen={() => setOpenIndex(openIndex === index + faqData.faqs.length ? null : index + faqData.faqs.length)}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
