import { useState } from "react";
import Header from "./Components/Header";
import ContactUs from "./Sections/ContactUs";
import Faq from "./Sections/Faq";
import Footer from "./Sections/Footer";
import ForIT from "./Sections/ForIT";
import Hero from "./Sections/Hero";
import OurModels from "./Sections/OurModels";
import OurServices from "./Sections/OurServices";
import Testimonials from "./Sections/Testimonials";
import Timeline from "./Sections/Timeline";
import TransformHiring from "./Sections/TransformHiring";
import WhatWeCover from "./Sections/WhatWeCover";
import WhatWeDo from "./Sections/WhatWeDo";
import Menu from "./Components/Menu";

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="px-20 overflow-hidden max-md:px-7">
        <Hero />
        <TransformHiring />
        <WhatWeDo />
        <OurServices />
        <ForIT />
        <WhatWeCover />
        <Timeline />
        <Testimonials />
        <OurModels />
        <Faq />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default App;
