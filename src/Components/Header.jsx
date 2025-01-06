const Header = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-between">
      <div className="flex gap-6 font-roboto text-md">
        <img className="mr-8" src="Images/logo.svg"alt="" />
        <h2 className="navs">For companies</h2>
        <h2 className="navs">For Startups</h2>
        <h2 className="navs">For MNCs</h2>
      </div>
      <div className="flex gap-6 ">
        <h2 className="navs">How It Works</h2>
        <h2 className="navs">Our Services</h2>
        <h2 className="navs">Contact</h2>
      </div>
    </nav>
  );
};

export default Header;
