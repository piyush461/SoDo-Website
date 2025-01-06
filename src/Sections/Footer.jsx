const Footer = () => {
  return (
    <>
      <div className="mt-52 w-full flex justify-between">
        <div className="flex flex-col justify-between gap-6 pb-7">
          <div>
            <img className="h-8" src="Images/sodo.svg" alt="SoDo logo" />
          </div>
          <div>
            <img src="Images/msForstartupLogo.svg" alt="" />
          </div>
          <div className="flex gap-2">
            <div>
              <img src="Images/linkedIn.svg" alt="" />
            </div>
            <div>
              <img src="Images/fb.svg" alt="" />
            </div>
            <div>
              <img src="Images/instagram.svg" alt="" />
            </div>
            <div>
              <img src="Images/x.png" alt="X" />
            </div>
          </div>
        </div>
        <div className="flex gap-24">
          <div className="text-xs text-[#464454] font-[500] flex flex-col gap-1">
            <h3 className="text-black">Platform</h3>
            <h3>About us</h3>
            <h3>Services</h3>
            <h3>Pricing</h3>
          </div>
          <div className="text-xs text-[#464454] font-[500] flex flex-col gap-1">
            <h3 className="text-black">Resources</h3>
            <h3>Privacy Policy</h3>
            <h3>Terms</h3>
          </div>
          <div>
            <div className="text-xs text-[#464454] font-[500] flex flex-col gap-1">
              <h3 className="text-black">Contact info</h3>
              <h3>Delhi-NCR OFFICE</h3>
              <h3>Unit 202, 2nd Floor, EF3 Mall, Sector</h3>
              <h3>20 A, faridabad, Haryana 121002</h3>
            </div>
            <h3 className="text-xs text-[#464454] font-[500]">official@sodoservices.com</h3>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-center h-10 font-[500] text-xs">© 2024 | SoDoBusiness tech Private Limited | All Right Reserved</div>
    </>
  );
};

export default Footer;
