import { useEffect } from "react";
import Step from "../Components/Step";
import Card from "../Components/Card";
import Badge from "../Components/Badge";

const Timeline = () => {
  useEffect(() => {
    const handleScroll = () => {
      const balls = document.querySelectorAll(".ball");
      const lines = document.querySelectorAll(".line");
      const viewportCenter = window.innerHeight / 2;

      balls.forEach((ball) => {
        const ballRect = ball.getBoundingClientRect();
        ball.style.opacity = ballRect.top < viewportCenter ? "100%" : "20%";
      });

      lines.forEach((line) => {
        const lineRect = line.getBoundingClientRect();
        line.style.opacity = lineRect.top+10 < viewportCenter ? "100%" : "20%";
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="timeline" className="pt-20 flex justify-center items-start mt-28 w-full gap-9">
      <div className="flex flex-col">
        <div>
          <Step
            stepno="STEP 1"
            head="Define your needs"
            desc="Begin by specifying your hiring criteria. We love details - roles, skills, experience level, and expectations."
          />
        </div>
        <div className="mt-52">
          <Card>
            <div className="flex justify-between p-4 m-4 border-2 border-[#E8E6FF] rounded-[20px] gap-24">
              <div className="flex gap-2">
                <div>
                  <img className="h-14" src="Images/jasmine.jpg" alt="" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] font-poppins">
                    Jasmine Taylor
                  </h4>
                  <h4 className="font-roboto text-[11.5px]">
                    Product Designer
                  </h4>
                </div>
              </div>
              <div className="text-[11px] font-roboto bg-[#E8E6FF] h-fit px-2 py-1 rounded-[30px]">
                {" "}
                <span className="font-semibold pr-1">90%</span>match
              </div>
            </div>
            <div className="flex justify-between p-4 gap-24 m-4 border-2 border-[#E8E6FF] rounded-[20px]">
              <div className="flex gap-2">
                <div>
                  <img src="Images/jordon.svg" alt="" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] font-poppins">
                    Jordan Blake
                  </h4>
                  <h4 className="font-roboto text-[11.5px]">
                    User Experience designer
                  </h4>
                </div>
              </div>
              <div className="text-[11px] font-roboto bg-[#E8E6FF] h-fit px-2 py-1 rounded-[30px]">
                {" "}
                <span className="font-semibold pr-1">85%</span>match
              </div>
            </div>
          </Card>
        </div>
        <div className="mt-32">
          <Step
            stepno="STEP 3"
            head="Select with confidence"
            desc="Schedule interviews with your preferred talent or resources and trust SoDo for end-to-end HR support for a smooth and productive recruitment experience."
          />
        </div>
      </div>
      <div className="flex w-16 flex-col gap-2 items-center">
        <div>
          <img
            className="ball opacity-20"
            src="Images/graBall.svg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[250px] line opacity-20 rotate-180"
            src="Images/timelineHr.svg"
            alt=""
          />
        </div>
        <div>
          <img
            className="mt-1 opacity-20 ball"
            src="Images/graBall.svg"
            alt=""
          />
        </div>
        <div>
          <img
            className="mt-1 h-[355px] opacity-20 line rotate-180"
            src="Images/timelineHr.svg"
            alt=""
          />
        </div>
        <div>
          <img
            className="mt-1 opacity-20 ball"
            src="Images/graBall.svg"
            alt=""
          />
        </div>
        <div>
          <img
            className="mt-1 h-76 opacity-20 line rotate-180"
            src="Images/timelineHr.svg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <Card>
            <div className="flex flex-col gap-9 p-7">
              <div className="flex gap-24">
                <h2 className="text-[18px] font-[500] font-poppins text-nowrap">
                  Product Designer
                </h2>
                <div className="flex gap-2">
                  <div className="text-[11px] font-roboto border-[1px] border-[#00ffff61] px-2 py-[2px] h-fit text-nowrap rounded-[50px] ">
                    remote
                  </div>
                  <div className="text-[11px] font-roboto border-[1px] border-[#00ffff61] px-2 py-[2px] h-fit text-nowrap rounded-[50px] ">
                    contract
                  </div>
                  <div className="text-[11px] font-roboto border-[1px] border-[#00ffff61] px-2 py-[2px] h-fit text-nowrap rounded-[50px] ">
                    full-time
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-[90%]">
                <Badge text="User Interface Design" color="#e6f0ff" />
                <Badge text="Visual Communication" color="#e6f0ff" />
                <Badge text="Digital Artwork" color="#e6f0ff" />
                <Badge text="Brand Identity Design" color="#e6f0ff" />
                <Badge text="Motion Graphics Production" color="#e6f0ff" />
              </div>
            </div>
          </Card>
        </div>
        <div className="mt-[106px]">
          <Step
            stepno="STEP 2"
            head="Receive screened profiles"
            desc="We'll provide you with a handful of top-quality profiles, multi-layer screened and vetted from our multi-dimensional aggregated network, perfectly aligned with your job description."
          />
        </div>
        <div className="flex mt-[270px] justify-center h-56 gap-3">
          <Card>
            <div className="flex flex-col items-center h-60 p-5 px-[27px]">
              <img className="h-[86px]" src="Images/jasmine.jpg" alt="" />
              <h1 className="font-poppins text-lg mt-2 font-bold">
                Jasmine Taylor
              </h1>
              <h3 className="text-xs mb-4 font-roboto font-[400]">
                Product Designer
              </h3>
              <div className="bg-[#e8e6ff] font-[400] font-roboto text-[10px] p-2 px-3 rounded-lg w-fit">
                Onboarding
              </div>
            </div>
          </Card>
          <Card>
            <div className="overflow-hidden relative">
              <img
                className="scale-95  absolute top-4"
                src="Images/graph1.svg"
                alt=""
              />
              <img className="scale-95 pt-20" src="Images/graph2.svg" alt="" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
