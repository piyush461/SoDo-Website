import { Swiper, SwiperSlide } from "swiper/react";
import Badge from "../Components/Badge";
import Card from "../Components/Card";
import Heading from "../Components/Heading";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const WhatWeCover = () => {
  const it = [
    "Software Developer",
    "Full Stack",
    "Frontend",
    "Backend",
    "MERN Stack",
    "MEAN Stack",
    "DevOps",
    "AI/ML",
    "QA",
    "Cloud",
  ];

  const nonIt = [
    "HR",
    "Sales",
    "Marketing",
    "Business Development",
    "Talent Acquisition",
    "Logistics",
    "Supply Chain",
    "Operations",
    "Client Success",
  ];

  const exeRoles = [
    "CEO",
    "COO",
    "CTO",
    "CMO",
    "CFO",
    "Director",
    "VP",
    "AVP",
    "Lead",
    "Head",
  ];

  return (
    <div className="mt-16">
      <Heading head="Hiring Roles" />
      <div className="md:mt-6 -mt-8 w-full max-md:p-2 md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="w-full relative p-4 h-80 max-w-4xl m-10">
          <SwiperSlide className="flex justify-center p-2">
            <Card>
              <div className="h-64 w-full flex flex-col justify-between p-6">
                <div className="flex justify-between items-center">
                  <img className="h-14" src="Images/code.png" alt="" />
                  <h2 className="text-2xl font-semibold font-poppins">IT</h2>
                </div>
                <div className="flex flex-1 flex-col justify-end">
                  <div className="flex flex-wrap ">
                    {it.map((role) => (
                      <Badge key={role} color="#4085FB" text={role} />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-2">
            <Card>
              <div className="h-64 w-full flex flex-col justify-between p-6">
                <div className="flex justify-between items-center">
                  <img className="h-16" src="Images/present.png" alt="" />
                  <h2 className="text-2xl font-semibold font-poppins">
                    Non-IT
                  </h2>
                </div>
                <div className="flex flex-1 flex-col md:justify-between justify-end">
                  <div className="flex flex-wrap ">
                    {nonIt.map((role) => (
                      <Badge key={role} color="#C76995" text={role} />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center p-2">
            <Card>
              <div className="h-64 w-full flex flex-col justify-between p-6">
                <div className="flex justify-between w-full items-center">
                  <img className="h-14" src="Images/speech.png" alt="" />
                  <h2 className="text-2xl md:hidden font-semibold font-poppins">
                    Leadership Hiring
                  </h2>
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <div className="flex flex-wrap">
                    {exeRoles.map((role) => (
                      <Badge key={role} color="#9354FF" text={role} />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-6 flex gap-7 w-full max-md:hidden">
        <div className="flex-1">
          <Card>
            <div className="h-64 w-72 md:h-80 md:w-auto flex flex-col justify-between p-6">
              <div className="flex justify-between items-center">
                <img className="h-14" src="Images/code.png" alt="" />
                <h2 className="text-[25px] font-semibold font-poppins py-4">IT</h2>
              </div>
              <div className="flex flex-1 flex-col justify-end pb-5">
                <div className="flex flex-wrap ">
                  {it.map((role) => (
                    <Badge key={role} color="#4085FB" text={role} />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex-1">
          <Card>
            <div className="h-80 w-auto flex flex-col justify-between p-6">
              <div className="flex justify-between items-center">
                <img className="h-14" src="Images/present.png" alt="" />
                <h2 className="text-[25px] font-semibold font-poppins py-4">
                  Non-IT
                </h2>
              </div>
              <div className="flex flex-1 flex-col justify-end pb-5">
                <div className="flex flex-wrap ">
                  {nonIt.map((role) => (
                    <Badge key={role} color="#C76995" text={role} />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex-1">
          <Card>
            <div className="h-80 w-auto  flex flex-col justify-between p-6">
              <div className="flex justify-between items-center">
                <img className="h-14" src="Images/speech.png" alt="" />
                <h2 className="text-[25px] font-semibold font-poppins py-4">
                  Leadership Hiring
                </h2>
              </div>
              <div className="flex flex-1 flex-col justify-center mt-5">
                <div className="flex flex-wrap">
                  {exeRoles.map((role) => (
                    <Badge key={role} color="#9354FF" text={role} />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhatWeCover;
