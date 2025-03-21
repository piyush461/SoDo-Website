import { useState } from "react";
import Hero from './Hero.jsx';
import TransformHiring from './TransformHiring.jsx';
import WhatWeDo from "./WhatWeDo.jsx";
import OurServices from "./OurServices.jsx";
import ForIT from "./ForIT";
import WhatWeCover from "./WhatWeCover.jsx";
import Timeline from "./Timeline.jsx";
import Testimonials from "./Testimonials.jsx";
import Header from "../Components/Header.jsx";
import Menu from '../Components/Menu.jsx';
import OurModels from './OurModels.jsx';
import Faq from './Faq.jsx';
import ContactUs from "./ContactUs.jsx";
import Footer from "./Footer.jsx";

function Home() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="px-20 overflow-hidden max-md:px-7">
        <Hero/>
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
  )
}

export default Home