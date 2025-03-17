const Header = ({ isOpen, setIsOpen }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
      <nav className="w-full h-20 !z-50 bg-white flex items-center justify-between px-20 max-md:px-7">
        <div className="flex gap-6 font-poppins text-md">
          <img className="mr-8" src="Images/logo.svg" alt="Logo" />
          <h2 className="navs max-md:hidden">
            <a href="#companies">For Companies</a>
          </h2>
          <h2 className="navs max-md:hidden">
            <a href="#mncs">For MNCs</a>
          </h2>
          <h2 className="navs max-md:hidden">
            <a href="#startups">For Startups</a>
          </h2>
        </div>
        <div className="md:hidden h-full w-8 flex justify-center items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col h-9 w-full justify-around"
          >
            <div
              className={`w-full h-[3px] rounded-md bg-black transform origin-bottom-left transition-all ease 100 ${
                isOpen
                  ? "rotate-[45deg] -translate-x-[2px] -translate-y-[5px]"
                  : "rotate-0 translate-x-0 translate-y-0"
              }`}
            ></div>
            <div
              className={`w-full h-[3px] rounded-md bg-black transform origin-bottom-left transition-all ease 100 ${
                isOpen ? "-rotate-[45deg]" : "rotate-0"
              }`}
            ></div>
          </button>
        </div>
        <div className="flex gap-6 font-poppins max-md:hidden">
          <h2 className="navs">
            <button onClick={() => scrollToSection("ourServices")}>Our Services</button>
          </h2>
          <h2 className="navs">
            <button onClick={() => scrollToSection("timeline")}>Our Process</button>
          </h2>
          <h2 className="navs">
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </h2>
        </div>
      </nav>
  );
};

export default Header;
