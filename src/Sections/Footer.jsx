import { Link } from "react-router-dom";

const Footer = () => {
  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="md:mt-40 font-poppins mt-16 mb-5 w-full flex justify-between max-md:flex-col">
        <div className="flex flex-col font-popins justify-between items-center max-md:flex-row pb-7">
          <div className="md:hidden flex flex-col">
            <div className="h-16">
              <img
                className="h-24 object-contain"
                src="Images/sodo.svg"
                alt="SoDo logo"
              />
            </div>
            <div className="h-12">
              <img className="h-[100%] ml-2" src="Images/msForstartupLogo.svg" alt="" />
            </div>
          </div>
          <div className="h-16 relative -left-9 -top-8 max-md:hidden">
            <img className="h-24 object-contain" src="Images/sodo.svg" alt="SoDo logo" />
          </div>
          <div className="h-20 max-md:hidden">
            <img className="h-[100%]" src="Images/Microsoft.jpg" alt="" />
          </div>
          <div className="flex justify-between ml-5 w-full mt-6 items-center max-md:hidden">
            <div>
              <Link to="https://www.linkedin.com/company/sodohire" target="_blank">
                <img className="scale-150" src="Images/linkedIn.svg" alt="" />
              </Link>
            </div>
            <div>
              <Link to="https://www.facebook.com/sodorecruit/" target="_blank">
                <img className="scale-150" src="Images/instagram.svg" alt="" />
              </Link>
            </div>
            <div>
              <Link to="https://x.com/SoDoHire" target="_blank">
                <img className="scale-150" src="Images/x.svg" alt="X" />
              </Link>
            </div>
            <div>
              <Link to="https://www.instagram.com/sodohire" target="_blank">
                <img className="scale-150" src="Images/fb.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex justify-between ml-2">
            <div className="text-xs text-[#464454] font-[500] flex flex-col gap-1">
              <h3 className="text-black mb-1 font-semibold">Learn More</h3>
              <Link className="!text-[#464454]" to="#faqs" onClick={(e) => handleSmoothScroll(e, "faqs")}>
                FAQs
              </Link>
              <Link className="hover:text-black" to="#ourServices" onClick={(e) => handleSmoothScroll(e, "ourServices")}>
                Services
              </Link>
              <Link to="#ourModels" onClick={(e) => handleSmoothScroll(e, "ourModels")}>
                Pricing
              </Link>
            </div>
            <div className="text-xs text-[#464454] font-[500] flex flex-col gap-1">
              <h3 className="text-black mb-1 font-semibold">Resources</h3>
              <Link to="/PrivacyPolicy">Privacy Policy</Link>
              <Link to="/TermsOfService">Terms</Link>
            </div>
          </div>
          <div className="ml-2">
            <div className="text-xs text-[#464454] font-[500] mt-6 flex flex-col gap-1">
              <h3 className="text-black mb-1 font-semibold">Contact Us</h3>
              <h3>HQ OFFICE</h3>
              <h3>20A, Faridabad, Haryana 121002 202, 2nd Floor, EF3 Mall, Sector</h3>
            </div>
            <h3 className="text-xs text-[#464454] mt-3 font-[500]">
              <Link to="tel:+919717717297">+91 9717717297</Link>
            </h3>
            <h3 className="text-xs text-[#464454] mt-2 font-[500]">
              <Link to="mailto:official@sodoservices.com">official@sodoservices.com</Link>
            </h3>
          </div>
        </div>

        <div className="flex gap-24 max-md:hidden">
          <div className="text-[14px] text-[#464454] font-[500] flex flex-col gap-1">
            <h3 className="text-black mb-2">Learn More</h3>
            <Link to="#faqs" onClick={(e) => handleSmoothScroll(e, "faqs")}>FAQs</Link>
            <Link to="#ourServices" onClick={(e) => handleSmoothScroll(e, "ourServices")}>Services</Link>
            <Link to="#ourModels" onClick={(e) => handleSmoothScroll(e, "ourModels")}>Pricing</Link>
          </div>
          <div className="text-[14px] text-[#464454] font-[500] flex flex-col gap-1">
            <h3 className="text-black mb-2 font-semibold">Resources</h3>
            <Link to="/PrivacyPolicy">Privacy Policy</Link>
            <Link to="/TermsOfService">Terms</Link>
          </div>
          <div>
            <div className="text-[14px] text-[#464454] font-[500] flex flex-col gap-1">
              <h3 className="text-black mb-2 font-semibold">Contact Us</h3>
              <h3 className="mb-2">HQ OFFICE</h3>
              <h3>202, 2nd Floor, EF3 Mall, Sector 20A, Faridabad, Haryana 121002.</h3>
            </div>
            <h3 className="text-[14px] mt-3 font-[500]">
              <Link to="tel:+919717717297">+91 9717717297</Link>
            </h3>
            <h3 className="text-[14px] mt-2 font-[500]">
              <Link to="mailto:official@sodoservices.com">official@sodoservices.com</Link>
            </h3>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-6 items-center justify-center my-4 md:hidden">
        <div>
          <Link to="https://www.linkedin.com/company/sodohire" target="_blank">
            <img src="Images/linkedIn.svg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="https://www.facebook.com/sodorecruit/" target="_blank">
            <img src="Images/instagram.svg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="https://x.com/SoDoHire" target="_blank">
            <img src="Images/x.png" alt="X" />
          </Link>
        </div>
        <div>
          <Link to="https://www.instagram.com/sodohire" target="_blank">
            <img src="Images/fb.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className="thHr h-[2px] w-full mt-6"></div>
      <div className="flex items-center justify-center font-poppins h-14 font-[500] text-sm max-md:hidden">
        © 2025 | SoDoBusiness Tech Private Limited | All Rights Reserved
      </div>
      <div className="flex items-center justify-center flex-col font-poppins h-16 font-[500] text-xs max-md:text-[14px] md:hidden">
        <h1>© 2025 | SoDoBusiness Tech Private Limited</h1>
        <h1>All Rights Reserved</h1>
      </div>
    </>
  );
};

export default Footer;
