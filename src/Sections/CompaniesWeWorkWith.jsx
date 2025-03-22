import React from "react";
import Heading from "../Components/Heading.jsx";

function CompaniesWeWorkWith() {
  return (
    <div className="w-full">
      <center>
        <Heading head="Companies we work with" />
      </center>
      <div>
        <div className="flex h-40 max-md:h-96 max-md:justify-around max-md:flex-wrap justify-between items-center mt-12 mb-20 bg-white mix-blend-multiply">
          <div>
            <img
              className="h-12 w-auto"
              src="Images\ClientLogo2.webp"
              alt=""
            />
          </div>
          <div className="w-32">
            <img
              className="h-28 object-cover w-fit"
              src="Images\ClientLogo1.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-20 w-auto"
              src="Images\clientLogo3.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-12 max-md:h-9 w-auto"
              src="Images\clientLogo4.svg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-32 max-md:h-28 w-auto"
              src="Images\ClientLogo5.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-20 max-md:h-24 w-auto"
              src="Images\ClientLogo6.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompaniesWeWorkWith;
