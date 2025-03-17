import React from "react";

function Menu({ isOpen, setIsOpen }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div
      className={`h-44 w-full z-10 absolute bg-white shadow-lg font-[400] transition-all ease duration-500  flex flex-col justify-around ${
        isOpen ? "top-20 left-0" : "top-20 -left-[100%]"
      }`}>
      <button className={`transition-all ease duration-200 text-xl ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => {
        setIsOpen(!isOpen)
        scrollToSection("ourServices")}}>
        Our Services
      </button>
      <button className={`transition-all ease duration-200 text-xl ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => {
        setIsOpen(!isOpen)
        scrollToSection("timeline")}}>Our Process</button>
      <button className={`transition-all ease duration-200 text-xl ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => {
        setIsOpen(!isOpen)
        scrollToSection("contact")}}>Contact</button>
    </div>
  );
}

export default Menu;
