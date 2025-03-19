const Header = ({ isOpen, setIsOpen }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
      <nav className="w-full h-20 !z-50 bg-white flex items-center justify-between px-20 max-md:px-7">
        <div className="flex gap-4 font-poppins text-md">
          <img className="mr-8 " src="Images/logo.svg" alt="Logo" />
          <h2 className="navs max-md:hidden mt-1 text-black">
            <a href="#companies">For MNCs</a>
          </h2>
          <h2 className="navs mt-1 text-black max-md:hidden">
            <a href="#mncs">For Enterprises</a>
          </h2>
          <h2 className="navs mt-1 text-black max-md:hidden">
            <a href="#startups">For Companies</a>
          </h2>
        </div>
        <div className="md:hidden h-fit w-7">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col h-7 w-full justify-around"
          >
            <div
              className={`w-full h-[2.7px] rounded-md bg-gray-800 transition-all ease-in-out  ${
                isOpen ? "animate-crossLeft" : "animate-crossLeftReverse"
              }`}
            ></div>
            <div
              className={`w-full h-[2.7px] rounded-md bg-gray-800 transform transition-all ease  ${
                isOpen ? 'animate-crossRight':'animate-crossRightReverse'
              }`}
            ></div>
          </button>
        </div>
        <div className="flex gap-6 mt-1 font-poppins max-md:hidden">
          <h2 className="navs">
            <button onClick={() => scrollToSection("ourServices")}>Offerings</button>
          </h2>
          <h2 className="navs">
            <button onClick={() => scrollToSection("timeline")}>Process</button>
          </h2>
          <h2 className="navs">
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </h2>
        </div>
      </nav>
  );
};

export default Header;
