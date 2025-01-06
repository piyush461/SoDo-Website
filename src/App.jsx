import ContactUs from "./Sections/ContactUs"
import Faq from "./Sections/Faq"
import Footer from "./Sections/Footer"
import ForIT from "./Sections/ForIT"
import Hero from "./Sections/Hero"
import OurModels from "./Sections/OurModels"
import OurServices from "./Sections/OurServices"
import Testimonials from "./Sections/Testimonials"
import Timeline from "./Sections/Timeline"
import TransformHiring from "./Sections/TransformHiring"
import WhatWeCover from "./Sections/WhatWeCover"
import WhatWeDo from "./Sections/WhatWeDo"

const App = () => {
  return (
    <div className="pl-20 pr-16 overflow-hidden">
      <Hero/>
      <TransformHiring/>
      <WhatWeDo/>
      <OurServices/>
      <ForIT/>
      <WhatWeCover/>
      <Timeline/>
      <Testimonials/>
      <OurModels/>
      <Faq/>
      <ContactUs />
      <Footer/>
    </div>
  )
}

export default App