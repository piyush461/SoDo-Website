import { Link } from "react-router-dom";
import Heading from "../../src/Components/Heading";

const recognitions = [
  { img: "Images/Recog1.webp", link: "https://www.linkedin.com/posts/inc42_entrepreneurs-zomato-leadership-activity-7148256005691195392-z0Fh/" },
  { img: "Images/Recog2.svg", link: "https://yourstory.com/2020/11/supreme-incubator-startups-bootstrapped-growth" },
  { img: "Images/Recog3.png", link: "" },
  { img: "Images/Recog4.jpg", link: "" },
  { img: "Images/Recog5.jpg", link: " https://www.supremeincubator.com/demoday" },
  { img: "Images/Recog6.png", link: "https://thedailyguardian.com/india/when-budding-startups-share-innovative-ideas-with-panellists/amp/" },
  { img: "Images/Recog7.svg", link: "https://medium.com/design-bootcamp/ux-case-study-a-b2b-landing-page-re-design-ec6adbacdcfc" },
];

function OurRecognitions() {
  return (
    <div className="mt-24">
      <center>
        <Heading head="Our Recognitions" />
      </center>
      <div className="flex md:justify-between justify-around gap-6 max-md:flex-wrap items-center mt-14 h-auto ">
        {recognitions.map((recog, index) => (
          <div key={index} className={`relative max-md:h-36 max-md:w-36 h-32 w-32 group cursor-pointer overflow-hidden ${index == 0 ? 'px-0' : index == 5 ? 'px-2' : 'px-1'}`}>
            <div className="absolute transform translate-y-[100%] transition-transform ease group-hover: h-full w-full bg-black bg-opacity-65 flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2">
              <Link
              target="_blank"
                className="hover:underline-offset-4 hover:underline text-md text-nowrap font-[500] hover:text-blue-300 text-white"
                to={recog.link}
              >
                Read More↗
              </Link>
            </div>
            <img className={`w-full h-full ${index == 0 ? 'object-cover' : 'object-contain'}`} src={recog.img} alt="Recognition" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurRecognitions;
