import Badge from "../Components/Badge";
import Card from "../Components/Card";
import Heading from "../Components/Heading";

const WhatWeCover = () => {
  return (
    <div className="mt-10">
      <Heading head="What we cover" />
      <div className="mt-6 flex gap-7 flex-shrink-0 w-full max-md:overflow-x-scroll max-md:p-2">
        <Card>
          <div className="h-64 w-72 md:h-80 md:w-auto flex flex-col justify-between p-6">
            <div className="flex justify-between items-center">
              <img src="Images/cover1.svg" alt="" />
              <h2 className="text-xl md:hidden font-semibold font-poppins pb-4">Tech</h2>
            </div>
            <div>
              <h2 className="text-3xl max-md:hidden font-semibold font-poppins pb-4">Tech</h2>
              <div className="flex flex-wrap">
                <Badge color="#fff3e6" text="Web & App development" />
                <Badge color="#fff3e6" text="Android/IOS" />
                <Badge color="#fff3e6" text="Micro controller" />
                <Badge color="#fff3e6" text="Videos" />
                <Badge color="#fff3e6" text="AI & ML" />
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="h-64 w-72 md:h-80 md:w-auto  flex flex-col justify-between p-6">
            <div className="flex justify-between items-center">
              <img src="Images/cover2.svg" alt="" />
              <h2 className="text-xl md:hidden font-semibold font-poppins pb-4">
                Design
              </h2>
            </div>
            <div>
              <h2 className="text-3xl max-md:hidden font-semibold font-poppins pb-4">
                Design
              </h2>
              <div className="flex flex-wrap">
                <Badge color="#e6f0ff" text="UI/UX" />
                <Badge color="#e6f0ff" text="Graphics" />
                <Badge color="#e6f0ff" text="Illustrations" />
                <Badge color="#e6f0ff" text="Logo" />
                <Badge color="#e6f0ff" text="Social Media Creatives" />
                <Badge color="#e6f0ff" text="Videos" />
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="h-64 w-72 md:h-80 md:w-auto  flex flex-col justify-between p-6">
            <div className="flex justify-between items-center">
              <img src="Images/cover3.svg" alt="" />
              <h2 className="text-xl md:hidden font-semibold font-poppins pb-4">
                Marketing
              </h2>
            </div>
            <div>
              <h2 className="text-3xl max-md:hidden font-semibold font-poppins pb-4">
                Marketing
              </h2>
              <div className="flex flex-wrap">
                <Badge color="#e8e6ff" text="SEO" />
                <Badge color="#e8e6ff" text="SMM" />
                <Badge color="#e8e6ff" text="Content Marketing" />
                <Badge color="#e8e6ff" text="Paid Ad Campaigns" />
                <Badge color="#e8e6ff" text="Marketing Strategy" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WhatWeCover;
