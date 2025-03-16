const Header = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-between border px-20  max-md:px-7">
      <div className="flex gap-6 font-poppins text-md">
        <img className="mr-8" src="Images/logo.svg" alt="" />
        <h2 className="navs max-md:hidden">
          <a>For Companies</a>
        </h2>
        <h2 className="navs max-md:hidden">
          <a>For MNCs</a>
        </h2>
        <h2 className="navs max-md:hidden">
          <a>For Startups</a>
        </h2>
      </div>
      <div className="md:hidden h-full w-11 flex justify-center items-center">
        <button className="flex flex-col h-7 w-full justify-between">
          <div className="w-full h-[4px] bg-blue-400"></div>
          <div className="w-full h-[4px] bg-blue-400"></div>
        </button>
      </div>
      <div className="flex gap-6 font-poppins max-md:hidden">
        <h2 className="navs">
          <a href="#ourServices">Our Services</a>
        </h2>
        <h2 className="navs">
          <a href="#timeline">Our Process </a>
        </h2>
        <h2 className="navs">
          <a href="#contact">Contact</a>
        </h2>
      </div>
    </nav>
  );
};

export default Header;
