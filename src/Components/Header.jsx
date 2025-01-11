const Header = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-between">
      <div className="flex gap-6 font-poppins text-md">
        <img className="mr-8" src="Images/logo.svg" alt="" />
        <h2 className="navs">
          <a >For Companies</a>
        </h2>
        <h2 className="navs">
          <a >For MNCs</a>
        </h2>
        <h2 className="navs">
          <a >For Startups</a>
        </h2>
        
      </div>
      <div className="flex gap-6 font-poppins">
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
