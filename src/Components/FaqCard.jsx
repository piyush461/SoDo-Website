import { useRef, useState, useEffect } from "react";
import faq from '../data/faqData.json'
const FaqCard = ({ isOpen, toggleOpen, question, answer }) => {
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(contentRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className={`faqBorder p-[2px] rounded-[24px] h-fit w-full ${
        isOpen ? "faqactive" : ""
      }`}>
      <div className="h-auto bg-white rounded-[22px] px-4 py-[26px] transition-all ease-out">
        <div className="flex justify-between">
          <h1 className="font-poppins w-[92%] md:text-[1.3vw] text-[14px] font-[500]">{question}</h1>
          <button onClick={toggleOpen} className="scale-90">
            <img
              className={`transform transition-transform duration-300 h-4 w-auto ease-out ${
                isOpen ? "[transform:rotateX(180deg)]" : ""
              }`}
              src="Images/arrowUp.png"
              alt="toggle"
            />
          </button>
        </div>
        <div
          className="overflow-hidden transition-[max-height] duration-300 ease-out"
          style={{ maxHeight: `${maxHeight}px` }}>
          <div
            ref={contentRef}
            className="pt-4 pr-7 text-[14.4px] text-[#464454] font-[400]">
            <p dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
