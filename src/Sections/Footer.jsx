const Footer = () => {
  return (
    <>
      <div className="md:mt-52 mt-16 mb-5 w-full flex justify-between max-md:flex-col">
        <div className="flex flex-col justify-between items-center max-md:flex-row pb-7">
          <div className="h-16 relative -top-8">
            <img
              className="h-24 object-contain"
              src="Images/sodo.svg"
              alt="SoDo logo"
            />
          </div>
          <div className="h-20">
            <img
              className="h-[100%]"
              src="Images/msForstartupLogo.svg"
              alt=""
            />
          </div>
          <div className="flex gap-2 mt-6 items-center max-md:hidden">
            <div>
              <a
                href="https://www.linkedin.com/company/sodohire"
                target="_blank">
                <img src="Images/linkedIn.svg" alt="" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/sodohire" target="_blank">
                <img src="Images/fb.svg" alt="" />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/sodorecruit/" target="_blank">
                <img src="Images/instagram.svg" alt="" />
              </a>
            </div>
            <div>
              <a href="https://x.com/SoDoHire" target="_blank">
                <img src="Images/x.png" alt="X" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between md:hidden">
            <div className="text-xs text-[#464454] font-[500] flex flex-col gap-1">
              <h3 className="text-black mb-2">Learn More</h3>
              <h3>
                <a href="#faqs">FAQs</a>
              </h3>
              <h3>
                <a href="#ourServices">Services</a>
              </h3>
              <h3>
                <a href="#ourModels">Pricing</a>
              </h3>
            </div>
            <div className="text-xs text-[#464454] font-[500] flex flex-col gap-1">
              <h3 className="text-black mb-2">Resources</h3>
              <h3>Privacy Policy</h3>
              <h3>Terms</h3>
            </div>
          </div>
          <div>
            <div className="text-xs text-[#464454] font-[500] flex flex-col gap-1">
              <h3 className="text-black mb-2">Contact Us</h3>
              <h3>HQ OFFICE</h3>
              <h3>202, 2nd Floor, EF3 Mall, Sector</h3>
              <h3>20A, Faridabad, Haryana 121002</h3>
            </div>
            <h3 className="text-xs text-[#464454] mt-3 font-[500]">
              +91 9717717297
            </h3>
            <h3 className="text-xs text-[#464454] mt-0 font-[500]">
              official@sodoservices.com
            </h3>
          </div>
        </div>
        <div className="flex gap-24 max-md:hidden">
          <div className="text-xs text-[#464454] font-[500] flex flex-col gap-1">
            <h3 className="text-black mb-2">Learn More</h3>
            <h3>
              <a href="#faqs">FAQs</a>
            </h3>
            <h3>
              <a href="#ourServices">Services</a>
            </h3>
            <h3>
              <a href="#ourModels">Pricing</a>
            </h3>
          </div>
          <div className="text-xs text-[#464454] font-[500] flex flex-col gap-1">
            <h3 className="text-black mb-2">Resources</h3>
            <h3>Privacy Policy</h3>
            <h3>Terms</h3>
          </div>
          <div>
            <div className="text-xs text-[#464454] font-[500] flex flex-col gap-1">
              <h3 className="text-black mb-2">Contact Us</h3>
              <h3>HQ OFFICE</h3>
              <h3>202, 2nd Floor, EF3 Mall, Sector</h3>
              <h3>20A, Faridabad, Haryana 121002</h3>
            </div>
            <h3 className="text-xs text-[#464454] mt-3 font-[500]">
              +91 9717717297
            </h3>
            <h3 className="text-xs text-[#464454] mt-0 font-[500]">
              official@sodoservices.com
            </h3>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-center font-poppins h-10 font-[500] text-sm max-md:hidden">
        © 2025 | SoDoBusiness Tech Private Limited | All Right Reserved
      </div>
      <div className="flex items-center justify-center flex-col font-poppins h-10 font-[500] text-xs md:hidden">
        <h1>© 2025 | SoDoBusiness Tech Private Limited</h1>
        <h1>All Right Reserved</h1>
      </div>
    </>
  );
};

export default Footer;
